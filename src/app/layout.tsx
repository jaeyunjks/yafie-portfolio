import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yafie Portfolio",
  description: "Soft premium portfolio website built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="relative mx-auto w-full max-w-6xl flex-1 px-6 pb-20 pt-8 md:px-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
