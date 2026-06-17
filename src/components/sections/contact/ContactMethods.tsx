"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, Copy, FileText, Mail, X } from "lucide-react";
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
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    if (!isResumeOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsResumeOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isResumeOpen]);

  return (
    <section className="scroll-mt-32 pb-20 lg:pb-24" id="contact-methods">
      <Reveal>
        <div className="mb-8 border-l border-[#8dbbff]/45 pl-4">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#2d5f9d]/75">
            03 // contact.methods
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
            Ways to connect.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            Choose the quickest way to reach out.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-4 md:grid-cols-2">
        {contactMethods.map((method, index) => {
          const Icon = methodIcons[method.key];
          const primaryHref = method.primaryHref;
          const secondaryHref = method.secondaryHref;

          function renderAction(
            label: string,
            href: string | undefined,
            isDisabled: boolean | undefined,
            variant: "default" | "secondary",
          ) {
            if (!href || isDisabled) {
              return (
                <span
                  className={`inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-extrabold ${
                    variant === "default"
                      ? "border border-[#d4e3ff]/68 bg-[#eef5ff]/74 text-[#2d5f9d]/70"
                      : "border border-slate-200/80 bg-white/66 text-slate-500"
                  }`}
                  aria-disabled="true"
                >
                  {label}
                </span>
              );
            }

            const isExternal = href.startsWith("http");
            const isMail = href.startsWith("mailto:");
            const isResumePrimary =
              method.key === "resume" &&
              variant === "default" &&
              label === method.primaryCta;
            const sharedClassName =
              variant === "default"
                ? "inline-flex items-center justify-center gap-2 rounded-full bg-[#2d5f9d] px-4 py-2.5 text-sm font-extrabold text-white shadow-lg shadow-blue-900/15 transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:bg-[#265589] hover:shadow-xl"
                : "inline-flex items-center justify-center gap-2 rounded-full border border-slate-200/80 bg-white/72 px-4 py-2.5 text-sm font-extrabold text-slate-800 shadow-sm backdrop-blur-md transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-md";

            const icon =
              variant === "default" && isMail ? (
                <Mail size={15} aria-hidden />
              ) : variant === "secondary" && method.key === "email" ? (
                <Copy size={15} aria-hidden />
              ) : (
                <ArrowUpRight size={15} aria-hidden />
              );

            if (isResumePrimary) {
              return (
                <button
                  type="button"
                  className={sharedClassName}
                  onClick={() => setIsResumeOpen(true)}
                >
                  {label}
                  {icon}
                </button>
              );
            }

            return isExternal || isMail ? (
              <a
                href={href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer" : undefined}
                className={sharedClassName}
              >
                {label}
                {icon}
              </a>
            ) : (
              <Link href={href} className={sharedClassName}>
                {label}
                {icon}
              </Link>
            );
          }

          return (
            <Reveal key={method.title} delay={index * 0.05}>
              <article className={`group relative overflow-hidden rounded-[22px] border p-5 shadow-[0_18px_48px_rgba(45,95,157,0.08)] backdrop-blur-xl transition-[border-color,box-shadow,background-color,transform] duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_68px_rgba(45,95,157,0.12)] ${
                method.key === "email"
                  ? "border-[#8dbbff]/46 bg-white/80 hover:border-[#8dbbff]/62"
                  : "border-white/75 bg-white/72 hover:border-[#8dbbff]/55 hover:bg-white/88"
              }`}>
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_88%_12%,rgba(198,183,255,0.16),transparent_30%),radial-gradient(circle_at_14%_88%,rgba(141,187,255,0.14),transparent_34%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] border border-[#8dbbff]/24 bg-[#eef5ff]/78 text-[#2d5f9d] shadow-[0_10px_22px_rgba(45,95,157,0.08)]">
                      <Icon size={18} strokeWidth={2.2} aria-hidden />
                    </span>
                    <span className="rounded-full border border-[#d4e3ff]/70 bg-white/74 px-3 py-1 font-mono text-[0.56rem] font-bold uppercase tracking-[0.13em] text-[#2d5f9d]/72">
                      {method.label}
                    </span>
                  </div>

                  <div className="mt-5">
                    <h3 className="text-lg font-extrabold tracking-tight text-slate-950">
                      {method.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {method.description}
                    </p>
                  </div>

                  <div className="mt-4">
                    <p className="inline-flex rounded-full border border-[#d4e3ff]/62 bg-[#f8fbff]/72 px-3 py-1.5 text-sm font-semibold text-slate-700">
                      {method.value}
                    </p>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2.5">
                    {renderAction(
                      method.primaryCta,
                      primaryHref,
                      method.primaryDisabled,
                      "default",
                    )}
                    {renderAction(
                      method.secondaryCta,
                      secondaryHref,
                      method.secondaryDisabled,
                      "secondary",
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      {isResumeOpen ? (
        <div
          role="presentation"
          className="fixed inset-0 z-[80] bg-slate-950/40 backdrop-blur-md"
          onClick={() => setIsResumeOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="resume-preview-title"
            className="absolute left-1/2 top-1/2 max-h-[88dvh] w-[calc(100vw-1.5rem)] max-w-[64rem] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-[28px] border border-white/70 bg-white/86 shadow-[0_30px_100px_rgba(15,23,42,0.25)] backdrop-blur-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_86%_10%,rgba(198,183,255,0.22),transparent_32%),radial-gradient(circle_at_12%_88%,rgba(141,187,255,0.18),transparent_36%)]" />
            <div className="relative z-10 flex flex-col gap-4 border-b border-[#d4e3ff]/62 px-4 py-4 sm:flex-row sm:items-start sm:justify-between sm:px-5 md:px-6">
              <div>
                <p className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#2d5f9d]/75">
                  resume.preview
                </p>
                <h3
                  id="resume-preview-title"
                  className="mt-2 text-xl font-extrabold tracking-tight text-slate-950"
                >
                  Resume
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  One-page preview in a focused in-page window.
                </p>
              </div>
              <div className="flex items-center gap-2 self-stretch sm:self-auto">
                <a
                  href="/Yafie-Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center rounded-full border border-slate-200/80 bg-white/72 px-4 py-2 text-sm font-extrabold text-slate-800 shadow-sm backdrop-blur-md transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-md sm:flex-none"
                >
                  Open PDF
                </a>
                <button
                  type="button"
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#d4e3ff]/75 bg-white/82 text-[#2d5f9d] shadow-sm transition-[background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-white"
                  aria-label="Close resume preview"
                  onClick={() => setIsResumeOpen(false)}
                >
                  <X size={18} aria-hidden />
                </button>
              </div>
            </div>

            <div className="relative z-10 p-3 sm:p-4 md:p-5">
              <div className="overflow-hidden rounded-[22px] border border-[#d4e3ff]/62 bg-[#f8fbff]/78 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
                <iframe
                  src="/Yafie-Resume.pdf"
                  title="Resume preview"
                  className="h-[56dvh] min-h-0 w-full bg-white sm:h-[72vh] sm:min-h-[30rem]"
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
