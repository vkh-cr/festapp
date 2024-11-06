import 'package:fstapp/dataModels/CompanionModel.dart';
import 'package:fstapp/dataModels/OccasionUserModel.dart';
import 'package:fstapp/dataModels/PlaceModel.dart';
import 'package:fstapp/dataModels/Tb.dart';
import 'package:fstapp/dataModels/UserGroupInfoModel.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:intl/intl.dart';

class UserInfoModel {
  String? id;
  String? email;
  String? name;
  String? surname;
  String? sex;
  String? role;
  String? phone;
  String? accommodation;
  DateTime? birthDate;
  bool? isAdmin = false;
  bool? isEditor = false;
  PlaceModel? accommodationPlace;
  UserGroupInfoModel? userGroup;
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
  static const String accommodationColumn = "accommodation";
  static const String phoneColumn = "phone";
  static const String roleColumn = "role";
  static const String birthDateColumn = "birth_date";
  static const String placeColumn = "placeColumn";
  static const String userGroupColumn = "userGroup";
  static const String occasionUserColumn = "occasionUser";
  static const String roleStringColumn = "roleString";
  static const String userCompanionsColumn = "userCompanions";
  static const String companionParentColumn = "companion_parent";
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
     this.accommodation,
     this.accommodationPlace,
     this.userGroup,
     this.occasionUser,
     this.roleString,
     this.companions,
     this.companionParent,
     this.eventIds,
  });  

  static UserInfoModel fromJson(Map<String, dynamic> json) {
    return UserInfoModel(
      id: json[idColumn],
      //todo remove backward compatibility
      email: json[emailReadonlyColumn]??json[Tb.user_info.data]?[Tb.occasion_users.data_email]??json["email"],
      name: json[nameColumn],
      surname: json[surnameColumn],
      //todo remove
      phone: json[phoneColumn],
      //todo remove
      role: json[roleColumn],
      //todo remove
      accommodation: json[accommodationColumn],
      accommodationPlace: json[placeColumn]!=null?PlaceModel.fromJson(json[placeColumn]):null,
      userGroup: json[userGroupColumn]!=null?UserGroupInfoModel.fromJson(json[userGroupColumn]):null,
      occasionUser: json[occasionUserColumn]!=null?OccasionUserModel.fromJson(json[occasionUserColumn]):null,
      roleString: json[roleStringColumn],
      companions: json[userCompanionsColumn] != null ? List<CompanionModel>.from(json[userCompanionsColumn]!.map((c)=>CompanionModel.fromJson(c))) : null,
      companionParent: json[companionParentColumn] != null ? UserInfoModel.fromJson(json[companionParentColumn]):null,
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
    userGroupColumn: userGroup?.toJson(),
    occasionUserColumn: occasionUser?.toUpdateJson(),
    roleStringColumn: roleString,
    sexColumn: sex,
    birthDateColumn: DateFormat(birthDateJsonFormat).format(birthDate??DateTime.fromMicrosecondsSinceEpoch(0)),
    userCompanionsColumn: companions != null ? List<dynamic>.from(companions!.map((c)=>c.toJson())) : null,
    Tb.user_info.data: {Tb.occasion_users.data_email: email}
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

  bool hasGroup() => userGroup != null;

  bool isSignedIn = false;


  static String sexToLocale(String? sx) {
    if (sx == "female") {
      return "Female".tr();
    } else if (sx == "male") {
      return "Male".tr();
    }

    return "Not specified".tr();
  }
  bool importedEquals(Map<String, dynamic> u) {
    return 
        u[emailReadonlyColumn].toString().trim().toLowerCase() == email
        && u[nameColumn].toString().trim() == name
        && u[surnameColumn].toString().trim() == surname
        && u[accommodationColumn].toString().trim() == accommodation
        && u[roleColumn].toString().trim() == role
        && u[phoneColumn].toString().trim() == phone
        //todo fix
        //&& ((u.containsKey(birthDateColumn) && u[birthDateColumn] != null) ? DateTime.parse(u[birthDateColumn]):null) == birthDate
        && (u[sexColumn].toString().trim().toLowerCase().startsWith("m") ? "male" : "female") == sex;
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