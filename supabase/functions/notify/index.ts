import { createClient } from "https://esm.sh/@supabase/supabase-js@2.58.0";
import { buildNotificationPayload } from "./notificationPayload.ts";

const supabaseAdmin = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
);

Deno.serve(async (req) => {
  const { record } = await req.json();
  const organizationId = record.organization; // assuming `organization` is passed in `record`
  const url = "https://onesignal.com/api/v1/notifications";

  // Fetch organization data to get ONESIGNAL_APP_ID, ONESIGNAL_REST_API_KEY, and DEFAULT_URL
  const orgData = await supabaseAdmin
    .from("organizations")
    .select("data")
    .eq("id", organizationId)
    .single();

  if (orgData.error || !orgData.data) {
    console.error("Organization data not found.");
    return new Response(
      JSON.stringify({ error: "Organization data not found" }),
      {
        headers: { "Content-Type": "application/json" },
        status: 404,
      },
    );
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
        headers: { "Content-Type": "application/json" },
        status: 400,
      },
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
      headers: { "Content-Type": "application/json" },
      status: 404,
    });
  }

  // Optional deep-link target path within the occasion (e.g. "cleaning").
  // Falls back to "news" so existing notifications are unaffected.
  const targetPath =
    (record.data && typeof record.data.path === "string" && record.data.path)
      ? record.data.path
      : "news";

  const payload = buildNotificationPayload({
    appId: onesignalAppId,
    defaultUrl,
    occasionLink: currentLink.data.link,
    targetPath,
    recipient: record.to,
    heading: record.heading,
    content: record.content,
  });

  // Send notification to OneSignal
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${onesignalRestApiKey}`,
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    console.error("Notification delivery failed with status:", response.status);
    return new Response(
      JSON.stringify({ error: "notification_delivery_failed" }),
      {
        status: 502,
        headers: { "Content-Type": "application/json" },
      },
    );
  } else {
    return new Response(JSON.stringify({ status: "accepted" }), {
      status: 202,
      headers: { "Content-Type": "application/json" },
    });
  }
});
