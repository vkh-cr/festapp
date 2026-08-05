import 'package:easy_localization/easy_localization.dart';

/// Localized strings for the HTML editor.
class HtmlStrings {
  static String get processingContent => 'HtmlEditor.processingContent'
      .tr(); // "Processing content and detecting large images..."
  static String get reducingImagesSize =>
      'HtmlEditor.reducingImagesSize'.tr(); // "Reducing Images Size..."
  static String get largeImagesDetected =>
      'HtmlEditor.largeImagesDetected'.tr(); // "Large Images Detected"
  static String get largeImagesPrompt => 'HtmlEditor.largeImagesPrompt'
      .tr(); // "Some images are large and may slow down the app. Press OK to convert them into optimal size."
}
