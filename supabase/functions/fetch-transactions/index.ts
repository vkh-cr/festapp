import { getSupabaseUser, isUserEditor, supabaseAdmin } from "../_shared/supabaseUtil.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  try {
    console.log("Start");

    // Handle CORS preflight request
    if (req.method === "OPTIONS") {
      return new Response("ok", { headers: corsHeaders });
    }

    const requestData = await req.json();
    const { formLink } = requestData;

    if (!formLink) {
      return new Response(JSON.stringify({ error: "Missing form link" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 400,
      });
    }

    // Fetch the form data from the link
    const { data: formData, error: formError } = await supabaseAdmin
      .from("forms")
      .select("occasion, bank_account")
      .eq("link", formLink)
      .single();

    if (formError || !formData) {
      console.error("Form not found:", formError);
      return new Response(JSON.stringify({ error: "Form not found" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 404,
      });
    }

    const occasionId = formData.occasion;
    const bankAccountId = formData.bank_account;

    // Get the authenticated user from the authorization header
    const user = await getSupabaseUser(req.headers.get("Authorization")!);
    const userId = user.user.id;

    // Check if the user is an editor for the occasion
    const isEditor = await isUserEditor(userId, occasionId);
    if (!isEditor) {
      console.error(`User ${userId} is not an editor for occasion ${occasionId}`);
      return new Response(JSON.stringify({ error: "Forbidden: Not an editor" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 403,
      });
    }

    // Fetch the secret associated with the bank account
    const { data: bankAccount, error: bankAccountError } = await supabaseAdmin
      .schema("eshop")
      .from("bank_accounts")
      .select("secret")
      .eq("id", bankAccountId)
      .single();

    if (bankAccountError || !bankAccount || !bankAccount.secret) {
      console.error("Bank account or associated secret not found:", bankAccountError);
      return new Response(JSON.stringify({ error: "Bank account not found or missing secret" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 404,
      });
    }

    // Fetch the secret details
    const { data: secretDetails, error: secretError } = await supabaseAdmin
      .schema("eshop")
      .from("secrets")
      .select("secret, expiry_date")
      .eq("id", bankAccount.secret)
      .single();

    if (secretError || !secretDetails || !secretDetails.secret) {
      console.error("Secret not found or invalid:", secretError);
      return new Response(JSON.stringify({ error: "Secret not found or expired" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 404,
      });
    }

    // Check if the secret has expired
    if (secretDetails.expiry_date && new Date(secretDetails.expiry_date) < new Date()) {
      console.error("The secret has expired.");
      return new Response(JSON.stringify({ error: "The secret has expired" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 403,
      });
    }

    const secret = secretDetails.secret;

//     const startDate = new Date(2024, 11, 1)
//       .toISOString()
//       .split("T")[0];
//     const endDate = new Date(2025, 1, 20)
//       .toISOString()
//       .split("T")[0];
//     const apiUrl = `https://fioapi.fio.cz/v1/rest/periods/${secret}/${startDate}/${endDate}/transactions.json`;

    const apiUrl = `https://fioapi.fio.cz/v1/rest/last/${secret}/transactions.json`;

    const apiResponse = await fetch(apiUrl);
    console.log(apiResponse.status);

    const transactionData = await apiResponse.json();

    const transactions = transactionData?.accountStatement?.transactionList?.transaction || [];
    console.log(transactions);

    if (transactions.length > 0) {
      // Insert transactions using a PostgreSQL RPC call
      const { data: insertResult, error: insertError } = await supabaseAdmin.rpc(
        "insert_transactions",
        {
          transactions,
          bank_account_id: bankAccountId,
        }
      );

      if (insertError) {
        console.error("Error inserting transactions:", insertError);
        return new Response(JSON.stringify({ error: "Failed to insert transactions" }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 500,
        });
      }

      console.log("Insert result:", insertResult);

      return new Response(
        JSON.stringify({
          message: "Transactions processed successfully.",
          result: insertResult, // Includes inserted and skipped counts
        }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 200,
        }
      );
    } else {
      return new Response(
        JSON.stringify({
          message: "No transactions to process.",
        }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 200,
        }
      );
    }

  } catch (error) {
    console.error("Unexpected error:", error);
    return new Response(JSON.stringify({ error: "Unexpected error occurred" }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
