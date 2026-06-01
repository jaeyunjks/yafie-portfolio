import {
  Cloud,
  Code2,
  GitBranch,
  Layers3,
  ServerCog,
  ShieldCheck,
  Users,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const capabilities = [
  {
    title: "Software Engineering Breadth",
    eyebrow: "ENGINEERING.BREADTH",
    description:
      "Growing across interface design, application logic, testing, deployment, and collaborative product delivery.",
    Icon: GitBranch,
    featured: true,
  },
  {
    title: "Frontend Engineering",
    eyebrow: "FRONTEND.ENGINEERING",
    description:
      "Building responsive, polished, and user-friendly interfaces with strong attention to clarity and interaction.",
    Icon: Code2,
  },
  {
    title: "Backend Logic",
    eyebrow: "BACKEND.LOGIC",
    description:
      "Developing application logic, data handling, and system behaviour that support real workflows.",
    Icon: ServerCog,
  },
  {
    title: "Testing & Quality",
    eyebrow: "TESTING.QUALITY",
    description:
      "Applying testing, debugging, and refinement to improve reliability and confidence in the software.",
    Icon: ShieldCheck,
  },
  {
    title: "Cloud & Deployment",
    eyebrow: "CLOUD.DEPLOYMENT",
    description:
      "Learning how applications are deployed, connected, configured, and maintained in live environments.",
    Icon: Cloud,
  },
  {
    title: "Product Thinking",
    eyebrow: "PRODUCT.THINKING",
    description:
      "Thinking beyond implementation by considering user flow, practical outcomes, and feature purpose.",
    Icon: Layers3,
  },
  {
    title: "Team Collaboration",
    eyebrow: "TEAM.COLLABORATION",
    description:
      "Working through shared projects, communication, documentation, and iterative teamwork.",
    Icon: Users,
  },
];

const proofPoints = [
  "5+ projects built",
  "web, mobile, and cloud exposure",
  "testing and deployment awareness",
  "product-minded development",
  "collaborative project experience",
];

const metadata = [
  ["current_focus", "software_engineering"],
  ["workflow", "build · test · iterate · improve"],
  ["environment", "web · mobile · cloud"],
];

export default function ProfileStatus() {
  const [featured, ...supporting] = capabilities;

  return (
    <section className="pb-20 lg:pb-24">
      <Reveal>
        <div className="grid gap-6 border-l border-[#8dbbff]/45 pl-4 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,0.38fr)] lg:items-end">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#2d5f9d]/75">
              02 // proof.snapshot
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
              Engineering Snapshot.
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
              A concise look at the technical areas, delivery habits, and
              software engineering capabilities I&apos;m continuing to build.
            </p>
          </div>

          <div className="hidden rounded-2xl border border-[#8dbbff]/20 bg-white/58 p-4 font-mono text-[0.72rem] leading-6 text-slate-600 shadow-[0_16px_48px_rgba(45,95,157,0.08)] backdrop-blur-xl lg:block">
            {metadata.map(([key, value]) => (
              <p key={key}>
                <span className="font-bold text-[#2d5f9d]">{key}:</span> {value}
              </p>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="relative mt-10 overflow-hidden rounded-[26px] border border-white/70 bg-white/54 p-5 shadow-[0_28px_85px_rgba(45,95,157,0.1)] backdrop-blur-xl md:p-6 lg:p-7">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(141,187,255,0.18),transparent_30%),radial-gradient(circle_at_84%_18%,rgba(198,183,255,0.14),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.72),rgba(247,250,255,0.42))]" />
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />

          <div className="relative z-10 grid gap-4 lg:grid-cols-6 lg:auto-rows-fr">
            <article className="group relative overflow-hidden rounded-[22px] border border-white/75 bg-gradient-to-br from-white/90 via-[#f8fbff]/82 to-[#f1edff]/68 p-6 shadow-[0_20px_65px_rgba(45,95,157,0.12)] backdrop-blur-xl transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-[#8dbbff]/50 hover:shadow-[0_28px_80px_rgba(45,95,157,0.16)] lg:col-span-3 lg:row-span-2 lg:p-7">
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#8dbbff]/16 blur-3xl" />
              <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
              <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-[#8dbbff]/24 bg-white/78 text-[#2d5f9d] shadow-[0_12px_32px_rgba(45,95,157,0.12)]">
                <featured.Icon size={22} strokeWidth={2.2} />
              </span>
              <p className="relative mt-6 font-mono text-[0.72rem] font-bold uppercase tracking-[0.16em] text-[#2d5f9d]/80">
                {featured.eyebrow}
              </p>
              <h3 className="relative mt-3 max-w-md text-2xl font-extrabold tracking-tight text-slate-950 md:text-3xl">
                {featured.title}
              </h3>
              <p className="relative mt-4 max-w-xl text-sm leading-7 text-slate-700 md:text-base md:leading-8">
                {featured.description}
              </p>
              <div className="relative mt-7 grid gap-2 border-t border-[#8dbbff]/16 pt-5 font-mono text-[0.72rem] leading-6 text-slate-600 sm:grid-cols-3">
                {metadata.map(([key, value]) => (
                  <p key={key}>
                    <span className="font-bold text-[#2d5f9d]">{key}:</span>{" "}
                    {value}
                  </p>
                ))}
              </div>
            </article>

            {supporting.map((card, index) => (
              <article
                key={card.title}
                tabIndex={0}
                className={`group relative overflow-hidden rounded-[22px] border border-white/72 bg-white/78 p-5 shadow-[0_16px_50px_rgba(45,95,157,0.09)] backdrop-blur-xl outline-none transition-[border-color,box-shadow,background-color,transform] duration-300 hover:-translate-y-1 hover:border-[#8dbbff]/50 hover:bg-white/92 hover:shadow-[0_24px_68px_rgba(45,95,157,0.14)] focus-visible:-translate-y-1 focus-visible:border-[#8dbbff]/65 focus-visible:bg-white/92 focus-visible:shadow-[0_24px_68px_rgba(45,95,157,0.14)] lg:col-span-3 xl:col-span-1 ${index < 2 ? "xl:col-span-1" : "xl:col-span-2"}`}
              >
                <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
                <div className="flex items-start justify-between gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-[#8dbbff]/22 bg-[#eef5ff]/78 text-[#2d5f9d] shadow-[0_10px_26px_rgba(45,95,157,0.09)]">
                    <card.Icon size={18} strokeWidth={2.2} />
                  </span>
                  <span className="font-mono text-[0.68rem] font-bold text-[#2d5f9d]/60">
                    [{String(index + 1).padStart(2, "0")}]
                  </span>
                </div>
                <p className="mt-5 font-mono text-[0.66rem] font-bold uppercase tracking-[0.14em] text-[#2d5f9d]/72">
                  {card.eyebrow}
                </p>
                <h4 className="mt-2 text-lg font-extrabold tracking-tight text-slate-950">
                  {card.title}
                </h4>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {card.description}
                </p>
              </article>
            ))}
          </div>

          <div className="relative z-10 mt-4 flex flex-wrap gap-2 rounded-2xl border border-white/72 bg-[#f5f9ff]/76 p-3 shadow-[0_14px_40px_rgba(45,95,157,0.07)] backdrop-blur-xl">
            {proofPoints.map((point) => (
              <span
                key={point}
                className="rounded-xl border border-white/70 bg-white/68 px-3 py-2 font-mono text-[0.7rem] font-semibold leading-5 text-slate-600"
              >
                {point}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
