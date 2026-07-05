"use client";

import type { CSSProperties } from "react";
import posthog from "posthog-js";
import { INDUSTRIES } from "../whoForIcons";

// Each Who-it's-for tile links to its vertical page. Slugs match app/for/[slug].
const SLUGS: Record<string, string> = {
  "Roofers": "roofers",
  "Dentists": "dentists",
  "Landscapers": "landscapers",
  "Med spas": "med-spas",
  "Realtors": "realtors",
  "Accounting firms": "accounting-firms",
  "Law practices": "law-practices",
  "HVAC & plumbing": "hvac-plumbing",
  "Contractors": "contractors",
  "Auto shops": "auto-shops",
  "Tutoring": "tutoring",
};

type Tile = { label: string; slug: string; accent: string; icon: string };

const TILES: Tile[] = INDUSTRIES.map((ind) => ({
  label: ind.label,
  slug: SLUGS[ind.label] ?? "",
  accent: ind.accent,
  icon: ind.icon,
}));

export function WhoFor() {
  return (
    <section id="who" className="htv-section htv-band htv-whofor">
      <div className="htv-whofor-aurora" aria-hidden="true" />
      <div className="htv-wrap">
        <div className="htv-sec-head">
          <span className="htv-kicker">Who it&rsquo;s for</span>
          <h2>For owners who run real businesses.</h2>
          <p>
            If you grow by answering customers fast and doing great work, this was built for you.
          </p>
        </div>
        <div className="htv-whofor-grid">
          {TILES.map((t) => (
            <a
              className="htv-whofor-tile"
              key={t.label}
              href={`/for/${t.slug}`}
              aria-label={`AI for ${t.label}`}
              style={{ "--c": t.accent } as CSSProperties}
              onClick={() => posthog.capture("industry_tile_clicked", { industry: t.slug, industry_label: t.label })}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="htv-whofor-ic"
                src={t.icon}
                alt=""
                aria-hidden="true"
              />
              <span className="htv-whofor-nm">{t.label}</span>
              <span className="htv-whofor-arr" aria-hidden="true">→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
