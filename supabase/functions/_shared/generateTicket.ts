import { formatCurrency } from "../_shared/utilities.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.46.2";
import QRCode from "npm:qrcode";
import { PDFDocument, rgb } from "npm:pdf-lib";
// Import all exports from fontkit (do not try to import a default)
import * as fontkit from "npm:fontkit";
import * as path from "https://deno.land/std/path/mod.ts";

// Set constant for custom font URL.
const CUSTOM_FONT_URL =
  "https://github.com/google/fonts/raw/refs/heads/main/apache/robotoslab/RobotoSlab%5Bwght%5D.ttf";
const MAX_TEXT_ON_TICKET = 45;

const supabaseAdmin = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
);

export async function fetchTicketResources(ticket: any) {
  // Fetch the occasion data.
  const { data: occasion, error: occasionError } = await supabaseAdmin
    .from("occasions")
    .select("id, data")
    .eq("id", ticket.occasion)
    .single();

  if (occasionError || !occasion) {
    throw new Error(
      `Occasion not found or error fetching occasion: ${occasionError?.message}`
    );
  }

  let backgroundUrl: string | undefined;
  let darkColor = "000000";
  let lightColor = "FFFFFF";

  // Define a reusable regex for 6-character hex colors.
  const hexColorRegex = /^[A-Fa-f0-9]{6}$/;

  if (Array.isArray(occasion.data?.features)) {
    const ticketFeature = occasion.data.features.find(
      (feature: any) => feature.code === "ticket"
    );
    if (ticketFeature) {
      if (typeof ticketFeature.background === "string") {
        backgroundUrl = ticketFeature.background;
      }
      if (
        typeof ticketFeature.darkColor === "string" &&
        hexColorRegex.test(ticketFeature.darkColor)
      ) {
        darkColor = ticketFeature.darkColor;
      }
      if (
        typeof ticketFeature.lightColor === "string" &&
        hexColorRegex.test(ticketFeature.lightColor)
      ) {
        lightColor = ticketFeature.lightColor;
      }
    }
  }

  if (!backgroundUrl) {
    throw new Error(
      "Background image URL not found in occasion.data.features."
    );
  }

  // Fetch product types.
  const { data: productTypes, error: productTypesError } = await supabaseAdmin
    .schema("eshop")
    .from("product_types")
    .select("id, type");

  if (productTypesError || !productTypes) {
    throw new Error(
      `Error fetching product types: ${productTypesError?.message}`
    );
  }

  // Build a map for product type lookup: product_type_id -> type string.
  const productTypeLookup: Record<number, string> = {};
  productTypes.forEach((pt: any) => {
    productTypeLookup[pt.id] = pt.type;
  });

  // Fetch products related to the ticket.
  const productIds = ticket.order_product_ticket.map(
    (opt: any) => opt.product
  );
  const { data: products, error: productsError } = await supabaseAdmin
    .schema("eshop")
    .from("products")
    .select(`id, title, title_short, product_type, data`)
    .eq("occasion", ticket.occasion);

  if (productsError || !products) {
    throw new Error(`Error fetching products: ${productsError?.message}`);
  }

  // Group products into a map of maps: { [productType: string]: { [productId: number]: product } }
  const productTypeMap: Record<string, Record<number, any>> = {};
  products.forEach((product: any) => {
    const typeStr = productTypeLookup[product.product_type];
    if (typeStr) {
      if (!productTypeMap[typeStr]) {
        productTypeMap[typeStr] = {};
      }
      productTypeMap[typeStr][product.id] = product;
    }
  });

  // Download the background image.
  const bgResponse = await fetch(backgroundUrl);
  if (!bgResponse.ok) {
    throw new Error(`Failed to download background: ${backgroundUrl}`);
  }
  const backgroundBytes = new Uint8Array(await bgResponse.arrayBuffer());

  // Download the custom font.
  const fontResponse = await fetch(CUSTOM_FONT_URL);
  if (!fontResponse.ok) {
    throw new Error(`Failed to download custom font: ${CUSTOM_FONT_URL}`);
  }
  const customFontBytes = new Uint8Array(await fontResponse.arrayBuffer());

  return {
    darkColor,
    lightColor,
    productTypeMap,
    backgroundBytes,
    customFontBytes,
  };
}

export async function generateTicketImage(
  ticket: any,
  resources: {
    darkColor: string;
    lightColor: string;
    productTypeMap: Record<string, Record<number, any>>;
    backgroundBytes: Uint8Array;
    customFontBytes: Uint8Array;
  }
): Promise<Uint8Array> {
  try {
    const {
      darkColor,
      lightColor,
      productTypeMap,
      backgroundBytes,
      customFontBytes,
    } = resources;

    // Retrieve the products from the productTypeMap for each product type.
    // Since productTypeMap is now a map of maps keyed by product id,
    // we use the ticket.order_product_ticket to find the corresponding product.
    const spotTicketOpt = ticket.order_product_ticket.find(
      (opt: any) => productTypeMap["spot"] && productTypeMap["spot"][opt.product]
    );
    const spotProduct = spotTicketOpt ? productTypeMap["spot"][spotTicketOpt.product] : undefined;

    const foodTicketOpt = ticket.order_product_ticket.find(
      (opt: any) => productTypeMap["food"] && productTypeMap["food"][opt.product]
    );
    const foodProduct = foodTicketOpt ? productTypeMap["food"][foodTicketOpt.product] : undefined;

    const taxiTicketOpt = ticket.order_product_ticket.find(
      (opt: any) => productTypeMap["taxi"] && productTypeMap["taxi"][opt.product]
    );
    const taxiProduct = taxiTicketOpt ? productTypeMap["taxi"][taxiTicketOpt.product] : undefined;

    // Create the PDF document.
    const pdfDoc = await PDFDocument.create();

    // Register fontkit to enable embedding custom fonts.
    pdfDoc.registerFontkit(fontkit);

    const pageWidth = 595.28;
    const pageHeight = 841.89;
    const page = pdfDoc.addPage([pageWidth, pageHeight]);

    // Embed and draw the background image.
    let bgImage;
    try {
      bgImage = await pdfDoc.embedJpg(backgroundBytes);
    } catch (e) {
      bgImage = await pdfDoc.embedPng(backgroundBytes);
    }

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

    // Generate QR Code and embed it.
    const qrSize = 240 * scale;
    const qrX = bgX + (bgWidth * scale) - qrSize - 150 * scale;
    const qrY = bgY + 140 * scale;

    const qrData = await QRCode.toDataURL(ticket.ticket_symbol, {
      width: qrSize,
      margin: 1.6,
      color: {
        dark: `#${darkColor}`,
        light: `#${lightColor}C0`,
      },
    });

    const rawQR = qrData.split(",")[1];
    // Convert base64 string to Uint8Array.
    const qrBytes = Uint8Array.from(atob(rawQR), (c) => c.charCodeAt(0));
    const qrImage = await pdfDoc.embedPng(qrBytes);

    page.drawImage(qrImage, {
      x: qrX,
      y: qrY,
      width: qrSize,
      height: qrSize,
    });

    // Draw the ticket symbol text directly below the QR Code.
    const qrTextPadding = 10 * scale;
    const qrFontSize = 28 * scale;
    const ticketSymbol = ticket.ticket_symbol;
    const customFont = await pdfDoc.embedFont(customFontBytes);
    const ticketSymbolTextWidth = customFont.widthOfTextAtSize(ticketSymbol, qrFontSize);
    const ticketSymbolX = qrX + qrSize / 2 - ticketSymbolTextWidth / 2;
    const ticketSymbolY = qrY - qrTextPadding - qrFontSize;
    const textColor = hexToRgb(darkColor);

    page.drawText(ticketSymbol, {
      x: ticketSymbolX,
      y: ticketSymbolY,
      size: qrFontSize,
      font: customFont,
      color: textColor,
    });

    // Prepare the starting positions for additional text.
    let textX = bgX + 150 * scale;
    let textY = bgY + 280 * scale;

    const texts = [];

    // Add Spot Title.
    const spotOrder = ticket.order_product_ticket.find(
      (opt: any) => spotProduct && opt.product === spotProduct.id
    );
    if (spotOrder && spotOrder.spot_group_title) {
      texts.push(`Stůl: ${truncateText(spotOrder.spot_group_title)}`);
    } else {
      texts.push(`Stůl: N/A`);
    }

    // Add Food Title.
    if (foodProduct) {
      const foodTitle = foodProduct.title_short || foodProduct.title || "N/A";
      texts.push(`Večeře: ${truncateText(foodTitle)}`);
    }

    // Add Ticket Note if available.
    if (ticket.note && ticket.note.trim() !== "") {
      texts.push(`Poznámka: ${truncateText(ticket.note)}`);
    }

    // Add Ticket Price not null.
    if (ticket.price) {
      texts.push(`Cena: ${formatCurrency(ticket.price, ticket.currency)}`);
    }

    texts.forEach((text) => {
      page.drawText(text, {
        x: textX,
        y: textY,
        size: 40 * scale,
        font: customFont,
        color: textColor,
      });
      textY -= 50 * scale;
    });

    const pdfBytes = await pdfDoc.save();
    return pdfBytes;
  } catch (error) {
    console.error("Error generating ticket PDF:", error);
    throw error;
  }

  // Helper function to convert a hex color string to a PDF-lib rgb color.
  function hexToRgb(hex: string) {
    const r = parseInt(hex.substring(0, 2), 16) / 255;
    const g = parseInt(hex.substring(2, 4), 16) / 255;
    const b = parseInt(hex.substring(4, 6), 16) / 255;
    return rgb(r, g, b);
  }

  function truncateText(text: string, maxLength: number = MAX_TEXT_ON_TICKET): string {
    const trimmed = text.trim();
    return trimmed.length > maxLength ? trimmed.slice(0, maxLength) + "..." : trimmed;
  }
}
