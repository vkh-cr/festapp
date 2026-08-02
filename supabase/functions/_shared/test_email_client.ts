import {
  assertEquals,
  assertRejects,
} from "https://deno.land/std@0.168.0/testing/asserts.ts";
import { sendEmail, sendEmailWithSubs } from "./emailClient.ts";

const emailInput = {
  to: "user@example.com",
  subject: "Reset password",
  html: "<p>Reset</p>",
};

Deno.test("sendEmailWithSubs propagates SMTP failures when requested", async () => {
  const smtpError = new Error("SMTP unavailable");
  const failingSendEmail = (input: Parameters<typeof sendEmail>[0]) =>
    sendEmail(input, {
      sendMail: () => Promise.reject(smtpError),
    });
  await assertRejects(
    () =>
      sendEmailWithSubs({
        to: emailInput.to,
        subject: emailInput.subject,
        content: emailInput.html,
        subs: {},
        throwOnError: true,
      }, failingSendEmail),
    Error,
    smtpError.message,
  );
});

Deno.test("sendEmail preserves best-effort behavior by default", async () => {
  assertEquals(
    await sendEmail(emailInput, {
      sendMail: () => Promise.reject(new Error("SMTP unavailable")),
    }),
    undefined,
  );
});
