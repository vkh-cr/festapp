import './theme_config.css';
import { AppConfig } from './app_config.js';
import { SupabaseService } from './services/supabase_service.js';
import { RouterService } from './services/router_service.js';
import { LocalizationService } from './services/localization_service.js';
import { ThemeService } from './services/theme_service.js';
import { UnitPage } from './components/unit/unit_page.js';
import { UserHeader } from './components/users/user_header.js';
import { FeedbackFab } from './components/feedback/feedback_fab.js';
import { ImageLoader } from './utils/image_loader.js';

class Main {
    static async init() {
        try {
            // 1. Init Core Services
            console.log(`Starting Festapp Web Client v${AppConfig.version}`);
            // SupabaseService is now eager loaded
            await LocalizationService.init();
            ThemeService.init();
            ImageLoader.init(); // Initialize Image Loader

            // 2. Check Routing (SPA Support)
            if (await RouterService.handleInitialLoad()) {
                 RouterService.initPopStateListener();
                 return; 
            }
            
            // Not a form page, show the home app
            const app = document.getElementById('app');
            if (app) app.style.display = 'flex';
            
            // 3. Init UI Components
            // UserHeader is now a web component and auto-inits via tag in HTML
            const unitPage = new UnitPage('events-grid');
            unitPage.init('event-search');
            FeedbackFab.init('feedback-fab');
    
            // 4. Initial Fetch
            unitPage.loadOccasions(AppConfig.organization);
            
            // Init PopState forভাগে logic
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
