"use client";

import { useEffect } from "react";
import type { ServiceCase } from "./cases";
import { WideVisualD } from "./WideVisualD";

export function BentoModal({ c, onClose }: { c: ServiceCase; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="bento-backdrop" onClick={onClose}>
      <div
        className="bento-modal"
        onClick={(e) => e.stopPropagation()}
        style={{ background: "linear-gradient(180deg, #16181D 0%, #0E0F12 280px)" }}
      >
        <button className="bento-close" onClick={onClose} aria-label="Close">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3 3 L11 11 M11 3 L3 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>

        <header className="bento-modal-head">
          <div>
            <div className="bento-kicker mono" style={{ color: c.accent }}>{c.kicker}</div>
            <h2 className="bento-modal-title">{c.title}</h2>
            <p className="bento-modal-desc">{c.desc}</p>
            <div className="bento-modal-cta">
              <a href="#contact" data-calendly className="btn btn-primary">
                Talk about this build <span style={{ opacity: 0.6, fontSize: 11 }}>↗</span>
              </a>
              <a href="#insights" className="btn btn-ghost">Case study</a>
            </div>
          </div>
          <ul className="bento-modal-bullets">
            {c.bullets.map((b, i) => (
              <li key={i}>
                <span className="bento-bullet-tick" style={{ color: c.accent }}>✓</span>
                {b}
              </li>
            ))}
          </ul>
        </header>

        <div className="bento-modal-stage">
          <div className="bento-stage-bar">
            <div className="mono bento-stage-l">Live demo · {c.kicker}</div>
            <div className="bento-stage-r">
              <span className="bento-dot" style={{ background: c.accent }} />
              <span className="mono">Running</span>
            </div>
          </div>
          <div className="bento-stage-body">
            <WideVisualD id={c.visual} />
          </div>
        </div>
      </div>
    </div>
  );
}
