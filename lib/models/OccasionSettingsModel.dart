import 'package:fstapp/models/Tb.dart';

class OccasionSettingsModel {
  dynamic defaultMapLocation;
  double defaultMapZoom;
  DateTime? eventsRegistrationTime;
  int? maxCompanions;
  bool? isEnabledEntryCode;

  static const String globalSettingsOffline = "globalSettingsOffline";

  OccasionSettingsModel({
    this.defaultMapLocation,
    required this.defaultMapZoom,
    this.eventsRegistrationTime,
    this.maxCompanions,
    this.isEnabledEntryCode,
  });

  static OccasionSettingsModel fromJson(Map<String, dynamic> json) {
    return OccasionSettingsModel(
      defaultMapLocation: json[Tb.occasions.data_defaultMapLocation]??DefaultSettings.defaultMapLocation,
      defaultMapZoom: json[Tb.occasions.data_defaultMapZoom].toDouble(),
      maxCompanions: json[Tb.occasions.data_max_companions],
      eventsRegistrationTime: json[Tb.occasions.data_events_registration_start]!=null ? DateTime.parse(json[Tb.occasions.data_events_registration_start]) : null,
      isEnabledEntryCode: json[Tb.occasions.data_is_enabled_entry_code]
    );
  }

  Map toJson() =>
  {
    Tb.occasions.data_defaultMapLocation: defaultMapLocation,
    Tb.occasions.data_defaultMapZoom: defaultMapZoom,
  };

  static const dynamic DefaultPosition =  {
    "lat": 49.1038023,
    "lng": 17.3947819
  };

  static OccasionSettingsModel DefaultSettings = OccasionSettingsModel(
      defaultMapLocation: DefaultPosition,
      defaultMapZoom: 17);
}