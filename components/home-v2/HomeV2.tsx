import { Hero } from "./sections/Hero";
import { Reframe } from "./sections/Reframe";
import { Opportunity } from "./sections/Opportunity";
import { LiveDemo } from "./sections/LiveDemo";
import { HowItWorks } from "./sections/HowItWorks";
import { HomeRest } from "./HomeRest";

export function HomeV2() {
  return (
    <>
      <Hero />
      <Reframe />
      <Opportunity />
      <LiveDemo />
      <HowItWorks />
      <HomeRest />
    </>
  );
}
