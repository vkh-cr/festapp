import { sendEmailWithSubs } from "../_shared/emailClient.ts";
import { supabaseAdmin, getEmailTemplateAndWrapper } from "../_shared/supabaseUtil.ts";
import { getTicketOrderStornoTemplate } from "./getTicketOrderStornoTemplate.ts";
import { getTicketOrderUpdateTemplate } from "./getTicketOrderUpdateTemplate.ts";
import { AuthError } from "../_shared/auth.ts";

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
    const { templateCode } = reqData;
    let subs: Record<string, string> = {};
    let sender: string;
    let receiver: string;
    let context: any;
    let attachments: any[] = []; // Initialize attachments array

    console.log("Received request for template:", templateCode);

    if (!templateCode) {
      return new Response(JSON.stringify({ error: "Template code is required" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 400,
      });
    }

    // --- Template Data Gathering ---
    switch (templateCode) {
      case "TICKET_ORDER_STORNO": {
        const result = await getTicketOrderStornoTemplate(reqData, req.headers.get("Authorization")!);
        ({ subs, sender, receiver, context } = result);
        break;
      }
      case "TICKET_ORDER_UPDATE": {
        const result = await getTicketOrderUpdateTemplate(reqData, req.headers.get("Authorization")!);
        ({ subs, sender, receiver, context, attachments } = result);
        break;
      }
      default:
        return new Response(JSON.stringify({ error: `Unsupported template code: ${templateCode}` }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 400,
        });
    }

    console.log("Substitutions (subs):", subs);
    console.log("Sender:", sender);
    console.log("Receiver:", receiver);
    console.log("Context for template selection:", context);

    // --- Email Template Fetching and Sending ---
    const templateAndWrapper: any = await getEmailTemplateAndWrapper(templateCode, context);
    if (!templateAndWrapper || !templateAndWrapper.template) {
      return new Response(JSON.stringify({ error: `Template not found for code ${templateCode}` }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 404,
      });
    }

    console.log(`Sending email to ${receiver} with ${attachments.length} attachments.`);

    await sendEmailWithSubs({
      to: receiver,
      subject: templateAndWrapper.template.subject,
      content: templateAndWrapper.template.html,
      subs,
      from: `${sender || "Festapp"} | Festapp <${_DEFAULT_EMAIL}>`,
      wrapper: templateAndWrapper.wrapper ? templateAndWrapper.wrapper.html : null,
      attachments,
    });

    console.log("Email sent successfully.");

    // --- Logging ---
    await supabaseAdmin.from("log_emails").insert({
      from: _DEFAULT_EMAIL,
      to: receiver,
      template: templateAndWrapper.template.id,
      organization: context.organization,
      occasion: context.occasion,
    });

    console.log("Email logged in database.");

    // --- Post-Action: Update Order History ---
    if (templateCode === "TICKET_ORDER_UPDATE" && context?.orderHistoryId) {
      console.log(`Flagging order history record as sent: ${context.orderHistoryId}`);

      const { error: rpcError } = await supabaseAdmin.rpc('add_sent_to_customer_flag', {
        history_id: context.orderHistoryId
      });

      if (rpcError) {
        // Log the error but don't fail the request, as the email was already sent.
        console.error("Error updating order history:", rpcError);
      } else {
        console.log("Order history updated successfully.");
      }
    }

    return new Response(JSON.stringify({ message: "Email sent successfully." }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });

  } catch (error) {
    // Handle both custom AuthError and any other unexpected errors.
    const isAuthError = error instanceof AuthError;
    const status = isAuthError ? error.status : 500;
    const message = error.message || "An unexpected error occurred";

    console.error(`Error [${status}]: ${message}`, isAuthError ? '' : error);

    return new Response(JSON.stringify({ error: message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: status,
    });
  }
});