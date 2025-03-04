import 'package:collection/collection.dart';
import 'package:fstapp/dataServices/RightsService.dart';
import 'package:fstapp/services/features/Feature.dart';
import 'package:fstapp/services/features/FeatureConstants.dart';

class FeatureService {
  /// Checks whether the feature with [featureCode] is enabled.
  /// Expects [features] to be a list of Feature objects.
  static bool isFeatureEnabled(String featureCode, {List<Feature>? features}) {
    if (RightsService.currentOccasion == null) return false;
    final featureList = features ?? RightsService.currentOccasion!.features;
    return featureList.any((feature) => feature.code == featureCode && feature.isEnabled);
  }

  /// Returns a default list of features.
  static List<Feature> getDefaultFeatures() {
    return [
      Feature(code: FeatureConstants.form, isEnabled: false),
      Feature(
        code: FeatureConstants.ticket,
        isEnabled: false,
        ticketLightColor: 'FFFFFF',
        ticketDarkColor: '000000',
        ticketBackground: '',
      ),
      Feature(code: FeatureConstants.blueprint, isEnabled: false),
      Feature(code: FeatureConstants.songbook, isEnabled: false),
      Feature(code: FeatureConstants.game, isEnabled: false),
      Feature(code: FeatureConstants.mySchedule, isEnabled: false),
      Feature(code: FeatureConstants.services, isEnabled: false),
      Feature(code: FeatureConstants.userGroups, isEnabled: false),
      Feature(code: FeatureConstants.entryCode, isEnabled: false),
      Feature(code: FeatureConstants.companions, isEnabled: false, companionsMax: 1),
    ];
  }


  static Feature? getFeatureDetails(String featureCode, {List<Feature>? features}) {
    if (RightsService.currentOccasion == null) return null;
    var featuresList = features ?? RightsService.currentOccasion?.features;
    if(featuresList == null){
      return null;
    }
    return featuresList.firstWhereOrNull((feature) => feature.code == featureCode);
  }

  /// Returns the maximum number of companions allowed.
  static int? getMaxCompanions() {
    final companionFeature = getFeatureDetails(FeatureConstants.companions);
    return companionFeature?.companionsMax;
  }
}
