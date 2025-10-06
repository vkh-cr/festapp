import { supabaseAdmin } from "../_shared/supabaseUtil.ts";
import { authorizeRequest, AuthError } from "../_shared/auth.ts";

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

    // Parse request body and authorize using the request secret.
    const requestData = await req.json();
    const { requestSecret } = requestData;
    await authorizeRequest({ requestSecret });

    const { data: bankAccounts, error: bankAccountsError } = await supabaseAdmin.rpc("get_fetchable_bank_accounts_with_t_count");
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
      const transactionCount = account.transaction_count_last_90_days;

      try {
        // If there are no recent transactions in our DB, set the Fio API pointer to 90 days ago.
        // This prevents downloading a large initial payload and instead prepares the 'last' endpoint to fetch from that date.
        if (transactionCount === 0) {
          const startDate = new Date();
          startDate.setDate(startDate.getDate() - 90);
          const formattedStartDate = startDate.toISOString().split("T")[0];

          const setDateUrl = `https://fioapi.fio.cz/v1/rest/set-last-date/${bankSecret}/${formattedStartDate}/`;
          console.log(`Account ${bankAccountId} has 0 recent DB transactions. Setting Fio API pointer to ${formattedStartDate}.`);

          const setDateResponse = await fetch(setDateUrl);
          if (!setDateResponse.ok) {
              // Log the error but proceed anyway, as the subsequent 'last' fetch might still work or provide a useful error.
              console.error(`Failed to set last date for account ${bankAccountId}. Status: ${setDateResponse.status}`);
              fetchResults.push({ bankAccountId, error: `Failed to set Fio API pointer with status: ${setDateResponse.status}` });
          } else {
              console.log(`Successfully set Fio API pointer for account ${bankAccountId}.`);
          }
        }

        // Always fetch the latest transactions.
        // If the date was just set, this will get everything since that date.
        // If transactions already exist in our DB, this gets transactions since the last fetch.
        const fetchDescription = `Fetching latest transactions for account ${bankAccountId}.`;
        const apiUrl = `https://fioapi.fio.cz/v1/rest/last/${bankSecret}/transactions.json`;

        console.log(fetchDescription);

        const apiResponse = await fetch(apiUrl);
        console.log(`Fio API fetch for bank account ${bankAccountId}: ${apiResponse.status}`);

        if (!apiResponse.ok) {
            console.error(`Fio API request failed for account ${bankAccountId} with status: ${apiResponse.status}`);
            fetchResults.push({ bankAccountId, error: `Fio API request failed with status: ${apiResponse.status}` });
            continue; // Move to the next account
        }

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
          fetchResults.push({ bankAccountId, message: "No new transactions to process" });
        }

        // Update the last fetch time for this bank account.
        const { error: updateError } = await supabaseAdmin.rpc("set_last_fetch_time", { p_bank_account_id: bankAccountId });
        if (updateError) {
          console.error(`Error updating last fetch time for account ${bankAccountId}:`, updateError);
          // Note: This error is pushed in addition to any transaction processing results.
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
    // Handle both custom AuthError and any other unexpected errors.
    const isAuthError = error instanceof AuthError;
    const status = isAuthError ? error.status : 500;
    const message = error.message || "Unexpected error occurred";

    console.error(`Error [${status}]: ${message}`, isAuthError ? '' : error);

    return new Response(JSON.stringify({ error: message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: status,
    });
  }
});