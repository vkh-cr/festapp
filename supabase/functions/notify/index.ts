import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.38.4'

const _OnesignalAppId_ = Deno.env.get('ONESIGNAL_APP_ID')!
const _OnesignalUserAuthKey_ = Deno.env.get('USER_AUTH_KEY')!
const _OnesignalRestApiKey_ = Deno.env.get('ONESIGNAL_REST_API_KEY')!
const _DEFAULT_URL = Deno.env.get('DEFAULT_URL')!

const _supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
)

Deno.serve(async (req) => {
    const { record } = await req.json();
    const url = 'https://onesignal.com/api/v1/notifications';

    const currentLink = await _supabase
              .from("occasions")
              .select("link")
              .eq("id", record.occasion)
              .single();

    var payload = {};

    if (record.to) {
         payload = {
                app_id: _OnesignalAppId_,
                web_url: _DEFAULT_URL + "/#/" + currentLink.data.link + "/news",
                include_aliases: { "external_id": record.to},
                target_channel: "push",
                headings: { en: record.heading },
                contents: { en: record.content },
              };
    } else {
        payload = {
            app_id: _OnesignalAppId_,
            included_segments: ["All"],
            headings: { en: record.heading },
            contents: { en: record.content },
          };
    }

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${_OnesignalRestApiKey_}`,
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
})
