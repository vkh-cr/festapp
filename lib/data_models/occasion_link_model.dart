import 'package:fstapp/data_models/occasion_model.dart';
import 'package:fstapp/data_models/occasion_user_model.dart';
import 'package:fstapp/data_models/unit_model.dart';
import 'package:fstapp/data_models/user_info_model.dart';

class OccasionLinkModel {
  int? code;
  OccasionModel? occasion;
  UnitModel? unit;
  UserInfoModel? userInfo;
  OccasionUserModel? occasionUser;
  OccasionUserModel? unitUser;
  List<int>? bankAccountsAdmin;
  bool? isAdmin = false;
  String? versionRecommended; // New field for version_recommended

  bool isAvailable() => code == 200;
  bool isAccessDenied() => code == 403;
  bool isNotFound() => code == 404;

  factory OccasionLinkModel.fromJson(Map<String, dynamic> json) {
    var unitUser = json["unit_user"] != null ? OccasionUserModel.fromJson(json["unit_user"]) : null;
    var occasionUser = json["occasion_user"] != null ? OccasionUserModel.fromJson(json["occasion_user"]) : null;
    var userInfo = json["user_info"] != null ? UserInfoModel.fromJson(json["user_info"]) : null;
    return OccasionLinkModel(
      code: json["code"],
      userInfo: userInfo,
      unitUser: unitUser,
      occasionUser: occasionUser,
      bankAccountsAdmin: List<int>.from(json["bank_accounts_admin"]??[]),
      occasion: json["occasion"] != null ? OccasionModel.fromJson(json["occasion"]) : null,
      unit: json["unit"] != null ? UnitModel.fromJson(json["unit"]) : null,
      isAdmin: json["is_admin"],
      versionRecommended: json["version_recommended"],
    );
  }

  OccasionLinkModel({
    this.code,
    this.userInfo,
    this.occasionUser,
    this.unitUser,
    this.bankAccountsAdmin,
    this.occasion,
    this.unit,
    this.isAdmin,
    this.versionRecommended,
  });
}