import {
  assertEquals,
  assertRejects,
} from "https://deno.land/std@0.168.0/testing/asserts.ts";
import {
  createEmailDelivery,
  type EmailDeliveryDependencies,
  EmailDeliveryError,
  EmailTemplateNotFoundError,
} from "./emailDelivery.ts";

function createDependencies(
  overrides: Partial<EmailDeliveryDependencies> = {},
) {
  const sentMessages: Array<Record<string, unknown>> = [];
  const loggedEmails: Array<Record<string, unknown>> = [];
  const dependencies: EmailDeliveryDependencies = {
    resolveTemplateAndWrapper: () =>
      Promise.resolve({
        template: {
          id: 42,
          code: "TEST",
          subject: "Hello {{name}}",
          html: "<p>Hi  {{name}}</p>\n",
        },
        wrapper: { html: "<main>{{content}}</main>" },
      }),
    sendMail(message) {
      sentMessages.push(message);
      return Promise.resolve();
    },
    logEmail(entry) {
      loggedEmails.push(entry);
      return Promise.resolve();
    },
    ...overrides,
  };
  return { dependencies, sentMessages, loggedEmails };
}

const input = {
  to: "user@example.com",
  templateCode: "TEST",
  context: { organization: 9, unit: 3, occasion: 7 },
  substitutions: { name: "Ada" },
  from: "Festapp <info@festapp.net>",
  replyTo: "support@example.com",
  attachments: [{
    filename: "ticket.pdf",
    content: new Uint8Array([1, 2, 3]),
    contentType: "application/pdf",
    encoding: "binary",
  }],
};

Deno.test("deliverEmail resolves, wraps, sends, and logs through one path", async () => {
  const { dependencies, sentMessages, loggedEmails } = createDependencies();
  const result = await createEmailDelivery(dependencies)(input);

  assertEquals(sentMessages, [{
    from: input.from,
    to: input.to,
    subject: "Hello Ada",
    html: "<main><p>Hi Ada</p></main>",
    replyTo: input.replyTo,
    attachments: input.attachments,
  }]);
  assertEquals(loggedEmails, [{
    from: "",
    to: input.to,
    template: 42,
    organization: 9,
    occasion: 7,
    unit: 3,
  }]);
  assertEquals(result, { templateId: 42, logged: true });
});

Deno.test("deliverEmail preserves an inline template and adds the resolved wrapper", async () => {
  const { dependencies, sentMessages } = createDependencies();
  await createEmailDelivery(dependencies)({
    ...input,
    template: {
      id: 81,
      code: "TEST",
      subject: "Custom {{name}}",
      html: "<p>Edited {{name}}</p>",
    },
  });

  assertEquals(sentMessages[0].subject, "Custom Ada");
  assertEquals(sentMessages[0].html, "<main><p>Edited Ada</p></main>");
});

Deno.test("deliverEmail keeps legacy inline templates without a code compatible", async () => {
  const { dependencies, sentMessages } = createDependencies();
  await createEmailDelivery(dependencies)({
    ...input,
    templateCode: undefined,
    template: {
      id: null,
      subject: "Custom {{name}}",
      html: "<p>Edited {{name}}</p>",
    },
  });

  assertEquals(sentMessages[0].html, "<main><p>Edited Ada</p></main>");
});

Deno.test("deliverEmail preserves unwrapped templates", async () => {
  const { dependencies, sentMessages } = createDependencies({
    resolveTemplateAndWrapper: () =>
      Promise.resolve({
        template: {
          id: 42,
          code: "TEST",
          subject: "Hello {{name}}",
          html: "<p>Hi {{name}}</p>",
        },
        wrapper: null,
      }),
  });

  await createEmailDelivery(dependencies)(input);
  assertEquals(sentMessages[0].html, "<p>Hi Ada</p>");
});

Deno.test("deliverEmail never logs a rejected SMTP delivery", async () => {
  const smtpError = new Error("SMTP unavailable");
  const { dependencies, loggedEmails } = createDependencies({
    sendMail: () => Promise.reject(smtpError),
  });

  await assertRejects(
    () => createEmailDelivery(dependencies)(input),
    EmailDeliveryError,
    "Email transport failed",
  );
  assertEquals(loggedEmails, []);
});

Deno.test("deliverEmail reports logging failure without duplicating delivery", async () => {
  const { dependencies, sentMessages } = createDependencies({
    logEmail: () => Promise.reject(new Error("Database unavailable")),
  });

  const result = await createEmailDelivery(dependencies)(input);
  assertEquals(sentMessages.length, 1);
  assertEquals(result, { templateId: 42, logged: false });
});

Deno.test("deliverEmail rejects a missing stored template before SMTP", async () => {
  const { dependencies, sentMessages } = createDependencies({
    resolveTemplateAndWrapper: () => Promise.resolve({ template: null }),
  });

  await assertRejects(
    () => createEmailDelivery(dependencies)(input),
    EmailTemplateNotFoundError,
    "Template not found for code TEST",
  );
  assertEquals(sentMessages, []);
});
