import { assertEquals } from "jsr:@std/assert";
import { buildFakturoidInvoicePayload } from "./fakturoidPayload.ts";

function order(currency: string, variableSymbol: string) {
  return {
    payment_info: {
      amount: 125.5,
      currency_code: currency,
      variable_symbol: variableSymbol,
      account_number: "CZ0000000000000000000000",
      account_number_human_readable: "000000-0000000000/0000",
    },
  };
}

Deno.test("EUR proforma preserves the numeric VS used by RF payment", () => {
  const payload = buildFakturoidInvoicePayload(
    order("EUR", "123456"),
    "Hvezda morska",
    "command-1",
    42,
    "Tenant note",
    "2026-08-23",
  );
  assertEquals(payload.variable_symbol, "123456");
  assertEquals(payload.note, "Tenant note");
  assertEquals(payload.currency, "EUR");
});

Deno.test("CZK proforma lets Fakturoid assign VS and bounds unit name", () => {
  const payload = buildFakturoidInvoicePayload(
    order("CZK", "987654"),
    "Long tenant unit",
    "command-2",
    43,
    undefined,
    "2026-08-23",
  );
  assertEquals(Object.hasOwn(payload, "variable_symbol"), false);
  assertEquals(
    (payload.lines as Array<{ unit_name: string }>)[0].unit_name,
    "Long tenan",
  );
});
