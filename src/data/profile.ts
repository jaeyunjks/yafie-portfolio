/**
 * Single source of truth for who Yafie is: identity, availability, summary,
 * education and links. Components import from here instead of hard-coding
 * their own copy, so a change (e.g. graduation status) is made once.
 *
 * Source: content brief of 25 Nov 2026 (see docs/UPDATE_SCOPE.md §1–2).
 */
export const profile = {
  name: "Yafie Farabi",
  firstName: "Yafie",
  location: "Sydney, NSW",
  role: "Software Engineer",
  headline: "Software Engineer | Full-Stack, Backend, Applied AI & Cloud",
  focusAreas: ["Full-stack", "Backend", "Applied AI", "Cloud & DevOps"],

  availability: {
    /** Hero badge on small screens. */
    short: "Open to graduate & junior SWE roles",
    /** Hero badge on larger screens. */
    long: "Open to Graduate & Junior Software Engineering Roles",
    /** Full sentence for CTAs. */
    sentence:
      "I'm looking for graduate or junior software engineering roles, available now or in the 2027 graduate intakes.",
  },

  summary: {
    /** One-paragraph pitch for the home hero. */
    short:
      "I build, test and ship full-stack, backend and AI applications in Python, TypeScript, C# and SQL, deployed to Azure and AWS with Docker and CI/CD.",
    /** Longer About-page introduction. */
    long:
      "I'm a final-year IT student at UTS who builds, tests and ships full-stack, backend and AI applications. I deploy to Azure and AWS with Docker and GitHub Actions, and put security checks (secret scanning, dependency audits, input validation) into the pipeline. On the AI side I build multi-agent workflows with MCP tool calling, schema-checked outputs, fallbacks and human approval gates, so the AI never changes data without sign-off.",
  },

  education: {
    institution: "University of Technology Sydney",
    program: "Bachelor of Information Technology",
    major: "Enterprise Software Development",
    subMajor: "Business Information Systems Management",
    period: "Feb 2025 – Dec 2026",
    status: "Coursework complete · graduating Dec 2026",
    wam: "85.25",
    gpa: "6.33 / 7",
  },

  recognition: [
    "1st Place, ServiceNow ANZ HackNow 2026",
    "UTS Software Engineering Tech Fest 2026 nominee",
  ],

  links: {
    github: "https://github.com/jaeyunjks",
    linkedin: "https://www.linkedin.com/in/yafiefarabi0710",
    portfolio: "https://yafie-portfolio-ten.vercel.app",
  },

  /** Only shown where the site mentions work rights. Never claim a granted visa. */
  workRights: "Full working rights in Australia; no sponsorship needed to start.",
} as const;
