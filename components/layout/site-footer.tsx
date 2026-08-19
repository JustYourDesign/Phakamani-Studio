import Link from "next/link";

import { BeMore, Logo } from "@/components/brand/logo";
import { NewsletterForm } from "@/components/layout/newsletter-form";
import { primaryNav, siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="on-dark bg-carbon text-white">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col gap-6 border-b border-white/10 py-12 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-subheading font-semibold">Join the movement.</p>
            <p className="mt-1 text-small text-white/55">
              Get stories, insights and updates in your inbox.
            </p>
          </div>
          <NewsletterForm />
        </div>

        <div className="grid gap-12 py-16 md:grid-cols-[1.3fr_1fr_1fr]">
          <div className="space-y-5">
            <Logo className="text-white" />
            <p className="max-w-sm text-small text-white/60">
              {siteConfig.description}
            </p>
            <BeMore className="block text-4xl text-white" />
          </div>

          <div>
            <p className="label text-white/40">Explore</p>
            <nav className="mt-4 flex flex-col gap-2.5" aria-label="Footer">
              {primaryNav.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-small text-white/70 transition-colors hover:text-mint"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="label text-white/40">Connect</p>
            <div className="mt-4 flex flex-col gap-2.5 text-small text-white/70">
              <a
                href={`mailto:${siteConfig.email}`}
                className="transition-colors hover:text-mint"
              >
                {siteConfig.email}
              </a>
              <a
                href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}
                className="transition-colors hover:text-mint"
              >
                {siteConfig.phone}
              </a>
              <span>{siteConfig.location}</span>
            </div>
            <div className="mt-5 flex gap-4">
              {siteConfig.social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-small text-white/70 transition-colors hover:text-mint"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/10 py-7 text-small text-white/40 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Phakamani. All rights reserved.</span>
          <span>Rise up. Be more.</span>
        </div>
      </div>
    </footer>
  );
}
