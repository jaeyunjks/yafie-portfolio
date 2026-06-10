import Reveal from "@/components/ui/Reveal";
import { freshBasketEvidenceItems } from "@/data/caseStudies/freshbasket";
import {
  FreshBasketImageFrame,
  FreshBasketSectionLabel,
} from "./FreshBasketVisuals";

export default function FreshBasketEvidenceGallery() {
  return (
    <section id="evidence-gallery" className="scroll-mt-32 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <FreshBasketSectionLabel
            label="06 // evidence.gallery"
            title="Deployment evidence."
            subtitle="Screenshots and diagrams document the AWS deployment after the Learner Lab environment expired."
          />
        </Reveal>

        <Reveal delay={0.05}>
          <p className="mt-6 rounded-[22px] border border-[#d4e3ff]/58 bg-[#f8fbff]/66 p-4 text-sm font-semibold leading-7 text-slate-700">
            Some identifiers, endpoints, account details, emails, or
            credentials are cropped or blurred for security and privacy.
          </p>
        </Reveal>

        <div className="mt-8 grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3">
          {freshBasketEvidenceItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.03}>
              <article className="flex h-full flex-col rounded-[26px] border border-white/75 bg-white/66 p-4 shadow-[0_20px_64px_rgba(45,95,157,0.09)] backdrop-blur-xl transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_76px_rgba(45,95,157,0.12)]">
                <FreshBasketImageFrame
                  src={item.image}
                  alt={`${item.title} FreshBasket AWS deployment evidence`}
                  label={item.title}
                  aspectRatio={item.aspectRatio}
                  objectFit={item.objectFit}
                  className="shadow-none"
                />
                <div className="flex flex-1 flex-col p-2 pt-4">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h3 className="text-lg font-extrabold text-slate-950">
                      {item.title}
                    </h3>
                    <span className="rounded-full border border-[#d4e3ff]/72 bg-[#f8fbff]/72 px-2.5 py-1 font-mono text-[0.52rem] font-bold uppercase tracking-[0.1em] text-[#2d5f9d]/72">
                      {item.category}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.caption}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
