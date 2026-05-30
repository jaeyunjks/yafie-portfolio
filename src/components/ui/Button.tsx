import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "secondary" | "ghost";
};

export default function Button({
  className,
  variant = "default",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-all duration-300 active:scale-95",
        variant === "default"
          ? "bg-[#2d5f9d] text-white shadow-lg shadow-blue-900/15 hover:-translate-y-1 hover:bg-[#265589] hover:shadow-xl"
          : "",
        variant === "secondary"
          ? "border border-slate-200/80 bg-white/70 text-slate-800 shadow-sm backdrop-blur-md hover:-translate-y-1 hover:bg-white hover:shadow-md"
          : "",
        variant === "ghost"
          ? "px-4 text-[#2d5f9d] hover:-translate-y-0.5 hover:bg-blue-50"
          : "",
        className,
      )}
      {...props}
    />
  );
}
