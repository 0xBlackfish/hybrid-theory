"use client";

import { useEffect } from "react";

export const CALENDLY_URL = "https://calendly.com/hybridtheory/30min";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (opts: { url: string }) => void;
      initInlineWidget: (opts: { url: string; parentElement: HTMLElement }) => void;
    };
  }
}

function openCalendly() {
  if (window.Calendly && typeof window.Calendly.initPopupWidget === "function") {
    window.Calendly.initPopupWidget({ url: CALENDLY_URL });
  } else {
    window.open(CALENDLY_URL, "_blank", "noopener");
  }
  return false;
}

/**
 * Loads Calendly assets once and wires a single delegated click handler:
 * any <a>/<button> with [data-calendly] or text containing "Book a call"
 * opens the scheduler popup. Mounted once in the root layout.
 */
export function CalendlyProvider() {
  useEffect(() => {
    if (!document.querySelector('link[data-calendly-css]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      link.setAttribute("data-calendly-css", "1");
      document.head.appendChild(link);
    }
    if (!document.querySelector('script[data-calendly-js]')) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.setAttribute("data-calendly-js", "1");
      document.body.appendChild(script);
    }

    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const el = target?.closest("a, button") as HTMLElement | null;
      if (!el) return;
      const isCalendly =
        el.hasAttribute("data-calendly") || /book a call/i.test(el.textContent || "");
      if (isCalendly) {
        e.preventDefault();
        openCalendly();
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
