"use client";

import type { ChangeEvent, FormEvent, ReactNode } from "react";
import { useMemo, useState } from "react";
import { AlertCircle, CheckCircle2, Loader2, Mail, Send } from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { contactMeta } from "@/data/contact";

type ContactFormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
  website: string;
};

type ContactFormErrors = Partial<Record<keyof ContactFormState, string>>;

const initialFormState: ContactFormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
  website: "",
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormState>(initialFormState);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitState, setSubmitState] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [submitMessage, setSubmitMessage] = useState("");
  const hasContactEmail = Boolean(contactMeta.email);

  const mailtoHref = useMemo(() => {
    if (!contactMeta.email) {
      return "";
    }

    const subject = form.subject || "Portfolio enquiry";
    const body = [
      `Name: ${form.name || "[Your name]"}`,
      `Email: ${form.email || "[Your email]"}`,
      `Subject: ${form.subject || "[Subject]"}`,
      "",
      form.message || "[Your message]",
    ].join("\n");

    return `mailto:${contactMeta.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [form.email, form.message, form.name, form.subject]);

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setSubmitState("idle");
    setSubmitMessage("");

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

    if (!form.subject.trim()) {
      nextErrors.subject = "Please include a subject.";
    }

    if (!form.message.trim()) {
      nextErrors.message = "Please include a short message.";
    }

    return nextErrors;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validateForm();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitState("error");
      setSubmitMessage("Please check the highlighted fields.");
      return;
    }

    if (form.website.trim()) {
      setSubmitState("success");
      setSubmitMessage("Thanks — your message has been received.");
      setForm(initialFormState);
      return;
    }

    setSubmitState("loading");
    setSubmitMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          subject: form.subject.trim(),
          message: form.message.trim(),
          website: form.website.trim(),
        }),
      });

      const result = (await response.json()) as
        | { ok: true; message?: string }
        | { ok: false; message?: string; errors?: ContactFormErrors };

      if (!response.ok || !result.ok) {
        if (!result.ok && result.errors) {
          setErrors((current) => ({ ...current, ...result.errors }));
        }

        setSubmitState("error");
        setSubmitMessage(
          (!result.ok && result.message) || "Something went wrong sending the message.",
        );
        return;
      }

      setSubmitState("success");
      setSubmitMessage(result.message || "Message sent. I’ll get back to you soon.");
      setForm(initialFormState);
      setErrors({});
    } catch {
      setSubmitState("error");
      setSubmitMessage("Something went wrong sending the message.");
    }
  }

  return (
    <section className="scroll-mt-32 pb-20 lg:pb-24" id="contact-form">
      <Reveal>
        <div className="mb-8 border-l border-[#8dbbff]/45 pl-4">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#2d5f9d]/75">
            04 // contact.form
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
            Send a message.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            A simple form for role opportunities, project discussions, or
            professional contact.
          </p>
        </div>
      </Reveal>

      <Reveal>
        <article className="relative overflow-hidden rounded-[28px] border border-white/78 bg-white/74 shadow-[0_24px_80px_rgba(45,95,157,0.1)] backdrop-blur-xl">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_84%_12%,rgba(198,183,255,0.2),transparent_30%),radial-gradient(circle_at_12%_86%,rgba(141,187,255,0.18),transparent_36%)]" />

          <div className="relative z-10 grid gap-0 lg:grid-cols-[minmax(0,0.76fr)_minmax(0,1.24fr)]">
            <aside className="border-b border-[#d4e3ff]/58 p-6 lg:border-b-0 lg:border-r lg:p-7">
              <div className="rounded-[22px] border border-[#d4e3ff]/62 bg-white/72 p-5 shadow-[0_16px_42px_rgba(45,95,157,0.06)]">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#2d5f9d]/70">
                    contact.context
                  </p>
                  <span className="rounded-full border border-[#d4e3ff]/70 bg-white/80 px-2.5 py-1 font-mono text-[0.56rem] font-bold uppercase tracking-[0.12em] text-slate-500">
                    client-side only
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-extrabold tracking-tight text-slate-950">
                  Let&apos;s build something great together.
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Feel free to reach out for opportunities, collaborations, project
                  questions, or professional introductions.
                </p>

                <div className="mt-6 grid gap-3">
                  {[
                    "Usually respond within 24–48 hours",
                    "Based in Sydney, Australia",
                    "Open to software, web, mobile, cloud, QA, and IT opportunities",
                  ].map((note) => (
                    <div
                      key={note}
                      className="flex items-start gap-3 rounded-[16px] border border-[#d4e3ff]/62 bg-[#f8fbff]/74 p-3.5"
                    >
                      <span className="mt-0.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[#2d5f9d]" />
                      <p className="text-sm font-semibold leading-6 text-slate-700">
                        {note}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-[18px] border border-[#d4e3ff]/62 bg-[linear-gradient(135deg,rgba(255,255,255,0.86),rgba(248,251,255,0.78))] p-4">
                  <p className="font-mono text-[0.56rem] font-bold uppercase tracking-[0.13em] text-[#2d5f9d]/70">
                    Best for
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-slate-700">
                    Recruiters, hiring teams, collaborations, and project-focused conversations.
                  </p>
                </div>
              </div>
            </aside>

            <div className="p-6 lg:p-7">
              <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-[#d4e3ff]/58 pb-4">
                <div>
                  <p className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#2d5f9d]/70">
                    contact.form
                  </p>
                  <p className="mt-2 text-sm text-slate-500">
                    Professional outreach, project questions, or opportunity introductions.
                  </p>
                </div>
                <span className="rounded-full border border-[#d4e3ff]/70 bg-white/68 px-2.5 py-1 font-mono text-[0.56rem] font-bold uppercase tracking-[0.12em] text-slate-500">
                  secure form
                </span>
              </div>

              <form className="grid gap-5" noValidate onSubmit={handleSubmit}>
                <div className="grid gap-5 md:grid-cols-2">
                  <FieldWrapper id="contact-name" label="Name" error={errors.name} required>
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

                  <FieldWrapper id="contact-email" label="Email" error={errors.email} required>
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

                <FieldWrapper id="contact-subject" label="Subject" error={errors.subject} required>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.subject)}
                    aria-describedby={errors.subject ? "contact-subject-error" : undefined}
                    className={inputClassName(Boolean(errors.subject))}
                    placeholder="A short summary"
                  />
                </FieldWrapper>

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

                <div className="hidden">
                  <label htmlFor="contact-website">Website</label>
                  <input
                    id="contact-website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.website}
                    onChange={handleChange}
                  />
                </div>

                <div className="flex flex-col gap-3 border-t border-[#d4e3ff]/58 pt-5 sm:flex-row sm:flex-wrap">
                  <Button
                    type="submit"
                    className="w-full sm:w-auto"
                    disabled={submitState === "loading"}
                  >
                    {submitState === "loading" ? "Sending..." : "Send message"}
                    {submitState === "loading" ? (
                      <Loader2 size={16} aria-hidden className="animate-spin" />
                    ) : (
                      <Send size={16} aria-hidden />
                    )}
                  </Button>
                  {hasContactEmail ? (
                    <a
                      href={mailtoHref}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200/80 bg-white/72 px-6 py-3 text-sm font-extrabold text-slate-800 shadow-sm backdrop-blur-md transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md sm:w-auto"
                    >
                      Open email app
                      <Mail size={16} aria-hidden />
                    </a>
                  ) : (
                    <span
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200/80 bg-white/58 px-6 py-3 text-sm font-extrabold text-slate-500 shadow-sm backdrop-blur-md sm:w-auto"
                      aria-disabled="true"
                    >
                      Email available on request
                      <Mail size={16} aria-hidden />
                    </span>
                  )}
                </div>

                <p className="text-xs leading-6 text-slate-500">
                  This form is sent securely through the server.
                </p>

                {submitState !== "idle" ? (
                  <div
                    aria-live="polite"
                    className={`flex items-start gap-3 rounded-[16px] px-4 py-3 text-sm font-semibold leading-6 ${submitState === "success"
                        ? "border border-emerald-200/80 bg-emerald-50/90 text-emerald-900"
                        : submitState === "error"
                          ? "border border-rose-200/80 bg-rose-50/90 text-rose-900"
                          : "border border-slate-200/80 bg-white/72 text-slate-700"
                      }`}
                  >
                    {submitState === "success" ? (
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0" aria-hidden />
                    ) : submitState === "error" ? (
                      <AlertCircle size={16} className="mt-0.5 shrink-0" aria-hidden />
                    ) : (
                      <Loader2 size={16} className="mt-0.5 shrink-0 animate-spin" aria-hidden />
                    )}
                    <span>{submitMessage}</span>
                  </div>
                ) : null}
              </form>
            </div>
          </div>
        </article>
      </Reveal>
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
