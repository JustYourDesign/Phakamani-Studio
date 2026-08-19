import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const stats = [
  { value: "—", label: "Lives Impacted" },
  { value: "—", label: "Organisations Partnered" },
  { value: "—", label: "Schools & Communities" },
  { value: "—", label: "Countries Across Africa" },
];

export function ImpactStats() {
  return (
    <section id="impact" className="bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="label text-primary">Our Impact</p>
            <h2 className="mt-5 max-w-2xl text-title font-semibold">
              Making a difference. Every day.
            </h2>
          </div>
          <Link
            href="/contact"
            className={cn(buttonVariants({ variant: "outline" }), "shrink-0")}
          >
            See Our Impact
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <dl className="mt-14 grid gap-px overflow-hidden rounded-card bg-hairline sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-mist px-7 py-9">
              <dt className="label text-fog">{stat.label}</dt>
              <dd className="mt-3 font-baron text-6xl leading-none text-obsidian">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>

        <p className="mt-5 text-small text-ash">
          Figures pending — swap in real impact numbers when available.
        </p>
      </div>
    </section>
  );
}
