"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { faqItems } from "@/data/contact";

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="scroll-mt-32 pb-20 lg:pb-24" id="contact-faq">
      <Reveal>
        <div className="mb-8 border-l border-[#8dbbff]/45 pl-4">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#2d5f9d]/75">
            05 // contact.faq
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
            Quick notes.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            A few useful details before reaching out.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-3">
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index;
          const panelId = `contact-faq-panel-${index}`;
          const buttonId = `contact-faq-button-${index}`;

          return (
            <Reveal key={item.question} delay={index * 0.04}>
              <article className="overflow-hidden rounded-[18px] border border-white/75 bg-white/72 shadow-[0_16px_48px_rgba(45,95,157,0.08)] backdrop-blur-xl">
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left outline-none transition-[background-color] duration-200 hover:bg-white/80 focus-visible:bg-white/82 focus-visible:ring-2 focus-visible:ring-[#8dbbff]/45 focus-visible:ring-offset-2 focus-visible:ring-offset-white/60 md:px-6"
                >
                  <div>
                    <p className="font-mono text-[0.56rem] font-bold uppercase tracking-[0.12em] text-[#2d5f9d]/70">
                      [{String(index + 1).padStart(2, "0")}]
                    </p>
                    <h3 className="mt-1 text-base font-extrabold tracking-tight text-slate-950 md:text-lg">
                      {item.question}
                    </h3>
                  </div>
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#d4e3ff]/70 bg-white/82 text-[#2d5f9d] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  >
                    <ChevronDown size={18} strokeWidth={2.2} aria-hidden />
                  </span>
                </button>
                {isOpen ? (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="border-t border-[#d4e3ff]/58 px-5 py-4 md:px-6"
                  >
                    <p className="max-w-3xl text-sm leading-7 text-slate-600">
                      {item.answer}
                    </p>
                  </div>
                ) : null}
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
