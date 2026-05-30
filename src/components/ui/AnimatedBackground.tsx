"use client";

import { motion } from "motion/react";

export default function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Number.POSITIVE_INFINITY }}
        className="absolute -left-10 top-12 h-44 w-44 rounded-full bg-blue-200/45 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -24, 0], y: [0, 26, 0] }}
        transition={{ duration: 16, repeat: Number.POSITIVE_INFINITY }}
        className="absolute right-16 top-0 h-48 w-48 rounded-full bg-violet-200/40 blur-3xl"
      />
    </div>
  );
}
