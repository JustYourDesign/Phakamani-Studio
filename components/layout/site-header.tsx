"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";

import { Logo } from "@/components/brand/logo";
import { SiteSearch } from "@/components/layout/site-search";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { categoryRail, primaryNav, siteConfig, type NavItem } from "@/lib/site";

/**
 * Red Bull-style masthead: a slim black bar of uppercase category triggers,
 * each opening a full-width mega-panel of link columns plus featured photo
 * cards, with a horizontally scrollable sub-category rail beneath it.
 * The rail collapses away once the page is scrolled, leaving a compact bar.
 */
export function SiteHeader() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Hover intent — a short grace period stops the panel flickering shut as the
  // pointer travels from a trigger down into the panel.
  const scheduleClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 140);
  }, []);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  // Close both menus when the route changes — without this the mobile sheet
  // stays open on top of the page the user just navigated to. Adjusting state
  // during render is the supported pattern here; an effect would cascade.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpenMenu(null);
    setMobileOpen(false);
  }

  useEffect(
    () => () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    },
    [],
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenMenu(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (href: string) => {
    const base = href.split("#")[0];
    if (!base || base === "/") return pathname === "/" && href === "/";
    return pathname.startsWith(base);
  };

  const active = primaryNav.find((item) => item.label === openMenu);

  return (
    <header
      className="on-dark sticky top-0 z-50 w-full bg-obsidian text-white"
      onMouseLeave={scheduleClose}
    >
      {/* ---- Primary bar ---- */}
      <div className="relative mx-auto flex h-16 max-w-[1600px] items-center gap-6 px-5 lg:h-[72px] lg:gap-10 lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mint"
          aria-label={`${siteConfig.name} — home`}
        >
          <Logo className="text-white" />
        </Link>

        <nav className="hidden h-full items-stretch lg:flex" aria-label="Primary">
          {primaryNav.map((item) => {
            const hasPanel = Boolean(item.groups?.length);
            const open = openMenu === item.label;
            return (
              <div
                key={item.label}
                className="flex items-stretch"
                onMouseEnter={() => {
                  cancelClose();
                  setOpenMenu(hasPanel ? item.label : null);
                }}
              >
                <Link
                  href={item.href}
                  aria-expanded={hasPanel ? open : undefined}
                  aria-haspopup={hasPanel ? "true" : undefined}
                  onFocus={() => setOpenMenu(hasPanel ? item.label : null)}
                  className={cn(
                    "relative flex items-center gap-1 px-4 label text-white/60 transition-colors hover:text-white focus-visible:text-white focus-visible:outline-none",
                    (open || isActive(item.href)) && "text-white",
                  )}
                >
                  {item.label}
                  {hasPanel && (
                    <ChevronDown
                      className={cn(
                        "size-3 transition-transform duration-200",
                        open && "rotate-180",
                      )}
                      aria-hidden
                    />
                  )}
                  <span
                    aria-hidden
                    className={cn(
                      "absolute inset-x-3 bottom-0 h-0.5 origin-left scale-x-0 bg-mint transition-transform duration-200",
                      (open || isActive(item.href)) && "scale-x-100",
                    )}
                  />
                </Link>
              </div>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:gap-3">
          <SiteSearch />

          <Link
            href="/contact"
            className={cn(
              buttonVariants({ size: "sm" }),
              "hidden font-baron tracking-[0.12em] sm:inline-flex",
            )}
          >
            {siteConfig.tagline}
          </Link>

          {/* ---- Mobile ---- */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10 lg:hidden"
                  aria-label="Open menu"
                />
              }
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="on-dark w-full max-w-sm border-white/10 bg-obsidian text-white"
            >
              <SheetHeader className="border-b border-white/10">
                <SheetTitle>
                  <Logo className="text-white" />
                </SheetTitle>
              </SheetHeader>
              <MobileNav onNavigate={() => setMobileOpen(false)} />
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* ---- Sub-category rail (collapses on scroll) ---- */}
      <div
        className={cn(
          "hidden overflow-hidden border-t border-white/10 transition-[height,opacity] duration-300 lg:block",
          scrolled ? "h-0 opacity-0" : "h-11 opacity-100",
        )}
      >
        <div className="mx-auto flex h-11 max-w-[1600px] items-center gap-1 overflow-x-auto px-8 no-scrollbar">
          {categoryRail.map((cat) => (
            <Link
              key={cat.label}
              href={cat.href}
              className="shrink-0 rounded-full px-3.5 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-white/50 transition-colors hover:bg-white/10 hover:text-white"
            >
              {cat.label}
            </Link>
          ))}
        </div>
      </div>

      {/* ---- Mega panel ---- */}
      <div
        className={cn(
          // The bottom border is only drawn while the panel is open — at rest
          // it would paint a 1px hairline across the top of the hero.
          "absolute inset-x-0 top-full hidden overflow-hidden bg-carbon transition-[max-height,opacity] duration-300 ease-out lg:block",
          active
            ? "max-h-[520px] border-b border-white/10 opacity-100"
            : "pointer-events-none max-h-0 opacity-0",
        )}
        onMouseEnter={cancelClose}
        onMouseLeave={scheduleClose}
      >
        {active && <MegaPanel item={active} />}
      </div>
    </header>
  );
}

function MegaPanel({ item }: { item: NavItem }) {
  return (
    <div className="mx-auto grid max-w-[1600px] gap-10 px-8 py-10 lg:grid-cols-[1.35fr_1fr]">
      <div className="grid gap-8 sm:grid-cols-3">
        {item.groups?.map((group) => (
          <div key={group.title}>
            <p className="label text-mint">{group.title}</p>
            <ul className="mt-4 space-y-1">
              {group.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="-mx-2 block rounded-sm px-2 py-1.5 text-[0.9375rem] tracking-[-0.02em] text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {item.featured?.length ? (
        <div className="grid gap-4 sm:grid-cols-2">
          {item.featured.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group relative aspect-[4/3] overflow-hidden rounded-card"
            >
              <Image
                src={card.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 22vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"
              />
              <span className="absolute inset-x-5 bottom-5">
                <span className="label block text-mint">{card.kicker}</span>
                <span className="mt-1.5 block text-lg font-semibold leading-tight tracking-[-0.03em] text-white">
                  {card.title}
                </span>
              </span>
              <span className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full border border-white/40 text-white transition-colors group-hover:border-mint group-hover:text-mint">
                <ArrowUpRight className="size-4" />
              </span>
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function MobileNav({ onNavigate }: { onNavigate: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <nav className="flex flex-col overflow-y-auto px-4 pb-8 pt-4" aria-label="Mobile">
      {primaryNav.map((item) => {
        const hasPanel = Boolean(item.groups?.length);
        const open = expanded === item.label;

        return (
          <div key={item.label} className="border-b border-white/10">
            <div className="flex items-center">
              <Link
                href={item.href}
                onClick={onNavigate}
                className="flex-1 py-4 text-lg font-semibold tracking-[-0.03em] text-white"
              >
                {item.label}
              </Link>
              {hasPanel && (
                <button
                  type="button"
                  aria-label={`${open ? "Collapse" : "Expand"} ${item.label}`}
                  aria-expanded={open}
                  onClick={() => setExpanded(open ? null : item.label)}
                  className="flex size-10 items-center justify-center rounded-full text-white/60 hover:bg-white/10 hover:text-white"
                >
                  {open ? <X className="size-4" /> : <ChevronDown className="size-4" />}
                </button>
              )}
            </div>

            {hasPanel && (
              <div
                className={cn(
                  "grid transition-[grid-template-rows] duration-300 ease-out",
                  open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                )}
              >
                <div className="overflow-hidden">
                  <div className="space-y-5 pb-5">
                    {item.groups?.map((group) => (
                      <div key={group.title}>
                        <p className="label text-mint">{group.title}</p>
                        <ul className="mt-2 space-y-1">
                          {group.links.map((link) => (
                            <li key={link.label}>
                              <Link
                                href={link.href}
                                onClick={onNavigate}
                                className="block py-1.5 text-[0.9375rem] text-white/70"
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}

      <div className="mt-6 flex flex-wrap gap-2">
        {categoryRail.map((cat) => (
          <Link
            key={cat.label}
            href={cat.href}
            onClick={onNavigate}
            className="rounded-full border border-white/15 px-3.5 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-white/60"
          >
            {cat.label}
          </Link>
        ))}
      </div>

      <Link href="/contact" onClick={onNavigate} className={cn(buttonVariants({ size: "lg" }), "mt-8 font-baron")}>
        {siteConfig.tagline}
      </Link>
    </nav>
  );
}
