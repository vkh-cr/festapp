import 'package:fstapp/dataServices/RightsService.dart';

class FeatureService {
  static const String metaIsEnabled = "is_enabled";
  static const String metaCode = "code";

  static const String ticket = "ticket";
  static const String form = "form";
  static const String songbook = "songbook";
  static const String game = "game";
  static const String userGroups = "user_groups";
  static const String services = "services";
  static const String entryCode = "entry_code";
  static const String companions = "companions";

  static const String ticketBackground = "background";

  /// Returns `true` if the feature identified by [featureCode] is enabled.
  /// Returns `false` if the feature is not found or disabled.
  static bool isFeatureEnabled(String featureCode, {List<dynamic>? fromFeatures}) {
    if (RightsService.currentOccasion == null) {
      return false;
    }

    final features = fromFeatures ?? RightsService.currentOccasion!.features as List<dynamic>;

    for (final feature in features) {
      if (feature is Map<String, dynamic> && feature[metaCode] == featureCode) {
        return feature[metaIsEnabled] == true;
      }
    }
    return false;
  }

  /// Returns the complete feature map for [featureCode] if available.
  static Map<String, dynamic>? getFeatureDetails(String featureCode, {List<dynamic>? fromFeatures}) {
    if (RightsService.currentOccasion == null) {
      return null;
    }

    final features = fromFeatures ?? RightsService.currentOccasion!.features as List<dynamic>;
    for (final feature in features) {
      if (feature is Map<String, dynamic> && feature[metaCode] == featureCode) {
        return feature;
      }
    }
    return null;
  }

  /// Returns the maximum number of companions allowed for the current occasion.
  /// If the feature is not found or the max is not specified, this returns null.
  static int? getMaxCompanions() {
    final companionFeature = getFeatureDetails(companions);
    if (companionFeature != null && companionFeature.containsKey('max_companions')) {
      return companionFeature['max_companions'] as int;
    }
    return null;
  }
}
