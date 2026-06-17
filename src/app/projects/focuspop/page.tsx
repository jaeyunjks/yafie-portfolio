import AnimatedBackground from "@/components/ui/AnimatedBackground";
import {
  FocusPopCaseHero,
  FocusPopFeedback,
  FocusPopGameplayFlow,
  FocusPopModes,
  FocusPopOverview,
  FocusPopReflection,
  FocusPopTechnicalBuild,
  FocusPopTestingQuality,
} from "@/components/sections/case-studies/focuspop";

export default function FocusPopCaseStudyPage() {
  return (
    <div className="relative isolate">
      <AnimatedBackground />
      <FocusPopCaseHero />
      <FocusPopOverview />
      <FocusPopGameplayFlow />
      <FocusPopModes />
      <FocusPopTechnicalBuild />
      <FocusPopTestingQuality />
      <FocusPopFeedback />
      <FocusPopReflection />
    </div>
  );
}
