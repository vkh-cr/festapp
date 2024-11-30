// _shared/emailClient.ts
import { SMTPClient } from "https://deno.land/x/denomailer/mod.ts";

const _SMTP_HOSTNAME = Deno.env.get("SMTP_HOSTNAME")!;
const _SMTP_USER_NAME = Deno.env.get("SMTP_USER_NAME")!;
const _SMTP_USER_PASSWORD = Deno.env.get("SMTP_USER_PASSWORD")!;
const _DEFAULT_EMAIL = Deno.env.get("DEFAULT_EMAIL")!;

const smtpClient = new SMTPClient({
  connection: {
    hostname: _SMTP_HOSTNAME,
    port: 465,
    tls: true,
    auth: {
      username: _SMTP_USER_NAME,
      password: _SMTP_USER_PASSWORD,
    },
  },
});

export async function sendEmail({
  to,
  subject,
  html,
  from = `${_DEFAULT_EMAIL}`,
}: {
  to: string;
  subject: string;
  html: string;
  from?: string;
}) {
  try {
    await smtpClient.send({
      from,
      to,
      subject,
      html,
    });
    console.log("Email sent successfully to:", to);
  } catch (error) {
    console.error("Failed to send email:", error);
  } finally {
    await smtpClient.close();
  }
}

export async function sendEmailWithSubs({
  to,
  subject,
  content,
  subs,
  from = `${_DEFAULT_EMAIL}`,
}: {
  to: string;
  subject: string;
  content: string;
  subs: Record<string, string>;
  from?: string;
}) {
  // Replace placeholders in content with values from subs
  let processedSubject = subject;
  let processedHtml = content;
  for (const [key, value] of Object.entries(subs)) {
    const placeholder = `{{${key}}}`;
    processedHtml = processedHtml.replaceAll(placeholder, value);
    processedSubject = processedSubject.replaceAll(placeholder, value);
  }

  // Use the sendEmail function to send the processed email
  await sendEmail({ to, subject: processedSubject, html: processedHtml, from });
}
