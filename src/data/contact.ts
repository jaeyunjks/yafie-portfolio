export const contactMeta = {
  email: "yaafiiee.10@gmail.com",
  linkedin: "https://www.linkedin.com/in/yafiefarabi0710/",
  github: "https://github.com/jaeyunjks",
  resume: "/Yafie-Resume.pdf",
  resumeDisplay: "One-page PDF",
  location: "Sydney, Australia",
  status: "Open to internship, graduate, and full-time roles",
  focus: "Software Engineering · Software Development · Cloud Engineering",
  responseStyle: "Clear, professional, and project-focused",
};

export const contactMethods = [
  {
    key: "email",
    label: "Primary",
    title: "Email",
    description:
      "Best for role opportunities, project conversations, and professional introductions.",
    value: contactMeta.email,
    primaryCta: "Send email",
    primaryHref: `mailto:${contactMeta.email}`,
    primaryDisabled: false,
    secondaryCta: "Direct email",
    secondaryHref: `mailto:${contactMeta.email}`,
    secondaryDisabled: false,
  },
  {
    key: "linkedin",
    label: "Professional",
    title: "LinkedIn",
    description: "Professional updates, networking, and opportunity discussions.",
    value: "Networking profile",
    primaryCta: "Open LinkedIn",
    primaryHref: contactMeta.linkedin,
    primaryDisabled: false,
    secondaryCta: "View profile",
    secondaryHref: contactMeta.linkedin,
    secondaryDisabled: false,
  },
  {
    key: "github",
    label: "Developer",
    title: "GitHub",
    description: "Code, repositories, and project activity.",
    value: "Repository activity",
    primaryCta: "Open GitHub",
    primaryHref: contactMeta.github,
    primaryDisabled: false,
    secondaryCta: "View repositories",
    secondaryHref: contactMeta.github,
    secondaryDisabled: false,
  },
  {
    key: "resume",
    label: "Document",
    title: "Resume",
    description: "One-page summary of education, experience, and projects.",
    value: contactMeta.resumeDisplay,
    primaryCta: "View resume",
    primaryHref: contactMeta.resume,
    primaryDisabled: false,
    secondaryCta: "Request resume",
    secondaryHref: undefined,
    secondaryDisabled: true,
  },
] as const;

export const contactOpenToFeatured = {
  title: "Software Engineering Roles",
  description:
    "Software engineering and software development roles are my main focus — building reliable, scalable, and useful web, mobile, and cloud-based products that solve real problems.",
  tags: [
    "Software Engineer",
    "Developer",
    "Frontend",
    "Backend",
    "Web",
    "Mobile",
    "Cloud",
    "QA",
  ],
} as const;

export const contactOpenToSignalCards = [
  {
    title: "Role Fit",
    description:
      "Graduate, junior, internship, and early-career software or IT opportunities.",
  },
  {
    title: "Working Style",
    description:
      "Product-minded delivery with practical engineering, testing, documentation, and clear communication.",
  },
] as const;

export const contactOpenToCards = [
  {
    title: "Frontend & Web Development",
    description:
      "Building responsive interfaces, clean UI systems, and polished user experiences for modern web applications.",
  },
  {
    title: "Backend & API Development",
    description:
      "Designing server-side logic, APIs, data flows, and integrations that support secure and reliable systems.",
  },
  {
    title: "QA, Testing & IT Operations",
    description:
      "Supporting quality through user-flow testing, debugging, documentation, process improvement, and operational awareness.",
  },
  {
    title: "Mobile, Cloud & Platform Work",
    description:
      "Open to mobile, cloud, and platform-focused work involving deployment, scalability, and practical product delivery.",
  },
  {
    title: "DevOps / Cloud Engineering",
    description:
      "Interested in deployment workflows, cloud infrastructure, environment configuration, CI/CD awareness, monitoring, and reliable release practices.",
  },
  {
    title: "Systems Analyst & Business Analysis",
    description:
      "Open to roles involving requirements analysis, stakeholder workflows, system documentation, process mapping, and translating business needs into technical solutions.",
  },
  {
    title: "IT Operations & Support",
    description:
      "Interested in systems, support, infrastructure awareness, service quality, and improving how technology runs in practice.",
  },
] as const;
