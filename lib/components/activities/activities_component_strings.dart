import 'package:intl/intl.dart';
import 'package:easy_localization/easy_localization.dart';

class ActivitiesComponentStrings {
  // General
  static String buttonCancel = 'ActivitiesComponentStrings.buttonCancel'.tr();
  static String buttonOK = 'ActivitiesComponentStrings.buttonOK'.tr();
  static String buttonSave = 'ActivitiesComponentStrings.buttonSave'.tr();
  static String labelTitle = 'ActivitiesComponentStrings.labelTitle'.tr();
  static String tooltipRemovePlace = 'ActivitiesComponentStrings.tooltipRemovePlace'.tr();
  static String tooltipRemoveEvent = 'ActivitiesComponentStrings.tooltipRemoveEvent'.tr();
  static String tooltipExitFullscreen = 'ActivitiesComponentStrings.tooltipExitFullscreen'.tr();
  static String tooltipEnterFullscreen = 'ActivitiesComponentStrings.tooltipEnterFullscreen'.tr();
  static String tooltipAddNewActivity = 'ActivitiesComponentStrings.tooltipAddNewActivity'.tr();

  // Search/Filter
  static String hintSearchUsers = 'ActivitiesComponentStrings.hintSearchUsers'.tr();
  static String hintSearchPlaces = 'ActivitiesComponentStrings.hintSearchPlaces'.tr();
  static String hintSearchEvents = 'ActivitiesComponentStrings.hintSearchEvents'.tr();
  static String hintGlobalFilter = 'ActivitiesComponentStrings.hintGlobalFilter'.tr();
  static String textNoFilterMatch = 'ActivitiesComponentStrings.textNoFilterMatch'.tr();

  // Activities Timeline
  static String titleActivitiesTimeline = 'ActivitiesComponentStrings.titleActivitiesTimeline'.tr();
  static String textNoActivitiesAvailable = 'ActivitiesComponentStrings.textNoActivitiesAvailable'.tr();
  static String textClickPlusToAddOne = 'ActivitiesComponentStrings.textClickPlusToAddOne'.tr(); // Unicode for plus
  static String textActivityHidden = 'ActivitiesComponentStrings.textActivityHidden'.tr();
  static String textNewActivityAddedDragDrop = 'ActivitiesComponentStrings.textNewActivityAddedDragDrop'.tr();
  static String textDragUsersFromTopDropHere = 'ActivitiesComponentStrings.textDragUsersFromTopDropHere'.tr();
  static String textNoUsersAssignedYet = 'ActivitiesComponentStrings.textNoUsersAssignedYet'.tr();
  static String textUntitledActivity = 'ActivitiesComponentStrings.textUntitledActivity'.tr();

  // Activity Options
  static String menuRename = 'ActivitiesComponentStrings.menuRename'.tr();
  static String menuDelete = 'ActivitiesComponentStrings.menuDelete'.tr();
  static String dialogRenameActivity = 'ActivitiesComponentStrings.dialogRenameActivity'.tr();
  static String tooltipActivityOptions = 'ActivitiesComponentStrings.tooltipActivityOptions'.tr();
  static String tooltipMarkVisible = 'ActivitiesComponentStrings.tooltipMarkVisible'.tr();
  static String tooltipMarkHidden = 'ActivitiesComponentStrings.tooltipMarkHidden'.tr();

  // Assignment Detail Overlay
  static String labelPlaces = 'ActivitiesComponentStrings.labelPlaces'.tr();
  static String labelEvents = 'ActivitiesComponentStrings.labelEvents'.tr();
  static String textNoItemsAssigned = 'ActivitiesComponentStrings.textNoItemsAssigned'.tr();
  static String tooltipDeleteAssignment = 'ActivitiesComponentStrings.tooltipDeleteAssignment'.tr();

  // User Row Options
  static String menuRemoveUserFromActivity = 'ActivitiesComponentStrings.menuRemoveUserFromActivity'.tr();
  static String tooltipUserAssignmentOptions = 'ActivitiesComponentStrings.tooltipUserAssignmentOptions'.tr();

  // Default/Unnamed Items
  static String textUnnamedPlace = 'Unnamed Place';
  static String textUnnamedEvent = 'Unnamed Event';

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