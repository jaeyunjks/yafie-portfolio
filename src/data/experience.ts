import { ExperienceItem } from "@/types";

export const experience: ExperienceItem[] = [
  {
    id: "e1",
    category: "Work Experience",
    company: "Product Studio Co.",
    role: "Frontend Engineer",
    duration: "2024 - Present",
    location: "Sydney, AU",
    description: "Own UI quality, delivery speed, and frontend architecture for client-facing web products.",
    responsibilities: [
      "Develop production-ready pages with reusable components.",
      "Collaborate with designers and backend developers on contracts.",
      "Lead UI polish and responsive QA before release.",
    ],
    skills: ["React", "Next.js", "TypeScript"],
    achievements: "Reduced UI bug backlog by 35% through component standardization.",
  },
  {
    id: "e2",
    category: "Internship",
    company: "Digital Systems Lab",
    role: "Software Engineering Intern",
    duration: "2023 - 2024",
    location: "Hybrid",
    description: "Supported delivery of internal tools and dashboard experiences.",
    responsibilities: [
      "Built dashboard modules and role-based flows.",
      "Assisted test documentation and release validation.",
    ],
    skills: ["Tailwind", "Node.js", "Testing"],
    achievements: "Contributed to successful launch of an internal analytics tool.",
  },
  {
    id: "e3",
    category: "Volunteer",
    company: "Community Tech Hub",
    role: "Volunteer Web Developer",
    duration: "2022 - Present",
    location: "Remote",
    description: "Help non-profit teams modernize web presence and improve digital accessibility.",
    responsibilities: [
      "Delivered landing pages and forms for campaigns.",
      "Trained volunteers on content and layout maintenance.",
    ],
    skills: ["Accessibility", "UX", "Content Design"],
    achievements: "Enabled faster campaign publishing for volunteer-led teams.",
  },
];
