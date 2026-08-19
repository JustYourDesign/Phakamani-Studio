"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

import { BeMore } from "@/components/brand/logo";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { beMoreWords } from "@/lib/site";

const heroVideo = {
  src: "/video/hero-runner.mp4",
  description: "A runner moving across an open hillside at dawn.",
};

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

/** Subscribes to the OS motion preference and re-renders when it changes. */
function usePrefersReducedMotion() {
  return useSyncExternalStore(
    (onChange) => {
      const query = window.matchMedia(REDUCED_MOTION);
      query.addEventListener("change", onChange);
      return () => query.removeEventListener("change", onChange);
    },
    () => window.matchMedia(REDUCED_MOTION).matches,
    () => false, // server render assumes motion is allowed
  );
}

/**
 * Full-bleed black hero: one moving backdrop, one oversized display lockup,
 * a narrow measure of body copy and a single white pill CTA. The rotating
 * word runs the brand's "Be More. More ___" campaign system.
 */
export function Hero() {
  const [index, setIndex] = useState(0);
  const reduceMotion = usePrefersReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);

  // Playback is driven here rather than via the `autoPlay` attribute so the
  // motion preference is respected on the first paint and honoured live if it
  // changes. Paused, the element holds its first frame — that's the poster,
  // which is why no separate poster image is shipped.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (reduceMotion) {
      video.pause();
    } else {
      // Muted playback is permitted by autoplay policy, but a rejected
      // promise here is not worth surfacing — the still frame is the fallback.
      void video.play().catch(() => {});
    }
  }, [reduceMotion]);

  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % beMoreWords.length);
    }, 2200);
    return () => clearInterval(id);
  }, [reduceMotion]);

  return (
    // The header is sticky and sits in flow above this, so a plain 100svh
    // would push the CTA below the fold. Subtract the bar (4rem) and, from lg,
    // the category rail as well (7.25rem total).
    <section className="on-dark relative flex min-h-[calc(100svh-4rem)] flex-col justify-end overflow-hidden bg-obsidian text-white lg:min-h-[calc(100svh-7.25rem)]">
      {/* Graded down at source so the footage reads as a dark backdrop rather
          than a photo the type has to fight. */}
      <video
        ref={videoRef}
        className="absolute inset-0 size-full object-cover brightness-[0.5] saturate-[0.8] contrast-[1.05]"
        src={heroVideo.src}
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden
        tabIndex={-1}
      />
      <span className="sr-only">{heroVideo.description}</span>

      {/* Scrims, in order:
          1. top — dissolves the video into the black header so the two meet
             with no visible seam;
          2. left→right ramp — the display type sits left, so this carries the
             legibility and lets the frame open up on the right;
          3. bottom — catches the CTA row and hands off to the next band. */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black via-black/65 to-transparent"
      />
      {/* Explicit stops rather than from/via/to. On small screens the copy
          runs the full width, so the scrim is a flat vertical wash; from lg
          the copy column ends at ~46%, so the ramp stays near-opaque that far
          and then opens up to let the runner read on the right. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.7)_60%,rgba(0,0,0,0.8)_100%)] lg:bg-[linear-gradient(90deg,#000_0%,rgba(0,0,0,0.95)_40%,rgba(0,0,0,0.8)_55%,rgba(0,0,0,0.4)_78%,rgba(0,0,0,0.2)_100%)]"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black to-transparent"
      />

      {/* Content is bottom-aligned, so on short viewports the padding is what
          pushes the CTA under the fold — trim it rather than the copy. */}
      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-[8%] pb-20 pt-32 lg:pb-28 [@media(max-height:820px)]:pb-14 [@media(max-height:820px)]:pt-16">
        <p className="label text-mint">African Human Performance Company</p>

        <BeMore as="h1" className="mt-6 text-display text-white" />

        {/* Deliberately not a live region — the word changes every 2.2s and
            an aria-live would re-announce it forever. */}
        <p className="mt-4 text-title font-semibold tracking-[-0.03em] text-white/55">
          More{" "}
          <span
            key={beMoreWords[index]}
            className="text-mint animate-in fade-in slide-in-from-bottom-2 duration-500"
          >
            {beMoreWords[index]}
          </span>
          .
        </p>

        <p className="measure mt-8 text-body text-white/65">
          We help individuals, organisations and communities discover, develop
          and express more of their potential — through experiences,
          programmes, coaching, media and education.
        </p>

        <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
          <Link href="/activities" className={cn(buttonVariants({ variant: "invert", size: "lg" }))}>
            Explore Activities
          </Link>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 label text-white/70 transition-colors hover:text-mint"
          >
            <span className="flex size-12 items-center justify-center rounded-full border border-white/30 transition-colors group-hover:border-mint">
              <ArrowUpRight className="size-4" />
            </span>
            Start the Conversation
          </Link>
        </div>
      </div>

      <a
        href="#journey"
        aria-label="Skip to the Phakamani journey"
        className="absolute bottom-8 right-[8%] z-10 hidden size-12 items-center justify-center rounded-full border border-white/25 text-white/60 transition-colors hover:border-mint hover:text-mint lg:flex"
      >
        <ArrowDown className="size-4" />
      </a>
    </section>
  );
}
