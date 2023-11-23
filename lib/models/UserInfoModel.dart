import 'package:avapp/models/PlaceModel.dart';
import 'package:avapp/models/UserGroupInfoModel.dart';
import 'package:pluto_grid/pluto_grid.dart';

import '../services/DataService.dart';
import 'PlutoAbstract.dart';

class UserInfoModel extends IPlutoRowModel {
  String? id;
  String? email;
  String? name;
  String? surname;
  String? sex;
  String? role;
  String? phone;
  String? accommodation;
  bool? isAdmin = false;
  bool? isEditor = false;
  PlaceModel? accommodationModel;
  UserGroupInfoModel? userGroup;

  static const String idColumn = "id";
  static const String emailReadonlyColumn = "email_readonly";
  static const String nameColumn = "name";
  static const String surnameColumn = "surname";
  static const String sexColumn = "sex";
  static const String accommodationColumn = "accommodation";
  static const String phoneColumn = "phone";
  static const String roleColumn = "role";
  static const String isEditorReadOnlyColumn = "is_editor_readonly";
  static const String isAdminReadOnlyColumn = "is_admin_readonly";

  static const String userInfoTable = "user_info";
  static const String userInfoPublicTable = "user_info_public";

  PlaceModel? place;


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
     this.role,
     this.isAdmin,
     this.isEditor,
     this.phone,
     this.accommodation});


  static UserInfoModel fromJson(Map<String, dynamic> json) {
    return UserInfoModel(
      id: json[idColumn],
      //todo remove backward compatibility
      email: json[emailReadonlyColumn]??json["email"],
      name: json[nameColumn],
      surname: json[surnameColumn],
      phone: json[phoneColumn],
      role: json[roleColumn],
      accommodation: json[accommodationColumn],
      sex: json[sexColumn],
      //todo remove backward compatibility
      isAdmin: json[isAdminReadOnlyColumn]??json["is_admin"]??false,
      isEditor: json[isEditorReadOnlyColumn]??json["is_reception_admin"]??false,
    );
  }

  static UserInfoModel fromPlutoJson(Map<String, dynamic> json) {
    return UserInfoModel(
      id: json[idColumn]?.isEmpty == true ? null : json[idColumn],
      email: json[emailReadonlyColumn].toString().trim(),
      name: json[nameColumn].toString().trim(),
      surname: json[surnameColumn].toString().trim(),
      phone: json[phoneColumn].toString().trim(),
      role: json[roleColumn].toString().trim(),
      accommodation: json[accommodationColumn],
      sex: json[sexColumn],
      isAdmin: json[isAdminReadOnlyColumn] == "true" ? true : false,
      isEditor: json[isEditorReadOnlyColumn] == "true" ? true : false,
    );
  }

  @override
  PlutoRow toPlutoRow() {
    return PlutoRow(cells: {
      idColumn: PlutoCell(value: id),
      emailReadonlyColumn: PlutoCell(value: email),
      nameColumn: PlutoCell(value: name),
      surnameColumn: PlutoCell(value: surname),
      phoneColumn: PlutoCell(value: phone ?? PlaceModel.WithouValue),
      roleColumn: PlutoCell(value: role),
      accommodationColumn: PlutoCell(
          value: accommodation ?? PlaceModel.WithouValue),
      sexColumn: PlutoCell(value: sex),
      isAdminReadOnlyColumn: PlutoCell(value: isAdmin.toString()),
      isEditorReadOnlyColumn: PlutoCell(value: isEditor.toString()),
    });
  }

  @override
  Future<void> deleteMethod() async {
    await DataService.deleteUser(id!);
  }

  @override
  Future<void> updateMethod() async {
    await DataService.updateUser(this);
  }

  @override
  String toBasicString() => email??"";

  @override
  String toString() => toFullNameString();

  String toFullNameString() => "$name $surname";

  String shortNameToString() {
    return "$name ${(surname!=null && surname!.isNotEmpty) ? "${surname![0]}." : "-"}";
  }

  bool isSignedIn = false;


  String sexToCzech() => sex == "male" ? "Muž" : "Žena";

  bool importedEquals(UserInfoModel u) {
    return 
        u.email == email
        && u.name == name 
        && u.surname == surname 
        && u.accommodation == accommodation
        && u.role == role
        && u.phone == phone
        && u.sex == sex;
  }

  @override
  int get hashCode {
    return id.hashCode;
  }

  @override bool operator ==(Object other) {
    if(other is UserInfoModel)
    {
      return id == other.id;
    }
    return false;
  }
}