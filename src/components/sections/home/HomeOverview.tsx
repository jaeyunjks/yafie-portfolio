import { Code2, FolderOpen, GraduationCap, Infinity } from "lucide-react";
import StatCard from "@/components/ui/StatCard";

const stats = [
  {
    value: "5+",
    label: "Projects",
    description: "Real-world applications built and deployed",
    icon: FolderOpen,
    tone: "blue" as const,
  },
  {
    value: "3+",
    label: "Technologies",
    description: "Modern frameworks and development tools",
    icon: Code2,
    tone: "lavender" as const,
  },
  {
    value: "2+",
    label: "Years Learning",
    description: "Consistent growth and skill refinement",
    icon: GraduationCap,
    tone: "warm" as const,
  },
  {
    value: "∞",
    label: "Curiosity",
    description: "Always exploring new digital possibilities",
    icon: Infinity,
    tone: "blue" as const,
  },
];

export default function HomeOverview() {
  return (
    <section className="grid gap-6 pb-24 lg:grid-cols-12 lg:pb-32">
      <div className="grid gap-4 sm:grid-cols-2 lg:col-span-5">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      <div className="lg:col-span-7">
        <div className="h-full rounded-[32px] border border-white/75 bg-gradient-to-br from-white/86 via-white/70 to-[#eef4ff]/78 p-8 shadow-2xl shadow-blue-900/10 backdrop-blur-xl md:p-10">
          <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#2d5f9d]">
            Portfolio Overview
          </p>
          <h2 className="mt-4 max-w-xl text-3xl font-extrabold leading-tight text-slate-950 md:text-4xl">
            Calm interfaces, clean engineering, and product-minded execution.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
            A focused snapshot of practical projects, modern frontend craft,
            and steady growth across web, mobile, and AI-enabled products.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {["Frontend craft", "Mobile thinking", "AI workflows"].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200/75 bg-white/74 p-4 text-sm font-extrabold text-slate-700"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
