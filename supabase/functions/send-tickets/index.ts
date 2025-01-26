/**
 * sendTickets.ts
 *
 * This Edge Function:
 *  - Authenticates the user (must be editor for the occasion).
 *  - Fetches tickets and an email template from Supabase.
 *  - Uses generateTicketImage(...) to produce a PDF in memory (no temp files).
 *  - Sends each ticket PDF as an email attachment (using sendEmailWithSubs).
 */

import { sendEmailWithSubs } from "../_shared/emailClient.ts";
import { generateTicketImage, fetchTicketResources } from "../_shared/generateTicket.ts"; // Ensure this path is correct
import { createClient, SupabaseClient } from "https://esm.sh/@supabase/supabase-js@2.46.2";

// Initialize Supabase client
const supabaseAdmin: SupabaseClient = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
);

// Default sender email
const _DEFAULT_EMAIL = Deno.env.get("DEFAULT_EMAIL")!;

// CORS Headers
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

/**
 * Checks if the user is an editor for the given occasion.
 * @param userId - The UUID of the user.
 * @param occasionId - The ID of the occasion.
 * @returns A Promise that resolves to a boolean indicating editor status.
 */
async function isUserEditor(
  userId: string,
  occasionId: bigint
): Promise<boolean> {
  const { data, error } = await supabaseAdmin
    .from("occasion_users")
    .select("is_editor")
    .eq("user", userId)
    .eq("occasion", occasionId)
    .single();

  if (error || !data) {
    console.error("Error fetching user role:", error);
    return false;
  }
  return data.is_editor;
}

/**
 * Main function served by Deno. Orchestrates fetching tickets and sending emails.
 */
Deno.serve(async (req) => {
  try {
    // Handle CORS preflight request
    if (req.method === "OPTIONS") {
      return new Response("ok", { headers: corsHeaders });
    }

    // Set up a Supabase client for the requesting user
    const supabaseUser = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? "",
      {
        global: {
          headers: { Authorization: req.headers.get("Authorization")! },
        },
      }
    );

    // Auth check
    const { data: user, error: userError } = await supabaseUser.auth.getUser();
    if (userError || !user) {
      console.error("User authentication failed:", userError);
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 401,
      });
    }

    const userId = user.user.id;
    console.log("Authenticated user:", userId);

    // Parse request body
    const reqData = await req.json();
    const { orderId, email } = reqData;

    if (typeof orderId !== "number" || typeof email !== "string") {
      return new Response(JSON.stringify({ error: "Invalid input parameters" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 400,
      });
    }

    // Fetch order => get occasion ID
    const { data: orderData, error: orderError } = await supabaseAdmin
      .schema("eshop")
      .from("orders")
      .select("occasion")
      .eq("id", orderId)
      .single();

    if (orderError || !orderData) {
      console.error("Order not found:", orderError);
      return new Response(JSON.stringify({ error: "Order not found" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 404,
      });
    }

    const occasionId = orderData.occasion;

    // Check if user is editor
    const userIsEditor = await isUserEditor(userId, occasionId);
    if (!userIsEditor) {
      console.error(`User ${userId} is not an editor for occasion ${occasionId}`);
      return new Response(JSON.stringify({ error: "Forbidden: Not an editor" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 403,
      });
    }

    // Fetch occasion data for the email template
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

    // Determine if ticket feature is enabled
    const ticketFeature = features?.find((feature: any) => feature.code === "ticket");
    const isTicketEnabled = ticketFeature?.is_enabled ?? false;

    // Fetch the tickets only if ticket feature is enabled
    let tickets: any[] = [];
    if (isTicketEnabled) {
      // Fetch the tickets
      let { data: fetchedTickets, error: ticketsError } = await supabaseAdmin.rpc(
        "get_tickets_with_details",
        {
          order_id: orderId,
        }
      );

      if (ticketsError || !fetchedTickets) {
        console.error("Error fetching tickets:", ticketsError);
        return new Response(JSON.stringify({ error: "Error fetching tickets" }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 500,
        });
      }

      // Filter out canceled tickets
      tickets = fetchedTickets.filter((t: any) => t.state !== "storno");
      if (!tickets.length) {
        return new Response(JSON.stringify({ error: "No valid tickets" }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 400,
        });
      }
    }

    // Fetch email template
    const { data: template, error: templateError } = await supabaseAdmin
      .from("email_templates")
      .select()
      .eq("occasion", occasionId)
      .eq("code", "TICKET_ORDER_PAYMENT_DONE")
      .single();

    if (templateError || !template) {
      console.error("Email template not found:", templateError);
      return new Response(
        JSON.stringify({ error: "Email template not found" }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 404,
        }
      );
    }

    let attachments: Array<{
      filename: string;
      content: Uint8Array;
      contentType: string;
      encoding: "binary" | "base64";
    }> = [];

    if (isTicketEnabled) {
      // Prepare resources once (if needed)
      const resources = await fetchTicketResources(tickets[0]);

      // Generate each ticket PDF in memory
      for (const ticket of tickets) {
        try {
          console.log("Generating PDF for ticket:", ticket.ticket_symbol);

          // "generateTicketImage" now returns a PDF (Uint8Array), renamed to reflect it.
          const pdfBytes = await generateTicketImage(ticket, resources);

          attachments.push({
            filename: `ticket_${ticket.ticket_symbol}.pdf`,
            content: pdfBytes,
            contentType: "application/pdf",
            encoding: "binary", // or "base64" if your mailer requires it
          });
        } catch (error) {
          console.error(`Error generating PDF for ticket ${ticket.id}:`, error);
        }
      }

      if (!attachments.length) {
        return new Response(
          JSON.stringify({ error: "Failed to generate any ticket PDFs" }),
          {
            headers: { ...corsHeaders, "Content-Type": "application/json" },
            status: 500,
          }
        );
      }
    }

    console.log("Sending email...");
    await sendEmailWithSubs({
      to: email,
      subject: template.subject,
      content: template.html,
      subs: { occasionTitle },
      from: `${occasionTitle} | Festapp <${_DEFAULT_EMAIL}>`,
      attachments,
    });

    // Log email sending in the database
    await supabaseAdmin.from("log_emails").insert({
      from: _DEFAULT_EMAIL,
      to: email,
      template: template.id,
      organization: template.organization,
      occasion: occasionId,
    });

    // Assuming 'tickets' is an array of ticket IDs
    const ticketIds = tickets.map(ticket => ticket.id);

    // Update the state of the order and tickets to 'sent'
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
    return new Response(JSON.stringify({ error: "Unexpected error occurred" }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
