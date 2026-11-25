# Portfolio Update — Scope (Nov 2026)

> A mini PRD. It says **what** changes and **why** before any code is written.
>
> **Source of truth:** Yafie's content brief from 25 Nov 2026, taken from the master resume (`resume-master.tex`, built 20 Nov 2026) with claims checked against Git history.
> Where this doc and the current site or `public/Yafie-Resume.pdf` disagree, **this doc wins**. The PDF in `public/` is now outdated.

## Goal
The site tells the same verified story as the master resume, aimed at **graduate or junior software engineering roles** (full-stack, backend, applied AI, cloud and DevOps, enterprise platforms).

## Content rules (non-negotiable)
- Use only the verified wording and numbers below. Don't inflate them (for example, the old "12+ interfaces" claim is dropped).
- Show team size and *your* ownership for every team project. Say what teammates built where it matters (the HOMS RAG service, Café inventory).
- Work rights, only if the site mentions them: "Full working rights in Australia; no sponsorship needed to start." **Never** claim the 485 visa has been granted.
- No phone number or email address in page copy beyond what the contact page already does on purpose.

---

## 1. Identity (hero, About, metadata)
- **Name:** Yafie Farabi, Sydney NSW
- **Headline:** Software Engineer | Full-Stack, Backend, Applied AI & Cloud
- **Status:** Final-year BIT at UTS. Coursework is complete and graduation is Dec 2026 (ceremony around Apr/May 2027). Looking for graduate or junior SWE roles, available now or in the 2027 intakes.
- **Links:** GitHub `github.com/jaeyunjks`, LinkedIn `linkedin.com/in/yafiefarabi0710`, portfolio `yafie-portfolio-ten.vercel.app`
- **Summary:** Builds, tests and ships full-stack, backend and AI applications. Works mainly in Python, JavaScript/TypeScript, C# and SQL. Deploys to Azure and AWS with Docker and GitHub Actions CI/CD, with security checks in the pipeline (secret scanning, dependency audits, input validation). Builds multi-agent workflows with MCP tool calling, schema-checked outputs, fallbacks and human approval gates, so the AI never changes data without sign-off. Uses Claude Code and Codex every day and reviews and tests every change they make. 1st place at ServiceNow ANZ HackNow 2026.

## 2. Education
UTS, Bachelor of Information Technology, Feb 2025 – Dec 2026 (expected). Major: Enterprise Software Development; sub-major: Business Information Systems Management. **WAM 85.25, GPA 6.33/7.**
Relevant subjects: Advanced Software Development (prompt engineering, specification-driven AI), Cloud Computing & SaaS (AWS, Salesforce), Application Development with .NET, Information Security & Management (team security risk assessment of Exchange 2016 OWA).

## 3. Experience and projects

| # | Item | Dates · team | Site status | Action |
|---|---|---|---|---|
| 1 | **SDS Modernisation**: Software Engineer (Frontend & Full-Stack Integration) | Feb – Jul 2026 · client-facing Agile team | Exists: role title, "Present", and stack (TS/Vite/Pytest) are all wrong | **Rewrite**: title, end date, stack, bullets; recheck the case-study claims |
| 2 | **HOMS**: Staff & Shift Management + multi-agent server | Aug – Oct 2026 · 5-person team · public repo | Missing | **Add** a project card and a case study (strongest engineering story) |
| 3 | **Silver Service**: 1st place, ServiceNow ANZ HackNow 2026 | Jul 2026 · 4-person team | Missing | **Add** a project card and a home-page achievement |
| 4 | **Lumora AI**: AI study companion iOS app | Mar – May 2026 · 3-person team | Exists, framed as design | **Reframe** around the AI and grounding engineering; fix the stack (no NestJS/Prisma claims) |
| 5 | **FreshBasket Ordering Portal on AWS** | May 2026 · solo | Exists | **Update**: note the live site is offline; add transactional orders and price snapshots |
| 6 | **Café Ordering & Operations App** | Sep – Oct 2026 · 3-person team · private repo | Missing | **Add** a project card (no repo link) |
| 7 | **HR Leave Request App on Salesforce** | May 2026 · 3-person team | Missing | **Add** a small project card |

### Verified details
**1. SDS Modernisation.** UTS Software Development Studio; the client is a UTS subject coordinator. React, JavaScript, Flask, SQLite.
- Built the React student and admin workflows (catalogue, join requests, rosters, imports and exports, reports, project status) from client requirements and connected them to the Flask REST API. Wrote early Flask routes and SQLite schema changes.
- Ran QA: wrote Vitest + React Testing Library unit and integration tests, fixed the defects they found, and took part in sprint reviews and the client handover.
- Nominated for the UTS Software Engineering Tech Fest 2026 showcase.

**2. HOMS.** `github.com/jaeyunjks/hospital-operations-management-system`. Python, Flask, SQLite, HTMX, Docker, GitHub Actions, Azure Container Apps, Ollama, MCP, RAG.
- Owned the Staff & Shift module as 3 services (HTMX front end, Flask REST API, SQLite database service): rosters, shift planning, availability, coverage, and leave requests with manager review. **1,040 passing Pytest tests.**
- Schema: 5 related tables, foreign-key rules, CHECK and UNIQUE constraints, 12 indexes, audit triggers; parameterised queries and transactions.
- Deployed to Azure Container Apps with deploy scripts he wrote. Fixed write failures on Azure Files with a single replica, shutting down old revisions before each deploy, and startup tests.
- Fixed the team-wide security findings (URL validation, pip-audit upgrades); set up integration CI and pre-commit security checks.
- Built the whole shared multi-agent server: Planner → Worker → Reviewer, each with its own Ollama model and version-controlled prompt. Schema-constrained output, grounding checks, corrective re-prompts, a labelled fallback, a human approval gate, an audit trail, a CLI and an HTTP API. **66 tests.**
- Scaffolded the shared MCP server and added a ward-occupancy tool. Integrated the team's RAG service (a teammate built it).

**3. Silver Service.** Co-built an AI agent prototype that helps older Australians and their trusted circle access citizen services. Designed the eligibility, consent and permission models in ServiceNow AI Agent Studio, Build Agent and Flow Designer, with human approval.

**4. Lumora AI.** `github.com/jaeyunjks/SmartStudyCompanion`. Swift, SwiftUI, MVVM, XCTest, OpenAI-powered REST API.
- Built the app's AI features (**52 of 53 app commits**): chat grounded in the student's own notes, PDFs and images, with history; structured summaries; flashcards and quizzes with adjustable count and difficulty.
- Context control: the study space's own notes first, otherwise its uploaded files, and the app tells the user when there's nothing to ground on.
- Nominated for UTS Tech Fest 2026.

**5. FreshBasket.** `github.com/jaeyunjks/AWSFreshBasket`. Node.js, Express, MySQL on RDS, Elastic Beanstalk, EC2, a custom VPC across 2 AZs, load balancer, auto scaling, SNS. Parameterised SQL; transactional orders with price snapshots. **The live site is no longer running.**

**6. Café Ordering & Operations.** C#, .NET 9, ASP.NET Core, Blazor, EF Core, SQLite, NUnit. Owned order operations: order domain and service layer, EF Core migration, staff dashboard, LINQ sales analytics, Open Food Facts API integration, NUnit tests. Teammates built inventory and waste tracking.

**7. HR Leave Request (Salesforce).** Custom objects, validation rules, Flow Builder automation (manager review tasks, notifications, a time-based reminder), role-based security. Declarative only, no Apex.

## 4. Skills (replace `skills.ts` / `techStack.ts` categories)
- **Languages:** Python, JavaScript, TypeScript, SQL, C#, Java, Swift
- **Front end & APIs:** React, HTMX, Blazor, HTML/CSS; Node.js/Express, Flask, ASP.NET Core, REST APIs
- **Databases:** PostgreSQL, MySQL (RDS), SQLite; schema design, indexing, transactions, EF Core migrations
- **Cloud, DevOps & CI/CD:** Azure Container Apps, AWS (Elastic Beanstalk, EC2, RDS, VPC, SNS), Docker/Compose, GitHub Actions
- **AI-native engineering:** multi-agent orchestration, MCP tool calling, RAG integration, JSON-schema structured outputs, validation and fallbacks, human-in-the-loop approval, prompt engineering; Ollama, OpenAI API; Claude Code, Codex
- **Testing & security:** Pytest, Vitest, React Testing Library, NUnit, XCTest; secret scanning, dependency audits, input/URL validation, parameterised SQL
- **Platforms & tools:** ServiceNow AI Agent Studio, Salesforce Platform, Git, Jira, Agile/Scrum

## 5. Achievements
- 1st place, ServiceNow ANZ HackNow 2026 (Silver Service)
- Nominated for UTS Software Engineering Tech Fest 2026 (SDS and Lumora AI). This replaces the "Details to be added" entry.

---

## Decisions (answered 25 Nov 2026)
1. **FocusPop and Portfolio Redesign:** keep both, moved into a smaller **"Other projects"** section.
2. **Team Leader and Supervisor:** keep under **"Supporting experience"**.
3. **Resume PDF:** keep the current file as a placeholder; Yafie will replace it. The download path must stay `public/Yafie-Resume.pdf` so the swap needs no code change.
4. **HackNow:** photos exist; Yafie will send them when we reach the Silver Service PR.
5. **Case studies:** HOMS gets a full case study. SDS is corrected after Yafie verifies the discrepancy list (see below).

## SDS case study: corrections (verified 25 Nov 2026)
**Fix everywhere (case study, project card, Work entry):**
- Role: Software Engineer (Frontend & Full-Stack Integration)
- Timeline: Feb – Jul 2026, finished (status `past`, not `current`; not "Live / Actively Maintained", but "Delivered & handed over")
- Stack: React, JavaScript, Flask, SQLite, Vitest, React Testing Library (remove TypeScript, Vite, Pytest)
- Contributions: use the verified bullets from §3.1 (student and admin workflows, early Flask routes and SQLite schema, team QA lead with Vitest and RTL, sprint reviews and handover)
- Team: six-person, client-facing Agile team
- Add: Tech Fest 2026 nomination; the client was happy with the handover

**Client disclosure:** don't name the role. Say "an academic client at UTS".

**Feature ownership (label the showcase honestly):**
- Built by Yafie: Studio activities, Project detail, Join request flow, My applications (student side)
- Shared with another frontend dev: Admin dashboard
- Built by teammates: Project EOI form, Client dashboard (keep them as "system context", labelled team-built)

**Keep as is:** showcased workflows (don't add rosters, imports or reports, because that data is private), the tutor user group (tutors supervised the teams), the sprint timeline, and the testing section.

**Replace "Next improvements"** with **"What this experience proved"**: working like a full-time engineer in a six-person team, talking directly to the client, delivering and handing over to a satisfied client, and earning the Tech Fest nomination. Lessons carried into later projects (HOMS, Café) can go here; no "I'd redo this project" list.

## Out of scope (for now)
- Visual redesign: only content and engineering hygiene change.
- Dark mode (the "coming soon" toast is a separate task).

## Delivery plan (one PR each, CI green before merge)
1. Engineering setup: branch workflow, scripts, CI (Phase 1)
2. Data validation and tests (Phase 2)
3. Identity, education and skills
4. Fix existing entries (SDS, Lumora, FreshBasket) and achievements
5. Add new projects (HOMS, Silver Service, Café, Salesforce)
6. HOMS case study, plus the SDS case-study correction
7. Replace the resume PDF and update metadata/SEO

## Known polish items (deferred)
- **Tech stack card heights:** cards in a row stretch to match the tallest, so short categories (Databases, 3 items) show empty space. Options: drop `h-full` stretching, or reorder so similar-length cards share a row. Deferred by Yafie on 25 Nov 2026; don't pad with filler skills.

## Decision: Lumora backend (25 Nov 2026)
The new resume lists NestJS/TypeScript, PostgreSQL and Prisma for Lumora. Teammates built that backend; Yafie built the app's AI features and integrated the app with it. Site and resume now both name it, **always credited as team-built**. `tests/projects.test.ts` enforces the credit.
