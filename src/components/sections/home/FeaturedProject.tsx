import Link from "next/link";
import { ArrowRight } from "lucide-react";

const techStack = ["SwiftUI", "AI Integration", "Firebase"];

export default function FeaturedProject() {
  return (
    <section className="pb-24 lg:pb-32">
      <article className="group overflow-hidden rounded-[34px] border border-white/75 bg-white/76 shadow-2xl shadow-blue-900/10 backdrop-blur-xl lg:grid lg:grid-cols-[0.95fr_1fr]">
        <div className="flex flex-col justify-between gap-9 p-8 md:p-12">
          <div>
            <p className="inline-flex rounded-full bg-[#d4e3ff] px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.18em] text-[#064784]">
              Featured Project
            </p>
            <h2 className="mt-6 text-3xl font-extrabold text-slate-950 md:text-4xl">
              Lumora
            </h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-slate-600">
              An AI-powered study workspace designed for smarter learning and
              streamlined productivity. Featuring intelligent flashcards and
              deep focus analytics.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-xl border border-slate-200/75 bg-white/80 px-3 py-1.5 text-xs font-extrabold text-slate-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <Link
            href="/projects"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-[#2d5f9d] px-5 py-3 text-sm font-extrabold text-white shadow-lg shadow-blue-900/15 transition-[background-color,transform] duration-300 hover:-translate-y-1 hover:bg-[#265589]"
          >
            View Case Study <ArrowRight size={18} aria-hidden />
          </Link>
        </div>

        <div className="relative min-h-[340px] overflow-hidden bg-gradient-to-br from-[#d4e3ff]/70 via-[#eef4ff] to-[#e7deff]/75 p-8 md:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(45,95,157,0.12),transparent_32%),radial-gradient(circle_at_90%_80%,rgba(98,85,149,0.12),transparent_35%)]" />
          <div className="relative mx-auto mt-4 w-full max-w-md rotate-[-3deg] rounded-[28px] border border-white/75 bg-white/82 p-5 shadow-2xl shadow-blue-900/18 transition-transform duration-300 group-hover:rotate-[-2deg] group-hover:scale-[1.02]">
            <div className="rounded-[22px] bg-gradient-to-br from-[#f9f9ff] to-[#e7deff] p-5">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-extrabold text-[#2d5f9d]">Lumora</p>
                  <p className="text-xs font-semibold text-slate-500">Focus workspace</p>
                </div>
                <div className="grid h-10 w-10 place-items-center rounded-full bg-[#2d5f9d] text-sm font-black text-white">
                  L
                </div>
              </div>
              <div className="grid gap-3">
                <div className="rounded-2xl bg-white/86 p-4 shadow-sm">
                  <div className="h-3 w-28 rounded-full bg-slate-200" />
                  <div className="mt-4 h-3 w-44 rounded-full bg-[#8dbbff]" />
                  <div className="mt-2 h-3 w-32 rounded-full bg-[#c6b7ff]" />
                  <div className="mt-5 h-20 rounded-2xl bg-[#d4e3ff]/55" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="h-24 rounded-2xl bg-white/84 p-3 shadow-sm">
                    <div className="h-2 w-12 rounded-full bg-slate-200" />
                    <div className="mt-4 h-10 rounded-xl bg-[#8dbbff]/35" />
                  </div>
                  <div className="h-24 rounded-2xl bg-white/84 p-3 shadow-sm">
                    <div className="h-2 w-12 rounded-full bg-slate-200" />
                    <div className="mt-4 h-10 rounded-xl bg-[#c6b7ff]/40" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
