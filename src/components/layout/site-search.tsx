"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Dialog } from "@base-ui/react/dialog";
import { ArrowRight, CornerDownLeft, Search, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { search, suggestedSearches, type SearchDoc } from "@/lib/search";

/**
 * Site search. The whole corpus is static, so the index lives in the bundle
 * and matching happens locally — no request, no loading state.
 *
 * Follows the combobox pattern: the input keeps focus and owns the keyboard,
 * the list is navigated with aria-activedescendant rather than moving focus.
 */
export function SiteSearch({ className }: { className?: string }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const results = useMemo(() => search(query), [query]);

  // Open with ⌘K / Ctrl+K, or "/" when not already typing somewhere else.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const typing =
        target?.tagName === "INPUT" ||
        target?.tagName === "TEXTAREA" ||
        target?.isContentEditable;

      if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((v) => !v);
        return;
      }
      if (e.key === "/" && !typing && !e.metaKey && !e.ctrlKey && !e.altKey) {
        e.preventDefault();
        setOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const reset = useCallback(() => {
    setQuery("");
    setActiveIndex(0);
  }, []);

  const go = useCallback(
    (doc: SearchDoc) => {
      setOpen(false);
      reset();
      router.push(doc.href);
    },
    [reset, router],
  );

  function onInputKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (results.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => (i + 1) % results.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => (i - 1 + results.length) % results.length);
    } else if (e.key === "Home") {
      e.preventDefault();
      setActiveIndex(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setActiveIndex(results.length - 1);
    } else if (e.key === "Enter") {
      e.preventDefault();
      const doc = results[activeIndex];
      if (doc) go(doc);
    }
  }

  // Keep the highlighted row in view when arrowing past the fold.
  useEffect(() => {
    listRef.current
      ?.querySelector<HTMLElement>('[data-active="true"]')
      ?.scrollIntoView({ block: "nearest" });
  }, [activeIndex]);

  return (
    <Dialog.Root
      open={open}
      onOpenChange={(next) => {
        setOpen(next);
        if (!next) reset();
      }}
    >
      <Dialog.Trigger
        render={
          <button
            type="button"
            aria-label="Search Phakamani"
            className={cn(
              "flex size-10 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white",
              className,
            )}
          />
        }
      >
        <Search className="size-[18px]" />
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-[60] bg-black/80 transition-opacity duration-200 data-ending-style:opacity-0 data-starting-style:opacity-0 supports-backdrop-filter:backdrop-blur-sm" />

        <Dialog.Popup
          initialFocus={inputRef}
          className="on-dark fixed inset-x-0 top-0 z-[60] mx-auto flex max-h-[85svh] w-full max-w-2xl flex-col overflow-hidden bg-carbon text-white transition duration-200 data-ending-style:opacity-0 data-starting-style:opacity-0 sm:top-[12vh] sm:rounded-card"
        >
          <Dialog.Title className="sr-only">Search Phakamani</Dialog.Title>
          <Dialog.Description className="sr-only">
            Search activities, programmes, territories and pages. Use the arrow
            keys to move through results and Enter to open one.
          </Dialog.Description>

          {/* ---- Input row ---- */}
          <div className="flex items-center gap-3 border-b border-white/10 px-5">
            <Search className="size-5 shrink-0 text-mint" aria-hidden />
            <input
              ref={inputRef}
              type="text"
              autoFocus
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setActiveIndex(0);
              }}
              onKeyDown={onInputKeyDown}
              placeholder="Search activities, programmes, stories…"
              role="combobox"
              aria-expanded={results.length > 0}
              aria-controls="site-search-results"
              aria-autocomplete="list"
              aria-activedescendant={
                results.length > 0 ? `site-search-option-${activeIndex}` : undefined
              }
              className="h-16 w-full bg-transparent text-lead tracking-[-0.03em] text-white outline-none placeholder:text-white/35"
            />
            <Dialog.Close
              render={
                <button
                  type="button"
                  aria-label="Close search"
                  className="flex size-9 shrink-0 items-center justify-center rounded-full text-white/50 transition-colors hover:bg-white/10 hover:text-white"
                />
              }
            >
              <X className="size-4" />
            </Dialog.Close>
          </div>

          {/* ---- Results ---- */}
          <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
            {query.trim() === "" ? (
              <div className="px-5 py-6">
                <p className="label text-white/40">Try searching for</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {suggestedSearches.map((term) => (
                    <button
                      key={term}
                      type="button"
                      onClick={() => {
                        setQuery(term);
                        setActiveIndex(0);
                        inputRef.current?.focus();
                      }}
                      className="rounded-full border border-white/15 px-4 py-2 text-small text-white/70 transition-colors hover:border-mint hover:text-mint"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            ) : results.length === 0 ? (
              <div className="px-5 py-10">
                <p className="text-subheading font-semibold">
                  Nothing for &ldquo;{query.trim()}&rdquo;.
                </p>
                <p className="mt-2 text-small text-white/55">
                  Try a broader term — or tell us what you&rsquo;re after and
                  we&rsquo;ll point you at the right programme.
                </p>
                <button
                  type="button"
                  onClick={() =>
                    go({
                      id: "contact",
                      title: "Contact",
                      description: "",
                      href: "/contact",
                      category: "Page",
                    })
                  }
                  className="mt-5 inline-flex items-center gap-2 label text-mint hover:underline"
                >
                  Start the conversation
                  <ArrowRight className="size-3.5" />
                </button>
              </div>
            ) : (
              <ul
                ref={listRef}
                id="site-search-results"
                role="listbox"
                aria-label="Search results"
                className="py-2"
              >
                {results.map((doc, i) => {
                  const active = i === activeIndex;
                  return (
                    <li key={doc.id} role="presentation">
                      <button
                        type="button"
                        id={`site-search-option-${i}`}
                        role="option"
                        aria-selected={active}
                        data-active={active}
                        onMouseMove={() => setActiveIndex(i)}
                        onClick={() => go(doc)}
                        className={cn(
                          "flex w-full items-start gap-4 px-5 py-3.5 text-left transition-colors",
                          active && "bg-white/[0.07]",
                        )}
                      >
                        <span className="min-w-0 flex-1">
                          <span className="label block text-mint">{doc.category}</span>
                          <span className="mt-1 block truncate text-[1.0625rem] font-semibold tracking-[-0.03em] text-white">
                            {doc.title}
                          </span>
                          <span className="mt-0.5 block truncate text-small text-white/50">
                            {doc.description}
                          </span>
                        </span>
                        <ArrowRight
                          aria-hidden
                          className={cn(
                            "mt-6 size-4 shrink-0 text-white/25 transition-colors",
                            active && "text-mint",
                          )}
                        />
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          {/* ---- Keyboard hints ---- */}
          <div className="hidden items-center gap-5 border-t border-white/10 px-5 py-3 text-[0.6875rem] uppercase tracking-[0.14em] text-white/35 sm:flex">
            <span className="flex items-center gap-1.5">
              <Key>↑</Key>
              <Key>↓</Key>
              navigate
            </span>
            <span className="flex items-center gap-1.5">
              <Key>
                <CornerDownLeft className="size-3" />
              </Key>
              open
            </span>
            <span className="flex items-center gap-1.5">
              <Key>esc</Key>
              close
            </span>
            {results.length > 0 && (
              <span className="ml-auto normal-case tracking-normal">
                {results.length} result{results.length === 1 ? "" : "s"}
              </span>
            )}
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function Key({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="flex h-5 min-w-5 items-center justify-center rounded border border-white/15 px-1 font-sans text-[0.625rem] text-white/60">
      {children}
    </kbd>
  );
}
