import { getSupabaseUser, isUserEditorOrder, supabaseAdmin } from "../_shared/supabaseUtil.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  try {
    // Handle CORS preflight requests
    if (req.method === "OPTIONS") {
      return new Response("ok", { headers: corsHeaders });
    }

    const requestData = await req.json();
    const { occasionLink } = requestData;

    if (!occasionLink) {
      return new Response(JSON.stringify({ error: "Missing occasion link" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 400,
      });
    }

    // 1. Fetch the occasion and its associated unit ID
    const { data: occasionData, error: occasionError } = await supabaseAdmin
      .from("occasions")
      .select("id, unit")
      .eq("link", occasionLink)
      .single();

    if (occasionError || !occasionData) {
      console.error("Occasion not found:", occasionError);
      return new Response(JSON.stringify({ error: "Occasion not found" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 404,
      });
    }

    const occasionId = occasionData.id;
    const unitId = occasionData.unit;

    // 2. Authenticate the user and authorize as an editor for the occasion
    const user = await getSupabaseUser(req.headers.get("Authorization")!);
    if (!user) {
        return new Response(JSON.stringify({ error: "Authentication failed" }), {
            headers: { ...corsHeaders, "Content-Type": "application/json" },
            status: 401,
        });
    }
    const userId = user.user.id;

    const isEditor = await isUserEditorOrder(userId, occasionId);
    if (!isEditor) {
      console.error(`User ${userId} is not an editor for occasion ${occasionId}`);
      return new Response(JSON.stringify({ error: "Forbidden: Not an editor" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 403,
      });
    }

    // 3. Fetch all fetchable bank accounts for the unit using the new RPC function
    const { data: bankAccounts, error: accountsError } = await supabaseAdmin.rpc(
      'get_fetchable_bank_accounts_for_unit',
      { p_unit_id: unitId }
    );

    if (accountsError) {
      console.error("Error fetching unit bank accounts:", accountsError);
      return new Response(JSON.stringify({ error: "Failed to fetch unit bank accounts" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      });
    }

    if (!bankAccounts || bankAccounts.length === 0) {
        return new Response(JSON.stringify({ message: "No fetchable bank accounts associated with this unit." }), {
            headers: { ...corsHeaders, "Content-Type": "application/json" },
            status: 200,
        });
    }

    const syncResults = [];

    // 4. Loop through each bank account and synchronize transactions
    for (const account of bankAccounts) {
      const { bank_account_id: bankAccountId, bank_secret: secret, account_type: accountType } = account;

      // We only process "FIO" accounts in this function
      if (accountType !== 'FIO') {
        syncResults.push({ bankAccountId, status: 'skipped', message: `Account type is '${accountType}', not 'FIO'.` });
        continue;
      }

      try {
        const apiUrl = `https://fioapi.fio.cz/v1/rest/last/${secret}/transactions.json`;
        const apiResponse = await fetch(apiUrl);

        if (!apiResponse.ok) {
            console.error(`Fio API request failed for account ${bankAccountId} with status: ${apiResponse.status}`);
            syncResults.push({ bankAccountId, status: 'error', message: `Fio API request failed with status: ${apiResponse.status}` });
            continue;
        }

        const transactionData = await apiResponse.json();
        const transactions = transactionData?.accountStatement?.transactionList?.transaction || [];

        if (transactions.length > 0) {
          const { data: insertResult, error: insertError } = await supabaseAdmin.rpc(
            "insert_transactions",
            {
              transactions,
              bank_account_id: bankAccountId,
            }
          );

          if (insertError) {
            console.error(`Error inserting transactions for account ${bankAccountId}:`, insertError);
            syncResults.push({ bankAccountId, status: 'error', message: 'Failed to insert transactions.' });
          } else {
            console.log(`Insert result for account ${bankAccountId}:`, insertResult);
            syncResults.push({ bankAccountId, status: 'success', result: insertResult });
          }
        } else {
          syncResults.push({ bankAccountId, status: 'success', message: 'No new transactions to process.' });
        }
      } catch (loopError) {
        console.error(`An unexpected error occurred for account ${bankAccountId}:`, loopError);
        syncResults.push({ bankAccountId, status: 'error', message: 'An unexpected error occurred during processing.' });
      }
    }

    return new Response(
      JSON.stringify({
        message: "Synchronization process completed.",
        results: syncResults,
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    );

  } catch (error) {
    console.error("Unexpected error:", error);
    return new Response(JSON.stringify({ error: "An unexpected error occurred" }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
