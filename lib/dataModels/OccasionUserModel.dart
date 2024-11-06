import 'package:collection/collection.dart';
import 'package:fstapp/dataServices/DbOccasions.dart';
import 'package:fstapp/dataServices/DbUsers.dart';
import 'package:fstapp/dataServices/RightsService.dart';
import 'package:fstapp/components/dataGrid/PlutoAbstract.dart';
import 'package:fstapp/dataModels/Tb.dart';
import 'package:intl/intl.dart';
import 'package:pluto_grid_plus/pluto_grid_plus.dart';

class OccasionUserModel extends IPlutoRowModel {

  static const String birthDateJsonFormat = "yyyy-MM-dd";

  DateTime? createdAt;
  int? occasion;
  String? user;
  int? role;

  bool? isEditor = false;
  bool? isManager = false;
  bool? isApprover = false;
  bool? isApproved = false;

  Map<String, dynamic>? data;
  Map<String, dynamic>? services;
  OccasionUserModel({this.createdAt, this.occasion, this.user, this.data, this.role,
     this.isEditor, this.isManager, this.isApprover, this.isApproved, this.services});

  factory OccasionUserModel.fromJson(Map<String, dynamic> json) {
    return OccasionUserModel(
        createdAt: json[Tb.occasion_users.created_at]!=null ? DateTime.parse(json[Tb.occasion_users.created_at]):null,
        occasion: json[Tb.occasion_users.occasion],
        user: json[Tb.occasion_users.user],
        isEditor: json[Tb.occasion_users.is_editor],
        isApprover: json[Tb.occasion_users.is_approver],
        isApproved: json[Tb.occasion_users.is_approved],
        isManager: json[Tb.occasion_users.is_manager],
        role: json[Tb.occasion_users.role],
        data: json[Tb.occasion_users.data],
        services: json[Tb.occasion_users.services]
    );
  }

  dynamic toUpdateJson() =>
  {
    Tb.occasion_users.occasion: RightsService.currentOccasion,
    Tb.occasion_users.user: user,
    Tb.occasion_users.is_editor: isEditor??false,
    Tb.occasion_users.is_approver: isApprover??false,
    Tb.occasion_users.is_approved: isApproved??false,
    Tb.occasion_users.is_manager: isManager??false,
    Tb.occasion_users.role: role,
    Tb.occasion_users.data: data,
    Tb.occasion_users.services: services,
  };

  factory OccasionUserModel.fromImportedJson(Map<String, dynamic> json) {
    return OccasionUserModel(
        occasion: RightsService.currentOccasion!,
        user: json[Tb.occasion_users.user],
        role: json[Tb.occasion_users.role],
        data: {
          Tb.occasion_users.data_email: json[Tb.user_info.email_readonly],
          Tb.occasion_users.data_name: json[Tb.user_info.name],
          Tb.occasion_users.data_surname: json[Tb.user_info.surname],
          Tb.occasion_users.data_phone: json[Tb.occasion_users.data_phone],
          Tb.occasion_users.data_text1: json[Tb.occasion_users.data_text1],
          Tb.occasion_users.data_text2: json[Tb.occasion_users.data_text2],
          Tb.occasion_users.data_text2: json[Tb.occasion_users.data_text2],
          Tb.occasion_users.data_text3: json[Tb.occasion_users.data_text3],
          Tb.occasion_users.data_text4: json[Tb.occasion_users.data_text4],
          Tb.occasion_users.data_birthDate: json[Tb.occasion_users.data_birthDate],
          Tb.occasion_users.data_note: json[Tb.occasion_users.data_note],
          Tb.occasion_users.data_diet: json[Tb.occasion_users.data_diet],
        },
        services: json[Tb.occasion_users.services]
    );
  }

  Map<String, dynamic> convertDateTime(Map<String, dynamic> map) {
    map.forEach((key, value) {
      if (value is DateTime) {
        map[key] = value.toIso8601String();  // Convert DateTime to ISO 8601 string format
      } else if (value is Map<String, dynamic>) {
        map[key] = convertDateTime(value);  // Recursively convert nested maps
      }
    });
    return map;
  }

  Map<String, dynamic> toImportedUpdateJson() {
    return convertDateTime({
      Tb.occasion_users.occasion: occasion,
      Tb.occasion_users.user: user,
      Tb.occasion_users.role: role,
      Tb.occasion_users.data: data,
      Tb.occasion_users.services: services,
    });
  }


  @override
  Future<void> deleteMethod() async {
    await DbUsers.deleteUser(user!, occasion!);
  }

  @override
  String toBasicString() => data?[Tb.occasion_users.data_email]??"";

  @override
  PlutoRow toPlutoRow() {
    Map<String, PlutoCell> foodServices = {};
    for(var f in services?[DbOccasions.serviceTypeFood]?.entries??[]){
      foodServices[DbOccasions.serviceTypeFood+f.key] = PlutoCell(value: f.value);
    }
    Map<String, PlutoCell> json = {};
    json.addAll(foodServices);

    json.addAll({
      Tb.occasion_users.user: PlutoCell(value: user),
      Tb.occasion_users.is_editor: PlutoCell(value: isEditor.toString()),
      Tb.occasion_users.is_manager: PlutoCell(value: isManager.toString()),
      Tb.occasion_users.is_approved: PlutoCell(value: isApproved.toString()),
      Tb.occasion_users.is_approver: PlutoCell(value: isApprover.toString()),
      Tb.occasion_users.role: PlutoCell(value: role?.toString() ?? ""),
      Tb.occasion_users.data_email: PlutoCell(value: data?[Tb.occasion_users.data_email] ?? ""),
      Tb.occasion_users.data_name: PlutoCell(value: data?[Tb.occasion_users.data_name] ?? ""),
      Tb.occasion_users.data_surname: PlutoCell(value: data?[Tb.occasion_users.data_surname] ?? ""),
      Tb.occasion_users.data_sex: PlutoCell(value: data?[Tb.occasion_users.data_sex]),
      Tb.occasion_users.data_phone: PlutoCell(value: data?[Tb.occasion_users.data_phone] ?? ""),
      Tb.occasion_users.data_accommodation: PlutoCell(value: data?[Tb.occasion_users.data_accommodation] ?? ""),
      Tb.occasion_users.data_birthDate: PlutoCell(value: DateTime.tryParse(data?[Tb.occasion_users.data_birthDate]??"")??DateTime.fromMicrosecondsSinceEpoch(0)),
      Tb.occasion_users.data_isInvited: PlutoCell(value: data?[Tb.occasion_users.data_isInvited].toString()),
      Tb.occasion_users.data_note: PlutoCell(value: data?[Tb.occasion_users.data_note] ?? ""),
      Tb.occasion_users.data_diet: PlutoCell(value: data?[Tb.occasion_users.data_diet] ?? ""),
      Tb.occasion_users.data_text1: PlutoCell(value: data?[Tb.occasion_users.data_text1] ?? ""),
      Tb.occasion_users.data_text2: PlutoCell(value: data?[Tb.occasion_users.data_text2] ?? ""),
      Tb.occasion_users.data_text3: PlutoCell(value: data?[Tb.occasion_users.data_text3] ?? ""),
      Tb.occasion_users.data_text4: PlutoCell(value: data?[Tb.occasion_users.data_text4] ?? ""),
    });

    return PlutoRow(cells: json);
  }

  static OccasionUserModel fromPlutoJson(Map<String, dynamic> json) {
    DateTime? bd;
    var jsonTime = json[Tb.occasion_users.data_birthDate];
    if (jsonTime!=null && jsonTime is String){
      var birthDateString = json[Tb.occasion_users.data_birthDate];
      var dateFormat = DateFormat(birthDateJsonFormat);
      bd = dateFormat.parse(birthDateString);
    }
    else{
      bd = jsonTime;
    }

    Map<String, dynamic> services = {};
    for(var f in json.entries){
      if(f.key.startsWith(DbOccasions.serviceTypeFood)) {
        var code = f.key.substring(DbOccasions.serviceTypeFood.length);
        if(services[DbOccasions.serviceTypeFood] == null){
          services[DbOccasions.serviceTypeFood] = {};
        }
        services[DbOccasions.serviceTypeFood][code] = f.value;
      }
    }

    return OccasionUserModel(
      occasion: RightsService.currentOccasion,
      user: json[Tb.occasion_users.user]?.isEmpty == true ? null : json[Tb.occasion_users.user],
      isApprover: json[Tb.occasion_users.is_approver] == "true" ? true : false,
      isApproved: json[Tb.occasion_users.is_approved] == "true" ? true : false,
      isManager: json[Tb.occasion_users.is_manager] == "true" ? true : false,
      isEditor: json[Tb.occasion_users.is_editor] == "true" ? true : false,
      role: int.tryParse(json[Tb.occasion_users.role]),
      services: services,
      data: {
        Tb.occasion_users.data_name: json[Tb.occasion_users.data_name]?.trim(),
        Tb.occasion_users.data_surname: json[Tb.occasion_users.data_surname]?.trim(),
        Tb.occasion_users.data_sex: json[Tb.occasion_users.data_sex]?.trim(),

        Tb.occasion_users.data_email: json[Tb.occasion_users.data_email]?.trim(),
        Tb.occasion_users.data_phone: json[Tb.occasion_users.data_phone]?.trim(),
        Tb.occasion_users.data_accommodation: json[Tb.occasion_users.data_accommodation]?.trim(),
        Tb.occasion_users.data_birthDate: bd?.toIso8601String(),
        Tb.occasion_users.data_isInvited: json[Tb.occasion_users.data_isInvited] == "true" ? true : false,
        Tb.occasion_users.data_note: json[Tb.occasion_users.data_note]?.trim(),
        Tb.occasion_users.data_diet: json[Tb.occasion_users.data_diet]?.trim(),
        Tb.occasion_users.data_text1: json[Tb.occasion_users.data_text1]?.trim(),
        Tb.occasion_users.data_text2: json[Tb.occasion_users.data_text2]?.trim(),
        Tb.occasion_users.data_text3: json[Tb.occasion_users.data_text3]?.trim(),
        Tb.occasion_users.data_text4: json[Tb.occasion_users.data_text4]?.trim(),
      },
    );
  }

  @override
  Future<void> updateMethod() async {
    await DbUsers.updateOccasionUser(this);
  }

  bool compareStrings(String? str1, String? str2) {
    bool isEmptyOrNull(String? str) => str == null || str.trim().isEmpty;
    if (isEmptyOrNull(str1) && isEmptyOrNull(str2)) {
      return true;
    }
    return str1 == str2;
  }

  bool compareField(Map<String, dynamic> u, dynamic dataField, dynamic uField) {
    return compareStrings(u[uField], data?[dataField]);
  }

  bool importedEquals(Map<String, dynamic> iu) {
    return compareField(iu, Tb.occasion_users.data_email, Tb.user_info.email_readonly)
        && compareField(iu, Tb.occasion_users.data_name, Tb.user_info.name)
        && compareField(iu, Tb.occasion_users.data_surname, Tb.user_info.surname)
        && compareField(iu, Tb.occasion_users.data_accommodation, Tb.user_info.accommodation)
        && iu[Tb.user_info.role] == role
        && compareField(iu, Tb.occasion_users.data_phone, Tb.occasion_users.data_phone)
        && compareField(iu, Tb.occasion_users.data_text1, Tb.occasion_users.data_text1)
        && compareField(iu, Tb.occasion_users.data_text2, Tb.occasion_users.data_text2)
        && compareField(iu, Tb.occasion_users.data_text3, Tb.occasion_users.data_text3)
        && compareField(iu, Tb.occasion_users.data_text4, Tb.occasion_users.data_text4)
        && compareField(iu, Tb.occasion_users.data_diet, Tb.occasion_users.data_diet)
        && compareField(iu, Tb.occasion_users.data_note, Tb.occasion_users.data_note)
        && compareServicesJson(iu[Tb.occasion_users.services], services)
        && iu[Tb.occasion_users.data_birthDate] == data?[Tb.occasion_users.data_birthDate];

    // Uncomment and adjust for additional fields
    // && (u[Tb.user_info.sex].toString().trim().toLowerCase().startsWith("m") ? "male" : "female") == data?[Tb.occasion_users.data_sex];
  }

  static bool compareJson(Map<String, dynamic>? json1, Map<String, dynamic>? json2) {
    if (json1 == null && json2 == null) return true;
    if (json1 == null || json2 == null) return false;

    // Use DeepCollectionEquality to perform a deep comparison for non-null maps
    final deepEquality = const DeepCollectionEquality().equals;
    return deepEquality(json1, json2);
  }

  static bool compareServicesJson(Map<String, dynamic>? json1, Map<String, dynamic>? json2) {
    if (json1 == null && json2 == null) return true;
    if (json1 == null || json2 == null) return false;

    // Expect specific structure with a "serviceTypeFood" key
    if (!(json1.containsKey(DbOccasions.serviceTypeFood) && json2.containsKey(DbOccasions.serviceTypeFood))) return false;

    Map<String, dynamic> food1 = json1[DbOccasions.serviceTypeFood];
    Map<String, dynamic> food2 = json2[DbOccasions.serviceTypeFood];

    // Compare the contents of the "serviceTypeFood" maps
    for (var key in food1.keys) {
      var value1 = food1[key];
      var value2 = food2[key];

      // Check if value is "serviceNone" in one JSON and something else in the other
      if ((value1 == DbOccasions.serviceNone && value2 != DbOccasions.serviceNone) || (value2 == DbOccasions.serviceNone && value1 != DbOccasions.serviceNone)) {
        return false;
      }

      // Regular value comparison
      if (value1 != value2) {
        return false;
      }
    }

    // Ensure all keys in food2 are also in food1
    for (var key in food2.keys) {
      if (!food1.containsKey(key)) {
        return false;
      }
    }

    return true;
  }
}