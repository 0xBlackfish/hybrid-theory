/* eslint-disable */
// Contact page — calendar-first, message form as the safety net.

const CALENDLY_URL_INLINE = "https://calendly.com/hybridtheory/30min";

function ContactPageApp() {
  const inlineRef = React.useRef(null);

  React.useEffect(() => {
    // Mount the Calendly inline embed once the widget script is ready.
    let tries = 0;
    const mount = () => {
      tries++;
      if (window.Calendly && inlineRef.current && !inlineRef.current.dataset.mounted) {
        window.Calendly.initInlineWidget({
          url: CALENDLY_URL_INLINE + "?hide_event_type_details=0&background_color=16181d&text_color=f4f2ea&primary_color=b9ff35",
          parentElement: inlineRef.current,
        });
        inlineRef.current.dataset.mounted = "1";
      } else if (tries < 40) {
        setTimeout(mount, 150);
      }
    };
    mount();
  }, []);

  return (
    <>
      <SiteNav active="#contact" />
      <main>
        {/* HERO */}
        <section className="page-hero">
          <div className="wrap">
            <div className="mono page-hero-pretitle">§ Contact</div>
            <h1 className="page-hero-h">
              Let's find out if we're <span className="italic" style={{ color: "var(--accent)" }}>a fit</span>.
            </h1>
            <p className="page-hero-lead">
              The fastest way in is a 30-minute call — no slides, no pitch. We'll listen, ask a few questions, and tell you honestly whether it makes sense to work together.
            </p>
          </div>
        </section>

        {/* CALENDAR-FIRST */}
        <section className="contact-section">
          <div className="wrap">
            <div className="contact-grid">
              {/* Row 1 — heads (aligned across both columns) */}
              <div className="contact-block-head contact-head-cal">
                <div className="mono contact-block-kicker" style={{ color: "var(--lime)" }}>Ready to talk</div>
                <h2 className="contact-block-h">Grab a slot.</h2>
                <p className="contact-block-sub">Pick a time that works. You'll get a calendar invite with a video link — that's it.</p>
              </div>
              <div className="contact-block-head contact-head-form">
                <div className="mono contact-block-kicker" style={{ color: "var(--amber)" }}>Not ready for a call?</div>
                <h2 className="contact-block-h">Tell us what's on your mind.</h2>
                <p className="contact-block-sub">A vague question is fine. So is a long one. We read everything and reply like humans.</p>
              </div>

              {/* Row 2 — bodies (tops aligned) */}
              <div className="contact-cal-embed" ref={inlineRef} aria-label="Calendly scheduler">
                <div className="contact-cal-fallback">
                  <div className="mono">Loading scheduler…</div>
                  <a href="#" data-calendly className="btn btn-primary" style={{ marginTop: 14 }}>
                    Open scheduler <span style={{ opacity:0.6, fontSize:11 }}>↗</span>
                  </a>
                </div>
              </div>

              <div className="contact-form-card">
                <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                  <label className="contact-field">
                    <span className="mono contact-field-label">Your name</span>
                    <input type="text" placeholder="Jordan Hill" />
                  </label>
                  <label className="contact-field">
                    <span className="mono contact-field-label">Email</span>
                    <input type="email" placeholder="you@yourbusiness.com" />
                  </label>
                  <label className="contact-field">
                    <span className="mono contact-field-label">What kind of business?</span>
                    <input type="text" placeholder="Auto shop · dental group · agency · …" />
                  </label>
                  <label className="contact-field">
                    <span className="mono contact-field-label">What's on your mind?</span>
                    <textarea rows="4" placeholder="The thing in your business that shouldn't still be manual…"></textarea>
                  </label>
                  <button type="submit" className="btn btn-primary contact-submit">
                    Send it <span style={{ opacity:0.6, fontSize:11 }}>→</span>
                  </button>
                </form>

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
      <SiteTweaks />
    </>
  );
}

Object.assign(window, { ContactPageApp });
