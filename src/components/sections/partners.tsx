import Image from "next/image";

import { LogoMarquee, type LogoMarqueeItem } from "@/components/ui/logo-marquee";
import { partners } from "@/lib/site";

// The marks are pre-normalised to a common 260x88 box on the marquee's own
// mist fill, so no logo reads as a pale rectangle sitting on the strip.
// Desaturated by default to stop five competing brand palettes fighting the
// mint accent; colour returns on hover, which also pauses the scroll.
const items: LogoMarqueeItem[] = partners.map((partner) => ({
  id: partner.name,
  label: partner.name,
  mark: (
    <Image
      src={partner.logo}
      alt=""
      width={260}
      height={88}
      className="h-11 w-auto object-contain opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
    />
  ),
}));

export function Partners() {
  return (
    <section id="partners" className="bg-paper pb-24 lg:pb-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <p className="label text-primary">Organisations Pursuing More</p>
        <h2 className="mt-5 text-title font-semibold">In partnership with</h2>

        <div className="mt-10">
          <LogoMarquee items={items} label="Partner organisations" />
        </div>
      </div>
    </section>
  );
}
