import { sendEmailWithSubs } from "../_shared/emailClient.ts";
import { translatePlatformLinks } from "../_shared/translatePlatformLinks.ts";
import { supabaseAdmin } from "../_shared/supabaseUtil.ts";

const _DEFAULT_EMAIL = Deno.env.get("DEFAULT_EMAIL")!;

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  try {
    if (req.method === 'OPTIONS') {
      return new Response('ok', { headers: corsHeaders });
    }

    const reqData = await req.json();
    const userEmail = reqData.email.trim();
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
    const appName = orgConfig.APP_NAME;
    const defaultUrl = orgConfig.DEFAULT_URL;

    if (!appName || !defaultUrl) {
      console.error("Required configuration is missing.");
      return new Response(
        JSON.stringify({ error: "Missing required configuration" }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 400,
        }
      );
    }

    const userData = await supabaseAdmin
      .from("user_info")
      .select()
      .eq("email_readonly", userEmail)
      .eq("organization", organizationId)
      .maybeSingle();

    if (userData.data != null) {
      return new Response(JSON.stringify({ "email": userEmail, "code": 409 }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      });
    }

    const code = Math.floor(100000 + Math.random() * 900000).toString();

    const { data } = await supabaseAdmin.rpc("create_user_in_organization_with_data", {
      org: organizationId,
      email: userEmail,
      password: code,
      data: reqData,
    });

    const template = await supabaseAdmin
      .from("email_templates")
      .select()
      .eq("code", "SIGN_IN_CODE")
      .eq("organization", organizationId)
      .single();

    if (template.error || !template.data) {
      console.error("Email template not found.");
      return new Response(JSON.stringify({ error: "Email template not found" }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 404,
      });
    }

    const platforms = orgConfig.PLATFORMS || [];
    const defaultLang = orgConfig.DEFAULT_LANGUAGE || "en";

    const platformLinksHtml = translatePlatformLinks(platforms, defaultLang);

    // Prepare substitutions
    const subs = {
      code: code,
      email: userEmail,
      platformLinks: platformLinksHtml,
      appName: appName,
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
        "organization": organizationId
      });

    return new Response(JSON.stringify({ "email": userEmail, "code": 200 }), {
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
