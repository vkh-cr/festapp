import { deliverEmail, EmailTemplateNotFoundError } from "../_shared/emailDelivery.ts";
import { translatePlatformLinks } from "../_shared/translatePlatformLinks.ts";
import { supabaseAdmin } from "../_shared/supabaseUtil.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.58.0';

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
  const userEmail = reqData.email ? reqData.email.toLowerCase() : "michael.bujnovsky@festapp.net";
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
    .select("id,email_readonly")
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
  const { data: deliveryEmail, error: deliveryEmailError } =
    await supabaseAdmin.rpc("get_user_delivery_email", { p_user: userId });
  if (deliveryEmailError || !deliveryEmail) {
    return new Response(JSON.stringify({ error: "Delivery email unavailable" }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    });
  }
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

  const context = { organization: organizationId };

  const resetPasswordLink = `${defaultUrl}/resetPassword?token=${token}`;

  // Prepare substitutions
  const subs = {
    email: userData.data.email_readonly,
    resetPasswordLink: resetPasswordLink,
    platformLinks: platformLinksHtml,
    appName: appName,
  };

  try {
    await deliverEmail({
      to: deliveryEmail,
      recipientUser: userId,
      templateCode: "RESET_PASSWORD",
      context,
      substitutions: subs,
      from: `${appName} | Festapp <${_DEFAULT_EMAIL}>`,
    });
  } catch (error) {
    if (error instanceof EmailTemplateNotFoundError) {
      return new Response(JSON.stringify({ error: "Template not found" }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 404,
      });
    }
    return new Response(
      JSON.stringify({ error: "Failed to send reset password email" }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      },
    );
  }

  return new Response(JSON.stringify({ "email": userEmail }), {
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    status: 200,
  });
});
