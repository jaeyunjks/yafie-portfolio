"use client";

import type { ChangeEvent, FormEvent, ReactNode } from "react";
import { useMemo, useState } from "react";
import { ArrowUpRight, Mail, Send } from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { contactMeta, contactReasons } from "@/data/contact";

type ContactFormState = {
  name: string;
  email: string;
  subject: string;
  reason: string;
  message: string;
};

type ContactFormErrors = Partial<Record<keyof ContactFormState, string>>;

const initialFormState: ContactFormState = {
  name: "",
  email: "",
  subject: "",
  reason: contactReasons[0],
  message: "",
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormState>(initialFormState);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const mailtoHref = useMemo(() => {
    const subject = form.subject || form.reason || "Portfolio enquiry";
    const body = [
      `Name: ${form.name || "[Your name]"}`,
      `Email: ${form.email || "[Your email]"}`,
      `Reason: ${form.reason || "[Reason for contact]"}`,
      "",
      form.message || "[Your message]",
    ].join("\n");

    return `mailto:${contactMeta.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [form]);

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setSubmitted(false);

    if (errors[name as keyof ContactFormState]) {
      setErrors((current) => ({
        ...current,
        [name]: undefined,
      }));
    }
  }

  function validateForm() {
    const nextErrors: ContactFormErrors = {};

    if (!form.name.trim()) {
      nextErrors.name = "Please include your name.";
    }

    if (!form.email.trim()) {
      nextErrors.email = "Please include an email address.";
    } else if (!isValidEmail(form.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!form.message.trim()) {
      nextErrors.message = "Please include a short message.";
    }

    return nextErrors;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validateForm();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    setSubmitted(true);
  }

  return (
    <section className="scroll-mt-32 pb-20 lg:pb-24" id="contact-form">
      <Reveal>
        <div className="mb-8 border-l border-[#8dbbff]/45 pl-4">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#2d5f9d]/75">
            03 // contact.form
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
            Send a message.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            A simple form for role opportunities, project discussions, or
            general professional contact.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-5 lg:grid-cols-[minmax(0,0.66fr)_minmax(280px,0.34fr)]">
        <Reveal>
          <article className="overflow-hidden rounded-[24px] border border-white/75 bg-white/74 p-6 shadow-[0_24px_80px_rgba(45,95,157,0.11)] backdrop-blur-xl md:p-7">
            <div className="mb-6 flex items-center justify-between gap-4 border-b border-[#d4e3ff]/58 pb-4">
              <div>
                <p className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#2d5f9d]/70">
                  contact.form
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Professional outreach, project questions, or opportunity
                  introductions.
                </p>
              </div>
              <span className="rounded-full border border-[#d4e3ff]/70 bg-white/68 px-2.5 py-1 font-mono text-[0.56rem] font-bold uppercase tracking-[0.12em] text-slate-500">
                client-side only
              </span>
            </div>

            <form className="grid gap-5" noValidate onSubmit={handleSubmit}>
              <div className="grid gap-5 md:grid-cols-2">
                <FieldWrapper
                  id="contact-name"
                  label="Name"
                  error={errors.name}
                  required
                >
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "contact-name-error" : undefined}
                    className={inputClassName(Boolean(errors.name))}
                    placeholder="Your name"
                  />
                </FieldWrapper>

                <FieldWrapper
                  id="contact-email"
                  label="Email"
                  error={errors.email}
                  required
                >
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "contact-email-error" : undefined}
                    className={inputClassName(Boolean(errors.email))}
                    placeholder="your.email@example.com"
                  />
                </FieldWrapper>
              </div>

              <div className="grid gap-5 md:grid-cols-[minmax(0,0.6fr)_minmax(220px,0.4fr)]">
                <FieldWrapper id="contact-subject" label="Subject" error={errors.subject}>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    className={inputClassName(Boolean(errors.subject))}
                    placeholder="A short summary"
                  />
                </FieldWrapper>

                <FieldWrapper id="contact-reason" label="Reason for contact" error={errors.reason}>
                  <select
                    id="contact-reason"
                    name="reason"
                    value={form.reason}
                    onChange={handleChange}
                    className={inputClassName(Boolean(errors.reason))}
                  >
                    {contactReasons.map((reason) => (
                      <option key={reason} value={reason}>
                        {reason}
                      </option>
                    ))}
                  </select>
                </FieldWrapper>
              </div>

              <FieldWrapper
                id="contact-message"
                label="Message"
                error={errors.message}
                required
              >
                <textarea
                  id="contact-message"
                  name="message"
                  rows={7}
                  value={form.message}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "contact-message-error" : undefined}
                  className={`${inputClassName(Boolean(errors.message))} resize-y`}
                  placeholder="Share the opportunity, project context, timeline, or the best next step."
                />
              </FieldWrapper>

              <div className="flex flex-col gap-3 border-t border-[#d4e3ff]/58 pt-5 sm:flex-row sm:flex-wrap">
                <Button type="submit" className="w-full sm:w-auto">
                  Send message
                  <Send size={16} aria-hidden />
                </Button>
                <a
                  href={mailtoHref}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200/80 bg-white/72 px-6 py-3 text-sm font-extrabold text-slate-800 shadow-sm backdrop-blur-md transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md sm:w-auto"
                >
                  Open email app
                  <Mail size={16} aria-hidden />
                </a>
              </div>

              {submitted ? (
                <div
                  aria-live="polite"
                  className="rounded-[16px] border border-emerald-200/80 bg-emerald-50/90 px-4 py-3 text-sm font-semibold leading-6 text-emerald-900"
                >
                  Thanks — your message is ready. Please connect this form to
                  an email service before production.
                </div>
              ) : null}
            </form>
          </article>
        </Reveal>

        <Reveal delay={0.08}>
          <aside className="grid gap-4 self-start">
            <article className="overflow-hidden rounded-[22px] border border-white/75 bg-white/72 p-5 shadow-[0_18px_55px_rgba(45,95,157,0.08)] backdrop-blur-xl">
              <p className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#2d5f9d]/70">
                contact.notes
              </p>
              <h3 className="mt-3 text-lg font-extrabold tracking-tight text-slate-950">
                Professional outreach works best when it is specific.
              </h3>
              <ul className="mt-4 grid gap-3 text-sm leading-7 text-slate-600">
                <li>Role, project, or opportunity type</li>
                <li>Relevant timeline or start window</li>
                <li>Key responsibilities or collaboration context</li>
                <li>Best follow-up path</li>
              </ul>
            </article>

            <article className="overflow-hidden rounded-[22px] border border-white/75 bg-white/72 p-5 shadow-[0_18px_55px_rgba(45,95,157,0.08)] backdrop-blur-xl">
              <p className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#2d5f9d]/70">
                integration note
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                This form currently validates on the client only.
                Connect it to an email or form service before production.
              </p>
              <a
                href={`mailto:${contactMeta.email}`}
                className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-[#2d5f9d] transition-colors duration-200 hover:text-[#24548f]"
              >
                Use direct email instead
                <ArrowUpRight size={16} aria-hidden />
              </a>
            </article>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}

function FieldWrapper({
  id,
  label,
  error,
  required,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2.5 block text-sm font-bold tracking-tight text-slate-900"
      >
        {label}
        {required ? <span className="ml-1 text-[#2d5f9d]">*</span> : null}
      </label>
      {children}
      {error ? (
        <p
          id={`${id}-error`}
          className="mt-2 text-sm font-medium text-rose-700"
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}

function inputClassName(hasError: boolean) {
  return [
    "w-full rounded-[18px] border bg-white/85 px-4 py-3.5 text-sm text-slate-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] outline-none transition-[border-color,box-shadow,background-color] duration-200 placeholder:text-slate-400",
    hasError
      ? "border-rose-200 focus:border-rose-300 focus:ring-4 focus:ring-rose-100"
      : "border-[#d4e3ff]/72 focus:border-[#8dbbff]/55 focus:ring-4 focus:ring-[#dfeeff]",
  ].join(" ");
}

// TODO: Connect this form to a real email or form submission service before production use.
