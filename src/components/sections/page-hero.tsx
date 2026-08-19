import Image from "next/image";

/** Black full-bleed page opener — the light content well starts below it. */
export function PageHero({
  eyebrow,
  heading,
  description,
  image,
}: {
  eyebrow: string;
  heading: string;
  description: string;
  image?: { src: string; alt: string };
}) {
  return (
    <section className="on-dark relative overflow-hidden bg-obsidian text-white">
      {image && (
        <>
          <Image
            src={image.src}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-40"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/60"
          />
        </>
      )}

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 pb-20 pt-28 lg:pb-28 lg:pt-36">
        <p className="label text-mint">{eyebrow}</p>
        <h1 className="mt-6 max-w-4xl text-hero font-semibold">{heading}</h1>
        <p className="measure mt-7 text-body text-white/65">{description}</p>
      </div>
    </section>
  );
}
