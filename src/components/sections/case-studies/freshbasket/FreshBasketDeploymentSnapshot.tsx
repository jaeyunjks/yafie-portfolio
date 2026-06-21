import { Boxes, CloudCog, Database, ExternalLink, ServerCog } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const snapshotItems = [
  { label: "Role", value: "Cloud / Full-Stack Deployment", icon: ServerCog },
  { label: "App stack", value: "Node.js, Express, EJS, MySQL", icon: Boxes },
  { label: "Platform", value: "AWS Academy Learner Lab", icon: CloudCog },
  { label: "Core services", value: "Beanstalk, EC2, RDS, VPC, SG, SNS", icon: Database },
];

export default function FreshBasketDeploymentSnapshot() {
  return (
    <section id="deployment-snapshot" className="scroll-mt-28 px-6 py-8 md:hidden">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="rounded-[24px] border border-[#8dbbff]/45 bg-white/72 p-5 shadow-[0_20px_64px_rgba(45,95,157,0.11)] backdrop-blur-xl">
            <p className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#2d5f9d]/72">Deployment snapshot</p>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950">The AWS story, at a glance.</h2>
            <dl className="mt-5 grid grid-cols-2 gap-3">
              {snapshotItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="rounded-[16px] border border-white/80 bg-white/76 p-3.5">
                    <Icon size={18} strokeWidth={2.25} aria-hidden className="text-[#2d5f9d]" />
                    <dt className="mt-3 font-mono text-[0.55rem] font-bold uppercase tracking-[0.1em] text-[#2d5f9d]/68">{item.label}</dt>
                    <dd className="mt-1 text-sm font-bold leading-5 text-slate-700">{item.value}</dd>
                  </div>
                );
              })}
            </dl>
            <div className="mt-3 rounded-[18px] border border-[#d4e3ff]/65 bg-[#f8fbff]/82 p-4">
              <p className="font-mono text-[0.55rem] font-bold uppercase tracking-[0.1em] text-[#2d5f9d]/68">Deployment model</p>
              <p className="mt-1 text-sm font-bold leading-6 text-slate-700">Load-balanced Elastic Beanstalk environment with Auto Scaling from 2 to 8 instances.</p>
              <p className="mt-3 font-mono text-[0.55rem] font-bold uppercase tracking-[0.1em] text-[#2d5f9d]/68">Evidence status</p>
              <p className="mt-1 text-sm leading-6 text-slate-700">Documented deployment; lab environment expired. Architecture, configuration, SQL proof, and application screenshots remain available.</p>
            </div>
            <a href="#troubleshooting" className="mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-[#d4e3ff]/75 bg-white/82 px-4 py-2.5 text-sm font-extrabold text-[#2d5f9d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8dbbff]/70">
              Jump to problems solved
              <ExternalLink size={15} strokeWidth={2.3} aria-hidden />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
