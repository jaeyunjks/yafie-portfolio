const TODO_EMAIL = "TODO: add real email before deployment";
const TODO_LINKEDIN = "TODO: add LinkedIn URL before deployment";

export const contactMeta = {
  email: "yaafiiee.10@gmail.com",
  emailDisplay: "Email available on request",
  emailTodo: TODO_EMAIL,
  linkedin: "https://www.linkedin.com/in/yafiefarabi0710/",
  linkedinDisplay: "LinkedIn URL to be added",
  linkedinTodo: TODO_LINKEDIN,
  github: "https://github.com/jaeyunjks",
  resume: "",
  resumeDisplay: "Resume available on request",
  location: "Sydney, Australia",
  status: "Open to internship, graduate, and full-time roles",
  focus: "Software Engineering · Software Development · Cloud Engineering",
  responseStyle: "Clear, professional, and project-focused",
};

export const contactMethods = [
  {
    key: "email",
    title: "Email",
    description: "Best for role opportunities and project conversations.",
    cta: "Send email",
    href: `mailto:${contactMeta.email}`,
    value: "Direct email",
  },
  {
    key: "linkedin",
    title: "LinkedIn",
    description: "Professional updates and networking.",
    cta: "Open LinkedIn",
    href: contactMeta.linkedin,
    value: "Networking profile",
  },
  {
    key: "github",
    title: "GitHub",
    description: "Code, repositories, and project activity.",
    cta: "Open GitHub",
    href: contactMeta.github,
    value: "Repository activity",
  },
  {
    key: "resume",
    title: "Resume",
    description: "One-page summary of education, experience, and projects.",
    cta: "Available on request",
    href: contactMeta.resume,
    value: contactMeta.resumeDisplay,
    disabled: true,
  },
] as const;

export const availabilityCards = [
  {
    title: "Software Engineering Roles",
    description:
      "Interested in frontend, full-stack, testing, and software development roles where I can keep building practical engineering experience.",
  },
  {
    title: "Internships & Graduate Roles",
    description:
      "Open to early-career opportunities where I can contribute, learn quickly, and work with experienced teams.",
  },
  {
    title: "Product-minded Projects",
    description:
      "Interested in software that improves real workflows, user experience, and practical decision-making.",
  },
  {
    title: "Testing & Quality",
    description:
      "Open to roles or projects involving user-flow testing, debugging, documentation, and quality improvement.",
  },
  {
    title: "Team Collaboration",
    description:
      "Interested in environments where communication, ownership, feedback, and iteration matter.",
  },
] as const;
