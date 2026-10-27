/// <reference types="@cloudflare/workers-types" />

interface Env {
  RESEND_API_KEY: string; // secret — set with: npx wrangler secret put RESEND_API_KEY -c workers/contact-email/wrangler.jsonc
  // Cloudflare Turnstile secret (bot check). Optional: when unset, no check
  // runs. When set, every submission must carry a valid turnstileToken.
  // Set with: npx wrangler secret put TURNSTILE_SECRET_KEY -c workers/contact-email/wrangler.jsonc
  TURNSTILE_SECRET_KEY?: string;
  FROM_EMAIL: string;
  TO_EMAIL: string;
}

const TURNSTILE_VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
// Must match the data-action / action the site's widget uses (src/lib/turnstile.ts).
const TURNSTILE_ACTION = "turnstile-spin-v1";
const TURNSTILE_TOKEN_MAX = 2048;

type TurnstileResult = { ok: true } | { ok: false; detail: string };

/** Server-side check of a Turnstile token. Never called from the browser. */
const verifyTurnstile = async (
  secret: string,
  token: string,
  remoteIp: string | null
): Promise<TurnstileResult> => {
  const form = new FormData();
  form.append("secret", secret);
  form.append("response", token);
  if (remoteIp) form.append("remoteip", remoteIp);
  let data: { success?: boolean; action?: string; "error-codes"?: string[] };
  try {
    const res = await fetch(TURNSTILE_VERIFY_URL, { method: "POST", body: form });
    data = (await res.json()) as typeof data;
  } catch (err) {
    return { ok: false, detail: err instanceof Error ? err.message : String(err) };
  }
  if (data.success !== true) {
    return { ok: false, detail: (data["error-codes"] ?? ["unknown"]).join(",") };
  }
  if (data.action && data.action !== TURNSTILE_ACTION) {
    return { ok: false, detail: `unexpected action ${data.action}` };
  }
  return { ok: true };
};

// Origins allowed to call this endpoint. localhost is the Vite dev server;
// *.pages.dev covers Cloudflare Pages preview deployments.
const ALLOWED_ORIGINS = [
  "https://thomascabellmd.com",
  "https://www.thomascabellmd.com",
  "http://localhost:8080",
];

const isAllowedOrigin = (origin: string | null): boolean =>
  origin !== null &&
  (ALLOWED_ORIGINS.includes(origin) || origin.endsWith(".pages.dev"));

const corsHeaders = (origin: string | null): HeadersInit =>
  isAllowedOrigin(origin)
    ? {
        "Access-Control-Allow-Origin": origin as string,
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Max-Age": "86400",
        Vary: "Origin",
      }
    : { Vary: "Origin" };

const json = (
  status: number,
  body: unknown,
  origin: string | null
): Response =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", ...corsHeaders(origin) },
  });

type Payload = {
  name: string;
  email: string;
  message: string;
  source: string;
  turnstileToken?: string;
};

const MAX_LENGTHS: Record<Exclude<keyof Payload, "turnstileToken">, number> = {
  name: 200,
  email: 320,
  message: 10_000,
  source: 100,
};

const validate = (data: unknown): Payload | string => {
  if (typeof data !== "object" || data === null) return "Body must be JSON.";
  const record = data as Record<string, unknown>;
  for (const key of Object.keys(MAX_LENGTHS) as (keyof typeof MAX_LENGTHS)[]) {
    const value = record[key];
    if (typeof value !== "string" || value.trim() === "") {
      return `Missing required field: ${key}`;
    }
    if (value.length > MAX_LENGTHS[key]) {
      return `Field too long: ${key}`;
    }
  }
  const email = record.email as string;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return "Invalid email address.";
  }
  const token = record.turnstileToken;
  if (token !== undefined && token !== null) {
    if (typeof token !== "string" || token.length > TURNSTILE_TOKEN_MAX) {
      return "Invalid Turnstile token.";
    }
  }
  return {
    name: record.name as string,
    email,
    message: record.message as string,
    source: record.source as string,
    ...(typeof token === "string" && token !== "" ? { turnstileToken: token } : {}),
  };
};

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const origin = request.headers.get("Origin");
    const url = new URL(request.url);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }

    // Used by the scheduled health-check workflow.
    if (request.method === "GET" && url.pathname === "/health") {
      return json(200, { ok: true }, origin);
    }

    if (request.method !== "POST") {
      return json(405, { success: false, error: "Method not allowed" }, origin);
    }

    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return json(400, { success: false, error: "Invalid JSON" }, origin);
    }

    const payload = validate(body);
    if (typeof payload === "string") {
      return json(400, { success: false, error: payload }, origin);
    }

    // Bot check. Only enforced once the secret is configured on the Worker,
    // so the site can ship the widget first and switch the check on after.
    if (env.TURNSTILE_SECRET_KEY) {
      if (!payload.turnstileToken) {
        return json(
          403,
          { success: false, code: "turnstile_failed", error: "Bot check missing" },
          origin
        );
      }
      const check = await verifyTurnstile(
        env.TURNSTILE_SECRET_KEY,
        payload.turnstileToken,
        request.headers.get("CF-Connecting-IP")
      );
      if (!check.ok) {
        return json(
          403,
          { success: false, code: "turnstile_failed", error: `Bot check failed: ${check.detail}` },
          origin
        );
      }
    }

    if (!env.RESEND_API_KEY) {
      return json(
        500,
        { success: false, error: "RESEND_API_KEY secret is not configured" },
        origin
      );
    }

    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: `Cabell Clinic Website <${env.FROM_EMAIL}>`,
          to: [env.TO_EMAIL],
          reply_to: payload.email,
          subject: `${payload.source} — ${payload.name}`,
          text: [
            `Source: ${payload.source}`,
            `Name: ${payload.name}`,
            `Email: ${payload.email}`,
            "",
            payload.message,
          ].join("\n"),
        }),
      });
      if (!res.ok) {
        const detail = await res.text().catch(() => "");
        return json(
          500,
          { success: false, error: `Resend ${res.status}: ${detail}` },
          origin
        );
      }
    } catch (err) {
      const detail = err instanceof Error ? err.message : String(err);
      return json(500, { success: false, error: detail }, origin);
    }

    return json(200, { success: true }, origin);
  },
};
