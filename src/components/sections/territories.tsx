"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Activity,
  Brain,
  Briefcase,
  Compass,
  GraduationCap,
  Plus,
  Sparkles,
} from "lucide-react";

import { territories, type TerritoryCode } from "@/lib/site";
import { territoryImages } from "@/lib/images";
import { cn } from "@/lib/utils";

const icons = {
  MOVE: Activity,
  MIND: Brain,
  WORK: Briefcase,
  LIVE: Compass,
  YOUTH: GraduationCap,
  STORIES: Sparkles,
} as const;

/** Flat mist-filled feature card — elevation by fill, never by shadow. */
function TerritoryCard({ territory }: { territory: (typeof territories)[number] }) {
  const [open, setOpen] = useState(false);
  const Icon = icons[territory.code as TerritoryCode];
  const image = territoryImages[territory.code as TerritoryCode];

  return (
    <div
      id={territory.code.toLowerCase()}
      className={cn(
        "scroll-mt-32 rounded-card bg-mist transition-colors",
        open && "bg-[color-mix(in_oklab,var(--mist)_70%,var(--hairline))]",
      )}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="group flex w-full items-start gap-4 p-7 text-left"
      >
        <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white text-primary transition-colors group-hover:bg-primary group-hover:text-white">
          <Icon className="size-5" />
        </span>
        <span className="flex-1">
          <span className="flex items-start justify-between gap-4">
            <span className="text-subheading font-semibold text-obsidian">
              {territory.title}
            </span>
            <Plus
              className={cn(
                "mt-1 size-5 shrink-0 text-ash transition-transform duration-300",
                open && "rotate-45 text-primary",
              )}
              aria-hidden
            />
          </span>
          <span className="mt-2 block text-small text-fog">
            {territory.description}
          </span>
        </span>
      </button>

      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-out",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <div className="space-y-5 px-7 pb-7">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 30vw, 90vw"
                className="object-cover"
              />
            </div>
            <p className="text-small text-fog">{territory.expanded}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Territories() {
  return (
    <section id="territories" className="bg-paper pb-24 lg:pb-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <p className="label text-primary">Content Territories</p>
        <h2 className="mt-5 max-w-3xl text-title font-semibold">
          Human performance shows up everywhere.
        </h2>
        <p className="measure mt-6 text-body text-fog">
          Not just in sport. In classrooms, boardrooms and everyday life. Open a
          territory to see how we work in it.
        </p>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {territories.map((territory) => (
            <TerritoryCard key={territory.code} territory={territory} />
          ))}
        </div>
      </div>
    </section>
  );
}
