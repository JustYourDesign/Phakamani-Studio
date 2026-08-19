import {
  GraduationCap,
  HeartPulse,
  Mic,
  Mountain,
  Target,
  Users,
} from "lucide-react";

import { services } from "@/lib/site";

const icons = [Target, Users, HeartPulse, GraduationCap, Mic, Mountain];

export function ServicesGrid() {
  return (
    <section id="programmes" className="bg-paper pb-24 lg:pb-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <p className="label text-primary">Core Programmes</p>
        <h2 className="mt-5 max-w-2xl text-title font-semibold">
          Ways we help you rise.
        </h2>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[index];
            return (
              <article
                key={service.title}
                className="group rounded-card bg-mist p-7 transition-colors hover:bg-[color-mix(in_oklab,var(--mist)_70%,var(--hairline))]"
              >
                <span className="flex size-11 items-center justify-center rounded-full bg-white text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-6 text-subheading font-semibold text-obsidian">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-small text-fog">{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
