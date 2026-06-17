import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { contactMeta } from "@/data/contact";

export default function ContactCTA() {
  const hasContactEmail = Boolean(contactMeta.email);

  return (
    <section className="pb-20 lg:pb-24">
      <Reveal>
        <div className="open-editorial-cta">
          <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
              Let&apos;s start a conversation.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
              Whether it&apos;s a role opportunity, project discussion, or
              professional connection, I&apos;m happy to hear from you.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
              {hasContactEmail ? (
                <a
                  href={`mailto:${contactMeta.email}`}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#2d5f9d] px-6 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-blue-900/15 transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:bg-[#265589] hover:shadow-xl"
                >
                  Send Email
                  <Mail size={17} aria-hidden />
                </a>
              ) : (
                <span
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d4e3ff]/75 bg-white/72 px-6 py-3.5 text-sm font-extrabold text-slate-500 shadow-sm backdrop-blur-md"
                  aria-disabled="true"
                >
                  Email available on request
                </span>
              )}
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
