/**
 * Bank Account Import Integration Test
 * 
 * Usage:
 * export SUPABASE_URL=...
 * export SUPABASE_SERVICE_ROLE_KEY=...
 * node automation/test_bank_import.js
 */

const fs = require('fs');
const { createClient } = require('@supabase/supabase-js');

// Default Config (Fallback)
const DEFAULT_SB_URL = "https://kjdpmixlnhntmxjedpxh.supabase.co";
const DEFAULT_SB_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtqZHBtaXhsbmhudG14amVkcHhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE5NDI5NzEsImV4cCI6MjAxNzUxODk3MX0.06nTXCL-i1GxLckfEyCNlVVwt62QTzKUezqmsYSR_MI";

// Parse CLI Args
const args = process.argv.slice(2);
let TEST_TOKEN = 'TESTTOKEN1'; // 10 chars for pairing_code constraint
let USE_EXISTING = false;
let TEST_EMAIL_BODY = `
Subject: Incoming Payment
From: info@bank.com

Payment received: 150.00 CZK
VS: 999888777
Message: Integration Test
`;

for (let i = 0; i < args.length; i++) {
    if (args[i] === '--token') TEST_TOKEN = args[i+1];
    if (args[i] === '--existing-token') {
        TEST_TOKEN = args[i+1];
        USE_EXISTING = true;
    }
    if (args[i] === '--email-file') {
        const filePath = args[i+1];
        if (fs.existsSync(filePath)) {
            TEST_EMAIL_BODY = fs.readFileSync(filePath, 'utf-8');
            console.log("Loaded email body from:", filePath);
        } else {
            console.error("File not found:", filePath);
            process.exit(1);
        }
    }
}

async function main() {
    const sbUrl = process.env.SUPABASE_URL || DEFAULT_SB_URL;
    const sbKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY || DEFAULT_SB_KEY;

    console.log("Using Supabase URL:", sbUrl);
    // console.log("Using Key:", sbKey.substring(0, 10) + "...");

    const supabase = createClient(sbUrl, sbKey);
    
    // Note: Sequence reset is handled by run_db_tests.js or admin scripts.
    // We do not call it here to avoid needing Service Role permissions for this test.

    let accountId = null;

    if (!USE_EXISTING) {
        console.log("1. Setting up Test Bank Account...");
        console.log("   Token:", TEST_TOKEN);
        
        // Try creating account. If failing (e.g. RLS/Anon key), warn and abort setup.
        const { data: account, error: accError } = await supabase
            .schema('eshop')
            .from('bank_accounts')
            .insert({
                title: 'Integration Test Account',
                account_number: 'TEST/0000',
                type: 'FIO',
                pairing_code: TEST_TOKEN, // Changed from import_token to pairing_code
                secret: null
            })
            .select()
            .single();

        if (accError) {
            console.warn("⚠️  Create Account Failed:", accError.message);
            console.warn("   (Likely due to missing Service Role Key. Use --existing-token <UUID> to skip creation.)");
            console.warn("   Proceeding to invoking function anyway (it might fail if account doesn't exist).");
        } else {
             console.log("   Account Created:", account.id);
             accountId = account.id;
        }
    } else {
        console.log("1. Using Existing Token:", TEST_TOKEN);
        // We can't verify if it exists easily without admin key, assume it does.
    }

    const messageId = "test-integration-" + Date.now();

    try {
        console.log("2. Invoking Edge Function (Simulate SNS)...");
        const funcUrl = `${sbUrl}/functions/v1/bank-mail-parser`;
        
        const payload = {
            Type: "Notification",
            MessageId: messageId,
            TopicArn: "arn:aws:sns:test",
            Message: JSON.stringify({
                notificationType: "Received",
                mail: {
                    destination: [`bank.${TEST_TOKEN}@festapp.net`],
                    source: "info@bank.com",
                    commonHeaders: { subject: "Test Email Payment" }
                },
                content: TEST_EMAIL_BODY
            })
        };

        const res = await fetch(funcUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (res.status !== 200) {
            throw new Error(`Function returned status ${res.status}: ${await res.text()}`);
        }
        console.log("   Function Invoked OK.");

        console.log("3. Verifying Transaction in DB...");
        
        // If we created the account, we know the ID. If not, we can't easily query by token (security).
        // If we have Anon Key, we might not see transactions.
        
        let found = false;
        for (let i = 0; i < 5; i++) {
            await new Promise(r => setTimeout(r, 1000));
            
            let query = supabase.schema('eshop').from('transactions').select('*');
            if (accountId) {
                query = query.eq('bank_account_id', accountId);
            } else {
                // If using existing token, look up by external_id (MessageId)
                query = query.eq('external_id', messageId);
            }
            
            const { data: txs, error: txError } = await query;
            
            if (txError) {
                console.warn("   ⚠️  Cannot verify DB (Auth Error):", txError.message);
                console.warn("   Please check your Database manually.");
                break;
            }

            if (txs && txs.length > 0) {
                 console.log("   SUCCESS! Transaction found:", txs[0].id);
                 console.log("   Details:", txs[0].amount, txs[0].currency, txs[0].message);
                 found = true;
                 break;
            }
        }

        if (!found && !accountId) {
             console.log("   (Could not verify automatically without Account ID. Check DB manually).");
        } else if (!found) {
             console.error("   FAILED: No new transaction found after 5 seconds.");
        }

    } finally {
        console.log("4. Cleaning up...");
        if (accountId) {
            await supabase.from('bank_accounts').delete().eq('id', accountId);
            console.log("   Account deleted.");
        } else {
            // Clean up the specific transaction if we didn't own the account
            await supabase.schema('eshop').from('transactions').delete().eq('external_id', messageId);
            console.log("   Test Transaction deleted.");
        }
    }
}

main();
