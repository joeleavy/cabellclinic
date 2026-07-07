/// <reference types="@cloudflare/workers-types" />
import { EmailMessage } from "cloudflare:email";
// The browser build avoids Node-only imports (path/fs) that the default
// entry pulls in via mime-types.
import { createMimeMessage, Mailbox } from "mimetext/browser";

interface Env {
  CONTACT_EMAIL: SendEmail;
  FROM_EMAIL: string;
  TO_EMAIL: string;
}

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
};

const MAX_LENGTHS: Record<keyof Payload, number> = {
  name: 200,
  email: 320,
  message: 10_000,
  source: 100,
};

const validate = (data: unknown): Payload | string => {
  if (typeof data !== "object" || data === null) return "Body must be JSON.";
  const record = data as Record<string, unknown>;
  for (const key of Object.keys(MAX_LENGTHS) as (keyof Payload)[]) {
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
  return {
    name: record.name as string,
    email,
    message: record.message as string,
    source: record.source as string,
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

    const msg = createMimeMessage();
    msg.setSender({ name: "Cabell Clinic Website", addr: env.FROM_EMAIL });
    msg.setRecipient(env.TO_EMAIL);
    msg.setHeader("Reply-To", new Mailbox(payload.email));
    msg.setSubject(`${payload.source} — ${payload.name}`);
    msg.addMessage({
      contentType: "text/plain",
      data: [
        `Source: ${payload.source}`,
        `Name: ${payload.name}`,
        `Email: ${payload.email}`,
        "",
        payload.message,
      ].join("\n"),
    });

    try {
      await env.CONTACT_EMAIL.send(
        new EmailMessage(env.FROM_EMAIL, env.TO_EMAIL, msg.asRaw())
      );
    } catch (err) {
      const detail = err instanceof Error ? err.message : String(err);
      return json(500, { success: false, error: detail }, origin);
    }

    return json(200, { success: true }, origin);
  },
};
