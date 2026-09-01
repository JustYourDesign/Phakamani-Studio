import Image from "next/image";

import { stockImages } from "@/lib/images";

export function Philosophy() {
  return (
    <section id="philosophy" className="bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <p className="label text-primary">Our Philosophy</p>
        <h2 className="mt-5 max-w-4xl text-title font-semibold">
          Performance in service of life.
        </h2>

        <div className="mt-14 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-card">
            <Image
              src={stockImages.coachingConversation.src}
              alt={stockImages.coachingConversation.alt}
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </div>

          <div className="max-w-[34rem] space-y-6 text-body text-fog">
            <p>
              The philosophy behind Phakamani comes from discovering that
              perceived limits are not always actual limits. Completing an
              Ironman created a powerful realisation: what feels impossible can
              become possible with the right mindset, habits, support,
              preparation and belief.
            </p>
            <p>
              That feeling — the discovery that there is more in you — became
              the seed of Phakamani. We don&rsquo;t believe performance exists
              only for productivity or winning. Performance should let people
              live better, lead better, love better, and explore what is
              possible.
            </p>
            <blockquote className="border-l-2 border-primary pl-6 text-subheading font-semibold text-obsidian">
              Human beings often have more capacity than they realise.
              Phakamani exists to help unlock it.
            </blockquote>
            <p className="text-small text-ash">
              Phakamani — a name rooted in the Nguni concept meaning
              &ldquo;rise up&rdquo;.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
