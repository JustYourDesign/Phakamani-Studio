import { Hero } from "@/components/sections/hero";
import { BeMoreTicker } from "@/components/sections/be-more-ticker";
import { Journey } from "@/components/sections/journey";
import { ActivitiesShowcase } from "@/components/sections/activities-showcase";
import { Philosophy } from "@/components/sections/philosophy";
import { Territories } from "@/components/sections/territories";
import { MediaStories } from "@/components/sections/media-stories";
import { WellnessBand } from "@/components/sections/wellness-band";
import { ImpactStats } from "@/components/sections/impact-stats";
import { Partners } from "@/components/sections/partners";
import { CtaBand } from "@/components/sections/cta-band";

/**
 * Full-bleed alternation: black bands run edge to edge, white bands hold
 * content to a 1200px well. Cream appears exactly once, as a warm pause.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <BeMoreTicker />
      <Journey />
      <ActivitiesShowcase />
      <Philosophy />
      <Territories />
      <MediaStories />
      <WellnessBand />
      <ImpactStats />
      <Partners />
      <CtaBand />
    </>
  );
}
