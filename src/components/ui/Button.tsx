import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "secondary";
};

export default function Button({
  className,
  variant = "default",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-200",
        variant === "default"
          ? "bg-slate-900 text-white hover:-translate-y-0.5 hover:bg-slate-800"
          : "border border-slate-300 bg-white text-slate-700 hover:-translate-y-0.5 hover:border-slate-400",
        className,
      )}
      {...props}
    />
  );
}
