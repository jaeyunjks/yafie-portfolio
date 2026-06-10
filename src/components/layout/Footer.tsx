import Link from "next/link";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  { label: "Email", href: "mailto:hello@yafie.dev", icon: Mail },
  { label: "LinkedIn", href: "https://www.linkedin.com", icon: FaLinkedin },
  { label: "GitHub", href: "https://github.com", icon: FaGithub },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#d4e3ff]/55 bg-gradient-to-b from-white/34 via-white/50 to-white/64 px-6 [padding-block:clamp(1rem,2vw,1.45rem)] backdrop-blur-md md:px-10">
      <div className="mx-auto grid w-full max-w-[92rem] gap-3 text-sm text-slate-500 md:grid-cols-[auto,1fr,auto] md:items-center md:gap-6">
        <Link
          href="/"
          className="inline-flex items-center justify-center text-xl font-black italic text-[#2d5f9d] md:justify-start"
          aria-label="Yafie home"
        >
          Y.
        </Link>

        <p className="text-center text-xs leading-5 sm:text-sm">
          © {new Date().getFullYear()} Yafie. Built with passion and lots of tea.
        </p>

        <div className="flex flex-wrap justify-center gap-2 md:justify-end">
          {socialLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group inline-flex items-center gap-1.5 rounded-full border border-slate-200/70 bg-white/52 px-2.5 py-1.5 text-[0.72rem] font-bold text-slate-500 shadow-sm backdrop-blur-md hover:border-[#8dbbff]/65 hover:bg-white/78 hover:text-[#2d5f9d]"
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
            >
              <span className="flex h-4 w-4 items-center justify-center transition-transform duration-300 group-hover:-translate-y-0.5">
                <item.icon size={14} aria-hidden />
              </span>
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
