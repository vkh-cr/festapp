import { sendEmailWithSubs } from "../_shared/emailClient.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.38.4';

const _DEFAULT_EMAIL = Deno.env.get("DEFAULT_EMAIL")!;
const supabaseAdmin = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
);

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  const reqData = await req.json();
  const userEmail = reqData.email ? reqData.email.toLowerCase() : "bujnmi@gmail.com";
  const organization = reqData.organization;

  const orgData = await supabaseAdmin
    .from("organizations")
    .select("data")
    .eq("id", organization)
    .single();

  if (orgData.error || !orgData.data) {
    console.error("Organization data not found.");
    return new Response(JSON.stringify({ error: "Organization data not found" }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 404,
    });
  }

  const orgConfig = orgData.data.data;
  const appName = orgConfig.APP_NAME || "DefaultAppName";
  const defaultUrl = orgConfig.DEFAULT_URL || "http://default.url";

  const userData = await supabaseAdmin
    .from("user_info")
    .select()
    .eq("organization", organization)
    .ilike("email_readonly", userEmail)
    .maybeSingle();

  if (userData.data == null) {
    return new Response(JSON.stringify({ "email": userEmail }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });
  }

  const userId = userData.data.id;
  const token = crypto.randomUUID();

  await supabaseAdmin
    .from("user_reset_token")
    .delete()
    .eq("user", userId);

  await supabaseAdmin
    .from("user_reset_token")
    .insert({
      "user": userId,
      "token": token,
    });

  const template = await supabaseAdmin
    .from("email_templates")
    .select()
    .eq("id", "RESET_PASSWORD")
    .eq("organization", organization)
    .single();

  if (template.error || !template.data) {
    console.error("Template not found for the specified organization.");
    return new Response(JSON.stringify({ error: "Template not found" }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 404,
    });
  }

  const resetPasswordLink = `${defaultUrl}/#/resetPassword?token=${token}`;
  const subs = {
    resetPasswordLink: resetPasswordLink,
  };

  await sendEmailWithSubs({
    to: userEmail,
    subject: template.data.subject,
    content: template.data.html,
    subs,
    from: `${appName} | Festapp <${_DEFAULT_EMAIL}>`,
  });

  await supabaseAdmin
    .from("log_emails")
    .insert({
      "from": _DEFAULT_EMAIL,
      "to": userEmail,
      "template": template.data.id,
      "organization": organization
    });

  return new Response(JSON.stringify({ "email": userEmail }), {
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    status: 200,
  });
});
