const _OnesignalAppId_ = Deno.env.get('ONESIGNAL_APP_ID')!
const _OnesignalUserAuthKey_ = Deno.env.get('USER_AUTH_KEY')!
const _OnesignalRestApiKey_ = Deno.env.get('ONESIGNAL_REST_API_KEY')!

Deno.serve(async (req) => {
    const { record } = await req.json();
    const url = 'https://onesignal.com/api/v1/notifications';

    var payload = {};
    if (record.to){
     payload = {
            app_id: _OnesignalAppId_,
            include_aliases: { "external_id": record.to},
            target_channel: "push",
            headings: { en: record.heading },
            contents: { en: record.content },
          };
    } else {

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
