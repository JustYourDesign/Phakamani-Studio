import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

// Pill shape is non-negotiable in this system — every size stays fully rounded
// and every variant is flat (no shadows, elevation comes from fill colour).
const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-full border border-transparent bg-clip-padding text-[0.8125rem] font-semibold uppercase tracking-[0.14em] whitespace-nowrap transition-colors outline-none select-none focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        // Accent fill — emerald on light bands, mint on `.on-dark` bands.
        default: "bg-primary text-primary-foreground hover:bg-primary/85",
        // The reference hero CTA: solid white pill on a black field.
        invert:
          "bg-white text-black hover:bg-white/85",
        // Solid black pill for use on white/mist surfaces.
        solid:
          "bg-foreground text-background hover:bg-foreground/85",
        outline:
          "border-border bg-transparent text-foreground hover:border-foreground/40 hover:bg-foreground/5",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/70",
        ghost: "text-foreground hover:bg-foreground/5",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20",
        link: "rounded-none px-0 text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 gap-2 px-6",
        xs: "h-7 gap-1 px-3.5 text-[0.6875rem]",
        sm: "h-9 gap-1.5 px-5 text-[0.75rem]",
        lg: "h-14 gap-2.5 px-8",
        icon: "size-11",
        "icon-xs": "size-7 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-9 [&_svg:not([class*='size-'])]:size-3.5",
        "icon-lg": "size-14 [&_svg:not([class*='size-'])]:size-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
