class GlobalSettingsModel {
  int? id;
  dynamic defaultMapLocation;
  double defaultMapZoom;

  static const String idColumn = "id";
  static const String jsonColumn = "json";

  static const String defaultMapLocationCode = "defaultMapLocation";
  static const String defaultMapZoomCode = "defaultMapZoom";
  static const String globalSettingsTable = "global_settings";

  GlobalSettingsModel({
    this.id,
    this.defaultMapLocation,
    required this.defaultMapZoom
  });

  static GlobalSettingsModel fromJson(Map<String, dynamic> json) {
    return GlobalSettingsModel(
      id: json[idColumn],
      defaultMapLocation: json[jsonColumn][defaultMapLocationCode],
      defaultMapZoom: json[jsonColumn][defaultMapZoomCode]
    );
  }

  Map toJson() =>
  {
    idColumn: id,
    jsonColumn: {
      defaultMapLocationCode: defaultMapLocation,
      defaultMapZoomCode: defaultMapZoom
    }
  };

  static const dynamic DefaultPosition =  {
    "lat": 49.1038023,
    "lng": 17.3947819
  };

  static GlobalSettingsModel DefaultSettings = GlobalSettingsModel(
      id: 1,
      defaultMapLocation: DefaultPosition,
      defaultMapZoom: 17);
}