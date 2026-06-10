import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type StatCardProps = {
  value: string;
  label: string;
  description: string;
  icon: LucideIcon;
  tone?: "blue" | "lavender" | "warm";
};

const toneClasses = {
  blue: "bg-[#d4e3ff] text-[#2d5f9d]",
  lavender: "bg-[#e7deff] text-[#625595]",
  warm: "bg-[#ffdea9] text-[#7d5800]",
};

export default function StatCard({
  value,
  label,
  description,
  icon: Icon,
  tone = "blue",
}: StatCardProps) {
  return (
    <article className="group rounded-[22px] border border-white/72 bg-white/64 p-6 shadow-sm shadow-blue-900/5 backdrop-blur-md transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-900/10">
      <div className={cn("mb-8 flex h-12 w-12 items-center justify-center rounded-2xl", toneClasses[tone])}>
        <Icon size={22} aria-hidden />
      </div>
      <p className="text-3xl font-extrabold text-slate-950">{value}</p>
      <h2 className="mt-1 text-sm font-extrabold text-[#2d5f9d]">{label}</h2>
      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
    </article>
  );
}
