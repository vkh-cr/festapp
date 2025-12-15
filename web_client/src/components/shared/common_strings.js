
import { LocalizationService } from '../../services/localization_service.js';

export class CommonStrings {
    static get save() { return LocalizationService.tr('Save'); }
    static get storno() { return LocalizationService.tr('Storno'); }
    static get delete() { return LocalizationService.tr('Delete'); }
    static get edit() { return LocalizationService.tr('Edit'); }
    static get ok() { return LocalizationService.tr('Ok'); }
    static get close() { return LocalizationService.tr('Close'); }
    static get confirm() { return LocalizationService.tr('Confirm'); }
    static get rename() { return LocalizationService.tr('Rename'); }
    static get addNew() { return LocalizationService.tr('AddNew'); }
    static get cancel() { return LocalizationService.tr('Cancel'); }
    static get reset() { return LocalizationService.tr('Reset'); }
    static get search() { return LocalizationService.tr('Search'); }
    static get remove() { return LocalizationService.tr('Remove'); }
    
    // Nouns
    static get title() { return LocalizationService.tr('Title'); }
    static get price() { return LocalizationService.tr('Price'); }
    static get password() { return LocalizationService.tr('Password'); }

    // Statuses
    static get saved() { return LocalizationService.tr('Saved'); }
    static get deleted() { return LocalizationService.tr('Deleted'); }
    static get success() { return LocalizationService.tr('Success'); }
    static get error() { return LocalizationService.tr('Error'); }
    static get loading() { return LocalizationService.tr('Loading'); }
    static get processing() { return LocalizationService.tr('FeatureOrders.processing'); }
    static get settings() { return LocalizationService.tr('Settings'); }

    // Forms
    static get fieldCannotBeEmpty() { return LocalizationService.tr('Common.fieldCannotBeEmpty'); }
    static get invalidFormat() { return LocalizationService.tr('Common.invalidFormat'); }
    static get name() { return LocalizationService.tr('Name'); }
    static get description() { return LocalizationService.tr('Description'); }
    static get content() { return LocalizationService.tr('Content'); }
    static get add() { return LocalizationService.tr('Add'); }
    static get type() { return LocalizationService.tr('Type'); }
    static get hide() { return LocalizationService.tr('Hide'); }
    static get place() { return LocalizationService.tr('Place'); }
    static get users() { return LocalizationService.tr('Users'); }
    static get events() { return LocalizationService.tr('Events'); }
    static get start() { return LocalizationService.tr('Start'); }
    static get end() { return LocalizationService.tr('End'); }
    static get cancelled() { return LocalizationService.tr('Cancelled'); }
    static get import() { return LocalizationService.tr('Import'); }
    static get proceed() { return LocalizationService.tr('Proceed'); }
    static get item() { return LocalizationService.tr('Item'); }

    // Auth & Settings
    static get signIn() { return LocalizationService.tr('Sign in'); }
    static get signOut() { return LocalizationService.tr('Sign out'); }
    static get languageSettings() { return LocalizationService.tr('Language Settings'); }
    static get appearance() { return LocalizationService.tr('Appearance'); }
    static get light() { return LocalizationService.tr('Light'); }
    static get dark() { return LocalizationService.tr('Dark'); }
}
