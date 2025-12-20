import { AppConfig } from '../app_config.js';


export class RouterService {

    static FORM_PATH_PREFIX = '/form/';

    static navigateToExternal(url) {
        window.open(url, '_blank');
    }

    static navigateExternal(url) {
        window.location.href = url;
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
        // Instantiate using correct container (legacy id preserved)
        // Ensure to remove old instance if tracked via singleton in FormPage (which we removed)
        // Since we are moving to instance based, the Router should probably hold the current page reference
        // but for now, we just create new one which cleans up previous by id.
        new FormPage('form-page-container').init(link, { onBack: RouterService.goBackProgrammatically });
    }

    static getLoginUrl() {
        let baseUrl = AppConfig.flutterAppUrl || '';
        if (baseUrl.endsWith('/')) {
            baseUrl = baseUrl.slice(0, -1);
        }
        return `${baseUrl}/login`;
    }

    static navigateToLogin() {
        const url = RouterService.getLoginUrl();
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

        // 1. Global Redirect to Flutter App (GitHub Pages 404 Fallback Support)
        // If this is NOT a Web Client route (Home or Form), redirect to Flutter.
        // This covers /login, /admin, /map, and any deep link.
        const isWebClientRoute = path === '/' || path === '/index.html' || path.startsWith(RouterService.FORM_PATH_PREFIX);

        if (!isWebClientRoute) {
             // Avoid redirect loops if we are already at the target
             if (!path.endsWith('flutter.html')) {
                 const redirectUrl = `${window.location.origin}/flutter.html?redirect=${encodeURIComponent(path)}`;
                 console.log(`RouterService: Global Redirecting ${path} to Flutter App: ${redirectUrl}`);
                 window.location.replace(redirectUrl);
                 return true;
             }
        }

        // 2. Handle legacy hash routing (e.g. /#/link -> /link)
        if (window.location.hash && window.location.hash.startsWith('#/')) {
            const cleanPath = window.location.hash.substring(1); // Remove '#'
            console.log(`Redirecting legacy hash: ${window.location.href} -> ${cleanPath}`);
            window.history.replaceState(null, '', cleanPath);
            // Verify if we need to reload or just continue processing with new path
            // If the path is different, we might need to let the next logic handle it.
        }

        console.log("RouterService checking path:", path);
        if (path.startsWith(RouterService.FORM_PATH_PREFIX)) {
            const link = path.substring(RouterService.FORM_PATH_PREFIX.length);
            // Handle trailing slash
            const cleanLink = link.split('/')[0]; 
            console.log("Detected form link:", cleanLink);
            if (cleanLink) {
                const { FormPage } = await import('../components/forms/form_page.js');
                new FormPage('form-page-container').init(cleanLink, { onBack: RouterService.goBackProgrammatically });
                return true; // Handled
            }
        }

        return false;
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
                 new FormPage('form-page-container').init(link, { onBack: RouterService.goBackProgrammatically }); 
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
