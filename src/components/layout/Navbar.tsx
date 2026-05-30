import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { navItems } from "@/data/nav";

export default function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-4">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border border-white/70 bg-white/72 px-4 py-3 shadow-lg shadow-blue-900/8 backdrop-blur-xl md:px-6">
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
                className="inline-flex rounded-full px-3 py-2 text-sm font-bold text-slate-600 transition-[background-color,color,transform] duration-200 hover:-translate-y-0.5 hover:bg-white/80 hover:text-[#2d5f9d]"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-[#2d5f9d] px-4 py-2.5 text-sm font-extrabold text-white shadow-md shadow-blue-900/15 transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-[#265589] md:px-5"
          aria-label="Connect with Yafie"
        >
          <span className="hidden sm:inline">Let&apos;s Connect</span>
          <MessageCircle size={17} aria-hidden />
        </Link>
      </nav>
    </header>
  );
}
