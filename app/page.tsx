import { SiteNav } from "@/components/SiteNav";
import { HomeV2 } from "@/components/home-v2/HomeV2";

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Hybrid Theory",
  url: "https://hybridtheory.ai",
  logo: "https://hybridtheory.ai/icon.svg",
  email: "hello@hybridtheory.ai",
  description:
    "AI automation consultancy for local service businesses. AI that answers, quotes, follows up, and books — built around the tools you already use.",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <SiteNav />
      <HomeV2 />
    </>
  );
}
