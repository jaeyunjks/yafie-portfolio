import Reveal from "@/components/ui/Reveal";

const stats = [
  {
    value: "2+",
    label: "Learning Journey",
    eyebrow: "Years Learning",
    description:
      "Building technical foundations through university, projects, and hands-on experimentation.",
  },
  {
    value: "5+",
    label: "Projects Built",
    eyebrow: "Projects",
    description:
      "Practical applications across web, cloud, mobile, and AI-assisted workflows.",
  },
  {
    value: "Sydney-Based",
    label: "Location",
    eyebrow: "Australia",
    description:
      "Studying, building, and growing within Australia’s technology ecosystem.",
  },
  {
    value: "Frontend / Mobile / AI",
    label: "Focus Areas",
    eyebrow: "Direction",
    description:
      "Exploring product-minded engineering across interfaces, apps, and intelligent tools.",
  },
];

const metadata = [
  ["currently_building", "portfolio_v2 · case_studies · AI_study_tools"],
  ["focus", "frontend_engineering · mobile_development · product_thinking"],
  ["learning_mode", "build · test · refine · repeat"],
];

export default function ProfileStatus() {
  return (
    <section className="pb-20 lg:pb-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] border border-white/75 bg-white/62 p-7 shadow-[0_24px_80px_rgba(45,95,157,0.11)] backdrop-blur-xl md:p-9">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#c6b7ff]/20 blur-3xl" />
          <div className="absolute -bottom-24 left-8 h-72 w-72 rounded-full bg-[#8dbbff]/18 blur-3xl" />

          <div className="relative z-10 grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#2d5f9d]/75">
                02 // proof.snapshot
              </p>
              <h2 className="mt-4 max-w-xl text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">
                A quick snapshot.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 md:text-base md:leading-8">
                A concise view of my current technical growth, practical
                projects, and product-focused direction.
              </p>
            </div>

            <div className="grid gap-4">
              <div className="grid overflow-hidden rounded-3xl border border-white/70 bg-white/58 shadow-[0_18px_55px_rgba(45,95,157,0.09)] backdrop-blur-xl sm:grid-cols-2 xl:grid-cols-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="border-b border-white/55 px-4 py-5 last:border-b-0 sm:odd:border-r xl:border-b-0 xl:border-r xl:last:border-r-0"
                  >
                    <p className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.16em] text-[#2d5f9d]/70">
                      {stat.eyebrow}
                    </p>
                    <p className="mt-2 text-xl font-extrabold tracking-tight text-slate-950 md:text-2xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs font-extrabold uppercase tracking-[0.14em] text-slate-500">
                      {stat.label}
                    </p>
                    <p className="mt-3 text-xs leading-5 text-slate-500">
                      {stat.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="rounded-3xl border border-white/70 bg-slate-950/[0.035] p-4">
                <div className="grid gap-2">
                  {metadata.map(([key, value]) => (
                    <p
                      key={key}
                      className="font-mono text-[0.72rem] leading-6 tracking-[0.08em] text-slate-500"
                    >
                      <span className="font-bold text-[#2d5f9d]/80">{key}:</span>{" "}
                      {value}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
