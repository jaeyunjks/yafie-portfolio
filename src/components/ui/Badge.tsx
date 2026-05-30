import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: "default" | "muted" | "lavender";
};

export default function Badge({ className, tone = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold",
        tone === "default"
          ? "bg-[#d4e3ff] text-[#064784]"
          : "",
        tone === "muted"
          ? "border border-slate-200/80 bg-white/75 text-slate-600"
          : "",
        tone === "lavender" ? "bg-[#e7deff] text-[#4a3d7c]" : "",
        className,
      )}
      {...props}
    />
  );
}
