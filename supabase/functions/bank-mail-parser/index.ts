import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.0.0";
import { parseEmail, detectProvider } from "./parser.ts";

const SNS_TYPE_NOTIFICATION = "Notification";
const SNS_TYPE_CONFIRMATION = "SubscriptionConfirmation";

serve(async (req) => {
  let bodyText: string | undefined;
  let bankAccount: any = null;
  let messageId: string | null = null;
  let pairingCode: string | null = null;

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // 1. Parse Request
    bodyText = await req.text();
    if (!bodyText) {
      return new Response("No body", { status: 400 });
    }

    let payload;
    try {
      payload = JSON.parse(bodyText);
    } catch (e) {
      await supabase.rpc("log_transactions_log", {
           p_bank_account_id: null, 
           p_external_id: "unknown",
           p_raw_data: bodyText,
           p_message: "Invalid JSON input"
      });
      return new Response("Invalid JSON", { status: 400 });
    }

    // 2. Handle SNS Subscription Confirmation (Auto-confirm)
    if (payload.Type === SNS_TYPE_CONFIRMATION) {
      console.log("Confirming subscription:", payload.SubscribeURL);
      const confirmRes = await fetch(payload.SubscribeURL);
      if (confirmRes.ok) {
        return new Response("Confirmed", { status: 200 });
      } else {
        return new Response("Confirmation failed", { status: 500 });
      }
    }

    // 3. Handle Notification (Email)
    if (payload.Type === SNS_TYPE_NOTIFICATION) {
      messageId = payload.MessageId;
      const sesMessage = JSON.parse(payload.Message);
      
      // AWS SES Structure: sent as JSON string in 'Message' field
      // Extract Receipt Metadata
      const mail = sesMessage.mail;
      const receipt = sesMessage.receipt;
      
      // Extract Recipient Token
      // Recipients is array: ["bank.uuid-token@domain.com"]
      const recipient = mail.destination[0]; 
      const tokenMatch = recipient.match(/bank\.([a-zA-Z0-9-]+)@/);
      
      // If Encoding=UTF-8, 'content' is the email body.
      const emailBody = sesMessage.content; 
      
      if (!tokenMatch) {
         console.error("No token found in recipient:", recipient);
         await supabase.rpc("log_transactions_log", {
             p_bank_account_id: null, 
             p_external_id: messageId,
             p_raw_data: emailBody || JSON.stringify(payload),
             p_message: "No token found in recipient: " + recipient
         });
         // We return 200 to stop SNS retrying
         return new Response("No token found", { status: 200 });
      }



      pairingCode = tokenMatch[1];
      
      // 5. Look up Bank Account
      const { data: accountData, error: dbError } = await supabase
        .rpc("get_bank_account_by_pairing_code", { p_code: pairingCode })
        .single();
      
      bankAccount = accountData;

      if (dbError || !bankAccount) {
        console.error("Bank account not found for code:", pairingCode);
        // We log ID if we have messageId, but account is null
         await supabase.rpc("log_transactions_log", {
             p_bank_account_id: null, 
             p_external_id: messageId,
             p_raw_data: emailBody,
             p_message: "Bank account not found for code: " + pairingCode
         });
        return new Response("Account not found", { status: 200 });
      }

      // 6. Detect Provider
      const provider = detectProvider(bankAccount.account_number, bankAccount.type);

      console.log(`Detected provider: ${provider} for account: ${bankAccount.account_number}`);

      // 7. Parse Email
      const parsedData = parseEmail(provider, mail.commonHeaders?.subject, emailBody);
      
      if (!parsedData) {
         console.error("Failed to parse email format");
         
         // Log failure to DB
         await supabase.rpc("log_transactions_log", {
             p_bank_account_id: bankAccount.id,
             p_external_id: messageId,
             p_raw_data: emailBody,
             p_message: "Failed to parse email format. Provider: " + provider
         });

         return new Response("Parse failed", { status: 200 }); // Return 200 to stop retry loops
      }

      // 7. Save Transaction via RPC
      const transactionPayload = {
        bank_account_id: bankAccount.id,
        external_id: messageId,
        amount: parsedData.amount,
        currency: parsedData.currency,
        counter_account: parsedData.counterpartyAccount,
        bank_code: parsedData.counterpartyBankCode, 
        vs: parsedData.vs,
        ks: parsedData.ks, 
        ss: parsedData.ss, 
        message: parsedData.message,
        date: parsedData.date,
        transaction_id: parsedData.transactionId ? parseInt(parsedData.transactionId) : null,
        sender_name: parsedData.counterpartyName || null,
        bank_name: parsedData.counterpartyBankName || null
      };

      const { error: rpcError } = await supabase.rpc("process_email_transaction", {
        p_data: transactionPayload
      });

      if (rpcError) {
        console.error("RPC Error:", rpcError);
        await supabase.rpc("log_transactions_log", {
             p_bank_account_id: bankAccount.id,
             p_external_id: messageId,
             p_raw_data: JSON.stringify(transactionPayload),
             p_message: "RPC Error saving transaction: " + JSON.stringify(rpcError)
         });
        return new Response(`Error saving transaction: ${JSON.stringify(rpcError)}`, { status: 500 });
      }

      return new Response("Processed", { status: 200 });
    }

    return new Response("OK", { status: 200 });
  } catch (e) {
    console.error("Unhandled Error:", e);
    
    // Attempt to log to DB if possible
    try {
        const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
        const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
        const supabase = createClient(supabaseUrl, supabaseKey);

        const errorMsg = e instanceof Error ? e.message : JSON.stringify(e);
        const rawBody = (typeof bodyText !== 'undefined') ? bodyText : "Body read failed";
        
        await supabase.rpc("log_transaction_log", {
             p_bank_account_id: bankAccount ? bankAccount.id : null,
             p_external_id: messageId, // Might be null
             p_raw_data: rawBody,
             p_message: "Unhandled Exception: " + errorMsg
        });
    } catch (logErr) {
        console.error("Failed to log error to DB:", logErr);
    }

    return new Response(`Internal Server Error: ${e instanceof Error ? e.message : JSON.stringify(e)}`, { status: 500 });
  }
});

