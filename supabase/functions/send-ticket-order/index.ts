import { sendEmailWithSubs } from "../_shared/emailClient.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.46.2';

const _DEFAULT_EMAIL = Deno.env.get("DEFAULT_EMAIL")!;

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const supabaseAdmin = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
);

function formatDatetime(datetime: string): string {
  const date = new Date(datetime);
  return new Intl.DateTimeFormat("cs-CZ", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

function generateFullOrder(orderDetails: any, tickets: any[]): string {
  const { name, surname, email, note } = orderDetails;

  const orderHeader = `
    <div style="border-radius:10px;border:2px solid #122640;font-size:16px;margin:20px 0;padding:20px;text-align:center;">
      <p style="text-align:center;"><strong>Rekapitulace Vaší objednávky:</strong></p>
      <p style="text-align:left;">
        <span style="display:block; margin-left:20px;">Jméno: ${name}</span>
        <span style="display:block; margin-left:20px;">Příjmení: ${surname}</span>
        <span style="display:block; margin-left:20px;">E-mail: ${email}</span>
        ${note ? `<span style="display:block; margin-left:20px;">Poznámka: ${note}</span>` : ""}
      </p><p></p>
  `;

  const ticketsDetails = tickets
    .map((ticket) => {
      const ticketSymbol = ticket.ticket_symbol;
      const seat = ticket.items.find((item: any) => item.type === "spot")?.spot_title || "N/A";
      const food = ticket.items.find((item: any) => item.type === "food")?.title;
      const taxi = ticket.items.find((item: any) => item.type === "taxi")?.title;
      const note = ticket.items.find((item: any) => item.note) || "";

      return `
        <p style="text-align:left;">
          <span style="display:block; margin-left:20px;"><strong>Vstupenka ${ticketSymbol}</strong></span>
          <span style="display:block; margin-left:20px;">Místo: ${seat}</span>
          ${food ? `<span style="display:block; margin-left:20px;">Večeře: ${food}</span>` : ""}
          ${taxi ? `<span style="display:block; margin-left:20px;">Odvoz: ${taxi}</span>` : ""}
          ${note ? `<span style="display:block; margin-left:20px;">Poznámka: ${note}</span>` : ""}
        </p>
      `;
    })
    .join("");

  return `${orderHeader}${ticketsDetails}</div>`;
}

Deno.serve(async (req) => {
  try {
    if (req.method === 'OPTIONS') {
      return new Response('ok', { headers: corsHeaders });
    }

    const reqData = await req.json();
    const { orderDetails } = reqData;

    const { data: ticketOrder, error: ticketError } = await supabaseAdmin.rpc("create_ticket_order", {
      input_data: orderDetails,
    });

    if (ticketError || ticketOrder.code !== 200) {
      console.error("Error creating ticket order:", ticketError);
      return new Response(JSON.stringify({ "code": ticketOrder.code }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
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

    const formattedDeadline = formatDatetime(paymentInfo.deadline);

    const fullOrder = generateFullOrder(orderDetails, ticketOrder.tickets);

    const subs = {
      occasionTitle: occasion.occasion_title,
      price: paymentInfo.amount,
      accountNumber: paymentInfo.account_number,
      variableSymbol: paymentInfo.variable_symbol,
      deadline: formattedDeadline,
      fullOrder,
    };

    await sendEmailWithSubs({
      to: orderDetails.email,
      subject: template.data.subject,
      content: template.data.html,
      subs,
      from: `${occasion.occasion_title} | Festapp <${_DEFAULT_EMAIL}>`,
    });

    await supabaseAdmin
      .from("log_emails")
      .insert({
        "from": _DEFAULT_EMAIL,
        "to": orderDetails.email,
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
