import { pageMetadata } from "@/data/seo";
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

export const metadata = pageMetadata("/projects/sds-modernisation");

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
