// The Cloudflare Worker (workers/contact-email/) that emails inquiries to the
// clinic inbox. Set VITE_CONTACT_ENDPOINT in .env.local and in the Cloudflare
// Pages project's environment variables. If it's missing we don't crash the
// site — submissions just go straight to the fallback relay below.
export const CONTACT_ENDPOINT: string | undefined = import.meta.env
  .VITE_CONTACT_ENDPOINT;

export type InquiryPayload = {
  name: string;
  email: string;
  message: string;
  source: string;
};

export type SubmitResult =
  | { ok: true; via: "primary" | "fallback" }
  | { ok: false };

// Independent of Supabase on purpose: if the primary backend is down, this
// FormSubmit relay still delivers the visitor's inquiry as an email, flagged
// as an alert so we know the backend needs attention. The address must be
// activated once with FormSubmit (they email a confirmation link) before
// messages are delivered.
const FALLBACK_RELAY_URL = "https://formsubmit.co/ajax/joseph.leavy@gmail.com";

const REQUEST_TIMEOUT_MS = 15_000;

const timeoutSignal = (ms: number): AbortSignal => {
  const controller = new AbortController();
  setTimeout(() => controller.abort(), ms);
  return controller.signal;
};

/**
 * Submits a visitor inquiry to the contact-email Worker. If that fails for
 * any reason (worker error, network, endpoint not configured), the same
 * inquiry is re-sent through the fallback relay so the lead is not lost and
 * the team is alerted to the backend failure. Only returns ok: false when
 * BOTH channels fail — callers should then point the visitor at the direct
 * email address.
 */
export async function submitInquiry(
  payload: InquiryPayload
): Promise<SubmitResult> {
  let failureDetail = "VITE_CONTACT_ENDPOINT is not configured";

  if (CONTACT_ENDPOINT) {
    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: timeoutSignal(REQUEST_TIMEOUT_MS),
      });
      const data = await res.json().catch(() => null);
      if (res.ok && data?.success === true) {
        return { ok: true, via: "primary" };
      }
      failureDetail = `HTTP ${res.status}${
        data?.error ? ` — ${String(data.error)}` : ""
      }`;
    } catch (err) {
      failureDetail = err instanceof Error ? err.message : String(err);
    }
  }

  try {
    const res = await fetch(FALLBACK_RELAY_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        _subject: `[ALERT] Cabell Clinic form backend failed — lead captured (${payload.source})`,
        backend_error: failureDetail,
        page: typeof window !== "undefined" ? window.location.href : "",
        ...payload,
      }),
      signal: timeoutSignal(REQUEST_TIMEOUT_MS),
    });
    const data = await res.json().catch(() => null);
    if (res.ok && (data?.success === true || data?.success === "true")) {
      return { ok: true, via: "fallback" };
    }
  } catch {
    // Both channels down — fall through.
  }

  return { ok: false };
}
