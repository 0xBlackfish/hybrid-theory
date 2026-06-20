import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

const LINKS = [
  { href: "/services", k: "Services", d: "How we work — automation, strategy, training." },
  { href: "/about", k: "About", d: "Who we are and why we exist." },
  { href: "/insights", k: "Insights", d: "Field notes, case studies, essays." },
  { href: "/contact", k: "Contact", d: "Grab a 30-minute call." },
];

export default function NotFound() {
  return (
    <>
      <SiteNav />
      <main>
        <section className="page-hero" style={{ paddingBottom: 48 }}>
          <div className="wrap">
            <div className="mono page-hero-pretitle">Error 404</div>
            <h1 className="page-hero-h">
              This one&apos;s <span className="italic" style={{ color: "var(--accent)" }}>still manual</span>.
            </h1>
            <p className="page-hero-lead">
              The page you&apos;re after doesn&apos;t exist — or it moved, and we haven&apos;t built the thing that redirects you yet. Ironic, we know.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
              <Link href="/" className="btn btn-primary">Back home <span style={{ opacity: 0.6, fontSize: 11 }}>→</span></Link>
              <Link href="/insights" className="btn btn-ghost">Read something instead</Link>
            </div>
          </div>
        </section>

        <section className="notfound-links">
          <div className="wrap">
            <div className="mono notfound-links-label">Try one of these</div>
            <div className="notfound-grid">
              {LINKS.map((l) => (
                <Link key={l.href} href={l.href} className="notfound-card">
                  <div className="notfound-card-k">{l.k}</div>
                  <div className="notfound-card-d">{l.d}</div>
                  <div className="mono notfound-card-go">Go →</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
