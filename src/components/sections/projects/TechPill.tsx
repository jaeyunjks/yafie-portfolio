"use client";

import type { ComponentType } from "react";
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
  TestTube2,
  TrendingUp,
} from "lucide-react";
import {
  SiAxios,
  SiExpress,
  SiFigma,
  SiFlask,
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
}>;

type TechPillProps = {
  tech: string;
};

const techIconMap: Record<string, TechIcon> = {
  React: SiReact,
  "React Router": SiReactrouter,
  TypeScript: SiTypescript,
  Flask: SiFlask,
  SQLite: SiSqlite,
  Vite: SiVite,
  Axios: SiAxios,
  Zod: SiZod,
  Vitest: SiVitest,
  Pytest: SiPytest,
  Testing: TestTube2,
  AWS: Cloud,
  "Elastic Beanstalk": Cloud,
  EC2: Server,
  "RDS MySQL": SiMysql,
  VPC: Network,
  "Load Balancer": Network,
  "Auto Scaling": TrendingUp,
  SNS: Bell,
  "Node.js": SiNodedotjs,
  Express: SiExpress,
  EJS: Code2,
  MySQL: SiMysql,
  Swift: SiSwift,
  SwiftUI: SiSwift,
  Combine: Layers3,
  MVVM: Layers3,
  UserDefaults: Database,
  XCTest: CheckCircle2,
  "UI Testing": TestTube2,
  "Core Data": Database,
  FileManager: Folder,
  "Vision / PDFKit": Code2,
  NestJS: Server,
  Prisma: SiPrisma,
  PostgreSQL: SiPostgresql,
  OpenAI: SiOpenai,
  Figma: SiFigma,
};

export default function TechPill({ tech }: TechPillProps) {
  const Icon = techIconMap[tech] ?? Code2;

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#d4e3ff]/72 bg-white/68 px-3 py-1.5 font-mono text-[0.54rem] font-bold uppercase tracking-[0.09em] text-slate-500">
      <Icon
        size={14}
        className="shrink-0 text-[#2d5f9d]/70"
        aria-hidden
      />
      <span>{tech}</span>
    </span>
  );
}
