import { createClient } from "https://esm.sh/@supabase/supabase-js@2.46.2";
import QRCode from "npm:qrcode";
import { PDFDocument, StandardFonts, rgb } from "npm:pdf-lib";
import * as path from "https://deno.land/std/path/mod.ts";

const supabaseAdmin = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
);

export async function fetchTicketResources(ticket: any) {
  const { data: occasion, error: occasionError } = await supabaseAdmin
    .from("occasions")
    .select("id, data")
    .eq("id", ticket.occasion)
    .single();

  if (occasionError || !occasion) {
    throw new Error(`Occasion not found or error fetching occasion: ${occasionError?.message}`);
  }

  let backgroundUrl: string | undefined;
  let fontColor = "000000"; // Placeholder: "#000000"

  if (Array.isArray(occasion.data?.features)) {
    const ticketFeature = occasion.data.features.find(
      (feature: any) => feature.code === "ticket"
    );
    if (ticketFeature) {
      if (typeof ticketFeature.background === "string") {
        backgroundUrl = ticketFeature.background;
      }
      if (typeof ticketFeature.color === "string") {
        const hexColorRegex = /^[A-Fa-f0-9]{6}$/;
        if (hexColorRegex.test(ticketFeature.color)) {
          fontColor = ticketFeature.color;
        } else {
          console.log(`Invalid color format: ${ticketFeature.color}`);
        }
      }
    }
  }

  if (!backgroundUrl) {
    throw new Error("Background image URL not found in occasion.data.features.");
  }

  const { data: productTypes, error: productTypesError } = await supabaseAdmin
    .schema("eshop")
    .from("product_types")
    .select("id, type");

  if (productTypesError || !productTypes) {
    throw new Error(`Error fetching product types: ${productTypesError?.message}`);
  }

  const productTypeMap: Record<number, string> = {};
  productTypes.forEach((pt: any) => {
    productTypeMap[pt.id] = pt.type;
  });

  const productIds = ticket.order_product_ticket.map((opt: any) => opt.product);
  const { data: products, error: productsError } = await supabaseAdmin
    .schema("eshop")
    .from("products")
    .select(`id, title, title_short, product_type, data`)
    .in("id", productIds);

  if (productsError || !products) {
    throw new Error(`Error fetching products: ${productsError?.message}`);
  }

  const productMap: Record<string, any> = {};
  products.forEach((product: any) => {
    const typeStr = productTypeMap[product.product_type];
    if (typeStr) {
      productMap[typeStr] = product;
    }
  });

  const bgResponse = await fetch(backgroundUrl);
  if (!bgResponse.ok) {
    throw new Error(`Failed to download background: ${backgroundUrl}`);
  }
  const backgroundBytes = new Uint8Array(await bgResponse.arrayBuffer());

  return {
    fontColor,
    productMap,
    backgroundBytes,
  };
}

export async function generateTicketImage(
  ticket: any,
  resources: {
    fontColor: string;
    productMap: Record<string, any>;
    backgroundBytes: Uint8Array;
  }
): Promise<Uint8Array> {
  try {
    const { fontColor, productMap, backgroundBytes } = resources;

    const spotProduct = productMap["spot"];
    const foodProduct = productMap["food"];
    const taxiProduct = productMap["taxi"];

    const pdfDoc = await PDFDocument.create();
    const pageWidth = 595.28;
    const pageHeight = 841.89;
    const page = pdfDoc.addPage([pageWidth, pageHeight]);

    const bgImage = await pdfDoc.embedJpg(backgroundBytes).catch(async () => {
      return await pdfDoc.embedPng(backgroundBytes);
    });

    const bgWidth = bgImage.width;
    const bgHeight = bgImage.height;
    const marginPercentage = 0.05;
    const margin = (pageWidth * (marginPercentage * 2)) / 2;
    const scale = (pageWidth * (1 - marginPercentage * 2)) / bgWidth;
    const bgX = (pageWidth - bgWidth * scale) / 2;
    const bgY = (pageHeight - margin) - bgHeight * scale;

    page.drawImage(bgImage, {
      x: bgX,
      y: bgY,
      width: bgWidth * scale,
      height: bgHeight * scale,
    });

    const qrSize = 256 * scale;
    const qrX = bgX + (bgWidth * scale) - qrSize - (110 * scale); // Inside background, right side
    const qrY = bgY + (110 * scale); // Inside background, top side

    const qrData = await QRCode.toDataURL(ticket.ticket_symbol, {
      width: qrSize,
      margin: 2,
      color: {
        dark: "#FFFFFFFF",
        light: "#00000080"
      },
    });

    const rawQR = qrData.split(",")[1];
    const qrBytes = Uint8Array.from(atob(rawQR), (c) => c.charCodeAt(0));
    const qrImage = await pdfDoc.embedPng(qrBytes);

    page.drawImage(qrImage, {
      x: qrX,
      y: qrY,
      width: qrSize,
      height: qrSize,
    });

    const font = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

    const textColor = hexToRgb(fontColor);
    let textX = bgX + (150 * scale);
    let textY = bgY + (180 * scale);

    const texts = [
      "Placeholder: Table info", // Placeholder: Table info
      "Placeholder: Dinner info", // Placeholder: Dinner info
      "Placeholder: Taxi info" // Placeholder: Taxi info
    ];

    texts.forEach((text) => {
      page.drawText(text, {
        x: textX,
        y: textY,
        size: 40 * scale, // Scaled text size
        font,
        color: textColor,
      });
      textY += 50 * scale; // Scaled line height, moving upward
    });

    const pdfBytes = await pdfDoc.save();
    return pdfBytes;
  } catch (error) {
    console.error("Error generating ticket PDF:", error);
    throw error;
  }

  function hexToRgb(hex: string) {
    const r = parseInt(hex.substring(0, 2), 16) / 255;
    const g = parseInt(hex.substring(2, 4), 16) / 255;
    const b = parseInt(hex.substring(4, 6), 16) / 255;
    return rgb(r, g, b);
  }
}
