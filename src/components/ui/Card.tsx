import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export default function Card({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <article
      className={cn("frosted rounded-[22px] p-6 transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-xl", className)}
      {...props}
    />
  );
}
