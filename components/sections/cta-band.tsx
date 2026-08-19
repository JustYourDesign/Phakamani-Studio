import Image from "next/image";
import Link from "next/link";

import { BeMore } from "@/components/brand/logo";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { stockImages } from "@/lib/images";

export function CtaBand({
  eyebrow = "There is more in you",
  heading,
  description = "Tell us where you are and where you want to go. We'll shape a programme that fits.",
  ctaLabel = "Start the Conversation",
  ctaHref = "/contact",
}: {
  eyebrow?: string;
  heading?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="on-dark relative overflow-hidden bg-obsidian text-white">
      <Image
        src={stockImages.ctaTrail.src}
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-45"
      />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/80" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 py-28 lg:py-36">
        <p className="label text-mint">{eyebrow}</p>

        {heading ? (
          <h2 className="mt-6 max-w-4xl text-hero font-semibold">{heading}</h2>
        ) : (
          <BeMore as="h2" className="mt-6 text-display text-white" />
        )}

        <p className="measure mt-7 text-body text-white/65">{description}</p>

        <Link
          href={ctaHref}
          className={cn(buttonVariants({ variant: "invert", size: "lg" }), "mt-10")}
        >
          {ctaLabel}
        </Link>
      </div>
    </section>
  );
}
