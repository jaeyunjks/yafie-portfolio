import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type ContactRequestBody = {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
  website?: unknown;
};

type ContactErrors = Partial<Record<"name" | "email" | "subject" | "message", string>>;

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function toStringValue(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatTimestamp(date: Date) {
  return new Intl.DateTimeFormat("en-AU", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "Australia/Sydney",
  }).format(date);
}

export async function POST(request: Request) {
  let body: ContactRequestBody | null = null;

  try {
    body = (await request.json()) as ContactRequestBody;
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request payload." },
      { status: 400 },
    );
  }

  const honeypot = toStringValue(body.website);

  if (honeypot) {
    return NextResponse.json({
      ok: true,
      message: "Thanks for reaching out.",
    });
  }

  const name = toStringValue(body.name);
  const email = toStringValue(body.email);
  const subject = toStringValue(body.subject);
  const message = toStringValue(body.message);

  const errors: ContactErrors = {};

  if (!name) {
    errors.name = "Please include your name.";
  }

  if (!email) {
    errors.email = "Please include an email address.";
  } else if (!isValidEmail(email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!subject) {
    errors.subject = "Please include a subject.";
  }

  if (!message) {
    errors.message = "Please include a short message.";
  }

  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      {
        ok: false,
        message: "Please check the form fields.",
        errors,
      },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !from || !to) {
    return NextResponse.json(
      {
        ok: false,
        message: "Email service is not configured on the server.",
      },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);
  const emailSubject = subject;
  const submittedAt = new Date();
  const timestamp = formatTimestamp(submittedAt);
  const escapedName = escapeHtml(name);
  const escapedEmail = escapeHtml(email);
  const escapedSubject = escapeHtml(subject);
  const escapedMessage = escapeHtml(message);
  const text = [
    "New portfolio contact",
    `Submitted: ${timestamp}`,
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Subject: ${subject}`,
    `Reply-To: ${email}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const html = `
    <div style="margin: 0; padding: 32px 16px; background: #f4f7fb; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; color: #0f172a;">
      <div style="max-width: 640px; margin: 0 auto; border-radius: 20px; overflow: hidden; background: #ffffff; border: 1px solid #dbe5f2; box-shadow: 0 18px 48px rgba(15, 23, 42, 0.08);">
        <div style="padding: 28px 32px 22px; background: linear-gradient(180deg, #f8fbff 0%, #ffffff 100%); border-bottom: 1px solid #e5edf7;">
          <div style="display: inline-block; margin-bottom: 14px; padding: 6px 10px; border-radius: 999px; background: #e9f2ff; color: #315d9b; font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;">
            Portfolio Inbox
          </div>
          <h1 style="margin: 0; font-size: 24px; line-height: 1.2; color: #0f172a;">New portfolio contact</h1>
          <p style="margin: 10px 0 0; font-size: 14px; line-height: 1.6; color: #526277;">
            A new message was submitted through the portfolio contact form.
          </p>
        </div>

        <div style="padding: 28px 32px 32px;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse: collapse;">
            <tr>
              <td style="padding: 0 0 14px; font-size: 13px; color: #64748b; width: 108px; vertical-align: top;">Name</td>
              <td style="padding: 0 0 14px; font-size: 15px; color: #0f172a; font-weight: 600;">${escapedName}</td>
            </tr>
            <tr>
              <td style="padding: 0 0 14px; font-size: 13px; color: #64748b; width: 108px; vertical-align: top;">Email</td>
              <td style="padding: 0 0 14px; font-size: 15px; color: #0f172a;">
                <a href="mailto:${escapedEmail}" style="color: #2563eb; text-decoration: none;">${escapedEmail}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 0 0 14px; font-size: 13px; color: #64748b; width: 108px; vertical-align: top;">Subject</td>
              <td style="padding: 0 0 14px; font-size: 15px; color: #0f172a;">${escapedSubject}</td>
            </tr>
            <tr>
              <td style="padding: 0; font-size: 13px; color: #64748b; width: 108px; vertical-align: top;">Timestamp</td>
              <td style="padding: 0; font-size: 15px; color: #0f172a;">${escapeHtml(timestamp)}</td>
            </tr>
          </table>

          <div style="margin-top: 24px; border: 1px solid #dbe5f2; border-radius: 16px; background: #f8fbff; overflow: hidden;">
            <div style="padding: 12px 16px; border-bottom: 1px solid #e5edf7; font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #5a6f8f;">
              Message
            </div>
            <div style="padding: 18px 16px; font-size: 15px; line-height: 1.75; color: #1e293b; white-space: pre-wrap;">${escapedMessage}</div>
          </div>
        </div>
      </div>
    </div>
  `;

  const { error, data } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: emailSubject,
    text,
    html,
  });

  if (error) {
    console.error("Resend contact email failed:", error);
    return NextResponse.json(
      {
        ok: false,
        message: "Unable to send the message right now.",
      },
      { status: 500 },
    );
  }

  return NextResponse.json({
    ok: true,
    message: "Message sent. I’ll get back to you soon.",
    id: data?.id,
  });
}
