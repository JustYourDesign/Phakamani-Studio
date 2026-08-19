import { LogoMarquee, type LogoMarqueeItem } from "@/components/ui/logo-marquee";
import { partnerPlaceholders } from "@/lib/site";

const items: LogoMarqueeItem[] = partnerPlaceholders.map((name, index) => ({
  id: `partner-${index}`,
  label: name,
}));

export function Partners() {
  return (
    <section id="partners" className="bg-paper pb-24 lg:pb-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <p className="label text-primary">Organisations Pursuing More</p>
        <h2 className="mt-5 text-title font-semibold">In partnership with</h2>

        <div className="mt-10">
          <LogoMarquee items={items} label="Partner organisations" />
        </div>

        <p className="mt-5 text-small text-ash">
          Placeholder tiles — swap in real partner names and logos when available.
        </p>
      </div>
    </section>
  );
}
