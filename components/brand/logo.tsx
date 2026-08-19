import { cn } from "@/lib/utils";

/** Wordmark lockup — rounded geometric sans with the mint accent dot. */
export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-start font-logo text-[1.6rem] font-semibold leading-none tracking-[-0.02em]",
        className,
      )}
    >
      phakamani
      <span
        aria-hidden
        className="ml-0.5 inline-flex size-1.5 translate-y-0.5 rounded-full bg-mint"
      />
    </span>
  );
}

/**
 * The payoff line as a standalone brand asset. The brief asks for a
 * distinctive typographic treatment so "BE MORE." reads as Phakamani even
 * without the wordmark — hence the condensed display face and the mint stop.
 */
export function BeMore({
  className,
  as: Tag = "span",
}: {
  className?: string;
  as?: "span" | "h1" | "h2" | "p";
}) {
  return (
    <Tag
      className={cn(
        "inline-block font-baron uppercase",
        className,
      )}
    >
      Be More<span className="text-mint">.</span>
    </Tag>
  );
}
