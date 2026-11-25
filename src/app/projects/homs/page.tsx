import { pageMetadata } from "@/data/seo";
import HomsCaseHero from "@/components/sections/case-studies/homs/HomsCaseHero";
import CardGrid from "@/components/sections/case-studies/shared/CardGrid";
import CaseSection from "@/components/sections/case-studies/shared/CaseSection";
import FlowSteps from "@/components/sections/case-studies/shared/FlowSteps";
import Screenshot from "@/components/sections/case-studies/shared/Screenshot";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import {
  homsAgentFlow,
  homsAgentGuardrails,
  homsAiServices,
  homsArchitecture,
  homsDeployIncident,
  homsFacts,
  homsLinks,
  homsQuality,
  homsSchemaRules,
  homsScope,
  homsScreenshots,
  homsTables,
} from "@/data/caseStudies/homs";

export const metadata = pageMetadata("/projects/homs");

const linkClass = "font-bold text-[#2d5f9d] underline-offset-4 hover:underline";

export default function HomsCaseStudyPage() {
  return (
    <div className="relative isolate">
      <AnimatedBackground />
      <HomsCaseHero />

      <CaseSection
        id="scope"
        label="01 // my.scope"
        title="What I owned."
        intro="Hospital staffing is unforgiving: a gap in the roster is a ward without enough people. The module had to be reliable, auditable and safe to run alongside four other services, and any AI help had to be checked by a person before it changed anything."
      >
        <CardGrid cards={homsScope} columns={4} />
      </CaseSection>

      <CaseSection
        id="architecture"
        label="02 // architecture"
        title="Three services, one module."
        intro={
          <>
            Every feature area in HOMS is split into three containers. My{" "}
            <a href={homsLinks.module} target="_blank" rel="noreferrer" className={linkClass}>
              Staff &amp; Shift module
            </a>{" "}
            follows the same pattern, and calls the shared AI services that run
            alongside the platform.
          </>
        }
      >
        <FlowSteps steps={homsArchitecture} ariaLabel="Staff and Shift module services" />
        <div className="mt-6">
          <CardGrid cards={homsAiServices} columns={4} />
        </div>
        <div className="mt-8">
          <Screenshot shot={homsScreenshots.roster} />
        </div>
      </CaseSection>

      <CaseSection
        id="data-model"
        label="03 // data.model"
        title="Rules live in the schema."
        intro={`${homsFacts.tables} related tables, ${homsFacts.indexes} indexes and ${homsFacts.auditTriggers} triggers. The API validates input too, but the database is the last line of defence.`}
      >
        <CardGrid cards={homsTables} columns={3} />
        <div className="mt-6">
          <CardGrid cards={homsSchemaRules} columns={4} />
        </div>
      </CaseSection>

      <CaseSection
        id="multi-agent"
        label="04 // multi.agent"
        title="AI suggests. A person decides."
        intro={
          <>
            I built the team&apos;s shared{" "}
            <a href={homsLinks.agentServer} target="_blank" rel="noreferrer" className={linkClass}>
              multi-agent server
            </a>
            . Each role runs on its own local model with its own
            version-controlled prompt, and the server never changes application
            data. {homsFacts.agentServerTests} tests cover the workflow.
          </>
        }
      >
        <FlowSteps steps={homsAgentFlow} ariaLabel="Multi-agent workflow" />
        <div className="mt-8 grid gap-6">
          <Screenshot shot={homsScreenshots.shiftDetail} />
          <Screenshot shot={homsScreenshots.humanReview} />
        </div>
        <div className="mt-6">
          <CardGrid cards={homsAgentGuardrails} columns={3} />
        </div>
        <div className="mt-8">
          <Screenshot shot={homsScreenshots.rag} />
        </div>
      </CaseSection>

      <CaseSection
        id="deployment"
        label="05 // deployment"
        title="Fixing writes on Azure."
        intro="I deployed the module to Azure Container Apps with my own deploy scripts. The first deploys surfaced a real deployment problem:"
      >
        <FlowSteps steps={homsDeployIncident} ariaLabel="Azure write failure: symptom, cause, fix" />
      </CaseSection>

      <CaseSection
        id="quality"
        label="06 // quality.security"
        title="Tested and checked before it ships."
      >
        <CardGrid cards={homsQuality} columns={4} />
      </CaseSection>
    </div>
  );
}
