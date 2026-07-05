"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { VERTICALS } from "@/content/verticals";
import "./nav.css";

const NAV_LINKS = [
  { href: "/#inaction", label: "See it in action" },
  { href: "/#how", label: "How it works" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [ddOpen, setDdOpen] = useState(false);
  const pathname = usePathname();
  const ddRef = useRef<HTMLDivElement>(null);
  const isActive = (href: string) => pathname === href;
  const isVertical = (slug: string) => pathname === `/for/${slug}`;

  useEffect(() => {
    const onScroll = () => {
      const nav = document.querySelector(".nav");
      if (!nav) return;
      nav.classList.toggle("scrolled", window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the desktop dropdown on outside click or Escape.
  useEffect(() => {
    if (!ddOpen) return;
    const onDown = (e: MouseEvent) => {
      if (ddRef.current && !ddRef.current.contains(e.target as Node)) setDdOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDdOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [ddOpen]);

  const caret = (
    <svg className="nav-dd-caret" viewBox="0 0 10 10" fill="none" aria-hidden="true">
      <path d="M2 3.5 L5 6.5 L8 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  return (
    <nav className={"nav nav-studio" + (open ? " open" : "")}>
      <div className="nav-inner-grid">
        <Link
          href="/"
          className="nav-logo"
          style={{ display: "inline-flex", alignItems: "center", gap: 11, textDecoration: "none", color: "var(--ink)" }}
        >
          <Logo variant="mark" size={28} />
          <Logo variant="wordmark" size={18} />
        </Link>
        <div className="nav-links nav-links-studio">
          <div className="nav-dd" ref={ddRef} data-open={ddOpen ? "true" : "false"}>
            <button
              type="button"
              className="nav-dd-trigger"
              aria-haspopup="true"
              aria-expanded={ddOpen}
              onClick={() => setDdOpen((o) => !o)}
            >
              Who we help {caret}
            </button>
            <div className="nav-dd-menu" role="menu" aria-label="Who we help">
              <div className="nav-dd-grid">
                {VERTICALS.map((v) => (
                  <Link
                    key={v.slug}
                    href={`/for/${v.slug}`}
                    role="menuitem"
                    className={"nav-dd-link" + (isVertical(v.slug) ? " is-active" : "")}
                    onClick={() => setDdOpen(false)}
                  >
                    {v.navLabel}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className={isActive(l.href) ? "is-active" : ""}>
              {l.label}
            </Link>
          ))}
        </div>
        <div className="nav-cta">
          <a href="https://calendly.com/hybridtheory/30min" target="_blank" rel="noopener" data-calendly className="btn btn-primary nav-btn">
            Book a free assessment <span style={{ opacity: 0.6, fontSize: 11 }}>↗</span>
          </a>
        </div>
        <button className="nav-toggle" aria-label="Menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
          {open ? (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M4 4 L14 14 M14 4 L4 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3 5 H15 M3 9 H15 M3 13 H15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>
      <div className="nav-mobile-panel">
        <div className="nav-dd-mobile">
          <div className="nav-dd-mobile-head">Who we help</div>
          {VERTICALS.map((v) => (
            <Link
              key={v.slug}
              href={`/for/${v.slug}`}
              className={"nav-dd-sublink" + (isVertical(v.slug) ? " is-active" : "")}
              onClick={() => setOpen(false)}
            >
              {v.navLabel}
            </Link>
          ))}
        </div>
        {NAV_LINKS.map((l) => (
          <Link key={l.href} href={l.href} className={isActive(l.href) ? "is-active" : ""} onClick={() => setOpen(false)}>
            {l.label}
          </Link>
        ))}
        <div className="nav-mobile-cta">
          <a href="https://calendly.com/hybridtheory/30min" target="_blank" rel="noopener" data-calendly className="btn btn-primary" onClick={() => setOpen(false)}>
            Book a free assessment <span style={{ opacity: 0.6, fontSize: 11 }}>↗</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
