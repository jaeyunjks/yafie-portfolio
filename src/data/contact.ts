export const contactMeta = {
  email: "your.email@example.com",
  linkedin: "https://www.linkedin.com/in/your-profile",
  github: "https://github.com/your-username",
  resume: "#",
  location: "Sydney, Australia",
  status: "Open to 2026 internship / graduate roles",
  focus: "Software Engineering · Frontend · Testing · Product-minded systems",
  responseStyle: "Clear, professional, and project-focused",
};

export const contactMethods = [
  {
    key: "email",
    title: "Email",
    description:
      "Best for role opportunities, recruiter messages, project conversations, and formal contact.",
    cta: "Send email",
    href: `mailto:${contactMeta.email}`,
    value: contactMeta.email,
  },
  {
    key: "linkedin",
    title: "LinkedIn",
    description:
      "Best for professional networking, recruiter conversations, and work updates.",
    cta: "Open LinkedIn",
    href: contactMeta.linkedin,
    value: "Professional networking profile",
  },
  {
    key: "github",
    title: "GitHub",
    description:
      "Best for viewing code, repositories, and project development activity.",
    cta: "Open GitHub",
    href: contactMeta.github,
    value: "Code and repository activity",
  },
  {
    key: "resume",
    title: "Resume",
    description:
      "Download or view my resume for a concise summary of education, experience, projects, and technical skills.",
    cta: "View Resume",
    href: contactMeta.resume,
    value: "Resume / CV",
  },
] as const;

export const contactReasons = [
  "Internship / Graduate Role",
  "Software Engineering Opportunity",
  "Project Collaboration",
  "Portfolio / Project Question",
  "Other",
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

export const faqItems = [
  {
    question: "Where are you based?",
    answer: "Sydney, Australia.",
  },
  {
    question: "What roles are you interested in?",
    answer:
      "Software engineering, frontend development, full-stack development, testing/quality, and graduate or internship pathways.",
  },
  {
    question: "What should I include in a message?",
    answer:
      "A short description of the opportunity, role, project, timeline, and the best way to follow up.",
  },
  {
    question: "Can I view your projects first?",
    answer:
      "Yes - the Projects page includes selected software projects and case study work.",
  },
  {
    question: "Are you open to professional networking?",
    answer:
      "Yes - I'm open to connecting with software engineers, recruiters, mentors, and project collaborators.",
  },
] as const;
