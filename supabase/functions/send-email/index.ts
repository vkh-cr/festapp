import { sendEmailWithSubs } from "../_shared/emailClient.ts";
import { supabaseAdmin } from "../_shared/supabaseUtil.ts";
import { getTicketOrderStornoTemplate } from './getTicketOrderStornoTemplate.ts'; // Import the function

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
    const templateCode = reqData.templateCode;
    const organization = reqData.data.organization;
    const occasion = reqData.data.occasion;
    let templateData: any;
    let subs: Record<string, string> = {};
    let sender: string;
    let receiver: string;

    console.log("Received request:", reqData);

    // Ensure templateCode is provided and supported
    if (!templateCode) {
      console.error("Template code is missing.");
      return new Response(JSON.stringify({ error: "Template code is required" }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      });
    }

    switch (templateCode) {
      case "TICKET_ORDER_STORNO":
        ({ templateData, subs, sender, receiver } = await getTicketOrderStornoTemplate(reqData, req.headers.get('Authorization')!));
        break;

      default:
        console.error(`Unsupported template code: ${templateCode}`);
        return new Response(JSON.stringify({ error: "Unsupported template code" }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 400,
        });
    }

    console.log("Template Data:", templateData);
    console.log("Substitutions (subs):", subs);
    console.log("Sender:", sender);
    console.log("Receiver:", receiver);

    console.log("Prepared email data. Sending email...");

    await sendEmailWithSubs({
      to: receiver,
      subject: templateData.subject,
      content: templateData.html,
      subs,
      from: `${sender || "Festapp"} | Festapp <${_DEFAULT_EMAIL}>`, // Use the sender returned from the function
    });

    console.log("Email sent to:", receiver);

    await supabaseAdmin
      .from("log_emails")
      .insert({
        "from": _DEFAULT_EMAIL,
        "to": reqData.email,
        "template": templateData.id,
        "organization": organization,
      });

    console.log("Email logged in database.");

    return new Response(JSON.stringify({ "email": reqData.email }), {
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
