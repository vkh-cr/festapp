class UserData {
  final String email;
  final String name;
  final String sex;
  final String role;
  final String phone;
  final String accommodation_type;

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
      required this.sex,
      required this.role,
      required this.phone,
      required this.accommodation_type});

  static UserData fromJson(Map<String, dynamic> map) {
    if (map.containsKey(idColumn)) {
      return UserData(
        email: map[emailColumn]!,
        name: map[nameColumn]!,
        phone: map[phoneColumn]!,
        role: map[roleColumn]!,
        accommodation_type: map[accommodationTypeColumn]!,
        sex: map[sexColumn]!,
      );
    }
    return UserData(
      email: map[emailColumn]!,
      name: map[nameColumn]!,
      phone: map[phoneColumn]!,
      role: map[roleColumn]!,
      accommodation_type: map[accommodationTypeColumn]!,
      sex: map[sexColumn]!,
    );
  }

  static UserData fromDynamic(dynamic map) {
    return UserData(
      email: map[emailColumn]!,
      name: map[nameColumn]!,
      phone: map[phoneColumn]!,
      role: map[roleColumn]!,
      accommodation_type: map[accommodationTypeColumn]!,
      sex: map[sexColumn]!,
    );
  }
}
