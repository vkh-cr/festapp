import { supabaseAdmin } from "../_shared/supabaseUtil.ts";

const _PROJECT_URL = Deno.env.get("PROJECT_URL")!;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  // Set a maximum runtime limit in milliseconds (400 seconds).
  const maxDuration = 400 * 1000;
  const startTime = Date.now();

  try {
    // Handle CORS preflight request.
    if (req.method === "OPTIONS") {
      return new Response("ok", { headers: corsHeaders });
    }

    // Parse request body and check for the request secret.
    const requestData = await req.json();
    const { requestSecret } = requestData;
    if (!requestSecret) {
      return new Response(
        JSON.stringify({ error: "Missing request secret" }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 400,
        }
      );
    }

    // Validate the request secret using the "check_request_secret" RPC.
    const { data: secretValid, error: secretError } = await supabaseAdmin.rpc(
      "check_request_secret",
      { p_secret: requestSecret }
    );
    if (secretError || !secretValid) {
      console.error("Invalid request secret", secretError);
      return new Response(
        JSON.stringify({ error: "Invalid request secret" }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 403,
        }
      );
    }

    // --- PART 1: Process Bank Accounts Transactions ---

    // Retrieve all fetchable bank accounts (returns bank_account_id, bank_secret, and account_type).
    const { data: bankAccounts, error: bankAccountsError } = await supabaseAdmin.rpc("get_fetchable_bank_accounts");
    if (bankAccountsError) {
      console.error("Error retrieving fetchable bank accounts", bankAccountsError);
      return new Response(
        JSON.stringify({ error: "Failed to retrieve fetchable bank accounts" }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 500,
        }
      );
    }

    if (!bankAccounts || bankAccounts.length === 0) {
      console.log("No bank accounts available for fetching");
      return new Response(
        JSON.stringify({ message: "No bank accounts available for fetching" }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 200,
        }
      );
    }

    // Filter accounts to process only those with type "FIO".
    const fioAccounts = bankAccounts.filter((account: any) => account.account_type === "FIO");
    if (fioAccounts.length === 0) {
      console.log("No FIO bank accounts available for fetching");
      return new Response(
        JSON.stringify({ message: "No FIO bank accounts available for fetching" }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 200,
        }
      );
    }

    // Process each FIO bank account one by one.
    const fetchResults = [];
    for (const account of fioAccounts) {
      const bankAccountId = account.bank_account_id;
      const bankSecret = account.bank_secret;
      const apiUrl = `https://fioapi.fio.cz/v1/rest/last/${bankSecret}/transactions.json`;

      try {
        const apiResponse = await fetch(apiUrl);
        console.log(`Fetching transactions for bank account ${bankAccountId}: ${apiResponse.status}`);

        const transactionData = await apiResponse.json();
        const transactions = transactionData?.accountStatement?.transactionList?.transaction || [];

        if (transactions.length > 0) {
          // Insert transactions using the "insert_transactions" RPC.
          const { data: insertResult, error: insertError } = await supabaseAdmin.rpc("insert_transactions", {
            transactions,
            bank_account_id: bankAccountId,
          });
          if (insertError) {
            console.error(`Error inserting transactions for account ${bankAccountId}:`, insertError);
            fetchResults.push({ bankAccountId, error: "Failed to insert transactions" });
          } else {
            fetchResults.push({ bankAccountId, message: "Transactions processed successfully", result: insertResult });
          }
        } else {
          fetchResults.push({ bankAccountId, message: "No transactions to process" });
        }

        // Update the last fetch time for this bank account.
        const { error: updateError } = await supabaseAdmin.rpc("set_last_fetch_time", { p_bank_account_id: bankAccountId });
        if (updateError) {
          console.error(`Error updating last fetch time for account ${bankAccountId}:`, updateError);
          fetchResults.push({ bankAccountId, updateError: "Failed to update last fetch time" });
        }
      } catch (error) {
        console.error(`Unexpected error processing account ${bankAccountId}:`, error);
        fetchResults.push({ bankAccountId, error: "Unexpected error occurred" });
      }
    }

    console.log("All fetch operations completed:", fetchResults);

    // --- PART 2: Retrieve Orders and Call Send-Tickets Endpoint ---

    // Retrieve all orders that are paid and eligible for ticket sending.
    const { data: orders, error: ordersError } = await supabaseAdmin.rpc("get_orders_for_ticket_sending");
    let sendTicketResults = [];
    if (ordersError) {
      console.error("Error retrieving orders for ticket sending:", ordersError);
    } else if (orders && orders.length > 0) {
      for (const order of orders) {
        // Check if the elapsed time is nearing 400 seconds (using a 10 second buffer).
        if (Date.now() - startTime >= maxDuration - 10000) {
          console.warn("Approaching maximum execution time. Skipping remaining tickets.");
          break;
        }

        const orderId = order.order_id;
        const email = order.order_email;
        try {
          // Call the send-tickets endpoint with orderId, email and the same request secret.
          const response = await fetch(_PROJECT_URL + "/functions/v1/send-tickets", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ requestSecret, orderId, email }),
          });
          const responseData = await response.json();
          console.log(`Send tickets for order ${orderId} response:`, responseData);
          sendTicketResults.push({ orderId, result: responseData });
        } catch (err) {
          console.error(`Error sending tickets for order ${orderId}:`, err);
          sendTicketResults.push({ orderId, error: err.message });
        }
      }
    } else {
      console.log("No orders eligible for ticket sending.");
    }

    // Combine results and return the final outcome.
    const finalResults = {
      fetchResults,
      sendTicketResults,
    };

    console.log("Final results:", finalResults);
    return new Response(JSON.stringify({ message: "Operations completed", results: finalResults }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Unexpected error:", error);
    return new Response(JSON.stringify({ error: "Unexpected error occurred" }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
