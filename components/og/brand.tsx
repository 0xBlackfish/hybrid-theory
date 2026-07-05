/* Brand row for the OG cards (next/og · Satori). Uses the real logo mark
   (paths from components/Logo.tsx, viewBox "9 1 127 91") — Satori renders
   inline SVG natively. */

export function OgBrand() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <svg width="64" height="46" viewBox="9 1 127 91" fill="#171D18">
        <path d="m52.4 25.2-1 1.8c-2.4 5.1-4.9 11.6-4.8 18.2 0.4 13.9 7.4 26.3 17.3 32.3 5 3.5 10.7 7.2 18.5 7.3 16.3 0.1 33.2-12.4 33.3-35-1.2 8-9.6 18.7-24.7 18.7-15.1 0.2-26.1-12.9-25.8-25.2l0.3-3.8-14.1-14.4 1 0.1z" />
        <path d="m52.4 1.2-42.7 43.2 22.3 24c5.6 6.3 11.6 12.7 18.5 21l9.6-10.4c-4-3.1-8.5-9.1-11.5-13.5l-11.5-13-7.8-8.1 23-23.3 22.8 23.3-5.4 5.5c0.9 3.2 4.8 8.6 8.7 11.1l16.7-16.6-42.7-43.8v0.6z" />
        <path d="m66.1 9.2 13.2 13.9c2.8-1.4 7.1-2.6 11.9-2.6 6.2 0 10.9 1.9 14.7 4.5 6.5 4.2 12.1 12.4 12.1 24.9 0.2 16.3-10.9 32.5-29.8 36.7 0.9 0.3 20.7 2 35.2-13.2 7.2-7.4 12.4-17.3 12.4-29-0.3-21.5-18.3-42.5-44.5-42.6-8.9 0-16.7 2-25.2 7.1v0.3z" />
      </svg>
      <div style={{ display: "flex", fontSize: 30, fontWeight: 700, color: "#171D18", letterSpacing: -0.5 }}>
        Hybrid Theory
      </div>
    </div>
  );
}

/** Receipts are "·"-separated; dollar segments are illustrative, so shared
 *  cards drop them: "Recovered · $2,480 · 6 jobs back" → "Recovered · 6 jobs back". */
export function deDollarReceipt(receipt: string): string {
  return receipt
    .split("·")
    .map((s) => s.trim())
    .filter((s) => !s.includes("$"))
    .join(" · ");
}
