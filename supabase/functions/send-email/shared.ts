import { supabaseAdmin } from "../_shared/supabaseUtil.ts";
import { authorizeRequest } from "../_shared/auth.ts";

/**
 * Fetches comprehensive order details from Supabase and performs authorization.
 * This is a shared utility for templates that need full order context.
 * @param orderId The ID of the order to fetch.
 * @param requestSecret A secret for authorizing against the occasion.
 * @param authorizationHeader The standard JWT authorization header.
 * @returns An object containing all relevant order data.
 */
export async function getBaseOrderData(orderId: string, requestSecret: string, authorizationHeader: string) {
  // 1. Fetch comprehensive order details from the database
  const { data: orderDetailsResponse, error: rpcError } = await supabaseAdmin.rpc('get_order_details', { orderid: orderId });

  if (rpcError || orderDetailsResponse.code !== 200) {
    console.error("Error fetching order details:", rpcError || orderDetailsResponse.message);
    throw new Error("Failed to fetch order details.");
  }

  const { order, occasion, payment_info, bank_account, latest_history_id } = orderDetailsResponse.data;

  // 2. Perform authorization to ensure the request is legitimate
  await authorizeRequest({ requestSecret, authorizationHeader, occasionId: occasion.id });

  // 3. Return the consolidated data
  return { order, occasion, payment_info, bank_account, latest_history_id };
}