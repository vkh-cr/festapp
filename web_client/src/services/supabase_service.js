import { AppConfig } from '../app_config.js';

export class SupabaseService {
    static client = null;
    static tokenKey = AppConfig.Keys.auth;

    static init(url, key) {
        if (!window.supabase) {
            console.error("Supabase SDK not loaded!");
            return;
        }
        const { createClient } = window.supabase;
        SupabaseService.client = createClient(url, key);
    }

    static getClient() {
        return SupabaseService.client;
    }

    // --- Data ---
    // --- Data ---
    // Moved to DbOccasions

    // --- Auth ---
    static getLocalUser() {
        const localSessionStr = localStorage.getItem(SupabaseService.tokenKey);
        if (localSessionStr) {
            try {
                const sessionData = JSON.parse(localSessionStr);
                return sessionData.user;
            } catch (e) {
                console.error("Error parsing local session", e);
            }
        }
        return null;
    }

    static async validateSession() {
        // Background check
        const { data, error } = await SupabaseService.client.auth.getSession();
        if (error || !data.session) {
            // Invalid, clear local
            localStorage.removeItem(SupabaseService.tokenKey);
            return null;
        }
        return data.session.user;
    }

    static async signOut() {
        await SupabaseService.client.auth.signOut();
        localStorage.removeItem(SupabaseService.tokenKey);
        window.location.reload();
    }
}
