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

/** Case-study building blocks (see docs/adr/0001). */
export type CaseCard = {
  title: string;
  body: string;
  /** Optional small mono tag above the title. */
  tag?: string;
};

export type FlowStep = {
  title: string;
  body: string;
};

export type CaseStat = {
  value: string;
  label: string;
};
