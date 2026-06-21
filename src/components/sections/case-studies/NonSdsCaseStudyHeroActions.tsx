import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiGithub } from "react-icons/si";

type NonSdsCaseStudyHeroActionsProps = {
  githubHref: string;
  projectGalleryHref: string;
  galleryLabel?: string;
  primaryFirst?: boolean;
};

export default function NonSdsCaseStudyHeroActions({
  githubHref,
  projectGalleryHref,
  galleryLabel = "View Project Gallery",
  primaryFirst = false,
}: NonSdsCaseStudyHeroActionsProps) {
  const githubAction = (
    <a
      href={githubHref}
      target="_blank"
      rel="noreferrer"
      className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-slate-200/80 bg-white/70 px-5 py-3 text-sm font-extrabold text-slate-800 shadow-sm backdrop-blur-md transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8dbbff]/75 sm:w-auto"
    >
      <SiGithub size={17} aria-hidden />
      GitHub Repo
    </a>
  );
  const galleryAction = (
    <Link
      href={projectGalleryHref}
      className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-[#2d5f9d] px-5 py-3 text-sm font-extrabold text-white shadow-lg shadow-blue-900/15 transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:bg-[#265589] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8dbbff]/75 sm:w-auto"
    >
      {galleryLabel}
      <ArrowRight size={17} strokeWidth={2.4} aria-hidden />
    </Link>
  );

  return (
    <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      {primaryFirst ? galleryAction : githubAction}
      {primaryFirst ? githubAction : galleryAction}
    </div>
  );
}
