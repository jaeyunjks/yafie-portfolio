import AnimatedBackground from "@/components/ui/AnimatedBackground";
import FloatingCode from "@/components/ui/FloatingCode";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { projects } from "@/data/projects";
import Link from "next/link";

export default function HomePage() {
  const featured = projects.filter((project) => project.featured).slice(0, 3);
  return (
    <div className="relative overflow-hidden">
      <AnimatedBackground />
      <section className="section-wrap relative">
        <FloatingCode />
        <p className="mb-4 inline-flex rounded-full border border-white/60 bg-white/80 px-4 py-1 text-sm font-medium text-slate-600">
          Frontend Engineer • Product Builder
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 md:text-6xl">
          Building polished digital experiences for modern teams.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-600">
          I craft recruiter-friendly and user-first interfaces with strong
          engineering foundations, clean interaction design, and thoughtful
          collaboration.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/contact"><Button>Let&apos;s Collaborate</Button></Link>
          <Link href="/projects"><Button variant="secondary">View Projects</Button></Link>
        </div>
      </section>
      <section className="section-wrap">
        <SectionHeader
          title="Featured Projects"
          subtitle="A quick preview of recent product and frontend work."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {featured.map((project) => (
            <Card key={project.id} className="h-full">
              <h3 className="text-lg font-semibold text-slate-900">{project.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{project.summary}</p>
              <p className="mt-4 text-sm font-medium text-blue-700">{project.category}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
