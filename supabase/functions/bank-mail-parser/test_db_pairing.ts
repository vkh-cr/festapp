import {
  assertEquals,
  assertExists,
} from "https://deno.land/std@0.168.0/testing/asserts.ts";
import { Client } from "https://deno.land/x/postgres@v0.17.0/mod.ts";

Deno.test("Integration: Email Pairing Logic", async () => {
  const databaseUrl = Deno.env.get("DATABASE_URL") || "";

  if (!databaseUrl) {
    console.log("Skipping DB test - DATABASE_URL not set.");
    return;
  }

  console.log("Using direct DB connection...");
  const client = new Client(databaseUrl);
  await client.connect();

  const rnd = Math.floor(Math.random() * 1000000);
  const testVS = (90000000 + rnd).toString();
  const testAmount = 100.00;

  try {
    await client.queryArray("BEGIN");
    const occasionResult = await client.queryObject<{ id: number }>(
      `
            INSERT INTO public.occasions (title, link, start_time, end_time)
            VALUES ('Email pairing test', $1, now(), now() + interval '1 day')
            RETURNING id
        `,
      [`email-pairing-${crypto.randomUUID()}`],
    );
    const occasionId = occasionResult.rows[0].id;
    const bankResult = await client.queryObject<{ id: number }>(`
            INSERT INTO eshop.bank_accounts
                (title, type, supported_currencies, account_number)
            VALUES ('Email pairing test bank', 'Generic', ARRAY['CZK'],
                '987654321/2010')
            RETURNING id
        `);
    const bankAccountId = bankResult.rows[0].id;

    // 1. Setup: payment_info + order
    const piResult = await client.queryObject(
      `
            INSERT INTO eshop.payment_info (amount, currency_code, variable_symbol, paid, bank_account)
            VALUES ($1, 'CZK', $2, 0, $3) RETURNING id
        `,
      [testAmount, parseInt(testVS), bankAccountId],
    );
    const paymentInfoId = (piResult.rows[0] as any).id;

    const orderResult = await client.queryObject(
      `
            INSERT INTO eshop.orders
                (payment_info, price, currency_code, state, occasion)
            VALUES ($1, $2, 'CZK', 'ordered', $3) RETURNING id
        `,
      [paymentInfoId, testAmount, occasionId],
    );
    const orderId = (orderResult.rows[0] as any).id;

    console.log("Created Order:", orderId, "PaymentInfo:", paymentInfoId);

    // 2. Call process_email_transaction RPC
    const payload = {
      bank_account_id: Number(bankAccountId),
      external_id: "TEST-EMAIL-" + Date.now(),
      amount: testAmount,
      currency: "CZK",
      counter_account: "123/0100",
      vs: testVS,
      ks: "0308",
      ss: null,
      message: "Test Email Pairing",
      date: new Date().toISOString(),
      ingest_source: "fio_email",
      movement_id: null,
      bank_command_id: Date.now(),
      payer_reference: null,
      sender_name: "Test Sender",
    };

    const q = await client.queryObject(
      `
            SELECT public.process_email_transaction($1) as data
        `,
      [JSON.stringify(payload)],
    );
    const result = (q.rows[0] as any).data;

    console.log("RPC Result:", result);
    assertExists(result.stored_id);
    assertEquals(result.ingest_status, "inserted");
    assertEquals(result.match_verdict, "paired");

    // 3. Verify order state
    const oRes = await client.queryObject(
      `SELECT state FROM eshop.orders WHERE id = $1`,
      [orderId],
    );
    assertEquals((oRes.rows[0] as any).state, "paid");

    const piRes = await client.queryObject(
      `SELECT paid FROM eshop.payment_info WHERE id = $1`,
      [paymentInfoId],
    );
    assertEquals(Number((piRes.rows[0] as any).paid), testAmount);
  } catch (e) {
    console.error("Test Failed:", e);
    throw e;
  } finally {
    try {
      await client.queryArray("ROLLBACK");
    } catch (cleanupErr) {
      console.error("Cleanup Error:", cleanupErr);
    }

    await client.end();
  }
});
