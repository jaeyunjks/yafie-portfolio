import AnimatedBackground from "@/components/ui/AnimatedBackground";
import {
  LumoraAppFlow,
  LumoraCaseHero,
  LumoraChallenge,
  LumoraDesignProcess,
  LumoraOutcomeReflection,
  LumoraPersona,
  LumoraProblemAudience,
  LumoraProjectSummary,
  LumoraTechStack,
} from "@/components/sections/case-studies/lumora";

export default function LumoraCaseStudyPage() {
  return (
    <div className="relative isolate">
      <AnimatedBackground />
      <LumoraCaseHero />
      <LumoraProjectSummary />
      <LumoraProblemAudience />
      <LumoraPersona />
      <LumoraDesignProcess />
      <LumoraAppFlow />
      <LumoraTechStack />
      <LumoraChallenge />
      <LumoraOutcomeReflection />
    </div>
  );
}
