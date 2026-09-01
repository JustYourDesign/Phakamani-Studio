import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { teamImage } from "@/lib/images";

/**
 * Black band between the philosophy and the territories: the idea, then the
 * people behind it. The photograph is the section — a warm, loud group shot
 * carries more than any portrait grid would, and it reads especially well
 * against the obsidian ground.
 *
 * No names or roles yet — those are the client's to supply, and inventing
 * them would put made-up people on a live site.
 */
export function Team() {
  return (
    <section id="team" className="on-dark bg-obsidian py-24 text-white lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-16">
          <div>
            <p className="label text-mint">The People</p>
            <h2 className="mt-5 text-title font-semibold">
              Phakamani is a team, not a theory.
            </h2>
            <p className="mt-6 text-body text-white/65">
              Coaches, psychologists, facilitators and film-makers who show up
              in classrooms, boardrooms and at start lines — often on the same
              week. The work is built on real relationships, which is why the
              same faces come back to the same schools year after year.
            </p>
            <p className="mt-4 text-body text-white/65">
              Every programme is delivered by people who have been through
              something themselves. That is the whole point.
            </p>

            <Link
              href="/contact"
              className={cn(buttonVariants({ variant: "invert" }), "mt-10")}
            >
              Work With Us
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <figure className="relative aspect-[3/2] w-full overflow-hidden rounded-card">
            <Image
              src={teamImage.src}
              alt={teamImage.alt}
              fill
              sizes="(min-width: 1024px) 55vw, 90vw"
              className="object-cover"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
