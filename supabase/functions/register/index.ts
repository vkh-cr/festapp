import { sendEmailWithSubs } from "../_shared/emailClient.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.38.4';

const _DEFAULT_EMAIL = Deno.env.get("DEFAULT_EMAIL")!;

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
  const userEmail = reqData.email.trim();
  const organizationId = reqData.organization;

  const orgData = await _supabase
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

  const userData = await _supabase
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

  const { data } = await _supabase.rpc("create_user_in_organization_with_data", {
    org: organizationId,
    email: userEmail,
    password: code,
    data: reqData,
  });

  const template = await _supabase
    .from("email_templates")
    .select()
    .eq("id", "SIGN_IN_CODE")
    .single();

  const subs = {
    code: code,
    email: userEmail,
  };

  await sendEmailWithSubs({
    to: userEmail,
    subject: template.data.subject,
    content: template.data.html,
    subs,
    from: `${appName} | Festapp <${_DEFAULT_EMAIL}>`,
  });

  await _supabase
    .from("log_emails")
    .insert({
      "from": _DEFAULT_EMAIL,
      "to": userEmail,
      "template": template.data.id,
    });

  return new Response(JSON.stringify({ "email": userEmail, "code": 200 }), {
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    status: 200,
  });
});
