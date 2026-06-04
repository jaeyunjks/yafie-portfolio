import AnimatedBackground from "@/components/ui/AnimatedBackground";
import {
  SDSCaseCTA,
  SDSCaseHero,
  SDSFeatureShowcase,
  SDSOverview,
  SDSOutcomeReflection,
  SDSProblem,
  SDSRoleContribution,
  SDSTestingQuality,
  SDSWorkflow,
} from "@/components/sections/case-studies/sds";

export default function SDSModernisationCaseStudyPage() {
  return (
    <div className="relative">
      <AnimatedBackground />
      <SDSCaseHero />
      <SDSOverview />
      <SDSProblem />
      <SDSRoleContribution />
      <SDSWorkflow />
      <SDSFeatureShowcase />
      <SDSTestingQuality />
      <SDSOutcomeReflection />
      <SDSCaseCTA />
    </div>
  );
}
