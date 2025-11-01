import { formatCurrency, formatIBAN } from "../_shared/utilities.ts";
import { generateFullOrder } from "../_shared/orderOverview.ts";
import { generateQrCode } from "../_shared/qrCodePayment.ts";
import { getBaseOrderData } from "./shared.ts";
import { translations } from "../_shared/translations/translations.ts";
import type { Tone } from "../_shared/translations/translations.ts"; // Import the Tone type

/**
 * Prepares the data required for the TICKET_ORDER_REMINDER email template.
 */
export async function getTicketOrderReminderTemplate(reqData: any, authorizationHeader: string) {
  const { orderId, requestSecret, lang = 'cs' } = reqData.data;

  // Select the correct language object
  const tr = translations[lang] || translations.cs;
  const attachments: any[] = [];

  // 1. Fetch and authorize base order data using the shared function
  // Added form_data to get the tone
  const { order, occasion, payment_info, bank_account, latest_history_id, form_data } = await getBaseOrderData(orderId, requestSecret, authorizationHeader);

  // 2. Get the communication tone
  // Default to 'informal' if not specified or invalid
  const tone: Tone = (form_data?.communication_tone === 'informal') ? 'informal' : 'formal';

  // 3. Calculate balance and generate the reminder reasoning string
  const orderPrice = Number(order.price) || 0;
  const amountPaid = Number(payment_info?.paid) || 0;
  const balance = orderPrice - amountPaid;
  const currency = order.currency_code || 'CZK';
  let balanceReasoning = '';

  if (balance <= 0) {
    // If order is paid or overpaid, there is no reason to send a reminder.
    throw new Error(`Order ${orderId} is already paid or has a zero balance. No reminder needed.`);
  }

  // 4. Generate reminder-specific text based on the deadline
  const iban = formatIBAN(bank_account.account_number);
  const now = new Date();
  const deadline = new Date(payment_info.deadline);
  const timeDiff = deadline.getTime() - now.getTime();
  const daysDiff = Math.ceil(Math.abs(timeDiff) / (1000 * 3600 * 24));
  const formattedPaidAmount = formatCurrency(amountPaid, currency);

  if (timeDiff > 0) { // Deadline is in the future
      balanceReasoning = tr.reminder_before_deadline(
        daysDiff,
        formatCurrency(balance, currency),
        bank_account.account_number_human_readable,
        iban,
        payment_info.variable_symbol,
        formattedPaidAmount,
        tone // Pass tone
      );
  } else { // Deadline is in the past
      balanceReasoning = tr.reminder_after_deadline(
        daysDiff,
        formatCurrency(balance, currency),
        bank_account.account_number_human_readable,
        iban,
        payment_info.variable_symbol,
        formattedPaidAmount,
        tone // Pass tone
      );
  }

  // 5. Generate Payment QR Code
  try {
      const qrPaymentData = { amount: balance, currency_code: currency, account_number: bank_account.account_number, account_number_human_readable: bank_account.account_number_human_readable, variable_symbol: payment_info.variable_symbol };
      const qrCodeBytes = await generateQrCode(qrPaymentData, order.data, occasion.title);
      attachments.push({ filename: `qr-payment-${occasion.title}.png`, content: qrCodeBytes, contentType: "image/png", encoding: "binary" });
  } catch (error) {
      console.error(`Could not generate QR code for order ${occasion.title}:`, error.message);
  }

  // 6. Prepare final data for the email client
  const subs = { occasionTitle: occasion.title, fullOrder: generateFullOrder(order.data, order.data.tickets, occasion.features, lang), balanceReasoning: balanceReasoning };
  const sender = occasion.title;
  const receiver = order.data.email;
  const context = { occasion: occasion.id, organization: occasion.organization, unit: occasion.unit, orderHistoryId: latest_history_id, paymentInfoId: payment_info.id };

  return { subs, sender, receiver, context, attachments };
}