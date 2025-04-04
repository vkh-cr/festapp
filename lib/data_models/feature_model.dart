import 'package:fstapp/data_models/tb.dart';

class FeatureModel {
  final String code;
  final bool isEnabled;

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
}
