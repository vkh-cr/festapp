import { sendEmailWithSubs } from "../_shared/emailClient.ts";
import { formatCurrency, formatDatetime, formatIBAN } from "../_shared/utilities.ts";
import { generateFullOrder } from "../_shared/orderOverview.ts";
import { generateQrCode } from "../_shared/qrCodePayment.ts";


import {
  getEmailTemplateAndWrapper,
  supabaseAdmin,
  createUserClient,
} from "../_shared/supabaseUtil.ts";
import { useFakturoid } from "./fakturoid.ts";
import { translations } from "../_shared/translations/translations.ts";
import type { Tone } from "../_shared/translations/translations.ts";

const _DEFAULT_EMAIL = Deno.env.get("DEFAULT_EMAIL")!;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

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

    const authorizationHeader = req.headers.get("Authorization");
    let ticketOrderResponse: any;

    if (authorizationHeader) {
      console.log("Creating ticket order via User Scoped Client");
      const userClient = createUserClient(authorizationHeader);
      
      const { data, error } = await userClient.rpc(
        "create_ticket_order",
        { input_data: orderDetails },
      );
       if (error) {
        console.error("RPC Error (User Context):", error);
        ticketOrderResponse = { code: 500, message: error.message }; 
      } else {
        ticketOrderResponse = data;
      }
    } else {
      console.log("Creating ticket order via Admin Client");
      const { data } = await supabaseAdmin.rpc(
        "create_ticket_order",
        { input_data: orderDetails },
      );
      ticketOrderResponse = data;
    }

    // Safety check if response is null/undefined
    if (!ticketOrderResponse) {
        console.error("Ticket order response is null/undefined");
         return new Response(JSON.stringify({ error: "Failed to create ticket order (empty response)" }), {
            headers: { ...corsHeaders, "Content-Type": "application/json" },
            status: 500,
        });
    }


    const ticketOrder = ticketOrderResponse;

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
          note: fakturoidSvc.data.note,
        },
        ticketOrder.order,
        ticketOrder.order.occasion.title,
        attachments,
      );
    } else {
      const occasion = ticketOrder.order.occasion;
      const paymentInfo = ticketOrder.order.payment_info;
      if (paymentInfo.amount > 0) {
        const qr = await generateQrCode(
          paymentInfo,
          ticketOrder.order,
          occasion.title,
        );
        attachments.push({
          filename: `qr-payment.${occasion.title}.png`,
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
      unit: occasion.unit,
      occasion: occasion.id,
    };
    const { template, wrapper } = await getEmailTemplateAndWrapper(
      "TICKET_ORDER_CONFIRMATION",
      context,
    );

    const lang = orderDetails.lang || 'cs';
    const tone: Tone = (ticketOrder?.order.form.data?.communication_tone === 'informal') ? 'informal' : 'formal';
    const tr = translations[lang];
    let balanceReasoning = '';

    if (paymentInfo.amount > 0) {
        balanceReasoning = tr.unpaid(
            formatCurrency(paymentInfo.amount, paymentInfo.currency_code),
            paymentInfo.account_number_human_readable,
            formatIBAN(paymentInfo.account_number),
            paymentInfo.variable_symbol,
            formatDatetime(paymentInfo.deadline, lang),
            tone // Pass tone
        );
    } else {
        balanceReasoning = tr.zeroOrder(paymentInfo.currency_code, tone); // Pass tone
    }

    const subs = {
      occasionTitle: occasion.title,
      balanceReasoning: balanceReasoning,
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
        lang
      ),
    };

    await sendEmailWithSubs({
      to: ticketOrder.order.data.email,
      subject: template.subject,
      content: template.html,
      subs,
      from: `${occasion.title} | Festapp <${_DEFAULT_EMAIL}>`,
      attachments,
      wrapper: wrapper?.html ?? null,
      replyTo: ticketOrder.order.reply_to,
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