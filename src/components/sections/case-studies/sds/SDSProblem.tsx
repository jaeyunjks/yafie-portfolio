"use client";

import { useState } from "react";
import { AlertCircle, ArrowRight, UsersRound } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import {
  sdsPainPoints,
  sdsUserGroups,
} from "@/data/caseStudies/sdsModernisation";

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
              The project focused on making project coordination clearer and
              easier to manage.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="mt-8 grid gap-5 rounded-[28px] border border-white/75 bg-white/52 p-4 shadow-[0_26px_86px_rgba(45,95,157,0.12)] backdrop-blur-2xl lg:grid-cols-[0.38fr_0.62fr] lg:p-5">
            <div className="rounded-[22px] border border-[#d4e3ff]/58 bg-[#f8fbff]/72 p-4">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-[#d4e3ff]/75 bg-white/78 text-[#2d5f9d]">
                  <UsersRound size={18} strokeWidth={2.3} aria-hidden />
                </span>
                <div>
                  <p className="font-mono text-[0.58rem] font-bold uppercase tracking-[0.15em] text-[#2d5f9d]/70">
                    users
                  </p>
                  <p className="text-sm font-bold text-slate-700">
                    Select a group
                  </p>
                </div>
              </div>

              <div className="mt-4 grid gap-2">
                {sdsUserGroups.map((user, index) => {
                  const isActive = index === activeUser;

                  return (
                    <button
                      key={user.name}
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => setActiveUser(index)}
                      className={`flex items-center justify-between gap-3 rounded-[16px] border px-4 py-3 text-left text-sm font-extrabold transition-[background-color,border-color,box-shadow,transform] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8dbbff]/70 ${
                        isActive
                          ? "border-[#8dbbff]/70 bg-white text-slate-950 shadow-[0_12px_30px_rgba(45,95,157,0.1)]"
                          : "border-white/75 bg-white/52 text-slate-600 hover:-translate-y-0.5 hover:bg-white/80"
                      }`}
                    >
                      {user.name}
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

              <div className="mt-4 rounded-[18px] border border-[#d4e3ff]/62 bg-white/72 p-4">
                <p className="font-mono text-[0.56rem] font-bold uppercase tracking-[0.14em] text-[#2d5f9d]/70">
                  selected.user
                </p>
                <h3 className="mt-2 text-lg font-extrabold text-slate-950">
                  {selectedUser.name}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {selectedUser.summary}
                </p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {sdsPainPoints.map((point) => (
                <article
                  key={point.title}
                  className="group rounded-[20px] border border-white/75 bg-white/68 p-5 shadow-[0_14px_42px_rgba(45,95,157,0.08)] transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:bg-white/88 hover:shadow-[0_20px_60px_rgba(45,95,157,0.12)]"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-[#d4e3ff]/75 bg-[#f8fbff]/82 text-[#2d5f9d]">
                    <AlertCircle size={16} strokeWidth={2.3} aria-hidden />
                  </span>
                  <h3 className="mt-4 text-base font-extrabold text-slate-950">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {point.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
