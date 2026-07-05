import { Background } from "./Background";
import { Hero } from "./sections/Hero";
import { ToolMarquee } from "./sections/ToolMarquee";
import { LiveDemo } from "./sections/LiveDemo";
import { Opportunity } from "./sections/Opportunity";
import { Reframe } from "./sections/Reframe";
import { HowItWorks } from "./sections/HowItWorks";
import { WhoFor } from "./sections/WhoFor";
import { FinalCta } from "./sections/FinalCta";
import { SiteFooter } from "../SiteFooter";

export function HomeV2() {
  return (
    <>
      <Background />
      <Hero />
      <ToolMarquee />
      <LiveDemo />
      <Opportunity />
      <Reframe />
      <HowItWorks />
      <WhoFor />
      <FinalCta />
      <SiteFooter />
    </>
  );
}
