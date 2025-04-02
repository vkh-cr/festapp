import 'package:collection/collection.dart';
import 'package:fstapp/dataModels/FeatureModel.dart';
import 'package:fstapp/dataModels/ServiceItemModel.dart';
import 'package:fstapp/dataModels/Tb.dart';

class OccasionSettingsModel {
  DateTime? eventStartTime;
  DateTime? eventEndTime;
  Map<String, dynamic>? services;

  // Game fields
  DateTime? gameStartTime;
  DateTime? gameEndTime;

  // Features
  List<FeatureModel>? features;

  static const String globalSettingsOffline = "globalSettingsOffline";

  OccasionSettingsModel({
    this.eventStartTime,
    this.eventEndTime,
    this.services,
    this.gameStartTime,
    this.gameEndTime,
    this.features,
  });

  static OccasionSettingsModel fromJson(Map<String, dynamic> json) {
    // Initialize to default settings if required data is missing
    var servicesPart = json[Tb.occasions.services] as Map<String, dynamic>?;
    var dataPart = json[Tb.occasions.data] as Map<String, dynamic>?;

    if (dataPart == null) {
      var defaultSettings = OccasionSettingsModel.DefaultSettings;
      defaultSettings.services = servicesPart;
      return defaultSettings;
    }

    var gameSettings = dataPart[Tb.occasions.data_game] as Map<String, dynamic>? ?? {};
    var featuresJson = dataPart[Tb.occasions.data_features] as List<dynamic>? ?? [];

    return OccasionSettingsModel(
      eventStartTime: json[Tb.occasions.start_time] != null
          ? DateTime.tryParse(json[Tb.occasions.start_time])
          : null,
      eventEndTime: json[Tb.occasions.end_time] != null
          ? DateTime.tryParse(json[Tb.occasions.end_time])
          : null,
      gameStartTime: gameSettings[Tb.occasions.data_game_start] != null
          ? DateTime.tryParse(gameSettings[Tb.occasions.data_game_start])
          : null,
      gameEndTime: gameSettings[Tb.occasions.data_game_end] != null
          ? DateTime.tryParse(gameSettings[Tb.occasions.data_game_end])
          : null,
      services: servicesPart,
      features: featuresJson.map((feature) => FeatureModel.fromJson(feature)).toList(),
    );
  }

  Map<String, dynamic> toJson() => {
    Tb.occasions.services: services,
    Tb.occasions.data: {
      Tb.occasions.data_game: {
        Tb.occasions.data_game_start: gameStartTime?.toIso8601String(),
        Tb.occasions.data_game_end: gameEndTime?.toIso8601String(),
      },
      Tb.occasions.data_features: features
    }
  };

  static OccasionSettingsModel DefaultSettings = OccasionSettingsModel(
  );

  FeatureModel? getFeatureByCode(String code) =>
      features?.firstWhereOrNull((feature) => feature.code == code);

  bool isFeatureEnabled(String code) =>
      features?.firstWhereOrNull((feature) => feature.code == code)?.isEnabled == true;

  ServiceItemModel? getReferenceToService(String serviceType, Map<String, dynamic>? userServices) {
    // Retrieve the list of services for the specified service type
    var servs = services?[serviceType] ?? [];

    var serviceRecords = userServices?[serviceType] as Map? ?? {};
    var userCode = serviceRecords.keys.firstWhereOrNull((key) => key.isNotEmpty);
    if(userCode == null) {
      return null;
    }
    for (var service in servs) {
      if (service["code"] == userCode) {
        return ServiceItemModel.fromJson(service);
      }
    }

    return null;
  }
}
