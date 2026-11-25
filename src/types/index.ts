import { IconType } from "react-icons";

export type TechItem = {
  name: string;
  /** Months of hands-on use; label and bar are derived from it. */
  months: number;
  status: "actively using" | "learning" | "familiar";
  icon: IconType;
  brandColor?: string;
};

export type TechCategory = {
  title: string;
  /** Short name for the mobile filter buttons. */
  shortLabel: string;
  label: string;
  description: string;
  items: TechItem[];
};
