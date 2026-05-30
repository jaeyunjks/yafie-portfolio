import Card from "@/components/ui/Card";
import SectionHeader from "@/components/ui/SectionHeader";
import { skills } from "@/data/skills";
import { techStack } from "@/data/techStack";

export default function AboutPage() {
  return (
    <div>
      <section className="section-wrap">
        <SectionHeader title="About Me" subtitle="A profile built for teams and employers." />
        <Card>
          <p className="text-slate-700">
            I&apos;m a frontend engineer focused on premium UI delivery, scalable
            component systems, and collaborative product execution.
          </p>
        </Card>
      </section>
      <section className="section-wrap">
        <SectionHeader title="Tech Stack" subtitle="Current strengths and confidence level." />
        <div className="space-y-4">
          {techStack.map((item) => (
            <div key={item.name}>
              <div className="mb-2 flex justify-between text-sm">
                <span className="flex items-center gap-2 font-medium text-slate-800">
                  <item.icon className="text-slate-500" />
                  {item.name}
                </span>
                <span className="text-slate-500">{item.level}%</span>
              </div>
              <div className="h-2 rounded-full bg-slate-200">
                <div className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-400" style={{ width: `${item.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="section-wrap grid gap-4 md:grid-cols-2">
        {skills.map((skill) => (
          <Card key={skill.title}>
            <h3 className="font-semibold text-slate-900">{skill.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{skill.description}</p>
          </Card>
        ))}
      </section>
      <section className="section-wrap">
        <SectionHeader title="What I&apos;m Exploring" subtitle="Areas I am actively deepening." />
        <Card>
          <p className="text-slate-700">Design systems governance, AI-assisted product UX, and performance-first motion design.</p>
        </Card>
      </section>
    </div>
  );
}
