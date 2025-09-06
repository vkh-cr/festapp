import { formatCurrency, formatDatetime, formatIBAN } from "../_shared/utilities.ts";
import { generateFullOrder } from "../_shared/orderOverview.ts";
import { generateQrCode } from "../_shared/qrCodePayment.ts";
import { getBaseOrderData } from "./shared.ts";
import { translations } from "../_shared/translations.ts";
import { generateChangeOverview } from "../_shared/changeOverview.ts";

/**
 * Prepares the data required for the TICKET_ORDER_UPDATE email template.
 */
export async function getTicketOrderUpdateTemplate(reqData: any, authorizationHeader: string) {
  const { orderId, requestSecret, lang = 'cs' } = reqData.data;
  const tr = translations[lang] || translations.cs;
  const attachments: any[] = [];

  // 1. Fetch and authorize base order data using the shared function
  const { order, occasion, payment_info, bank_account, latest_history_id, reference_history } = await getBaseOrderData(orderId, requestSecret, authorizationHeader);

  // 2. Calculate balance and generate a single, consolidated reasoning string
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
    const iban = formatIBAN(bank_account.account_number);
    if (amountPaid === 0) {
      balanceReasoning = tr.unpaid(formatCurrency(orderPrice, currency), bank_account.account_number_human_readable, iban, payment_info.variable_symbol, formatDatetime(payment_info.deadline, lang));
    } else {
      balanceReasoning = tr.underpaid(formatCurrency(amountPaid, currency), formatCurrency(balance, currency), bank_account.account_number_human_readable, iban, payment_info.variable_symbol, formatDatetime(payment_info.deadline, lang));
    }

    // 3. Generate Payment QR Code if there is a balance
    try {
        const qrPaymentData = { amount: balance, currency_code: currency, account_number: bank_account.account_number, account_number_human_readable: bank_account.account_number_human_readable, variable_symbol: payment_info.variable_symbol };
        const qrCodeBytes = await generateQrCode(qrPaymentData, order.data, occasion.title);
        attachments.push({ filename: `qr-payment-${occasion.title}.png`, content: qrCodeBytes, contentType: "image/png", encoding: "binary" });
    } catch (error) {
        console.error(`Could not generate QR code for order ${occasion.title}:`, error.message);
    }
  } else {
    balanceReasoning = tr.fullyPaid();
  }

  // 4. Generate Change Overview
  const changeOverviewHtml = generateChangeOverview(order.data, reference_history, lang);

  // 5. Prepare final data for the email client
  const subs = {
    occasionTitle: occasion.title,
    changeOverview: changeOverviewHtml,
    fullOrder: generateFullOrder(order.data, order.data.tickets, occasion.features, lang),
    balanceReasoning: balanceReasoning
  };
  const sender = occasion.title;
  const receiver = order.data.email;
  const context = { occasion: occasion.id, organization: occasion.organization, orderHistoryId: latest_history_id };

  return { subs, sender, receiver, context, attachments };
}