import AnimatedBackground from "@/components/ui/AnimatedBackground";
import {
  CollaborationSignal,
  ExperienceMap,
  OtherSignals,
  SoftwareExperience,
  SupportingExperience,
  VolunteerExperience,
  WorkCTA,
  WorkHero,
} from "@/components/sections/work";

export default function WorkPage() {
  return (
    <div className="relative">
      <AnimatedBackground />
      <WorkHero />
      <ExperienceMap />
      <SoftwareExperience />
      <VolunteerExperience />
      <OtherSignals />
      <SupportingExperience />
      <CollaborationSignal />
      <WorkCTA />
    </div>
  );
}
