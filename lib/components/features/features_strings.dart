import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/components/features/feature_constants.dart';
import 'package:fstapp/components/features/feature_service.dart';

class FeaturesStrings {

// Form Settings Feature
  static String get formSettingsTitle => 'FeatureFormSettings.title'.tr();
  static String get formNotFound => 'FeatureFormSettings.formNotFound'.tr();
  static String get labelFormTitle => 'FeatureFormSettings.labelFormTitle'.tr();
  static String get labelFormLink => 'FeatureFormSettings.labelFormLink'.tr();
  static String get validationLinkRequired => 'FeatureFormSettings.validationLinkRequired'.tr();
  static String get validationLinkInvalidChars => 'FeatureFormSettings.validationLinkInvalidChars'.tr();
  static String get validationLinkInUse => 'FeatureFormSettings.validationLinkInUse'.tr();
  static String get labelDeadlineDays => 'FeatureFormSettings.labelDeadlineDays'.tr();
  static String get helperDeadlineDays => 'FeatureFormSettings.helperDeadlineDays'.tr();
  static String get labelCardDesign => 'FeatureFormSettings.labelCardDesign'.tr();
  static String get subtitleCardDesign => 'FeatureFormSettings.subtitleCardDesign'.tr();
  static String get errorFixBeforeSave => 'FeatureFormSettings.errorFixBeforeSave'.tr();
  static String get labelUseExternalForm => 'FeatureFormSettings.labelUseExternalForm'.tr();
  static String get labelReservationLink => 'FeatureFormSettings.labelReservationLink'.tr();
  static String get helperReservationLink => 'FeatureFormSettings.helperReservationLink'.tr();
  static String get labelPrice => 'FeatureFormSettings.labelPrice'.tr();
  static String get helperPrice => 'FeatureFormSettings.helperPrice'.tr();
  static String get labelAdvancedSettings => 'FeatureFormSettings.labelAdvancedSettings'.tr();
  static String get labelReserveButtonTitle => 'FeatureFormSettings.labelReserveButtonTitle'.tr();
  static String get labelDeadlineDuration => 'FeatureFormSettings.labelDeadlineDuration'.tr();
  static String get helperDeadlineDuration => 'FeatureFormSettings.helperDeadlineDuration'.tr();
  static String get labelReminderEnabled => 'FeatureFormSettings.labelReminderEnabled'.tr();
  static String get helperReminderEnabled => 'FeatureFormSettings.helperReminderEnabled'.tr();
  static String get labelReminderInterval => 'FeatureFormSettings.labelReminderInterval'.tr();
  static String get helperReminderInterval => 'FeatureFormSettings.helperReminderInterval'.tr();
  static String get validationReminderInterval => 'FeatureFormSettings.validationReminderInterval'.tr();
  static String get labelEnableReminders => 'FeatureFormSettings.labelEnableReminders'.tr();
  static String get subtitleEnableReminders => 'FeatureFormSettings.subtitleEnableReminders'.tr();
  static String get subtitleRemindersDisabled => 'FeatureFormSettings.subtitleRemindersDisabled'.tr();


// --- FormsTab (Main Grid View) ---
  static String get formsTitle => 'FormsFeature.formsTitle'.tr(); // "Forms"
  static String get createNewForm => 'FormsFeature.createNewForm'.tr(); // "Create New Form"
  static String get createCopy => 'FormsFeature.createCopy'.tr(); // "Create Copy"
  static String get statusOpen => 'FormsFeature.statusOpen'.tr(); // "Form is Open"
  static String get statusClosed => 'FormsFeature.statusClosed'.tr(); // "Closed"
  static String get responses => 'FormsFeature.responses'.tr(); // "Responses"
  static String get duplicateSuccess => 'FormsFeature.duplicateSuccess'.tr(); // "Form duplicated successfully!"
  static String get deleteFormTitle => 'FormsFeature.deleteFormTitle'.tr();
  static String get deleteFormContent => 'FormsFeature.deleteFormContent'.tr();

// --- FormTab (The TabBar holder) ---
  static String get tabForm => 'FormsFeature.tabForm'.tr(); // "Form"
  static String get tabResponses => 'FormsFeature.tabResponses'.tr(); // "Responses" (can be reused)


// --- FormCreationHelper (Creation Dialog) ---
  static String get defaultFormTitle => 'FormsFeature.defaultFormTitle'.tr(); // "new-form"
  static String get formAvailableAt => 'FormsFeature.formAvailableAt'.tr(); // "This form will be available at"
  static String get formCreatedSuccess => 'FormsFeature.formCreatedSuccess'.tr(); // "Form created successfully!"


// --- FormEditorContent (Form Editor Tab) ---
  static String get formTurnedOff => 'FormsFeature.formTurnedOff'.tr(); // "This form is currently turned off"
  static String get editOffText => 'FormsFeature.editOffText'.tr(); // "Edit off text"
  static String get editContent => 'FormsFeature.editContent'.tr(); // "Edit content"
  static String get dragToReorder => 'FormsFeature.dragToReorder'.tr(); // "Drag to reorder fields"
  static String get addFieldTitle => 'FormsFeature.addFieldTitle'.tr(); // "Add Field"
  static String get personalInfo => 'FormsFeature.personalInfo'.tr(); // "Personal Info"
  static String get noFieldsAvailable => 'FormsFeature.noFieldsAvailable'.tr(); // "No fields available to add."

// --- Form Editor (Ticket Editor) ---
  static String get addProductTypeTitle => 'FormsFeature.addProductTypeTitle'.tr();
  static String get createNewProductTypeOption => 'FormsFeature.createNewProductTypeOption'.tr();
  static String get untitledProductType => 'FormsFeature.untitledProductType'.tr();
  static String get noProductTypesToAdd => 'FormsFeature.noProductTypesToAdd'.tr();
  static String get newProductTypeDefaultName => 'FormsFeature.newProductTypeDefaultName'.tr();


  // Schedule Feature Form
  static String get labelScheduleType => 'FeatureSchedule.labelScheduleType'.tr();
  static String get optionBasic => 'FeatureSchedule.optionBasic'.tr();
  static String get optionAdvanced => 'FeatureSchedule.optionAdvanced'.tr();

  // New strings for Enable Children
  static String get labelEnableChildren => 'FeatureSchedule.labelEnableChildren'.tr();
  static String get subtitleEnableChildren => 'FeatureSchedule.subtitleEnableChildren'.tr();

  static String get labelBreakDefinition => 'FeatureSchedule.labelBreakDefinition'.tr();
  static String get optionTime => 'FeatureSchedule.optionTime'.tr();
  static String get optionPlace => 'FeatureSchedule.optionPlace'.tr();

  static String get titleTimeBasedBreaks => 'FeatureSchedule.titleTimeBasedBreaks'.tr();
  static String get labelAfternoonTime => 'FeatureSchedule.labelAfternoonTime'.tr();
  static String get labelEveningTime => 'FeatureSchedule.labelEveningTime'.tr();

  // Event Types Management for Schedule Feature
  static String get titleEventTypes => 'FeatureSchedule.titleEventTypes'.tr();
  static String get buttonAddEventType => 'FeatureSchedule.buttonAddEventType'.tr();
  static String get eventTypeDefaultTitle => 'FeatureSchedule.eventTypeDefaultTitle'.tr();
  static String get labelEventTypeCode => 'FeatureSchedule.labelEventTypeCode'.tr();
  static String get labelEventTypeTitle => 'FeatureSchedule.labelEventTypeTitle'.tr();
  static String get labelColorSource => 'FeatureSchedule.labelColorSource'.tr();
  static String get optionCustomColor => 'FeatureSchedule.optionCustomColor'.tr();
  static String get labelCustomColorHex => 'FeatureSchedule.labelCustomColorHex'.tr();
  static String get tooltipRemoveEventType => 'FeatureSchedule.tooltipRemoveEventType'.tr();
  static String get emptyEventTypes => 'FeatureSchedule.emptyEventTypes'.tr();
  static String get noType => 'FeatureSchedule.noType'.tr();

  // Import Feature
  static String get importFeatureDescription => 'FeatureImport.importFeatureDescription'.tr();
  static String get labelImportFromCsv => 'FeatureImport.labelImportFromCsv'.tr();
  static String get labelImportFromTickets => 'FeatureImport.labelImportFromTickets'.tr();
  static String get importFromTicketsSuccess => 'FeatureImport.importFromTicketsSuccess'.tr();
  static String get importFromTicketsConfirm => 'FeatureImport.importFromTicketsConfirm'.tr();
  static String get importFromTicketsError => 'FeatureImport.importFromTicketsError'.tr();
  static String get importFromTicketsTitle => 'FeatureImport.importFromTicketsTitle'.tr();
  static String get importFromTicketsCompleted => 'FeatureImport.importFromTicketsCompleted'.tr();
  static String get importResultsTitle => 'FeatureImport.importResultsTitle'.tr();
  static String get chooseSourcePrompt => 'FeatureImport.chooseSourcePrompt'.tr();
  static String get createdUsers => 'FeatureImport.createdUsers'.tr();
  static String get updatedUsers => 'FeatureImport.updatedUsers'.tr();
  static String get deletedUsers => 'FeatureImport.deletedUsers'.tr();
  static String get none => 'FeatureImport.none'.tr();
}