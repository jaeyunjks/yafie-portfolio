"use client";

import { motion } from "motion/react";

type SectionHeaderProps = {
  title: string;
  subtitle: string;
};

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4 }}
      className="mb-6"
    >
      <h2 className="text-3xl font-semibold tracking-tight text-slate-900">{title}</h2>
      <p className="mt-2 max-w-2xl text-slate-600">{subtitle}</p>
    </motion.div>
  );
}
