import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { PageCTA } from "@/components/PageCTA";

const PRINCIPLES = [
  { n: "01", t: "Problem-first, not solution-first.", d: "We don't sell AI. We diagnose where AI helps. If it doesn't help, we say so, even when that costs us a project." },
  { n: "02", t: "Ship something real.", d: "Decks are easy. Working systems aren't. Every engagement ends with something deployed, documented, and yours to keep." },
  { n: "03", t: "Speak human.", d: "We write the way a friend who knows the field would talk to you. No jargon, no transformation theatre, no enterprise-y mush." },
  { n: "04", t: "Stay close to the work.", d: "When you hire us, you work directly with the senior builders doing the building. Same people in your kickoffs, same people in your inbox, same people in the code. Tight engagements, real relationships." },
];

const TRANSLATIONS = [
  { jargon: "Agentic AI", plain: "Software that does the work for you." },
  { jargon: "AI transformation", plain: "Tools we build together." },
  { jargon: "AI Center of Excellence", plain: "Two engineers and a clear scope." },
  { jargon: "Leverage AI capabilities", plain: "Use AI to save you time." },
  { jargon: "Holistic solution", plain: "Looking at the whole business, not just a slice." },
  { jargon: "Stakeholder alignment", plain: "Getting your team on board." },
  { jargon: "Roadmap acceleration", plain: "Doing the thing sooner." },
  { jargon: "Best-in-class", plain: "Good." },
];

const CREDS = [
  { who: "Google", what: "Search, payments, infra" },
  { who: "Stripe", what: "Risk + payments orchestration" },
  { who: "Anthropic", what: "Model deployment + safety" },
  { who: "Airbnb", what: "Trust + supply systems" },
  { who: "Square", what: "SMB tools + retail" },
  { who: "Shopify", what: "Merchant operations" },
];

export default function AboutPage() {
  return (
    <>
      <SiteNav />
      <main>
        <PageHero
          pretitle="§ About"
          title={<>A studio of <span className="italic" style={{ color: "var(--accent)" }}>builders</span>.</>}
          lead="We've shipped products to millions of people. Now we work with the businesses that are the foundation of the economy."
        />

        {/* Manifesto */}
        <section className="about-section">
          <div className="wrap">
            <div className="about-grid">
              <span className="label">Why we exist</span>
              <h2>Engineering for the businesses that <span className="italic" style={{ color: "var(--lime)" }}>run the economy</span>.</h2>
              <p>Hybrid Theory is a small team of senior engineers, designers, and data scientists. We&apos;ve shipped products to millions of users at companies you&apos;ve heard of.</p>
              <p>We work with businesses that typically have less access to technical resources — auto shops, regional manufacturers, dental groups, small agencies. The places where one shipped tool can shift a whole week of work.</p>
              <p>We&apos;re here because AI changed what a single engineer can do. That leverage should land where the work actually serves people. The businesses that need it most have been the last to get it and we thought that should change.</p>
              <p className="muted">We don&apos;t sell AI. We sell the outcomes that AI makes possible.</p>
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="about-section">
          <div className="wrap">
            <div className="about-grid">
              <span className="label">How we work</span>
              <h2>Four principles that show up in <span className="italic" style={{ color: "var(--amber)" }}>every engagement</span>.</h2>
              <ul className="principles">
                {PRINCIPLES.map((p) => (
                  <li key={p.n}>
                    <span className="n mono">{p.n}</span>
                    <div className="principle-body">
                      <div className="pt">{p.t}</div>
                      <div className="pd">{p.d}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Words we don't use */}
        <section className="about-section">
          <div className="wrap">
            <div className="about-grid">
              <span className="label">How we talk</span>
              <h2>Words we <span className="italic" style={{ color: "var(--cyan)" }}>don&apos;t use</span>.</h2>
              <p className="muted">Running a regular business is hard enough without learning a new vocabulary. So we use the words you already use — and we save the jargon for ourselves.</p>
              <div className="translations">
                {TRANSLATIONS.map((t, i) => (
                  <div className="translation-row" key={i}>
                    <div className="translation-jargon">
                      <span className="mono">Not</span>
                      <span>{t.jargon}</span>
                    </div>
                    <div className="translation-plain">
                      <span className="mono">Us</span>
                      <span className="italic">&quot;{t.plain}&quot;</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Credentials */}
        <section className="about-section">
          <div className="wrap">
            <div className="about-grid">
              <span className="label">Where we&apos;ve been</span>
              <h2>Our team has shipped at <span className="italic" style={{ color: "var(--magenta)" }}>places you&apos;ve heard of</span>.</h2>
              <p className="muted">A non-exhaustive list of where the team has worked. We don&apos;t lead with names because the work matters more than the resume — but we&apos;ll happily share specifics on a call.</p>
              <div style={{ gridColumn: 2, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, border: "1px solid var(--rule)", borderRadius: 12, overflow: "hidden", marginTop: 24 }}>
                {CREDS.map((c, i) => (
                  <div key={c.who} style={{ padding: "20px 22px", borderRight: i % 3 !== 2 ? "1px solid var(--rule)" : "none", borderBottom: i < 3 ? "1px solid var(--rule)" : "none", background: "var(--paper-2)" }}>
                    <div style={{ fontFamily: "var(--serif)", fontSize: 22, letterSpacing: "-0.02em" }}>{c.who}</div>
                    <div style={{ fontSize: 12.5, color: "var(--ink-soft)", marginTop: 4 }}>{c.what}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <PageCTA
          title={<>Want to know if we&apos;re <span className="italic" style={{ color: "var(--accent)" }}>a fit</span> for your business?</>}
          sub="A 30-minute call. We'll listen, ask a few questions, and tell you honestly whether it makes sense to work together."
        />
      </main>
      <SiteFooter />
    </>
  );
}
