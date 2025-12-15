import { LocalizationService } from '../../services/localization_service.js';

export class PublicOrderStrings {
    static _prefix = 'PublicOrder';

    static _tr(key, tone) {
        if (tone === 'informal') {
            const informalKey = `${key}_informal`;
            const val = LocalizationService.tr(informalKey);
            if (val && val !== informalKey) {
                return val;
            }
        }
        return LocalizationService.tr(key);
    }

    static successTitle(tone, hasTickets = true) {
        if (hasTickets) {
            return PublicOrderStrings._tr(`${PublicOrderStrings._prefix}.successTitle`, tone);
        }
        return PublicOrderStrings._tr(`${PublicOrderStrings._prefix}.successRegistrationTitle`, tone);
    }

    static paymentInfo(tone) {
        return PublicOrderStrings._tr(`${PublicOrderStrings._prefix}.paymentInfo`, tone);
    }

    static selectSeat(tone) {
        return PublicOrderStrings._tr(`${PublicOrderStrings._prefix}.selectSeat`, tone);
    }

    static getSubmitButton(hasTickets, tone) {
        if (hasTickets) {
            return PublicOrderStrings._tr(`${PublicOrderStrings._prefix}.submitOrder`, tone);
        }
        return PublicOrderStrings._tr(`${PublicOrderStrings._prefix}.submitRegistration`, tone);
    }

    static get summary() {
        return LocalizationService.tr(`${PublicOrderStrings._prefix}.summary`);
    }

    static get backToForm() {
        return LocalizationService.tr(`${PublicOrderStrings._prefix}.backToForm`);
    }

    static get orderFailed() {
        return LocalizationService.tr(`${PublicOrderStrings._prefix}.orderFailed`);
    }

    static orderError(code) {
        return LocalizationService.tr(`${PublicOrderStrings._prefix}.orderError`, { code: code });
    }

    static productUnavailable(productTitle) {
        return LocalizationService.tr(`${PublicOrderStrings._prefix}.productUnavailable`, { product_title: productTitle });
    }

    static chooseDifferentVariant(tone) {
        return PublicOrderStrings._tr(`${PublicOrderStrings._prefix}.chooseDifferentVariant`, tone);
    }

    static totalPrice(price) {
        return LocalizationService.tr(`${PublicOrderStrings._prefix}.totalPrice`, { price: price });
    }
}
