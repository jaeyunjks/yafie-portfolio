import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type FloatingIconProps = {
  icon: LucideIcon;
  className?: string;
  label: string;
  title: string;
};

export default function FloatingIcon({
  icon: Icon,
  className,
  label,
  title,
}: FloatingIconProps) {
  return (
    <div
      aria-label={label}
      className={cn(
        "frosted soft-float absolute z-20 flex items-center gap-2 rounded-2xl px-4 py-3 text-[#2d5f9d] shadow-xl shadow-blue-900/10",
        className,
      )}
    >
      <Icon size={21} />
      <span className="text-xs font-bold text-slate-700">{title}</span>
    </div>
  );
}
