// Cloudflare Turnstile: the bot check on every form that emails the clinic.
//
// The site key is public (it ends up in the page HTML either way). Leave
// DEFAULT_SITE_KEY empty and the forms behave exactly as before: no widget,
// no token sent. VITE_TURNSTILE_SITE_KEY overrides it for local testing with
// Cloudflare's test keys. The secret key lives only on the contact Worker
// (TURNSTILE_SECRET_KEY), which rejects submissions whose token fails.

const DEFAULT_SITE_KEY = "";

export const TURNSTILE_SITE_KEY: string =
  (import.meta.env.VITE_TURNSTILE_SITE_KEY as string | undefined) || DEFAULT_SITE_KEY;

export const TURNSTILE_ENABLED = TURNSTILE_SITE_KEY !== "";

// Telemetry marker Cloudflare uses to recognise this integration pattern.
export const TURNSTILE_ACTION = "turnstile-spin-v1";

const SCRIPT_SRC = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

type RenderOptions = {
  sitekey: string;
  action?: string;
  theme?: "light" | "dark" | "auto";
  size?: "normal" | "flexible" | "compact";
  callback?: (token: string) => void;
  "expired-callback"?: () => void;
  "error-callback"?: () => void;
};

type TurnstileApi = {
  render: (el: HTMLElement, opts: RenderOptions) => string;
  reset: (id?: string) => void;
  remove: (id: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

let loading: Promise<TurnstileApi> | null = null;

/** Loads the Turnstile script once and resolves with its API. */
export function loadTurnstile(): Promise<TurnstileApi> {
  if (typeof window === "undefined") return Promise.reject(new Error("no window"));
  if (window.turnstile) return Promise.resolve(window.turnstile);
  if (loading) return loading;
  loading = new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${SCRIPT_SRC}"]`);
    const script = existing ?? document.createElement("script");
    const poll = window.setInterval(() => {
      if (window.turnstile) {
        window.clearInterval(poll);
        resolve(window.turnstile);
      }
    }, 100);
    script.addEventListener("error", () => {
      window.clearInterval(poll);
      loading = null;
      reject(new Error("Turnstile script failed to load"));
    });
    if (!existing) {
      script.src = SCRIPT_SRC;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }
  });
  return loading;
}

const widgetIds = new Set<string>();
export const registerWidget = (id: string) => widgetIds.add(id);
export const unregisterWidget = (id: string) => widgetIds.delete(id);

/** Resets every mounted widget so a fresh token can be issued (tokens are single-use). */
export function resetTurnstile() {
  const api = typeof window !== "undefined" ? window.turnstile : undefined;
  if (!api) return;
  for (const id of widgetIds) {
    try {
      api.reset(id);
    } catch {
      // Widget already gone.
    }
  }
}
