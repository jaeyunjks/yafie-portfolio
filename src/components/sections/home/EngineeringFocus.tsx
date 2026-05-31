import Reveal from "@/components/ui/Reveal";

const focusItems = [
  {
    index: "01",
    label: "software.engineering",
    title: "Software Engineering",
    description:
      "Building systems, solving problems, and continuously improving through real projects.",
  },
  {
    index: "02",
    label: "hospitality.leadership",
    title: "Hospitality Leadership",
    description:
      "Learning accountability, communication, quality standards, and working under pressure.",
  },
  {
    index: "03",
    label: "team.collaboration",
    title: "Team Collaboration",
    description:
      "Working with people from different backgrounds, disciplines, and perspectives.",
  },
  {
    index: "04",
    label: "continuous.learning",
    title: "Continuous Learning",
    description:
      "Growing through feedback, iteration, experimentation, and curiosity.",
  },
];

export default function EngineeringFocus() {
  return (
    <section className="pb-20 lg:pb-24">
      <Reveal>
        <div className="mb-8 border-l border-[#8dbbff]/45 pl-4">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#2d5f9d]/75">
            03 // beyond.code
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
            What shaped the way I work.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            The experiences that influence how I approach collaboration,
            responsibility, and problem solving.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-4 md:grid-cols-2">
        {focusItems.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.07}>
            <article className="group rounded-3xl border border-white/75 bg-white/66 p-6 shadow-[0_18px_50px_rgba(45,95,157,0.08)] backdrop-blur-xl transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(45,95,157,0.13)] md:p-7">
              <div className="mb-6 flex items-center justify-between gap-4">
                <span className="rounded-full border border-[#d4e3ff]/90 bg-[#eef4ff]/70 px-3 py-1 font-mono text-xs font-bold text-[#2d5f9d]">
                  [{item.index}]
                </span>
                <span className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.18em] text-slate-400">
                  // {item.label}
                </span>
              </div>
              <h3 className="text-xl font-extrabold tracking-tight text-slate-950">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {item.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
