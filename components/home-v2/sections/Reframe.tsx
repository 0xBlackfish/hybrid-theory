const CHECK = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);
const CLOCK = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

// The annotated best reply — each highlight pairs with a legend dot below.
const HL = { name: "#F5A623", roof: "#5BE3FF", guy: "#B9FF35" };

export function Reframe() {
  return (
    <section id="reframe" className="htv-reframe">
      <div className="htv-wrap">
        <div className="htv-sec-head">
          <span className="htv-kicker">What we&rsquo;re here to do</span>
          <h2>
            We&rsquo;re here to <em>grow your business</em> &mdash; and hand you your time back.
          </h2>
          <p>
            Every project we take on has to move at least one of three needles for you. The best
            ones move all three at once.
          </p>
        </div>

        <div className="htv-levers">
          <div className="htv-lever">
            <div className="htv-lever-num">01</div>
            <h3>Make more money</h3>
            <p>Answer first, quote faster, follow through &mdash; and the calendar fills.</p>
            {/* a clean ledger of caught money — outcomes, not a chart */}
            <div className="htv-story htv-story--ledger">
              <div className="htv-rcpt"><span className="htv-rcpt-ck">{CHECK}</span><span className="htv-rcpt-l">Booked · Thu 9:00 AM</span><span className="htv-rcpt-a">$420</span></div>
              <div className="htv-rcpt"><span className="htv-rcpt-ck">{CHECK}</span><span className="htv-rcpt-l">Quote signed</span><span className="htv-rcpt-a">$6,450</span></div>
              <div className="htv-rcpt"><span className="htv-rcpt-ck">{CHECK}</span><span className="htv-rcpt-l">Rebooked</span><span className="htv-rcpt-a">$180</span></div>
            </div>
          </div>

          <div className="htv-lever">
            <div className="htv-lever-num">02</div>
            <h3>Win back your time</h3>
            <p>The busywork gets handled, so your days go to the work only you can do.</p>
            <div className="htv-story htv-story--tasks">
              <div className="htv-story-title">Tonight&rsquo;s busywork</div>
              <div className="htv-ck-row htv-ck-row--done"><span className="htv-ck-box">{CHECK}</span><span className="htv-ck-name">Invoice #2048</span><span className="htv-ck-tag htv-ck-tag--done">chased</span></div>
              <div className="htv-ck-row htv-ck-row--done"><span className="htv-ck-box">{CHECK}</span><span className="htv-ck-name">Tomorrow&rsquo;s jobs</span><span className="htv-ck-tag htv-ck-tag--done">confirmed</span></div>
              <div className="htv-ck-row htv-ck-row--done"><span className="htv-ck-box">{CHECK}</span><span className="htv-ck-name">Review asks</span><span className="htv-ck-tag htv-ck-tag--done">sent</span></div>
              <div className="htv-story-payoff">{CLOCK}6:05 PM · phone quiet, dinner on time.</div>
            </div>
          </div>

          <div className="htv-lever">
            <div className="htv-lever-num">03</div>
            <h3>Raise your game</h3>
            <p>Every customer gets your best &mdash; morning, midnight, or mid-rush.</p>
            <div className="htv-story htv-story--best">
              <div className="htv-best-bub">
                Hi <span className="htv-best-hl" style={{ "--hl": HL.name } as React.CSSProperties}>Dana</span> &mdash; saw the
                photos. That <span className="htv-best-hl" style={{ "--hl": HL.roof } as React.CSSProperties}>flashing</span>&rsquo;s
                an easy fix; <span className="htv-best-hl" style={{ "--hl": HL.guy } as React.CSSProperties}>Marco</span> can
                be out Thursday at 9. Want me to lock it in?
              </div>
              <div className="htv-best-notes" aria-hidden="true">
                <span className="htv-best-note" style={{ "--hl": HL.name } as React.CSSProperties}><i />her name</span>
                <span className="htv-best-note" style={{ "--hl": HL.roof } as React.CSSProperties}><i />her roof</span>
                <span className="htv-best-note" style={{ "--hl": HL.guy } as React.CSSProperties}><i />your guy</span>
              </div>
              <div className="htv-best-tag">what &ldquo;your best&rdquo; sounds like</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
