import 'package:easy_localization/easy_localization.dart';

class GlobalSettingsModel {
  dynamic defaultMapLocation;
  double defaultMapZoom;
  String? tooSoonMessage = "It's too soon!".tr();

  static const String defaultMapLocationCode = "defaultMapLocation";
  static const String defaultMapZoomCode = "defaultMapZoom";
  static const String tooSoonMessageCode = "tooSoonMessage";
  static const String globalSettingsTable = "global_settings";
  static const String globalSettingsOffline = "globalSettingsOffline";

  GlobalSettingsModel({
    this.defaultMapLocation,
    required this.tooSoonMessage,
    required this.defaultMapZoom
  });

  static GlobalSettingsModel fromJson(Map<String, dynamic> json) {
    return GlobalSettingsModel(
      defaultMapLocation: json[defaultMapLocationCode]??DefaultSettings.defaultMapLocation,
      defaultMapZoom: json[defaultMapZoomCode].toDouble(),
      tooSoonMessage: json[tooSoonMessageCode]??DefaultSettings.tooSoonMessage,
    );
  }

  Map toJson() =>
  {
    defaultMapLocationCode: defaultMapLocation,
    defaultMapZoomCode: defaultMapZoom,
    tooSoonMessageCode: tooSoonMessage
  };

  static const dynamic DefaultPosition =  {
    "lat": 49.1038023,
    "lng": 17.3947819
  };

  static GlobalSettingsModel DefaultSettings = GlobalSettingsModel(
      defaultMapLocation: DefaultPosition,
      defaultMapZoom: 17,
      tooSoonMessage: "It's too soon!".tr());
}