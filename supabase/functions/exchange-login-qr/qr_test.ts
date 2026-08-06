import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { parseLoginQr } from "./qr.ts";
Deno.test("accepts only typed login QR", () => {
  assertEquals(
    parseLoginQr(`festapp-login:v1:42:${"A".repeat(43)}`)?.occasion,
    42,
  );
  assertEquals(parseLoginQr("550e8400-e29b-41d4-a716-446655440000"), null);
  assertEquals(parseLoginQr("ticket:v1:ABC"), null);
  assertEquals(parseLoginQr(`festapp-login:v2:42:${"A".repeat(43)}`), null);
});
