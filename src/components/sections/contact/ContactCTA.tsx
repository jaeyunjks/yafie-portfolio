import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { contactMeta } from "@/data/contact";

export default function ContactCTA() {
  return (
    <section className="pb-20 lg:pb-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-[22px] border border-white/75 bg-white/68 p-8 shadow-[0_24px_80px_rgba(45,95,157,0.12)] backdrop-blur-xl md:p-12">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#c6b7ff]/24 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-[#8dbbff]/20 blur-3xl" />
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
              Let&apos;s start a conversation.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
              Whether it&apos;s a role opportunity, project discussion, or
              professional connection, I&apos;m happy to hear from you.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={`mailto:${contactMeta.email}`}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#2d5f9d] px-6 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-blue-900/15 transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:bg-[#265589] hover:shadow-xl"
              >
                Send Email
                <Mail size={17} aria-hidden />
              </a>
              <Link
                href="/work"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-slate-200/80 bg-white/72 px-6 py-3.5 text-sm font-extrabold text-slate-800 shadow-sm backdrop-blur-md transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md"
              >
                View Work Experience
                <ArrowRight
                  size={17}
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
