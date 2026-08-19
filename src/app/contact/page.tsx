import type { Metadata } from "next";

import { PageHero } from "@/components/sections/page-hero";
import { ContactForm } from "@/components/sections/contact-form";
import { ContactInfo } from "@/components/sections/contact-info";

export const metadata: Metadata = {
  title: "Contact — Phakamani",
  description:
    "Get in touch with Phakamani to start a performance coaching, corporate or school programme.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        heading="Ready to rise up?"
        description="Send us a message and let's shape a programme around what more looks like for you."
      />
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
    </>
  );
}
