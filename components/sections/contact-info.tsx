import { Mail, MapPin, Phone } from "lucide-react";

import { siteConfig } from "@/lib/site";

const items = [
  { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`,
  },
  { icon: MapPin, label: "Location", value: siteConfig.location },
];

export function ContactInfo() {
  return (
    <div className="on-dark flex flex-col gap-6 rounded-card bg-obsidian p-8 text-white">
      <p className="text-subheading font-semibold">
        Let&rsquo;s start a conversation.
      </p>
      <p className="text-small text-white/60">
        Whether you&rsquo;re an individual, a company or a school — reach out
        and we&rsquo;ll help shape a programme around what &ldquo;more&rdquo;
        looks like for you.
      </p>

      <div className="mt-2 space-y-5">
        {items.map((item) => {
          const Icon = item.icon;
          const content = (
            <>
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-mint">
                <Icon className="size-4" />
              </span>
              <span>
                <span className="label block text-white/40">
                  {item.label}
                </span>
                <span className="text-small text-white/90">{item.value}</span>
              </span>
            </>
          );
          return item.href ? (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-4 transition-colors hover:text-mint"
            >
              {content}
            </a>
          ) : (
            <div key={item.label} className="flex items-center gap-4">
              {content}
            </div>
          );
        })}
      </div>

      <div className="mt-auto flex gap-4 border-t border-white/10 pt-6">
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
  );
}
