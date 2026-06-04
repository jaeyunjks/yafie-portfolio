import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import AboutProfileConsole from "./AboutProfileConsole";

export default function AboutHero() {
  return (
    <section className="pb-20 lg:pb-24">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.58fr)_minmax(360px,0.42fr)] lg:items-center">
        <Reveal>
          <div className="border-l border-[#8dbbff]/45 pl-4">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#2d5f9d]/75">
              01 // about.init
            </p>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-950 md:text-6xl">
              About me.
            </h1>
            <h2 className="mt-5 max-w-3xl text-2xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
              Software engineering, product thinking, and human-centred
              execution.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
              I&apos;m Yafie, a software engineering student based in Sydney,
              building practical software across web, mobile, cloud, and
              AI-assisted workflows. I&apos;m interested in creating products
              that feel clear, reliable, and genuinely useful.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 rounded-full bg-[#2d5f9d] px-6 py-3 text-sm font-extrabold text-white shadow-lg shadow-blue-900/15 transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:bg-[#265589] hover:shadow-xl"
              >
                View Projects
                <ArrowRight
                  size={17}
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/72 px-6 py-3 text-sm font-extrabold text-slate-800 shadow-sm backdrop-blur-md transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md"
              >
                Contact Me
                <MessageCircle size={17} aria-hidden />
              </Link>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <AboutProfileConsole />
        </Reveal>
      </div>
    </section>
  );
}
