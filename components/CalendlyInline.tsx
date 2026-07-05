"use client";

import { useEffect, useRef } from "react";
import { CALENDLY_URL, CALENDLY_THEME } from "./Calendly";

export function CalendlyInline() {
  const inlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    let tries = 0;
    const mount = () => {
      if (cancelled) return;
      tries++;
      const el = inlineRef.current;
      if (window.Calendly && el && !el.dataset.mounted) {
        window.Calendly.initInlineWidget({
          url: `${CALENDLY_URL}?hide_event_type_details=0&${CALENDLY_THEME}`,
          parentElement: el,
        });
        el.dataset.mounted = "1";
      } else if (tries < 40) {
        setTimeout(mount, 150);
      }
    };
    mount();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="contact-cal-embed" ref={inlineRef} aria-label="Calendly scheduler">
      <div className="contact-cal-fallback">
        <div className="mono">Loading scheduler…</div>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener"
          className="btn btn-primary"
          style={{ marginTop: 14 }}
        >
          Open scheduler <span style={{ opacity: 0.6, fontSize: 11 }}>↗</span>
        </a>
      </div>
    </div>
  );
}
