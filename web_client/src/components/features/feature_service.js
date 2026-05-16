export class FeatureService {
    static get FeatureConstants() {
        return {
            ticket: 'ticket',
            form: 'form',
            workshop: 'workshops',
            map: 'map',
            deposit: 'deposit'
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

    /**
     * Returns the deposit feature object if enabled, or null.
     */
    static getDepositFeature(features) {
        if (!features || !Array.isArray(features)) return null;
        return features.find(f => f.code === 'deposit' && (f.is_enabled === true || f.isEnabled === true)) || null;
    }

    /**
     * Returns true if deposit payment option should be offered to the customer.
     * Mirrors Flutter's FeatureService.isDepositChoiceAvailable().
     * @param {Array} features - occasion features array
     * @param {Date|null} eventStartTime - occasion start time
     */
    static isDepositChoiceAvailable(features, eventStartTime) {
        const depositFeature = FeatureService.getDepositFeature(features);
        if (!depositFeature) return false;

        // On-site deadline: always available
        if (depositFeature.deposit_deadline === 'on_site') return true;

        // Days-before deadline: check if we're still before the cutoff
        if (!eventStartTime) return false;
        const days = depositFeature.deposit_deadline_days;
        if (days == null) return false;

        const cutoff = new Date(eventStartTime.getTime() - days * 24 * 60 * 60 * 1000);
        return new Date() < cutoff;
    }
}
