// Which social platform brought a visitor to /book.
//
// Each platform bio links to its own short address (see public/_redirects):
//   thomascabellmd.com/instagram (or /ig) -> /book?from=instagram
//   thomascabellmd.com/facebook  (or /fb) -> /book?from=facebook
//   thomascabellmd.com/youtube   (or /yt) -> /book?from=youtube
// The booking page reads ?from=, remembers it for the session, and removes it
// from the address bar so the visitor just sees /book. If someone arrives at
// /book directly, the referrer is used as a fallback (in-app browsers often
// strip it, which is why the links exist).
//
// The platform name is attached to the Calendly booking as utm_source and to
// the fallback form's inbox tag. It is a marketing label only; nothing about
// the visitor's health is involved.

export type SocialPlatform = "instagram" | "facebook" | "youtube";

export const PLATFORM_LABEL: Record<SocialPlatform, string> = {
  instagram: "Instagram",
  facebook: "Facebook",
  youtube: "YouTube",
};

const PLATFORMS: SocialPlatform[] = ["instagram", "facebook", "youtube"];
const STORAGE_KEY = "cabell-social-source";
const QUERY_PARAM = "from";

const REFERRER_HOSTS: [RegExp, SocialPlatform][] = [
  [/(^|\.)instagram\.com$/i, "instagram"],
  [/(^|\.)(facebook|fb)\.com$/i, "facebook"],
  [/(^|\.)(youtube\.com|youtu\.be)$/i, "youtube"],
];

const isPlatform = (value: string | null): value is SocialPlatform =>
  value !== null && (PLATFORMS as string[]).includes(value);

const remember = (platform: SocialPlatform) => {
  try {
    window.sessionStorage.setItem(STORAGE_KEY, platform);
  } catch {
    // Private browsing or blocked storage; the value still applies to this page view.
  }
};

const recall = (): SocialPlatform | null => {
  try {
    const stored = window.sessionStorage.getItem(STORAGE_KEY);
    return isPlatform(stored) ? stored : null;
  } catch {
    return null;
  }
};

const fromReferrer = (): SocialPlatform | null => {
  if (!document.referrer) return null;
  try {
    const host = new URL(document.referrer).hostname;
    const match = REFERRER_HOSTS.find(([pattern]) => pattern.test(host));
    return match ? match[1] : null;
  } catch {
    return null;
  }
};

/** Works out the platform for this visit. Safe to call during render (no DOM writes). */
export function resolveSocialPlatform(): SocialPlatform | null {
  if (typeof window === "undefined") return null;
  const fromQuery = new URLSearchParams(window.location.search).get(QUERY_PARAM);
  if (isPlatform(fromQuery)) {
    remember(fromQuery);
    return fromQuery;
  }
  const stored = recall();
  if (stored) return stored;
  const referred = fromReferrer();
  if (referred) remember(referred);
  return referred;
}

/** Removes ?from= from the address bar so the visitor sees a clean /book. Call from an effect. */
export function stripSourceFromUrl() {
  if (typeof window === "undefined") return;
  const url = new URL(window.location.href);
  if (!url.searchParams.has(QUERY_PARAM)) return;
  url.searchParams.delete(QUERY_PARAM);
  window.history.replaceState(window.history.state, "", url.pathname + url.search + url.hash);
}
