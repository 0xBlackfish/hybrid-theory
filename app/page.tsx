import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Hero } from "@/components/home/Hero";
import { StripServices } from "@/components/home/StripServices";
import { ApproachDocument } from "@/components/home/ApproachDocument";
import { TeamSection } from "@/components/home/TeamSection";
import { InsightsFeatured } from "@/components/home/InsightsFeatured";
import { ToolsStrip } from "@/components/home/ToolsStrip";

export default function HomePage() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <StripServices />
        <ApproachDocument />
        <TeamSection />
        <InsightsFeatured />
        <ToolsStrip />
        <section className="bigcta" id="contact">
          <div className="wrap">
            <div className="sec-marker mono" style={{ justifyContent: "center", display: "inline-flex" }}>
              <span className="sec-num">§ 06</span>
              <span className="sec-name">Start here</span>
            </div>
            <h2 className="mt-6">
              Tell us the thing in your business that{" "}
              <span className="italic" style={{ color: "var(--accent)" }}>shouldn&apos;t still be manual</span>.<br />
              We&apos;ll tell you if AI can fix it.
            </h2>
            <p className="lead">
              It starts with a fixed-fee AI Audit: in one focused session we map the busywork that&apos;s
              costing you most and ship one quick win. Like what you see? The fee credits toward whatever we build next.
            </p>
            <div className="cta">
              <a href="#" data-calendly className="btn btn-primary">
                Book your AI Audit <span style={{ opacity: 0.7, fontSize: 11 }}>↗</span>
              </a>
              <a href="mailto:hello@hybridtheory.ai" className="btn btn-ghost">hello@hybridtheory.ai</a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
