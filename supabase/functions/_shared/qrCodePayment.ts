import { formatCurrency } from "./utilities.ts";
import { qrcode } from "https://deno.land/x/qrcode/mod.ts";
import { encode } from "https://deno.land/std/encoding/base64.ts";
import { createCanvas, loadImage } from "https://deno.land/x/canvas/mod.ts";

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

export async function generateQrCode(
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