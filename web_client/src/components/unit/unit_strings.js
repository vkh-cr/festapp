
import { LocalizationService } from '../../services/localization_service.js';

export class UnitStrings {
    static get search() { return LocalizationService.tr('Search'); }
    static get noEventsFound() { return LocalizationService.tr('No events found'); }
    static get happeningNow() { return LocalizationService.tr('Happening Now'); }
    static get upcomingEvents() { return LocalizationService.tr('Upcoming Events'); }
    static get pastEvents() { return LocalizationService.tr('Past Events'); }
    static get deleteUnit() { return LocalizationService.tr('Delete Unit'); }
    static get deleteUnitConfirmation() { return LocalizationService.tr('Are you sure you want to delete this unit? This action cannot be undone.'); }
    static get cannotDeleteUnitWithOccasions() { return LocalizationService.tr('Cannot delete unit with existing events.'); }
    static get cannotDeleteLastUnit() { return LocalizationService.tr('You must have at least one other managed unit to delete this one.'); }
}
