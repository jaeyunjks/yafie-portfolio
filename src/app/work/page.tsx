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
    <div className="relative isolate">
      <AnimatedBackground />
      <WorkHero />
      <div id="experience-map" className="scroll-mt-32">
        <ExperienceMap />
      </div>
      <SoftwareExperience />
      <VolunteerExperience />
      <OtherSignals />
      <SupportingExperience />
      <CollaborationSignal />
      <WorkCTA />
    </div>
  );
}
