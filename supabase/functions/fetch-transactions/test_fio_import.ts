
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.0.0";
import { assertEquals, assertExists } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import { Client } from "https://deno.land/x/postgres@v0.17.0/mod.ts";

Deno.test("Integration: FIO Token Pairing Logic (RPC)", async () => {
    const supabaseUrl = Deno.env.get("SUPABASE_URL") || "";
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";
    const databaseUrl = Deno.env.get("DATABASE_URL") || "";

    if (!supabaseKey && !databaseUrl) {
        // console.log("Skipping FIO Integration test - No credentials (needs SERVICE_KEY or DATABASE_URL).");
        // return;
        throw new Error("Skipping FIO Integration test - No credentials (needs SERVICE_KEY or DATABASE_URL).");
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

    const testVS = "77776666";
    const testAmount = 200.00;
    const testTxId = Date.now();

    console.log("Creating FIO test order...");

    let orderId, paymentInfoId, bankAccountId;

    try {

        // Fetch valid Bank Account
        if (client) {
             const baRes = await client.queryObject(`SELECT id FROM eshop.bank_accounts WHERE type = 'FIO' LIMIT 1`);
             if (baRes.rows.length > 0) {
                 bankAccountId = (baRes.rows[0] as any).id;
             } else {
                 // Create one?
                 const baIns = await client.queryObject(`INSERT INTO eshop.bank_accounts (title, type, supported_currencies, account_number) VALUES ('Test Bank', 'FIO', ARRAY['CZK'], '123456789/2010') RETURNING id`);
                 bankAccountId = (baIns.rows[0] as any).id;
             }
        } else if (supabase) {
             const { data: ba } = await supabase.from('bank_accounts').select('id').eq('type', 'FIO').limit(1).single();
             if (ba) bankAccountId = ba.id;
        }
        
        if (!bankAccountId) bankAccountId = 1; // Fallback

        if (supabase) {
             const { data: pi, error: piError } = await supabase
                .from('payment_info')
                .insert({
                    amount: testAmount, // FIXED: price -> amount
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
                .from('orders')
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

        console.log("Created Order:", orderId);

        // Mock FIO Transaction Object (Standard FIO API v1 format)
        const mockFioTransaction = {
            column0: { value: new Date().toISOString().split('T')[0] }, // Date
            column1: { value: testAmount }, // Amount
            column2: { value: 'Test Account' }, // Name?
            column5: { value: testVS }, // VS
            column14: { value: 'CZK' }, // Currency
            column22: { value: testTxId }, // ID
            column25: { value: 'FIO Test' } // Comment
        };

        if (supabase) {
             const { data: result, error: rpcError } = await supabase.rpc("insert_transactions", {
                transactions: [mockFioTransaction],
                bank_account_id: bankAccountId
            });
            if (rpcError) throw rpcError;
            console.log("RPC Result:", result);
        } else if (client) {
             // insert_transactions signature: (transactions jsonb, bank_account_id int)
             // Passed as JSONB array of objects.
             const q = await client.queryObject(`
                SELECT public.insert_transactions($1, $2) as result
             `, [JSON.stringify([mockFioTransaction]), bankAccountId]);
             console.log("RPC Result (via SQL):", (q.rows[0] as any).result);
        }

        // Verify Order State
        if (supabase) {
             const { data: updatedOrder } = await supabase.from('orders').select('state').eq('id', orderId).single();
             console.log("Updated FIO Order State:", updatedOrder.state);
             assertEquals(updatedOrder.state, 'paid');
        } else if (client) {
             const oRes = await client.queryObject(`SELECT state FROM eshop.orders WHERE id = $1`, [orderId]);
             const state = (oRes.rows[0] as any).state;
             console.log("Updated FIO Order State:", state);
             assertEquals(state, 'paid');
        }

    } catch (e) {
        console.error("FIO Test Failed:", e);
        throw e;
    } finally {
        if (orderId) {
             console.log("Cleaning up Order:", orderId);
             if (supabase) await supabase.from('orders').delete().eq('id', orderId);
             else if (client) await client.queryObject(`DELETE FROM eshop.orders WHERE id = $1`, [orderId]);
        }
        // Cleanup transactions FIRST (FK dependency on payment_info?)
        if (bankAccountId) {
             const txLimitId = testTxId; 
             // We need to delete transactions created by this test. 
             // They have `transaction_id = testTxId`.
             console.log("Cleaning up Transactions with ID:", txLimitId);
             if (supabase) await supabase.from('transactions').delete().eq('transaction_id', txLimitId);
             else if (client) await client.queryObject(`DELETE FROM eshop.transactions WHERE transaction_id = $1`, [txLimitId]);
        }
        if (paymentInfoId) {
             console.log("Cleaning up Payment Info:", paymentInfoId);
             if (supabase) await supabase.from('payment_info').delete().eq('id', paymentInfoId);
             else if (client) await client.queryObject(`DELETE FROM eshop.payment_info WHERE id = $1`, [paymentInfoId]);
        }

        if (client) await client.end();
    }
});
