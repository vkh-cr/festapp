import { getSupabaseUser, isUserEditor, isUserEditorOrder, supabaseAdmin } from "../_shared/supabaseUtil.ts";
import { sendEmailWithSubs } from "../_shared/emailClient.ts";

const _DEFAULT_EMAIL = Deno.env.get("DEFAULT_EMAIL")!;
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  try {
    // Handle CORS preflight
    if (req.method === "OPTIONS") {
      return new Response("ok", { headers: corsHeaders });
    }

    const reqData = await req.json();

    // Expecting a request body with:
    // - template: a full email template model object (with html, subject, occasion, etc.)
    // - subs: a record of substitutions
    // - email: the recipient's email address
    const { template, subs, email } = reqData;

    if (!template || !subs || !email) {
      return new Response(
        JSON.stringify({ error: "Missing required fields: template, subs, or email" }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 400 },
      );
    }

    // Ensure that the template contains an 'occasion' (or organization) field to check editor permission.
    if (!template.occasion) {
      return new Response(
        JSON.stringify({ error: "Template does not contain occasion information" }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 400 },
      );
    }

    // Get the authenticated user from the Authorization header.
    const authHeader = req.headers.get("Authorization") || "";
    const user = await getSupabaseUser(authHeader);
    if (!user?.user?.id) {
      return new Response(
        JSON.stringify({ error: "Authentication required" }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 401 },
      );
    }

    // Verify that the user is an editor for the occasion specified in the template.
    const userId = user.user.id;
    var isEditor = await isUserEditor(userId, template.occasion);
    if (!isEditor) {
        isEditor = await isUserEditorOrder(userId, template.occasion);
    }

    if (!isEditor) {
      console.error(`User ${userId} is not an editor for occasion ${template.occasion}`);
      return new Response(
        JSON.stringify({ error: "Forbidden: User is not an editor" }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 403 },
      );
    }

    // Send the email using the provided template and substitutions.
    await sendEmailWithSubs({
      to: email,
      subject: template.subject,
      content: template.html,
      subs,
      from: `Festapp <${_DEFAULT_EMAIL}>`,
    });

    console.log("Email sent to:", email);

    // Log the email in the "log_emails" table.
    const { error: logError } = await supabaseAdmin
      .from("log_emails")
      .insert({
        from: _DEFAULT_EMAIL,
        to: email,
        template: template.id, // Assuming the template model includes an 'id'
        organization: template.organization,
      });

    if (logError) {
      console.error("Error logging email:", logError);
    } else {
      console.log("Email logged successfully.");
    }

    return new Response(JSON.stringify({ email }), {
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
