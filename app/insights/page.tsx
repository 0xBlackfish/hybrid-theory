import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PageCTA } from "@/components/PageCTA";
import { InsightsList } from "@/components/InsightsList";
import { SubscribeForm } from "@/components/SubscribeForm";
import { INSIGHTS_ARTICLES } from "@/lib/posts";

export default function InsightsPage() {
  return (
    <>
      <SiteNav />
      <main className="stripe-blog">
        {/* HERO — Newsletter-led */}
        <section className="optd-hero">
          <div className="wrap">
            <div className="optd-hero-card">
              <div className="optd-hero-glow" aria-hidden="true" />
              <div className="optd-hero-grid">
                <div className="optd-hero-text">
                  <div className="mono optd-hero-pretitle">§ Hybrid Theory · From the studio</div>
                  <h1 className="optd-hero-h">
                    A monthly letter from <span className="italic" style={{ color: "var(--accent)" }}>working engineers</span>.
                  </h1>
                  <p className="optd-hero-lead">
                    One email a month. What we shipped, what we read, what we got wrong. No funnel, no follow-up sequence, no other emails ever.
                  </p>
                  <SubscribeForm />
                  <div className="mono optd-hero-stat">2,184 readers · ~once / month · no spam ever</div>
                </div>
                <div className="optd-hero-preview" aria-hidden="true">
                  <div className="mono optd-hero-preview-meta">Latest issue · May 14</div>
                  <div className="optd-hero-preview-title">What &quot;AI strategy&quot; should mean for a 12-person business.</div>
                  <p className="optd-hero-preview-body">Hi friends — this week we wrote about something that&apos;s been bugging us for months. Most strategy decks for SMBs are theatre — eighty-three slides, two of which the owner has actually read…</p>
                  <div className="optd-hero-preview-link">Read in browser →</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <InsightsList articles={INSIGHTS_ARTICLES} />

        <PageCTA
          title={<>Or, if you&apos;d rather talk than read — <span className="italic" style={{ color: "var(--accent)" }}>book a call</span>.</>}
          sub="A 30-minute conversation. No slides, no pitch."
        />
      </main>
      <SiteFooter />
    </>
  );
}
