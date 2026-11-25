import Reveal from "@/components/ui/Reveal";
import type { CaseCard } from "@/types";

const columnClasses = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-2 xl:grid-cols-3",
  4: "md:grid-cols-2 xl:grid-cols-4",
} as const;

/** Grid of title + body cards. See ADR 0001. */
export default function CardGrid({
  cards,
  columns = 3,
}: {
  cards: readonly CaseCard[];
  columns?: keyof typeof columnClasses;
}) {
  return (
    <div className={`grid gap-4 ${columnClasses[columns]}`}>
      {cards.map((card, index) => (
        <Reveal key={card.title} delay={index * 0.04} className="flex">
          <article className="flex w-full flex-col rounded-[22px] border border-white/75 bg-white/66 p-6 shadow-[0_18px_56px_rgba(45,95,157,0.09)] backdrop-blur-xl">
            {card.tag ? (
              <p className="font-mono text-[0.58rem] font-bold uppercase tracking-[0.15em] text-[#2d5f9d]/70">
                {card.tag}
              </p>
            ) : null}
            <h3 className={`${card.tag ? "mt-2" : ""} text-lg font-extrabold tracking-tight text-slate-950`}>
              {card.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{card.body}</p>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
