"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Braces,
  Cloud,
  Code2,
  Database,
  MapPin,
  MessageCircle,
  Smartphone,
  Terminal,
} from "lucide-react";
import { SiReact } from "react-icons/si";

const mascotSrc = "/images/mascot/husky-coding.png";

function TechIconBlock({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  return (
    <div
      aria-hidden
      className={`tech-icon-block absolute z-20 grid h-12 w-12 place-items-center rounded-2xl border border-white/70 bg-white/55 text-[#2d5f9d] shadow-[0_16px_40px_rgba(45,95,157,0.12)] backdrop-blur-xl sm:h-14 sm:w-14 ${className}`}
    >
      {children}
    </div>
  );
}

export default function HomeHero() {
  const [mascotFailed, setMascotFailed] = useState(false);

  return (
    <section className="grid min-h-[calc(100svh-7rem)] items-center gap-10 pb-[4.5rem] pt-2 lg:grid-cols-[minmax(0,1.04fr)_minmax(0,0.96fr)] lg:gap-12 lg:pb-20 xl:gap-16 2xl:gap-20">
      <div className="max-w-[720px]">
        <p className="hero-reveal hero-reveal-1 mb-4 font-mono text-xs font-bold uppercase tracking-[0.24em] text-[#2d5f9d]/75">
          01 // portfolio.init
        </p>
        <p className="hero-reveal hero-reveal-2 inline-flex items-center gap-3 rounded-full border border-white/70 bg-white/72 px-4 py-2 text-sm font-bold text-[#064784] shadow-sm shadow-blue-900/5 backdrop-blur-xl">
          <span className="h-2 w-2 rounded-full bg-[#2d5f9d] shadow-[0_0_0_6px_rgba(45,95,157,0.12)]" />
          Open to 2026 Internship / Graduate Roles
        </p>

        <h1 className="hero-reveal hero-reveal-3 mt-7 text-[clamp(2.25rem,11vw,3rem)] font-bold leading-[1.01] tracking-[-0.04em] text-slate-950 sm:text-6xl lg:text-[5.15rem]">
          <span className="hero-typing-line hero-typing-line-a">
            Hi, I&apos;m{" "}
            <span className="yafie-shimmer font-extrabold bg-gradient-to-r from-[#1f5fbb] via-[#2d8bff] to-[#8dbbff] bg-clip-text text-transparent">
              Yafie
            </span>
            ,
          </span>
          <br />
          <span className="hero-typing-line hero-typing-line-b font-bold text-slate-900">
            Software Engineer
          </span>
        </h1>

        <p className="hero-reveal hero-reveal-4 mt-6 max-w-2xl text-base leading-8 text-slate-600/90 sm:text-[1.05rem]">
          I design and build clean, practical software across web, mobile, and
          AI-assisted products — with a focus on reliable systems, thoughtful
          interfaces, and real user outcomes.
        </p>

        <div className="hero-reveal hero-reveal-5 mt-8 flex flex-wrap gap-4">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-full bg-[#2d5f9d] px-7 py-4 text-sm font-extrabold text-white shadow-lg shadow-blue-900/15 transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:bg-[#265589] hover:shadow-xl"
          >
            More About Me <ArrowRight size={18} aria-hidden />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/72 px-7 py-4 text-sm font-extrabold text-slate-800 shadow-sm backdrop-blur-md transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md"
          >
            Let&apos;s Connect <MessageCircle size={18} aria-hidden />
          </Link>
        </div>

        <p className="hero-reveal hero-reveal-6 mt-6 flex items-center gap-2 text-sm font-semibold text-slate-600">
          <MapPin size={18} className="text-[#2d5f9d]" aria-hidden />
          Based in Sydney, Australia
        </p>
      </div>

      <div className="relative mx-auto flex min-h-[500px] w-full max-w-[760px] items-center justify-center overflow-visible sm:min-h-[610px] lg:-translate-x-3 lg:-translate-y-4 xl:max-w-[800px] xl:-translate-x-6 2xl:-translate-x-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_43%,rgba(141,187,255,0.34),transparent_39%),radial-gradient(circle_at_68%_25%,rgba(198,183,255,0.28),transparent_35%),radial-gradient(ellipse_at_48%_70%,rgba(255,255,255,0.78),transparent_43%)]" />
        <div className="absolute right-0 top-0 h-72 w-80 rounded-full bg-[#c6b7ff]/20 blur-[86px]" />
        <div className="absolute left-6 top-14 h-80 w-80 rounded-full bg-[#8dbbff]/18 blur-[96px]" />
        <div className="absolute bottom-20 h-28 w-[74%] rounded-full bg-[radial-gradient(ellipse,rgba(45,95,157,0.12),transparent_68%)]" />

        <div className="tech-float pointer-events-none absolute left-20 top-6 z-0 hidden w-36 rotate-[-7deg] rounded-2xl border border-white/60 bg-white/36 p-3 opacity-50 shadow-[0_18px_42px_rgba(45,95,157,0.08)] backdrop-blur-xl sm:block [animation-delay:2.8s]">
          <div className="mb-2 grid h-7 w-7 place-items-center rounded-lg bg-white/55 text-[#2d5f9d]">
            <Braces size={15} aria-hidden />
          </div>
          <div className="grid gap-1.5">
            <span className="h-1.5 w-20 rounded-full bg-[#8dbbff]/42" />
            <span className="h-1.5 w-28 rounded-full bg-slate-300/35" />
            <span className="h-1.5 w-16 rounded-full bg-[#c6b7ff]/42" />
          </div>
        </div>

        <div className="tech-float pointer-events-none absolute bottom-10 right-24 z-20 hidden w-32 rotate-[6deg] rounded-2xl border border-white/60 bg-white/42 p-3 opacity-60 shadow-[0_18px_42px_rgba(45,95,157,0.09)] backdrop-blur-xl sm:block [animation-delay:3.5s]">
          <div className="mb-2 grid h-7 w-7 place-items-center rounded-lg bg-white/55 text-[#625595]">
            <Terminal size={15} aria-hidden />
          </div>
          <div className="grid gap-1.5">
            <span className="h-1.5 w-20 rounded-full bg-slate-300/35" />
            <span className="h-1.5 w-14 rounded-full bg-[#8dbbff]/40" />
          </div>
        </div>

        <TechIconBlock className="left-2 top-32 sm:left-3 sm:top-[8.2rem] lg:left-1">
          <Braces size={24} aria-hidden />
        </TechIconBlock>
        <TechIconBlock className="left-2 top-[45%] hidden sm:grid lg:left-0 [animation-delay:0.8s]">
          <SiReact size={24} aria-hidden />
        </TechIconBlock>
        <TechIconBlock className="bottom-[7rem] left-1 sm:bottom-[9.4rem] sm:left-4 lg:left-0 [animation-delay:1.5s]">
          <Smartphone size={23} aria-hidden />
        </TechIconBlock>
        <TechIconBlock className="right-5 top-[10.2rem] sm:right-8 sm:top-[11.4rem] lg:right-5 [animation-delay:1.1s]">
          <Database size={23} aria-hidden />
        </TechIconBlock>
        <TechIconBlock className="right-3 top-[49%] hidden sm:grid lg:right-0 [animation-delay:2s]">
          <Cloud size={24} aria-hidden />
        </TechIconBlock>
        <TechIconBlock className="bottom-28 right-3 sm:bottom-40 sm:right-7 lg:right-4 [animation-delay:0.5s]">
          <Terminal size={23} aria-hidden />
        </TechIconBlock>

        <div className="tech-float absolute right-8 top-0 z-30 hidden w-72 rounded-3xl border border-white/75 bg-gradient-to-br from-white/72 via-white/52 to-[#e7deff]/46 p-4 shadow-[0_24px_70px_rgba(45,95,157,0.16)] backdrop-blur-xl sm:block lg:right-4 [animation-delay:1.2s]">
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_86%_12%,rgba(198,183,255,0.24),transparent_42%)]" />
          <div className="relative mb-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-full bg-[#ff8e8e]" />
              <span className="h-3 w-3 rounded-full bg-[#ffd37a]" />
              <span className="h-3 w-3 rounded-full bg-[#79d29c]" />
            </div>
            <span className="font-mono text-[0.62rem] font-bold tracking-[0.16em] text-[#625595]/75">
              {"// build.preview"}
            </span>
          </div>
          <div className="relative flex items-center gap-4">
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[#d4e3ff]/95 to-[#e7deff]/85 text-[#2d5f9d] shadow-inner shadow-white/45">
              <Code2 size={25} aria-hidden />
            </div>
            <div className="grid flex-1 gap-2">
              <span className="h-2 w-28 rounded-full bg-[#8dbbff]/58" />
              <span className="h-2 w-36 rounded-full bg-slate-300/45" />
              <span className="h-2 w-24 rounded-full bg-[#c6b7ff]/62" />
              <span className="h-2 w-32 rounded-full bg-[#8dbbff]/34" />
            </div>
          </div>
        </div>

        <div className="soft-float relative z-10 flex w-[90%] max-w-[650px] flex-col items-center">
          <div className="absolute inset-x-1 bottom-20 top-2 rounded-[48%] bg-[radial-gradient(circle,rgba(255,255,255,0.7),rgba(255,255,255,0.22)_56%,transparent_76%)]" />
          <div className="absolute bottom-[4.7rem] h-[5.6rem] w-[64%] rounded-[45%_55%_42%_58%/58%_50%_50%_42%] border border-white/75 bg-[linear-gradient(180deg,rgba(255,255,255,0.78),rgba(238,244,255,0.6)_52%,rgba(231,222,255,0.42))] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_22px_54px_rgba(45,95,157,0.13)] backdrop-blur-xl" />
          <div className="absolute bottom-8 h-14 w-[52%] rounded-full bg-[#8dbbff]/20 blur-2xl" />
          <div className="relative z-10 grid min-h-[380px] w-full place-items-center sm:min-h-[500px]">
            {!mascotFailed ? (
              <img
                src={mascotSrc}
                alt="Husky software engineer mascot"
                className="w-full max-w-[630px] object-contain drop-shadow-[0_38px_50px_rgba(45,95,157,0.2)]"
                onError={() => setMascotFailed(true)}
              />
            ) : (
              <div
                role="img"
                aria-label="Husky software engineer mascot placeholder with laptop"
                className="mx-auto flex aspect-square max-w-[330px] flex-col items-center justify-center rounded-[34px] border border-white/75 bg-gradient-to-br from-white/90 via-[#eef4ff]/86 to-[#e7deff]/82 p-7 text-center shadow-2xl shadow-blue-900/10 backdrop-blur-xl"
              >
                <div className="relative mb-5 grid h-28 w-28 place-items-center rounded-full bg-white shadow-xl shadow-blue-900/10">
                  <span className="text-5xl font-black text-[#2d5f9d]">Y.</span>
                  <span className="absolute -right-2 top-5 h-5 w-5 rounded-full bg-[#8dbbff]" />
                  <span className="absolute -left-2 top-5 h-5 w-5 rounded-full bg-[#8dbbff]" />
                </div>
                <p className="text-base font-extrabold text-slate-900">Mascot Scene</p>
                <p className="mt-2 max-w-[220px] text-sm leading-6 text-slate-500">
                  Add a local mascot image to public/images/mascot when ready.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
