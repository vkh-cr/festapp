import { getSupabaseUser, isUserEditor, supabaseAdmin } from "../_shared/supabaseUtil.ts";
import { formatCurrency } from "../_shared/utilities.ts";

export async function getTicketOrderStornoTemplate(reqData: any, authorizationHeader: string) {
  const { orderId } = reqData.data;

  console.log("Order ID:", orderId);
  // Fetch the order data
  const { data: orderData, error: orderError } = await supabaseAdmin
    .schema("eshop")
    .from("orders")
    .select("occasion, data")
    .eq("id", orderId)
    .single();

  if (orderError || !orderData) {
    console.error("Order not found:", orderError);
    throw new Error("Order not found");
  }

  const occasionId = orderData.occasion;

  // Get the authenticated user
  const user = await getSupabaseUser(authorizationHeader);
  const userId = user.user.id;

  // Check if the user is an editor for the occasion
  const isEditor = await isUserEditor(userId, occasionId);
  if (!isEditor) {
    console.error(`User ${userId} is not an editor for occasion ${occasionId}`);
    throw new Error("Forbidden: Not an editor");
  }

  // Fetch occasion data
  const { data: occasionData, error: occasionError } = await supabaseAdmin
    .from("occasions")
    .select("organization, title")
    .eq("id", occasionId)
    .single();

  if (occasionError || !occasionData) {
    console.error("Occasion not found:", occasionError);
    throw new Error("Occasion not found");
  }

  // Fetch order history for non-zero price (latest one)
  const { data: orderHistory, error: historyError } = await supabaseAdmin
    .schema("eshop")
    .from("orders_history")
    .select("price, currency_code")
    .eq("\"order\"", orderId)
    .neq("price", 0)
    .order("created_at", { ascending: false })
    .limit(1);

  if (historyError || !orderHistory || orderHistory.length === 0) {
    console.error("No valid order history found:", historyError);
    throw new Error("Valid order history not found");
  }

  const { price, currency_code } = orderHistory[0];

  // Prepare substitutions with price and currency code
  const subs: Record<string, string> = {
    occasionTitle: occasionData.title,
    amount: formatCurrency(price, currency_code),
  };

  // Add sender and receiver information
  const sender = occasionData.title;
  const receiver = orderData.data.email;

  // Build a context object for template selection.
  const context = {
    occasion: occasionId,
    organization: occasionData.organization,
  };

  return { subs, sender, receiver, context };
}
