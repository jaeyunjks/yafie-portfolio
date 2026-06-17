import AnimatedBackground from "@/components/ui/AnimatedBackground";
import {
  FreshBasketArchitecture,
  FreshBasketCaseHero,
  FreshBasketContext,
  FreshBasketDatabaseIntegration,
  FreshBasketDeploymentFlow,
  FreshBasketEvidenceGallery,
  FreshBasketReflection,
  FreshBasketScalingOperations,
  FreshBasketSecurityNetworking,
  FreshBasketTroubleshooting,
} from "@/components/sections/case-studies/freshbasket";

export default function FreshBasketAwsCaseStudyPage() {
  return (
    <div className="relative isolate">
      <AnimatedBackground />
      <FreshBasketCaseHero />
      <FreshBasketContext />
      <FreshBasketArchitecture />
      <FreshBasketDeploymentFlow />
      <FreshBasketDatabaseIntegration />
      <FreshBasketSecurityNetworking />
      <FreshBasketScalingOperations />
      <FreshBasketEvidenceGallery />
      <FreshBasketTroubleshooting />
      <FreshBasketReflection />
    </div>
  );
}
