import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.46.2';
import { qrcode } from 'https://deno.land/x/qrcode/mod.ts';
import { createCanvas, loadImage } from "https://deno.land/x/canvas/mod.ts";

// Initialize Supabase client
const supabaseAdmin = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
);

export async function fetchTicketResources(ticket: any) {
    console.log(ticket);
  // 1. Fetch the occasion (includes data for background & color)
  const { data: occasion, error: occasionError } = await supabaseAdmin
    .from('occasions')
    .select('id, data')
    .eq('id', ticket.occasion)
    .single();

  if (occasionError || !occasion) {
    throw new Error(`Occasion not found or error fetching occasion: ${occasionError?.message}`);
  }

  // 2. Extract background URL and color from occasion.data.features
  let backgroundUrl: string | undefined;
  let fontColor: string = '#000000';

  if (Array.isArray(occasion.data?.features)) {
    const ticketFeature = occasion.data.features.find(
      (feature: any) => feature.code === 'ticket'
    );
    if (ticketFeature) {
      if (typeof ticketFeature.background === 'string') {
        backgroundUrl = ticketFeature.background;
      }

      if (typeof ticketFeature.color === 'string') {
        // Validate 6-digit hex color
        const hexColorRegex = /^[A-Fa-f0-9]{6}$/;
        if (hexColorRegex.test(ticketFeature.color)) {
          fontColor = `#${ticketFeature.color}`;
        } else {
          console.log(`Invalid color format: ${ticketFeature.color}`);
        }
      }
    }
  }

  if (!backgroundUrl) {
    throw new Error('Background image URL not found in occasion.data.features.');
  }

  // 3. Fetch all product types to map product_type IDs to their string types
  const { data: productTypes, error: productTypesError } = await supabaseAdmin
    .schema('eshop')
    .from('product_types')
    .select('id, type')
    .throwOnError();

  if (productTypesError || !productTypes) {
    throw new Error(`Error fetching product types: ${productTypesError?.message}`);
  }

  // Create a map of product_type ID to type string
  const productTypeMap: Record<number, string> = {};
  productTypes.forEach((pt: any) => {
    productTypeMap[pt.id] = pt.type;
  });

  // 4. Fetch related products (spot, food, taxi)
  const productIds = ticket.order_product_ticket.map((opt: any) => opt.product);
  const { data: products, error: productsError } = await supabaseAdmin
    .schema('eshop')
    .from('products')
    .select(`
      id,
      title,
      title_short,
      product_type,
      data
    `)
    .in('id', productIds)
    .throwOnError();

  if (productsError || !products) {
    throw new Error(`Error fetching products: ${productsError?.message}`);
  }

  // Map products by their type string
  const productMap: Record<string, any> = {};
  products.forEach((product: any) => {
    const type = productTypeMap[product.product_type];
    if (type) {
      productMap[type] = product;
    }
  });

  // 5. Load the background image here
  const backgroundImage = await loadImage(backgroundUrl);

  // Return all needed resources
  return {
    occasion,
    fontColor,
    productMap,
    backgroundImage,
  };
}

/**
 * Generates a ticket image based on the provided ticket data.
 * @param ticket - The ticket object containing necessary details.
 * @returns A Promise that resolves to a Uint8Array containing the image data.
 */
export async function generateTicketImage(
    ticket: any,
      resources: {
        occasion: any;
        fontColor: string;
        productMap: Record<string, any>;
        backgroundImage: any; // The type of image objects returned by loadImage
      }
    ): Promise<Uint8Array> {
  try {
   const { fontColor, productMap, backgroundImage } = resources;

   // Identify spot, food, taxi
   const spotProduct = productMap['spot'];
   const foodProduct = productMap['food'];
   const taxiProduct = productMap['taxi'];

    // 6. Create canvas with background dimensions
    const canvas = createCanvas(backgroundImage.width(), backgroundImage.height());
    const ctx = canvas.getContext('2d');

    // 7. Draw background
    ctx.drawImage(backgroundImage, 0, 0, backgroundImage.width(), backgroundImage.height());

    // 8. Define positions and styles for QR code and text
    const padding = 175;
    const qrSize = 200; // Increased size for better visibility
    const lineHeight = 40;

    // Calculate center positions
    const centerX = backgroundImage.width() / 2;
    const lowerHalfStartY = backgroundImage.height() / 2;

    // Set font color and alignment
    ctx.fillStyle = fontColor;
    ctx.textAlign = 'center';

    // 9. Generate QR Code based on ticket.ticket_symbol
    const qrData = ticket.ticket_symbol;
    const qrBase64 = await qrcode(qrData, { size: qrSize });
    const qrImage = await loadImage(`data:image/png;base64,${qrBase64.split(',')[1]}`);

    // 10. Create a separate canvas for the grouped object (texts + QR code)
    const groupCanvasWidth = backgroundImage.width();
    const groupCanvasHeight = qrSize; // Height based on QR code size
    const groupCanvas = createCanvas(groupCanvasWidth, groupCanvasHeight);
    const groupCtx = groupCanvas.getContext('2d');

    // Draw QR code on the group canvas (right side)
    const groupQrX = groupCanvasWidth - qrSize - padding;
    const groupQrY = 0;
    groupCtx.drawImage(qrImage, groupQrX, groupQrY, qrSize, qrSize);

    // Prepare text content
    const texts: string[] = [];

    // Add Spot Title
    const spotOrder = ticket.order_product_ticket.find((opt: any) => opt.product === spotProduct.id);
    if (spotOrder && spotOrder.spot_group_title) {
      texts.push(`Stůl: ${spotOrder.spot_group_title}`);
    } else {
      texts.push(`Stůl: N/A`);
    }

    // Add Food Title
    if (foodProduct) {
      const foodTitle = foodProduct.title_short || foodProduct.title || 'N/A';
      texts.push(`Večeře: ${foodTitle}`);
    }

    // Add Taxi Title
    if (taxiProduct) {
      const taxiTitle = taxiProduct.title_short || taxiProduct.title || 'N/A';
      texts.push(`Odvoz: ${taxiTitle}`);
    }

    // Set common font for all texts
    ctx.font = 'bold 36px Arial'; // Larger font size

    // Add texts to the group canvas (left side)
    const textStartX = padding;
    let currentTextY = (groupCanvasHeight - (texts.length * lineHeight)) / 2 + lineHeight;

    texts.forEach((text) => {
      groupCtx.font = 'bold 36px Arial';
      groupCtx.fillStyle = fontColor;
      groupCtx.fillText(text, textStartX, currentTextY);
      currentTextY += lineHeight;
    });

    // Draw the group canvas onto the main canvas, centered in the lower half
    const groupX = 0; // Since groupCanvasWidth == backgroundImage.width()
    const groupY = lowerHalfStartY + padding; // Positioned in the lower half with padding

    ctx.drawImage(groupCanvas, groupX, groupY, groupCanvasWidth, groupCanvasHeight);


    // 12. Convert the canvas to a buffer
    const buffer = canvas.toBuffer('image/png');
    return buffer;

  } catch (error) {
    console.error('Error generating ticket image:', error);
    throw error; // Re-throw the error after logging
  }
}
