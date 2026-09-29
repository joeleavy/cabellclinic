import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Informational only: the site sets no tracking cookies, so there is nothing
// to accept or reject. Shown once per browser; dismissal is remembered in
// localStorage (wrapped in try/catch — private windows may block it).
const STORAGE_KEY = "cabell-cookie-notice-dismissed";

const CookieNotice = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const dismiss = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // Nothing to do — the notice will simply show again next visit.
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie notice"
      className="fixed inset-x-0 bottom-0 z-50 bg-navy text-soft-white shadow-lg"
    >
      <div className="container-wide py-4 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
        <p className="text-sm text-soft-white/80 leading-relaxed flex-grow">
          This site uses only essential cookies and does not track you. See our{" "}
          <Link to="/privacy" className="underline hover:text-soft-white">
            Privacy Policy
          </Link>{" "}
          for details.
        </p>
        <Button
          type="button"
          onClick={dismiss}
          variant="clinic-outline"
          size="sm"
          className="self-start sm:self-auto border-soft-white/40 text-soft-white hover:bg-soft-white hover:text-navy"
        >
          Got it
        </Button>
      </div>
    </div>
  );
};

export default CookieNotice;
