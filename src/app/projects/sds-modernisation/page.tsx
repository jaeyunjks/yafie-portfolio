import AnimatedBackground from "@/components/ui/AnimatedBackground";
import {
  SDSCaseCTA,
  SDSCaseHero,
  SDSCaseSnapshot,
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
      <SDSCaseSnapshot />
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
