import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/site";

export function Faq() {
  return (
    <section id="faq" className="bg-paper pb-24 lg:pb-32">
      <div className="mx-auto max-w-[760px] px-6">
        <p className="label text-primary">
          Questions
        </p>
        <h2 className="mt-5 text-title font-semibold">
          Frequently asked questions
        </h2>

        <Accordion className="mt-12 w-full">
          {faqs.map((item) => (
            <AccordionItem key={item.id} value={item.id} className="border-hairline">
              <AccordionTrigger className="text-subheading font-semibold text-obsidian hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-body text-fog">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
