import { sendEmailWithSubs } from "../_shared/emailClient.ts";
import { supabaseAdmin, getEmailTemplateAndWrapper } from "../_shared/supabaseUtil.ts";
import { getTicketOrderStornoTemplate } from "./getTicketOrderStornoTemplate.ts";

const _DEFAULT_EMAIL = Deno.env.get("DEFAULT_EMAIL")!;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  try {
    if (req.method === "OPTIONS") {
      return new Response("ok", { headers: corsHeaders });
    }

    const reqData = await req.json();
    const templateCode = reqData.templateCode;
    let subs: Record<string, string> = {};
    let sender: string;
    let receiver: string;
    let context: any;

    console.log("Received request:", reqData);

    // Ensure templateCode is provided and supported
    if (!templateCode) {
      console.error("Template code is missing.");
      return new Response(JSON.stringify({ error: "Template code is required" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 400,
      });
    }

    switch (templateCode) {
      case "TICKET_ORDER_STORNO": {
        const result = await getTicketOrderStornoTemplate(reqData, req.headers.get("Authorization")!);
        ({ subs, sender, receiver, context } = result);
        break;
      }
      default:
        console.error(`Unsupported template code: ${templateCode}`);
        return new Response(JSON.stringify({ error: "Unsupported template code" }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 400,
        });
    }

    console.log("Substitutions (subs):", subs);
    console.log("Sender:", sender);
    console.log("Receiver:", receiver);
    console.log("Context for template selection:", context);

    // Now, in the main file, fetch the email template and wrapper via RPC using the context.
    const templateAndWrapper: any = await getEmailTemplateAndWrapper("TICKET_ORDER_STORNO", context);
    if (!templateAndWrapper || !templateAndWrapper.template) {
      console.error("Template not found for code TICKET_ORDER_STORNO.");
      return new Response(JSON.stringify({ error: "Template not found" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 404,
      });
    }

    console.log("Template Data:", templateAndWrapper.template);

    console.log("Prepared email data. Sending email...");

    await sendEmailWithSubs({
      to: receiver,
      subject: templateAndWrapper.template.subject,
      content: templateAndWrapper.template.html,
      subs,
      from: `${sender || "Festapp"} | Festapp <${_DEFAULT_EMAIL}>`,
      wrapper: templateAndWrapper.wrapper ? templateAndWrapper.wrapper.html : null,
    });

    console.log("Email sent to:", receiver);

    await supabaseAdmin
      .from("log_emails")
      .insert({
        from: _DEFAULT_EMAIL,
        to: reqData.email,
        template: templateAndWrapper.template.id,
        organization: context.organization,
      });

    console.log("Email logged in database.");

    return new Response(JSON.stringify({ email: reqData.email }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Unexpected error:", error);
    return new Response(JSON.stringify({ error: "Unexpected error occurred" }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
