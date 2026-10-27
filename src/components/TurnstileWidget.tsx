import { useEffect, useRef } from "react";
import {
  TURNSTILE_ACTION,
  TURNSTILE_ENABLED,
  TURNSTILE_SITE_KEY,
  loadTurnstile,
  registerWidget,
  unregisterWidget,
} from "@/lib/turnstile";

type Props = {
  /** Receives the token when the check passes, null when it expires or fails. */
  onToken: (token: string | null) => void;
  className?: string;
};

/**
 * The Cloudflare Turnstile bot check. Renders nothing when no site key is
 * configured, so forms work unchanged until Turnstile is switched on.
 */
const TurnstileWidget = ({ onToken, className = "" }: Props) => {
  const container = useRef<HTMLDivElement>(null);
  const onTokenRef = useRef(onToken);
  onTokenRef.current = onToken;

  useEffect(() => {
    if (!TURNSTILE_ENABLED || !container.current) return;
    let widgetId: string | null = null;
    let cancelled = false;
    const el = container.current;

    loadTurnstile()
      .then((api) => {
        if (cancelled) return;
        widgetId = api.render(el, {
          sitekey: TURNSTILE_SITE_KEY,
          action: TURNSTILE_ACTION,
          theme: "light",
          size: "flexible",
          callback: (token) => onTokenRef.current(token),
          "expired-callback": () => onTokenRef.current(null),
          "error-callback": () => onTokenRef.current(null),
        });
        registerWidget(widgetId);
      })
      .catch(() => onTokenRef.current(null));

    return () => {
      cancelled = true;
      if (widgetId) {
        unregisterWidget(widgetId);
        try {
          window.turnstile?.remove(widgetId);
        } catch {
          // Already removed.
        }
      }
    };
  }, []);

  if (!TURNSTILE_ENABLED) return null;
  return <div ref={container} className={className} />;
};

export default TurnstileWidget;
