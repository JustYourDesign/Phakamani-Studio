import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { mediaImages } from "@/lib/images";

const items = [
  { category: "Documentary", title: "Coming Soon", image: mediaImages.documentary },
  { category: "Podcast", title: "Coming Soon", image: mediaImages.podcast },
  { category: "Short Film", title: "Coming Soon", image: mediaImages.shortFilm },
];

export function MediaStories() {
  return (
    <section id="media" className="on-dark bg-obsidian py-24 text-white lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="label text-mint">Phakamani Media</p>
            <h2 className="mt-5 max-w-2xl text-title font-semibold">
              Stories that inspire. Ideas that transform.
            </h2>
            <p className="measure mt-6 text-body text-white/60">
              We&rsquo;re building a home for films, podcasts and conversations
              about human potential, performance and living fully.
            </p>
          </div>
          <Link
            href="/contact"
            className={cn(buttonVariants({ variant: "outline" }), "shrink-0 border-white/25")}
          >
            Get Notified
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.category}
              className="group relative aspect-[4/5] overflow-hidden rounded-card"
            >
              <Image
                src={item.image.src}
                alt={item.image.alt}
                fill
                sizes="(min-width: 1024px) 33vw, 90vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-black/35"
              />
              <div className="absolute inset-0 flex flex-col justify-between p-6">
                <span className="label w-fit rounded-full border border-white/30 px-3.5 py-1.5 text-mint backdrop-blur">
                  {item.category}
                </span>
                <div className="flex items-center gap-3">
                  <span className="flex size-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-colors group-hover:bg-mint group-hover:text-obsidian">
                    <Play className="size-4 fill-current" />
                  </span>
                  <span className="text-subheading font-semibold">{item.title}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-5 text-small text-white/35">
          Placeholder previews — swap in real Phakamani Media content when available.
        </p>
      </div>
    </section>
  );
}
