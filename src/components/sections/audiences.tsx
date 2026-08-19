import { Check } from "lucide-react";

import { audiences } from "@/lib/site";

export function Audiences() {
  return (
    <section id="audiences" className="bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <p className="label text-primary">Who We Work With</p>
        <h2 className="mt-5 max-w-2xl text-title font-semibold">
          Built for every stage of becoming.
        </h2>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {audiences.map((audience) => (
            <article
              key={audience.title}
              className="flex flex-col rounded-card bg-mist p-7"
            >
              <h3 className="text-subheading font-semibold text-obsidian">
                {audience.title}
              </h3>
              <p className="mt-2.5 text-small text-fog">{audience.description}</p>
              <ul className="mt-6 space-y-3 border-t border-hairline pt-6">
                {audience.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-small">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
