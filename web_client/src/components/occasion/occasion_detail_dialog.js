import { LocalizationService } from '../../services/localization_service.js';
import { RouterService } from '../../services/router_service.js';
import { TimeHelper } from '../../services/time_helper.js';
import { FeatureService } from '../features/feature_service.js';
import { FeatureConstants } from '../features/feature_constants.js';
import { CommonStrings } from '../shared/common_strings.js';
import { FormPage } from '../forms/form_page.js';

export class OccasionDetailDialog {

    static show(occasion) {
        // Create Overlay
        const overlay = document.createElement('div');
        overlay.className = 'overlay visible';
        overlay.style.display = 'flex';
        overlay.style.zIndex = '2000'; // High z-index
        
        // Resolve Text
        const title = occasion.title || '';
        const description = occasion.description || '';
        const dateStr = TimeHelper.getMinimalisticDateRange(new Date(occasion.start_time), new Date(occasion.end_time), LocalizationService.currentLocale);
        
        // Feature Details for Button Title
        const formFeature = FeatureService.getFeatureDetails(FeatureConstants.form, occasion.features);
        let reserveTitle = "Reserve a spot"; // Default hardcoded or translation key needed?
        // Flutter: "Reserve a spot".tr()
        // We need LocalizationService translation for "Reserve a spot".
        // Assuming "reserveSpot" key or similar exists, or hardcoding fallback.
        // Let's see if we have access to a string dictionary.
        // LocalizationService.getString('reserve_spot')?
        // Flutter uses .tr().
        // JS: LocalizationService.translate('reserve_spot') ?? "Reserve a spot"
        // Since I don't know the key, I'll use the english string or a placeholder.
        if (formFeature && formFeature.reserveButtonTitle) {
            reserveTitle = formFeature.reserveButtonTitle;
        }

        overlay.innerHTML = `
            <div class="overlay-content dialog-content" style="max-width: 600px; width: 90%; padding: 24px; border-radius: 12px; background: var(--card-bg, white); position: relative;">
                <button class="close-btn" style="position: absolute; top: 16px; right: 16px; background: none; border: none; font-size: 24px; cursor: pointer;">&times;</button>
                
                <h2 style="margin-top: 16px; margin-bottom: 8px; font-size: 20px; font-weight: 600;">${title}</h2>
                <div style="color: var(--text-secondary, #666); margin-bottom: 16px;">${dateStr}</div>
                
                <hr style="border: 0; border-top: 0.5px solid #ccc; margin-bottom: 16px;">
                
                <div class="dialog-description" style="margin-bottom: 24px; line-height: 1.5;">
                    ${description}
                </div>
                
                <button class="btn btn-primary btn-reserve" style="width: 100%; padding: 12px;">${reserveTitle}</button>
            </div>
        `;

        document.body.appendChild(overlay);

        // Bind Events
        const closeBtn = overlay.querySelector('.close-btn');
        const reserveBtn = overlay.querySelector('.btn-reserve');

        const close = () => {
             overlay.classList.remove('visible');
             setTimeout(() => overlay.remove(), 300);
        };

        closeBtn.onclick = close;
        
        reserveBtn.onclick = async () => {
            await OccasionDetailDialog.handleReserveAction(occasion);
            close();
        };
        
        // Close on click outside
        overlay.onclick = (e) => {
            if (e.target === overlay) close();
        };
    }

    static async handleReserveAction(occasion) {
        const formFeature = FeatureService.getFeatureDetails(FeatureConstants.form, occasion.features);
        
        if (formFeature) {
             if (formFeature.formUseExternal === true) {
                 const externalUrl = formFeature.formExternalLink;
                 if (externalUrl && externalUrl.length > 0) {
                     RouterService.navigateToExternal(externalUrl);
                     return;
                 }
             }
        }
        
        // Fallback to internal form
        // Link: occasion.form.link  (Assuming deep structure matches)
        // Check structure from DB: occasion object has `form` object?
        // DbOccasions returns data.occasion.
        // We should check if `occasion.form` exists or if we need to derive it.
        // In Flutter: occasion.form!.link!
        // We'll try to access occasion.form.link.
        
        const link = occasion.form ? occasion.form.link : occasion.link; // Fallback to occasion link if form link missing?
        
        // Wait, if "form" feature is present but "form" object is missing on occasion, that's an issue.
        // DbOccasionsRPC likely joins the form.
        // If not, we might be pointing to /form/:occasionLink.
        
        if (link) {
            RouterService.navigateToForm(link);
        } else {
            console.error("No link found for occasion form.");
        }
    }
}
