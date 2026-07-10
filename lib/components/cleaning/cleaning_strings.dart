import 'package:easy_localization/easy_localization.dart';

/// Localized strings for the Cleaning service (úklidová služba) feature.
/// Keys live under "Cleaning" / "FeatureCleaning" in the translations.
/// Only cs + en are provided (plan section 4.6).
class CleaningStrings {
  static String get featureTitle => 'FeatureCleaning.title'.tr();
  static String get featureDescription => 'FeatureCleaning.description'.tr();

  static String get pageTitle => 'Cleaning.pageTitle'.tr();

  static String get noToilets => 'Cleaning.noToilets'.tr();
  static String get tapToReport => 'Cleaning.tapToReport'.tr();
  static String get refresh => 'Cleaning.refresh'.tr();
  static String get showOnMap => 'Cleaning.showOnMap'.tr();

  // Report dialog
  static String get reportProblem => 'Cleaning.reportProblem'.tr();
  static String reportDialogTitle(String toilet) =>
      'Cleaning.reportDialogTitle'.tr(namedArgs: {'toilet': toilet});
  static String get noteHint => 'Cleaning.noteHint'.tr();
  static String get send => 'Cleaning.send'.tr();
  static String get cancel => 'Cleaning.cancel'.tr();

  // Problem type labels
  static String get problemPaper => 'Cleaning.problemPaper'.tr();
  static String get problemHygiene => 'Cleaning.problemHygiene'.tr();
  static String get problemContamination => 'Cleaning.problemContamination'.tr();

  // Report result feedback
  static String get reportSuccess => 'Cleaning.reportSuccess'.tr();
  static String get reportDuplicate => 'Cleaning.reportDuplicate'.tr();
  static String get reportRateLimited => 'Cleaning.reportRateLimited'.tr();
  static String get reportError => 'Cleaning.reportError'.tr();

  // Status labels
  static String get statusOk => 'Cleaning.statusOk'.tr();

  // Crew view
  static String get markCleaned => 'Cleaning.markCleaned'.tr();
  static String get cleanedConfirm => 'Cleaning.cleanedConfirm'.tr();
  static String get reportedBy => 'Cleaning.reportedBy'.tr();
  static String reportedAt(String time) =>
      'Cleaning.reportedAt'.tr(namedArgs: {'time': time});
  static String get anonymous => 'Cleaning.anonymous'.tr();

  /// Human label for a problem-type code (paper|hygiene|contamination).
  static String problemLabel(String type) {
    switch (type) {
      case 'paper':
        return problemPaper;
      case 'hygiene':
        return problemHygiene;
      case 'contamination':
        return problemContamination;
      default:
        return type;
    }
  }
}
