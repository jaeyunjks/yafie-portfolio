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
      <AboutStory />
      <AboutTechStack />
      <AboutCapabilities />
      <AboutWorkingStyle />
      <AboutPersonality />
      <AboutCTA />
    </div>
  );
}
