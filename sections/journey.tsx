import Image from "next/image";

import { cn } from "@/lib/utils";
import { journeyStages } from "@/lib/site";
import { journeyImages } from "@/lib/images";

/**
 * White content well. Four stages as photographic cards — 3:4, 24px radius,
 * white type set directly on the image, no shadow.
 */
export function Journey({ className }: { className?: string }) {
  return (
    <section id="journey" className={cn("bg-paper py-24 lg:py-32", className)}>
      <div className="mx-auto max-w-[1200px] px-6">
        <p className="label text-primary">The Phakamani Journey</p>
        <h2 className="mt-5 max-w-3xl text-title font-semibold">
          Four stages. One belief.
        </h2>
        <p className="measure mt-6 text-body text-fog">
          Every programme we run — coaching, workshops, retreats or team
          sessions — moves through the same human-performance journey.
        </p>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {journeyStages.map((stage) => {
            const image = journeyImages[stage.name as keyof typeof journeyImages];
            return (
              <article
                key={stage.step}
                className="group relative aspect-[3/4] overflow-hidden rounded-card"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 90vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10"
                />
                <div className="absolute inset-x-6 bottom-6">
                  <span className="label text-mint">{stage.step}</span>
                  <h3 className="mt-2 text-subheading font-semibold text-white">
                    {stage.name}
                  </h3>
                  <p className="mt-2 text-small text-white/70">
                    {stage.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
