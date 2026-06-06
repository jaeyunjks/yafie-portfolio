"use client";

import { useState } from "react";
import {
  AlertCircle,
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  GraduationCap,
  ShieldCheck,
  UserCheck,
  UsersRound,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { sdsUserGroups } from "@/data/caseStudies/sdsModernisation";

const userIcons = [ShieldCheck, GraduationCap, Building2, UserCheck];

export default function SDSProblem() {
  const [activeUser, setActiveUser] = useState(0);
  const selectedUser = sdsUserGroups[activeUser];

  return (
    <section id="problem-space" className="scroll-mt-32 px-6 py-14">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#2d5f9d]/72">
              02 // problem.space
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
              The problem space.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              The project focused on the coordination problems that appear when
              project information, review status, allocation timing, and user
              responsibilities are not visible enough.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="mt-8 grid gap-5 rounded-[28px] border border-white/75 bg-white/52 p-4 shadow-[0_26px_86px_rgba(45,95,157,0.12)] backdrop-blur-2xl lg:grid-cols-[0.36fr_0.64fr] lg:p-5">
            <div className="h-fit self-start rounded-[22px] border border-[#d4e3ff]/58 bg-[#f8fbff]/72 p-4 shadow-[0_16px_48px_rgba(45,95,157,0.08)]">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-[#d4e3ff]/75 bg-white/78 text-[#2d5f9d]">
                  <BriefcaseBusiness size={18} strokeWidth={2.3} aria-hidden />
                </span>
                <div>
                  <p className="font-mono text-[0.58rem] font-bold uppercase tracking-[0.15em] text-[#2d5f9d]/70">
                    users
                  </p>
                  <p className="text-sm font-bold text-slate-700">
                    Select a user group
                  </p>
                </div>
              </div>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Select a user group to view their workflow problems.
              </p>

              <div className="mt-4 grid gap-2">
                {sdsUserGroups.map((user, index) => {
                  const isActive = index === activeUser;
                  const UserIcon = userIcons[index] ?? UsersRound;

                  return (
                    <button
                      key={user.name}
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => setActiveUser(index)}
                      className={`flex items-center justify-between gap-3 rounded-[16px] border px-3 py-3 text-left text-sm font-extrabold transition-[background-color,border-color,box-shadow,transform] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8dbbff]/70 ${
                        isActive
                          ? "border-[#8dbbff]/80 bg-white text-slate-950 shadow-[0_12px_30px_rgba(45,95,157,0.12)] ring-1 ring-[#8dbbff]/34"
                          : "border-white/75 bg-white/52 text-slate-600 hover:-translate-y-0.5 hover:bg-white/80"
                      }`}
                    >
                      <span className="flex min-w-0 items-center gap-3">
                        <span
                          className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl border ${
                            isActive
                              ? "border-[#8dbbff]/58 bg-[#eef5ff] text-[#2d5f9d]"
                              : "border-[#d4e3ff]/64 bg-white/74 text-slate-400"
                          }`}
                        >
                          <UserIcon size={16} strokeWidth={2.35} aria-hidden />
                        </span>
                        <span className="min-w-0">{user.name}</span>
                      </span>
                      <ArrowRight
                        size={15}
                        strokeWidth={2.3}
                        aria-hidden
                        className={isActive ? "text-[#2d5f9d]" : "text-slate-400"}
                      />
                    </button>
                  );
                })}
              </div>

              <p className="mt-4 rounded-[14px] border border-white/72 bg-white/56 px-3 py-2 font-mono text-[0.55rem] font-bold uppercase tracking-[0.1em] text-slate-400">
                Role-specific problems update on selection.
              </p>
            </div>

            <div className="rounded-[24px] border border-white/75 bg-white/68 p-5 shadow-[0_16px_48px_rgba(45,95,157,0.08)] transition-[background-color] duration-300">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="max-w-2xl">
                  <p className="font-mono text-[0.58rem] font-bold uppercase tracking-[0.15em] text-[#2d5f9d]/70">
                    visible.problems
                  </p>
                  <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-950">
                    {selectedUser.name}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {selectedUser.summary}
                  </p>
                </div>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[#d4e3ff]/75 bg-[#f8fbff]/82 text-[#2d5f9d]">
                  <AlertCircle size={18} strokeWidth={2.3} aria-hidden />
                </span>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {selectedUser.problems.map((problem, index) => (
                  <article
                    key={problem.title}
                    className="rounded-[18px] border border-[#d4e3ff]/58 bg-[#f8fbff]/70 p-4"
                  >
                    <div className="flex gap-3">
                      <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#d4e3ff]/75 bg-white/84 text-[#2d5f9d]">
                        <CheckCircle2 size={14} strokeWidth={2.4} aria-hidden />
                      </span>
                      <div>
                        <p className="font-mono text-[0.54rem] font-bold uppercase tracking-[0.12em] text-[#2d5f9d]/64">
                          problem.{String(index + 1).padStart(2, "0")}
                        </p>
                        <p className="mt-1 text-sm font-bold leading-6 text-slate-700">
                          {problem.title}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          {problem.body}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-5 rounded-[18px] border border-[#d4e3ff]/62 bg-white/72 p-4">
                <p className="font-mono text-[0.56rem] font-bold uppercase tracking-[0.14em] text-[#2d5f9d]/70">
                  engineering.focus
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  These role-specific problems shaped how the system needed to
                  support project visibility, clearer communication, and fewer
                  manual coordination steps.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
