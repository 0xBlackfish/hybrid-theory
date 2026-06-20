import type { ReactNode } from "react";

interface PageHeroProps {
  pretitle?: ReactNode;
  title: ReactNode;
  lead?: ReactNode;
  meta?: ReactNode;
}

export function PageHero({ pretitle, title, lead, meta }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="wrap">
        {pretitle && <div className="mono page-hero-pretitle">{pretitle}</div>}
        <h1 className="page-hero-h">{title}</h1>
        {lead && <p className="page-hero-lead">{lead}</p>}
        {meta && <div className="mono page-hero-meta">{meta}</div>}
      </div>
    </section>
  );
}
