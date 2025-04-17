import 'package:collection/collection.dart';
import 'package:fstapp/data_services/rights_service.dart';

import 'feature.dart';
import 'feature_constants.dart';

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
      // Use FormFeature for the form feature.
      FormFeature(code: FeatureConstants.form, isEnabled: false),
      // Use TicketFeature for ticket-specific properties.
      TicketFeature(
        code: FeatureConstants.ticket,
        isEnabled: false,
        ticketLightColor: 'FFFFFF',
        ticketDarkColor: '000000',
        ticketBackground: '',
      ),
      // Use SimpleFeature for features with no extra properties.
      SimpleFeature(code: FeatureConstants.blueprint, isEnabled: false),
      WorkshopsFeature(code: FeatureConstants.workshops, isEnabled: true),
      MapFeature(code: FeatureConstants.map, isEnabled: true),
      SimpleFeature(code: FeatureConstants.songbook, isEnabled: false),
      SimpleFeature(code: FeatureConstants.game, isEnabled: false),
      SimpleFeature(code: FeatureConstants.mySchedule, isEnabled: false),
      SimpleFeature(code: FeatureConstants.services, isEnabled: false),
      SimpleFeature(code: FeatureConstants.userGroups, isEnabled: false),
      SimpleFeature(code: FeatureConstants.entryCode, isEnabled: false),
      SimpleFeature(code: FeatureConstants.timetable, isEnabled: false),
      CompanionsFeature(code: FeatureConstants.companions, isEnabled: false, companionsMax: 1),
    ];
  }

  /// Retrieves a feature based on its [featureCode].
  static Feature? getFeatureDetails(String featureCode, {List<Feature>? features}) {
    if (RightsService.currentOccasion == null) return null;
    var featuresList = features ?? RightsService.currentOccasion?.features ?? RightsService.currentUnit?.features;
    if (featuresList == null) {
      return null;
    }
    return featuresList.firstWhereOrNull((feature) => feature.code == featureCode);
  }

  static dynamic getDefaultLocation() {
    final mapFeature = getFeatureDetails(FeatureConstants.map);
    if (mapFeature is MapFeature) {
      return {"lat": mapFeature.defaultMapLocation.lat, "lng": mapFeature.defaultMapLocation.lng };
    }
    return {"lat": MapFeature.defaultLocation.lat, "lng": MapFeature.defaultLocation.lng };
  }

  /// Returns the maximum number of companions allowed.
  static int? getMaxCompanions() {
    final companionFeature = getFeatureDetails(FeatureConstants.companions);
    if (companionFeature is CompanionsFeature) {
      return companionFeature.companionsMax;
    }
    return null;
  }
}
