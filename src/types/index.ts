import { IconType } from "react-icons";

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
