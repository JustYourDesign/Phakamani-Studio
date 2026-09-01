import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, MapPin } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { events, type PhakamaniEvent } from "@/lib/site";

/**
 * Mist band with white cards — the inverse of the usual white-band/mist-card
 * pairing, which sets the diary apart from the editorial sections around it
 * without introducing a colour the system doesn't already have.
 */
export function Events() {
  return (
    <section id="events" className="bg-mist py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="label text-primary">What&rsquo;s Coming Up</p>
            <h2 className="mt-5 max-w-2xl text-title font-semibold">
              One start line in every arena.
            </h2>
            <p className="measure mt-6 text-body text-fog">
              Wellness, communities and culture each have something on the way.
              Dates are announced here first.
            </p>
          </div>
          <Link
            href="/contact"
            className={cn(buttonVariants({ variant: "outline" }), "shrink-0")}
          >
            Get Event Updates
          </Link>
        </div>

        <ul className="mt-14 grid gap-5 md:grid-cols-3">
          {events.map((event) => (
            <li key={event.id}>
              <EventCard event={event} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function EventCard({ event }: { event: PhakamaniEvent }) {
  return (
    <Link
      href={event.href}
      className="group flex h-full flex-col overflow-hidden rounded-card bg-white transition-colors hover:bg-[color-mix(in_oklab,white_92%,var(--mint))]"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={event.image}
          alt=""
          fill
          sizes="(min-width: 768px) 33vw, 90vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <span
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"
        />
        <span className="absolute bottom-4 left-4 label rounded-full bg-white/95 px-3.5 py-1.5 text-obsidian">
          {event.category}
        </span>
        <span className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full bg-white/90 text-obsidian transition-colors group-hover:bg-primary group-hover:text-white">
          <ArrowUpRight className="size-4" />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-7">
        {/* A confirmed date gets the numerals; an unconfirmed one says so
            plainly rather than showing a placeholder that looks like a date. */}
        {event.date ? (
          <p className="flex items-baseline gap-2">
            <span className="font-baron text-5xl leading-none text-obsidian">
              {event.date.day}
            </span>
            <span className="label text-fog">
              {event.date.month} {event.date.year}
            </span>
          </p>
        ) : (
          <p className="inline-flex w-fit items-center gap-2 rounded-full bg-mist px-3.5 py-1.5 label text-fog">
            <CalendarDays className="size-3.5" aria-hidden />
            Date to be announced
          </p>
        )}

        <h3 className="mt-4 text-subheading font-semibold text-obsidian">
          {event.title}
        </h3>
        <p className="mt-2.5 text-small text-fog">{event.description}</p>

        <p className="mt-auto flex items-center gap-2 pt-6 text-small text-ash">
          <MapPin className="size-3.5 shrink-0" aria-hidden />
          {event.location}
        </p>
      </div>
    </Link>
  );
}
