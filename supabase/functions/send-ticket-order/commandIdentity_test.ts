import { assertEquals } from "jsr:@std/assert@1";
import { resolveTicketOrderCommandIdentity } from "./commandIdentity.ts";

Deno.test("preserves command identity from current clients", () => {
  assertEquals(
    resolveTicketOrderCommandIdentity("command", "client", null),
    { commandId: "command", clientId: "client" },
  );
});

Deno.test("generates compatibility identity for legacy direct orders", () => {
  const generated = ["generated-command", "generated-client"];
  assertEquals(
    resolveTicketOrderCommandIdentity(
      undefined,
      undefined,
      null,
      () => generated.shift()!,
    ),
    { commandId: "generated-command", clientId: "generated-client" },
  );
});

Deno.test("default compatibility identity contains valid UUIDs", () => {
  const identity = resolveTicketOrderCommandIdentity(undefined, undefined, null)!;
  assertEquals(identity.commandId.length, 36);
  assertEquals(identity.clientId.length, 36);
});

Deno.test("replacement orders remain fail-closed without client identity", () => {
  assertEquals(
    resolveTicketOrderCommandIdentity(undefined, undefined, { spotIds: [] }),
    null,
  );
});
