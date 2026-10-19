import { useEffect, useRef, useState } from "react";

type Props = {
  /** The Calendly event URL, e.g. https://calendly.com/<account>/<event>. */
  url: string;
  /** Called once the visitor has scheduled; used to reach the thank-you page. */
  onScheduled?: () => void;
  className?: string;
};

// Calendly's inline widget, loaded lazily (when scrolled near) so the landing
// page's first paint doesn't wait on Calendly. Rendered as an empty box during
// prerender/SSR; the script fills it on the client. The `calendly.event_scheduled`
// postMessage is how we know a booking happened without any Calendly API key.
const SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";

const CalendlyEmbed = ({ url, onScheduled, className = "" }: Props) => {
  const box = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [slow, setSlow] = useState(false);

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const load = () => {
      // The script may already be in <head> from an earlier page in this
      // single-page session; the widget global is the real readiness signal.
      if ((window as unknown as { Calendly?: unknown }).Calendly) {
        setReady(true);
        return;
      }
      const existing = document.querySelector<HTMLScriptElement>(`script[src="${SCRIPT_SRC}"]`);
      if (existing) {
        existing.addEventListener("load", () => setReady(true), { once: true });
        return;
      }
      const s = document.createElement("script");
      s.src = SCRIPT_SRC;
      s.async = true;
      s.onload = () => setReady(true);
      document.head.appendChild(s);
    };
    if (!("IntersectionObserver" in window)) {
      load();
      return;
    }
    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        load();
        io.disconnect();
      }
    }, { rootMargin: "400px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!ready || !box.current) return;
    const calendly = (window as unknown as { Calendly?: { initInlineWidget: (o: object) => void } }).Calendly;
    if (!calendly) return;
    const el = box.current;
    el.innerHTML = "";
    // UTM values ride along into Calendly: they appear on each booking in
    // Kristy's Calendly notifications/exports as the source. Google's own
    // click id (gclid) is forwarded too when present, so a booking can be
    // matched back to the exact ad click.
    const gclid = new URLSearchParams(window.location.search).get("gclid");
    calendly.initInlineWidget({
      url: `${url}?hide_gdpr_banner=1&hide_landing_page_details=1&primary_color=0b2342`,
      parentElement: el,
      utm: {
        utmSource: "google",
        utmMedium: "cpc",
        utmCampaign: "preventive-cardiology",
        ...(gclid ? { utmContent: `gclid:${gclid}` } : {}),
      },
    });
    // If Calendly's page hasn't drawn after a while (blocked, offline, slow),
    // offer the direct link rather than an endless spinner.
    const timer = setTimeout(() => {
      if (el.querySelector(".calendly-spinner") && getComputedStyle(el.querySelector(".calendly-spinner")!).display !== "none") {
        setSlow(true);
      }
    }, 8000);
    return () => clearTimeout(timer);
  }, [ready, url]);

  useEffect(() => {
    if (!onScheduled) return;
    const onMessage = (e: MessageEvent) => {
      if (
        typeof e.origin === "string" &&
        e.origin.endsWith("calendly.com") &&
        e.data?.event === "calendly.event_scheduled"
      ) {
        onScheduled();
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [onScheduled]);

  return (
    <div className={className}>
      <div ref={box} className="h-[700px] w-full" aria-label="Schedule your discovery call">
        {!ready && (
          <div className="h-full flex items-center justify-center text-sm text-muted-foreground">
            Loading available times…
          </div>
        )}
      </div>
      {slow && (
        <p className="text-sm text-muted-foreground text-center mt-3">
          Taking a while to load?{" "}
          <a href={url} target="_blank" rel="noopener noreferrer" className="underline text-navy hover:text-gold">
            Open the scheduling page
          </a>{" "}
          in a new tab.
        </p>
      )}
      <noscript>
        <p className="text-sm text-muted-foreground">
          <a href={url} className="underline">Open the scheduling page</a> to pick a time.
        </p>
      </noscript>
    </div>
  );
};

export default CalendlyEmbed;
