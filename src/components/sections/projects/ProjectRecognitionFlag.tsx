import { Flag } from "lucide-react";

type ProjectRecognitionFlagProps = {
  text: string;
};

export default function ProjectRecognitionFlag({
  text,
}: ProjectRecognitionFlagProps) {
  return (
    <div className="mt-3 inline-flex max-w-full items-start gap-2 rounded-[16px] border border-[#f0d7a6]/85 bg-[#fff8ec] px-3 py-2 text-[0.68rem] font-bold leading-5 text-[#8b5a12] shadow-[0_10px_24px_rgba(180,132,47,0.08)]">
      <Flag
        size={14}
        strokeWidth={2.15}
        aria-hidden
        className="mt-0.5 shrink-0"
      />
      <span>{text}</span>
    </div>
  );
}
