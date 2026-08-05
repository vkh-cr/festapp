import { assertEquals } from "jsr:@std/assert@1";
import { buildNotificationPayload } from "./notificationPayload.ts";

const base = {
  appId: "existing-app",
  defaultUrl: "https://example.test",
  occasionLink: "csmostrava2026",
  targetPath: "news",
  installationGeneration: "test_generation_v1",
  heading: "Heading",
  content: "Content",
};

function matchesFilters(
  filters: Array<{ field?: string; key?: string; value?: string }>,
  tags: Record<string, string>,
) {
  return filters
    .filter((filter) => filter.field === "tag")
    .every((filter) => tags[filter.key!] === filter.value);
}

Deno.test("broadcast requires both configured audience tags", () => {
  const payload = buildNotificationPayload(base);
  const filters = payload.filters!;

  assertEquals(
    matchesFilters(filters, {
      app_generation: "test_generation_v1",
      occasion: "csmostrava2026",
    }),
    true,
  );
  assertEquals(matchesFilters(filters, { occasion: "csmostrava2026" }), false);
  assertEquals(
    matchesFilters(filters, {
      app_generation: "test_generation_v1",
      occasion: "wrong-occasion",
    }),
    false,
  );
  assertEquals(
    matchesFilters(filters, {
      app_generation: "jm_2025",
      occasion: "csmostrava2026",
    }),
    false,
  );
  assertEquals("included_segments" in payload, false);
});

Deno.test("broadcast without a generation still scopes to the occasion", () => {
  const payload = buildNotificationPayload({
    ...base,
    installationGeneration: "",
  });

  assertEquals(payload.filters, [{
    field: "tag",
    key: "occasion",
    relation: "=",
    value: "csmostrava2026",
  }]);
});

Deno.test("direct recipient delivery uses only external_id", () => {
  const payload = buildNotificationPayload({ ...base, recipient: "user-uuid" });

  assertEquals(payload.include_aliases, { external_id: "user-uuid" });
  assertEquals("filters" in payload, false);
  assertEquals("included_segments" in payload, false);
});
