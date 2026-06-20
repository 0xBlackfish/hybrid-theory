"use client";

import { useEffect, useRef } from "react";

const MARQUEE_TOOLS = [
  { name: "Stripe", file: "stripe.svg" },
  { name: "Shopify", file: "shopify.svg" },
  { name: "Gmail", file: "gmail.svg" },
  { name: "Slack", file: "slack.svg" },
  { name: "Notion", file: "notion.svg" },
  { name: "Square", file: "square.svg" },
  { name: "Calendly", file: "calendly.svg" },
  { name: "Google Calendar", file: "google-calendar.svg" },
  { name: "Zoom", file: "zoom.svg" },
];

const WAVE_COLOR = 0x1a1b20; // slate tint

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) return resolve();
    const s = document.createElement("script");
    s.src = src;
    s.async = true;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error("failed to load " + src));
    document.body.appendChild(s);
  });
}

export function Hero() {
  const vantaRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const vantaInst = useRef<any>(null);

  useEffect(() => {
    let cancelled = false;
    const init = async () => {
      try {
        await loadScript("https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js");
        await loadScript("https://cdnjs.cloudflare.com/ajax/libs/vanta/0.5.24/vanta.waves.min.js");
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const VANTA = (window as any).VANTA;
        if (cancelled || !vantaRef.current || !VANTA?.WAVES) return;
        vantaInst.current = VANTA.WAVES({
          el: vantaRef.current,
          mouseControls: false,
          touchControls: false,
          gyroControls: false,
          minHeight: 200,
          minWidth: 200,
          color: WAVE_COLOR,
          shininess: 35,
          waveHeight: 14,
          waveSpeed: 0.45,
          zoom: 0.88,
        });
      } catch {
        // CSS gradient fallback already covers the hero — nothing to do.
      }
    };
    init();
    return () => {
      cancelled = true;
      try {
        vantaInst.current?.destroy?.();
      } catch {
        /* noop */
      }
    };
  }, []);

  return (
    <section className="hero-studio">
      <div
        ref={vantaRef}
        className="hero-vanta"
        aria-hidden="true"
        style={{ background: "radial-gradient(120% 90% at 50% 0%, #1a1b20 0%, #0e0f12 60%)" }}
      />

      <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
        <h1 className="hero-h fade-up">
          Every company is a tech company now.<br />
          <span className="italic" style={{ color: "var(--accent)" }}>We make AI the easy part.</span>
        </h1>
        <div className="hero-row fade-up d2">
          <p className="hero-tag">
            We find your busywork, build the AI that automates it, and show you how to run it.
          </p>
          <div className="hero-cta-row">
            <a href="#contact" data-calendly className="btn btn-warm">
              Get a free assessment
            </a>
            <a href="#services" className="btn btn-ghost">
              See what we offer
            </a>
          </div>
        </div>
      </div>

      <div className="hero-marquee tools-marquee" aria-hidden="true">
        <div className="tm-label mono">Works with</div>
        <div className="tm-viewport">
          <div className="marquee-track">
            {[...MARQUEE_TOOLS, ...MARQUEE_TOOLS, ...MARQUEE_TOOLS].map((t, i) => (
              <span className="marquee-item tm-item" key={i}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="tm-logo" src={`/assets/logos/${t.file}`} alt={t.name} />
                <span className="marquee-sep">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
