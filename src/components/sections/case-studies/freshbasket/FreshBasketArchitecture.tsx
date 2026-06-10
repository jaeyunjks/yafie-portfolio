import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import {
  freshBasketArchitectureFlow,
  freshBasketSupportingServices,
} from "@/data/caseStudies/freshbasket";
import { FreshBasketSectionLabel } from "./FreshBasketVisuals";

export default function FreshBasketArchitecture() {
  return (
    <section id="architecture" className="scroll-mt-32 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <FreshBasketSectionLabel
            label="01 // architecture"
            title="AWS deployment architecture."
            subtitle="A high-level view of how browser traffic reached the application and database layer."
          />
        </Reveal>

        <Reveal delay={0.06}>
          <div className="mt-8 rounded-[30px] border border-white/75 bg-white/62 p-5 shadow-[0_24px_76px_rgba(45,95,157,0.1)] backdrop-blur-2xl">
            <div className="grid gap-3 lg:grid-cols-5 lg:items-stretch">
              {freshBasketArchitectureFlow.map((node, index) => (
                <div key={node} className="flex min-w-0 items-stretch gap-3">
                  <article className="flex min-h-32 flex-1 flex-col justify-between rounded-[22px] border border-[#d4e3ff]/64 bg-[#f8fbff]/76 p-4">
                    <p className="font-mono text-[0.58rem] font-bold uppercase tracking-[0.14em] text-[#2d5f9d]/70">
                      layer.0{index + 1}
                    </p>
                    <h3 className="mt-4 text-base font-black leading-6 text-slate-950">
                      {node}
                    </h3>
                  </article>
                  {index < freshBasketArchitectureFlow.length - 1 ? (
                    <span className="hidden items-center text-[#2d5f9d]/64 lg:flex">
                      <ArrowRight size={20} strokeWidth={2.4} aria-hidden />
                    </span>
                  ) : null}
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-[24px] border border-[#d4e3ff]/58 bg-white/64 p-4">
              <p className="font-mono text-[0.58rem] font-bold uppercase tracking-[0.14em] text-[#2d5f9d]/70">
                supporting.services
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {freshBasketSupportingServices.map((service) => (
                  <span
                    key={service}
                    className="rounded-full border border-[#d4e3ff]/72 bg-[#f8fbff]/72 px-3 py-1.5 font-mono text-[0.54rem] font-bold uppercase tracking-[0.09em] text-slate-500"
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
