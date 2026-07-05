import Link from "next/link";
import { Logo } from "./Logo";

const VERTICALS: { label: string; slug: string }[] = [
  { label: "HVAC & plumbing", slug: "hvac-plumbing" },
  { label: "Roofers", slug: "roofers" },
  { label: "Contractors", slug: "contractors" },
  { label: "Dentists", slug: "dentists" },
  { label: "Med spas", slug: "med-spas" },
  { label: "Landscapers", slug: "landscapers" },
  { label: "Auto shops", slug: "auto-shops" },
  { label: "Realtors", slug: "realtors" },
  { label: "Accounting firms", slug: "accounting-firms" },
  { label: "Law practices", slug: "law-practices" },
  { label: "Tutoring", slug: "tutoring" },
];

export function SiteFooter() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <Logo variant="lockup" size={56} />
            <p className="mt-6" style={{ maxWidth: 280, fontSize: 13 }}>
              AI for service businesses. You run the business — it takes care of the busywork.
            </p>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              <li><Link href="/#inaction">See it in action</Link></li>
              <li><Link href="/#opps">Where the upside lives</Link></li>
              <li><Link href="/#how">How it works</Link></li>
              <li><Link href="/#who">Who it&apos;s for</Link></li>
            </ul>
          </div>
          <div>
            <h4>Who we help</h4>
            <ul className="htv-foot-verticals">
              {VERTICALS.map((v) => (
                <li key={v.slug}><Link href={`/for/${v.slug}`}>{v.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Get in touch</h4>
            <ul>
              <li><a href="mailto:hello@hybridtheory.ai">hello@hybridtheory.ai</a></li>
              <li><a href="https://calendly.com/hybridtheory/30min" target="_blank" rel="noopener" data-calendly>Book a call ↗</a></li>
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
