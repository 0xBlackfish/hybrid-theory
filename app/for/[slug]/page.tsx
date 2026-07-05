import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { LeakCycler } from "@/components/home-v2/LeakCycler";
import { SpotlightScene } from "@/components/vertical/SpotlightScene";
import { OPP_ICONS } from "@/components/home-v2/icons";
import { ScenarioComposition } from "@/components/artifacts";
import heroLayout from "@/components/artifacts/heroLayout.module.css";
import { VERTICALS, getVertical } from "@/content/verticals";
import "../vertical.css";

// Contrast-safe TEXT variant for each site accent (each passes ~4.5:1 on --paper).
// Mirrors the --*-text tokens in globals.css; adds violet + mint which have none.
const ACCENT_TEXT: Record<string, string> = {
  "#B9FF35": "#3E7B27", // lime  → deep green
  "#F5A623": "#9A6206", // amber → deep amber
  "#5BE3FF": "#0E7490", // cyan  → deep teal
  "#FF3DA5": "#B0186E", // magenta
  "#A78BFA": "#6D28D9", // violet
  "#3FE0A8": "#0F766E", // mint  → deep teal-green
};

export function generateStaticParams() {
  return VERTICALS.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const v = getVertical(slug);
  if (!v) return {};
  return {
    title: v.metaTitle,
    description: v.metaDescription,
    alternates: { canonical: `/for/${v.slug}` },
    openGraph: {
      title: v.metaTitle,
      description: v.metaDescription,
      url: `/for/${v.slug}`,
      type: "website",
    },
  };
}

export default async function VerticalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const v = getVertical(slug);
  if (!v) notFound();

  const cText = ACCENT_TEXT[v.accent] ?? "var(--accent-text)";
  const pageStyle = { "--c": v.accent, "--c-text": cText } as CSSProperties;

  const others = VERTICALS.filter((o) => o.slug !== v.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: v.metaTitle,
    serviceType: `AI automation for ${v.label}`,
    description: v.metaDescription,
    areaServed: "US",
    provider: {
      "@type": "Organization",
      name: "Hybrid Theory",
      url: "https://hybridtheory.ai",
    },
  };

  return (
    <div className="vfy-page" style={pageStyle}>
      <SiteNav />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        {/* HERO */}
        <header className="vfy-hero">
          <div className="vfy-hero-bg" aria-hidden="true">
            <div className="vfy-hero-glow" />
          </div>
          <div className={`htv-wrap ${heroLayout.grid}`}>
            <div className={`vfy-hero-inner ${heroLayout.copy}`}>
              <h1 className="vfy-hero-title">{v.hero.headline}</h1>
              <p className="vfy-hero-lead">{v.hero.lead}</p>
              <div className="vfy-cta-row">
                <a href="https://calendly.com/hybridtheory/30min" target="_blank" rel="noopener" data-calendly className="btn btn-primary">
                  Book your free 30-minute assessment
                </a>
              </div>
            </div>
            <div className={heroLayout.visual}>
              <ScenarioComposition scenario={v.scenario} />
            </div>
          </div>
        </header>

        {/* STAKES — the leak */}
        <section className="vfy-stakes htv-band">
          <div className="htv-wrap">
            <div className="vfy-stakes-head">
              <h2>{v.stakes.headline}</h2>
              <p>{v.stakes.body}</p>
            </div>
            <div className="vfy-stats">
              {v.stakes.stats.map((s, i) => (
                <div key={i} className="vfy-stat">
                  <div className="vfy-stat-v">{s.value}</div>
                  <div className="vfy-stat-l">{s.label}</div>
                  {s.source && <span className="vfy-stat-src">{s.source}</span>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OPPORTUNITIES */}
        <section className="htv-section">
          <div className="htv-wrap">
            <div className="htv-sec-head">
              <h2>{v.opportunitiesHead?.headline ?? "The wins hiding in your everyday."}</h2>
              <p>
                {v.opportunitiesHead?.sub ??
                  "Not a new system or ten new tools — just the handful of moments that matter, each one handled well."}
              </p>
            </div>
            <div className="vfy-opps">
              {v.opportunities.map((o, i) => (
                <div
                  key={i}
                  className="htv-opp"
                  style={{ "--c": v.accent } as CSSProperties}
                >
                  <span className="htv-ic-slot">{OPP_ICONS[o.icon]}</span>
                  <h3>{o.title}</h3>
                  <p>{o.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEE IT WORK — bespoke spotlight scene when present, else the cycler */}
        {v.spotlight ? (
          <section className="vfy-demo htv-band">
            <div className="htv-wrap">
              <div className="htv-sec-head htv-center">
                <h2>{v.spotlight.headline}</h2>
                <p>{v.spotlight.intro}</p>
              </div>
              <SpotlightScene spotlight={v.spotlight} />
            </div>
          </section>
        ) : (
          v.demoFlow && (
            <section className="vfy-demo htv-band">
              <div className="htv-wrap">
                <div className="htv-sec-head htv-center">
                  <h2>A leak, sealed — in real time.</h2>
                </div>
                {v.demoIntro && <p className="vfy-demo-intro">{v.demoIntro}</p>}
                <LeakCycler />
              </div>
            </section>
          )
        )}

        {/* FAQ */}
        <section className="htv-section">
          <div className="htv-wrap">
            <div className="htv-sec-head htv-center">
              <span className="vfy-eyebrow" style={{ justifyContent: "center" }}>
                Straight answers
              </span>
              <h2>The questions owners actually ask.</h2>
            </div>
            <div className="vfy-faq">
              {v.faq.map((f, i) => (
                <details key={i} className="vfy-faq-item">
                  <summary>
                    <span>{f.q}</span>
                    <span className="vfy-faq-mark" aria-hidden="true" />
                  </summary>
                  <p className="vfy-faq-a">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="vfy-final">
          <div className="vfy-final-glow" aria-hidden="true" />
          <div className="htv-wrap">
            <span className="vfy-eyebrow">Your move</span>
            <h2>{v.finalCta.headline}</h2>
            <p>{v.finalCta.body}</p>
            <div className="vfy-cta-row">
              <a href="https://calendly.com/hybridtheory/30min" target="_blank" rel="noopener" data-calendly className="btn btn-primary">
                Book your free 30-minute assessment
              </a>
            </div>
          </div>
        </section>

        {/* CROSS-LINK STRIP */}
        <section className="vfy-cross">
          <div className="htv-wrap">
            <div className="vfy-cross-lead">
              Not {v.navLabel.toLowerCase()}?{" "}
              <Link href="/#who">See who else we help</Link>
            </div>
            <div className="vfy-cross-grid">
              {others.map((o) => (
                <Link key={o.slug} href={`/for/${o.slug}`} className="vfy-cross-chip">
                  {o.navLabel}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
