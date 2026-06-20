/* eslint-disable */
// Shared chrome — Nav + Footer + Vanta hero atmosphere helpers — for subpages.
// Subpages render their own <main> between <SiteNav /> and <SiteFooter />.

const NAV_LINKS = [
  { href: "services.html", label: "Services" },
  { href: "insights.html", label: "Insights" },
  { href: "about.html",    label: "About" },
  { href: "contact.html",  label: "Contact" },
];

function SiteNav({ active }) {
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => {
      const nav = document.querySelector(".nav");
      if (!nav) return;
      nav.classList.toggle("scrolled", window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={"nav nav-studio" + (open ? " open" : "")}>
      <div className="nav-inner-grid">
        <a href="index.html" className="nav-logo" style={{ display:"inline-flex", alignItems:"center", gap:11, textDecoration:"none", color:"var(--ink)" }}>
          <Logo variant="mark" size={28} />
          <Logo variant="wordmark" size={18} />
        </a>
        <div className="nav-links nav-links-studio">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className={active === l.href ? "is-active" : ""}>{l.label}</a>
          ))}
        </div>
        <div className="nav-cta">
          <a href="#" data-calendly className="btn btn-primary nav-btn">
            Book a call <span style={{ opacity:0.6, fontSize:11 }}>↗</span>
          </a>
        </div>
        <button className="nav-toggle" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(o => !o)}>
          {open ? (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M4 4 L14 14 M14 4 L4 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 5 H15 M3 9 H15 M3 13 H15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
          )}
        </button>
      </div>
      <div className="nav-mobile-panel">
        {NAV_LINKS.map((l) => (
          <a key={l.href} href={l.href} className={active === l.href ? "is-active" : ""} onClick={() => setOpen(false)}>{l.label}</a>
        ))}
        <div className="nav-mobile-cta">
          <a href="#" data-calendly className="btn btn-primary" onClick={() => setOpen(false)}>Book a call <span style={{ opacity:0.6, fontSize:11 }}>↗</span></a>
        </div>
      </div>
    </nav>
  );
}

function SiteFooter() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <Logo variant="lockup" size={56} />
            <p className="mt-6" style={{ maxWidth:280, fontSize:13 }}>
              AI consulting for regular businesses.
            </p>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              <li><a href="services.html#automation">Automation &amp; Custom Tools</a></li>
              <li><a href="services.html#strategy">AI Strategy</a></li>
              <li><a href="services.html#training">Team Training</a></li>
              <li><a href="services.html">All services ↗</a></li>
            </ul>
          </div>
          <div>
            <h4>Firm</h4>
            <ul>
              <li><a href="about.html">About</a></li>
              <li><a href="insights.html">Insights</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4>Get in touch</h4>
            <ul>
              <li><a href="mailto:hello@hybridtheory.ai">hello@hybridtheory.ai</a></li>
              <li><a href="#">Book a call ↗</a></li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <div className="mono" style={{ fontSize:11, color:"var(--ink-mute)", letterSpacing:"0.1em" }}>
            © 2026 · HYBRID THEORY · MMXXVI
          </div>
          <div className="mono" style={{ fontSize:11, color:"var(--ink-mute)", letterSpacing:"0.1em" }}>
            HYBRIDTHEORY.AI
          </div>
        </div>
      </div>
    </footer>
  );
}

/* Compact subpage hero — title + lead + optional pretitle */
function PageHero({ pretitle, title, lead, meta }) {
  return (
    <section className="page-hero">
      <div className="wrap">
        {pretitle && (
          <div className="mono page-hero-pretitle">{pretitle}</div>
        )}
        <h1 className="page-hero-h">{title}</h1>
        {lead && <p className="page-hero-lead">{lead}</p>}
        {meta && <div className="mono page-hero-meta">{meta}</div>}
      </div>
    </section>
  );
}

/* End-of-page CTA — reused */
function PageCTA({ title, sub }) {
  return (
    <section className="bigcta" id="contact">
      <div className="wrap">
        <div className="sec-marker mono" style={{ justifyContent:"center", display:"inline-flex" }}>
          <span className="sec-num">§</span>
          <span className="sec-name">Start here</span>
        </div>
        <h2 className="mt-6">{title}</h2>
        {sub && <p className="lead">{sub}</p>}
        <div className="cta">
          <a href="#" className="btn btn-primary">
            Book a call <span style={{ opacity:0.7, fontSize:11 }}>↗</span>
          </a>
          <a href="mailto:hello@hybridtheory.ai" className="btn btn-ghost">hello@hybridtheory.ai</a>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { SiteNav, SiteFooter, PageHero, PageCTA, SiteTweaks });

/* Tweaks panel — minimal set for subpages.
   Requires tweaks-panel.jsx to be loaded before this file.
   Mirrors home palette/type/wave tweaks so the page looks consistent. */
function SiteTweaks() {
  if (typeof window.useTweaks !== "function" || typeof window.TweaksPanel !== "function") {
    return null;
  }
  const [t, setTweak] = window.useTweaks({
    palette: "lime",
    type: "grotesque",
    logoVariant: "wordmark",
  });
  React.useEffect(() => {
    document.documentElement.dataset.palette = t.palette;
    document.documentElement.dataset.type = t.type;
  }, [t.palette, t.type]);
  const TP = window.TweaksPanel;
  const TS = window.TweakSection;
  const TC = window.TweakColor;
  const TR = window.TweakRadio;
  return (
    <TP title="Tweaks">
      <TS title="Accent color">
        <TC label="Pop" value={t.palette} onChange={(v) => setTweak("palette", v)}
          options={[["#B9FF35","#0E0F12","#F4F2EA"],["#F5A623","#0E0F12","#F4F2EA"],["#FF3DA5","#0E0F12","#F4F2EA"],["#5BE3FF","#0E0F12","#F4F2EA"]]}
          optionValues={["lime","amber","magenta","sky"]} />
      </TS>
      <TS title="Typography">
        <TR value={t.type} onChange={(v) => setTweak("type", v)}
          options={[{value:"editorial",label:"Editorial"},{value:"grotesque",label:"Grotesque"},{value:"mono",label:"Mono"}]} />
      </TS>
    </TP>
  );
}
