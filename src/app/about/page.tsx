import AnimatedBackground from "@/components/ui/AnimatedBackground";
import {
  AboutCapabilities,
  AboutCTA,
  AboutHero,
  AboutPersonality,
  AboutStory,
  AboutTechStack,
  AboutWorkingStyle,
} from "@/components/sections/about";

export default function AboutPage() {
  return (
    <div className="relative">
      <AnimatedBackground />
      <AboutHero />
      <div id="about-story" className="scroll-mt-32">
        <AboutStory />
      </div>
      <div id="about-tech-stack" className="scroll-mt-32">
        <AboutTechStack />
      </div>
      <div id="about-capability-map" className="scroll-mt-32">
        <AboutCapabilities />
      </div>
      <div id="about-working-style" className="scroll-mt-32">
        <AboutWorkingStyle />
      </div>
      <div id="about-beyond-code" className="scroll-mt-32">
        <AboutPersonality />
      </div>
      <AboutCTA />
    </div>
  );
}
