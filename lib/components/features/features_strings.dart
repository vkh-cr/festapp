import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/components/features/feature_constants.dart';
import 'package:fstapp/components/features/feature_service.dart';

class FeaturesStrings {

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

  // New Auto Import strings
  static String get labelAutoImport => 'FeatureImport.labelAutoImport'.tr(); // "Auto-Import Users"
  static String get helperAutoImport => 'FeatureImport.helperAutoImport'.tr(); // "UUsers will automatically have an account created upon signing up through the form. Default password is '1'."
}