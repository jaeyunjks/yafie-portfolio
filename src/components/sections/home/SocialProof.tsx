import Reveal from "@/components/ui/Reveal";

const placeholders = [
  {
    title: "Tutor Feedback",
    content: "Placeholder for future screenshot or comment.",
  },
  {
    title: "Team Collaboration",
    content:
      "Placeholder for future peer review, teamwork feedback, or project reflection.",
  },
  {
    title: "Professional Recognition",
    content: "Placeholder for workplace feedback, achievement, or recognition.",
  },
];

export default function SocialProof() {
  return (
    <section className="pb-20 lg:pb-24">
      <Reveal>
        <div className="mb-8 border-l border-[#8dbbff]/45 pl-4">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#2d5f9d]/75">
            06 // social.proof
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
            What others say.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            Feedback, recognition, and reflections from people I have worked or
            studied with.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-5 lg:grid-cols-3">
        {placeholders.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.08}>
            <article className="group rounded-3xl border border-white/75 bg-white/66 p-5 shadow-[0_18px_55px_rgba(45,95,157,0.09)] backdrop-blur-xl transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(45,95,157,0.13)]">
              <div className="mb-5 rounded-[1.4rem] border border-white/75 bg-gradient-to-br from-[#f9f9ff]/80 via-white/58 to-[#eef4ff]/74 p-4">
                <div className="mb-4 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full border border-white/80 bg-gradient-to-br from-[#d4e3ff] to-[#e7deff]" />
                  <div className="grid gap-1.5">
                    <span className="h-2 w-24 rounded-full bg-slate-300/55" />
                    <span className="h-2 w-16 rounded-full bg-[#8dbbff]/45" />
                  </div>
                </div>
                <div className="grid gap-2">
                  <span className="h-2 w-full rounded-full bg-slate-300/45" />
                  <span className="h-2 w-10/12 rounded-full bg-[#c6b7ff]/45" />
                  <span className="h-2 w-8/12 rounded-full bg-[#8dbbff]/38" />
                </div>
              </div>
              <p className="font-mono text-xs font-bold text-[#2d5f9d]">
                [{String(index + 1).padStart(2, "0")}]
              </p>
              <h3 className="mt-4 text-xl font-extrabold tracking-tight text-slate-950">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.content}</p>
              <p className="mt-5 font-mono text-[0.68rem] font-bold uppercase tracking-[0.16em] text-slate-400">
                Screenshot / name placeholder
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
