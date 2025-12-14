import { AppConfig } from '../app_config.js';


export class RouterService {
    
    static FLUTTER_BASE_URL = '/app/';
    static FORM_PATH_PREFIX = '/form/';

    static navigateToExternal(url) {
        window.open(url, '_blank');
    }

    static navigateToOccasionApp(link) {
        // Navigate to the occasion app root (e.g. /kurin2026)
        // This will likely be handled by the server returning the app index, or 
        // if this SPA handles it, we need logic for it.
        // For now, simple href is safest to ensure full load or external handling.
        const path = `/${link}`;
        window.location.href = path; 
    }

    static navigateToOccasion(link) {
        // For backwards compatibility or default behavior
        RouterService.navigateToForm(link);
    }
    
    static async navigateToForm(link) {
        const path = `${RouterService.FORM_PATH_PREFIX}${link}`;
        RouterService._lastPath = path; // Update tracker
        RouterService.pushState(path);
        const { FormPage } = await import('../components/forms/form_page.js');
        FormPage.init(link, { onBack: RouterService.goBackProgrammatically }); // SPA Navigation
    }

    static navigateToLogin() {
        const url = `${AppConfig.flutterAppUrl}/login`;
        console.log(`Navigating to Login: ${url}`);
        window.location.href = url;
    }
    
    // History Management
    static pushState(path) {
        window.history.pushState({}, '', path);
    }
    
    static pushOverlayState(hash) {
        window.history.pushState({}, '', `${window.location.pathname}#${hash}`);
    }
    
    static goBackProgrammatically() {
        window.history.back();
    }
    
    // Initial Load Check
    static async handleInitialLoad() {
        const path = window.location.pathname;
        console.log("RouterService checking path:", path);
        if (path.startsWith(RouterService.FORM_PATH_PREFIX)) {
            const link = path.substring(RouterService.FORM_PATH_PREFIX.length);
            // Handle trailing slash
            const cleanLink = link.split('/')[0]; 
            console.log("Detected form link:", cleanLink);
            if (cleanLink) {
                const { FormPage } = await import('../components/forms/form_page.js');
                FormPage.init(cleanLink, { onBack: RouterService.goBackProgrammatically });
                return true; // Handled
            }
        }
        return false; // Not handled
    }
    
    // Listen for PopState
    static _lastPath = window.location.pathname;

    static initPopStateListener() {
        window.addEventListener('popstate', async (event) => {
            const path = window.location.pathname;
            
            // Ignore hash changes (SPA overlays)
            if (path === RouterService._lastPath) {
                return;
            }
            RouterService._lastPath = path;

            if (path.startsWith(RouterService.FORM_PATH_PREFIX)) {
                 const link = path.substring(RouterService.FORM_PATH_PREFIX.length).split('/')[0];
                 const { FormPage } = await import('../components/forms/form_page.js');
                 FormPage.init(link, { onBack: RouterService.goBackProgrammatically }); 
            } else {
                 window.location.reload(); 
            }
        });
    }
    
    static get onPopState() {
        return {
            listen: (callback) => {
                window.addEventListener('popstate', callback);
                return { cancel: () => window.removeEventListener('popstate', callback) };
            }
        };
    }
}
