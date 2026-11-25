import { ArrowDown, ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import type { FlowStep } from "@/types";

/**
 * A left-to-right flow of steps (top-to-bottom on small screens), with arrows
 * between them. Used for architecture and workflow diagrams. See ADR 0001.
 * Each arrow lives inside its step's <li>, so screen readers count only steps.
 */
export default function FlowSteps({
  steps,
  ariaLabel,
}: {
  steps: readonly FlowStep[];
  ariaLabel: string;
}) {
  return (
    <Reveal>
      <ol aria-label={ariaLabel} className="flex flex-col gap-2 lg:flex-row">
        {steps.map((step, index) => {
          const isLast = index === steps.length - 1;
          return (
            <li key={step.title} className="flex flex-1 flex-col gap-2 lg:flex-row">
              <div className="flex-1 rounded-[20px] border border-[#d4e3ff]/72 bg-white/72 p-5 shadow-[0_14px_40px_rgba(45,95,157,0.08)] backdrop-blur-xl">
                <p className="font-mono text-[0.58rem] font-bold uppercase tracking-[0.15em] text-[#2d5f9d]/90">
                  step.{String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 text-base font-extrabold tracking-tight text-slate-950">
                  {step.title}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{step.body}</p>
              </div>
              {isLast ? null : (
                <span aria-hidden className="flex items-center justify-center text-[#8dbbff]">
                  <ArrowDown size={18} className="lg:hidden" />
                  <ArrowRight size={18} className="hidden lg:block" />
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </Reveal>
  );
}
