import type { CSSProperties } from "react";
import { INDUSTRIES } from "../whoForIcons";

export function WhoFor() {
  return (
    <section id="who" className="htv-section htv-band htv-whofor">
      <div className="htv-whofor-aurora" aria-hidden="true" />
      <div className="htv-wrap">
        <div className="htv-sec-head">
          <span className="htv-kicker">Who it&rsquo;s for</span>
          <h2>For owners who run real businesses.</h2>
          <p>
            If you grow by answering customers fast and doing great work, this was built for you. A
            few we know well &mdash; and the list keeps growing:
          </p>
        </div>
        <div className="htv-whofor-grid">
          {INDUSTRIES.map((ind) => (
            <div className="htv-whofor-tile" key={ind.label} style={{ "--c": ind.accent } as CSSProperties}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="htv-whofor-ic" src={ind.icon} alt="" aria-hidden="true" />
              <span className="htv-whofor-nm">{ind.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
