import AnimatedBackground from "@/components/ui/AnimatedBackground";
import {
  LumoraAppFlow,
  LumoraCaseHero,
  LumoraChallenge,
  LumoraDesignProcess,
  LumoraOutcomeReflection,
  LumoraPersona,
  LumoraProblemAudience,
  LumoraProductSnapshot,
  LumoraProjectSummary,
  LumoraTechStack,
} from "@/components/sections/case-studies/lumora";

export default function LumoraCaseStudyPage() {
  return (
    <div className="relative isolate">
      <AnimatedBackground />
      <LumoraCaseHero />
      <LumoraProductSnapshot />
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
