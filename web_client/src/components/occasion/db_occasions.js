import { SupabaseService } from '../../services/supabase_service.js';
import { OccasionModel } from './occasion_model.js';

export class DbOccasions {
    
    static async getPublicOccasions(organizationId) {
        const client = SupabaseService.getClient();
        if (!client) throw new Error("Supabase client not initialized");
        
        const { data, error } = await client.rpc('get_available_occasions', {
            p_organization_id: organizationId,
            p_unit_id: null
        });
        
        if (error) {
            console.error("Supabase RPC Error (get_public_occasions):", error);
            throw error;
        }
        
        // Robust Extraction:
        // Case A: data.occasions (common wrapper)
        // Case B: data IS the array (direct return)
        // Case C: data.data.occasions (nested wrapper)
        
        let rawOccasions = [];
        if (Array.isArray(data)) {
            rawOccasions = data;
        } else if (data && Array.isArray(data.occasions)) {
            rawOccasions = data.occasions;
        } else if (data && data.data && Array.isArray(data.data.occasions)) {
            rawOccasions = data.data.occasions;
        } else {
             console.warn("DbOccasions: Unexpected data structure", data);
             return [];
        }

        return rawOccasions
            .map(json => OccasionModel.fromJson(json));
    }
}
