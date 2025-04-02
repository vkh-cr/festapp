import 'package:fstapp/components/single_data_grid/i_has_id.dart';
import 'package:fstapp/dataModels/CompanionModel.dart';
import 'package:fstapp/dataModels/InformationModel.dart';
import 'package:fstapp/dataModels/OccasionUserModel.dart';
import 'package:fstapp/dataModels/PlaceModel.dart';
import 'package:fstapp/dataModels/Tb.dart';
import 'package:fstapp/dataModels/UnitModel.dart';
import 'package:fstapp/dataModels/UserGroupInfoModel.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:collection/collection.dart';
import 'package:intl/intl.dart';

class UserInfoModel extends IHasId {
  String? id;
  String? email;
  String? name;
  String? surname;
  String? sex;
  String? role;
  String? phone;
  DateTime? birthDate;
  bool? isAdmin = false;
  bool? isEditor = false;
  PlaceModel? accommodationPlace;
  List<UserGroupInfoModel>? userGroups;
  List<UnitModel>? units;

  UserGroupInfoModel? eventUserGroup;
  OccasionUserModel? occasionUser;
  String? roleString;
  List<CompanionModel>? companions = [];
  UserInfoModel? companionParent;
  List<String>? eventIds;

  static const String idColumn = "id";
  static const String emailReadonlyColumn = "email_readonly";
  static const String nameColumn = "name";
  static const String surnameColumn = "surname";
  static const String sexColumn = "sex";
  static const String phoneColumn = "phone";
  static const String roleColumn = "role";
  static const String birthDateColumn = "birth_date";
  static const String placeColumn = "placeColumn";
  static const String userGroupColumn = "userGroup";
  static const String occasionUserColumn = "occasionUser";
  static const String roleStringColumn = "roleString";
  static const String userCompanionsColumn = "userCompanions";
  static const String companionParentColumn = "companion_parent";
  static const String unitsField = "units";

  static const String scheduleColumn = "schedule";

  static const String userInfoOffline = "user_info";

  static const String birthDateJsonFormat = "yyyy-MM-dd";

  static const sexes = ["male", "female", ""];

  UserInfoModel({
     this.id,
     this.email,
     this.name,
     this.surname,
     this.sex,
     this.birthDate,
     this.role,
     this.isAdmin,
     this.isEditor,
     this.phone,
     this.accommodationPlace,
     this.eventUserGroup,
     this.occasionUser,
     this.roleString,
     this.companions,
     this.companionParent,
     this.units,
     this.eventIds,
     this.userGroups,
  });  

  static UserInfoModel fromJson(Map<String, dynamic> json) {
    return UserInfoModel(
      id: json[idColumn],
      //todo remove backward compatibility
      email: json[emailReadonlyColumn]??json[Tb.user_info.data]?[Tb.occasion_users.data_email]??json["email"],
      name: json[nameColumn],
      surname: json[surnameColumn],
      accommodationPlace: json[placeColumn]!=null?PlaceModel.fromJson(json[placeColumn]):null,
      eventUserGroup: json[userGroupColumn]!=null?UserGroupInfoModel.fromJson(json[userGroupColumn]):null,
      occasionUser: json[occasionUserColumn]!=null?OccasionUserModel.fromJson(json[occasionUserColumn]):null,
      roleString: json[roleStringColumn],
      companions: json[userCompanionsColumn] != null ? List<CompanionModel>.from(json[userCompanionsColumn]!.map((c)=>CompanionModel.fromJson(c))) : null,
      companionParent: json[companionParentColumn] != null ? UserInfoModel.fromJson(json[companionParentColumn]):null,
      units: json[unitsField] != null ? List<UnitModel>.from(json[unitsField].map((u)=>UnitModel.fromJson(u))) : null,
      eventIds: json[scheduleColumn] != null ? List<String>.from(json[scheduleColumn]!.map((s)=>s)) : null,
      sex: json[sexColumn],
      //todo remove
      birthDate: (json.containsKey(birthDateColumn) && json[birthDateColumn]!=null) ? DateTime.parse(json[birthDateColumn]) : DateTime.fromMicrosecondsSinceEpoch(0),
    );
  }

  Map toJson() =>
  {
    idColumn: id,
    emailReadonlyColumn: email,
    nameColumn: name,
    surnameColumn: surname,
    phoneColumn: phone,
    roleColumn: role,
    placeColumn: accommodationPlace?.toJson(),
    userGroupColumn: eventUserGroup?.toJson(),
    occasionUserColumn: occasionUser?.toUpdateJson(),
    roleStringColumn: roleString,
    sexColumn: sex,
    birthDateColumn: DateFormat(birthDateJsonFormat).format(birthDate??DateTime.fromMicrosecondsSinceEpoch(0)),
    userCompanionsColumn: companions != null ? List<dynamic>.from(companions!.map((c)=>c.toJson())) : null,
  };

  @override
  String toString() => toFullNameString();

  String toFullNameString() {
    if(companionParent!=null){
      return (name??"") + (" (${"Companion of".tr()}: ${companionParent!.toFullNameString()})");
    }
    return "${name??""} ${surname??""}".trim();
  }

  String shortNameToString() {
    return "$name ${(surname!=null && surname!.isNotEmpty) ? "${surname![0]}." : "-"}";
  }

  bool hasGroup() => eventUserGroup != null;

  UserGroupInfoModel? get getGameUserGroup => userGroups?.firstWhereOrNull((g)=>g.type == InformationModel.gameType);

  bool isSignedIn = false;

  List<UnitModel> getUnitsWithEditorAccess() {
    return units?.where((u)=>u.unitUser?.isEditorView == true).toList() ?? [];
  }

  static String sexToLocale(String? sx) {
    if (sx == "female") {
      return "Female".tr();
    } else if (sx == "male") {
      return "Male".tr();
    }

    return "Not specified".tr();
  }

  @override
  int get hashCode {
    return id.hashCode;
  }

  @override bool operator ==(Object other) {
    if(other is UserInfoModel)
    {
      if(id==null && other.id==null)
      {
        return false;
      }
      return id == other.id;
    }
    return false;
  }

  String getGenderPrefix() {
    return sex == "female" ? "F":"M";
  }
}