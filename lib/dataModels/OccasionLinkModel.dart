import 'package:fstapp/dataModels/OccasionUserModel.dart';

class OccasionLinkModel{
  int? code;
  int? occasionId;
  String? link;
  OccasionUserModel? user;
  bool? isAdmin = false;

  bool isAvailable() => code == 200;
  bool isAccessDenied() => code == 403;
  bool isNotFound() => code == 404;

  factory OccasionLinkModel.fromJson(Map<String, dynamic> json) {
    return OccasionLinkModel(
      code: json["code"],
      user: json["occasion_user"]!=null ? OccasionUserModel.fromJson(json["occasion_user"]):null,
      link: json["link"],
      occasionId: json["occasion"],
      isAdmin: json["is_admin"]
    );
  }

  OccasionLinkModel({this.code, this.user, this.link, this.occasionId, this.isAdmin});
}