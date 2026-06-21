"use client";

import { ChevronRight, Database, Globe2, Network, Router } from "lucide-react";
import useHorizontalScrollProgress from "@/components/sections/home/useHorizontalScrollProgress";
import Reveal from "@/components/ui/Reveal";
import { freshBasketNetworkingCards } from "@/data/caseStudies/freshbasket";
import {
  FreshBasketImageFrame,
  FreshBasketSectionLabel,
} from "./FreshBasketVisuals";

export default function FreshBasketSecurityNetworking() {
  const { ref: mobileCardsRef, progress } = useHorizontalScrollProgress<HTMLDivElement>();
  const securitySummary = [
    { label: "Web traffic", value: "HTTP to app / load balancer", icon: Globe2 },
    { label: "Database traffic", value: "MySQL 3306 from app SG only", icon: Database },
    { label: "Network boundary", value: "Custom VPC", icon: Network },
    { label: "Public access", value: "Subnets, route table, IGW", icon: Router },
  ];

  return (
    <section id="security-networking" className="scroll-mt-32 px-6 py-10 md:py-12">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <FreshBasketSectionLabel
            label="04 // security.networking"
            title="Security and networking."
            subtitle="Public application access was separated from database access."
          />
        </Reveal>

        <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {securitySummary.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.label} className="rounded-[18px] border border-[#d4e3ff]/58 bg-[#f8fbff]/72 p-4">
                <Icon size={18} strokeWidth={2.25} aria-hidden className="text-[#2d5f9d]" />
                <h3 className="mt-3 font-mono text-[0.56rem] font-bold uppercase tracking-[0.1em] text-[#2d5f9d]/70">{item.label}</h3>
                <p className="mt-1 text-sm font-bold leading-5 text-slate-700">{item.value}</p>
              </article>
            );
          })}
        </div>

        <Reveal delay={0.05}>
          <p className="mt-6 max-w-4xl text-base leading-8 text-slate-600">
            The web app allowed HTTP access, while RDS MySQL was restricted to
            the application security group on port 3306.
          </p>
        </Reveal>

        <div ref={mobileCardsRef} className="mobile-snap-scroll mt-8 -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 md:mx-0 md:grid md:snap-none md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0 md:pb-0">
          {freshBasketNetworkingCards.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.04} className="w-[88vw] shrink-0 snap-center md:w-auto md:snap-none">
              <article className="h-full rounded-[26px] border border-white/75 bg-white/66 p-4 shadow-[0_20px_64px_rgba(45,95,157,0.09)] backdrop-blur-xl">
                <FreshBasketImageFrame
                  src={card.image}
                  alt={`${card.title} AWS evidence screenshot`}
                  label={card.title}
                  caption={card.caption}
                  aspectRatio="console"
                  objectFit="contain"
                  showHeader={false}
                />
                <div className="p-2 pt-4">
                  <h3 className="text-lg font-extrabold text-slate-950">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {card.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-2 flex items-center gap-3 md:hidden">
          <span className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[#2d5f9d]/70">Swipe {Math.round(progress)}%</span>
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#dbe7fb]"><div className="h-full rounded-full bg-[#2d5f9d]" style={{ width: `${progress}%` }} /></div>
          <ChevronRight size={15} aria-hidden className="text-[#2d5f9d]/55" />
        </div>
      </div>
    </section>
  );
}
