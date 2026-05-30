import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import SectionHeader from "@/components/ui/SectionHeader";
import { experience } from "@/data/experience";

export default function WorkPage() {
  return (
    <div>
      <section className="section-wrap">
        <SectionHeader title="Experience" subtitle="A structured timeline of real contribution." />
      </section>
      <section className="grid gap-5">
        {experience.map((item) => (
          <Card key={item.id}>
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h2 className="text-xl font-semibold text-slate-900">{item.role}</h2>
                <p className="text-sm text-slate-600">{item.company} • {item.location}</p>
              </div>
              <Badge>{item.category}</Badge>
            </div>
            <p className="mt-2 text-sm text-slate-500">{item.duration}</p>
            <p className="mt-3 text-sm text-slate-700">{item.description}</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
              {item.responsibilities.map((resp) => (
                <li key={resp}>{resp}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm font-medium text-blue-700">Achievements: {item.achievements}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {item.skills.map((skill) => (
                <Badge key={skill} tone="muted">{skill}</Badge>
              ))}
            </div>
          </Card>
        ))}
      </section>
    </div>
  );
}
