import { beMoreWords } from "@/lib/site";

/**
 * The "Be More. More ___" campaign system as an edge-to-edge ticker — a thin
 * seam between the black hero and the white content well below it.
 */
export function BeMoreTicker() {
  const phrases = beMoreWords.map((word) => `More ${word}`);
  // Duplicated once so the -50% translate loops seamlessly.
  const track = [...phrases, ...phrases];

  return (
    <div className="border-y border-hairline bg-mist py-4">
      <div className="flex overflow-hidden" aria-hidden>
        <div className="flex shrink-0 animate-marquee">
          {track.map((phrase, i) => (
            <span key={`${phrase}-${i}`} className="flex items-center whitespace-nowrap">
              <span className="label px-7 text-obsidian/70">{phrase}</span>
              <span className="size-1 shrink-0 rounded-full bg-primary" />
            </span>
          ))}
        </div>
      </div>
      <span className="sr-only">
        Be More. {phrases.join(". ")}.
      </span>
    </div>
  );
}
