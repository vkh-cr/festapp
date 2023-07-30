import 'package:av_app/models/PlaceModel.dart';
import 'package:av_app/services/ToastHelper.dart';
import 'package:pluto_grid/pluto_grid.dart';

import '../services/DataService.dart';
import 'PlutoAbstract.dart';

class UserInfoModel extends IPlutoRowModel {
  String? id;
  String email;
  String name;
  String surname;
  String sex;
  String role;
  String? phone;
  String? accommodation;
  bool isAdmin = false;
  bool isReceptionAdmin = false;
  PlaceModel? accommodationModel;

  static const String idColumn = "id";
  static const String emailColumn = "email";
  static const String nameColumn = "name";
  static const String surnameColumn = "surname";
  static const String sexColumn = "sex";
  static const String accommodationColumn = "accommodation";
  static const String phoneColumn = "phone";
  static const String roleColumn = "role";
  static const String isReceptionAdminColumn = "is_reception_admin";
  static const String isAdminColumn = "is_admin";

  static const String userInfoTable = "user_info";

  PlaceModel? place;


  static const migrateColumns =
  {
  idColumn:"Id",
  emailColumn:"E-mail",
  nameColumn:"Jméno",
  surnameColumn:"Příjmení",
  sexColumn:"Pohlaví",
  accommodationColumn:"Varianta ubytování",
  phoneColumn:"Telefon",
  roleColumn:"Role",
  };

  UserInfoModel({
    required this.id,
    required this.email,
    required this.name,
    required this.surname,
    required this.sex,
    required this.role,
    required this.isAdmin,
    required this.isReceptionAdmin,
     this.phone,
     this.accommodation});


  static UserInfoModel fromJson(Map<String, dynamic> json) {
    return UserInfoModel(
      id: json[idColumn],
      email: json[emailColumn],
      name: json[nameColumn],
      surname: json[surnameColumn],
      phone: json[phoneColumn],
      role: json[roleColumn],
      accommodation: json[accommodationColumn],
      sex: json[sexColumn],
      isAdmin: json[isAdminColumn]??false,
      isReceptionAdmin: json[isReceptionAdminColumn]??false,
    );
  }

  static UserInfoModel fromPlutoJson(Map<String, dynamic> json) {
    return UserInfoModel(
      id: json[idColumn]?.isEmpty == true ? null : json[idColumn],
      email: json[emailColumn],
      name: json[nameColumn],
      surname: json[surnameColumn],
      phone: json[phoneColumn],
      role: json[roleColumn],
      accommodation: json[accommodationColumn],
      sex: json[sexColumn],
      isAdmin: json[isAdminColumn] == "true" ? true : false,
      isReceptionAdmin: json[isReceptionAdminColumn] == "true" ? true : false,
    );
  }

  @override
  PlutoRow toPlutoRow() {
    return PlutoRow(cells: {
      idColumn: PlutoCell(value: id),
      emailColumn: PlutoCell(value: email),
      nameColumn: PlutoCell(value: name),
      surnameColumn: PlutoCell(value: surname),
      phoneColumn: PlutoCell(value: phone ?? PlaceModel.WithouPlace),
      roleColumn: PlutoCell(value: role),
      accommodationColumn: PlutoCell(
          value: accommodation ?? PlaceModel.WithouPlace),
      sexColumn: PlutoCell(value: sex),
      isAdminColumn: PlutoCell(value: isAdmin.toString()),
      isReceptionAdminColumn: PlutoCell(value: isReceptionAdmin.toString()),

    });
  }

  @override
  Future<void> deleteMethod() async {
    await DataService.deleteUser(id!);
  }

  @override
  Future<void> updateMethod() async {
    if(id == null)
    {
      var newUserId = await DataService.createUser(email);
      id = newUserId;
      ToastHelper.Show("Vytvořen: $email");
    }
    await DataService.updateUser(this);
  }

  @override
  String toBasicString() => email;

  String sexToCzech() => sex == "male" ? "Muž" : "Žena";
}