import { LeakCycler } from "./LeakCycler";

export function StripServices() {
  return (
    <section className="svc-section strip-section" id="services">
      <div className="wrap">
        <header className="sec-overhead">
          <div className="sec-marker mono">
            <span className="sec-num">§ 01</span>
            <span className="sec-name">Where it leaks</span>
          </div>
          <h2 className="sec-h">
            Every business is leaking <span className="italic" style={{ color: "var(--amber)" }}>time and value</span>. These are the most common places.
          </h2>
          <div className="sec-sub">
            <p>Money slips out at every stage — from the lead you never called back to the invoice you never chased. Your free assessment finds where yours is going.</p>
          </div>
        </header>

        {/* §01 six-scene cycler — one fixed canvas, auto-advancing, tap a card to jump */}
        <LeakCycler />

        <div className="strip-foot">
          <p className="strip-foot-desc">
            Six of the most common leaks — each a working build, each in the industry it fits best. Tap any to jump in; they run on their own. Your free assessment finds where <strong>yours</strong> is going.
          </p>
          <div className="strip-foot-cta">
            <a className="btn btn-primary" href="#contact" data-calendly>
              Learn where your business can benefit <span style={{ opacity: 0.6, fontSize: 11 }}>↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
