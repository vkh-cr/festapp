import { APP_VERSION } from './version.js';

export class AppConfig {
    static version = APP_VERSION;
    static supabaseUrl = 'https://rehearsal-api.festapp.net';
    static anonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlzcyI6InN1cGFiYXNlIiwiaWF0IjoxNzg3OTA4NjQyLCJleHAiOjE5NDU1ODg2NDJ9.uE20X1ueXZlul4F1fRfV5wXFVlGd8QKBFUHMIo1XD4M';
    static organization = 12;
    static forceOccasionLink = "csmostrava2026";
    static isAllUnit = false;
    static isAppSupported = true;
    static flutterAppUrl = '';
    static webLink = "https://festapp-rehearsal-client.pages.dev";
    static privacyUrl = "https://festapp-rehearsal-client.pages.dev/privacy/";
    static privacyChoicesUrl = "https://festapp-rehearsal-client.pages.dev/privacy/choices/";
    static termsUrl = "https://festapp-rehearsal-client.pages.dev/terms/";
    static supportUrl = "https://festapp-rehearsal-client.pages.dev/support/";
    static deleteAccountUrl = "https://festapp-rehearsal-client.pages.dev/delete-account/";
    static imageApiUrl = 'https://image-api.festapp.net';
    static imageProjectId = 'a';
    static compatibleUrls = [AppConfig.webLink];

    
    // Localization
    static supportedLanguages = ['cs'];
    static defaultLanguage = 'cs';

    // Local Storage Keys
    static Keys = {
        theme: 'theme',
        locale: 'locale',
        auth: 'sb-kjdpmixlnhntmxjedpxh-auth-token'
    };
}
