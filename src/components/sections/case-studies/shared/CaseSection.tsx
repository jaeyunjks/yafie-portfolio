import type { ReactNode } from "react";
import Reveal from "@/components/ui/Reveal";

type CaseSectionProps = {
  id: string;
  /** Mono label above the title, e.g. "02 // architecture". */
  label: string;
  title: string;
  intro?: ReactNode;
  children?: ReactNode;
};

/** Standard case-study section: label, title, optional intro, then content. See ADR 0001. */
export default function CaseSection({ id, label, title, intro, children }: CaseSectionProps) {
  return (
    <section id={id} className="scroll-mt-32 px-6 py-10 md:py-14">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="max-w-3xl border-l border-[#8dbbff]/45 pl-4">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#2d5f9d]/90">
              {label}
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
              {title}
            </h2>
            {intro ? (
              <div className="mt-4 text-base leading-8 text-slate-600">{intro}</div>
            ) : null}
          </div>
        </Reveal>
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}
