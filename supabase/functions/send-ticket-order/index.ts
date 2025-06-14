import { sendEmailWithSubs } from "../_shared/emailClient.ts";
import { formatCurrency } from "../_shared/utilities.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.4";
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

function generateFullOrder(orderData: any, tickets: any[], occasionFeatures: any[]): string {
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
  const ticketFeature = occasionFeatures?.find(f => f.code === "ticket");
  const itemLabel = ticketFeature?.is_enabled ? "Vstupenka" : "Přihláška";

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
                      <strong>${itemLabel} ${ticketSymbol}</strong>
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

async function handleSupabaseFunctionService(
  supabaseFunctionSvc: any,
  ticketOrder: any,
  attachments: any[],
) {
  if (supabaseFunctionSvc && supabaseFunctionSvc.data && supabaseFunctionSvc.data.url) {
    const supabaseFunctionUrl = supabaseFunctionSvc.data.url;
    console.log(`Calling SUPABASE_FUNCTION service at: ${supabaseFunctionUrl}`);

    const { data: requestSecret, error: secretGenerationError } = await supabaseAdmin.rpc(
      "generate_request_secret",
      { p_ttl_seconds: 300 }
    );

    if (secretGenerationError || !requestSecret) {
      console.error("Failed to generate request secret:", secretGenerationError);
    } else {
      console.log("Generated request secret for SUPABASE_FUNCTION call.");
      try {
        const functionResponse = await fetch(supabaseFunctionUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            order: ticketOrder.order,
            requestSecret: requestSecret,
          }),
        });

        if (functionResponse.ok) {
          const attachmentData = await functionResponse.json();
          if (attachmentData.data && attachmentData.contentType) {
            const binaryString = atob(attachmentData.data);
            const len = binaryString.length;
            const bytes = new Uint8Array(len);
            for (let i = 0; i < len; i++) {
              bytes[i] = binaryString.charCodeAt(i);
            }
            attachments.push({
              filename: `smlouva-${ticketOrder.order.payment_info.variable_symbol}.pdf`,
              content: bytes,
              contentType: attachmentData.contentType,
              encoding: "binary",
            });
            console.log("Successfully added attachment from SUPABASE_FUNCTION service.");
          } else {
            console.error("SUPABASE_FUNCTION service response missing data or contentType:", attachmentData);
          }
        } else {
          const errorBody = await functionResponse.text();
          console.error(
            `SUPABASE_FUNCTION service call failed with status: ${functionResponse.status}. Response: ${errorBody}`,
          );
        }
      } catch (e) {
        console.error("Error calling SUPABASE_FUNCTION service:", e);
      }
    }
  }
}

// Formats an IBAN string by inserting spaces for readability, e.g., "CZ59 2010 0000 0020 0280 8176"
function formatIBAN(iban: string | undefined | null): string {
  if (!iban || typeof iban !== 'string' || iban.length < 4) {
    // Return original value or empty string if it's not a valid string or too short
    return iban || "";
  }
  // Takes the first 4 characters (e.g., "CZ59")
  const firstPart = iban.substring(0, 4);
  // Takes the rest of the IBAN string
  const rest = iban.substring(4);

  const chunks = [firstPart]; // Start with the first part
  // Loop through the rest of the IBAN string and split it into 4-character chunks
  for (let i = 0; i < rest.length; i += 4) {
    chunks.push(rest.substring(i, i + 4));
  }
  // Join all chunks with a space
  return chunks.join(" ");
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
      // Check if the payment amount is greater than zero before generating the QR code
      const occasion = ticketOrder.order.occasion;
      const paymentInfo = ticketOrder.order.payment_info;
      if (paymentInfo.amount > 0) {
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
      } else {
        console.log("Payment amount is zero or less, skipping QR code generation.");
      }
    }

    const supabaseFunctionSvc = extServices?.find((s: any) => s.type === "SUPABASE_FUNCTION");
    await handleSupabaseFunctionService(supabaseFunctionSvc, ticketOrder, attachments);

    const occasion = ticketOrder.order.occasion;
    const paymentInfo = ticketOrder.order.payment_info;
    const context = {
      organization: occasion.organization,
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
      iban: formatIBAN(paymentInfo.account_number),
      variableSymbol: paymentInfo.variable_symbol,
      deadline: formatDatetime(paymentInfo.deadline),
      fullOrder: generateFullOrder(
        ticketOrder.order.data,
        ticketOrder.order.data.tickets,
        occasion.features,
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
      organization: occasion.organization,
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