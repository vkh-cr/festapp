import { assertEquals, assertRejects } from "jsr:@std/assert@1";
import {
  AppLinksStatusUpdateError,
  deliverAppLinks,
  isCsmOrganization,
} from "./appLinksDelivery.ts";

const input = {
  userId: "00000000-0000-0000-0000-000000000001",
  occasionId: 643,
  unitId: 27,
  organizationId: 9,
  deliveryEmail: "participant@example.test",
  appName: "CSM Ostrava",
  appLinks: '<p><a href="https://example.test">Otevřít</a></p>',
  fromEmail: "info@example.test",
};

Deno.test("application links are restricted to the CSM organization", () => {
  assertEquals(isCsmOrganization(9), true);
  assertEquals(isCsmOrganization(1), false);
});

Deno.test("application links delivery exposes only appLinks and marks after send", async () => {
  const calls: string[] = [];
  let emailInput: Record<string, unknown> | undefined;

  await deliverAppLinks(input, {
    deliverEmail(value) {
      calls.push("deliver");
      emailInput = value as unknown as Record<string, unknown>;
      return Promise.resolve();
    },
    markSent(occasionId, userId) {
      calls.push("mark");
      assertEquals([occasionId, userId], [input.occasionId, input.userId]);
      return Promise.resolve();
    },
  });

  assertEquals(calls, ["deliver", "mark"]);
  assertEquals(emailInput?.templateCode, "APP_LINKS");
  assertEquals(emailInput?.recipientUser, input.userId);
  assertEquals(emailInput?.substitutions, { appLinks: input.appLinks });
});

Deno.test("failed application links delivery is not marked as sent", async () => {
  let marked = false;

  await assertRejects(
    () =>
      deliverAppLinks(input, {
        deliverEmail: () => Promise.reject(new Error("smtp unavailable")),
        markSent: () => {
          marked = true;
          return Promise.resolve();
        },
      }),
    Error,
    "smtp unavailable",
  );

  assertEquals(marked, false);
});

Deno.test("status updates retry without redelivering the email", async () => {
  let deliveries = 0;
  let marks = 0;

  await assertRejects(() =>
    deliverAppLinks(input, {
      deliverEmail: () => {
        deliveries += 1;
        return Promise.resolve();
      },
      markSent: () => {
        marks += 1;
        return Promise.reject(new Error("database unavailable"));
      },
    }), AppLinksStatusUpdateError);

  assertEquals(deliveries, 1);
  assertEquals(marks, 3);
});
