"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import { freshBasketDeploymentSteps } from "@/data/caseStudies/freshbasket";
import { FreshBasketSectionLabel } from "./FreshBasketVisuals";

export default function FreshBasketDeploymentFlow() {
  const [activeStep, setActiveStep] = useState(0);
  const selected = freshBasketDeploymentSteps[activeStep];

  return (
    <section id="deployment-flow" className="scroll-mt-32 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <FreshBasketSectionLabel
            label="02 // deployment.flow"
            title="How deployment worked."
            subtitle="A compact view of the deployment path from app preparation to evidence capture."
          />
        </Reveal>

        <Reveal delay={0.06}>
          <div className="mt-8 rounded-[30px] border border-white/75 bg-white/62 p-5 shadow-[0_24px_76px_rgba(45,95,157,0.1)] backdrop-blur-2xl">
            <div
              className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4"
              role="group"
              aria-label="FreshBasket deployment flow steps"
            >
              {freshBasketDeploymentSteps.map((step, index) => {
                const isActive = index === activeStep;

                return (
                  <button
                    key={step.title}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveStep(index)}
                    className={`flex items-center gap-3 rounded-[18px] border p-3 text-left transition-[border-color,background-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8dbbff]/70 ${
                      isActive
                        ? "border-[#8dbbff]/70 bg-[#f8fbff] shadow-[0_14px_34px_rgba(45,95,157,0.1)]"
                        : "border-[#d4e3ff]/58 bg-white/62 hover:bg-white"
                    }`}
                  >
                    <span
                      className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl font-mono text-[0.58rem] font-black ${
                        isActive
                          ? "bg-[#2d5f9d] text-white"
                          : "bg-[#eef5ff] text-[#2d5f9d]"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-extrabold text-slate-800">
                      {step.title}
                    </span>
                  </button>
                );
              })}
            </div>

            <article className="mt-5 rounded-[24px] border border-[#d4e3ff]/58 bg-[#f8fbff]/72 p-5">
              <p className="font-mono text-[0.58rem] font-bold uppercase tracking-[0.14em] text-[#2d5f9d]/70">
                selected.step
              </p>
              <h3 className="mt-3 text-2xl font-black tracking-tight text-slate-950">
                {selected.title}
              </h3>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
                {selected.body}
              </p>
            </article>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
