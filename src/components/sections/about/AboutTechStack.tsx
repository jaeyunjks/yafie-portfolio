"use client";

import { Info } from "lucide-react";
import { motion } from "motion/react";
import Reveal from "@/components/ui/Reveal";
import { techStack } from "@/data/techStack";

const statusStyles = {
  "actively using":
    "border-[#8dbbff]/55 bg-[#eef5ff]/82 text-[#2d5f9d]",
  familiar: "border-[#d4e3ff]/70 bg-white/76 text-slate-500",
  learning: "border-[#c6b7ff]/56 bg-[#f7f3ff]/78 text-[#67549e]",
};

export default function AboutTechStack() {
  return (
    <section className="pb-20 lg:pb-24">
      <Reveal>
        <div className="mb-8 flex flex-col justify-between gap-5 border-l border-[#8dbbff]/45 pl-4 lg:flex-row lg:items-end">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#2d5f9d]/75">
              03 // technical.stack
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
              Technical Capabilities
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
              Languages, frameworks, and tools I&apos;m actively using or
              developing through university projects, personal builds, and
              software engineering practice.
            </p>
          </div>

          <div className="flex max-w-sm items-start gap-3 rounded-[14px] border border-[#d4e3ff]/75 bg-white/64 p-3 text-sm leading-6 text-slate-600 shadow-[0_14px_38px_rgba(45,95,157,0.08)] backdrop-blur-xl">
            <Info
              size={18}
              strokeWidth={2.2}
              aria-hidden
              className="mt-0.5 shrink-0 text-[#2d5f9d]"
            />
            <p>
              Experience bars represent learning exposure and practical usage
              duration, not mastery.
            </p>
          </div>
        </div>
      </Reveal>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {techStack.map((category, index) => (
          <Reveal key={category.title} delay={index * 0.06}>
            <article className="group relative h-full overflow-hidden rounded-[18px] border border-white/75 bg-white/68 p-4 shadow-[0_22px_70px_rgba(45,95,157,0.1)] backdrop-blur-xl transition-[border-color,box-shadow,background-color,transform] duration-300 hover:-translate-y-1 hover:border-[#8dbbff]/55 hover:bg-white/88 hover:shadow-[0_28px_82px_rgba(45,95,157,0.14)] md:p-5">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(150deg,rgba(255,255,255,0.82),rgba(238,245,255,0.42)_46%,rgba(231,222,255,0.18))]" />
              <div className="pointer-events-none absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#8dbbff]/78 via-[#c6b7ff]/58 to-transparent" />
              <div className="relative z-10">
                <div className="mb-4 flex items-start justify-between gap-3 border-b border-[#d4e3ff]/62 pb-4">
                  <div>
                    <p className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#2d5f9d]/70">
                      {category.label}
                    </p>
                    <h3 className="mt-2 text-xl font-extrabold tracking-tight text-slate-950 md:text-2xl">
                      {category.title}
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="rounded-full border border-[#d4e3ff]/75 bg-[#f8fbff]/82 px-2.5 py-1 font-mono text-[0.58rem] font-bold uppercase tracking-[0.14em] text-[#2d5f9d]/70">
                      [{String(index + 1).padStart(2, "0")}]
                    </span>
                    <p className="mt-2 font-mono text-[0.56rem] font-bold uppercase tracking-[0.12em] text-slate-400">
                      3 yrs max
                    </p>
                  </div>
                </div>

                <p className="mb-5 text-sm leading-7 text-slate-600">
                  {category.description}
                </p>

                <div className="grid gap-2.5">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="group/row rounded-[13px] border border-[#d4e3ff]/56 bg-white/62 p-3 shadow-[0_10px_28px_rgba(45,95,157,0.045)] transition-[border-color,background-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-[#8dbbff]/55 hover:bg-white/92 hover:shadow-[0_14px_34px_rgba(45,95,157,0.1)]"
                    >
                      <div className="flex items-start gap-3">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[11px] border border-[#d4e3ff]/58 bg-white/72 transition-transform duration-300 group-hover/row:-translate-y-0.5">
                          <item.icon
                            size={17}
                            aria-hidden
                            style={{ color: item.brandColor ?? "#2d5f9d" }}
                          />
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-start justify-between gap-2">
                            <div className="min-w-0">
                              <p className="text-sm font-extrabold text-slate-900">
                                {item.name}
                              </p>
                            </div>
                            <div className="flex shrink-0 flex-col items-end gap-1">
                              <p className="rounded-full border border-[#d4e3ff]/70 bg-[#f8fbff]/82 px-2.5 py-1 font-mono text-[0.56rem] font-bold uppercase tracking-[0.1em] text-[#2d5f9d]/72">
                                {item.duration}
                              </p>
                              <p
                                className={`rounded-full border px-2 py-0.5 font-mono text-[0.52rem] font-bold uppercase tracking-[0.1em] ${statusStyles[item.status]}`}
                              >
                                {item.status}
                              </p>
                            </div>
                          </div>

                          <div
                            className="mt-3 h-2.5 overflow-hidden rounded-full border border-white/70 bg-[#d4e3ff]/38 shadow-inner shadow-[#2d5f9d]/5"
                            aria-label={`${item.name} experience exposure: ${item.duration}`}
                          >
                            <motion.div
                              className="exposure-fill h-full rounded-full bg-gradient-to-r from-[#8dbbff] via-[#a8c8ff] to-[#c6b7ff]"
                              initial={{ width: 0 }}
                              animate={{ width: 0 }}
                              whileInView={{ width: `${item.exposure}%` }}
                              viewport={{ once: false, amount: 0.35 }}
                              transition={{
                                duration: 1.08,
                                ease: [0.22, 1, 0.36, 1],
                              }}
                            >
                              <motion.span
                                className="exposure-shine"
                                initial={{ x: "-120%" }}
                                animate={{ x: "-120%" }}
                                whileInView={{ x: "120%" }}
                                viewport={{ once: false, amount: 0.35 }}
                                transition={{
                                  duration: 1.1,
                                  delay: 0.12,
                                  ease: "easeOut",
                                }}
                              />
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
