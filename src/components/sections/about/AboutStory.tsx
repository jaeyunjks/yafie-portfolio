import Image from "next/image";
import {
  BriefcaseBusiness,
  CheckCircle2,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const profilePhotoPath = "/images/mascot/me.png";

const educationCards = [
  {
    institution: "University of Technology Sydney",
    program: "Bachelor of Information Technology",
    focus: [
      "Major: Enterprise Software Development",
      "Sub-major: Business Information Systems Management",
    ],
    status: "Expected completion: 2026",
    logo: {
      src: "/images/mascot/UTS-logo.png",
      alt: "University of Technology Sydney logo",
      width: 1280,
      height: 800,
    },
  },
  {
    institution: "UTS College",
    program: "Diploma of Information Technology",
    focus: [
      "Foundation in programming",
      "Web systems, databases, and software fundamentals",
    ],
    status: "Diploma Completion",
    logo: {
      src: "/images/mascot/UTSC-logo.png",
      alt: "UTS College logo",
      width: 7257,
      height: 1529,
    },
  },
];

const profileTags = [
  "software engineering",
  "product-minded",
  "build · test · refine",
];

const hospitalitySkills = [
  "stakeholder communication",
  "team coordination",
  "quality assurance mindset",
  "calm problem-solving",
];

function ProfilePhotoCard() {
  return (
    <article className="relative overflow-hidden rounded-[20px] border border-white/75 bg-white/60 p-4 shadow-[0_24px_70px_rgba(45,95,157,0.12)] backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-[1px] rounded-[19px] bg-[linear-gradient(145deg,rgba(255,255,255,0.9),rgba(238,245,255,0.42)_48%,rgba(231,222,255,0.22))]" />
      <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />

      <div className="relative z-10">
        <div className="mb-4 flex items-center justify-between gap-3">
          <p className="font-mono text-[0.63rem] font-bold uppercase tracking-[0.18em] text-[#2d5f9d]/72">
            profile.photo
          </p>
        </div>

        <div className="relative flex min-h-[22rem] items-end justify-center overflow-hidden rounded-[16px] border border-[#d4e3ff]/46 bg-[#f8fbff]/42 px-6 pt-7 sm:min-h-[23.5rem] lg:min-h-[25rem]">
          <div className="pointer-events-none absolute bottom-5 left-1/2 h-[19rem] w-[84%] -translate-x-1/2 rounded-[999px] bg-[radial-gradient(ellipse_at_center,rgba(141,187,255,0.42),rgba(198,183,255,0.24)_48%,rgba(255,255,255,0.12)_70%,transparent_76%)]" />
          <div className="pointer-events-none absolute bottom-0 left-1/2 h-24 w-9/12 -translate-x-1/2 rounded-full bg-white/36 blur-xl" />
          <div className="pointer-events-none absolute bottom-3 left-1/2 h-20 w-8/12 -translate-x-1/2 rounded-full bg-slate-900/8 blur-2xl" />

          <Image
            src={profilePhotoPath}
            alt="Yafie profile photo"
            width={1122}
            height={1402}
            sizes="(min-width: 1024px) 32vw, 92vw"
            priority={false}
            className="relative z-10 h-auto max-h-[24rem] w-auto max-w-[82%] translate-x-[-0.35rem] object-contain object-bottom drop-shadow-[0_28px_30px_rgba(15,23,42,0.16)] sm:max-w-[74%] lg:max-h-[25.5rem] lg:max-w-[88%]"
          />
        </div>

        <div className="mt-4 flex flex-wrap gap-2.5">
          {profileTags.map((label) => (
            <p
              key={label}
              className="rounded-full border border-[#d4e3ff]/68 bg-white/68 px-3 py-2 font-mono text-[0.56rem] font-bold uppercase tracking-[0.12em] text-slate-500 shadow-[0_8px_22px_rgba(45,95,157,0.055)]"
            >
              {label}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function AboutStory() {
  return (
    <section className="pb-20 lg:pb-24">
      <Reveal>
        <div className="mb-8 border-l border-[#8dbbff]/45 pl-4">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#2d5f9d]/75">
            02 // story.context
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
            Profile & Education
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            A grounded overview of my software engineering journey, academic
            background, and the experiences shaping how I work.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-5 lg:grid-cols-12 lg:items-start">
        <Reveal className="lg:col-span-4">
          <ProfilePhotoCard />
        </Reveal>

        <div className="grid gap-4 lg:col-span-8">
          <Reveal delay={0.04}>
            <article className="relative overflow-hidden rounded-[18px] border border-white/75 bg-white/64 p-5 shadow-[0_22px_72px_rgba(45,95,157,0.1)] backdrop-blur-xl md:p-7">
              <div className="pointer-events-none absolute inset-y-6 left-4 w-px rounded-full bg-gradient-to-b from-[#8dbbff] via-[#c6b7ff] to-transparent" />
              <div className="relative z-10 grid gap-6 xl:grid-cols-[minmax(0,0.72fr)_minmax(14rem,0.28fr)] xl:items-start">
                <div className="pl-3">
                  <p className="font-mono text-[0.66rem] font-bold uppercase tracking-[0.18em] text-[#2d5f9d]/72">
                    profile.summary
                  </p>
                  <h3 className="mt-3 max-w-3xl text-2xl font-extrabold leading-tight tracking-tight text-slate-950 md:text-[2rem]">
                    Software engineering student building practical,
                    product-minded systems.
                  </h3>
                  <div className="mt-5 grid gap-4 text-base leading-8 text-slate-600">
                    <p>
                      I&apos;m studying software engineering and building
                      hands-on projects across web applications, mobile
                      interfaces, backend logic, cloud deployment, and
                      AI-assisted workflows. I use projects to connect technical
                      concepts with real user needs, product decisions, and
                      maintainable implementation.
                    </p>
                    <p>
                      My goal is to grow into a software engineer who can
                      contribute across the software lifecycle &mdash;
                      understanding requirements, building usable interfaces,
                      designing reliable logic, testing important flows, and
                      communicating clearly with a team.
                    </p>
                  </div>
                </div>

                <div className="grid gap-2 rounded-[14px] border border-[#d4e3ff]/62 bg-[#f8fbff]/66 p-3">
                  {[
                    "software engineering student",
                    "practical project builder",
                    "web · mobile · backend",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 rounded-[10px] bg-white/64 px-3 py-2 text-sm font-bold text-slate-700"
                    >
                      <CheckCircle2
                        size={15}
                        strokeWidth={2.3}
                        aria-hidden
                        className="shrink-0 text-[#2d5f9d]"
                      />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>

          <div className="grid gap-4 xl:grid-cols-[minmax(0,0.68fr)_minmax(16rem,0.32fr)]">
            <div className="relative grid gap-3">
              {educationCards.map((card, index) => (
                <Reveal key={card.institution} delay={index * 0.06}>
                  <article className="group relative overflow-hidden rounded-[16px] border border-white/75 bg-white/68 p-5 shadow-[0_18px_55px_rgba(45,95,157,0.08)] backdrop-blur-xl transition-[border-color,box-shadow,background-color,transform] duration-300 hover:-translate-y-1 hover:border-[#8dbbff]/55 hover:bg-white/90 hover:shadow-[0_24px_70px_rgba(45,95,157,0.13)]">
                    <div className="flex items-start gap-4">
                      <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-[14px] border border-[#8dbbff]/18 bg-white/82 p-2 shadow-[0_12px_26px_rgba(45,95,157,0.09)] transition-transform duration-300 group-hover:-translate-y-0.5">
                        <Image
                          src={card.logo.src}
                          alt={card.logo.alt}
                          width={card.logo.width}
                          height={card.logo.height}
                          sizes="56px"
                          className="h-full w-full object-contain"
                        />
                      </span>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#2d5f9d]/70">
                            credential.0{index + 1}
                          </p>
                          <p className="rounded-full border border-[#d4e3ff]/75 bg-[#f8fbff]/82 px-2.5 py-1 font-mono text-[0.56rem] font-bold uppercase tracking-[0.1em] text-slate-500">
                            {card.status}
                          </p>
                        </div>
                        <h3 className="mt-2 text-lg font-extrabold tracking-tight text-slate-950">
                          {card.institution}
                        </h3>
                        <p className="mt-1 text-sm font-bold text-slate-700">
                          {card.program}
                        </p>
                        <div className="mt-3 grid gap-1.5 text-sm leading-6 text-slate-600">
                          {card.focus.map((focus) => (
                            <p key={focus}>{focus}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.08}>
              <article className="relative h-full overflow-hidden rounded-[15px] border border-[#d4e3ff]/68 bg-white/54 p-5 shadow-[0_14px_42px_rgba(45,95,157,0.07)] backdrop-blur-xl">
                <div className="relative z-10 flex items-start gap-4 xl:block">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] border border-[#8dbbff]/20 bg-[#eef5ff]/68 text-[#2d5f9d] xl:mb-4">
                    <BriefcaseBusiness
                      size={18}
                      strokeWidth={2.2}
                      aria-hidden
                    />
                  </span>
                  <div>
                    <p className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.16em] text-slate-500">
                      supporting.signal
                    </p>
                    <h3 className="mt-2 text-lg font-extrabold tracking-tight text-slate-950">
                      Hospitality leadership background
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      My hospitality leadership experience helped me build
                      communication, reliability, quality control, and calm
                      problem-solving in fast-paced team environments.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {hospitalitySkills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-[#d4e3ff]/68 bg-white/64 px-2.5 py-1.5 font-mono text-[0.55rem] font-bold uppercase tracking-[0.1em] text-slate-500"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
