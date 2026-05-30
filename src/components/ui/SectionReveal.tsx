import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export default function SectionReveal({
  className,
  ...props
}: HTMLAttributes<HTMLElement>) {
  return (
    <section
      className={cn("content-fade-in", className)}
      {...props}
    />
  );
}
