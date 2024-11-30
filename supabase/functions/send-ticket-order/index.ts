import { sendEmailWithSubs } from "../_shared/emailClient.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.38.4';

const _DEFAULT_EMAIL = Deno.env.get("DEFAULT_EMAIL")!;

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const supabaseAdmin = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
);

Deno.serve(async (req) => {
  try {
    if (req.method === 'OPTIONS') {
      return new Response('ok', { headers: corsHeaders });
    }

    const reqData = await req.json();
    const { orderDetails } = reqData; // Ticket details from request

    // Hardcoded orderDetails
    const hardcodedOrderDetails = {
      secret: "0fb80818-4c8d-4eb7-8205-859b1d786fb3",
      form: "7f4e3892-a544-4385-b933-61117e9755c3",
      name: "Jan",
      surname: "Vicha",
      email: "bujnmi@gmail.com",
      note: "a",
      ticket: [
        {
          taxi: {
            name: "Bez odvozu",
            id: 11,
            price: 0,
          },
          food: {
            name: "Ratatouille s br. kaší (bez lepku a masa) (KČ160.00)",
            id: 3,
            price: 160,
          },
          note: null,
          spot: 1,
        },
      ],
    };

    // Call the `create_ticket_order` function
    const { data: ticketOrder, error: ticketError } = await supabaseAdmin.rpc("create_ticket_order", {
      input_data: hardcodedOrderDetails,
    });

    if (ticketError || ticketOrder.code != 200) {
      console.error("Error creating ticket order:", ticketError);
      return new Response(JSON.stringify({ error: "Failed to create ticket order. Error code: " + ticketOrder.code }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      });
    }

    const occasion = ticketOrder.occasion;
    const paymentInfo = ticketOrder.payment_info;

    const { data: occasionData, error: occasionError } = await supabaseAdmin
          .from("occasions")
          .select("organization")
          .eq("id", occasion.id)
          .single();

    const organizationId = occasionData.organization;

    const template = await supabaseAdmin
          .from("email_templates")
          .select()
          .eq("organization", organizationId)
          .eq("occasion", occasion.id)
          .eq("code", "TICKET_ORDER_CONFIRMATION")
          .single();

    if (template.error || !template.data) {
          console.error("Email template not found for the occasion.");
          return new Response(JSON.stringify({ error: "Email template not found" }), {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
            status: 404,
          });
        }

    const subs = {
      occasionTitle: occasion.occasion_title,
      price: paymentInfo.amount,
      accountNumber: paymentInfo.account_number,
      variableSymbol: paymentInfo.variable_symbol,
      deadline: paymentInfo.deadline,
      fullOrder: "nope",
    };

    // Send email using the substitutions
    await sendEmailWithSubs({
      to: hardcodedOrderDetails.email,
      subject: template.data.subject,
      content: template.data.html,
      subs,
      from: `${occasion.occasion_title} | Festapp <${_DEFAULT_EMAIL}>`,
    });

    await supabaseAdmin
      .from("log_emails")
      .insert({
        "from": _DEFAULT_EMAIL,
        "to": hardcodedOrderDetails.email,
        "template": "TICKET_ORDER_CONFIRMATION",
        "organization": occasion.id,
        "occasion": occasion.id,
      });

    return new Response(JSON.stringify({ "ticketOrder": ticketOrder, "code": 200 }), {
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
