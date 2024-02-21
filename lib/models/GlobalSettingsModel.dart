import 'package:easy_localization/easy_localization.dart';

class GlobalSettingsModel {
  int? id;
  dynamic defaultMapLocation;
  double defaultMapZoom;
  String? tooSoonMessage = "It's too soon!".tr();

  static const String idColumn = "id";
  static const String jsonColumn = "json";

  static const String defaultMapLocationCode = "defaultMapLocation";
  static const String defaultMapZoomCode = "defaultMapZoom";
  static const String tooSoonMessageCode = "tooSoonMessage";
  static const String globalSettingsTable = "global_settings";
  static const String globalSettingsOffline = "globalSettingsOffline";

  GlobalSettingsModel({
    this.id,
    this.defaultMapLocation,
    required this.tooSoonMessage,
    required this.defaultMapZoom
  });

  static GlobalSettingsModel fromJson(Map<String, dynamic> json) {
    return GlobalSettingsModel(
      id: json[idColumn],
      defaultMapLocation: json[jsonColumn][defaultMapLocationCode]??DefaultSettings.defaultMapLocation,
      defaultMapZoom: json[jsonColumn][defaultMapZoomCode].toDouble(),
      tooSoonMessage: json[jsonColumn][tooSoonMessageCode]??DefaultSettings.tooSoonMessage,
    );
  }

  Map toJson() =>
  {
    idColumn: id,
    jsonColumn: {
      defaultMapLocationCode: defaultMapLocation,
      defaultMapZoomCode: defaultMapZoom,
      tooSoonMessageCode: tooSoonMessage
    }
  };

  static const dynamic DefaultPosition =  {
    "lat": 49.1038023,
    "lng": 17.3947819
  };

  static GlobalSettingsModel DefaultSettings = GlobalSettingsModel(
      id: 1,
      defaultMapLocation: DefaultPosition,
      defaultMapZoom: 17,
      tooSoonMessage: "It's too soon!".tr());
}