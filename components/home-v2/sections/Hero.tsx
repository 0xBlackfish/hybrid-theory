import { LockDate, LockTime } from "../LockDate";

export function Hero() {
  return (
    <header className="htv-hero">
      <div className="htv-hero-bg">
        <div className="htv-hero-glow" />
      </div>

      <div className="htv-wrap htv-hero-grid">
        <div className="htv-cleft">
          <span className="htv-eyebrow">AI consulting for real businesses</span>
          <h1 className="htv-hero-title">
            Run the business you always <em>pictured</em>.
          </h1>
          <p className="htv-lead">
            More customers. Faster answers. Nothing slipping through the cracks —{" "}
            <b>quietly handled by AI built around how you already work.</b> You run the business. It takes care of the busywork.
          </p>
          <a href="#" data-calendly className="btn btn-primary">
            Book your free 15-min AI Assessment
          </a>
        </div>

        <div className="htv-device-wrap">
          <div className="htv-device">
            <span className="htv-btn-side htv-vol1" />
            <span className="htv-btn-side htv-vol2" />
            <span className="htv-btn-side htv-vol3" />
            <span className="htv-btn-side htv-pwr" />
            <div className="htv-screen">
              <div className="htv-wall" />
              <div className="htv-island" />

              <div className="htv-statusbar">
                <div className="htv-sb-time"><LockTime /></div>
                <div className="htv-sb-right">
                  <svg width="18" height="12" viewBox="0 0 18 12" fill="#fff">
                    <rect x="0" y="8" width="3" height="4" rx="1" />
                    <rect x="5" y="5.5" width="3" height="6.5" rx="1" />
                    <rect x="10" y="3" width="3" height="9" rx="1" />
                    <rect x="15" y="0.5" width="3" height="11.5" rx="1" />
                  </svg>
                  <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
                    <path d="M2 4.8C3.7 3.1 6 2.1 8.5 2.1c2.5 0 4.8 1 6.5 2.7" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
                    <path d="M4.4 7.1C5.5 6 7 5.4 8.5 5.4s3 .6 4.1 1.7" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
                    <circle cx="8.5" cy="9.7" r="1.3" fill="#fff" />
                  </svg>
                  <svg width="26" height="13" viewBox="0 0 26 13" fill="none">
                    <rect x="0.5" y="0.5" width="22" height="12" rx="3.5" stroke="#fff" strokeOpacity="0.5" />
                    <rect x="2" y="2" width="16" height="9" rx="2" fill="#fff" />
                    <rect x="24" y="4" width="2" height="5" rx="1" fill="#fff" fillOpacity="0.6" />
                  </svg>
                </div>
              </div>

              <div className="htv-lock">
                <LockDate />
                <div className="htv-lock-time"><LockTime /></div>
              </div>

              <div className="htv-notifs">
                <div className="htv-notif">
                  <div className="htv-n-head">
                    <span className="htv-n-icon"><span>H</span></span>
                    <span className="htv-n-app">Hybrid</span>
                    <span className="htv-n-time">now</span>
                  </div>
                  <div className="htv-n-title">Good morning, Matt ☀️</div>
                  <div className="htv-n-body"><b>$3,200</b> in new work booked while you slept. Zero leads left waiting.</div>
                </div>
                <div className="htv-notif">
                  <div className="htv-n-head">
                    <span className="htv-n-icon"><span>H</span></span>
                    <span className="htv-n-app">Hybrid</span>
                    <span className="htv-n-time">21m ago</span>
                  </div>
                  <div className="htv-n-title">New 5-star review <span className="htv-n-body htv-star">★★★★★</span></div>
                  <div className="htv-n-body">“Answered me in minutes and did great work.” — asked &amp; collected for you.</div>
                </div>
                <div className="htv-notif">
                  <div className="htv-n-head">
                    <span className="htv-n-icon"><span>H</span></span>
                    <span className="htv-n-app">Hybrid</span>
                    <span className="htv-n-time">1h ago</span>
                  </div>
                  <div className="htv-n-title">Job booked · $420</div>
                  <div className="htv-n-body">Flat-roof repair, Thu 9:00 AM — already on your calendar.</div>
                </div>
              </div>

              <div className="htv-botbar">
                <div className="htv-circ">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="#fff">
                    <path d="M9 7h6l1 2h3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h3l1-2z" />
                    <circle cx="12" cy="14" r="3" fill="#0c0f0d" />
                  </svg>
                </div>
                <div className="htv-circ">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18V5l12-2v13" />
                    <circle cx="6" cy="18" r="3" />
                    <circle cx="18" cy="16" r="3" />
                  </svg>
                </div>
              </div>

              <div className="htv-handle" />
              <div className="htv-reflect" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
