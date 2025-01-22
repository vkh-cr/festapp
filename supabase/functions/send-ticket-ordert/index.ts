import { sendEmailWithSubs } from "../_shared/emailClient.ts";
import { formatCurrency } from "../_shared/utilities.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.46.2';
import { qrcode } from 'https://deno.land/x/qrcode/mod.ts';
import { encode } from "https://deno.land/std/encoding/base64.ts";
import { createCanvas, loadImage } from "https://deno.land/x/canvas/mod.ts";

const _DEFAULT_EMAIL = Deno.env.get("DEFAULT_EMAIL")!;

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const supabaseAdmin = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
);

// Function to generate QR code as base64
async function generateQrCode(paymentInfo: any, orderData: any, occasionTitle: string): Promise<Uint8Array> {
  console.log("Starting QR code generation with text...");
  console.log("Payment Info:", paymentInfo);
  console.log("Order Details:", orderData);
  console.log("Occasion Title:", occasionTitle);

  // Create canvas
  const canvas = createCanvas(500, 700); // Adjust height to fit QR code and text
  const ctx = canvas.getContext("2d");

  console.log("Canvas initialized.");

  // Fill the background with white
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, 500, 700);

  // Generate QR code
  const qrData = `SPD*1.0*ACC:${paymentInfo.account_number}*AM:${paymentInfo.amount.toFixed(
    2
  )}*CC:${paymentInfo.currency_code}*MSG:${orderData.name} ${orderData.surname}*X-VS:${paymentInfo.variable_symbol}`;
  console.log("Generated QR data string:", qrData);

  const base64QrCode = await qrcode(qrData, { size: 500 });
  console.log("QR Code Base64 Output:", base64QrCode);

  // Convert base64 QR code into image
  const qrImage = await loadImage(`data:image/png;base64,${base64QrCode.split(",")[1]}`);
  console.log("QR Image loaded successfully.");

  // Draw QR code on canvas
  ctx.drawImage(qrImage, 0, 0, 500, 500);
  console.log("QR Code drawn on canvas.");

  // Add text below the QR code
  ctx.font = "20px Arial";
  ctx.fillStyle = "black";
  ctx.textAlign = "left";
  ctx.fillText(`Objednávka: ${occasionTitle}`, 32, 550);
  ctx.fillText(`Bankovní účet: ${paymentInfo.account_number_human_readable}`, 32, 580);
  ctx.fillText(`VS: ${paymentInfo.variable_symbol}`, 32, 610);
  ctx.fillText(`Poznámka: ${orderData.name} ${orderData.surname}`, 32, 640);
  ctx.fillText(`Celková cena: ${formatCurrency(paymentInfo.amount, paymentInfo.currency_code)}`, 32, 670);
  console.log("Text added below QR code.");

  // Convert canvas to binary data
  const buffer = canvas.toBuffer();
  console.log("Canvas converted to buffer. Buffer size:", buffer.length);

  return buffer;
}

function formatDatetime(datetime: string): string {
  const date = new Date(datetime);
  return new Intl.DateTimeFormat("cs-CZ", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

function generateFullOrder(orderData: any, tickets: any[]): string {
  const { name, surname, email, note } = orderData;

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
      const spotProduct = ticket.products.find((p: any) => p.type === "spot");
      const spot = spotProduct?.spot_title || spotProduct?.title;
      const spot_type_title = spotProduct?.type_tile || "Místo";
      const food = ticket.products.find((p: any) => p.type === "food")?.title;
      const taxi = ticket.products.find((p: any) => p.type === "taxi")?.title;
      const note = ticket.note || "";

      const accumulatedPrice = ticket.products.reduce(
        (total: number, product: any) => total + Number(product.price || 0),
        0
      );

      const price = formatCurrency(accumulatedPrice, ticket.products[0].currency_code);

      return `
        <p style="text-align:left;">
          <span style="display:block; margin-left:20px;"><strong>Vstupenka ${ticketSymbol}</strong></span>
          <span style="display:block; margin-left:20px;">${spot_type_title}: ${spot}</span>
          ${food ? `<span style="display:block; margin-left:20px;">Večeře: ${food}</span>` : ""}
          ${taxi ? `<span style="display:block; margin-left:20px;">Odvoz: ${taxi}</span>` : ""}
          ${note ? `<span style="display:block; margin-left:20px;">Poznámka: ${note}</span>` : ""}
          <span style="display:block; margin-left:20px;">Cena: ${price}</span>
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

    console.log(orderDetails);

    const { data: ticketOrder, error: ticketError } = await supabaseAdmin.rpc("create_ticket_ordert", {
      input_data: orderDetails,
    });

    // Create a string combining the code and message from the ticketOrder
    const errorString = `${ticketOrder.code}: ${ticketOrder.message}`;

    if (ticketOrder.code !== 200) {
      console.error("Error creating ticket order:", errorString);
      return new Response(
        JSON.stringify({
          code: ticketOrder.code,
          message: ticketOrder.message,
        }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 200,
        }
      );
    }

    console.log(ticketOrder);

    const occasion = ticketOrder.order.occasion;
    const paymentInfo = ticketOrder.order.payment_info;

    const { data: occasionData, error: occasionError } = await supabaseAdmin
      .from("occasions")
      .select("organization, link")
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
    const qrCode = await generateQrCode(paymentInfo, ticketOrder.order.data, occasion.occasion_title);
    const fullOrder = generateFullOrder(ticketOrder.order.data, ticketOrder.order.data.tickets);

    const subs = {
      occasionTitle: occasion.occasion_title,
      price: paymentInfo.amount,
      currencyCode: paymentInfo.currency_code,
      amount: formatCurrency(paymentInfo.amount, paymentInfo.currency_code),
      accountNumber: paymentInfo.account_number_human_readable,
      variableSymbol: paymentInfo.variable_symbol,
      deadline: formattedDeadline,
      fullOrder,
    };

    await sendEmailWithSubs({
      to: ticketOrder.order.data.email,
      subject: template.data.subject,
      content: template.data.html,
      subs,
      from: `${occasion.occasion_title} | Festapp <${_DEFAULT_EMAIL}>`,
      attachments: [
        {
            filename: `qr-payment.${occasionData.link}.png`, // Name of the file
            content: qrCode, // Ensure qrCode is a Uint8Array
            contentType: "image/png", // MIME type for GIF
            encoding: "binary", // Specify binary encoding
        },
      ],
    });

    await supabaseAdmin
      .from("log_emails")
      .insert({
        "from": _DEFAULT_EMAIL,
        "to": ticketOrder.order.data.email,
        "template": template.data.id,
        "organization": organizationId,
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
