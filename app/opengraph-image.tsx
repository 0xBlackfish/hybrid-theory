import { ImageResponse } from "next/og";
import { OgBrand } from "@/components/og/brand";

export const alt = "Hybrid Theory — AI for service businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** The site's OG card, in its own artifact language: warm paper, ink display
 *  type, and a lime value receipt doing the talking. */
export default function OgImage() {
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
        {/* brand row */}
        <OgBrand />

        {/* headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div
            style={{
              display: "flex",
              fontSize: 78,
              fontWeight: 800,
              color: "#171D18",
              letterSpacing: -3,
              lineHeight: 1.04,
            }}
          >
            Run the business you always pictured.
          </div>
          <div style={{ display: "flex", fontSize: 32, color: "#5C6159", letterSpacing: -0.5 }}>
            More customers. Faster answers. Nothing slipping through the cracks.
          </div>
        </div>

        {/* receipt row */}
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
            New job booked · Thu 9:00 AM
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "#14180F",
              color: "#EAF0E6",
              fontSize: 25,
              fontWeight: 600,
              padding: "16px 26px",
              borderRadius: 999,
            }}
          >
            while you were on a job
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
