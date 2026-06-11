import Link from "next/link";
import { ArrowUpRight, FileText, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Reveal from "@/components/ui/Reveal";
import { contactMethods } from "@/data/contact";

const methodIcons = {
  email: Mail,
  linkedin: FaLinkedin,
  github: FaGithub,
  resume: FileText,
} as const;

export default function ContactMethods() {
  return (
    <section className="scroll-mt-32 pb-20 lg:pb-24" id="contact-methods">
      <Reveal>
        <div className="mb-8 border-l border-[#8dbbff]/45 pl-4">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#2d5f9d]/75">
            02 // contact.methods
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
            Ways to connect.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            Choose the quickest way to reach out.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-3 md:grid-cols-2">
        {contactMethods.map((method, index) => {
          const Icon = methodIcons[method.key];
          const isDisabled = "disabled" in method && method.disabled;
          const isExternal = method.href.startsWith("http");
          const isMail = method.href.startsWith("mailto:");

          return (
            <Reveal key={method.title} delay={index * 0.05}>
              <article className="group flex h-full items-start gap-4 rounded-[18px] border border-white/75 bg-white/72 p-4 shadow-[0_16px_40px_rgba(45,95,157,0.07)] backdrop-blur-xl transition-[border-color,box-shadow,background-color,transform] duration-300 hover:-translate-y-0.5 hover:border-[#8dbbff]/55 hover:bg-white/88 hover:shadow-[0_20px_54px_rgba(45,95,157,0.11)]">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[14px] border border-[#8dbbff]/24 bg-[#eef5ff]/78 text-[#2d5f9d] shadow-[0_10px_22px_rgba(45,95,157,0.08)]">
                  <Icon size={18} strokeWidth={2.2} aria-hidden />
                </span>

                <div className="min-w-0 flex-1">
                  <div>
                    <p className="font-mono text-[0.58rem] font-bold uppercase tracking-[0.14em] text-[#2d5f9d]/70">
                      {method.key}
                    </p>
                    <h3 className="mt-1 text-base font-extrabold tracking-tight text-slate-950">
                      {method.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {method.description}
                    </p>
                  </div>

                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <p className="rounded-full border border-[#d4e3ff]/62 bg-[#f8fbff]/72 px-3 py-1.5 text-sm font-semibold text-slate-700">
                      {method.value}
                    </p>
                    {isDisabled ? (
                      <span
                        className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/66 px-3 py-1.5 text-sm font-extrabold text-slate-500"
                        aria-disabled="true"
                      >
                        {method.cta}
                      </span>
                    ) : isExternal || isMail ? (
                      <a
                        href={method.href}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noreferrer" : undefined}
                        aria-label={`${method.cta} (${method.title})`}
                        className="inline-flex items-center gap-2 rounded-full border border-[#d4e3ff]/70 bg-white/70 px-3 py-1.5 text-sm font-extrabold text-[#2d5f9d] transition-[background-color,border-color,color,transform] duration-200 hover:-translate-y-0.5 hover:border-[#8dbbff]/55 hover:bg-white hover:text-[#24548f]"
                      >
                        {method.cta}
                        {isMail ? (
                          <Mail size={16} aria-hidden />
                        ) : (
                          <ArrowUpRight size={16} aria-hidden />
                        )}
                      </a>
                    ) : (
                      <Link
                        href={method.href}
                        aria-label={`${method.cta} (${method.title})`}
                        className="inline-flex items-center gap-2 rounded-full border border-[#d4e3ff]/70 bg-white/70 px-3 py-1.5 text-sm font-extrabold text-[#2d5f9d] transition-[background-color,border-color,color,transform] duration-200 hover:-translate-y-0.5 hover:border-[#8dbbff]/55 hover:bg-white hover:text-[#24548f]"
                      >
                        {method.cta}
                        {isMail ? (
                          <Mail size={16} aria-hidden />
                        ) : (
                          <ArrowUpRight size={16} aria-hidden />
                        )}
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
