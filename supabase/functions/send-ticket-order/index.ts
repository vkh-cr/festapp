import { sendEmailWithSubs } from "../_shared/emailClient.ts";
import { formatCurrency } from "../_shared/utilities.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.49.1';
import { qrcode } from 'https://deno.land/x/qrcode/mod.ts';
import { encode } from "https://deno.land/std/encoding/base64.ts";
import { createCanvas, loadImage } from "https://deno.land/x/canvas/mod.ts";
import { getEmailTemplateAndWrapper, supabaseAdmin } from "../_shared/supabaseUtil.ts";

const _DEFAULT_EMAIL = Deno.env.get("DEFAULT_EMAIL")!;

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

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

// Helper to wrap text by word boundaries so that lines don’t exceed a set length.
function wrapTextByWords(text: string, maxLen: number): string[] {
  const words = text.split(/\s+/);
  let lines: string[] = [];
  let currentLine = "";

  words.forEach((word) => {
    // +1 for the space we’ll need to add
    if ((currentLine + word).length + 1 > maxLen) {
      lines.push(currentLine);
      currentLine = word;
    } else {
      currentLine = currentLine ? currentLine + " " + word : word;
    }
  });

  if (currentLine) {
    lines.push(currentLine);
  }
  return lines;
}

function generateFullOrder(orderData: any, tickets: any[]): string {
  const { name, surname, email, phone, note } = orderData;

  // Build personal info section
  let personalInfo = "";
  if (name) {
    personalInfo += `<div style="margin-bottom:4px; margin-left:12px;">Jméno: ${name}</div>`;
  }
  if (surname) {
    personalInfo += `<div style="margin-bottom:4px; margin-left:12px;">Příjmení: ${surname}</div>`;
  }
  if (email) {
    personalInfo += `<div style="margin-bottom:4px; margin-left:12px;">E-mail: ${email}</div>`;
  }
  if (phone) {
    personalInfo += `<div style="margin-bottom:4px; margin-left:12px;">Telefon: ${phone}</div>`;
  }
  if (note) {
    personalInfo += `<div style="margin-bottom:4px; margin-left:12px;">Poznámka: ${note}</div>`;
  }

  // Start the order container - using table-based layout for better email compatibility
  const orderHeader =
    `<table cellspacing="0" cellpadding="0" border="0" style="width:100%; max-width:600px; margin:20px auto; border-collapse: separate; border-spacing: 0;">
      <tr>
        <td style="padding:20px; border:2px solid #122640; border-radius:10px;">
          <table cellspacing="0" cellpadding="0" border="0" style="width:100%; border-collapse:collapse;">
            <tr>
              <td align="center" style="padding-bottom:15px;">
                <strong>Rekapitulace Vaší objednávky:</strong>
              </td>
            </tr>
            <tr>
              <td>
                ${personalInfo}
              </td>
            </tr>`;

  let overallTotal = 0;
  const ticketsDetails = tickets.map((ticket) => {
    const ticketSymbol = ticket.ticket_symbol;

    const productsRows = ticket.products
      .map((product: any) => {
        const price = Number(product.price || 0);
        overallTotal += price;
        const formattedPrice = formatCurrency(
          price,
          product.currency_code || ticket.products[0].currency_code
        );

        // Product entry using table for better alignment
        return `<tr>
                  <td valign="top" colspan="3" style="padding-top:8px;">
                    <table cellspacing="0" cellpadding="0" border="0" style="width:100%; border-collapse:collapse;">
                      <tr>
                        <td style="padding-left:12px; padding-right:8px; vertical-align:top;">
                          ${product.type_title}: ${product.title}
                        </td>
                        <td width="80" style="text-align:right; white-space:nowrap; vertical-align:bottom; padding-right:12px;">
                          ${formattedPrice}
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2" style="padding:0 12px;">
                          <div style="border-bottom:1px dotted #ccc; margin:2px 0 4px 0;"></div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>`;
      })
      .join("");

    return `<tr>
              <td style="padding-top:20px;">
                <table cellspacing="0" cellpadding="0" border="0" style="width:100%; border-collapse:collapse;">
                  <tr>
                    <td style="padding-left:12px; padding-bottom:8px;">
                      <strong>Vstupenka ${ticketSymbol}</strong>
                    </td>
                  </tr>
                  ${productsRows}
                  ${ticket.note ?
                    `<tr>
                      <td style="padding:5px 12px 0;">Poznámka: ${ticket.note}</td>
                    </tr>` :
                    ""}
                </table>
              </td>
            </tr>`;
  }).join("");

  const currencyCode =
    tickets &&
    tickets.length > 0 &&
    tickets[0].products &&
    tickets[0].products.length > 0
      ? tickets[0].products[0].currency_code
      : "";
  const formattedOverallTotal = formatCurrency(overallTotal, currencyCode);

  const totalSection =
    `<tr>
      <td style="padding-top:20px; padding-right:12px; text-align:right;">
        <strong>Celková cena: ${formattedOverallTotal}</strong>
      </td>
    </tr>`;

  const orderFooter =
    `      </table>
        </td>
      </tr>
    </table>`;

  return `${orderHeader}${ticketsDetails}${totalSection}${orderFooter}`;
}



Deno.serve(async (req) => {
  try {
    if (req.method === 'OPTIONS') {
      return new Response('ok', { headers: corsHeaders });
    }

    const reqData = await req.json();
    const { orderDetails } = reqData;

    console.log(orderDetails);

    const { data: ticketOrder, error: ticketError } = await supabaseAdmin.rpc("create_ticket_order", {
      input_data: orderDetails,
    });

    if (ticketOrder.code !== 200) {
      console.error("Error creating ticket order:", JSON.stringify(ticketOrder));
      return new Response(
        JSON.stringify(ticketOrder),
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

    // Instead of directly selecting an email template, use the RPC procedure.
    const context = { organization: organizationId, occasion: occasion.id };
    const templateAndWrapper: any = await getEmailTemplateAndWrapper("TICKET_ORDER_CONFIRMATION", context);
    if (!templateAndWrapper || !templateAndWrapper.template) {
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
      subject: templateAndWrapper.template.subject,
      content: templateAndWrapper.template.html,
      subs,
      from: `${occasion.occasion_title} | Festapp <${_DEFAULT_EMAIL}>`,
      attachments: [
        {
          filename: `qr-payment.${occasionData.link}.png`,
          content: qrCode,
          contentType: "image/png",
          encoding: "binary",
        },
      ],
      wrapper: templateAndWrapper.wrapper ? templateAndWrapper.wrapper.html : null,
    });

    await supabaseAdmin
      .from("log_emails")
      .insert({
        "from": _DEFAULT_EMAIL,
        "to": ticketOrder.order.data.email,
        "template": templateAndWrapper.template.id,
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
