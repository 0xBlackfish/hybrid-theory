import { ImageResponse } from "next/og";
import { getVertical, VERTICALS } from "@/content/verticals";

export const alt = "Hybrid Theory — AI for service businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return VERTICALS.map((v) => ({ slug: v.slug }));
}

/** Per-vertical OG card: the trade's own headline + its spotlight receipt,
 *  so a shared /for/ link looks aimed at that owner. */
export default async function OgImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const v = getVertical(slug);
  const headline = v?.hero.headline ?? "Run the business you always pictured.";
  const receipt = v?.spotlight?.receipt ?? "Booked · $420 · Thu 9:00 AM";
  const label = v?.label ?? "Service businesses";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FAF8F1",
          padding: "64px 72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 12,
                background: "#B9FF35",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#171D18",
                fontSize: 30,
                fontWeight: 800,
              }}
            >
              H
            </div>
            <div style={{ display: "flex", fontSize: 30, fontWeight: 700, color: "#171D18", letterSpacing: -0.5 }}>
              Hybrid Theory
            </div>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              fontWeight: 600,
              color: "#3E7B27",
              background: "#EAFFC2",
              padding: "10px 22px",
              borderRadius: 999,
            }}
          >
            AI for {label}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 800,
            color: "#171D18",
            letterSpacing: -2.5,
            lineHeight: 1.06,
          }}
        >
          {headline}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              background: "#B9FF35",
              color: "#171D18",
              fontSize: 27,
              fontWeight: 700,
              padding: "16px 28px",
              borderRadius: 999,
            }}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#171D18" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6 9 17l-5-5" />
            </svg>
            {receipt}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
