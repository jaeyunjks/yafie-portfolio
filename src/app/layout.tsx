import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond } from "next/font/google";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import BackToTopButton from "@/components/ui/BackToTopButton";
import FloatingSectionNav from "@/components/ui/FloatingSectionNav";
import "./globals.css";

const headingFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yafie Portfolio",
  description: "Soft premium portfolio website built with Next.js",
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
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
