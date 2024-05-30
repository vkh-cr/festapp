import 'package:fstapp/models/OccasionUserModel.dart';
import 'package:fstapp/models/PlaceModel.dart';
import 'package:fstapp/models/Tb.dart';
import 'package:fstapp/models/UserGroupInfoModel.dart';
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

  static const String isEditorReadOnlyColumn = "is_editor_readonly";
  static const String isAdminReadOnlyColumn = "is_admin_readonly";

  static const String userInfoTable = "user_info";
  static const String userInfoPublicTable = "user_info_public";
  static const String userInfoOffline = "user_info";

  static const String birthDateJsonFormat = "yyyy-MM-dd";


  static const sexes = ["male", "female"];

  static const migrateColumns =
  {
  idColumn:"Id",
  emailReadonlyColumn:"E-mail",
  nameColumn:"Jméno",
  surnameColumn:"Příjmení",
  sexColumn:"Pohlaví",
  accommodationColumn:"Varianta ubytování",
  phoneColumn:"Telefon",
  roleColumn:"Role",
  };

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
     this.roleString});

  static UserInfoModel fromJson(Map<String, dynamic> json) {
    return UserInfoModel(
      id: json[idColumn],
      //todo remove backward compatibility
      email: json[Tb.user_info.data]?[Tb.occasion_users.data_email]??json[emailReadonlyColumn]??json["email"],
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
      sex: json[sexColumn],
      //todo remove
      birthDate: (json.containsKey(birthDateColumn) && json[birthDateColumn]!=null) ? DateTime.parse(json[birthDateColumn]) : DateTime.fromMicrosecondsSinceEpoch(0),
      //todo remove backward compatibility
      isAdmin: json[isAdminReadOnlyColumn]??json["is_admin"],
      //todo remove backward compatibility
      isEditor: json[isEditorReadOnlyColumn]??json["is_reception_admin"],
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
    isAdminReadOnlyColumn: isAdmin,
    isEditorReadOnlyColumn: isEditor,
    Tb.user_info.data: {Tb.occasion_users.data_email: email}
  };

  @override
  String toString() => toFullNameString();

  String toFullNameString() => "${name??""} ${surname??""}".trim();

  String shortNameToString() {
    return "$name ${(surname!=null && surname!.isNotEmpty) ? "${surname![0]}." : "-"}";
  }

  bool hasGroup() => userGroup != null;

  bool isSignedIn = false;


  static String sexToLocale(String? sx) => sx == "male" ? "Male".tr() : "Female".tr();

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