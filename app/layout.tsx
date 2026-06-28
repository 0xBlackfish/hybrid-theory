import type { Metadata } from "next";
import "./globals.css";
import { CalendlyProvider } from "@/components/Calendly";

export const metadata: Metadata = {
  title: "Hybrid Theory — AI consulting for real businesses",
  description: "AI consulting for regular businesses. A small studio of builders shipping the software you need.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-type="grotesque" data-palette="lime">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&family=Geist:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
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
