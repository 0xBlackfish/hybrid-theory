import { TOOL_LOGOS } from "../toolLogos";

export function ToolMarquee() {
  // Duplicate the set so the track can loop seamlessly (translateX -50%).
  const track = [...TOOL_LOGOS, ...TOOL_LOGOS];
  return (
    <section className="htv-toolmq" aria-label="Tools we work with">
      <p className="htv-toolmq-label">Works with the tools you already run</p>
      <div className="htv-toolmq-viewport">
        <div className="htv-toolmq-track">
          {track.map((t, i) => (
            <div className="htv-toolmq-item" key={t.name + i} aria-hidden={i >= TOOL_LOGOS.length}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="htv-toolmq-ic" src={t.logo} alt="" aria-hidden="true" />
              <span className="htv-toolmq-nm">{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
