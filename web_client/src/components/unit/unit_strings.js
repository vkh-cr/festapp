
import { LocalizationService } from '../../services/localization_service.js';

export class UnitStrings {
    static get search() { return LocalizationService.tr('Common.search'); }
    static get noEventsFound() { return LocalizationService.tr('Common.noEventsFound'); }
    static get happeningNow() { return LocalizationService.tr('Common.happeningNow'); }
    static get upcomingEvents() { return LocalizationService.tr('Common.upcomingEvents'); }
    static get pastEvents() { return LocalizationService.tr('Common.pastEvents'); }
    static get deleteUnit() { return LocalizationService.tr('UnitSettings.deleteUnit'); }
    static get deleteUnitConfirmation() { return LocalizationService.tr('UnitSettings.deleteUnitConfirmation'); }
    static get cannotDeleteUnitWithOccasions() { return LocalizationService.tr('UnitSettings.cannotDeleteUnitWithOccasions'); }
    static get cannotDeleteLastUnit() { return LocalizationService.tr('UnitSettings.cannotDeleteLastUnit'); }
}
