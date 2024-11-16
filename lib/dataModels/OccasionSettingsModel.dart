import 'package:collection/collection.dart';
import 'package:fstapp/dataModels/ServiceItemModel.dart';
import 'package:fstapp/dataModels/Tb.dart';

class OccasionSettingsModel {
  DateTime? eventStartTime;
  DateTime? eventEndTime;
  dynamic defaultMapLocation;
  double defaultMapZoom;
  DateTime? eventsRegistrationTime;
  int? maxCompanions;
  bool? isEnabledEntryCode;
  Map<String, dynamic>? services;

  // Nested map_layer fields
  String? mapLayerLayerLink;
  String? mapLayerLogo;
  String? mapLayerText;
  String? mapLayerLogoLink;
  String? mapLayerTextLink;

  // Game fields
  DateTime? gameStartTime;
  DateTime? gameEndTime;

  static const String globalSettingsOffline = "globalSettingsOffline";

  OccasionSettingsModel({
    this.eventStartTime,
    this.eventEndTime,
    this.defaultMapLocation,
    required this.defaultMapZoom,
    this.eventsRegistrationTime,
    this.maxCompanions,
    this.isEnabledEntryCode,
    this.mapLayerLayerLink,
    this.mapLayerLogo,
    this.mapLayerText,
    this.mapLayerLogoLink,
    this.mapLayerTextLink,
    this.services,
    this.gameStartTime,
    this.gameEndTime,
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

    var mapLayer = dataPart[Tb.occasions.data_map_layer] as Map<String, dynamic>? ?? {};
    var gameSettings = dataPart[Tb.occasions.data_game] as Map<String, dynamic>? ?? {};

    return OccasionSettingsModel(
      eventStartTime: json[Tb.occasions.start_time] != null
          ? DateTime.tryParse(json[Tb.occasions.start_time])
          : null,
      eventEndTime: json[Tb.occasions.end_time] != null
          ? DateTime.tryParse(json[Tb.occasions.end_time])
          : null,
      defaultMapLocation: dataPart[Tb.occasions.data_defaultMapLocation] ?? DefaultSettings.defaultMapLocation,
      defaultMapZoom: (dataPart[Tb.occasions.data_defaultMapZoom] as num?)?.toDouble() ?? DefaultSettings.defaultMapZoom,
      maxCompanions: dataPart[Tb.occasions.data_max_companions] as int?,
      eventsRegistrationTime: dataPart[Tb.occasions.data_events_registration_start] != null
          ? DateTime.tryParse(dataPart[Tb.occasions.data_events_registration_start])
          : null,
      isEnabledEntryCode: dataPart[Tb.occasions.data_is_enabled_entry_code] as bool?,
      mapLayerLayerLink: mapLayer[Tb.occasions.data_map_layer_layer_link] as String?,
      mapLayerLogo: mapLayer[Tb.occasions.data_map_layer_logo] as String?,
      mapLayerText: mapLayer[Tb.occasions.data_map_layer_text] as String?,
      mapLayerLogoLink: mapLayer[Tb.occasions.data_map_layer_logo_link] as String?,
      mapLayerTextLink: mapLayer[Tb.occasions.data_map_layer_text_link] as String?,
      gameStartTime: gameSettings[Tb.occasions.data_game_start] != null
          ? DateTime.tryParse(gameSettings[Tb.occasions.data_game_start])
          : null,
      gameEndTime: gameSettings[Tb.occasions.data_game_end] != null
          ? DateTime.tryParse(gameSettings[Tb.occasions.data_game_end])
          : null,
      services: servicesPart,
    );
  }

  Map<String, dynamic> toJson() => {
    Tb.occasions.services: services,
    Tb.occasions.data: {
      Tb.occasions.data_defaultMapLocation: defaultMapLocation,
      Tb.occasions.data_defaultMapZoom: defaultMapZoom,
      Tb.occasions.data_is_enabled_entry_code: isEnabledEntryCode,
      Tb.occasions.data_max_companions: maxCompanions,
      Tb.occasions.data_events_registration_start: eventsRegistrationTime?.toIso8601String(),
      Tb.occasions.data_map_layer: {
        Tb.occasions.data_map_layer_logo: mapLayerLogo,
        Tb.occasions.data_map_layer_text: mapLayerText,
        Tb.occasions.data_map_layer_logo_link: mapLayerLogoLink,
        Tb.occasions.data_map_layer_text_link: mapLayerTextLink,
      },
      Tb.occasions.data_game: {
        Tb.occasions.data_game_start: gameStartTime?.toIso8601String(),
        Tb.occasions.data_game_end: gameEndTime?.toIso8601String(),
      }
    }
  };

  static dynamic get DefaultPosition => {
    "lat": 49.1038023,
    "lng": 17.3947819
  };

  static OccasionSettingsModel DefaultSettings = OccasionSettingsModel(
    defaultMapLocation: DefaultPosition,
    defaultMapZoom: 17,
  );

  ServiceItemModel? getReferenceToService2(String serviceType, String? code) {
    return (services?[serviceType] as List<dynamic>?)
        ?.cast<Map<String, dynamic>>()
        .map(ServiceItemModel.fromJson)
        .cast<ServiceItemModel?>()
        .firstWhereOrNull(
          (service) => service?.code == code
    );
  }

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
