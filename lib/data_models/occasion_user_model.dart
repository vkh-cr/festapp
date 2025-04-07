import 'package:collection/collection.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/data_services/db_occasions.dart';
import 'package:fstapp/data_services/db_users.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/components/single_data_grid/pluto_abstract.dart';
import 'package:fstapp/data_models/tb.dart';
import 'package:intl/intl.dart';
import 'package:trina_grid/trina_grid.dart';

class OccasionUserModel extends ITrinaRowModel {
  static const String birthDateJsonFormat = "yyyy-MM-dd";

  DateTime? createdAt;
  int? occasion;
  String? user;
  int? role;
  int? unit;

  bool? isEditor = false;
  bool? isEditorView = false;
  bool? isEditorOrder = false;
  bool? isEditorOrderView = false;
  bool? isManager = false;
  bool? isApprover = false;
  bool? isApproved = false;

  Map<String, dynamic>? data;
  Map<String, dynamic>? services;
  OccasionUserModel({this.createdAt, this.occasion, this.user, this.data, this.role,
    this.isEditor, this.isEditorView, this.isEditorOrder, this.isEditorOrderView, this.isManager, this.isApprover, this.isApproved, this.services, this.unit});

  factory OccasionUserModel.fromJson(Map<String, dynamic> json) {
    return OccasionUserModel(
        createdAt: json[Tb.occasion_users.created_at] != null ? DateTime.parse(json[Tb.occasion_users.created_at]) : null,
        occasion: json[Tb.occasion_users.occasion],
        user: json[Tb.occasion_users.user],
        unit: json[Tb.unit_users.unit],
        isEditor: json[Tb.occasion_users.is_editor],
        isEditorView: json[Tb.occasion_users.is_editor_view],
        isEditorOrder: json[Tb.occasion_users.is_editor_order],
        isEditorOrderView: json[Tb.occasion_users.is_editor_order_view],
        isApprover: json[Tb.occasion_users.is_approver],
        isApproved: json[Tb.occasion_users.is_approved],
        isManager: json[Tb.occasion_users.is_manager],
        role: json[Tb.occasion_users.role],
        data: json[Tb.occasion_users.data],
        services: json[Tb.occasion_users.services]
    );
  }

  dynamic toUpdateJson() => {
    Tb.occasion_users.occasion: RightsService.currentOccasionId,
    Tb.occasion_users.user: user,
    Tb.occasion_users.is_editor: isEditor ?? false,
    Tb.occasion_users.is_editor_view: isEditorView ?? false,
    Tb.occasion_users.is_editor_order: isEditorOrder ?? false,
    Tb.occasion_users.is_editor_order_view: isEditorOrderView ?? false,
    Tb.occasion_users.is_approver: isApprover ?? false,
    Tb.occasion_users.is_approved: isApproved ?? false,
    Tb.occasion_users.is_manager: isManager ?? false,
    Tb.occasion_users.role: role,
    Tb.occasion_users.data: data,
    Tb.occasion_users.services: services,
  };

  factory OccasionUserModel.fromImportedJson(Map<String, dynamic> json, [OccasionUserModel? original]) {
    return OccasionUserModel(
        occasion: RightsService.currentOccasionId!,
        user: original?.user ?? json[Tb.occasion_users.user],
        role: json[Tb.occasion_users.role],
        data: {
          Tb.occasion_users.data_email: json[Tb.occasion_users.data_email],
          Tb.occasion_users.data_name: json[Tb.occasion_users.data_name],
          Tb.occasion_users.data_surname: json[Tb.occasion_users.data_surname],
          Tb.occasion_users.data_sex: json[Tb.occasion_users.data_sex],
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
        map[key] = value.toIso8601String();
      } else if (value is Map<String, dynamic>) {
        map[key] = convertDateTime(value);
      }
    });
    return map;
  }

  Map<String, dynamic> toImportedUpdateJson() {
    return {
      Tb.occasion_users.occasion: occasion,
      Tb.occasion_users.user: user,
      Tb.occasion_users.role: role,
      Tb.occasion_users.is_editor_view: isEditorView ?? false,
      Tb.occasion_users.data: data,
      Tb.occasion_users.services: services,
    };
  }

  Map<String, TrinaCell> serviceToOneColumnTrinaRow(Map<String, dynamic>? services, String serviceType) {
    Map<String, TrinaCell> serviceCells = {};
    for (var entry in services?[serviceType]?.entries ?? []) {
      serviceCells[serviceType + entry.key] = TrinaCell(value: entry.value);
    }
    return serviceCells;
  }

  Map<String, TrinaCell> servicesToOneColumnTrinaRow(Map<String, dynamic>? services, String serviceType) {
    TrinaCell cell = TrinaCell(value: "");
    var emptyResult = { serviceType : cell };
    if(services?[serviceType] == null) {
      return emptyResult;
    }
    var value = services?[serviceType]?.entries;
    if(value.isEmpty){
      return emptyResult;
    }
    var first = value.first.key;
    cell = TrinaCell(value: first);
    return { serviceType : cell };
  }

  Map<String, TrinaCell> servicesToTrinaRow(Map<String, dynamic>? services, String serviceType) {
    Map<String, TrinaCell> serviceCells = {};
    for (var entry in services?[serviceType]?.entries ?? []) {
      serviceCells[serviceType + entry.key] = TrinaCell(value: entry.value);
    }
    return serviceCells;
  }

  @override
  Future<void> deleteMethod() async {
    await DbUsers.deleteOccasionUser(user!, occasion!);
  }

  @override
  String toBasicString() => data?[Tb.occasion_users.data_email] ?? "";

  @override
  TrinaRow toTrinaRow(BuildContext context) {
    Map<String, TrinaCell> json = {};
    Map<String, TrinaCell> foodServices = servicesToTrinaRow(services, DbOccasions.serviceTypeFood);
    json.addAll(foodServices);
    json.addAll(servicesToOneColumnTrinaRow(services, DbOccasions.serviceTypeAccommodation));
    json.addAll({
      Tb.occasion_users.user: TrinaCell(value: user),
      Tb.occasion_users.is_editor: TrinaCell(value: isEditor.toString()),
      Tb.occasion_users.is_editor_view: TrinaCell(value: isEditorView.toString()),
      Tb.occasion_users.is_editor_order: TrinaCell(value: isEditorOrder.toString()),
      Tb.occasion_users.is_editor_order_view: TrinaCell(value: isEditorOrderView.toString()),
      Tb.occasion_users.is_manager: TrinaCell(value: isManager.toString()),
      Tb.occasion_users.is_approved: TrinaCell(value: isApproved.toString()),
      Tb.occasion_users.is_approver: TrinaCell(value: isApprover.toString()),
      Tb.occasion_users.role: TrinaCell(value: role?.toString() ?? ""),
      Tb.occasion_users.data_email: TrinaCell(value: data?[Tb.occasion_users.data_email] ?? ""),
      Tb.occasion_users.data_name: TrinaCell(value: data?[Tb.occasion_users.data_name] ?? ""),
      Tb.occasion_users.data_surname: TrinaCell(value: data?[Tb.occasion_users.data_surname] ?? ""),
      Tb.occasion_users.data_sex: TrinaCell(value: data?[Tb.occasion_users.data_sex]),
      Tb.occasion_users.data_phone: TrinaCell(value: data?[Tb.occasion_users.data_phone] ?? ""),
      Tb.occasion_users.data_birthDate: TrinaCell(value: DateTime.tryParse(data?[Tb.occasion_users.data_birthDate] ?? "") ?? DateTime.fromMicrosecondsSinceEpoch(0)),
      Tb.occasion_users.data_isInvited: TrinaCell(value: data?[Tb.occasion_users.data_isInvited].toString()),
      Tb.occasion_users.data_note: TrinaCell(value: data?[Tb.occasion_users.data_note] ?? ""),
      Tb.occasion_users.data_diet: TrinaCell(value: data?[Tb.occasion_users.data_diet] ?? ""),
      Tb.occasion_users.data_text1: TrinaCell(value: data?[Tb.occasion_users.data_text1] ?? ""),
      Tb.occasion_users.data_text2: TrinaCell(value: data?[Tb.occasion_users.data_text2] ?? ""),
      Tb.occasion_users.data_text3: TrinaCell(value: data?[Tb.occasion_users.data_text3] ?? ""),
      Tb.occasion_users.data_text4: TrinaCell(value: data?[Tb.occasion_users.data_text4] ?? ""),
    });
    return TrinaRow(cells: json);
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
    if (jsonTime != null && jsonTime is String) {
      var birthDateString = json[Tb.occasion_users.data_birthDate];
      var dateFormat = DateFormat(birthDateJsonFormat);
      bd = dateFormat.parse(birthDateString);
    } else {
      bd = jsonTime;
    }
    Map<String, dynamic> services = {};
    mapJsonToServices(json, services, DbOccasions.serviceTypeFood);
    var value = json[DbOccasions.serviceTypeAccommodation]?.isEmpty ?? true ? DbOccasions.serviceNone : DbOccasions.servicePaid;
    mapOneToServices(services, DbOccasions.serviceTypeAccommodation, json[DbOccasions.serviceTypeAccommodation], value);
    return OccasionUserModel(
      occasion: RightsService.currentOccasionId,
      user: json[Tb.occasion_users.user]?.isEmpty == true ? null : json[Tb.occasion_users.user],
      isApprover: json[Tb.occasion_users.is_approver] == "true" ? true : false,
      isApproved: json[Tb.occasion_users.is_approved] == "true" ? true : false,
      isManager: json[Tb.occasion_users.is_manager] == "true" ? true : false,
      isEditor: json[Tb.occasion_users.is_editor] == "true" ? true : false,
      isEditorView: json[Tb.occasion_users.is_editor_view] == "true" ? true : false,
      isEditorOrder: json[Tb.occasion_users.is_editor_order] == "true" ? true : false,
      isEditorOrderView: json[Tb.occasion_users.is_editor_order_view] == "true" ? true : false,
      role: int.tryParse(json[Tb.occasion_users.role] ?? ""),
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
    return compareStrings(u[uField], data?[dataField]);
  }

  bool importedEquals(Map<String, dynamic> iu) {
    return compareField(iu, Tb.occasion_users.data_email, Tb.occasion_users.data_email)
        && compareField(iu, Tb.occasion_users.data_name, Tb.occasion_users.data_name)
        && compareField(iu, Tb.occasion_users.data_surname, Tb.occasion_users.data_surname)
        && compareField(iu, Tb.occasion_users.data_sex, Tb.occasion_users.data_sex)
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

  @override
  get id => user;
}
