import { IconType } from "react-icons";

export type Project = {
  id: string;
  title: string;
  summary: string;
  caseStudy: string;
  category: string;
  stack: string[];
  featured?: boolean;
};

export type ExperienceItem = {
  id: string;
  category: "Work Experience" | "Internship" | "Volunteer";
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  responsibilities: string[];
  skills: string[];
  achievements: string;
};

export type SkillItem = {
  title: string;
  description: string;
};

export type TechItem = {
  name: string;
  duration: string;
  exposure: number;
  status: "actively using" | "learning" | "familiar";
  icon: IconType;
  brandColor?: string;
};

export type TechCategory = {
  title: string;
  label: string;
  description: string;
  items: TechItem[];
};
