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

  factory OccasionUserModel.fromImportedJson(Map<String, dynamic> json, [OccasionUserModel? original]) {
    return OccasionUserModel(
        occasion: RightsService.currentOccasion!,
        user: json[Tb.occasion_users.user],
        role: json[Tb.occasion_users.role],
        data: {
          Tb.occasion_users.data_email: json[Tb.occasion_users.data_email],
          Tb.occasion_users.data_name: json[Tb.occasion_users.data_name],
          Tb.occasion_users.data_surname: json[Tb.occasion_users.data_surname],
          Tb.occasion_users.data_phone: json[Tb.occasion_users.data_phone],
          Tb.occasion_users.data_text1: json[Tb.occasion_users.data_text1],
          Tb.occasion_users.data_text2: json[Tb.occasion_users.data_text2],
          Tb.occasion_users.data_text2: json[Tb.occasion_users.data_text2],
          Tb.occasion_users.data_text3: json[Tb.occasion_users.data_text3],
          Tb.occasion_users.data_text4: json[Tb.occasion_users.data_text4],
          Tb.occasion_users.data_birthDate: json[Tb.occasion_users.data_birthDate],
          Tb.occasion_users.data_note: json[Tb.occasion_users.data_note],
          Tb.occasion_users.data_diet: json[Tb.occasion_users.data_diet],
          Tb.occasion_users.data_isInvited: original?.data?[Tb.occasion_users.data_isInvited],
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
    return {
      Tb.occasion_users.occasion: occasion,
      Tb.occasion_users.user: user,
      Tb.occasion_users.role: role,
      Tb.occasion_users.data: data,
      Tb.occasion_users.services: services,
    };
  }

  Map<String, PlutoCell> serviceToOneColumnPlutoRow(Map<String, dynamic>? services, String serviceType) {
    Map<String, PlutoCell> serviceCells = {};
    for (var entry in services?[serviceType]?.entries ?? []) {
      serviceCells[serviceType + entry.key] = PlutoCell(value: entry.value);
    }
    return serviceCells;
  }

  Map<String, PlutoCell> servicesToOneColumnPlutoRow(Map<String, dynamic>? services, String serviceType) {
    PlutoCell cell = PlutoCell(value: "");
    var emptyResult =  { serviceType : cell };

    if(services?[serviceType] == null) {
      return emptyResult;
    }
    var value = services?[serviceType]?.entries;
    if(value.isEmpty){
      return emptyResult;
    }
    var first = value.first.key;
    cell = PlutoCell(value: first);
    return { serviceType : cell };
  }

  Map<String, PlutoCell> servicesToPlutoRow(Map<String, dynamic>? services, String serviceType) {
    Map<String, PlutoCell> serviceCells = {};
    for (var entry in services?[serviceType]?.entries ?? []) {
      serviceCells[serviceType + entry.key] = PlutoCell(value: entry.value);
    }
    return serviceCells;
  }


  @override
  Future<void> deleteMethod() async {
    await DbUsers.deleteUser(user!, occasion!);
  }

  @override
  String toBasicString() => data?[Tb.occasion_users.data_email]??"";

  @override
  PlutoRow toPlutoRow() {
    Map<String, PlutoCell> json = {};
    Map<String, PlutoCell> foodServices = servicesToPlutoRow(services, DbOccasions.serviceTypeFood);
    json.addAll(foodServices);

    json.addAll(servicesToOneColumnPlutoRow(services, DbOccasions.serviceTypeAccommodation));

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

  static void mapOneToServices(Map<String, dynamic> services, String serviceType, String? key, String value) {
    if(key == null) {
      return;
    }
    if(services[serviceType] == null) {
      services[serviceType] = {};
    }
    services[serviceType][key] = value;
  }

  static void mapJsonToServices(Map<String, dynamic> json, Map<String, dynamic> services, String serviceType) {
    for (var entry in json.entries) {
      if (entry.key.startsWith(serviceType)) {
        var code = entry.key.substring(serviceType.length);
        services[serviceType] ??= {};
        services[serviceType][code] = entry.value;
      }
    }
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
    mapJsonToServices(json, services, DbOccasions.serviceTypeFood);

    var value = json[DbOccasions.serviceTypeAccommodation]?.isEmpty ?? true ? DbOccasions.serviceNone : DbOccasions.servicePaid;
    mapOneToServices(services, DbOccasions.serviceTypeAccommodation, json[DbOccasions.serviceTypeAccommodation], value);

    return OccasionUserModel(
      occasion: RightsService.currentOccasion,
      user: json[Tb.occasion_users.user]?.isEmpty == true ? null : json[Tb.occasion_users.user],
      isApprover: json[Tb.occasion_users.is_approver] == "true" ? true : false,
      isApproved: json[Tb.occasion_users.is_approved] == "true" ? true : false,
      isManager: json[Tb.occasion_users.is_manager] == "true" ? true : false,
      isEditor: json[Tb.occasion_users.is_editor] == "true" ? true : false,
      role: int.tryParse(json[Tb.occasion_users.role]??""),
      services: services,
      data: {
        Tb.occasion_users.data_name: json[Tb.occasion_users.data_name]?.trim(),
        Tb.occasion_users.data_surname: json[Tb.occasion_users.data_surname]?.trim(),
        Tb.occasion_users.data_sex: json[Tb.occasion_users.data_sex]?.trim(),

        Tb.occasion_users.data_email: json[Tb.occasion_users.data_email]?.trim(),
        Tb.occasion_users.data_phone: json[Tb.occasion_users.data_phone]?.trim(),
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
    if(!compareStrings(u[uField], data?[dataField])){
      var x= 1;
    }
    return compareStrings(u[uField], data?[dataField]);
  }

  bool importedEquals(Map<String, dynamic> iu) {
    return compareField(iu, Tb.occasion_users.data_email, Tb.occasion_users.data_email)
        && compareField(iu, Tb.occasion_users.data_name, Tb.occasion_users.data_name)
        && compareField(iu, Tb.occasion_users.data_surname, Tb.occasion_users.data_surname)
        && iu[Tb.user_info.role] == role
        && compareField(iu, Tb.occasion_users.data_phone, Tb.occasion_users.data_phone)
        && compareField(iu, Tb.occasion_users.data_text1, Tb.occasion_users.data_text1)
        && compareField(iu, Tb.occasion_users.data_text2, Tb.occasion_users.data_text2)
        && compareField(iu, Tb.occasion_users.data_text3, Tb.occasion_users.data_text3)
        && compareField(iu, Tb.occasion_users.data_text4, Tb.occasion_users.data_text4)
        && compareField(iu, Tb.occasion_users.data_diet, Tb.occasion_users.data_diet)
        && compareField(iu, Tb.occasion_users.data_note, Tb.occasion_users.data_note)
        && compareServicesJson(iu[Tb.occasion_users.services], services, [DbOccasions.serviceTypeFood, DbOccasions.serviceTypeAccommodation])
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

  static bool compareServicesJson(Map<String, dynamic>? json1, Map<String, dynamic>? json2, List<String> serviceTypes) {
    if (json1 == null && json2 == null) return true;
    if (json1 == null || json2 == null) return false;

    for (String serviceType in serviceTypes) {
      // Check if both JSON objects contain the current service type key
      if (!(json1.containsKey(serviceType) && json2.containsKey(serviceType)))
        return false;

      Map<String, dynamic> service1 = json1[serviceType];
      Map<String, dynamic> service2 = json2[serviceType];

      // Compare the contents of each service type map
      for (var key in service1.keys) {
        var value1 = service1[key];
        var value2 = service2[key];

        // Check if value is "serviceNone" in one JSON and something else in the other
        if ((value1 == DbOccasions.serviceNone && value2 != DbOccasions.serviceNone) ||
            (value2 == DbOccasions.serviceNone && value1 != DbOccasions.serviceNone)) {
          return false;
        }
      }

      // Check for any extra keys in json2 that are not in json1
      for (var key in service2.keys.where((k)=>k.isNotEmpty)) {
        if (!service1.containsKey(key))
          return false;
      }
    }

    return true;
  }
}