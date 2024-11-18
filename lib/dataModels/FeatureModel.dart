import 'package:fstapp/dataModels/Tb.dart';

class FeatureModel {
  final String code;
  final bool isEnabled;

  static const String SONGBOOK = "songbook";
  static const String GAME = "game";
  static const String REGISTRATION = "registration";

  FeatureModel({required this.code, required this.isEnabled});

  static FeatureModel fromJson(Map<String, dynamic> json) {
    return FeatureModel(
      code: json[Tb.occasions.data_features_code] as String,
      isEnabled: json[Tb.occasions.data_features_is_enabled] as bool,
    );
  }

  Map<String, dynamic> toJson() => {
    Tb.occasions.data_features_code: code,
    Tb.occasions.data_features_is_enabled: isEnabled,
  };

  static List<String> getAvailableCodes() => [SONGBOOK, GAME, REGISTRATION];
}
