import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionHeader from "@/components/ui/SectionHeader";
import { projects } from "@/data/projects";

const filters = ["All", "Frontend", "Full-Stack", "Design System"];

export default function ProjectsPage() {
  return (
    <div>
      <section className="section-wrap">
        <SectionHeader title="Projects" subtitle="Case-study style highlights and shipped outcomes." />
        <div className="mt-4 flex flex-wrap gap-2">
          {filters.map((filter) => (
            <Badge key={filter} tone={filter === "All" ? "default" : "muted"}>
              {filter}
            </Badge>
          ))}
        </div>
      </section>
      <section className="grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => (
          <Card key={project.id} className={index === 0 ? "md:col-span-2" : ""}>
            <p className="text-sm font-medium text-blue-700">{project.category}</p>
            <h3 className="mt-2 text-xl font-semibold text-slate-900">{project.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{project.summary}</p>
            <p className="mt-4 text-sm text-slate-700">{project.caseStudy}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <Badge key={item} tone="muted">{item}</Badge>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button variant="secondary">GitHub</Button>
              <Button>Live Demo</Button>
            </div>
          </Card>
        ))}
      </section>
    </div>
  );
}
