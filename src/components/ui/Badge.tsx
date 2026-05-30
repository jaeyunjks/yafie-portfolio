import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: "default" | "muted";
};

export default function Badge({ className, tone = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full px-3 py-1 text-xs font-medium",
        tone === "default"
          ? "bg-blue-100 text-blue-700"
          : "border border-slate-200 bg-white/80 text-slate-600",
        className,
      )}
      {...props}
    />
  );
}
