import {
  CheckCircle2,
  FileSearch,
  GitBranch,
  MessageSquareText,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const comparisonItems = [
  {
    label: "Written brief",
    value: "Full-stack AI-assisted marking system",
  },
  {
    label: "Client meeting",
    value: "Existing system already available; custom AI expectation",
  },
  {
    label: "Decision",
    value: "Declined partnership due to scope mismatch",
  },
  {
    label: "Lesson",
    value: "Validate requirements with real stakeholders early",
  },
  {
    label: "System relevance",
    value:
      "Clearer project brief visibility helps coordinators and clients stay aligned from the start.",
  },
];

const demonstratedItems = [
  {
    title: "Requirements discovery",
    body: "Understanding that a written brief must be validated through stakeholder conversations.",
    icon: FileSearch,
  },
  {
    title: "Scope judgement",
    body: "Recognising when a project direction no longer matches team capacity, constraints, or deliverables.",
    icon: GitBranch,
  },
  {
    title: "Professional communication",
    body: "Handling project changes respectfully and clearly without forcing a misaligned solution.",
    icon: MessageSquareText,
  },
  {
    title: "Product thinking",
    body: "Seeing how SDS Project Management Site could solve the broader issue of project brief visibility and workflow alignment.",
    icon: CheckCircle2,
  },
];

export default function SDSProjectOrigin() {
  return (
    <section id="project-origin" className="scroll-mt-32 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="grid gap-6 rounded-[30px] border border-white/75 bg-white/54 p-5 shadow-[0_28px_90px_rgba(45,95,157,0.12)] backdrop-blur-2xl lg:grid-cols-[minmax(0,0.58fr)_minmax(320px,0.42fr)] lg:p-7">
            <div className="rounded-[24px] border border-[#d4e3ff]/58 bg-white/68 p-6">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#2d5f9d]/72">
                00 // project.origin
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
                How the project direction changed.
              </h2>
              <p className="mt-4 text-base font-bold leading-8 text-slate-700">
                Before SDS Project Management Site, our team experienced a real
                requirements-discovery moment that shaped how we thought about
                project briefs, stakeholder alignment, and workflow visibility.
              </p>
              <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600">
                <p>
                  The project originally began with a different brief: a
                  full-stack website with AI support to help teachers mark
                  primary school English and maths assignments. The written
                  brief suggested a system that combined assessment workflows
                  with AI-assisted marking.
                </p>
                <p>
                  During the client meeting, the expected solution changed
                  significantly from the written brief. The discussion revealed
                  that a full-stack system already existed, while the main
                  interest was a custom AI capability rather than integrating
                  existing external AI tools. This created a mismatch between
                  the documented brief, stakeholder expectations, and feasible
                  team scope.
                </p>
                <p>
                  We made a responsible decision to step back instead of forcing
                  a solution under unclear requirements. That experience made
                  SDS Project Management Site especially relevant because it
                  addresses a
                  similar coordination problem: improving how project
                  information, reviews, visibility, and stakeholder workflows
                  are managed inside the subject.
                </p>
                <p>
                  It also showed why project information needs to be captured,
                  reviewed, and clarified in a shared workflow, so coordinators
                  can manage project details and communicate more clearly with
                  clients during review and setup.
                </p>
              </div>
            </div>

            <aside className="flex h-full flex-col rounded-[24px] border border-[#d4e3ff]/64 bg-[#f8fbff]/76 p-5">
              <p className="font-mono text-[0.58rem] font-bold uppercase tracking-[0.15em] text-[#2d5f9d]/70">
                brief.vs.reality
              </p>
              <div className="mt-4 grid gap-3">
                {comparisonItems.map((item, index) => (
                  <div
                    key={item.label}
                    className="rounded-[18px] border border-white/80 bg-white/76 p-4 shadow-[0_12px_34px_rgba(45,95,157,0.07)]"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl border border-[#d4e3ff]/78 bg-[#eef5ff] font-mono text-[0.58rem] font-black text-[#2d5f9d]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="font-mono text-[0.55rem] font-bold uppercase tracking-[0.14em] text-[#2d5f9d]/68">
                          {item.label}
                        </p>
                        <p className="mt-1 text-sm font-extrabold leading-6 text-slate-800">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-3 rounded-[18px] border border-[#8dbbff]/42 bg-white/82 p-4 shadow-[0_12px_34px_rgba(45,95,157,0.08)]">
                <p className="font-mono text-[0.56rem] font-bold uppercase tracking-[0.14em] text-[#2d5f9d]/70">
                  Why it mattered
                </p>
                <p className="mt-2 text-sm font-bold leading-6 text-slate-700">
                  This experience highlighted how easily project expectations
                  can drift when briefs, clients, and coordinators are not
                  aligned. SDS Project Management Site addresses this by making
                  project information, review status, and communication flow
                  easier to track.
                </p>
              </div>
            </aside>
          </div>
        </Reveal>

        <div className="mt-5">
          <Reveal delay={0.06}>
            <div className="rounded-[26px] border border-white/75 bg-white/58 p-5 shadow-[0_20px_64px_rgba(45,95,157,0.09)] backdrop-blur-xl">
              <p className="font-mono text-[0.58rem] font-bold uppercase tracking-[0.15em] text-[#2d5f9d]/70">
                What this demonstrated
              </p>
              <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                {demonstratedItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <article
                      key={item.title}
                      className="rounded-[20px] border border-[#d4e3ff]/58 bg-white/70 p-4 shadow-[0_12px_34px_rgba(45,95,157,0.07)]"
                    >
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-[#d4e3ff]/75 bg-[#f8fbff]/82 text-[#2d5f9d]">
                        <Icon size={17} strokeWidth={2.3} aria-hidden />
                      </span>
                      <h3 className="mt-3 text-base font-extrabold text-slate-950">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {item.body}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
