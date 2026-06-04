import Reveal from "@/components/ui/Reveal";
import { sdsFeatures } from "@/data/caseStudies/sdsModernisation";
import SDSImagePlaceholder from "./SDSImagePlaceholder";

export default function SDSFeatureShowcase() {
  return (
    <section id="feature-showcase" className="scroll-mt-32 px-6 py-14">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#2d5f9d]/72">
              05 // feature.showcase
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
              Key workflow areas.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              A visual overview of the main interface areas represented in the
              system.
            </p>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {sdsFeatures.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <Reveal key={feature.title} delay={index * 0.035}>
                <article className="group h-full overflow-hidden rounded-[24px] border border-white/75 bg-white/64 p-4 shadow-[0_18px_58px_rgba(45,95,157,0.1)] backdrop-blur-xl transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:bg-white/84 hover:shadow-[0_26px_78px_rgba(45,95,157,0.14)]">
                  <SDSImagePlaceholder
                    title={feature.title}
                    imageSrc={feature.imageSrc}
                    variant={feature.variant}
                  />
                  <div className="mt-5 p-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-2 rounded-full border border-[#d4e3ff]/72 bg-[#f8fbff]/82 px-3 py-1.5 font-mono text-[0.56rem] font-bold uppercase tracking-[0.1em] text-[#2d5f9d]/72">
                        <Icon size={14} strokeWidth={2.3} aria-hidden />
                        {feature.status}
                      </span>
                      <span className="rounded-full border border-white/75 bg-white/70 px-3 py-1.5 font-mono text-[0.56rem] font-bold uppercase tracking-[0.1em] text-slate-500">
                        workflow area
                      </span>
                    </div>
                    <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-slate-950">
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {feature.body}
                    </p>
                    <div className="mt-4 rounded-[16px] border border-[#d4e3ff]/58 bg-[#f8fbff]/72 p-4">
                      <p className="font-mono text-[0.56rem] font-bold uppercase tracking-[0.14em] text-[#2d5f9d]/70">
                        workflow.value
                      </p>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        {feature.value}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
