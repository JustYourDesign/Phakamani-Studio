import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

import { CtaBand } from "@/components/sections/cta-band";
import { BeMoreTicker } from "@/components/sections/be-more-ticker";
import { activities } from "@/lib/site";
import { activityHeroImages, activityImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Activities — Phakamani",
  description:
    "Sport, entertainment and schools — the three arenas where Phakamani builds human performance.",
};

export default function ActivitiesPage() {
  return (
    <>
      {/* ---- Black hero ---- */}
      <section className="on-dark relative overflow-hidden bg-obsidian text-white">
        <Image
          src={activityHeroImages.sport.src}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/60" />

        <div className="relative z-10 mx-auto max-w-[1200px] px-6 pb-20 pt-28 lg:pb-28 lg:pt-36">
          <p className="label text-mint">Activities</p>
          <h1 className="mt-6 max-w-4xl text-hero font-semibold">
            A start line. A stage. A classroom.
          </h1>
          <p className="measure mt-7 text-body text-white/65">
            Sport is one expression of human performance — not the only one. We
            work across three arenas, and the underlying experience is the same
            in each: the discovery that there is more in you.
          </p>

          <nav className="mt-10 flex flex-wrap gap-3" aria-label="Activity categories">
            {activities.map((activity) => (
              <a
                key={activity.id}
                href={`#${activity.id}`}
                className="group inline-flex items-center gap-2.5 rounded-full border border-white/25 px-5 py-2.5 label text-white/75 transition-colors hover:border-mint hover:text-mint"
              >
                {activity.title}
                <ArrowDown className="size-3.5 transition-transform group-hover:translate-y-0.5" />
              </a>
            ))}
          </nav>
        </div>
      </section>

      <BeMoreTicker />

      {/* ---- One band per activity, alternating white / black ---- */}
      {activities.map((activity, index) => {
        const dark = index % 2 === 1;
        const image = activityImages[activity.id];

        return (
          <section
            key={activity.id}
            id={activity.id}
            className={
              dark
                ? "on-dark bg-obsidian py-24 text-white lg:py-32"
                : "bg-paper py-24 lg:py-32"
            }
          >
            <div className="mx-auto max-w-[1200px] px-6">
              <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-16">
                <div>
                  <p className={dark ? "label text-mint" : "label text-primary"}>
                    {activity.kicker}
                  </p>
                  <h2 className="mt-5 text-title font-semibold">{activity.title}</h2>
                  <p
                    className={
                      dark
                        ? "mt-4 text-lead font-semibold text-white/80"
                        : "mt-4 text-lead font-semibold text-obsidian/80"
                    }
                  >
                    {activity.lede}
                  </p>
                  <p className={dark ? "mt-6 text-body text-white/60" : "mt-6 text-body text-fog"}>
                    {activity.description}
                  </p>
                </div>

                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-card">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 45vw, 90vw"
                    className="object-cover"
                  />
                </div>
              </div>

              <div
                className={
                  dark
                    ? "mt-14 grid gap-px overflow-hidden rounded-card bg-white/10 sm:grid-cols-2"
                    : "mt-14 grid gap-px overflow-hidden rounded-card bg-hairline sm:grid-cols-2"
                }
              >
                {activity.items.map((item) => (
                  <div
                    key={item.title}
                    className={dark ? "bg-[#161616] p-7" : "bg-mist p-7"}
                  >
                    <h3 className="text-subheading font-semibold">{item.title}</h3>
                    <p className={dark ? "mt-2.5 text-small text-white/60" : "mt-2.5 text-small text-fog"}>
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className={
                  dark
                    ? "mt-8 inline-flex items-center gap-2 label text-mint hover:underline"
                    : "mt-8 inline-flex items-center gap-2 label text-primary hover:underline"
                }
              >
                Enquire about {activity.title.toLowerCase()} →
              </Link>
            </div>
          </section>
        );
      })}

      <CtaBand
        eyebrow="Sport. Entertainment. Schools."
        heading="Which arena is yours?"
        description="Tell us who you're working with — a squad, an audience or a school — and we'll shape the right programme."
        ctaLabel="Start the Conversation"
      />
    </>
  );
}
