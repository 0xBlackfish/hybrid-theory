import type { ReactNode } from "react";

const MonoD = ({ children, size = 10, color }: { children: ReactNode; size?: number; color?: string }) => (
  <div className="mono" style={{ fontSize: size, letterSpacing: "0.1em", textTransform: "uppercase", color: color || "var(--ink-mute)" }}>
    {children}
  </div>
);

export function WideVisualD({ id }: { id: string }) {
  if (id === "support") {
    const clusters: [string, number, boolean][] = [
      ["Filter resets", 14, true],
      ["Bulk edit", 9, false],
      ["Archive vs delete", 7, false],
      ["Quickbooks sync", 5, false],
      ["Mobile crash", 4, false],
      ["Slow export", 3, false],
    ];
    const tickets: [string, string, string][] = [
      ["#48211", "Marisol R., Tue 9:14a", "When I switch from Customers to Invoices and back, my date filter is gone. Have to set it again every single time…"],
      ["#48207", "Devon H., Mon 4:02p", "Pretty sure the filter is broken. It clears when I navigate away. Slack me if you need a video."],
      ["#48198", "Yusuf K., Mon 10:47a", "Hi — small bug: filters don't persist across tabs. Annoying when reviewing weekly batches."],
    ];
    return (
      <div style={{ display: "grid", gridTemplateColumns: "320px 1fr 280px", gap: 18, alignItems: "start" }}>
        <div style={{ background: "#fff", borderRadius: 10, padding: 16, border: "1px solid var(--rule)" }}>
          <MonoD>Clusters · this week</MonoD>
          <div style={{ display: "grid", gap: 8, marginTop: 12 }}>
            {clusters.map(([t, n, active], i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "8px 10px",
                  background: active ? "var(--paper-2)" : "transparent",
                  borderRadius: 6,
                  fontSize: 12,
                  color: active ? "var(--ink)" : "var(--ink-soft)",
                  fontWeight: active ? 500 : 400,
                }}
              >
                <span>{t}</span>
                <span className="mono" style={{ fontSize: 11 }}>{n}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ background: "#fff", borderRadius: 10, padding: 18, border: "1px solid var(--rule)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 12 }}>
            <div style={{ fontSize: 16, color: "var(--ink)", fontWeight: 500 }}>Filter resets on tab switch</div>
            <MonoD>14 tickets · BUG</MonoD>
          </div>
          <div style={{ display: "grid", gap: 10 }}>
            {tickets.map(([tid, who, body], i) => (
              <div key={i} style={{ paddingBottom: 10, borderBottom: i < 2 ? "1px dashed var(--rule)" : "none" }}>
                <div style={{ display: "flex", gap: 10, alignItems: "baseline" }}>
                  <span className="mono" style={{ fontSize: 10, color: "var(--ink-mute)" }}>{tid}</span>
                  <span style={{ fontSize: 11, color: "var(--ink-soft)" }}>{who}</span>
                </div>
                <div style={{ fontSize: 12, color: "var(--ink-soft)", marginTop: 4, lineHeight: 1.5 }}>&quot;{body}&quot;</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ background: "var(--ink)", color: "var(--paper)", borderRadius: 10, padding: 18 }}>
          <MonoD color="rgba(255,255,255,0.5)">Recommendation</MonoD>
          <div style={{ fontSize: 14, lineHeight: 1.45, marginTop: 10 }}>
            Persist filter state in URL params. Low complexity (S), affects 14 tickets / 9 unique customers in the last 30 days.
          </div>
          <div style={{ marginTop: 14, display: "flex", gap: 8, flexWrap: "wrap" }}>
            <span style={{ fontSize: 10, padding: "4px 8px", background: "var(--accent)", color: "var(--ink)", borderRadius: 99, fontFamily: "var(--mono)", letterSpacing: "0.08em" }}>HIGH IMPACT</span>
            <span style={{ fontSize: 10, padding: "4px 8px", border: "1px solid rgba(255,255,255,0.3)", borderRadius: 99, fontFamily: "var(--mono)", letterSpacing: "0.08em" }}>SIZE: S</span>
          </div>
        </div>
      </div>
    );
  }
  if (id === "calls") {
    const queue = [
      { name: "Marisol R.", reason: "Brake quote — '19 Civic", time: "9:14a", slot: "Tue 2:00p", isNew: true },
      { name: "Devon H.", reason: "Tune-up follow-up", time: "10:02a", slot: "Wed 9:30a", isNew: false },
      { name: "Yusuf K.", reason: "Battery, possibly", time: "11:47a", slot: "Tue 4:15p", isNew: false },
      { name: "Aisha B.", reason: "Tire rotation + alignment", time: "12:30p", slot: "Thu 10:00a", isNew: true },
      { name: "Tomás L.", reason: "Check engine light", time: "1:11p", slot: "Tue 3:00p", isNew: false },
    ];
    return (
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 20 }}>
        <div style={{ background: "#fff", borderRadius: 10, padding: 18, border: "1px solid var(--rule)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 14 }}>
            <MonoD>Today · missed</MonoD>
            <MonoD color="var(--ink-soft)">7 in queue</MonoD>
          </div>
          <div style={{ display: "grid", gap: 10 }}>
            {queue.map((c, i) => (
              <div key={i} style={{ padding: 10, border: "1px solid var(--rule)", borderRadius: 8, display: "grid", gridTemplateColumns: "1fr auto", gap: 8, alignItems: "center" }}>
                <div>
                  <div style={{ fontSize: 13, color: "var(--ink)", fontWeight: 500, display: "flex", alignItems: "center", gap: 6 }}>
                    {c.name}
                    {c.isNew && <span style={{ width: 6, height: 6, borderRadius: 99, background: "var(--accent)" }} />}
                  </div>
                  <div style={{ fontSize: 11, color: "var(--ink-soft)" }}>{c.reason} · <span className="mono">{c.time}</span></div>
                </div>
                <div style={{ background: i === 0 ? "var(--accent)" : "var(--paper-2)", padding: "5px 10px", borderRadius: 99, fontSize: 11, fontFamily: "var(--mono)", color: "var(--ink)", letterSpacing: "0.06em" }}>{c.slot}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ background: "#fff", borderRadius: 10, padding: 22, border: "1px solid var(--rule)" }}>
          <MonoD>Suggested message · Marisol R.</MonoD>
          <div style={{ fontSize: 15, color: "var(--ink)", marginTop: 14, lineHeight: 1.55 }}>
            Hi Marisol — sorry we missed you at 9:14a. Saw you were asking about brakes for the &apos;19 Civic. We have <span style={{ background: "var(--accent)" }}>Tue 2:00p</span> open if you want to bring it in for a quote — should take about 20 min. Reply YES to confirm.
          </div>
          <div style={{ marginTop: 18, display: "flex", gap: 10, flexWrap: "wrap" }}>
            <button style={{ background: "var(--ink)", color: "var(--paper)", border: "none", padding: "9px 16px", borderRadius: 99, fontSize: 12, fontFamily: "var(--sans)" }}>Send &amp; book ↗</button>
            <button style={{ background: "transparent", color: "var(--ink)", border: "1px solid var(--rule)", padding: "9px 16px", borderRadius: 99, fontSize: 12, fontFamily: "var(--sans)" }}>Suggest other times</button>
            <button style={{ background: "transparent", color: "var(--ink-soft)", border: "1px solid var(--rule)", padding: "9px 16px", borderRadius: 99, fontSize: 12, fontFamily: "var(--sans)" }}>Edit copy</button>
          </div>
          <div style={{ marginTop: 22, paddingTop: 18, borderTop: "1px solid var(--rule)" }}>
            <MonoD>Why this slot</MonoD>
            <ul style={{ margin: "10px 0 0", padding: "0 0 0 18px", color: "var(--ink-soft)", fontSize: 12, lineHeight: 1.7 }}>
              <li>Brake jobs run 18–28min on her vehicle class.</li>
              <li>She called from a number that&apos;s been a customer 3× since &apos;23.</li>
              <li>Tue 2:00p has the right tech on shift and a free bay.</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  if (id === "tutoring") {
    const rows = [
      { name: "A. Patel", subj: "Algebra II", score: 92, dur: "45m", trend: "+4" },
      { name: "M. Chen", subj: "SAT Math", score: 78, dur: "60m", trend: "−2" },
      { name: "J. Okafor", subj: "Bio · AP", score: 88, dur: "30m", trend: "+1" },
      { name: "S. Diaz", subj: "Chem", score: 81, dur: "45m", trend: "0" },
      { name: "R. Kim", subj: "Pre-calc", score: 74, dur: "60m", trend: "−5" },
    ];
    return (
      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 20 }}>
        <div style={{ background: "#fff", borderRadius: 10, padding: 18, border: "1px solid var(--rule)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 14 }}>
            <MonoD>This week · 42 sessions</MonoD>
            <MonoD color="var(--ink-soft)">avg 84</MonoD>
          </div>
          <div style={{ display: "grid", gap: 10 }}>
            {rows.map((r, i) => (
              <div key={i} style={{ padding: "10px 12px", border: "1px solid var(--rule)", borderRadius: 8 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6 }}>
                  <div style={{ fontSize: 13 }}>
                    <span style={{ color: "var(--ink)", fontWeight: 500 }}>{r.name}</span>
                    <span style={{ color: "var(--ink-soft)" }}> · {r.subj} · {r.dur}</span>
                  </div>
                  <div style={{ display: "flex", gap: 10, alignItems: "baseline" }}>
                    <span className="mono" style={{ fontSize: 11, color: r.trend.startsWith("−") ? "var(--ink-soft)" : "var(--ink)" }}>{r.trend}</span>
                    <span className="mono" style={{ fontSize: 14, color: "var(--ink)" }}>{r.score}</span>
                  </div>
                </div>
                <div style={{ height: 4, background: "var(--paper-2)", borderRadius: 2, overflow: "hidden" }}>
                  <div style={{ width: `${r.score}%`, height: "100%", background: "var(--ink)" }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ background: "var(--ink)", color: "var(--paper)", borderRadius: 10, padding: 22 }}>
          <MonoD color="rgba(255,255,255,0.5)">Coaching note · M. Chen</MonoD>
          <div style={{ fontSize: 15, marginTop: 10, lineHeight: 1.55 }}>
            Rushed the last 10 minutes — three problems closed without check-ins. Set a 5-min remaining timer mid-session and end with two verbal recall prompts.
          </div>
          <div style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid rgba(255,255,255,0.15)" }}>
            <MonoD color="rgba(255,255,255,0.5)">Source quote · 51:14</MonoD>
            <div style={{ fontSize: 13, fontStyle: "italic", marginTop: 8, color: "rgba(255,255,255,0.85)" }}>
              &quot;We&apos;re running short, let me just walk through 14, 15 and 16 — got it? Cool, see you Thursday.&quot;
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (id === "listings") {
    const listings = [
      { addr: "1429 OAK GROVE LN", spec: "3BR · 2BA · 1,840 sqft", body: "Sunlit ranch on a quiet cul-de-sac. Original oak floors run from the entry through a renovated kitchen with quartz counters and a gas range. The primary opens to a covered porch overlooking a fenced backyard with mature trees…" },
      { addr: "88 BIRCH ST · #4C", spec: "2BR · 1BA · 920 sqft · CONDO", body: "South-facing two-bedroom on the fourth floor. Floor-to-ceiling windows, in-unit laundry, and a deeded parking space steps from the lobby. Building amenities include a roof deck, bike room, and on-site super…" },
    ];
    return (
      <div style={{ display: "grid", gridTemplateColumns: "260px 1fr 1fr", gap: 18 }}>
        <div style={{ background: "#fff", borderRadius: 10, padding: 16, border: "1px solid var(--rule)" }}>
          <MonoD>Batch progress</MonoD>
          <div style={{ fontSize: 36, fontFamily: "var(--serif)", marginTop: 10, lineHeight: 1 }}>124<span style={{ color: "var(--ink-mute)", fontSize: 18 }}>/200</span></div>
          <div style={{ height: 6, background: "var(--paper-2)", borderRadius: 3, overflow: "hidden", margin: "12px 0 14px" }}>
            <div style={{ width: "62%", height: "100%", background: "var(--accent)" }} />
          </div>
          <MonoD color="var(--ink-soft)">14m elapsed · ETA 9m</MonoD>
          <div style={{ marginTop: 18, paddingTop: 14, borderTop: "1px solid var(--rule)", display: "grid", gap: 6 }}>
            <div style={{ fontSize: 12, color: "var(--ink-soft)" }}>Brand voice: <span style={{ color: "var(--ink)" }}>Warm-pro</span></div>
            <div style={{ fontSize: 12, color: "var(--ink-soft)" }}>Length: <span style={{ color: "var(--ink)" }}>120–160 words</span></div>
            <div style={{ fontSize: 12, color: "var(--ink-soft)" }}>Avoid: <span style={{ color: "var(--ink)" }}>&quot;luxury&quot;, &quot;stunning&quot;</span></div>
          </div>
        </div>
        {listings.map((l, i) => (
          <div key={i} style={{ background: "#fff", borderRadius: 10, padding: 18, border: "1px solid var(--rule)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 10 }}>
              <MonoD>{l.addr}</MonoD>
              <MonoD color="var(--ink-soft)">{l.spec}</MonoD>
            </div>
            <div style={{ fontSize: 13, color: "var(--ink)", lineHeight: 1.55 }}>{l.body}</div>
            <div style={{ marginTop: 14, display: "flex", gap: 8 }}>
              <span style={{ fontSize: 10, padding: "3px 8px", background: "var(--paper-2)", borderRadius: 99, fontFamily: "var(--mono)", letterSpacing: "0.06em" }}>READY</span>
              <span style={{ fontSize: 10, padding: "3px 8px", background: "var(--accent)", borderRadius: 99, fontFamily: "var(--mono)", letterSpacing: "0.06em" }}>ON-BRAND ✓</span>
            </div>
          </div>
        ))}
      </div>
    );
  }
  if (id === "followups") {
    const sessions = [
      { p: "/products/m-series", t: "3m 12s", d: "Yesterday 4:22p" },
      { p: "/products/m-series.pdf", t: "1m 04s", d: "Yesterday 4:25p" },
      { p: "/warranty", t: "1m 40s", d: "Yesterday 4:31p" },
      { p: "/pricing", t: "0m 22s", d: "Today 9:08a" },
    ];
    return (
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        <div style={{ background: "#fff", borderRadius: 10, padding: 18, border: "1px solid var(--rule)" }}>
          <MonoD>Jordan Hill · Northstead Mfg.</MonoD>
          <div style={{ marginTop: 14, display: "grid", gap: 10 }}>
            {sessions.map((s, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr auto auto", gap: 12, padding: "8px 0", borderBottom: i < 3 ? "1px dashed var(--rule)" : "none", alignItems: "baseline" }}>
                <span className="mono" style={{ fontSize: 11, color: "var(--ink)" }}>{s.p}</span>
                <span className="mono" style={{ fontSize: 10, color: "var(--ink-soft)" }}>{s.t}</span>
                <span className="mono" style={{ fontSize: 10, color: "var(--ink-mute)" }}>{s.d}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 16, padding: 12, background: "var(--paper-2)", borderRadius: 8 }}>
            <MonoD color="var(--ink-soft)">Signal</MonoD>
            <div style={{ fontSize: 12, color: "var(--ink)", marginTop: 4, lineHeight: 1.5 }}>High intent on M-Series. Re-opened spec PDF this morning. Warranty was the last sticky page.</div>
          </div>
        </div>
        <div style={{ background: "#fff", borderRadius: 10, padding: 22, border: "1px solid var(--rule)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 12 }}>
            <MonoD>Draft email</MonoD>
            <MonoD color="var(--ink-soft)">Ready for review</MonoD>
          </div>
          <div style={{ fontSize: 11, color: "var(--ink-soft)", marginBottom: 2 }}>To: jordan@northstead.com</div>
          <div style={{ fontSize: 11, color: "var(--ink-soft)", marginBottom: 14 }}>Subject: About the M-Series spec sheet</div>
          <div style={{ fontSize: 14, color: "var(--ink)", lineHeight: 1.55 }}>
            Hi Jordan —<br /><br />
            Saw you spent some time on the <span style={{ background: "var(--accent)" }}>M-Series spec PDF</span> and the <span style={{ background: "var(--accent)" }}>warranty page</span> yesterday. The most common thing folks ask after that is about lead times — we&apos;re running about <strong>5–6 weeks</strong> on M-Series this quarter.<br /><br />
            Want me to hold a build slot while you decide? No pressure either way.
          </div>
          <div style={{ marginTop: 18, display: "flex", gap: 10, flexWrap: "wrap" }}>
            <button style={{ background: "var(--ink)", color: "var(--paper)", border: "none", padding: "9px 16px", borderRadius: 99, fontSize: 12 }}>Send ↗</button>
            <button style={{ background: "transparent", color: "var(--ink)", border: "1px solid var(--rule)", padding: "9px 16px", borderRadius: 99, fontSize: 12 }}>Edit</button>
            <button style={{ background: "transparent", color: "var(--ink-soft)", border: "1px solid var(--rule)", padding: "9px 16px", borderRadius: 99, fontSize: 12 }}>Snooze 24h</button>
          </div>
        </div>
      </div>
    );
  }
  return null;
}
