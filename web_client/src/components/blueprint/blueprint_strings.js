import { LocalizationService } from '../../services/localization_service.js';

export class BlueprintStrings {
    static get maxTicketsReached() { return LocalizationService.tr('FeatureBlueprint.maxTicketsReached') || "Maximum number of tickets reached"; }
}
