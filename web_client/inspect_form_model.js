import { DbForms } from './src/components/forms/db_forms.js';
import { AppConfig } from './src/app_config.js';
import { SupabaseService } from './src/services/supabase_service.js';

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  global.localStorage = new LocalStorage('./scratch');
}
if (typeof window === "undefined") {
    // @ts-ignore
    global.window = {};
    const { createClient } = require('@supabase/supabase-js');
    window.supabase = { createClient };
}

// Polyfill window/document if needed (DbForms shouldn't need it, but Supabase might)
// Supabase-js v2 usually works in Node.

async function run() {
    try {
        console.log("Initializing Supabase...");
        SupabaseService.init(AppConfig.supabaseUrl, AppConfig.anonKey);
        
        const formModel = await DbForms.getFormByLink('kurin2026');
        
        if (!formModel) {
            console.log("formModel is null");
            return;
        }

        if (!formModel.fields) {
            console.log("formModel.fields is missing. keys:", Object.keys(formModel));
            return;
        }

        console.log("Searching for birth_date field...");
        const birthField = formModel.fields.find(f => f.type === 'birth_date');
        if (birthField) {
            console.log("Birth Date Field Found:");
            console.log(JSON.stringify(birthField, null, 2));
        } else {
            console.log("No birth_date field found.");
        }
    } catch (e) {
        console.error("Error:", e);
    }
}

run();
