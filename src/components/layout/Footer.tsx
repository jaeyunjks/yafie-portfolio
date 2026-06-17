import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { contactMeta } from "@/data/contact";

const socialLinks = [
  {
    label: "Email",
    href: contactMeta.email ? `mailto:${contactMeta.email}` : "",
    icon: Mail,
    disabled: !contactMeta.email,
  },
  {
    label: "LinkedIn",
    href: contactMeta.linkedin,
    icon: FaLinkedin,
    disabled: !contactMeta.linkedin,
  },
  { label: "GitHub", href: contactMeta.github, icon: FaGithub, disabled: false },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#d4e3ff]/55 bg-[linear-gradient(180deg,rgba(238,244,255,0.62),rgba(242,246,255,0.72)_46%,rgba(242,238,255,0.76))] px-6 [padding-block:clamp(0.7rem,1.6vw,1rem)] backdrop-blur-md md:px-10">
      <div className="mx-auto grid w-full max-w-[92rem] gap-2 text-sm text-slate-500 md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-4">
        <div className="hidden md:block" aria-hidden />

        <p className="text-center text-[0.72rem] leading-5 sm:text-xs">
          © {new Date().getFullYear()} Yafie. Built with passion and lots of tea.
        </p>

        <div className="flex flex-wrap justify-center gap-2 md:justify-end">
          {socialLinks.map((item) => (
            item.disabled ? (
              <span
                key={item.label}
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/70 bg-white/42 px-2.5 py-1 text-[0.68rem] font-bold text-slate-400 shadow-sm backdrop-blur-md"
                aria-disabled="true"
              >
                <span className="flex h-4 w-4 items-center justify-center">
                  <item.icon size={14} aria-hidden />
                </span>
                <span>{item.label}</span>
              </span>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="group inline-flex items-center gap-1.5 rounded-full border border-slate-200/70 bg-white/52 px-2.5 py-1 text-[0.68rem] font-bold text-slate-500 shadow-sm backdrop-blur-md hover:border-[#8dbbff]/65 hover:bg-white/78 hover:text-[#2d5f9d]"
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              >
                <span className="flex h-4 w-4 items-center justify-center transition-transform duration-300 group-hover:-translate-y-0.5">
                  <item.icon size={14} aria-hidden />
                </span>
                <span>{item.label}</span>
              </Link>
            )
          ))}
        </div>
      </div>
    </footer>
  );
}
