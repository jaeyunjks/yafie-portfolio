import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import BackToTopButton from "@/components/ui/BackToTopButton";
import DarkModeComingSoonToast from "@/components/ui/DarkModeComingSoonToast";
import FloatingSectionNav from "@/components/ui/FloatingSectionNav";
import "./globals.css";
import { profile } from "@/data/profile";

// Self-hosted (SIL OFL 1.1, see ./fonts/OFL.txt) so builds don't depend on
// fetching from Google Fonts. A transient fetch failure broke CI on 25 Nov 2026.
const headingFont = localFont({
  src: [
    { path: "./fonts/cormorant-garamond-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "./fonts/cormorant-garamond-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "./fonts/cormorant-garamond-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${profile.name} | ${profile.role}`,
    template: `%s | ${profile.name}`,
  },
  description: profile.summary.short,
  // Lets pages use relative URLs for canonical links and social cards.
  metadataBase: new URL(profile.links.portfolio),
  openGraph: {
    type: "website",
    siteName: profile.name,
    locale: "en_AU",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#eef4ff",
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`${headingFont.variable} min-h-full flex flex-col`}>
        <Navbar />
        <main className="relative mx-auto w-full max-w-[92rem] flex-1 px-5 pb-20 pt-20 sm:px-7 sm:pt-28 md:px-8 xl:px-10 2xl:px-12">
          {children}
        </main>
        <BackToTopButton />
        <FloatingSectionNav />
        <DarkModeComingSoonToast />
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
