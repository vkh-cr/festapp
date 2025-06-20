import 'package:collection/collection.dart';
import 'package:fstapp/components/features/feature.dart';
import 'package:fstapp/data_models/service_item_model.dart';
import 'package:fstapp/data_models/tb.dart';

class OccasionSettingsModel {
  DateTime? eventStartTime;
  DateTime? eventEndTime;
  Map<String, dynamic>? services;
  Map<String, dynamic>? data;

  // Game fields
  DateTime? gameStartTime;
  DateTime? gameEndTime;

  // Features
  List<Feature>? features;


  // Visibility switch
  bool? isHidden;

  static const String globalSettingsOffline = "globalSettingsOffline";

  OccasionSettingsModel({
    this.eventStartTime,
    this.eventEndTime,
    this.services,
    this.gameStartTime,
    this.gameEndTime,
    this.features,
    this.data
  });

  static OccasionSettingsModel fromJson(Map<String, dynamic> json) {
    // Initialize to default settings if required data is missing
    var servicesPart = json[Tb.occasions.services] as Map<String, dynamic>?;
    var featuresPart = json[Tb.occasions.features] as List<dynamic>?;
    var dataPart = json[Tb.occasions.data] as Map<String, dynamic>?;

    if (dataPart == null) {
      var defaultSettings = OccasionSettingsModel.defaultSettings;
      defaultSettings.services = servicesPart;
      return defaultSettings;
    }

    var gameSettings = dataPart[Tb.occasions.data_game] as Map<String, dynamic>? ?? {};
    var hiddenFlag = dataPart[Tb.occasions.is_hidden] as bool?;

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
      features: featuresPart?.map((f) => Feature.fromJson(f)).toList(),
      data: dataPart
    );
  }

  Map<String, dynamic> toJson() => {
    Tb.occasions.services: services,
    Tb.occasions.features: features
        ?.map((f) => f.toJson())
        .toList(),
    Tb.occasions.is_hidden: isHidden,
    Tb.occasions.data: {
      Tb.occasions.data_game: {
        Tb.occasions.data_game_start: gameStartTime?.toIso8601String(),
        Tb.occasions.data_game_end: gameEndTime?.toIso8601String(),
      },
    }
  };

  static OccasionSettingsModel defaultSettings = OccasionSettingsModel(
  );

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
