
import { assertEquals, assertExists } from "https://deno.land/std@0.168.0/testing/asserts.ts";
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

    let orderId: number | null = null;
    let paymentInfoId: number | null = null;
    let bankAccountId: number | null = null;
    let createdBaId: number | null = null;
    const transactionIds: number[] = [];

    try {
        // Fetch or create a bank account
        const baRes = await client.queryObject(`SELECT id FROM eshop.bank_accounts LIMIT 1`);
        if (baRes.rows.length > 0) {
            bankAccountId = (baRes.rows[0] as any).id;
        } else {
            const baIns = await client.queryObject(`INSERT INTO eshop.bank_accounts (title, type, supported_currencies, account_number) VALUES ('Test Bank', 'Generic', ARRAY['CZK'], '987654321/2010') RETURNING id`);
            bankAccountId = (baIns.rows[0] as any).id;
            createdBaId = bankAccountId;
        }

        if (!bankAccountId) bankAccountId = 1;

        // 1. Setup: payment_info + order
        const piResult = await client.queryObject(`
            INSERT INTO eshop.payment_info (amount, currency_code, variable_symbol, paid, bank_account)
            VALUES ($1, 'CZK', $2, 0, $3) RETURNING id
        `, [testAmount, parseInt(testVS), bankAccountId]);
        paymentInfoId = (piResult.rows[0] as any).id;

        const orderResult = await client.queryObject(`
            INSERT INTO eshop.orders (payment_info, price, currency_code, state, occasion)
            VALUES ($1, $2, 'CZK', 'ordered', 1) RETURNING id
        `, [paymentInfoId, testAmount]);
        orderId = (orderResult.rows[0] as any).id;

        console.log("Created Order:", orderId, "PaymentInfo:", paymentInfoId);

        // 2. Call process_email_transaction RPC
        const payload = {
            bank_account_id: Number(bankAccountId),
            external_id: "TEST-EMAIL-" + Date.now(),
            amount: testAmount,
            currency: 'CZK',
            counter_account: '123/0100',
            vs: testVS,
            ks: '0308',
            ss: null,
            message: 'Test Email Pairing',
            date: new Date().toISOString(),
            transaction_id: Date.now(),
            sender_name: 'Test Sender'
        };

        const q = await client.queryObject(`
            SELECT public.process_email_transaction($1) as data
        `, [JSON.stringify(payload)]);
        const result = (q.rows[0] as any).data;

        console.log("RPC Result:", result);
        if (result && result.id) transactionIds.push(result.id);

        assertExists(result.id);
        assertEquals(result.status, 'inserted');
        assertEquals(result.paired, true);

        // 3. Verify order state
        const oRes = await client.queryObject(`SELECT state FROM eshop.orders WHERE id = $1`, [orderId]);
        assertEquals((oRes.rows[0] as any).state, 'paid');

        const piRes = await client.queryObject(`SELECT paid FROM eshop.payment_info WHERE id = $1`, [paymentInfoId]);
        assertEquals(Number((piRes.rows[0] as any).paid), testAmount);

    } catch (e) {
        console.error("Test Failed:", e);
        throw e;
    } finally {
        console.log("Cleaning up...");
        try {
            if (transactionIds.length > 0) {
                await client.queryArray(`DELETE FROM eshop.transactions WHERE id = ANY($1)`, [transactionIds]);
            }
            if (orderId) {
                await client.queryArray(`DELETE FROM eshop.orders WHERE id = $1`, [orderId]);
            }
            if (paymentInfoId) {
                await client.queryArray(`DELETE FROM eshop.payment_info WHERE id = $1`, [paymentInfoId]);
            }
            if (createdBaId) {
                await client.queryArray(`DELETE FROM eshop.bank_accounts WHERE id = $1`, [createdBaId]);
            }
        } catch (cleanupErr) {
            console.error("Cleanup Error:", cleanupErr);
        }

        await client.end();
    }
});
