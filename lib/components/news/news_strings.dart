import 'package:easy_localization/easy_localization.dart';

/// Localized strings for the news feature.
/// Keys live under the "FeatureNews" namespace in assets/translations/*.json.
class NewsStrings {
  static String get news => 'FeatureNews.news'.tr(); // "News"
  static String get test => 'FeatureNews.test'.tr(); // "Test"
  static String get noMessagesYet =>
      'FeatureNews.noMessagesYet'.tr(); // "No news messages yet"

  // Form
  static String get createNews =>
      'FeatureNews.createNews'.tr(); // "Create news"
  static String get heading => 'FeatureNews.heading'.tr(); // "Heading"
  static String get sendWithNotification =>
      'FeatureNews.sendWithNotification'.tr(); // "Send with notification"

  // Feedback
  static String get messageSent =>
      'FeatureNews.messageSent'.tr(); // "Message has been sent."
  static String get messageCreated =>
      'FeatureNews.messageCreated'.tr(); // "Message has been created."
  static String get messageChanged =>
      'FeatureNews.messageChanged'.tr(); // "Message has been changed."
  static String get messageRemoved =>
      'FeatureNews.messageRemoved'.tr(); // "Message has been removed."
}
