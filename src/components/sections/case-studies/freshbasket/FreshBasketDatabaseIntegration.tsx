import Reveal from "@/components/ui/Reveal";
import { freshBasketDatabaseTables } from "@/data/caseStudies/freshbasket";
import {
  FreshBasketImageFrame,
  FreshBasketSectionLabel,
} from "./FreshBasketVisuals";

export default function FreshBasketDatabaseIntegration() {
  return (
    <section id="database-integration" className="scroll-mt-32 px-6 py-10 md:py-12">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <FreshBasketSectionLabel
            label="03 // database.integration"
            title="RDS MySQL connection."
            subtitle="RDS MySQL stored produce and customer request data for the deployed vendor portal."
          />
        </Reveal>

        <Reveal delay={0.06}>
          <div className="mt-8 grid gap-5 lg:grid-cols-[minmax(0,0.68fr)_minmax(280px,0.32fr)]">
            <FreshBasketImageFrame
              src="/images/projects/AWS/ec2-rds-sql-query.png"
              alt="EC2 terminal connection to RDS MySQL with SQL query evidence"
              label="EC2 to RDS SQL query"
              caption="EC2 terminal query confirming the application could connect to RDS MySQL and read seeded produce/request data."
              aspectRatio="3/2"
              objectFit="contain"
            />

            <article className="rounded-[26px] border border-white/75 bg-white/66 p-6 shadow-[0_20px_64px_rgba(45,95,157,0.09)] backdrop-blur-xl">
              <p className="font-mono text-[0.58rem] font-bold uppercase tracking-[0.14em] text-[#2d5f9d]/70">
                Tables verified
              </p>
              <div className="mt-4 grid gap-2">
                {freshBasketDatabaseTables.map((table) => (
                  <span
                    key={table}
                    className="rounded-[16px] border border-[#d4e3ff]/58 bg-[#f8fbff]/72 px-4 py-3 font-mono text-[0.64rem] font-bold uppercase tracking-[0.1em] text-slate-600"
                  >
                    {table}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-sm leading-7 text-slate-600">
                The query evidence connects the deployed application layer to persistent RDS data rather than only showing an isolated AWS configuration screen.
              </p>
            </article>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
