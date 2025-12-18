import './occasion_card.css';
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
        
        const infoRow = document.createElement('div');
        infoRow.className = 'oc-info-row';
        infoRow.style.display = 'flex';
        infoRow.style.justifyContent = 'space-between';
        infoRow.style.alignItems = 'flex-start';

        const infoDiv = document.createElement('div');
        infoDiv.className = 'oc-info';

        const dateDiv = document.createElement('div');
        dateDiv.className = 'oc-date';
        dateDiv.textContent = dateStr;

        const titleDiv = document.createElement('div');
        titleDiv.className = 'oc-title';
        titleDiv.textContent = occasion.title || '';

        infoDiv.appendChild(dateDiv);
        infoDiv.appendChild(titleDiv);
        infoRow.appendChild(infoDiv);

        const formFeature = FeatureService.getFeatureDetails(FeatureConstants.form, occasion.features);
        if (formFeature && formFeature.formExternalPrice) {
             const badge = document.createElement('div');
             badge.className = 'oc-price-badge';
             badge.textContent = formFeature.formExternalPrice;
             infoRow.appendChild(badge);
        }

        header.appendChild(infoRow);
        card.appendChild(header);

        return card;
    }
}
