"use client";

import { motion } from "motion/react";

const snippets = [
  "const ui = polished({ accessibility: true });",
  "deploy({ confidence: 'high', quality: 'premium' });",
];

export default function FloatingCode() {
  return (
    <div className="pointer-events-none absolute -right-4 top-8 hidden w-80 gap-3 lg:grid">
      {snippets.map((snippet, index) => (
        <motion.pre
          key={snippet}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 6 + index, repeat: Number.POSITIVE_INFINITY }}
          className="frosted rounded-xl p-3 font-mono text-xs text-slate-600"
        >
          {snippet}
        </motion.pre>
      ))}
    </div>
  );
}
