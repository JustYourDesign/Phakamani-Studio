import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { activities } from "@/lib/site";
import { activityImages } from "@/lib/images";

/**
 * Full-bleed black band. Photographic story cards — 4:5, 24px radius, white
 * type set on the image, small circular action button bottom-right.
 */
export function ActivitiesShowcase() {
  return (
    <section id="activities" className="on-dark bg-obsidian py-24 text-white lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="label text-mint">Where We Show Up</p>
            <h2 className="mt-5 max-w-2xl text-title font-semibold">
              Sport. Entertainment. Schools.
            </h2>
            <p className="measure mt-6 text-body text-white/60">
              Human performance is not a single arena. It looks like a start
              line, a stage and a classroom — and we build for all three.
            </p>
          </div>
          <Link
            href="/activities"
            className={cn(buttonVariants({ variant: "invert" }), "shrink-0")}
          >
            All Activities
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {activities.map((activity) => {
            const image = activityImages[activity.id];
            return (
              <Link
                key={activity.id}
                href={`/activities#${activity.id}`}
                className="group relative aspect-[4/5] overflow-hidden rounded-card"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 90vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <span
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/10"
                />
                <span className="absolute inset-x-6 top-6 label text-mint">
                  {activity.kicker}
                </span>
                <span className="absolute inset-x-6 bottom-6 block pr-14">
                  <span className="block text-subheading font-semibold leading-tight text-white">
                    {activity.title}
                  </span>
                  <span className="mt-1.5 block text-small text-white/70">
                    {activity.lede}
                  </span>
                </span>
                <span className="absolute bottom-6 right-6 flex size-10 items-center justify-center rounded-full border border-white/60 text-white transition-colors group-hover:border-mint group-hover:bg-mint group-hover:text-obsidian">
                  <ArrowUpRight className="size-4" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
