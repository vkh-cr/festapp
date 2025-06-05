import 'package:intl/intl.dart';
import 'package:easy_localization/easy_localization.dart';

class ActivitiesComponentStrings {
  // General
  static String get buttonCancel => 'ActivitiesComponentStrings.buttonCancel'.tr();
  static String get buttonOK => 'ActivitiesComponentStrings.buttonOK'.tr();
  static String get buttonSave => 'ActivitiesComponentStrings.buttonSave'.tr();
  static String get labelTitle => 'ActivitiesComponentStrings.labelTitle'.tr();
  static String get tooltipRemovePlace => 'ActivitiesComponentStrings.tooltipRemovePlace'.tr();
  static String get tooltipRemoveEvent => 'ActivitiesComponentStrings.tooltipRemoveEvent'.tr();
  static String get tooltipExitFullscreen => 'ActivitiesComponentStrings.tooltipExitFullscreen'.tr();
  static String get tooltipEnterFullscreen => 'ActivitiesComponentStrings.tooltipEnterFullscreen'.tr();
  static String get tooltipAddNewActivity => 'ActivitiesComponentStrings.tooltipAddNewActivity'.tr();

  // Search/Filter
  static String get hintSearchUsers => 'ActivitiesComponentStrings.hintSearchUsers'.tr();
  static String get hintSearchPlaces => 'ActivitiesComponentStrings.hintSearchPlaces'.tr();
  static String get hintSearchEvents => 'ActivitiesComponentStrings.hintSearchEvents'.tr();
  static String get hintGlobalFilter => 'ActivitiesComponentStrings.hintGlobalFilter'.tr();
  static String get textNoFilterMatch => 'ActivitiesComponentStrings.textNoFilterMatch'.tr();

  // Activities Timeline
  static String get titleActivitiesTimeline => 'ActivitiesComponentStrings.titleActivitiesTimeline'.tr();
  static String get textNoActivitiesAvailable => 'ActivitiesComponentStrings.textNoActivitiesAvailable'.tr();
  static String get textClickPlusToAddOne => 'ActivitiesComponentStrings.textClickPlusToAddOne'.tr();
  static String get textActivityHidden => 'ActivitiesComponentStrings.textActivityHidden'.tr();
  static String get textNewActivityAddedDragDrop => 'ActivitiesComponentStrings.textNewActivityAddedDragDrop'.tr();
  static String get textDragUsersFromTopDropHere => 'ActivitiesComponentStrings.textDragUsersFromTopDropHere'.tr();
  static String get textNoUsersAssignedYet => 'ActivitiesComponentStrings.textNoUsersAssignedYet'.tr();
  static String get textUntitledActivity => 'ActivitiesComponentStrings.textUntitledActivity'.tr();

  // Activity Options
  static String get menuRename => 'ActivitiesComponentStrings.menuRename'.tr();
  static String get menuDelete => 'ActivitiesComponentStrings.menuDelete'.tr();
  static String get menuDetails => 'Description'.tr();
  static String get dialogRenameActivity => 'ActivitiesComponentStrings.dialogRenameActivity'.tr();
  static String get tooltipActivityOptions => 'ActivitiesComponentStrings.tooltipActivityOptions'.tr();
  static String get tooltipMarkVisible => 'ActivitiesComponentStrings.tooltipMarkVisible'.tr();
  static String get tooltipMarkHidden => 'ActivitiesComponentStrings.tooltipMarkHidden'.tr();

  // Assignment Detail Overlay
  static String get labelPlaces => 'ActivitiesComponentStrings.labelPlaces'.tr();
  static String get labelEvents => 'ActivitiesComponentStrings.labelEvents'.tr();
  static String get textNoItemsAssigned => 'ActivitiesComponentStrings.textNoItemsAssigned'.tr();
  static String get tooltipDeleteAssignment => 'ActivitiesComponentStrings.tooltipDeleteAssignment'.tr();

  // User Row Options
  static String get menuRemoveUserFromActivity => 'ActivitiesComponentStrings.menuRemoveUserFromActivity'.tr();
  static String get tooltipUserAssignmentOptions => 'ActivitiesComponentStrings.tooltipUserAssignmentOptions'.tr();

  // Default/Unnamed Items
  static String textUnnamedPlace = 'Unnamed Place';
  static String textUnnamedEvent = 'Unnamed Event';

  static String get activity => 'ActivitiesComponentStrings.activity'.tr();


  // Timeline Painter (Date/Time)
  // Using intl package for true localization.
  // Ensure you have added the intl package to your pubspec.yaml.

  /// Returns a list of localized weekday abbreviations for the given locale.
  /// Requires the intl package.
  static List<String> getWeekdayAbbreviations(String locale) {
    // Use a date format that gives the abbreviated weekday name (e.g., 'E' or 'EEEEEE' depending on desired length)
    // We iterate through days to get all 7 abbreviations starting from Monday.
    final List<String> abbreviations = [];
    final now = DateTime.now();
    // Find the first Monday before or on today's date
    DateTime monday = now.subtract(Duration(days: now.weekday - 1));

    for (int i = 0; i < 7; i++) {
      final date = monday.add(Duration(days: i));
      // 'E' gives a short abbreviation like Mon, Tue
      // 'EEEEEE' gives a very short abbreviation like M, T
      abbreviations.add(DateFormat('E', locale).format(date));
    }
    return abbreviations;
  }

  /// Returns a list of localized month abbreviations for the given locale.
  /// Requires the intl package.
  static List<String> getMonthAbbreviations(String locale) {
    // Use a date format that gives the abbreviated month name ('MMM')
    final List<String> abbreviations = [];
    for (int i = 1; i <= 12; i++) {
      final date = DateTime(2000, i, 1); // Use any year, day 1 for month formatting
      abbreviations.add(DateFormat('MMM', locale).format(date));
    }
    return abbreviations;
  }
}