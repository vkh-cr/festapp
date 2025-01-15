import { getSupabaseUser, isUserEditor, supabaseAdmin } from "../_shared/supabaseUtil.ts";
import { formatCurrency } from "../_shared/utilities.ts";

export async function getTicketOrderStornoTemplate(reqData: any, authorizationHeader: string) {
  const { orderId } = reqData.data;

console.log(orderId);
  // Fetch the order data
  const { data: orderData, error: orderError } = await supabaseAdmin
    .schema("eshop")
    .from("orders")
    .select("occasion, data")
    .eq("id", orderId)
    .single();

  if (orderError || !orderData) {
    console.error("Order not found:", orderError);
    return new Response(JSON.stringify({ error: "Order not found" }), {
      headers: { "Content-Type": "application/json" },
      status: 404,
    });
  }

  const occasionId = orderData.occasion;

  // Get the authenticated user
  const user = await getSupabaseUser(authorizationHeader);
  const userId = user.user.id;

  // Check if the user is an editor for the occasion
  const isEditor = await isUserEditor(userId, occasionId);
  if (!isEditor) {
    console.error(`User ${userId} is not an editor for occasion ${occasionId}`);
    return new Response(JSON.stringify({ error: "Forbidden: Not an editor" }), {
      headers: { "Content-Type": "application/json" },
      status: 403,
    });
  }

  // Fetch occasion data
  const { data: occasionData, error: occasionError } = await supabaseAdmin
    .from("occasions")
    .select("organization, title")
    .eq("id", occasionId)
    .single();

  if (occasionError || !occasionData) {
    console.error("Occasion not found:", occasionError);
    return new Response(JSON.stringify({ error: "Occasion not found" }), {
      headers: { "Content-Type": "application/json" },
      status: 404,
    });
  }

  const { data: orderHistory, error: historyError } = await supabaseAdmin
    .schema("eshop")
    .from("orders_history")
    .select("price, currency_code")
    .eq("\"order\"", orderId)
    .neq("price", 0) // Filter out records where price is 0
    .order("created_at", { ascending: false }) // Latest first
    .limit(1); // Get only the latest one with a non-zero price

  if (historyError || !orderHistory || orderHistory.length === 0) {
    console.error("No valid order history found:", historyError);
    return new Response(JSON.stringify({ error: "Valid order history not found" }), {
      headers: { "Content-Type": "application/json" },
      status: 404,
    });
  }

  const { price, currency_code } = orderHistory[0];

  // Fetch the email template
  const templateData = await supabaseAdmin
    .from("email_templates")
    .select()
    .eq("code", reqData.templateCode)
    .eq("organization", occasionData.organization)
    .eq("occasion", occasionId)
    .single();

  if (templateData.error || !templateData.data) {
    console.error("Template not found for the specified organization.");
    throw new Error("Template not found");
  }

  // Prepare substitutions with price and currency code
  let subs: Record<string, string> = {};
  subs = {
    occasionTitle: occasionData.title,
    amount: formatCurrency(price, currency_code), // Use the fetched price and currency_code
  };

  // Add sender and receiver information
  const sender = occasionData.title;
  const receiver = orderData.data.email;

  return { templateData: templateData.data, subs, sender, receiver };
}
