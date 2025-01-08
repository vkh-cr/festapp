
import { sendEmailWithSubs } from "../_shared/emailClient.ts";
import { generateTicketImage } from "../_shared/generateTicket.ts"; // Ensure this path is correct
import { createClient, SupabaseClient } from 'https://esm.sh/@supabase/supabase-js@2.46.2';
import { decode } from "https://deno.land/std@0.140.0/encoding/base64.ts";

// Initialize Supabase client
const supabaseAdmin: SupabaseClient = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
);

// Default sender email
const _DEFAULT_EMAIL = Deno.env.get("DEFAULT_EMAIL")!;

// CORS Headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

/**
 * Checks if the user is an editor for the given occasion.
 * @param userId - The UUID of the user.
 * @param occasionId - The ID of the occasion.
 * @returns A Promise that resolves to a boolean indicating editor status.
 */
async function isUserEditor(userId: string, occasionId: bigint): Promise<boolean> {
  const { data, error } = await supabaseAdmin
    .from('occasion_users')
    .select('is_editor')
    .eq('user', userId)
    .eq('occasion', occasionId)
    .single();

  if (error || !data) {
    console.error("Error fetching user role:", error);
    return false;
  }

  return data.is_editor;
}

/**
 * Serves the endpoint to send tickets via email.
 */
Deno.serve(async (req) => {
  try {
    // Handle CORS preflight request
    if (req.method === 'OPTIONS') {
      return new Response('ok', { headers: corsHeaders });
    }

    const supabaseUser = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      { global: { headers: { Authorization: req.headers.get('Authorization')! } } }
    );

    const { data: user, error: userError } = await supabaseUser.auth.getUser();

    if (userError || !user) {
      console.error("User authentication failed:", userError);
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 401,
      });
    }

    const userId = user.user.id;
    console.log(userId);
    // Parse request body
    const reqData = await req.json();
    const { ticketIds, email, oc } = reqData;

    // Validate input
    if (!Array.isArray(ticketIds) || typeof email !== 'string' || !oc) {
      return new Response(JSON.stringify({ error: "Invalid input parameters" }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      });
    }

    const occasionId = oc;

    // Check if user is editor for the occasion
    const userIsEditor = await isUserEditor(userId, occasionId);
    if (!userIsEditor) {
      console.error(`User ${userId} is not an editor for occasion ${occasionId}`);
      return new Response(JSON.stringify({ error: "Forbidden: User is not an editor for this occasion" }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 403,
      });
    }

    // Fetch occasion details for email template
    const { data: occasionData, error: occasionError } = await supabaseAdmin
      .from("occasions")
      .select("organization, title")
      .eq("id", occasionId)
      .single();

    if (occasionError || !occasionData) {
      console.error("Occasion not found:", occasionError);
      return new Response(JSON.stringify({ error: "Occasion not found" }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 404,
      });
    }

    const organizationId = occasionData.organization;
    const occasionTitle = occasionData.title;

    // Fetch email template
    const { data: template, error: templateError } = await supabaseAdmin
      .from("email_templates")
      .select()
      .eq("organization", organizationId)
      .eq("occasion", occasionId)
      .eq("code", "TICKET_ORDER_PAYMENT_DONE")
      .single();

    if (templateError || !template) {
      console.error("Email template not found for the occasion:", templateError);
      return new Response(JSON.stringify({ error: "Email template not found" }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 404,
      });
    }

    console.log(ticketIds);
    const { data: tickets } = await supabaseAdmin.rpc("get_tickets_with_details", {
        ticket_ids: ticketIds
      });

    if (!tickets) {
      console.error("Error fetching tickets:", ticketsError);
      return new Response(JSON.stringify({ error: "Error fetching tickets" }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      });
    }

    // Generate ticket images
    const attachments = [];
    for (const ticket of tickets) {
      try {
          console.log("generating...");
        const ticketImage = await generateTicketImage(ticket);

        attachments.push({
          filename: `ticket_${ticket.ticket_symbol}.png`,
          content: ticketImage, // Uint8Array
          contentType: "image/png",
          encoding: "binary",
        });
      } catch (imageError) {
        console.error(`Error generating image for ticket ${ticket.id}:`, imageError);
        // Continue with other tickets or handle accordingly
      }
    }

    if (attachments.length === 0) {
      return new Response(JSON.stringify({ error: "No valid ticket images generated" }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      });
    }

    // Prepare email substitutions
    const subs = {
      occasionTitle: occasionTitle,
    };

    // Send email
    await sendEmailWithSubs({
      to: email,
      subject: template.subject,
      content: template.html,
      subs,
      from: `${occasionTitle} | Festapp <${_DEFAULT_EMAIL}>`,
      attachments: attachments,
    });

    await supabaseAdmin
          .from("log_emails")
          .insert({
            "from": _DEFAULT_EMAIL,
            "to": email,
            "template": template.id,
            "organization": organizationId,
            "occasion": occasionId,
          });

    if (logError) {
      console.error("Error logging email dispatch:", logError);
      // Decide whether to fail the request or proceed
    }

    return new Response(JSON.stringify({ message: "Tickets sent successfully", code: 200 }), {
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
