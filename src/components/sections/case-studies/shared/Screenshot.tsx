import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import type { CaseScreenshot } from "@/types";

/** A captioned product screenshot in a soft frame. See ADR 0001. */
export default function Screenshot({ shot }: { shot: CaseScreenshot }) {
  return (
    <Reveal>
      <figure className="overflow-hidden rounded-[22px] border border-white/75 bg-white/66 p-2 shadow-[0_22px_70px_rgba(45,95,157,0.12)] backdrop-blur-xl">
        <Image
          src={shot.src}
          alt={shot.alt}
          width={shot.width}
          height={shot.height}
          sizes="(min-width: 1280px) 1216px, 92vw"
          className="h-auto w-full rounded-[16px] border border-[#d4e3ff]/60"
        />
        <figcaption className="px-3 pb-2 pt-3 text-sm leading-6 text-slate-600">
          {shot.caption}
        </figcaption>
      </figure>
    </Reveal>
  );
}
