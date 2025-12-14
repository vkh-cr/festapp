import { LocalizationService } from '../../services/localization_service.js';
import { RouterService } from '../../services/router_service.js';
import { TimeHelper } from '../../services/time_helper.js';
import { FeatureService } from '../features/feature_service.js';
import { FeatureConstants } from '../features/feature_constants.js';
import { HtmlUtils } from '../../utils/html_utils.js';
import { OccasionDetailDialog } from './occasion_detail_dialog.js';

export class OccasionCard {
    static create(occasion, isPresent = false, isPast = false) {
        const card = document.createElement('div');
        card.className = `oc-card ${isPresent ? 'oc-present' : ''}`;
        
        // --- Logic Dependencies ---
        const hasFormFeature = FeatureService.isFeatureEnabled(FeatureConstants.form, occasion.features);
        const isDescriptionEmpty = HtmlUtils.isHtmlEmptyOrNull(occasion.description);
        const skipDialog = hasFormFeature && isDescriptionEmpty;

        // --- Click Handler (Exact Flutter Logic) ---
        card.onclick = async () => {
             if (skipDialog) {
                 await OccasionDetailDialog.handleReserveAction(occasion);
             } else if (hasFormFeature && !isDescriptionEmpty) {
                 OccasionDetailDialog.show(occasion);
             } else if (!hasFormFeature) {
                 // Navigate to Occasion App
                 // In Flutter: RightsService.updateAppData + RouterService.navigateOccasion
                 // Here:
                 RouterService.navigateToOccasionApp(occasion.link);
             }
        };

        // Image
        if (occasion.data?.image) {
            const img = document.createElement('img');
            img.src = occasion.data.image;
            img.className = 'oc-bg';
            card.appendChild(img);
        }

        // Overlay for Past
        if (isPast) {
            const overlay = document.createElement('div');
            overlay.className = 'oc-overlay-past';
            card.appendChild(overlay);
        }

        // Header (Blur)
        const header = document.createElement('div');
        header.className = 'oc-header';
        
        // Date String (Simplified for now, assumes TimeHelper exists and works)
        const dateStr = TimeHelper.getMinimalisticDateRange(new Date(occasion.start_time), new Date(occasion.end_time), LocalizationService.currentLocale);
        
        // External Price Badge
        let priceBadge = '';
        const formFeature = FeatureService.getFeatureDetails(FeatureConstants.form, occasion.features);
        if (formFeature && formFeature.formExternalPrice) {
            priceBadge = `<div class="oc-price-badge">${formFeature.formExternalPrice}</div>`;
        }

        header.innerHTML = `
            <div class="oc-info-row" style="display:flex; justify-content: space-between; align-items: flex-start;">
                <div class="oc-info">
                    <div class="oc-date">${dateStr}</div>
                    <div class="oc-title">${occasion.title || ''}</div>
                </div>
                ${priceBadge}
            </div>
        `;
        card.appendChild(header);

        return card;
    }
}
