import 'package:festapp/models/Tb.dart';

class OccasionSettingsModel {
  dynamic defaultMapLocation;
  double defaultMapZoom;
  DateTime? eventsRegistrationTime;

  static const String globalSettingsOffline = "globalSettingsOffline";

  OccasionSettingsModel({
    this.defaultMapLocation,
    required this.defaultMapZoom,
    this.eventsRegistrationTime
  });

  static OccasionSettingsModel fromJson(Map<String, dynamic> json) {
    return OccasionSettingsModel(
      defaultMapLocation: json[Tb.occasions.data_defaultMapLocation]??DefaultSettings.defaultMapLocation,
      defaultMapZoom: json[Tb.occasions.data_defaultMapZoom].toDouble(),
      eventsRegistrationTime: json[Tb.occasions.data_events_registration_start]!=null ? DateTime.parse(json[Tb.occasions.data_events_registration_start]) : null
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