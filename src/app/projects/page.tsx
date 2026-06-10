import AnimatedBackground from "@/components/ui/AnimatedBackground";
import {
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
      <ProjectsCTA />
    </div>
  );
}
