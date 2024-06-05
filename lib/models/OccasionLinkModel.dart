import 'package:fstapp/models/OccasionUserModel.dart';

class OccasionLinkModel{
  int? code;
  int? occasionId;
  String? link;
  OccasionUserModel? user;

  bool isAvailable() => code == 200;
  bool isAccessDenied() => code == 403;
  bool isNotFound() => code == 404;

  factory OccasionLinkModel.fromJson(Map<String, dynamic> json) {
    return OccasionLinkModel(
      code: json["code"],
      user: json["occasion_user"]!=null ? OccasionUserModel.fromJson(json["occasion_user"]):null,
      link: json["link"],
      occasionId: json["occasion"],
    );
  }

  OccasionLinkModel({this.code, this.user, this.link, this.occasionId});
}