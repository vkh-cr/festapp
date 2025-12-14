import { AppConfig } from '../app_config.js';

export class LocalizationService {
    static currentLocale = AppConfig.defaultLanguage; // Default
    static translations = {};

    static async init() {
        console.log('LocalizationService.init start', { default: AppConfig.defaultLanguage });
        // 1. Load preference
        const saved = localStorage.getItem('locale');
        console.log('LocalizationService: saved locale', saved);
        if (saved && AppConfig.supportedLanguages.includes(saved)) {
            LocalizationService.currentLocale = saved;
        } else {
            // Auto-detect? For now default to CS as primary
            // Or prioritize browser lang if supported
             const browserLang = navigator.language.split('-')[0];
             if (AppConfig.supportedLanguages.includes(browserLang)) {
                 LocalizationService.currentLocale = browserLang;
             }
        }
        console.log('LocalizationService: currentLocale determined as', LocalizationService.currentLocale);

        await LocalizationService.loadTranslations(LocalizationService.currentLocale);
    }

    static async loadTranslations(locale) {
        console.log('LocalizationService.loadTranslations', locale);
        try {
            const res = await fetch(`/assets/translations/${locale}.json`);
            if (!res.ok) throw new Error('Translation not found');
            LocalizationService.translations = await res.json();
            LocalizationService.currentLocale = locale;
            localStorage.setItem('locale', locale);
            document.documentElement.lang = locale;
            console.log('LocalizationService: translations loaded and locale set to', locale);
        } catch (e) {
            console.error("Failed to load translations", e);
        }
    }

    static tr(key, args = {}) {
        // 0. Try direct lookup first (for keys with dots like "Some sentence.")
        let value = LocalizationService.translations[key];

        if (!value) {
            // 1. Traverse hierarchy if direct lookup failed
            const keys = key.split('.');
            value = LocalizationService.translations;
            
            for (const k of keys) {
                if (value && value[k]) {
                    value = value[k];
                } else {
                    return key; // Key not found
                }
            }
        }

        
        // Simple interpolation for named arguments: {name}
        if (typeof value === 'string') {
            for (const [argKey, argValue] of Object.entries(args)) {
                value = value.replace(`{${argKey}}`, argValue);
            }
        }
        
        return value;
    }

    static async setLocale(locale) {
        console.log('LocalizationService.setLocale called with', locale);
        await LocalizationService.loadTranslations(locale);
        // Dispatch event or reload to update UI
        // Simple approach: Reload page to re-render everything with new strings
        console.log('LocalizationService: reloading page');
        window.location.reload(); 
    }
}
