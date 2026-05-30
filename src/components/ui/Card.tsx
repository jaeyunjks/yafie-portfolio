"use client";

import { motion } from "motion/react";
import { HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";

export default function Card({ className, ...props }: HTMLMotionProps<"article">) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={cn("frosted rounded-2xl p-6", className)}
      {...props}
    />
  );
}
