import Reveal from "@/components/ui/Reveal";
import { focusPopLinks } from "@/data/caseStudies/focuspop";
import { FocusPopImage, FocusPopSectionLabel } from "./FocusPopVisuals";

export default function FocusPopFeedback() {
  return (
    <section id="feedback-signal" className="scroll-mt-32 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <FocusPopSectionLabel
            label="05 // feedback.signal"
            title="What others said."
          />
        </Reveal>

        <Reveal delay={0.06}>
          <div className="open-panel mt-8">
            <FocusPopImage
              src={focusPopLinks.feedbackImage}
              alt="Peer feedback screenshot for FocusPop"
              label="FocusPop feedback"
              variant="feedback"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
