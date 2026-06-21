import { ArrowDown, ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import {
  freshBasketArchitectureFlow,
  freshBasketSupportingServices,
} from "@/data/caseStudies/freshbasket";
import { FreshBasketSectionLabel } from "./FreshBasketVisuals";

export default function FreshBasketArchitecture() {
  return (
    <section id="architecture" className="scroll-mt-32 px-6 py-10 md:py-12">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <FreshBasketSectionLabel
            label="01 // architecture"
            title="AWS deployment architecture."
            subtitle="A high-level view of how browser traffic reached the application and database layer."
          />
        </Reveal>

        <Reveal delay={0.06}>
          <div className="open-panel mt-8">
            <div className="grid gap-2 lg:grid-cols-5 lg:items-stretch lg:gap-3">
              {freshBasketArchitectureFlow.map((node, index) => (
                <div key={node} className="flex min-w-0 flex-col items-stretch gap-2 lg:flex-row lg:gap-3">
                  <article className="flex min-h-20 flex-1 items-center justify-between gap-4 rounded-[20px] border border-[#d4e3ff]/64 bg-[#f8fbff]/76 p-4 lg:min-h-32 lg:flex-col lg:items-start lg:rounded-[22px]">
                    <p className="font-mono text-[0.58rem] font-bold uppercase tracking-[0.14em] text-[#2d5f9d]/70">
                      layer.0{index + 1}
                    </p>
                    <h3 className="text-right text-base font-black leading-6 text-slate-950 lg:mt-4 lg:text-left">
                      {node}
                    </h3>
                  </article>
                  {index < freshBasketArchitectureFlow.length - 1 ? (
                    <span className="flex justify-center text-[#2d5f9d]/64 lg:hidden">
                      <ArrowDown size={18} strokeWidth={2.4} aria-hidden />
                    </span>
                  ) : null}
                  {index < freshBasketArchitectureFlow.length - 1 ? (
                    <span className="hidden items-center text-[#2d5f9d]/64 lg:flex">
                      <ArrowRight size={20} strokeWidth={2.4} aria-hidden />
                    </span>
                  ) : null}
                </div>
              ))}
            </div>

            <p className="mt-5 rounded-[18px] border border-[#d4e3ff]/58 bg-white/72 p-4 text-sm font-semibold leading-6 text-slate-700">
              This architecture shows how public web traffic reached the app layer while database access remained restricted behind security group rules.
            </p>

            <div className="mt-5 rounded-[24px] border border-[#d4e3ff]/58 bg-white/64 p-4">
              <p className="font-mono text-[0.58rem] font-bold uppercase tracking-[0.14em] text-[#2d5f9d]/70">
                Supporting AWS configuration
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {freshBasketSupportingServices.map((service) => (
                  <span
                    key={service}
                    className="rounded-full border border-[#d4e3ff]/72 bg-[#f8fbff]/72 px-3 py-1.5 font-mono text-[0.62rem] font-bold tracking-[0.04em] text-slate-600"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
