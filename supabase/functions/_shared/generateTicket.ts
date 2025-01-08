import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.46.2';
import { qrcode } from 'https://deno.land/x/qrcode/mod.ts';
import { createCanvas, loadImage } from "https://deno.land/x/canvas/mod.ts";

// Initialize Supabase client
const supabaseAdmin = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
);

/**
 * Generates a ticket image based on the provided ticket ID.
 * @returns A Promise that resolves to a Uint8Array containing the image data.
 */
export async function generateTicketImage(ticket: any): Promise<Uint8Array> {
  try {
    // 1. Fetch occasion details to get the background image and other data
    const { data: occasion, error: occasionError } = await supabaseAdmin
      .from('occasions')
      .select(`
        id,
        data
      `)
      .eq('id', ticket.occasion)
      .single();

    if (occasionError || !occasion) {
      throw new Error(`Occasion not found or error fetching occasion: ${occasionError?.message}`);
    }

    // 2. Extract background URL from occasion.data.features array
    let backgroundUrl: string | undefined;

    if (occasion.data && Array.isArray(occasion.data.features)) {
      const ticketFeature = occasion.data.features.find(
        (feature: any) => feature.code === 'ticket'
      );

      if (ticketFeature && typeof ticketFeature.background === 'string') {
        backgroundUrl = ticketFeature.background;
      }
    }

    if (!backgroundUrl) {
      throw new Error('Background image URL not found in occasion.data.features.');
    }

    // 5. Fetch all product types to map product_type IDs to their string types
    const { data: productTypes, error: productTypesError } = await supabaseAdmin.schema('eshop')
      .from('product_types')
      .select('id, type')
      .throwOnError();

    if (productTypesError || !productTypes) {
      throw new Error(`Error fetching product types: ${productTypesError?.message}`);
    }

    // Create a map of product_type ID to type string
    const productTypeMap: Record<number, string> = {};
    productTypes.forEach((pt) => {
      productTypeMap[pt.id] = pt.type;
    });

    // 6. Fetch related products (spot, food, taxi)
    const productIds = ticket.order_product_ticket.map((opt: any) => opt.product);
    const { data: products, error: productsError } = await supabaseAdmin.schema('eshop')
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
    products.forEach((product) => {
      const type = productTypeMap[product.product_type];
      if (type) {
        productMap[type] = product;
      }
    });

    const spotProduct = productMap['spot'];
    const foodProduct = productMap['food'];
    const taxiProduct = productMap['taxi'];

    // 7. Load background image
    const backgroundImage = await loadImage(backgroundUrl);
console.log(backgroundImage);
    // 8. Create canvas with background dimensions
    const canvas = createCanvas(backgroundImage.width(), backgroundImage.height());
    const ctx = canvas.getContext('2d');

    // 9. Draw background
    ctx.drawImage(backgroundImage, 0, 0, backgroundImage.width(), backgroundImage.height());

    // 11. Define positions and styles for QR code and text
    const padding = 50;
    const qrSize = 150;
    const textStartY = backgroundImage.height() - padding - 200;
    const lineHeight = 40;
    const font = 'bold 30px Arial';
    const subFont = '24px Arial';
    ctx.fillStyle = 'black';
    ctx.textAlign = 'left';

    // 12. Draw Ticket Symbol as QR Code
    const qrData = ticket.ticket_symbol;
    const qrBase64 = await qrcode(qrData, { size: qrSize });
    const qrImage = await loadImage(`data:image/png;base64,${qrBase64.split(',')[1]}`);
    ctx.drawImage(qrImage, backgroundImage.width() - qrSize - padding, padding, qrSize, qrSize);
console.log("12");

    // 13. Add Spot Title
    if (spotProduct) {
      const spotTitle = spotProduct.title_short || spotProduct.title || 'N/A';
      ctx.font = font;
      ctx.fillText(`Místo: ${spotTitle}`, padding, textStartY);
    } else {
      ctx.font = font;
      ctx.fillText(`Místo: N/A`, padding, textStartY);
    }

console.log("13");

    // 14. Add Food Title
    if (foodProduct) {
      const foodTitle = foodProduct.title_short || foodProduct.title || 'N/A';
      ctx.font = subFont;
      ctx.fillText(`Večeře: ${foodTitle}`, padding, textStartY + lineHeight);
    }
console.log("14");
    // 15. Add Taxi Title
    if (taxiProduct) {
      const taxiTitle = taxiProduct.title_short || taxiProduct.title || 'N/A';
      ctx.font = subFont;
      ctx.fillText(`Odvoz: ${taxiTitle}`, padding, textStartY + 2 * lineHeight);
    }
console.log("15");
    // 16. Add Ticket Symbol
    ctx.font = font;
    ctx.fillText(`Symbol: ${ticket.ticket_symbol}`, padding, textStartY + 3 * lineHeight);
console.log("16");

    // 18. Convert canvas to buffer
    const buffer = canvas.toBuffer('image/png');
    return buffer;

  } catch (error) {
    console.error('Error generating ticket image:', error);
    throw error; // Re-throw the error after logging
  }
}
