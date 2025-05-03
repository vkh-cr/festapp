import { sendEmailWithSubs } from "../_shared/emailClient.ts";
import { formatCurrency } from "../_shared/utilities.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";
import { qrcode } from "https://deno.land/x/qrcode/mod.ts";
import { encode } from "https://deno.land/std/encoding/base64.ts";
import { createCanvas, loadImage } from "https://deno.land/x/canvas/mod.ts";
import {
  getEmailTemplateAndWrapper,
  supabaseAdmin,
} from "../_shared/supabaseUtil.ts";
import { useFakturoid } from "./fakturoid.ts";

const _DEFAULT_EMAIL = Deno.env.get("DEFAULT_EMAIL")!;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

function encodeSPDMessage(message: string): string {
  const normalized = message.normalize("NFC");
  return encodeURIComponent(normalized);
}

function generateSpdString(paymentInfo: any, orderData: any): string {
  const msg = `${orderData.name} ${orderData.surname}`;
  return `SPD*1.0*ACC:${paymentInfo.account_number}` +
    `*AM:${paymentInfo.amount.toFixed(2)}` +
    `*CC:${paymentInfo.currency_code}` +
    `*MSG:${encodeSPDMessage(msg)}` +
    `*X-VS:${paymentInfo.variable_symbol}`;
}

async function generateQrCode(
  paymentInfo: any,
  orderData: any,
  occasionTitle: string,
): Promise<Uint8Array> {
  const canvas = createCanvas(500, 700);
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, 500, 700);

  const qrData = generateSpdString(paymentInfo, orderData);
  const base64Qr = await qrcode(qrData, { size: 500 });
  const qrImage = await loadImage(
    `data:image/png;base64,${base64Qr.split(",")[1]}`,
  );

  ctx.drawImage(qrImage, 0, 0, 500, 500);

  ctx.font = "20px Arial";
  ctx.fillStyle = "black";
  ctx.textAlign = "left";
  ctx.fillText(`Objednávka: ${occasionTitle}`, 32, 550);
  ctx.fillText(
    `Bankovní účet: ${paymentInfo.account_number_human_readable}`,
    32,
    580,
  );
  ctx.fillText(`VS: ${paymentInfo.variable_symbol}`, 32, 610);
  ctx.fillText(
    `Poznámka: ${orderData.name} ${orderData.surname}`,
    32,
    640,
  );
  ctx.fillText(
    `Celková cena: ${formatCurrency(
      paymentInfo.amount,
      paymentInfo.currency_code,
    )}`,
    32,
    670,
  );

  return canvas.toBuffer();
}

function formatDatetime(datetime: string): string {
  return new Intl.DateTimeFormat("cs-CZ", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date(datetime));
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
  const attachments: {
    filename: string;
    content: Uint8Array;
    contentType: string;
    encoding: "binary";
  }[] = [];

  try {
    if (req.method === "OPTIONS") {
      return new Response("ok", { headers: corsHeaders });
    }

    const { orderDetails } = await req.json();
    console.log("Order details:", orderDetails);

    const { data: ticketOrder } = await supabaseAdmin.rpc(
      "create_ticket_order",
      { input_data: orderDetails },
    );

    if (ticketOrder.code !== 200) {
      console.error("Ticket order error:", ticketOrder);
      return new Response(JSON.stringify(ticketOrder), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      });
    }

    const { data: extServices } = await supabaseAdmin.rpc(
      "get_external_services",
      { p_order_id: ticketOrder.order.id },
    );
    const fakturoidSvc = extServices?.find((s: any) => s.type === "FAKTUROID");

    if (fakturoidSvc) {
      await useFakturoid(
        {
          client_id: fakturoidSvc.data.client_id,
          client_secret: fakturoidSvc.data.client_secret,
          slug: fakturoidSvc.data.slug,
          subject_id: fakturoidSvc.data.subject_id,
        },
        ticketOrder.order,
        ticketOrder.order.occasion.occasion_title,
        attachments,
      );
    } else {
      const occasion = ticketOrder.order.occasion;
      const paymentInfo = ticketOrder.order.payment_info;
      const qr = await generateQrCode(
        paymentInfo,
        ticketOrder.order.data,
        occasion.occasion_title,
      );
      attachments.push({
        filename: `qr-payment.${occasion.occasion_title}.png`,
        content: qr,
        contentType: "image/png",
        encoding: "binary",
      });
    }

    const occasion = ticketOrder.order.occasion;
    const paymentInfo = ticketOrder.order.payment_info;
    const { data: occasionData } = await supabaseAdmin
      .from("occasions")
      .select("organization,link")
      .eq("id", occasion.id)
      .single();
    const context = {
      organization: occasionData.organization,
      occasion: occasion.id,
    };
    const { template, wrapper } = await getEmailTemplateAndWrapper(
      "TICKET_ORDER_CONFIRMATION",
      context,
    );

    const subs = {
      occasionTitle: occasion.occasion_title,
      price: paymentInfo.amount,
      currencyCode: paymentInfo.currency_code,
      amount: formatCurrency(paymentInfo.amount, paymentInfo.currency_code),
      accountNumber: paymentInfo.account_number_human_readable,
      variableSymbol: paymentInfo.variable_symbol,
      deadline: formatDatetime(paymentInfo.deadline),
      fullOrder: generateFullOrder(
        ticketOrder.order.data,
        ticketOrder.order.data.tickets,
      ),
    };

    await sendEmailWithSubs({
      to: ticketOrder.order.data.email,
      subject: template.subject,
      content: template.html,
      subs,
      from: `${occasion.occasion_title} | Festapp <${_DEFAULT_EMAIL}>`,
      attachments,
      wrapper: wrapper?.html ?? null,
    });

    await supabaseAdmin.from("log_emails").insert({
      from: _DEFAULT_EMAIL,
      to: ticketOrder.order.data.email,
      template: template.id,
      organization: occasionData.organization,
      occasion: occasion.id,
    });

    return new Response(
      JSON.stringify({ ticketOrder, code: 200 }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      },
    );
  } catch (err) {
    console.error("Unexpected error:", err);
    return new Response(
      JSON.stringify({ error: "Unexpected error occurred" }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      },
    );
  }
});
