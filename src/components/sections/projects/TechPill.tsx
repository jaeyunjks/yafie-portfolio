"use client";

import type { ComponentType, CSSProperties } from "react";
import {
  Bell,
  CheckCircle2,
  Cloud,
  Code2,
  Database,
  Folder,
  Layers3,
  Network,
  Server,
  ShieldCheck,
  TestTube2,
  TrendingUp,
} from "lucide-react";
import {
  SiAxios,
  SiCss,
  SiExpress,
  SiFigma,
  SiFlask,
  SiGithub,
  SiJira,
  SiMysql,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiPrisma,
  SiPytest,
  SiReact,
  SiReactrouter,
  SiSqlite,
  SiSwift,
  SiTypescript,
  SiVite,
  SiVitest,
  SiZod,
} from "react-icons/si";

type TechIcon = ComponentType<{
  "aria-hidden"?: boolean;
  className?: string;
  size?: number;
  style?: CSSProperties;
}>;

type TechPillProps = {
  tech: string;
};

const techIconMap: Record<string, { Icon: TechIcon; color: string }> = {
  React: { Icon: SiReact, color: "#61DAFB" },
  "React Router": { Icon: SiReactrouter, color: "#CA4245" },
  TypeScript: { Icon: SiTypescript, color: "#3178C6" },
  Flask: { Icon: SiFlask, color: "#111827" },
  SQLite: { Icon: SiSqlite, color: "#003B57" },
  Vite: { Icon: SiVite, color: "#646CFF" },
  Axios: { Icon: SiAxios, color: "#5A29E4" },
  Zod: { Icon: SiZod, color: "#3068B7" },
  Vitest: { Icon: SiVitest, color: "#6E9F18" },
  Pytest: { Icon: SiPytest, color: "#3776AB" },
  Testing: { Icon: TestTube2, color: "#2d5f9d" },
  AWS: { Icon: Cloud, color: "#FF9900" },
  "Elastic Beanstalk": { Icon: Cloud, color: "#FF9900" },
  EC2: { Icon: Server, color: "#FF9900" },
  "RDS MySQL": { Icon: SiMysql, color: "#4479A1" },
  VPC: { Icon: Network, color: "#FF9900" },
  "Load Balancer": { Icon: Network, color: "#FF9900" },
  "Auto Scaling": { Icon: TrendingUp, color: "#FF9900" },
  SNS: { Icon: Bell, color: "#FF9900" },
  "Node.js": { Icon: SiNodedotjs, color: "#339933" },
  Express: { Icon: SiExpress, color: "#111827" },
  EJS: { Icon: Code2, color: "#A91E50" },
  MySQL: { Icon: SiMysql, color: "#4479A1" },
  Swift: { Icon: SiSwift, color: "#FA7343" },
  SwiftUI: { Icon: SiSwift, color: "#FA7343" },
  Combine: { Icon: Layers3, color: "#7C3AED" },
  MVVM: { Icon: Layers3, color: "#2d5f9d" },
  UserDefaults: { Icon: Database, color: "#4479A1" },
  XCTest: { Icon: CheckCircle2, color: "#2d5f9d" },
  "UI Testing": { Icon: TestTube2, color: "#2d5f9d" },
  "Core Data": { Icon: Database, color: "#4479A1" },
  FileManager: { Icon: Folder, color: "#F59E0B" },
  "Vision / PDFKit": { Icon: Code2, color: "#2d5f9d" },
  NestJS: { Icon: Server, color: "#E0234E" },
  Prisma: { Icon: SiPrisma, color: "#2D3748" },
  PostgreSQL: { Icon: SiPostgresql, color: "#4169E1" },
  OpenAI: { Icon: SiOpenai, color: "#111827" },
  Figma: { Icon: SiFigma, color: "#F24E1E" },
  "JWT Auth": { Icon: ShieldCheck, color: "#2d5f9d" },
  CSS: { Icon: SiCss, color: "#663399" },
  GitHub: { Icon: SiGithub, color: "#181717" },
  Jira: { Icon: SiJira, color: "#0052CC" },
  "Next.js": { Icon: Code2, color: "#111827" },
  "Tailwind CSS": { Icon: Code2, color: "#38BDF8" },
  "Framer Motion": { Icon: Code2, color: "#7C3AED" },
  "Design System": { Icon: Layers3, color: "#2d5f9d" },
};

export default function TechPill({ tech }: TechPillProps) {
  const iconMeta = techIconMap[tech] ?? { Icon: Code2, color: "#2d5f9d" };
  const Icon = iconMeta.Icon;

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#d4e3ff]/72 bg-white/68 px-3 py-1.5 font-mono text-[0.54rem] font-bold uppercase tracking-[0.09em] text-slate-500">
      <Icon
        size={14}
        className="shrink-0"
        style={{ color: iconMeta.color }}
        aria-hidden
      />
      <span>{tech}</span>
    </span>
  );
}
