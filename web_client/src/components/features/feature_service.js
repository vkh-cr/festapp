export class FeatureService {
    static get FeatureConstants() {
        return {
            ticket: 'ticket',
            form: 'form',
            workshop: 'workshops',
            map: 'map'
            // Add others as needed
        };
    }

    static isFeatureEnabled(featureCode, features) {
        if (!features || !Array.isArray(features)) return false;
        // Check for 'is_enabled' (DB) or 'isEnabled' (Model)
        return features.some(f => f.code === featureCode && (f.is_enabled === true || f.isEnabled === true));
    }

    static getFeatureDetails(featureCode, features) {
        if (!features || !Array.isArray(features)) return null;
        const feature = features.find(f => f.code === featureCode && (f.is_enabled === true || f.isEnabled === true));
        return feature ? feature.data : null;
    }
}
