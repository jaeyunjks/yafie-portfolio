"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/nav";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-4">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border border-white/75 bg-white/68 px-4 py-2.5 shadow-[0_18px_55px_rgba(45,95,157,0.12)] backdrop-blur-xl md:px-6">
        <Link
          href="/"
          className="text-2xl font-black italic tracking-normal text-[#2d5f9d]"
          aria-label="Yafie home"
        >
          Y.
        </Link>

        <ul className="hidden items-center gap-2 md:flex lg:gap-5">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "relative inline-flex rounded-full px-3 py-2 text-sm font-bold text-slate-600 transition-[background-color,color,transform] duration-200 hover:-translate-y-0.5 hover:bg-white/78 hover:text-[#2d5f9d]",
                  pathname === item.href && "bg-white/76 text-[#2d5f9d] shadow-sm shadow-blue-900/5",
                )}
              >
                {item.label}
                {pathname === item.href ? (
                  <span className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#2d5f9d] shadow-[0_0_10px_rgba(45,95,157,0.55)]" />
                ) : null}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-[#2d5f9d] px-4 py-2.5 text-sm font-extrabold text-white shadow-md shadow-blue-900/15 transition-[background-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:bg-[#265589] hover:shadow-lg md:px-5"
          aria-label="Connect with Yafie"
        >
          <span className="hidden sm:inline">Let&apos;s Connect</span>
          <MessageCircle size={17} aria-hidden />
        </Link>
      </nav>
    </header>
  );
}
