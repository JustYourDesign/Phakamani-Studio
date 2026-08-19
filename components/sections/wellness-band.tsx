import { wellnessPillars } from "@/lib/site";

/**
 * The one warm surface in the system — cream, from the mood board. Used once
 * per page so it reads as a deliberate pause rather than a second theme.
 */
export function WellnessBand() {
  return (
    <section id="wellness" className="bg-cream py-24 text-forest lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <p className="label text-forest/50">Rooted in Wellness</p>
        <h2 className="mt-5 max-w-3xl text-title font-semibold">
          Mind, body and heart — nurtured together.
        </h2>

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {wellnessPillars.map((pillar, index) => (
            <div key={pillar.title} className="border-t border-forest/15 pt-6">
              <span className="font-baron text-4xl leading-none text-forest/25">
                0{index + 1}
              </span>
              <h3 className="mt-4 text-subheading font-semibold">{pillar.title}</h3>
              <p className="mt-2.5 text-small text-forest/65">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
