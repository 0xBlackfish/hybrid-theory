import { Background } from "./Background";
import { Hero } from "./sections/Hero";
import { Reframe } from "./sections/Reframe";
import { Opportunity } from "./sections/Opportunity";
import { LiveDemo } from "./sections/LiveDemo";
import { HowItWorks } from "./sections/HowItWorks";
import { Approach } from "./sections/Approach";
import { WhoFor } from "./sections/WhoFor";
import { FinalCta } from "./sections/FinalCta";
import { Footer } from "./Footer";

export function HomeV2() {
  return (
    <>
      <Background />
      <Hero />
      <Reframe />
      <Opportunity />
      <LiveDemo />
      <HowItWorks />
      <Approach />
      <WhoFor />
      <FinalCta />
      <Footer />
    </>
  );
}
