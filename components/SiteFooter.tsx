import Link from "next/link";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <Logo variant="lockup" size={56} />
            <p className="mt-6" style={{ maxWidth: 280, fontSize: 13 }}>
              AI consulting for regular businesses.
            </p>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              <li><Link href="/#opps">The opportunity</Link></li>
              <li><Link href="/#how">How it works</Link></li>
              <li><Link href="/#approach">Our approach</Link></li>
              <li><Link href="/#who">Who it&apos;s for</Link></li>
            </ul>
          </div>
          <div>
            <h4>Firm</h4>
            <ul>
              <li><Link href="/insights">Insights</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4>Get in touch</h4>
            <ul>
              <li><a href="mailto:hello@hybridtheory.ai">hello@hybridtheory.ai</a></li>
              <li><a href="#" data-calendly>Book a call ↗</a></li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <div className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.1em" }}>
            © 2026 · HYBRID THEORY · MMXXVI
          </div>
          <div className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.1em" }}>
            HYBRIDTHEORY.AI
          </div>
        </div>
      </div>
    </footer>
  );
}
