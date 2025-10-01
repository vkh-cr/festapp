import { formatCurrency } from "./utilities.ts";
import { qrcode } from "https://deno.land/x/qrcode/mod.ts";
import { encode } from "https://deno.land/std/encoding/base64.ts";
import { createCanvas, loadImage } from "https://deno.land/x/canvas/mod.ts";

function encodeSPDMessage(message: string): string {
  const normalized = message.normalize("NFC");
  return encodeURIComponent(normalized);
}

/**
 * Determines the correct payment message based on the form's configuration.
 * @param order The order object, containing form data and customer details.
 * @param occasionTitle The title of the occasion, used if specified by the form.
 * @returns The determined payment message, or an empty string if none is applicable.
 */
function determinePaymentMessage(order: any, occasionTitle: string): string {
  // Safely access the message type from the form data using optional chaining.
  const messageType = order?.form?.data?.payment_message?.type;

  // New Case: If the type is 'none', explicitly return an empty string.
  if (messageType === 'none') {
    return '';
  }

  if (messageType === 'occasion_title') {
    // If the type is 'occasion_title', use the provided occasion title.
    return occasionTitle || ''; // Return empty string if occasionTitle is null/undefined
  }

  // Default behavior: for 'name_surname', or if the setting is missing or invalid.
  // We construct the message from the order's customer data.
  const name = order?.data?.name || '';
  const surname = order?.data?.surname || '';

  // Combine name and surname, and trim any leading/trailing whitespace.
  return `${name} ${surname}`.trim();
}


function generateSpdString(paymentInfo: any, message: string | null): string {
  // Start with the mandatory parts of the SPD string.
  let spdString = `SPD*1.0*ACC:${paymentInfo.account_number}` +
    `*AM:${paymentInfo.amount.toFixed(2)}` +
    `*CC:${paymentInfo.currency_code}` +
    `*X-VS:${paymentInfo.variable_symbol}`;

  // **Conditional Logic:** Only add the MSG field if the message is not null or empty.
  if (message && message.trim() !== '') {
    spdString += `*MSG:${encodeSPDMessage(message)}`;
  }

  return spdString;
}

export async function generateQrCode(
  paymentInfo: any,
  order: any,
  occasionTitle: string,
): Promise<Uint8Array> {
  const canvas = createCanvas(500, 700);
  const ctx = canvas.getContext("2d");

  // Set white background
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, 500, 700);

  // 1. Determine the correct payment message first.
  const paymentMessage = determinePaymentMessage(order, occasionTitle);

  // 2. Generate the SPD string using the determined message.
  const qrData = generateSpdString(paymentInfo, paymentMessage);
  const base64Qr = await qrcode(qrData, { size: 500 });
  const qrImage = await loadImage(
    `data:image/png;base64,${base64Qr.split(",")[1]}`,
  );

  ctx.drawImage(qrImage, 0, 0, 500, 500);

  ctx.font = "20px Arial";
  ctx.fillStyle = "black";
  ctx.textAlign = "left";

  let currentY = 550; // Starting Y position for the text block

  ctx.fillText(`Objednávka: ${occasionTitle}`, 32, currentY);
  currentY += 30;

  ctx.fillText(
    `Bankovní účet: ${paymentInfo.account_number_human_readable}`,
    32,
    currentY,
  );
  currentY += 30;

  ctx.fillText(`VS: ${paymentInfo.variable_symbol}`, 32, currentY);
  currentY += 30;

  // 3. **Conditional Drawing:** Only draw the "Poznámka" line if a message exists.
  if (paymentMessage) {
    ctx.fillText(`Poznámka: ${paymentMessage}`, 32, currentY);
    currentY += 30;
  }

  ctx.fillText(
    `Celková cena: ${formatCurrency(
      paymentInfo.amount,
      paymentInfo.currency_code,
    )}`,
    32,
    currentY,
  );

  return canvas.toBuffer();
}
