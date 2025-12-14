import { SupabaseService } from '../../services/supabase_service.js';
import { FormModel, FormFieldModel } from './form_models.js';

export class DbForms {
    
    static get metaSecret() { return 'secret'; }
    static get metaForm() { return 'form'; }

    static async getFormByLink(link) {
        const client = SupabaseService.getClient();
        if (!client) throw new Error("Supabase client not initialized");

        const { data, error } = await client.rpc('get_form_by_link', { form_link: link });
        
        if (error) {
            console.error("Error fetching form:", error);
            return null;
        }
        
        if (data && data.code === 200) {
            return new FormModel(data.data);
        } else if (data && data.code === 400) {
             return new FormModel(data.data);
        }
        
        console.warn("Form fetch returned non-200 code:", data?.code, data?.message);
        return null;
    }

    static async getAllFormFields(formLink) {
        const client = SupabaseService.getClient();
        const { data, error } = await client.rpc('get_all_form_fields', { form_link: formLink });

        if (error) {
            console.error("Error fetching form fields:", error);
            return [];
        }

        if (Array.isArray(data)) {
            return data.map(f => new FormFieldModel(f));
        }
        
        return [];
    }
}
