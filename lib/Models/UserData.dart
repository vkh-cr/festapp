import 'package:av_app/models/PlaceModel.dart';

class UserData {
  final String email;
  final String name;
  final String surname;
  final String sex;
  final String role;
  final String phone;
  final String accommodationType;
  PlaceModel? place;

  static const String idColumn = "id";
  static const String emailColumn = "email";
  static const String nameColumn = "name";
  static const String surnameColumn = "surname";
  static const String sexColumn = "sex";
  static const String accommodationTypeColumn = "accommodation_type";
  static const String phoneColumn = "phone";
  static const String phone2Column = "phone2";
  static const String roleColumn = "role";
  static const String usersTable = "migrated_users";

  UserData(
      {this.email = "",
      required this.name,
      required this.surname,
      required this.sex,
      required this.role,
      required this.phone,
      required this.accommodationType});


  static UserData fromJson(dynamic map) {
    return UserData(
      email: map[emailColumn]!,
      name: map[nameColumn]!,
      surname: map[surnameColumn]!,
      phone: map[phoneColumn]!,
      role: map[roleColumn]!,
      accommodationType: map[accommodationTypeColumn]!,
      sex: map[sexColumn]!,
    );
  }
}
