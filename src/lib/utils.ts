import { clsx, type ClassValue } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

// tailwind-merge only knows Tailwind's stock scales. Without registering the
// design system's custom font sizes, colours and radii it treats e.g.
// `text-display` and `text-white` as the same conflicting `text-*` group and
// silently drops the first one.
const fontSizes = [
  "display",
  "hero",
  "title",
  "heading",
  "subheading",
  "lead",
  "body",
  "small",
] as const

const colors = [
  "obsidian",
  "carbon",
  "paper",
  "mist",
  "hairline",
  "fog",
  "ash",
  "mint",
  "emerald",
  "forest",
  "cream",
  "sage",
] as const

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [{ text: [...fontSizes] }],
      "text-color": [{ text: [...colors] }],
      "bg-color": [{ bg: [...colors] }],
      "border-color": [{ border: [...colors] }],
      rounded: [{ rounded: ["card", "pill"] }],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
