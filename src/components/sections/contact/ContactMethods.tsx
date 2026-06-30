"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Copy, FileText, Mail, X } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Reveal from "@/components/ui/Reveal";
import { contactMeta, contactMethods } from "@/data/contact";

const methodIcons = {
  email: Mail,
  linkedin: FaLinkedin,
  github: FaGithub,
  resume: FileText,
} as const;

const methodMeta = {
  email: "Usually replies within 24h",
  linkedin: "Professional profile",
  github: "Code in motion",
  resume: "Preview in page or open PDF",
} as const;

type ContactMethod = (typeof contactMethods)[number];

export default function ContactMethods() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [copiedMethod, setCopiedMethod] = useState<"email" | null>(null);

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

  const getDisplayValue = (method: ContactMethod) => {
    switch (method.key) {
      case "linkedin":
        return "/in/yafiefarabi0710";
      case "github":
        return "@jaeyunjks";
      case "resume":
        return contactMeta.resumeDisplay;
      default:
        return method.value;
    }
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactMeta.email);
      setCopiedMethod("email");
      window.setTimeout(() => {
        setCopiedMethod((current) => (current === "email" ? null : current));
      }, 1400);
    } catch {
      setCopiedMethod(null);
    }
  };

  const renderInlineEmailCopy = (method: ContactMethod) => {
    if (method.key !== "email") {
      return null;
    }

    return (
      <button
        type="button"
        onClick={handleCopyEmail}
        className="inline-flex items-center justify-center gap-1.5 rounded-full border border-slate-200/80 bg-white/68 px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.08em] text-slate-700 transition-[background-color,border-color,color] duration-300 hover:border-slate-300 hover:bg-white hover:text-slate-950"
      >
        <Copy size={11} aria-hidden />
        {copiedMethod === "email" ? "Copied" : "Copy"}
      </button>
    );
  };

  const renderPrimaryAction = (method: ContactMethod) => {
    const href = method.primaryHref;

    if (!href || method.primaryDisabled) {
      return (
        <span className="inline-flex items-center gap-3 rounded-full border border-[#d4e3ff]/60 bg-white/60 px-4 py-2 text-sm font-bold text-slate-400">
          {method.primaryCta}
        </span>
      );
    }

    const actionClassName =
      "inline-flex items-center gap-3 rounded-full border border-[#d4e3ff]/72 bg-white/76 px-4 py-2 text-sm font-bold text-slate-900 shadow-[0_10px_24px_rgba(45,95,157,0.08)] backdrop-blur-md transition-[transform,background-color,border-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-[#8dbbff]/58 hover:bg-white hover:shadow-[0_16px_30px_rgba(45,95,157,0.12)]";

    const content = (
      <>
        <span>{method.primaryCta}</span>
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-950 text-white shadow-[0_8px_18px_rgba(15,23,42,0.18)] transition-transform duration-300 group-hover/action:-translate-y-0.5 group-hover/action:translate-x-0.5">
          <ArrowUpRight size={14} aria-hidden />
        </span>
      </>
    );

    if (method.key === "resume") {
      return (
        <button
          type="button"
          className={`group/action ${actionClassName}`}
          onClick={() => setIsResumeOpen(true)}
        >
          {content}
        </button>
      );
    }

    const isExternal = href.startsWith("http");

    return (
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
        className={`group/action ${actionClassName}`}
      >
        {content}
      </a>
    );
  };

  const renderSecondaryAction = (method: ContactMethod) => {
    if (!method.secondaryHref || method.secondaryDisabled) {
      return null;
    }

    const isExternal = method.secondaryHref.startsWith("http");

    return (
      <a
        href={method.secondaryHref}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
        className="inline-flex items-center justify-center rounded-full border border-[#d4e3ff]/68 bg-white/64 px-3.5 py-2 font-mono text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[#2d5f9d]/78 transition-[background-color,border-color,color] duration-300 hover:border-[#8dbbff]/52 hover:bg-white hover:text-[#2d5f9d] md:border-0 md:bg-transparent md:px-0 md:py-0"
      >
        {method.secondaryCta}
      </a>
    );
  };

  return (
    <section className="scroll-mt-32 pb-20 lg:pb-24" id="contact-methods">
      <Reveal>
        <div className="flex flex-col gap-7 border-b border-[#d4e3ff]/52 pb-8 md:gap-8 md:pb-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl border-l border-[#8dbbff]/45 pl-4">
            <p className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.22em] text-[#2d5f9d]/75">
              03 // contact.methods
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
              Ways to connect.
            </h2>
            <p className="mt-4 max-w-2xl text-[0.98rem] leading-7 text-slate-600 sm:text-[1.02rem] sm:leading-8">
              Four direct lines. Pick whichever fits the conversation best.
            </p>
          </div>

          <div className="inline-flex w-fit items-center gap-3 rounded-full border border-[#d4e3ff]/62 bg-white/72 px-4 py-3 font-mono text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#2d5f9d]/78 shadow-[0_10px_24px_rgba(45,95,157,0.08)] backdrop-blur-md">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.15)]" />
            Available for opportunities
          </div>
        </div>
      </Reveal>

      <div className="mt-4">
        {contactMethods.map((method, index) => {
          const Icon = methodIcons[method.key];

          return (
            <Reveal key={method.title} delay={index * 0.05}>
              <article className="group relative grid grid-cols-[3rem_minmax(0,1fr)] gap-x-4 gap-y-4 border-b border-[#d4e3ff]/40 py-5 transition-[background-color,border-color] duration-300 hover:border-[#8dbbff]/42 hover:bg-white/36 sm:py-6 md:grid-cols-[3.25rem_minmax(0,1fr)_minmax(0,1.25fr)_auto] md:items-center md:gap-x-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-[14px] border border-[#d4e3ff]/72 bg-white/64 text-slate-900 shadow-[0_10px_24px_rgba(45,95,157,0.06)] backdrop-blur-md">
                  <Icon size={18} aria-hidden />
                </span>

                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="text-[1.45rem] font-semibold tracking-[-0.02em] text-slate-950">
                      {method.title}
                    </h3>
                    <span className="rounded-full border border-[#d4e3ff]/70 bg-white/72 px-2.5 py-1 font-mono text-[0.58rem] font-bold uppercase tracking-[0.13em] text-[#2d5f9d]/72">
                      {method.label}
                    </span>
                  </div>
                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    <p className="font-mono text-[0.8rem] font-medium text-slate-700 sm:text-[0.86rem]">
                      {getDisplayValue(method)}
                    </p>
                    {renderInlineEmailCopy(method)}
                  </div>
                </div>

                <div className="col-start-2 md:col-span-1 md:col-start-auto">
                  <p className="text-sm leading-7 text-slate-600 sm:text-[0.96rem]">
                    {method.description}
                  </p>
                </div>

                <div className="col-start-2 flex flex-col items-start gap-3 md:col-span-1 md:col-start-auto md:max-w-[14rem] md:justify-self-end md:items-end">
                  <span className="font-mono text-[0.64rem] font-bold uppercase tracking-[0.16em] text-[#2d5f9d]/68">
                    {methodMeta[method.key]}
                  </span>
                  <div className="flex flex-wrap items-center gap-2.5 md:justify-end">
                    {renderSecondaryAction(method)}
                    {renderPrimaryAction(method)}
                  </div>
                </div>

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#8dbbff]/55 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </article>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.25}>
        <div className="flex flex-col gap-3 pt-6 font-mono text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#2d5f9d]/72 sm:flex-row sm:items-center sm:justify-between">
          <span>{"// Clear, professional, project-focused replies"}</span>
          <span>{contactMeta.location.replace(", ", " · ").toUpperCase()}</span>
        </div>
      </Reveal>

      {isResumeOpen ? (
        <div
          role="presentation"
          className="fixed inset-0 z-[80] overflow-y-auto bg-slate-950/40 px-3 pb-3 pt-20 backdrop-blur-md sm:px-4 sm:pb-4 sm:pt-24 md:px-6 md:pt-28"
          onClick={() => setIsResumeOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="resume-preview-title"
            className="relative mx-auto max-h-[calc(100dvh-6rem)] w-full max-w-[64rem] overflow-y-auto rounded-[28px] border border-white/70 bg-white/86 shadow-[0_30px_100px_rgba(15,23,42,0.25)] backdrop-blur-2xl sm:max-h-[calc(100dvh-7rem)] md:max-h-[calc(100dvh-8rem)]"
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
