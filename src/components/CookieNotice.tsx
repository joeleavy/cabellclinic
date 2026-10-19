import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { applyConsent, loadGoogleTag, storedConsent, trackingEnabled, REOPEN_EVENT } from "@/lib/googleTag";

// Cookie bar. Two modes, decided by whether a Google tag ID is configured:
//
//  - tracking enabled: a real Accept / Decline choice. The Google tag is loaded
//    either way with consent defaulted to denied; Accept upgrades it.
//  - tracking disabled: the informational notice the site has always shown
//    ("essential cookies only"), with a single Got it.
//
// Either way the choice is remembered per browser in localStorage (wrapped in
// try/catch — private windows may block it) and the bar is not shown again.
const DISMISSED_KEY = "cabell-cookie-notice-dismissed";

const CookieNotice = () => {
  const [visible, setVisible] = useState(false);
  const tracking = trackingEnabled();

  useEffect(() => {
    loadGoogleTag();
    try {
      const decided = tracking ? storedConsent() !== null : Boolean(localStorage.getItem(DISMISSED_KEY));
      if (!decided) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, [tracking]);

  // "Cookie settings" links (both footers) reopen the bar so a choice can be changed.
  useEffect(() => {
    const reopen = () => setVisible(true);
    window.addEventListener(REOPEN_EVENT, reopen);
    return () => window.removeEventListener(REOPEN_EVENT, reopen);
  }, []);

  const decide = (choice: "granted" | "denied") => {
    applyConsent(choice);
    try {
      localStorage.setItem(DISMISSED_KEY, "1");
    } catch {
      // Nothing to do — the notice will simply show again next visit.
    }
    setVisible(false);
  };

  if (!visible) return null;

  const buttonBase = "self-start sm:self-auto border-soft-white/40 text-soft-white hover:bg-soft-white hover:text-navy";

  return (
    <div
      role="region"
      aria-label="Cookie notice"
      className="fixed inset-x-0 bottom-0 z-50 bg-navy text-soft-white shadow-lg"
    >
      <div className="container-wide py-4 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
        <p className="text-sm text-soft-white/80 leading-relaxed flex-grow">
          {tracking ? (
            <>
              We use essential cookies, plus optional Google cookies that help us
              understand how people find the site. See our{" "}
              <Link to="/privacy" className="underline hover:text-soft-white">Privacy Policy</Link>.
            </>
          ) : (
            <>
              This site uses only essential cookies and does not track you. See our{" "}
              <Link to="/privacy" className="underline hover:text-soft-white">Privacy Policy</Link>{" "}
              for details.
            </>
          )}
        </p>
        {tracking ? (
          <div className="flex gap-3">
            <Button type="button" onClick={() => decide("denied")} variant="clinic-outline" size="sm" className={buttonBase}>
              Decline
            </Button>
            <Button type="button" onClick={() => decide("granted")} variant="clinic-outline" size="sm" className={buttonBase}>
              Accept
            </Button>
          </div>
        ) : (
          <Button type="button" onClick={() => decide("denied")} variant="clinic-outline" size="sm" className={buttonBase}>
            Got it
          </Button>
        )}
      </div>
    </div>
  );
};

export default CookieNotice;
