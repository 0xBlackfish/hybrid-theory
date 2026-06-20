"use client";

import { useEffect, useRef } from "react";

const CALENDLY_URL_INLINE = "https://calendly.com/hybridtheory/30min";

export function CalendlyInline() {
  const inlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let tries = 0;
    const mount = () => {
      tries++;
      const el = inlineRef.current;
      if (window.Calendly && el && !el.dataset.mounted) {
        window.Calendly.initInlineWidget({
          url:
            CALENDLY_URL_INLINE +
            "?hide_event_type_details=0&background_color=16181d&text_color=f4f2ea&primary_color=b9ff35",
          parentElement: el,
        });
        el.dataset.mounted = "1";
      } else if (tries < 40) {
        setTimeout(mount, 150);
      }
    };
    mount();
  }, []);

  return (
    <div className="contact-cal-embed" ref={inlineRef} aria-label="Calendly scheduler">
      <div className="contact-cal-fallback">
        <div className="mono">Loading scheduler…</div>
        <a href="#" data-calendly className="btn btn-primary" style={{ marginTop: 14 }}>
          Open scheduler <span style={{ opacity: 0.6, fontSize: 11 }}>↗</span>
        </a>
      </div>
    </div>
  );
}
