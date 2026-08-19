import type { Metadata } from "next";
import { Anton, DM_Sans, Quicksand } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

// DM Sans is the geometric grotesk the reference system names as its
// Proxima Nova substitute — it holds up under the heavy negative tracking
// the display sizes rely on.
const sans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

// Stand-in for "AA Baron" (per the mood board) — reserved for the
// BE MORE. lockup so the payoff line stays a distinct brand asset.
const baron = Anton({
  variable: "--font-baron",
  weight: "400",
  subsets: ["latin"],
});

// Matches the rounded geometric wordmark in the supplied logo.
const logo = Quicksand({
  variable: "--font-logo",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Phakamani — Be More.",
  description:
    "Phakamani is an African human-performance company helping individuals, organisations and communities become more capable, elevate performance and live fully.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${baron.variable} ${logo.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
