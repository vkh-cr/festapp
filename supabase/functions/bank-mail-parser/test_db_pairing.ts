
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.0.0";
import { assertEquals, assertExists } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import { Client } from "https://deno.land/x/postgres@v0.17.0/mod.ts";

Deno.test("Integration: Email Pairing Logic", async () => {
    const supabaseUrl = Deno.env.get("SUPABASE_URL") || "";
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";
    const databaseUrl = Deno.env.get("DATABASE_URL") || "";

    if (!supabaseKey && !databaseUrl) {
        console.log("Skipping DB test - No credentials (needs SERVICE_KEY or DATABASE_URL).");
        return;
    }

    let client: Client | null = null;
    let supabase: any = null;

    if (supabaseKey) {
        supabase = createClient(supabaseUrl, supabaseKey);
    } else {
        console.log("Using direct DB connection...");
        client = new Client(databaseUrl);
        await client.connect();
    }

    const rnd = Math.floor(Math.random() * 1000000);
    const testVS = (90000000 + rnd).toString();
    const testAmount = 100.00;

    // Hoist variables for cleanup
    let orderId: number | null = null;
    let paymentInfoId: number | null = null;
    let bankAccountId: number | null = null;
    let wrongBaId: number | null = null;
    let createdBaId: number | null = null;
    let transactionIds: number[] = [];

    try {
        // Variables hoisted above

        // Fetch valid Bank Account
        if (client) {
             const baRes = await client.queryObject(`SELECT id FROM eshop.bank_accounts LIMIT 1`);
             if (baRes.rows.length > 0) {
                 bankAccountId = (baRes.rows[0] as any).id;
             } else {
                 const baIns = await client.queryObject(`INSERT INTO eshop.bank_accounts (title, type, supported_currencies, account_number) VALUES ('Test Bank', 'Generic', ARRAY['CZK'], '987654321/2010') RETURNING id`);
                 bankAccountId = (baIns.rows[0] as any).id;
                 createdBaId = bankAccountId;
             }
        } else if (supabase) {
             const { data: ba } = await supabase.schema('eshop').from('bank_accounts').select('id').limit(1).single();
             if (ba) bankAccountId = ba.id;
        }

        if (!bankAccountId) bankAccountId = 1;

        // 1. Setup Data
        if (supabase) {
             const { data: pi, error: piError } = await supabase
                .schema('eshop').from('payment_info')
                .insert({
                    amount: testAmount, // FIXED
                    currency_code: 'CZK',
                    variable_symbol: parseInt(testVS),
                    paid: 0,
                    bank_account: bankAccountId
                })
                .select()
                .single();
            if (piError) throw piError;
            paymentInfoId = pi.id;

            const { data: order, error: orderError } = await supabase
                .schema('eshop').from('orders')
                .insert({
                    payment_info: paymentInfoId,
                    price: testAmount,
                    currency_code: 'CZK',
                    state: 'ordered',
                    occasion: 1
                })
                .select()
                .single();
            if (orderError) throw orderError;
            orderId = order.id;

        } else if (client) {
            // POSTGRES DIRECT PATH
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
        }

        console.log("Created Order:", orderId, "PaymentInfo:", paymentInfoId);

        // 2. Execute Transaction
        let result: any;
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

        if (supabase) {
             const { data, error } = await supabase.rpc("process_email_transaction", { p_data: payload });
             if (error) throw error;
             result = data;
        } else if (client) {
             const q = await client.queryObject(`
                SELECT public.process_email_transaction($1) as data
             `, [JSON.stringify(payload)]);
             result = (q.rows[0] as any).data;
        }


        console.log("RPC Result:", result);
        if (result && result.id) transactionIds.push(result.id);
        
        assertExists(result.id);
        assertEquals(result.status, 'inserted');
        assertEquals(result.paired, true);

        // 3. Verify
        if (supabase) {
             const { data: updatedOrder } = await supabase.schema('eshop').from('orders').select('state').eq('id', orderId).single();
             assertEquals(updatedOrder.state, 'paid');
             
             const { data: updatedPi } = await supabase.schema('eshop').from('payment_info').select('paid').eq('id', paymentInfoId).single();
             assertEquals(updatedPi.paid, testAmount);
        } else if (client) {
             const oRes = await client.queryObject(`SELECT state FROM eshop.orders WHERE id = $1`, [orderId]);
             const state = (oRes.rows[0] as any).state;
             assertEquals(state, 'paid');

             const piRes = await client.queryObject(`SELECT paid FROM eshop.payment_info WHERE id = $1`, [paymentInfoId]);
             const paid = (piRes.rows[0] as any).paid;
             assertEquals(Number(paid), testAmount); // Postgres driver might return string/number
        }


        // 4. Verify Cross-Account Security (Wrong Bank Account)
        if (supabase) {
             const rnd2 = Math.floor(Math.random() * 1000000);
             // Create another bank account
             const { data: ba2, error: ba2Error } = await supabase.schema('eshop').from('bank_accounts').insert({
                 title: 'Other Bank', 
                 type: 'Generic', 
                 supported_currencies: ['CZK'], 
                 account_number: '0000/0000' + rnd2,
                 import_token: 'chk_' + rnd2
             }).select().single();
             
             if (ba2Error) {
                 console.warn("Could not create second bank account for test (maybe permissions?):", ba2Error);
             } else {
                 const wrongBaId = ba2.id;
                 
                 // Try to pay same VS against Wrong BA
                 const payload2 = { 
                     ...payload, 
                     bank_account_id: Number(wrongBaId), 
                     external_id: "TEST-E-WRONG-" + Date.now(), 
                     transaction_id: Date.now() + 1000 
                 };
                 
                 const { data: result2, error: res2Error } = await supabase.rpc("process_email_transaction", { p_data: payload2 });
                 if (res2Error) throw res2Error;
                 
                 assertEquals(result2.paired, false, "Should not pair if bank account differs");
                 console.log("Cross-Account Security Verified: Transaction NOT paired.");
             }
        }

    } catch (e) {
        console.error("Test Failed:", e);
        throw e;
    } finally {
        console.log("Cleaning up...");
        try {
            if (supabase) {
                // Delete in order: Transactions -> Orders -> Payment Info -> Bank Accounts
                if (transactionIds.length > 0) {
                    await supabase.schema('eshop').from('transactions').delete().in('id', transactionIds);
                }
                if (orderId) {
                    await supabase.schema('eshop').from('orders').delete().eq('id', orderId);
                }
                if (paymentInfoId) {
                    await supabase.schema('eshop').from('payment_info').delete().eq('id', paymentInfoId);
                }
                if (wrongBaId) {
                    await supabase.schema('eshop').from('bank_accounts').delete().eq('id', wrongBaId);
                }
                if (createdBaId) {
                    await supabase.schema('eshop').from('bank_accounts').delete().eq('id', createdBaId);
                }
            } else if (client) {
                if (transactionIds.length > 0) {
                     await client.queryArray(`DELETE FROM eshop.transactions WHERE id = ANY($1)`, [transactionIds]);
                }
                if (orderId) {
                     await client.queryArray(`DELETE FROM eshop.orders WHERE id = $1`, [orderId]);
                }
                if (paymentInfoId) {
                     await client.queryArray(`DELETE FROM eshop.payment_info WHERE id = $1`, [paymentInfoId]);
                }
                if (wrongBaId) {
                     await client.queryArray(`DELETE FROM eshop.bank_accounts WHERE id = $1`, [wrongBaId]);
                }
                if (createdBaId) {
                     await client.queryArray(`DELETE FROM eshop.bank_accounts WHERE id = $1`, [createdBaId]);
                }
            }
        } catch (cleanupErr) {
            console.error("Cleanup Error:", cleanupErr);
        }

        if (client) await client.end();
    }
});
