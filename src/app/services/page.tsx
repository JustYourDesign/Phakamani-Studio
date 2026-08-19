import type { Metadata } from "next";

import { PageHero } from "@/components/sections/page-hero";
import { Audiences } from "@/components/sections/audiences";
import { stockImages } from "@/lib/images";
import { ServicesGrid } from "@/components/sections/services-grid";
import { Journey } from "@/components/sections/journey";
import { Faq } from "@/components/sections/faq";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Services — Phakamani",
  description:
    "Performance coaching, corporate human-performance programmes, wellness work and youth development from Phakamani.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        heading="Programmes built around your becoming."
        description="Whatever format fits — coaching, workshops, retreats or long-term partnerships — every Phakamani programme moves through the same journey: Discover, Develop, Perform, Live."
        image={stockImages.teamUnity}
      />
      <Audiences />
      <ServicesGrid />
      {/* Consecutive white bands each own their bottom padding only, so the
          gap between them stays 96px rather than doubling to 192px. */}
      <Journey className="pt-0 lg:pt-0" />
      <Faq />
      <CtaBand
        eyebrow="Let's Talk"
        heading="Not sure where to start?"
        description="Tell us a little about your goals and we'll help shape the right programme."
      />
    </>
  );
}
