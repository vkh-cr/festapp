import { AppConfig } from './app_config.js';
import { SupabaseService } from './services/supabase_service.js';
import { RouterService } from './services/router_service.js';
import { LocalizationService } from './services/localization_service.js';
import { ThemeService } from './services/theme_service.js';
import { UnitPage } from './components/unit/unit_page.js';
import { UserHeader } from './components/users/user_header.js';
import { FeedbackFab } from './components/feedback/feedback_fab.js';

class Main {
    static async init() {
        try {
            // 1. Init Core Services
            console.log(`Starting Festapp Web Client v${AppConfig.version}`);
            SupabaseService.init(AppConfig.supabaseUrl, AppConfig.anonKey);
            await LocalizationService.init();
            ThemeService.init();

            // 2. Check Routing (SPA Support)
            if (await RouterService.handleInitialLoad()) {
                 RouterService.initPopStateListener();
                 return; 
            }
            
            // 3. Init UI Components
            UserHeader.init('universal-header');
            UserHeader.init('universal-header');
            UnitPage.init('events-grid', 'event-search');
            FeedbackFab.init('feedback-fab');
    
            // 4. Initial Fetch
            UnitPage.loadOccasions(AppConfig.organization);
            
            // Init PopState for SPA nav
            RouterService.initPopStateListener();
            
        } catch (e) {
            console.error("Initialization Error:", e);
            // Show error on UI if critical
            const app = document.getElementById('app');
            if (app) {
                const errDiv = document.createElement('div');
                errDiv.style.color = 'red';
                errDiv.style.padding = '20px';
                errDiv.style.textAlign = 'center';
                errDiv.textContent = 'Failed to initialize application: ' + e.message;
                document.body.prepend(errDiv);
            }
        }
    }
}

// Start
document.addEventListener('DOMContentLoaded', Main.init);
