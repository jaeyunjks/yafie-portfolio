import Reveal from "@/components/ui/Reveal";
import {
  freshBasketOperationsCards,
  freshBasketOperationsImages,
} from "@/data/caseStudies/freshbasket";
import {
  FreshBasketImageFrame,
  FreshBasketSectionLabel,
} from "./FreshBasketVisuals";

export default function FreshBasketScalingOperations() {
  const healthImage = freshBasketOperationsImages[0]!;
  const supportingImages = freshBasketOperationsImages.slice(1);

  return (
    <section id="scaling-operations" className="scroll-mt-32 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <FreshBasketSectionLabel
            label="05 // scaling.operations"
            title="Scaling and operations."
            subtitle="Elastic Beanstalk was configured as a load-balanced environment with Auto Scaling capacity."
          />
        </Reveal>

        <Reveal delay={0.06}>
          <div className="mt-8 rounded-[30px] border border-white/75 bg-white/62 p-5 shadow-[0_24px_76px_rgba(45,95,157,0.1)] backdrop-blur-2xl">
            <div className="flex flex-wrap gap-2">
              {freshBasketOperationsCards.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#d4e3ff]/72 bg-[#f8fbff]/72 px-3 py-1.5 font-mono text-[0.54rem] font-bold uppercase tracking-[0.09em] text-slate-500"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-5 grid gap-5 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)]">
              <FreshBasketImageFrame
                src={healthImage.image}
                alt={`${healthImage.title} AWS configuration screenshot`}
                label={healthImage.title}
                caption={healthImage.caption}
                aspectRatio="16/9"
                objectFit="contain"
              />

              <div className="grid gap-5">
                {supportingImages.map((item) => (
                  <FreshBasketImageFrame
                    key={item.title}
                    src={item.image}
                    alt={`${item.title} AWS configuration screenshot`}
                    label={item.title}
                    caption={item.caption}
                    aspectRatio="4/3"
                    objectFit="contain"
                  />
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
