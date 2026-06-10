import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import Reveal from "@/components/ui/Reveal";
import {
  freshBasketLinks,
  freshBasketNotice,
  freshBasketPills,
} from "@/data/caseStudies/freshbasket";
import { FreshBasketImageFrame } from "./FreshBasketVisuals";

export default function FreshBasketCaseHero() {
  return (
    <section className="relative isolate -mt-10 overflow-hidden px-6 pb-14 pt-4 sm:-mt-12 sm:pt-6 lg:-mt-14 lg:pt-8">
      <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,0.65fr)] xl:gap-12">
        <Reveal>
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#2d5f9d]/72">
              case.study // freshbasket.aws
            </p>
            <h1 className="mt-4 text-5xl font-black tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              FreshBasket AWS Deployment
            </h1>
            <p className="mt-5 max-w-3xl text-2xl font-extrabold leading-tight text-slate-800 sm:text-3xl">
              A documented AWS deployment of a Node.js and MySQL vendor portal.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              FreshBasket was a cloud deployment project where I deployed a
              Node.js, Express, EJS, and MySQL web application to AWS. The
              deployment used Elastic Beanstalk, EC2, RDS MySQL, Load Balancer,
              Auto Scaling, custom VPC networking, security groups, environment
              variables, and SNS notification setup. Although the AWS Academy
              environment is no longer active, the deployment is documented
              through architecture diagrams, configuration screenshots,
              database connection evidence, and application screenshots.
            </p>

            <div className="mt-5 flex flex-wrap gap-2.5">
              {freshBasketPills.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#d4e3ff]/75 bg-white/68 px-3.5 py-2 font-mono text-[0.58rem] font-bold uppercase tracking-[0.1em] text-slate-600 shadow-sm backdrop-blur-md"
                >
                  {item}
                </span>
              ))}
            </div>

            <p className="mt-6 rounded-[22px] border border-[#d4e3ff]/68 bg-[#f8fbff]/72 p-4 text-sm font-semibold leading-7 text-slate-700">
              {freshBasketNotice}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/projects"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200/80 bg-white/70 px-5 py-3 text-sm font-extrabold text-slate-800 shadow-sm backdrop-blur-md transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md sm:w-auto"
              >
                <ArrowLeft size={17} strokeWidth={2.4} aria-hidden />
                Back to Projects
              </Link>
              <Link
                href="#evidence-gallery"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#2d5f9d] px-5 py-3 text-sm font-extrabold text-white shadow-lg shadow-blue-900/15 transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:bg-[#265589] hover:shadow-xl sm:w-auto"
              >
                View Project Gallery
                <ArrowRight size={17} strokeWidth={2.4} aria-hidden />
              </Link>
              <a
                href={freshBasketLinks.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200/80 bg-white/70 px-5 py-3 text-sm font-extrabold text-slate-800 shadow-sm backdrop-blur-md transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md sm:w-auto"
              >
                <SiGithub size={17} aria-hidden />
                GitHub Repo
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="relative">
            <div className="absolute -inset-5 rounded-[36px] bg-[radial-gradient(circle_at_60%_18%,rgba(141,187,255,0.26),transparent_36%),radial-gradient(circle_at_12%_88%,rgba(198,183,255,0.2),transparent_36%)] blur-2xl" />
            <div className="relative rounded-[32px] border border-white/78 bg-white/58 p-3 shadow-[0_30px_96px_rgba(45,95,157,0.18)] backdrop-blur-2xl sm:p-4">
              <FreshBasketImageFrame
                src={freshBasketLinks.previewImage}
                alt="FreshBasket AWS deployment preview"
                label="FreshBasket preview"
                aspectRatio="16/9"
                objectFit="cover"
                objectPosition="center top"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
