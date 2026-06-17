import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CaseStudyBackLink() {
  return (
    <Link
      href="/projects"
      className="inline-flex items-center gap-1.5 self-start rounded-full border border-transparent bg-transparent px-0 py-1 text-[0.88rem] font-medium text-slate-700 shadow-none transition-[background-color,border-color,box-shadow,transform,color,padding] duration-300 hover:-translate-y-0.5 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8dbbff]/75 md:gap-2 md:rounded-full md:border md:border-[#d4e3ff]/72 md:bg-white/68 md:px-4 md:py-2.5 md:text-sm md:font-semibold md:shadow-[0_8px_20px_rgba(45,95,157,0.06)] md:backdrop-blur-md md:hover:border-[#c8dbf8] md:hover:bg-white md:hover:shadow-[0_10px_24px_rgba(45,95,157,0.08)]"
    >
      <ArrowLeft size={16} strokeWidth={2.3} aria-hidden />
      <span className="md:hidden">Projects</span>
      <span className="hidden md:inline">Back to Projects</span>
    </Link>
  );
}
