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
  static const String blueprint = "blueprint";
  static const String quotes = "quotes";

  // New constants for ticket feature
  static const String ticketLightColor = "lightColor";
  static const String ticketDarkColor = "darkColor";
  static const String ticketBackground = "background";

  // New constants for form feature
  static const String formUseExternal = "use_external_form";
  static const String formExternalLink = "external_form_link";

  // New constant for companions feature
  static const String companionsMax = "max_companions";

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

  static List<Map<String, dynamic>> getDefaultFeatures() {
    return [
      {metaCode: form, metaIsEnabled: false},
      {
        metaCode: ticket,
        ticketLightColor: 'FFFFFF',
        ticketDarkColor: '000000',
        ticketBackground: '',
        metaIsEnabled: false,
      },
      {metaCode: blueprint, metaIsEnabled: false},
      {metaCode: songbook, metaIsEnabled: false},
      {metaCode: game, metaIsEnabled: false},
      {metaCode: services, metaIsEnabled: false},
      {metaCode: userGroups, metaIsEnabled: false},
      {metaCode: entryCode, metaIsEnabled: false},
      {metaCode: companions, metaIsEnabled: false, companionsMax: 1},
    ];
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
    if (companionFeature != null && companionFeature.containsKey(companionsMax)) {
      return companionFeature[companionsMax] as int;
    }
    return null;
  }
}
