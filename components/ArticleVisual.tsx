import type { CSSProperties } from "react";
import type { ArticleVisualData } from "@/lib/posts";

const wrap: CSSProperties = {
  background: "var(--paper-2)",
  border: "1px solid var(--rule)",
  borderRadius: 14,
  padding: 28,
  aspectRatio: "5 / 3",
  position: "relative",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

const monoCap: CSSProperties = {
  fontSize: 10,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "var(--accent)",
  fontWeight: 600,
};

export function ArticleVisual({ v }: { v: ArticleVisualData }) {
  if (v.kind === "mock-strategy") {
    return (
      <div style={wrap}>
        <div style={{ position: "absolute", top: -40, right: -30, width: 200, height: 200, borderRadius: "50%", background: "var(--accent)", filter: "blur(60px)", opacity: 0.2 }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div className="mono" style={monoCap}>30-day readiness</div>
          <h4 style={{ fontFamily: "var(--serif)", fontSize: 28, lineHeight: 1.1, letterSpacing: "-0.02em", margin: "8px 0 14px", color: "var(--ink)" }}>Acme Auto · Tucson</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {["Week 1 — Discovery", "Week 2 — Inventory", "Week 3 — Opportunities", "Week 4 — Roadmap"].map((t, i) => (
              <div key={t} style={{ display: "grid", gridTemplateColumns: "16px 1fr", gap: 8, alignItems: "center" }}>
                <span style={{ width: 10, height: 10, borderRadius: 99, background: i < 2 ? "var(--accent)" : "var(--rule)" }} />
                <span style={{ fontSize: 12, color: i < 2 ? "var(--ink)" : "var(--ink-soft)" }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mono" style={{ fontSize: 9.5, letterSpacing: "0.14em", color: "var(--ink-mute)", textTransform: "uppercase", position: "relative", zIndex: 1 }}>{v.caption}</div>
      </div>
    );
  }
  if (v.kind === "mock-quote") {
    return (
      <div style={wrap}>
        <div className="mono" style={monoCap}>Quote #1147</div>
        <div>
          <h4 style={{ fontFamily: "var(--serif)", fontSize: 24, lineHeight: 1.1, letterSpacing: "-0.02em", margin: "12px 0 14px", color: "var(--ink)" }}>Front-axle brake service · &apos;19 Civic</h4>
          <div style={{ background: "#FFFFFF", border: "1px solid var(--rule)", borderRadius: 8, padding: 12, fontSize: 12.5, color: "var(--ink)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "4px 0", borderBottom: "1px dashed var(--rule)" }}>
              <span>Brake rotor, front (×2)</span><span className="mono">$184.00</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "4px 0", borderBottom: "1px dashed var(--rule)" }}>
              <span>Brake pad set, front</span><span className="mono">$78.00</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "4px 0", borderBottom: "1px dashed var(--rule)" }}>
              <span>Labor (2.5 hrs)</span><span className="mono">$275.00</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "6px 0 0", fontWeight: 600 }}>
              <span>Total</span>
              <span className="mono" style={{ color: "var(--accent)" }}>$579.00</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (v.kind === "mock-letter") {
    return (
      <div style={{ ...wrap, background: "#FFFFFF", color: "#0A0A08", padding: 32 }}>
        <div style={{ fontFamily: "var(--serif)", fontSize: 14, fontStyle: "italic", color: "var(--ink-mute)" }}>Dear Board,</div>
        <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
          <div style={{ fontFamily: "var(--serif)", fontSize: 36, lineHeight: 1.05, letterSpacing: "-0.025em", color: "#0A0A08", fontStyle: "italic" }}>Hire a <span style={{ background: "var(--accent)", padding: "0 6px" }}>Tuesday</span>, not a CTO.</div>
        </div>
        <div className="mono" style={{ fontSize: 9.5, letterSpacing: "0.14em", color: "var(--ink-mute)", textTransform: "uppercase" }}>Memo · March 2026</div>
      </div>
    );
  }
  if (v.kind === "mock-prompts") {
    const patterns = [
      { n: "01", t: "Voice examples", d: "3 real messages → match tone" },
      { n: "02", t: "Refusal clauses", d: "when not to draft anything" },
      { n: "03", t: '"Why this slot"', d: "explain the choice in 2 lines" },
    ];
    return (
      <div style={wrap}>
        <div className="mono" style={monoCap}>Three patterns</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 12 }}>
          {patterns.map((p) => (
            <div key={p.n} style={{ background: "#FFFFFF", border: "1px solid var(--rule)", borderRadius: 8, padding: "10px 12px", display: "grid", gridTemplateColumns: "30px 1fr", gap: 10 }}>
              <span className="mono" style={{ fontSize: 10, color: "var(--accent)", letterSpacing: "0.12em" }}>{p.n}</span>
              <div>
                <div style={{ fontSize: 13, fontWeight: 500, color: "var(--ink)" }}>{p.t}</div>
                <div style={{ fontSize: 11.5, color: "var(--ink-soft)", marginTop: 2 }}>{p.d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (v.kind === "mock-voicemail") {
    const msgs = [
      { who: "Marisol R.", t: "Tue 9:14a", note: "Brake quote — '19 Civic", hot: false },
      { who: "Devon H.", t: "Tue 10:02a", note: "Tune-up follow-up", hot: false },
      { who: "Aisha B.", t: "Tue 12:30p", note: "Tire rotation + alignment", hot: true },
    ];
    return (
      <div style={wrap}>
        <div className="mono" style={monoCap}>Inbound voicemail</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 12 }}>
          {msgs.map((m) => (
            <div key={m.who} style={{ background: "#FFFFFF", border: "1px solid var(--rule)", borderRadius: 8, padding: "10px 12px", display: "grid", gridTemplateColumns: "1fr auto", gap: 8 }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 500, color: "var(--ink)" }}>{m.who}</div>
                <div style={{ fontSize: 11.5, color: "var(--ink-soft)" }}>{m.note}</div>
              </div>
              <span className="mono" style={{ fontSize: 10, background: m.hot ? "var(--accent)" : "var(--paper-2)", color: m.hot ? "#0A0A08" : "var(--ink-soft)", padding: "3px 8px", borderRadius: 99, alignSelf: "center", letterSpacing: "0.08em" }}>{m.t}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
}
