import { sendEmailWithSubs } from "../_shared/emailClient.ts";
import { generateTicketImage, fetchTicketResources } from "../_shared/generateTicket.ts";
import { generateNamedTicketImage, fetchNamedTicketResources } from "../_shared/generateNamedTicket.ts";

import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";
import { getEmailTemplateAndWrapper, supabaseAdmin, isUserEditor, getSupabaseUser } from "../_shared/supabaseUtil.ts";

const _DEFAULT_EMAIL = Deno.env.get("DEFAULT_EMAIL")!;

// CORS Headers.
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

/**
 * Main function served by Deno. Orchestrates fetching tickets and sending emails.
 */
Deno.serve(async (req) => {
  try {
    // Handle CORS preflight request.
    if (req.method === "OPTIONS") {
      return new Response("ok", { headers: corsHeaders });
    }

    const user = await getSupabaseUser(req.headers.get("Authorization")!);
    console.log("user:", user);
    const userId = user.user.id;
    console.log("Authenticated user:", userId);

    // Parse request body.
    const reqData = await req.json();
    const { orderId, email } = reqData;

    if (typeof orderId !== "number" || typeof email !== "string") {
      return new Response(
        JSON.stringify({ error: "Invalid input parameters" }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 400,
        }
      );
    }

    // Call the "get_order" RPC to fetch the entire order (which includes order.occasion and order.data).
    const { data: order, error: orderError } = await supabaseAdmin.rpc("get_order", { order_id: orderId });
    console.log("order:", order, "orderError:", orderError);
    if (orderError || !order) {
      console.error("Order not found or error occurred:", orderError);
      return new Response(JSON.stringify({ error: "Order not found" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 404,
      });
    }

    const occasionId = order.occasion;

    // Check if user is editor for the occasion.
    const userIsEditor = await isUserEditor(userId, occasionId);
    if (!userIsEditor) {
      console.error(`User ${userId} is not an editor for occasion ${occasionId}`);
      return new Response(
        JSON.stringify({ error: "Forbidden: Not an editor" }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 403,
        }
      );
    }

    // Fetch occasion data for the email template.
    const { data: occasionData, error: occasionError } = await supabaseAdmin
      .from("occasions")
      .select("organization, title, features")
      .eq("id", occasionId)
      .single();

    if (occasionError || !occasionData) {
      console.error("Occasion not found:", occasionError);
      return new Response(JSON.stringify({ error: "Occasion not found" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 404,
      });
    }

    const occasionTitle = occasionData.title;
    const features = occasionData.features;

    // Determine if the ticket feature is enabled.
    const ticketFeature = features?.find((feature: any) => feature.code === "ticket");
    const isTicketEnabled = ticketFeature?.is_enabled ?? false;

    // Fetch the tickets only if the ticket feature is enabled.
    let tickets: any[] = [];
    if (isTicketEnabled) {
      const { data: fetchedTickets, error: ticketsError } = await supabaseAdmin.rpc(
        "get_tickets_with_details",
        { order_id: orderId }
      );

      if (ticketsError || !fetchedTickets) {
        console.error("Error fetching tickets:", ticketsError);
        return new Response(JSON.stringify({ error: "Error fetching tickets" }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 500,
        });
      }

      tickets = fetchedTickets.filter((t: any) => t.state !== "storno");
      if (!tickets.length) {
        return new Response(JSON.stringify({ error: "No valid tickets" }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 400,
        });
      }
    }

    // Instead of directly querying email_templates, call the RPC procedure.
    const organizationId = occasionData.organization;
    const context = { organization: organizationId, occasion: occasionId };
    const templateAndWrapper: any = await getEmailTemplateAndWrapper("TICKET_ORDER_PAYMENT_DONE", context);
    if (!templateAndWrapper || !templateAndWrapper.template) {
      console.error("Email template not found for code TICKET_ORDER_PAYMENT_DONE.");
      return new Response(JSON.stringify({ error: "Email template not found" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 404,
      });
    }

    let attachments: Array<{
      filename: string;
      content: Uint8Array;
      contentType: string;
      encoding: "binary" | "base64";
    }> = [];

    if (isTicketEnabled) {
      const isNamedTicket = ticketFeature?.ticket_type === "named";
      const resources = isNamedTicket
        ? await fetchNamedTicketResources(tickets[0])
        : await fetchTicketResources(tickets[0]);

      for (const ticket of tickets) {
        try {
          console.log("Generating PDF for ticket:", ticket.ticket_symbol);
          const pdfBytes = isNamedTicket
            ? await generateNamedTicketImage(ticket, resources, order.data, "cs")
            : await generateTicketImage(ticket, resources);
          attachments.push({
            filename: `ticket_${ticket.ticket_symbol}.pdf`,
            content: pdfBytes,
            contentType: "application/pdf",
            encoding: "binary",
          });
        } catch (error) {
          console.error(`Error generating PDF for ticket ${ticket.id}:`, error);
        }
      }

      if (!attachments.length) {
        return new Response(JSON.stringify({ error: "Failed to generate any ticket PDFs" }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 500,
        });
      }
    }

    console.log("Sending email...");
    await sendEmailWithSubs({
      to: email,
      subject: templateAndWrapper.template.subject,
      content: templateAndWrapper.template.html,
      subs: { occasionTitle },
      from: `${occasionTitle} | Festapp <${_DEFAULT_EMAIL}>`,
      attachments,
      wrapper: templateAndWrapper.wrapper ? templateAndWrapper.wrapper.html : null,
    });

    // Log the email sending in the database.
    await supabaseAdmin.from("log_emails").insert({
      from: _DEFAULT_EMAIL,
      to: email,
      template: templateAndWrapper.template.id,
      organization: organizationId,
      occasion: occasionId,
    });

    const ticketIds = tickets.map((ticket) => ticket.id);
    const { error: updateError } = await supabaseAdmin.rpc(
      "update_order_and_tickets_to_sent",
      { order_id: orderId, ticket_ids: ticketIds }
    );

    if (updateError) {
      console.error("Failed to update order and tickets to sent:", updateError);
      return new Response(
        JSON.stringify({ error: "Failed to update order/tickets to sent" }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 500,
        }
      );
    }

    return new Response(
      JSON.stringify({ message: "Tickets sent successfully", code: 200 }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (error) {
    console.error("Unexpected error:", error);
    return new Response(
      JSON.stringify({ error: "Unexpected error occurred" }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
});
