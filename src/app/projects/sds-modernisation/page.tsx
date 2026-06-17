import AnimatedBackground from "@/components/ui/AnimatedBackground";
import {
  SDSCaseCTA,
  SDSCaseHero,
  SDSFeatureShowcase,
  SDSOverview,
  SDSOutcomeReflection,
  SDSProblem,
  SDSProjectOrigin,
  SDSRoleContribution,
  SDSTestingQuality,
  SDSWorkflow,
} from "@/components/sections/case-studies/sds";

export default function SDSModernisationCaseStudyPage() {
  return (
    <div className="relative isolate">
      <AnimatedBackground />
      <SDSCaseHero />
      <SDSProjectOrigin />
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
