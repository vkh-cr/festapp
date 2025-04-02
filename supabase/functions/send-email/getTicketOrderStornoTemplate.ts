import { getSupabaseUser, isUserEditorOrder, supabaseAdmin } from "../_shared/supabaseUtil.ts";
import { formatCurrency } from "../_shared/utilities.ts";

export async function getTicketOrderStornoTemplate(reqData: any, authorizationHeader: string) {
  const { orderId } = reqData.data;

  console.log("Order ID:", orderId);

  const { data: orderData, error: orderError } = await supabaseAdmin.rpc(
    "get_order",
    { order_id: orderId }
  );

  if (orderError || !orderData) {
    console.error("Order not found or error occurred:", orderError);
    return new Response(JSON.stringify({ error: "Order not found" }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 404,
    });
  }

  const occasionId = orderData.occasion;

  // Get the authenticated user
  const user = await getSupabaseUser(authorizationHeader);
  const userId = user.user.id;

  // Check if the user is an editor for the occasion
  const isEditor = await isUserEditorOrder(userId, occasionId);
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

 // Call the RPC function "get_latest_order_history" which returns the latest order history for non-zero price
 const { data: orderHistory, error: historyError } = await supabaseAdmin.rpc(
   "get_latest_order_history",
   { order_id: orderId }
 );

 if (historyError || !orderHistory) {
   console.error("No valid order history found:", historyError);
   throw new Error("Valid order history not found");
 }

 // Assuming the function returns a row with price and currency_code directly
 const { price, currency_code } = orderHistory;

  console.log(orderHistory);
  console.log(price);


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
