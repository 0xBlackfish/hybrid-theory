import { ImageResponse } from "next/og";
import { VERTICALS } from "@/content/verticals";
import { OgBrand } from "@/components/og/brand";

export const alt = "Hybrid Theory — AI for service businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return VERTICALS.map((v) => ({ slug: v.slug }));
}

/* Card copy is deliberately its own thing (not the page hero): one parallel
   structure across all trades — the moment every owner recognizes, answered
   by a receipt of it handled — so a shared link reads as a complete story
   without any page context. No dollar figures (illustrative amounts stay on
   the page, not in previews). */
const OG_COPY: Record<string, { headline: string; receipt: string }> = {
  "hvac-plumbing": {
    headline: "The no-heat call your voicemail used to lose.",
    receipt: "Answered · booked for 8:00 AM",
  },
  roofers: {
    headline: "Forty storm calls in one morning.",
    receipt: "Triaged · 11 inspections booked by noon",
  },
  contractors: {
    headline: "The change order that usually gets eaten.",
    receipt: "Priced · e-signed · same morning",
  },
  dentists: {
    headline: "The 9:40 cancellation and the empty chair.",
    receipt: "Backfilled from your ASAP list",
  },
  "med-spas": {
    headline: "The 11pm DM asking about Friday.",
    receipt: "Answered · consult booked",
  },
  landscapers: {
    headline: "Renewal season, while your crews are still rolling.",
    receipt: "Contracts renewed · upsells included",
  },
  "auto-shops": {
    headline: "The brake job they declined in March.",
    receipt: "Followed up · back on the lift in June",
  },
  realtors: {
    headline: "Sunday's open-house sign-in sheet.",
    receipt: "All 22 followed up by Monday morning",
  },
  "accounting-firms": {
    headline: "Forty-three returns, each stuck on one form.",
    receipt: "Chased · cleared to file · zero partner hours",
  },
  "law-practices": {
    headline: "The consult that went great — then went quiet.",
    receipt: "Engagement letter signed · same day",
  },
  tutoring: {
    headline: "The families who drift away between terms.",
    receipt: "Re-enrolled · same tutor, same time",
  },
};

export default async function OgImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const copy = OG_COPY[slug] ?? {
    headline: "Run the business you always pictured.",
    receipt: "New job booked · Thu 9:00 AM",
  };

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
        <OgBrand />

        <div
          style={{
            display: "flex",
            fontSize: 74,
            fontWeight: 800,
            color: "#171D18",
            letterSpacing: -2.5,
            lineHeight: 1.06,
          }}
        >
          {copy.headline}
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
            {copy.receipt}
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
            quietly handled
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
