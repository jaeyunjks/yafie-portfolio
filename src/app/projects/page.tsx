import AnimatedBackground from "@/components/ui/AnimatedBackground";
import {
  EngineeringDepth,
  OtherProjects,
  ProjectsCTA,
  ProjectsExplorer,
  ProjectsHero,
} from "@/components/sections/projects";

export default function ProjectsPage() {
  return (
    <div className="relative isolate">
      <AnimatedBackground />
      <ProjectsHero />
      <div id="project-map" className="scroll-mt-32">
        <ProjectsExplorer />
      </div>
      <OtherProjects />
      <div id="engineering-depth" className="scroll-mt-32">
        <EngineeringDepth />
      </div>
      <div id="projects-next" className="scroll-mt-32">
        <ProjectsCTA />
      </div>
    </div>
  );
}
