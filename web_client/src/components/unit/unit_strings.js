
import { LocalizationService } from '../../services/localization_service.js';

export class UnitStrings {
    static get search() { return LocalizationService.tr('Search'); }
    static get noEventsFound() { return LocalizationService.tr('No events found'); }
    static get happeningNow() { return LocalizationService.tr('Happening Now'); }
    static get upcomingEvents() { return LocalizationService.tr('Upcoming Events'); }
    static get pastEvents() { return LocalizationService.tr('Past Events'); }
}
