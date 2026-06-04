"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Moon, Sun } from "lucide-react";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/nav";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-4 sm:px-6">
      <div className="mx-auto grid w-full max-w-[92rem] grid-cols-[auto_1fr_auto] items-center gap-3 md:gap-5">
        <Link
          href="/"
          className="inline-flex h-11 w-11 items-center justify-center transition-transform duration-200 hover:-translate-y-0.5"
          aria-label="Yafie home"
        >
          <Image
            src="/images/y-logo.png"
            alt="Yafie logo"
            width={44}
            height={44}
            priority
            className="h-11 w-11 object-contain"
          />
        </Link>

        <nav
          className="mx-auto hidden rounded-full border border-white/75 bg-white/70 px-2 py-1.5 shadow-[0_18px_55px_rgba(45,95,157,0.12)] backdrop-blur-xl md:block"
          aria-label="Primary navigation"
        >
          <ul className="flex items-center justify-center gap-1 lg:gap-2 xl:gap-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "relative inline-flex rounded-full px-3 py-2 text-sm font-bold text-slate-600 transition-[background-color,color,transform] duration-200 hover:-translate-y-0.5 hover:bg-white/78 hover:text-[#2d5f9d] lg:px-4",
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
        </nav>

        <div className="flex items-center justify-end gap-2">
          <button
            type="button"
            className="group relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/75 bg-white/62 text-[#2d5f9d] shadow-sm shadow-blue-900/5 transition-[background-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
            aria-label="Dark mode toggle visual placeholder"
            title="Theme toggle"
          >
            <Moon size={16} className="transition-transform duration-200 group-hover:-rotate-6" aria-hidden />
            <Sun
              size={10}
              className="absolute right-2 top-2 text-[#8dbbff] opacity-80"
              aria-hidden
            />
          </button>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#2d5f9d] px-4 py-2.5 text-sm font-extrabold text-white shadow-md shadow-blue-900/15 transition-[background-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:bg-[#265589] hover:shadow-lg md:px-5"
            aria-label="Connect with Yafie"
          >
            <span className="hidden sm:inline">Let&apos;s Connect</span>
            <MessageCircle size={17} aria-hidden />
          </Link>
        </div>
      </div>
    </header>
  );
}
