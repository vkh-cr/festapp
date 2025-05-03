class PlatformModel {
  String? link;
  String? prompt;
  String? platform;

  PlatformModel({
    this.link,
    this.prompt,
    this.platform,
  });

  factory PlatformModel.fromJson(Map<String, dynamic> json) => PlatformModel(
    link: json['link'] as String?,
    prompt: json['prompt'] as String?,
    platform: json['platform'] as String?,
  );

  Map<String, dynamic> toJson() => {
    'link': link,
    'prompt': prompt,
    'platform': platform,
  };
}

class OrganizationModel {
  String? title;
  String? appName;
  List<PlatformModel>? platforms;
  bool? isRegistrationEnabled;

  OrganizationModel({
    this.title,
    this.appName,
    this.platforms,
    this.isRegistrationEnabled,
  });

  factory OrganizationModel.fromJson(Map<String, dynamic> json) {
    return OrganizationModel(
      title: json['title'] as String?,
      appName: json['APP_NAME'] as String?,
      platforms: json['PLATFORMS'] is List
          ? List<PlatformModel>.from(
          (json['PLATFORMS'] as List)
              .map((x) => PlatformModel.fromJson(x as Map<String, dynamic>)))
          : [],
      isRegistrationEnabled: json['IS_REGISTRATION_ENABLED'] as bool?,
    );
  }

  Map<String, dynamic> toJson() => {
    'title': title,
    'APP_NAME': appName,
    'PLATFORMS': platforms?.map((p) => p.toJson()).toList(),
    'IS_REGISTRATION_ENABLED': isRegistrationEnabled,
  };
}
