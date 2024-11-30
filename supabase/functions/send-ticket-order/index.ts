import { sendEmailWithSubs } from "../_shared/emailClient.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.38.4';

const _DEFAULT_EMAIL = Deno.env.get("DEFAULT_EMAIL")!;

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const supabaseAdmin = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
);

Deno.serve(async (req) => {
  try {
    if (req.method === 'OPTIONS') {
      return new Response('ok', { headers: corsHeaders });
    }

    const reqData = await req.json();
    const userId = reqData.usr;  // ID of the user to invite
    const occasionId = reqData.oc;  // ID of the occasion


    const { data: answer, error: passwordSetError } = await supabaseAdmin.rpc("set_user_password",
    {
        usr: userId,
        oc: occasionId,
        password: code
    });

    const { data: occasionData, error: occasionError } = await supabaseAdmin
      .from("occasions")
      .select("organization")
      .eq("id", occasionId)
      .single();

    if (occasionError) {
      console.error("Occasion not found.");
      return new Response(JSON.stringify({ error: "Occasion not found" }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 404,
      });
    }

    const organizationId = occasionData.organization;

    const orgData = await supabaseAdmin
        .from("organizations")
        .select("data")
        .eq("id", organizationId)
        .single();

    const orgConfig = orgData.data.data;
    const appName = orgConfig.APP_NAME || "";
    const defaultUrl = orgConfig.DEFAULT_URL || "";

    // Fetch email template based on the organization
    const template = await supabaseAdmin
      .from("email_templates")
      .select()
      .eq("organization", organizationId)
      .eq("id", "SIGN_IN_CODE")
      .single();

    if (template.error || !template.data) {
      console.error("Email template not found for the organization.");
      return new Response(JSON.stringify({ error: "Email template not found" }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 404,
      });
    }

    const subs = {
      code: code,
      email: occasionUser.data.data.email, // Access the user's email from the data field
    };

    await sendEmailWithSubs({
      to: occasionUser.data.data.email,  // Use the user’s email from the data field
      subject: template.data.subject,
      content: template.data.html,
      subs,
      from: `${appName} | Festapp <${_DEFAULT_EMAIL}>`,
    });

  await supabaseAdmin
    .from("log_emails")
    .insert({
      "from": _DEFAULT_EMAIL,
      "to": occasionUser.data.data.email,
      "template": template.data.id,
      "organization": organizationId
    });


    return new Response(JSON.stringify({ "user": userId, "code": 200 }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });

  } catch (error) {
    console.error("Unexpected error:", error);
    return new Response(JSON.stringify({ error: "Unexpected error occurred" }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    });
  }
});
