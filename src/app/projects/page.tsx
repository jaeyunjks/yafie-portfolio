import AnimatedBackground from "@/components/ui/AnimatedBackground";
import {
  CaseStudyReady,
  EngineeringDepth,
  ProjectsCTA,
  ProjectsExplorer,
  ProjectsHero,
} from "@/components/sections/projects";

export default function ProjectsPage() {
  return (
    <div className="relative">
      <AnimatedBackground />
      <ProjectsHero />
      <ProjectsExplorer />
      <EngineeringDepth />
      <CaseStudyReady />
      <ProjectsCTA />
    </div>
  );
}
