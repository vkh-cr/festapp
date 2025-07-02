import {
  supabaseAdmin,
  fetchTicketResources,
  generateTicketImage,
  fetchNamedTicketResources,
  generateNamedTicketImage,
} from "../_shared/supabaseUtil.ts";
import { formatCurrency, formatDatetime } from "../_shared/utilities.ts";
import { authorizeRequest } from "../_shared/auth.ts";
import { generateFullOrder } from "../_shared/orderOverview.ts";
import { generateQrCode } from "../_shared/qrCodePayment.ts";

// Helper function to wrap text in HTML strong tags for bolding.
const bold = (text: string | number) => `<strong>${text}</strong>`;

const translations = {
  cs: {
    overpaid: (amount: string) => `Zjistili jsme, že na objednávce je přeplatek ${bold(amount)}. Přeplatek se Ti vrátíme.`,
    underpaid: (paid: string, remaining: string, accountNumber: string, variableSymbol: string, deadline: string) =>
      `Protože už jsi zaplatil/a ${bold(paid)}, zbývá doplatit ${bold(remaining)} na účet ${bold(accountNumber)} s variabilním symbolem ${bold(variableSymbol)} se splatností do ${bold(deadline)}. Pro zjednodušení platby přikládáme i QR kód.`,
    unpaid: (total: string, accountNumber: string, variableSymbol: string, deadline: string) =>
      `Celková cena Tvé objednávky je ${bold(total)}. Pro její dokončení uhraď částku na účet ${bold(accountNumber)} s variabilním symbolem ${bold(variableSymbol)} se splatností do ${bold(deadline)}. Pro zjednodušení platby přikládáme i QR kód.`,
    fullyPaid: () => 'Tvoje objednávka je kompletně zaplacená.',
    zeroOrder: (currency: string) => `Tvoje objednávka je v hodnotě ${bold(formatCurrency(0, currency))} a je považována za uhrazenou.`,
  },
  en: {
    overpaid: (amount: string) => `We've noticed an overpayment of ${bold(amount)} on your order. We will refund you the excess amount.`,
    underpaid: (paid: string, remaining: string, accountNumber: string, variableSymbol: string, deadline: string) =>
      `Since you have already paid ${bold(paid)}, the remaining amount of ${bold(remaining)} is to be paid to account ${bold(accountNumber)} with variable symbol ${bold(variableSymbol)} by ${bold(deadline)}. We are attaching a QR code to simplify the payment.`,
    unpaid: (total: string, accountNumber: string, variableSymbol: string, deadline: string) =>
      `The total for your order is ${bold(total)}. To complete your order, please pay this amount to account ${bold(accountNumber)} with variable symbol ${bold(variableSymbol)} by ${bold(deadline)}. We are attaching a QR code to simplify the payment.`,
    fullyPaid: () => 'Your order is fully paid.',
    zeroOrder: (currency: string) => `Your order total is ${bold(formatCurrency(0, currency))} and is considered paid.`,
  },
};

/**
 * Prepares the data required for the TICKET_ORDER_UPDATE email template.
 */
export async function getTicketOrderUpdateTemplate(reqData: any, authorizationHeader: string) {
  const { orderId, requestSecret, lang = 'cs' } = reqData.data;
  const tr = translations[lang] || translations.cs;
  const attachments: any[] = [];

  // 1. Fetch comprehensive order details
  const { data: orderDetailsResponse, error: rpcError } = await supabaseAdmin.rpc('get_order_details', { orderid: orderId });

  if (rpcError || orderDetailsResponse.code !== 200) {
    console.error("Error fetching order details:", rpcError || orderDetailsResponse.message);
    throw new Error("Failed to fetch order details.");
  }

  const { order, occasion, payment_info, bank_account, latest_history_id } = orderDetailsResponse.data;

  // 2. Perform authorization
  await authorizeRequest({ requestSecret, authorizationHeader, occasionId: occasion.id });

  // 3. Calculate balance and generate a single, consolidated reasoning string
  const orderPrice = Number(order.price) || 0;
  const amountPaid = Number(payment_info?.paid) || 0;
  const balance = orderPrice - amountPaid;
  const currency = order.currency_code || 'CZK';

  let balanceReasoning = '';

  if (orderPrice === 0) {
    balanceReasoning = tr.zeroOrder(currency);
  } else if (balance < 0) {
    balanceReasoning = tr.overpaid(formatCurrency(Math.abs(balance), currency));
  } else if (balance > 0) {
    // *** MODIFICATION START ***
    // The entire payment instruction is now built into a single reasoning string.
    if (amountPaid === 0) {
      balanceReasoning = tr.unpaid(
        formatCurrency(orderPrice, currency),
        bank_account.account_number_human_readable,
        payment_info.variable_symbol,
        formatDatetime(payment_info.deadline, lang)
      );
    } else {
      balanceReasoning = tr.underpaid(
        formatCurrency(amountPaid, currency),
        formatCurrency(balance, currency),
        bank_account.account_number_human_readable,
        payment_info.variable_symbol,
        formatDatetime(payment_info.deadline, lang)
      );
    }
    // *** MODIFICATION END ***

    // 4. Generate Payment QR Code (logic remains the same)
    try {
      const qrPaymentData = {
          amount: balance,
          currency_code: currency,
          account_number: bank_account.account_number,
          account_number_human_readable: bank_account.account_number_human_readable,
          variable_symbol: payment_info.variable_symbol,
      };

      const qrCodeBytes = await generateQrCode(qrPaymentData, occasion.data, occasion.title);
      attachments.push({
        filename: `qr-payment-${occasion.title}.png`,
        content: qrCodeBytes,
        contentType: "image/png",
        encoding: "binary",
      });
    } catch (error) {
      console.error(`Could not generate QR code for order ${occasion.title}:`, error.message);
    }

  } else {
    balanceReasoning = tr.fullyPaid();
  }

  // 5. Prepare final data for the email client
  const subs = {
    occasionTitle: occasion.title,
    fullOrder: generateFullOrder(order.data, order.data.tickets, occasion.features, lang),
    balanceReasoning: balanceReasoning,
  };

  const sender = occasion.title;
  const receiver = order.data.email;
  const context = {
    occasion: occasion.id,
    organization: occasion.organization,
    orderHistoryId: latest_history_id,
  };

  return { subs, sender, receiver, context, attachments };
}