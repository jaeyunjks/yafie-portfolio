import Reveal from "@/components/ui/Reveal";
import type { CaseStat } from "@/types";

/** A row of headline numbers. See ADR 0001. */
export default function StatRow({ stats }: { stats: readonly CaseStat[] }) {
  return (
    <Reveal>
      <dl className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-[18px] border border-[#d4e3ff]/72 bg-[#f8fbff]/80 px-4 py-4 shadow-[0_10px_28px_rgba(45,95,157,0.06)]"
          >
            <dt className="font-mono text-[0.6rem] font-bold uppercase tracking-[0.12em] text-slate-500">
              {stat.label}
            </dt>
            <dd className="mt-1 text-2xl font-black tracking-tight text-[#2d5f9d]">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
    </Reveal>
  );
}
