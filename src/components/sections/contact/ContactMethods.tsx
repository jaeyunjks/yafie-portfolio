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
            Choose the easiest way to reach out.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {contactMethods.map((method, index) => {
          const Icon = methodIcons[method.key];
          const isExternal = method.href.startsWith("http");
          const isMail = method.href.startsWith("mailto:");

          return (
            <Reveal key={method.title} delay={index * 0.05}>
              <article className="group h-full overflow-hidden rounded-[20px] border border-white/75 bg-white/72 p-5 shadow-[0_18px_55px_rgba(45,95,157,0.08)] backdrop-blur-xl transition-[border-color,box-shadow,background-color,transform] duration-300 hover:-translate-y-1 hover:border-[#8dbbff]/55 hover:bg-white/90 hover:shadow-[0_24px_70px_rgba(45,95,157,0.13)]">
                <div className="flex h-full flex-col">
                  <span className="flex h-11 w-11 items-center justify-center rounded-[14px] border border-[#8dbbff]/24 bg-[#eef5ff]/78 text-[#2d5f9d] shadow-[0_12px_28px_rgba(45,95,157,0.1)]">
                    <Icon size={19} strokeWidth={2.2} aria-hidden />
                  </span>

                  <div className="mt-4">
                    <p className="font-mono text-[0.58rem] font-bold uppercase tracking-[0.14em] text-[#2d5f9d]/70">
                      {method.key}
                    </p>
                    <h3 className="mt-2 text-lg font-extrabold tracking-tight text-slate-950">
                      {method.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {method.description}
                    </p>
                  </div>

                  <div className="mt-4 rounded-[14px] border border-[#d4e3ff]/62 bg-[#f8fbff]/72 px-3.5 py-3">
                    <p className="text-sm font-semibold text-slate-700">
                      {method.value}
                    </p>
                  </div>

                  <div className="mt-5 pt-1">
                    {isExternal || isMail ? (
                      <a
                        href={method.href}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noreferrer" : undefined}
                        aria-label={`${method.cta} (${method.title})`}
                        className="inline-flex items-center gap-2 text-sm font-extrabold text-[#2d5f9d] transition-colors duration-200 hover:text-[#24548f]"
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
                        className="inline-flex items-center gap-2 text-sm font-extrabold text-[#2d5f9d] transition-colors duration-200 hover:text-[#24548f]"
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
