import 'package:collection/collection.dart';
import 'package:fstapp/dataModels/ServiceItemModel.dart';
import 'package:fstapp/dataModels/Tb.dart';

class OccasionSettingsModel {
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

  static const String globalSettingsOffline = "globalSettingsOffline";

  OccasionSettingsModel({
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
    this.services
  });

  static OccasionSettingsModel fromJson(Map<String, dynamic> json) {
    Map<String, dynamic> servicesPart = json[Tb.occasions.services];

    OccasionSettingsModel toReturn;
    var dataPart = json[Tb.occasions.data];
    if(dataPart == null) {
      toReturn = OccasionSettingsModel.DefaultSettings;
      toReturn.services = servicesPart;
    }

    var mapLayer = dataPart[Tb.occasions.data_map_layer] ?? {}; // Handle map_layer as nested object


    return OccasionSettingsModel(
      defaultMapLocation: dataPart[Tb.occasions.data_defaultMapLocation] ?? DefaultSettings.defaultMapLocation,
      defaultMapZoom: dataPart[Tb.occasions.data_defaultMapZoom].toDouble(),
      maxCompanions: dataPart[Tb.occasions.data_max_companions],
      eventsRegistrationTime: dataPart[Tb.occasions.data_events_registration_start] != null
          ? DateTime.parse(dataPart[Tb.occasions.data_events_registration_start])
          : null,
      isEnabledEntryCode: dataPart[Tb.occasions.data_is_enabled_entry_code],
      mapLayerLayerLink: mapLayer[Tb.occasions.data_map_layer_layer_link],
      mapLayerLogo: mapLayer[Tb.occasions.data_map_layer_logo],
      mapLayerText: mapLayer[Tb.occasions.data_map_layer_text],
      mapLayerLogoLink: mapLayer[Tb.occasions.data_map_layer_logo_link],
      mapLayerTextLink: mapLayer[Tb.occasions.data_map_layer_text_link],
      services: servicesPart
    );
  }

  Map<String, dynamic> toJson() => {
    Tb.occasions.services:services,
    Tb.occasions.data:{
    Tb.occasions.data_defaultMapLocation: defaultMapLocation,
    Tb.occasions.data_defaultMapZoom: defaultMapZoom,
    Tb.occasions.data_is_enabled_entry_code: isEnabledEntryCode,
    Tb.occasions.data_max_companions: maxCompanions,
    Tb.occasions.data_events_registration_start: eventsRegistrationTime?.toIso8601String(),

    // Nested map_layer object
    Tb.occasions.data_map_layer: {
      Tb.occasions.data_map_layer_logo: mapLayerLogo,
      Tb.occasions.data_map_layer_text: mapLayerText,
      Tb.occasions.data_map_layer_logo_link: mapLayerLogoLink,
      Tb.occasions.data_map_layer_text_link: mapLayerTextLink,
    }
  }};

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

    var serviceRecords = userServices?[serviceType] as Map;
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
