"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Menu, MessageCircle, Moon, Sun, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { navItems } from "@/data/nav";
import { contactMeta } from "@/data/contact";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
    menuButtonRef.current?.focus();
  };

  return (
    <header className="fixed left-0 right-0 top-3 z-50 px-3 sm:px-6 md:top-4">
      <div
        className={cn(
          "relative z-[61] mx-auto grid w-full max-w-[92rem] grid-cols-[auto_1fr_auto] items-center gap-3 transition-opacity duration-200 md:gap-5 md:opacity-100",
          isMenuOpen && "pointer-events-none opacity-0 md:pointer-events-auto",
        )}
      >
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
                  onClick={() => setIsMenuOpen(false)}
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
            className="hidden items-center gap-2 rounded-full bg-[#2d5f9d] px-4 py-2.5 text-sm font-extrabold text-white shadow-md shadow-blue-900/15 transition-[background-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:bg-[#265589] hover:shadow-lg md:inline-flex md:px-5"
            aria-label="Connect with Yafie"
          >
            <span className="hidden sm:inline">Let&apos;s Connect</span>
            <MessageCircle size={17} aria-hidden />
          </Link>

          <button
            ref={menuButtonRef}
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/75 bg-white/70 text-[#2d5f9d] shadow-sm shadow-blue-900/5 transition-[background-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2d5f9d] md:hidden"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            {isMenuOpen ? <X size={18} aria-hidden /> : <Menu size={18} aria-hidden />}
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <div
          id="mobile-navigation"
          className="fixed inset-0 z-[60] flex min-h-svh flex-col overflow-hidden bg-white/82 px-6 py-5 backdrop-blur-2xl transition-[opacity,transform] duration-300 md:hidden"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(141,187,255,0.24),transparent_32%),radial-gradient(circle_at_84%_10%,rgba(198,183,255,0.2),transparent_28%),linear-gradient(180deg,rgba(249,249,255,0.9),rgba(255,255,255,0.72))]" />
          <div className="relative z-10 flex items-center justify-between">
            <p className="font-mono text-[0.58rem] font-bold uppercase tracking-[0.26em] text-[#2d5f9d]/68">
              // navigation
            </p>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/80 bg-white/68 text-[#2d5f9d] shadow-sm shadow-blue-900/10 backdrop-blur-xl transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2d5f9d]"
              aria-label="Close navigation menu"
              onClick={closeMenu}
            >
              <X size={16} aria-hidden />
            </button>
          </div>

          <nav aria-label="Mobile navigation" className="relative z-10 flex flex-1 items-center justify-center">
            <ul className="grid w-full max-w-xs gap-2 text-center sm:gap-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      "group flex items-center justify-center gap-2 rounded-full px-5 py-2 text-[clamp(1.45rem,6vw,2rem)] font-semibold leading-none tracking-tight text-slate-900 transition-[background-color,color,transform] duration-200 hover:-translate-y-0.5 hover:bg-white/64 hover:text-[#2d5f9d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2d5f9d]",
                      pathname === item.href && "bg-white/72 text-[#2d5f9d] shadow-sm shadow-blue-900/10",
                    )}
                  >
                    {pathname === item.href ? (
                      <span className="h-1.5 w-1.5 rounded-full bg-[#2d5f9d] shadow-[0_0_0_4px_rgba(45,95,157,0.12)]" aria-hidden />
                    ) : null}
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2 flex items-center justify-center gap-3">
                <a
                  href={`mailto:${contactMeta.email}`}
                  aria-label="Send email"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/80 bg-white/68 text-[#2d5f9d] shadow-sm shadow-blue-900/10 backdrop-blur-xl transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-white"
                >
                  <Mail size={18} aria-hidden />
                </a>
                <a
                  href={contactMeta.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/80 bg-white/68 text-[#2d5f9d] shadow-sm shadow-blue-900/10 backdrop-blur-xl transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-white"
                >
                  <FaLinkedin size={18} aria-hidden />
                </a>
                <a
                  href={contactMeta.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/80 bg-white/68 text-slate-700 shadow-sm shadow-blue-900/10 backdrop-blur-xl transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-white"
                >
                  <FaGithub size={18} aria-hidden />
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="mt-3 flex items-center justify-center gap-2 rounded-full bg-[#2d5f9d] px-5 py-3 text-[0.68rem] font-extrabold uppercase tracking-[0.11em] text-white shadow-lg shadow-blue-900/15 transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-[#265589] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2d5f9d]"
                >
                  Let&apos;s Connect
                  <MessageCircle size={16} aria-hidden />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
