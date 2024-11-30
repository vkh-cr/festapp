import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.38.4'

const supabaseAdmin = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
);

Deno.serve(async (req) => {
  const { record } = await req.json();
  const organizationId = record.organization; // assuming `organization` is passed in `record`
  const url = 'https://onesignal.com/api/v1/notifications';

  // Fetch organization data to get ONESIGNAL_APP_ID, ONESIGNAL_REST_API_KEY, and DEFAULT_URL
  const orgData = await supabaseAdmin
    .from("organizations")
    .select("data")
    .eq("id", organizationId)
    .single();

  if (orgData.error || !orgData.data) {
    console.error("Organization data not found.");
    return new Response(JSON.stringify({ error: "Organization data not found" }), {
      headers: { 'Content-Type': 'application/json' },
      status: 404,
    });
  }

  const orgConfig = orgData.data.data;
  const onesignalAppId = orgConfig.ONESIGNAL_APP_ID;
  const onesignalRestApiKey = orgConfig.ONESIGNAL_REST_API_KEY;
  const defaultUrl = orgConfig.DEFAULT_URL;

  // Check if any required config values are missing
  if (!onesignalAppId || !onesignalRestApiKey || !defaultUrl) {
    console.error("Required organization configuration is missing.");
    return new Response(
      JSON.stringify({ error: "Missing required organization configuration" }),
      {
        headers: { 'Content-Type': 'application/json' },
        status: 400,
      }
    );
  }

  // Fetch the link for the current occasion
  const currentLink = await supabaseAdmin
    .from("occasions")
    .select("link")
    .eq("id", record.occasion)
    .single();

  if (currentLink.error || !currentLink.data) {
    console.error("Occasion link not found.");
    return new Response(JSON.stringify({ error: "Occasion link not found" }), {
      headers: { 'Content-Type': 'application/json' },
      status: 404,
    });
  }

  // Construct payload for OneSignal notification
  let payload: Record<string, any> = {};

  if (record.to) {
    payload = {
      app_id: onesignalAppId,
      web_url: `${defaultUrl}/#/${currentLink.data.link}/news`,
      include_aliases: { "external_id": record.to },
      target_channel: "push",
      headings: { en: record.heading },
      contents: { en: record.content },
    };
  } else {
    payload = {
      app_id: onesignalAppId,
      included_segments: ["All"],
      headings: { en: record.heading },
      contents: { en: record.content },
    };
  }

  // Send notification to OneSignal
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${onesignalRestApiKey}`,
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorData = await response.json();
    console.error('Error sending notification:', errorData);
  } else {
    const data = await response.json();
    console.log('Notification sent successfully:', data);
  }
});
