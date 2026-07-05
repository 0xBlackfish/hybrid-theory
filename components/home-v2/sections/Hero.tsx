"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { getVertical } from "@/content/verticals";
import type { VerticalScenario } from "@/content/verticals/types";
import { ScenarioComposition } from "@/components/artifacts";
import styles from "./hero.module.css";

/* Trade chip icons (translated from direction-e). */
const ICONS: Record<string, ReactNode> = {
  roofers: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 11 12 4l9 7" />
      <path d="M5 10v9h14v-9" />
    </svg>
  ),
  "hvac-plumbing": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3c1.6 3.2 4 4 4 7.4A4 4 0 0 1 8 11c0-1.8.9-2.9 2-4" />
    </svg>
  ),
  dentists: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 3c-2 0-3 1.8-3 4 0 3 1 4 1.6 8 .3 2 .5 4 1.4 4s1.1-2.4 1.4-4.2c.2-1 .5-1.6 1.6-1.6s1.4.6 1.6 1.6c.3 1.8.5 4.2 1.4 4.2s1.1-2 1.4-4c.6-4 1.6-5 1.6-8 0-2.2-1-4-3-4-1.3 0-2 .7-3 .7S8.3 3 7 3z" />
    </svg>
  ),
  tutoring: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 8 12 4l10 4-10 4L2 8z" />
      <path d="M6 10.5V15c0 1 2.7 2 6 2s6-1 6-2v-4.5" />
    </svg>
  ),
  contractors: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m14.5 5.5 4 4" />
      <path d="M16.5 3.5 20.5 7.5 17 11l-4-4z" />
      <path d="m11 8-7.5 7.5a2.1 2.1 0 0 0 3 3L14 11" />
    </svg>
  ),
  "med-spas": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3c3 4 6 6.5 6 10a6 6 0 0 1-12 0c0-3.5 3-6 6-10z" />
    </svg>
  ),
};

/* Six chips read most distinctly across the money moments (quote + calendar). */
const HERO_SLUGS = ["roofers", "hvac-plumbing", "dentists", "tutoring", "contractors", "med-spas"];

type Trade = { slug: string; label: string; icon: ReactNode; scenario: VerticalScenario };

const TRADES: Trade[] = HERO_SLUGS.flatMap((slug) => {
  const v = getVertical(slug);
  return v ? [{ slug, label: v.scenario.chipLabel, icon: ICONS[slug], scenario: v.scenario }] : [];
});

export function Hero() {
  const [active, setActive] = useState(TRADES[0].slug);
  const scenario = (TRADES.find((t) => t.slug === active) ?? TRADES[0]).scenario;

  return (
    <header className={styles.hero}>
      <div className={styles.heroBg} aria-hidden="true" />

      <div className={`htv-wrap ${styles.grid}`}>
        {/* LEFT — copy */}
        <div className={styles.copy}>
          <h1 className={styles.title}>
            Run the business you always <em>pictured</em>.
          </h1>
          <p className={styles.lead}>
            More customers. Faster answers. Nothing slipping through the cracks —{" "}
            <b>handled quietly in the background, sounding like you at your best.</b> You run the
            business. It takes care of the busywork.
          </p>
          <div className={styles.actions}>
            <a href="https://calendly.com/hybridtheory/30min" target="_blank" rel="noopener" data-calendly className="btn btn-primary">
              <svg
                className={styles.btnIcon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <path d="M16 2v4M8 2v4M3 10h18" />
              </svg>
              Book your free 30-minute assessment
            </a>
          </div>
        </div>

        {/* RIGHT — switcher + layered artifacts */}
        <div className={styles.visual}>
          <div className={styles.switcher} role="tablist" aria-label="Pick your business">
            <span className={styles.swLab}>I run a&hellip;</span>
            <div className={styles.chips}>
              {TRADES.map((t) => (
                <button
                  key={t.slug}
                  type="button"
                  role="tab"
                  aria-selected={t.slug === active}
                  className={t.slug === active ? `${styles.chip} ${styles.chipActive}` : styles.chip}
                  onClick={() => setActive(t.slug)}
                >
                  {t.icon}
                  {t.label}
                </button>
              ))}
              <Link href="/#who" className={styles.moreLink}>
                More trades →
              </Link>
            </div>
          </div>

          {/* key={active} remounts the composition so the SMS cascade replays */}
          <ScenarioComposition key={active} scenario={scenario} />
        </div>
      </div>
    </header>
  );
}
