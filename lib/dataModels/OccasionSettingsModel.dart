import 'package:fstapp/dataModels/Tb.dart';

class OccasionSettingsModel {
  dynamic defaultMapLocation;
  double defaultMapZoom;
  DateTime? eventsRegistrationTime;
  int? maxCompanions;
  bool? isEnabledEntryCode;

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
  });

  static OccasionSettingsModel fromJson(Map<String, dynamic> json) {
    var mapLayer = json[Tb.occasions.data_map_layer] ?? {}; // Handle map_layer as nested object

    return OccasionSettingsModel(
      defaultMapLocation: json[Tb.occasions.data_defaultMapLocation] ?? DefaultSettings.defaultMapLocation,
      defaultMapZoom: json[Tb.occasions.data_defaultMapZoom].toDouble(),
      maxCompanions: json[Tb.occasions.data_max_companions],
      eventsRegistrationTime: json[Tb.occasions.data_events_registration_start] != null
          ? DateTime.parse(json[Tb.occasions.data_events_registration_start])
          : null,
      isEnabledEntryCode: json[Tb.occasions.data_is_enabled_entry_code],
      mapLayerLayerLink: mapLayer[Tb.occasions.data_map_layer_layer_link],
      mapLayerLogo: mapLayer[Tb.occasions.data_map_layer_logo],
      mapLayerText: mapLayer[Tb.occasions.data_map_layer_text],
      mapLayerLogoLink: mapLayer[Tb.occasions.data_map_layer_logo_link],
      mapLayerTextLink: mapLayer[Tb.occasions.data_map_layer_text_link],
    );
  }

  Map<String, dynamic> toJson() => {
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
  };

  static const dynamic DefaultPosition = {
    "lat": 49.1038023,
    "lng": 17.3947819
  };

  static OccasionSettingsModel DefaultSettings = OccasionSettingsModel(
    defaultMapLocation: DefaultPosition,
    defaultMapZoom: 17,
  );
}
