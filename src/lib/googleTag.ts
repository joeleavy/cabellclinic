// Google tag (Google Ads conversion tracking), loaded consent-first.
//
// The tag ID comes from VITE_GOOGLE_TAG_ID (e.g. "AW-123456789"). When it is
// unset — local dev, or before the ads account exists — none of this runs and
// the site behaves exactly as it did with no tracking at all.
//
// Consent mode: every storage type defaults to DENIED before the tag loads.
// Google then counts conversions only in aggregate/modelled form and sets no
// advertising cookies. Only an explicit "Accept" on the cookie bar upgrades
// consent to granted. "Decline" leaves it denied (and still counts
// cookielessly). Both choices are remembered per browser.

export const GOOGLE_TAG_ID: string | undefined = import.meta.env.VITE_GOOGLE_TAG_ID;
export const CONSENT_STORAGE_KEY = "cabell-cookie-consent"; // "granted" | "denied"

/** Fired (on window) by "Cookie settings" links to reopen the cookie bar. */
export const REOPEN_EVENT = "cabell:cookie-settings";
export const openCookieSettings = (): void => {
  window.dispatchEvent(new Event(REOPEN_EVENT));
};

type Gtag = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
  }
}

let loaded = false;

const gtag: Gtag = (...args) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(args);
};

export const trackingEnabled = (): boolean => Boolean(GOOGLE_TAG_ID);

export const storedConsent = (): "granted" | "denied" | null => {
  try {
    const v = localStorage.getItem(CONSENT_STORAGE_KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
};

/** Load the tag once, with consent defaulted to denied. Safe to call repeatedly. */
export function loadGoogleTag(): void {
  if (!GOOGLE_TAG_ID || loaded || typeof window === "undefined") return;
  loaded = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = gtag;
  gtag("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
    wait_for_update: 500,
  });
  gtag("js", new Date());
  gtag("config", GOOGLE_TAG_ID, { anonymize_ip: true });
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GOOGLE_TAG_ID)}`;
  document.head.appendChild(s);
  if (storedConsent() === "granted") applyConsent("granted");
}

export function applyConsent(choice: "granted" | "denied"): void {
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, choice);
  } catch {
    // Private window — the choice simply won't persist.
  }
  if (!GOOGLE_TAG_ID) return;
  window.gtag?.("consent", "update", {
    ad_storage: choice,
    ad_user_data: choice,
    ad_personalization: choice,
    analytics_storage: choice,
  });
}

/**
 * Record an Ads conversion. `label` is the conversion action's label from
 * Google Ads ("AW-123456789/AbCdEfGhIj"). Falls back to a plain event when
 * only the tag ID is configured, which Google Ads can still pick up as a
 * page-view-based conversion.
 */
export function trackConversion(label?: string): void {
  if (!GOOGLE_TAG_ID || typeof window === "undefined") return;
  const send_to = label && label.includes("/") ? label : GOOGLE_TAG_ID;
  window.gtag?.("event", "conversion", { send_to });
}
