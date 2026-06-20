import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { CalendlyInline } from "@/components/CalendlyInline";
import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <>
      <SiteNav />
      <main>
        {/* HERO */}
        <section className="page-hero">
          <div className="wrap">
            <div className="mono page-hero-pretitle">§ Contact</div>
            <h1 className="page-hero-h">
              Let&apos;s find out if we&apos;re <span className="italic" style={{ color: "var(--accent)" }}>a fit</span>.
            </h1>
            <p className="page-hero-lead">
              The fastest way in is a 30-minute call — no slides, no pitch. We&apos;ll listen, ask a few questions, and tell you honestly whether it makes sense to work together.
            </p>
          </div>
        </section>

        {/* CALENDAR-FIRST */}
        <section className="contact-section">
          <div className="wrap">
            <div className="contact-grid">
              {/* Row 1 — heads */}
              <div className="contact-block-head contact-head-cal">
                <div className="mono contact-block-kicker" style={{ color: "var(--lime)" }}>Ready to talk</div>
                <h2 className="contact-block-h">Grab a slot.</h2>
                <p className="contact-block-sub">Pick a time that works. You&apos;ll get a calendar invite with a video link — that&apos;s it.</p>
              </div>
              <div className="contact-block-head contact-head-form">
                <div className="mono contact-block-kicker" style={{ color: "var(--amber)" }}>Not ready for a call?</div>
                <h2 className="contact-block-h">Tell us what&apos;s on your mind.</h2>
                <p className="contact-block-sub">A vague question is fine. So is a long one. We read everything and reply like humans.</p>
              </div>

              {/* Row 2 — bodies */}
              <CalendlyInline />

              <div className="contact-form-card">
                <ContactForm />

                <div className="contact-direct">
                  <span className="mono">Or just email</span>
                  <a href="mailto:hello@hybridtheory.ai">hello@hybridtheory.ai</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
