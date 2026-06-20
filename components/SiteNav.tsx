"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";

const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/insights" ? pathname.startsWith("/insights") : pathname === href;

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
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className={isActive(l.href) ? "is-active" : ""}>
              {l.label}
            </Link>
          ))}
        </div>
        <div className="nav-cta">
          <a href="#contact" data-calendly className="btn btn-primary nav-btn">
            Schedule your free mini-audit <span style={{ opacity: 0.6, fontSize: 11 }}>↗</span>
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
        {NAV_LINKS.map((l) => (
          <Link key={l.href} href={l.href} className={isActive(l.href) ? "is-active" : ""} onClick={() => setOpen(false)}>
            {l.label}
          </Link>
        ))}
        <div className="nav-mobile-cta">
          <a href="#contact" data-calendly className="btn btn-primary" onClick={() => setOpen(false)}>
            Schedule your free mini-audit <span style={{ opacity: 0.6, fontSize: 11 }}>↗</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
