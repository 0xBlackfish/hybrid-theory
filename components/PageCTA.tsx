import type { ReactNode } from "react";

interface PageCTAProps {
  title: ReactNode;
  sub?: ReactNode;
}

export function PageCTA({ title, sub }: PageCTAProps) {
  return (
    <section className="bigcta" id="contact">
      <div className="wrap">
        <div className="sec-marker mono" style={{ justifyContent: "center", display: "inline-flex" }}>
          <span className="sec-num">§</span>
          <span className="sec-name">Start here</span>
        </div>
        <h2 className="mt-6">{title}</h2>
        {sub && <p className="lead">{sub}</p>}
        <div className="cta">
          <a href="https://calendly.com/hybridtheory/30min" target="_blank" rel="noopener" data-calendly className="btn btn-primary">
            Book your free 30-minute assessment <span style={{ opacity: 0.7, fontSize: 11 }}>↗</span>
          </a>
          <a href="mailto:hello@hybridtheory.ai" className="btn btn-ghost">hello@hybridtheory.ai</a>
        </div>
      </div>
    </section>
  );
}
