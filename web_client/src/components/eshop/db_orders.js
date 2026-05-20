import { SupabaseService } from '../../services/supabase_service.js';

export class DbOrders {
    
    static async sendOrder(orderData) {
        const client = SupabaseService.getClient();
        if (!client) throw new Error("Supabase client not initialized");

        // Calls the Supabase Edge Function "send-ticket-order"
        // Flutter: final edgeResponse = await _supabase.functions.invoke("send-ticket-order", body: {"orderDetails": orderDetails});
        const { data, error } = await client.functions.invoke('send-ticket-order', {
            body: { orderDetails: orderData }
        });

        if (error) {
            console.error("Error sending order:", error);
            return { success: false, message: error.message };
        }

        // Edge Functions return data directly in `data` (if successful HTTP status), 
        // but sometimes we wrap it. 
        // Flutter checks: if (edgeResponse.status != 200) ...
        // JS Client `invoke` resolves to { data, error }. 
        // The `data` property contains the JSON response body.
        
        // Check if the response body contains our standard { code, message, ... } structure
        const responseCode = data?.code || 200; // Assume 200 if not specified in body but no error? 
        // Actually, if the function returns JSON, `data` IS that JSON.
        
        if (responseCode === 200) {
            return { success: true, data: data };
        } else {
             return { success: false, code: responseCode, message: data?.message || "Unknown error", product: data?.product };
        }
    }
}
