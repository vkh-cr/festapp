import { sendEmailWithSubs } from "../_shared/emailClient.ts";
import { translatePlatformLinks } from "../_shared/translatePlatformLinks.ts";
import { supabaseAdmin, getEmailTemplateAndWrapper } from "../_shared/supabaseUtil.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.46.2';

const _DEFAULT_EMAIL = Deno.env.get("DEFAULT_EMAIL")!;

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
  const organizationId = reqData.organization;

  const orgData = await supabaseAdmin
    .from("organizations")
    .select("data")
    .eq("id", organizationId)
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
  const platforms = orgConfig.PLATFORMS || [];
  const defaultLang = orgConfig.DEFAULT_LANGUAGE || "en";

  // Generate platform links HTML
  const platformLinksHtml = translatePlatformLinks(platforms, defaultLang);

  const userData = await supabaseAdmin
    .from("user_info")
    .select()
    .eq("organization", organizationId)
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

  // Build the context for template selection.
  // For a reset password email, we may only need organization.
  const context = { organization: organizationId };

  // Call the stored procedure to get both the email template and the wrapper.
  const templateAndWrapper: any = await getEmailTemplateAndWrapper("RESET_PASSWORD", context);
  if (!templateAndWrapper || !templateAndWrapper.template) {
    console.error("Template not found for code RESET_PASSWORD.");
    return new Response(JSON.stringify({ error: "Template not found" }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 404,
    });
  }

  const resetPasswordLink = `${defaultUrl}/#/resetPassword?token=${token}`;

  // Prepare substitutions
  const subs = {
    resetPasswordLink: resetPasswordLink,
    platformLinks: platformLinksHtml,
    appName: appName,
  };

  await sendEmailWithSubs({
    to: userEmail,
    subject: templateAndWrapper.template.subject,
    content: templateAndWrapper.template.html,
    subs,
    wrapper: templateAndWrapper.wrapper.html,
    from: `${appName} | Festapp <${_DEFAULT_EMAIL}>`,
  });

  await supabaseAdmin
    .from("log_emails")
    .insert({
      "from": _DEFAULT_EMAIL,
      "to": userEmail,
      "template": templateAndWrapper.template.id,
      "organization": organizationId
    });

  return new Response(JSON.stringify({ "email": userEmail }), {
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    status: 200,
  });
});
