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
    <footer className="border-t border-white/70 bg-white/66 px-6 py-12 backdrop-blur-xl md:px-10">
      <div className="mx-auto flex w-full max-w-[92rem] flex-col items-center justify-between gap-8 text-sm text-slate-500 md:flex-row">
        <Link href="/" className="text-2xl font-black italic text-[#2d5f9d]" aria-label="Yafie home">
          Y.
        </Link>
        <p className="text-center">© {new Date().getFullYear()} Yafie. Built with passion and lots of tea.</p>
        <div className="flex flex-wrap justify-center gap-4">
          {socialLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group flex items-center gap-2 text-slate-500 hover:text-[#2d5f9d]"
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200/80 bg-white/70 transition-all duration-300 group-hover:border-[#2d5f9d]/40 group-hover:shadow-lg">
                <item.icon size={16} aria-hidden />
              </span>
              <span className="hidden font-semibold lg:inline">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
