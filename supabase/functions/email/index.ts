import { SMTPClient } from "https://deno.land/x/denomailer/mod.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.38.4'

const _SMTP_HOSTNAME = Deno.env.get('SMTP_HOSTNAME')!;
const _SMTP_USER_NAME = Deno.env.get('SMTP_USER_NAME')!;
const _SMTP_USER_PASSWORD = Deno.env.get('SMTP_USER_PASSWORD')!;
const _DEFAULT_EMAIL = Deno.env.get('DEFAULT_EMAIL')!;

const _supabase = createClient(
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
  console.log(reqData);

  const userEmail = reqData.email != null ? reqData.email.toLowerCase() : "bujnmi@gmail.com";
  const organization = reqData.organization;

  // Fetch organization data to get appName and defaultUrl
  const orgData = await _supabase
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

  // Search for user by email and organization in user_info
  const userData = await _supabase
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

  await _supabase
    .from("user_reset_token")
    .delete()
    .eq("user", userId);

  await _supabase
    .from("user_reset_token")
    .insert({
      "user": userId,
      "token": token,
    });

  // Fetch email template for the organization
  const template = await _supabase
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

  let html = template.data.html;
  html = html.replaceAll(`{{.ResetPasswordLink}}`, `${defaultUrl}/#/resetPassword?token=${token}`);
  const client = new SMTPClient({
    connection: {
      hostname: _SMTP_HOSTNAME,
      port: 465,
      tls: true,
      auth: {
        username: _SMTP_USER_NAME,
        password: _SMTP_USER_PASSWORD,
      },
    },
  });

  await client.send({
    from: `${appName} | Festapp <${_DEFAULT_EMAIL}>`,
    to: userEmail,
    subject: template.data.subject,
    html: html,
  });

  await client.close();

  await _supabase
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
