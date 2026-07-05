import type { Metadata } from "next";
import "./globals.css";
import { CalendlyProvider } from "@/components/Calendly";

export const metadata: Metadata = {
  metadataBase: new URL("https://hybridtheory.ai"),
  title: "Hybrid Theory — AI for service businesses",
  description:
    "AI that answers, quotes, follows up, and books for local service businesses — built around the tools you already use.",
  openGraph: {
    title: "Hybrid Theory — AI for service businesses",
    description:
      "AI that answers, quotes, follows up, and books for local service businesses — built around the tools you already use.",
    siteName: "Hybrid Theory",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hybrid Theory — AI for service businesses",
    description:
      "AI that answers, quotes, follows up, and books for local service businesses — built around the tools you already use.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-palette="lime">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Direction E type system: Inter only, variable optical-size + weights 400–800 */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,400;14..32,500;14..32,600;14..32,700;14..32,800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <CalendlyProvider />
      </body>
    </html>
  );
}
