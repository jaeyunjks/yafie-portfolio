"use client";

import Link from "next/link";
import { navItems } from "@/data/nav";
import { motion } from "motion/react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/75 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="text-lg font-semibold tracking-tight text-slate-900">
          yafie.dev
        </Link>
        <ul className="flex flex-wrap items-center gap-2 md:gap-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }}>
                <Link href={item.href} className="rounded-full px-3 py-1 text-sm text-slate-600 hover:bg-white hover:text-slate-900">
                  {item.label}
                </Link>
              </motion.div>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
