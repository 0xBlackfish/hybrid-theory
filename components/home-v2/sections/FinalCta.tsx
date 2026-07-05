export function FinalCta() {
  return (
    <section id="book" className="htv-final htv-sig">
      <div className="htv-aurora htv-aurora--center" aria-hidden="true" />
      <div className="htv-wrap">
        <span className="htv-kicker" style={{ justifyContent: "center", display: "inline-flex" }}>
          Your move
        </span>
        <h2 style={{ marginTop: "20px" }}>See the business you could be running.</h2>
        <p>
          Thirty minutes, no slides, no commitment &mdash; just a clear read on the one change that
          would pay for itself the fastest.
        </p>
        <a href="https://calendly.com/hybridtheory/30min" target="_blank" rel="noopener" data-calendly className="btn btn-primary" style={{ fontSize: 16, padding: "15px 28px" }}>
          Book your free 30-minute assessment
        </a>

        {/* echo artifact — a small confirmation card that mirrors the outcome */}
        <div className="htv-echo">
          <div className="htv-echo-ic">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <path d="M16 2v4M8 2v4M3 10h18" />
              <path d="m9 15 2 2 4-4" />
            </svg>
          </div>
          <div className="htv-echo-body">
            <div className="htv-echo-t">Assessment · Thu 2:00 PM</div>
            <div className="htv-echo-s">30 min with Hybrid Theory — added to your calendar</div>
          </div>
          <div className="htv-echo-time">confirmed</div>
        </div>
      </div>
    </section>
  );
}
