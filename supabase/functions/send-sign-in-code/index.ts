import { sendEmailWithSubs } from "../_shared/emailClient.ts";
import { translatePlatformLinks } from "../_shared/translatePlatformLinks.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.46.2';

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

    const supabaseUser = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      { global: { headers: { Authorization: req.headers.get('Authorization')! } } }
    );

    const reqData = await req.json();
    const userId = reqData.usr;  // ID of the user to invite
    const occasionId = reqData.oc;  // ID of the occasion

    const code = Math.floor(100000 + Math.random() * 900000).toString();

    const { data: answer, error: passwordSetError } = await supabaseUser.rpc("set_user_password", {
      usr: userId,
      oc: occasionId,
      password: code
    });

    if (passwordSetError || !answer) {
      console.error("Password change has failed.");
      return new Response(JSON.stringify({ error: "Password change fail" }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 403,
      });
    }

    const occasionUser = await supabaseAdmin
      .from("occasion_users")
      .select("data")
      .eq("user", userId)
      .eq("occasion", occasionId)
      .single();

    if (!occasionUser.data) {
      console.error("User is not part of the occasion.");
      return new Response(JSON.stringify({ error: "User is not part of the occasion" }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 404,
      });
    }

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
    const appName = orgConfig.APP_NAME || "DefaultAppName";
    const defaultLang = orgConfig.DEFAULT_LANGUAGE || "en";
    const platforms = orgConfig.PLATFORMS || [];

    const platformLinksHtml = translatePlatformLinks(platforms, defaultLang);

    const template = await supabaseAdmin
      .from("email_templates")
      .select()
      .eq("organization", organizationId)
      .eq("code", "SIGN_IN_CODE")
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
      appName: appName,
      platformLinks: platformLinksHtml,
    };

    await sendEmailWithSubs({
      to: occasionUser.data.data.email, // Use the user’s email from the data field
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

    occasionUser.data.data.is_invited = true;
    const { error: updateError } = await supabaseAdmin
      .from("occasion_users")
      .update({ data: occasionUser.data.data }) // Preserve other data, update only is_invited
      .eq("user", userId)
      .eq("occasion", occasionId)
      .select()
      .single();

    if (updateError) {
      console.error("Failed to update is_invited status:", updateError);
      return new Response(JSON.stringify({ error: "Failed to update invitation status" }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      });
    }

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
