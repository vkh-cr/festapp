import { createClient } from "https://esm.sh/@supabase/supabase-js@2.46.2";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const supabaseAdmin = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

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

    // Set up a Supabase client for the requesting user
    const supabaseUser = createClient(
      SUPABASE_URL,
      Deno.env.get("SUPABASE_ANON_KEY")!,
      {
        global: {
          headers: { Authorization: req.headers.get("Authorization")! },
        },
      }
    );

    // Authenticate the user
    const { data: user, error: userError } = await supabaseUser.auth.getUser();
    if (userError || !user) {
      console.error("User authentication failed:", userError);
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 401,
      });
    }

    const userId = user.user.id;
    console.log("Authenticated user:", userId);

    // Check if the user is an editor
    const { data: isEditor, error: editorError } = await supabaseUser.rpc(
      "get_is_editor_on_any_occasion"
    );

    if (editorError || !isEditor) {
      console.error("User is not an editor or role validation failed:", editorError);
      return new Response(JSON.stringify({ error: "Forbidden: Not an editor" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 403,
      });
    }

    console.log("User is an editor:", isEditor);

    console.log("Proceeding");

    // Hardcoded bankAccountId
    const bankAccountId = 1;

    // Fetch the secret for the specified bank account
    const { data: bankAccount, error: bankAccountError } = await supabaseAdmin.schema("eshop")
      .from("bank_accounts")
      .select("secret")
      .eq("id", bankAccountId)
      .single();

    if (bankAccountError || !bankAccount || !bankAccount.secret) {
      console.error("Bank account or associated secret ID not found:", bankAccountError);
      return new Response(JSON.stringify({ error: "Bank account not found or missing secret" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 404,
      });
    }

    // Fetch the secret details from the secrets table
    const { data: secretDetails, error: secretError } = await supabaseAdmin.schema("eshop")
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

//     const startDate = new Date(2024, 12, 1)
//       .toISOString()
//       .split("T")[0];
//     const endDate = new Date(2024, 12, 2)
//       .toISOString()
//       .split("T")[0];
//     const apiUrl = `https://fioapi.fio.cz/v1/rest/periods/${secret}/${startDate}/${endDate}/transactions.json`;

    const apiUrl = `https://fioapi.fio.cz/v1/rest/last/${secret}/transactions.json`;

    const apiResponse = await fetch(apiUrl);
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
