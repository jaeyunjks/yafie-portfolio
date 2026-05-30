import { existsSync, readdirSync } from "fs";
import { join } from "path";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Database,
  MapPin,
  MessageCircle,
  Smartphone,
  Terminal,
} from "lucide-react";
import FloatingIcon from "@/components/ui/FloatingIcon";

function getMascotSrc() {
  const mascotDirectory = join(process.cwd(), "public", "images", "mascot");

  if (!existsSync(mascotDirectory)) {
    return null;
  }

  const mascotFile = readdirSync(mascotDirectory).find((file) =>
    /\.(png|jpe?g|webp|avif|gif)$/i.test(file),
  );

  return mascotFile ? `/images/mascot/${mascotFile}` : null;
}

export default function HomeHero() {
  const mascotSrc = getMascotSrc();

  return (
    <section className="grid min-h-[calc(100vh-8rem)] items-center gap-12 pb-20 pt-6 lg:grid-cols-[1fr_0.92fr] lg:pb-28">
      <div className="content-fade-in max-w-3xl">
        <p className="inline-flex items-center gap-3 rounded-full bg-[#d4e3ff] px-4 py-2 text-sm font-bold text-[#064784] shadow-sm">
          <span className="h-2 w-2 rounded-full bg-[#2d5f9d] shadow-[0_0_0_6px_rgba(45,95,157,0.12)]" />
          Open to 2026 Internship / Graduate Roles
        </p>

        <h1 className="mt-7 text-5xl font-extrabold leading-[1.04] tracking-normal text-slate-950 sm:text-6xl lg:text-7xl">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-[#2d5f9d] to-[#8dbbff] bg-clip-text text-transparent">
            Yafie
          </span>
          ,<br />
          Software Engineer
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          I build scalable web, mobile, and AI-powered applications with clean
          user experiences and thoughtful product design.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full bg-[#2d5f9d] px-7 py-4 text-sm font-extrabold text-white shadow-lg shadow-blue-900/15 transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:bg-[#265589] hover:shadow-xl"
          >
            View My Work <ArrowRight size={18} aria-hidden />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/72 px-7 py-4 text-sm font-extrabold text-slate-800 shadow-sm backdrop-blur-md transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md"
          >
            Let&apos;s Connect <MessageCircle size={18} aria-hidden />
          </Link>
        </div>

        <p className="mt-7 flex items-center gap-2 text-sm font-semibold text-slate-600">
          <MapPin size={18} className="text-[#2d5f9d]" aria-hidden />
          Based in Sydney, Australia
        </p>
      </div>

      <div className="relative mx-auto flex min-h-[390px] w-full max-w-[540px] items-center justify-center sm:min-h-[500px]">
        <div className="absolute inset-10 rounded-full bg-[#8dbbff]/25 blur-[82px]" />
        <FloatingIcon icon={Code2} label="Code technology icon" title="Code" className="left-3 top-9" />
        <FloatingIcon icon={Smartphone} label="Mobile technology icon" title="Mobile" className="bottom-24 left-0 [animation-delay:0.6s]" />
        <FloatingIcon icon={Database} label="Database technology icon" title="Database" className="right-2 top-16 [animation-delay:1.1s]" />
        <FloatingIcon icon={Terminal} label="Terminal technology icon" title="Terminal" className="bottom-28 right-0 [animation-delay:1.6s]" />

        <div className="soft-float relative z-10 w-[78%] max-w-[390px] rounded-[34px] border border-white/75 bg-white/58 p-6 shadow-2xl shadow-blue-900/12 backdrop-blur-xl">
          {mascotSrc ? (
            <img
              src={mascotSrc}
              alt="Husky software engineer mascot"
              className="mx-auto max-h-[330px] w-full object-contain drop-shadow-2xl"
            />
          ) : (
            <div
              role="img"
              aria-label="Husky software engineer mascot placeholder with laptop"
              className="mx-auto flex aspect-square max-w-[300px] flex-col items-center justify-center rounded-[30px] bg-gradient-to-br from-white via-[#eef4ff] to-[#e7deff] p-7 text-center"
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
          <div className="mx-auto -mt-7 h-16 w-48 rounded-t-3xl border border-white/70 bg-slate-900 shadow-xl">
            <div className="mx-auto mt-4 h-2 w-16 rounded-full bg-[#8dbbff]" />
          </div>
        </div>
      </div>
    </section>
  );
}
