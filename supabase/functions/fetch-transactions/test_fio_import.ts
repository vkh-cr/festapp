import {
  assertEquals,
  assertExists,
} from "https://deno.land/std@0.168.0/testing/asserts.ts";
import { Client } from "https://deno.land/x/postgres@v0.17.0/mod.ts";

Deno.test("Integration: FIO Token Pairing Logic (RPC)", async () => {
  const databaseUrl = Deno.env.get("DATABASE_URL") || "";

  if (!databaseUrl) {
    console.log("Skipping FIO DB test - DATABASE_URL not set.");
    return;
  }

  const client = new Client(databaseUrl);
  await client.connect();

  const testVS = String(70000000 + Math.floor(Math.random() * 9999999));
  const testAmount = 200.00;
  const testTxId = Date.now();

  console.log("Creating FIO test order...");

  try {
    await client.queryArray("BEGIN");
    const occasionResult = await client.queryObject<{ id: number }>(
      `
            INSERT INTO public.occasions (title, link, start_time, end_time)
            VALUES ('FIO pairing test', $1, now(), now() + interval '1 day')
            RETURNING id
        `,
      [`fio-pairing-${crypto.randomUUID()}`],
    );
    const occasionId = occasionResult.rows[0].id;
    const bankResult = await client.queryObject<{ id: number }>(`
            INSERT INTO eshop.bank_accounts
                (title, type, supported_currencies, account_number)
            VALUES ('FIO pairing test bank', 'FIO', ARRAY['CZK'],
                '123456789/2010')
            RETURNING id
        `);
    const bankAccountId = bankResult.rows[0].id;
    const piResult = await client.queryObject<{ id: number }>(
      `
            INSERT INTO eshop.payment_info
                (amount, currency_code, variable_symbol, paid, bank_account)
            VALUES ($1, 'CZK', $2, 0, $3) RETURNING id
        `,
      [testAmount, parseInt(testVS), bankAccountId],
    );
    const paymentInfoId = piResult.rows[0].id;
    const orderResult = await client.queryObject<{ id: number }>(
      `
            INSERT INTO eshop.orders
                (payment_info, price, currency_code, state, occasion)
            VALUES ($1, $2, 'CZK', 'ordered', $3) RETURNING id
        `,
      [paymentInfoId, testAmount, occasionId],
    );
    const orderId = orderResult.rows[0].id;

    console.log("Created Order:", orderId);

    // Mock FIO Transaction Object (Standard FIO API v1 format)
    const mockFioTransaction = {
      column0: { value: new Date().toISOString().split("T")[0] }, // Date
      column1: { value: testAmount }, // Amount
      column2: { value: "Test Account" }, // Name?
      column5: { value: testVS }, // VS
      column14: { value: "CZK" }, // Currency
      column22: { value: testTxId }, // ID
      column25: { value: "FIO Test" }, // Comment
    };

    const q = await client.queryObject<{ result: unknown }>(
      `
            SELECT public.insert_transactions($1, $2) as result
        `,
      [JSON.stringify([mockFioTransaction]), bankAccountId],
    );
    assertExists(q.rows[0].result);

    // Verify Order State
    const oRes = await client.queryObject<{ state: string }>(
      `SELECT state FROM eshop.orders WHERE id = $1`,
      [orderId],
    );
    assertEquals(oRes.rows[0].state, "paid");
  } catch (e) {
    console.error("FIO Test Failed:", e);
    throw e;
  } finally {
    try {
      await client.queryArray("ROLLBACK");
    } finally {
      await client.end();
    }
  }
});
