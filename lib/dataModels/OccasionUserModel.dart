import 'package:fstapp/dataServices/AuthService.dart';
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
          Tb.occasion_users.data_sex: json[Tb.user_info.sex],
        }
    );
  }

  dynamic toImportedUpdateJson() =>
      {
        Tb.occasion_users.occasion: occasion,
        Tb.occasion_users.user: user,
        Tb.occasion_users.role: role,
        Tb.occasion_users.data: data,
      };

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
        Tb.occasion_users.data_name: json[Tb.occasion_users.data_name]?.trim().isEmpty ? "" : json[Tb.occasion_users.data_name]?.trim(),
        Tb.occasion_users.data_surname: json[Tb.occasion_users.data_surname]?.trim().isEmpty ? "" : json[Tb.occasion_users.data_surname]?.trim(),
        Tb.occasion_users.data_sex: json[Tb.occasion_users.data_sex]?.trim().isEmpty ? "" : json[Tb.occasion_users.data_sex]?.trim(),

        Tb.occasion_users.data_email: json[Tb.occasion_users.data_email]?.trim().isEmpty??true ? null : json[Tb.occasion_users.data_email]?.trim(),
        Tb.occasion_users.data_phone: json[Tb.occasion_users.data_phone]?.trim().isEmpty??true ? null : json[Tb.occasion_users.data_phone]?.trim(),
        Tb.occasion_users.data_accommodation: json[Tb.occasion_users.data_accommodation]?.trim().isEmpty??true ? null : json[Tb.occasion_users.data_accommodation]?.trim(),
        Tb.occasion_users.data_birthDate: bd?.toIso8601String(),
        Tb.occasion_users.data_isInvited: json[Tb.occasion_users.data_isInvited] == "true" ? true : false,
        Tb.occasion_users.data_text1: json[Tb.occasion_users.data_text1]?.trim().isEmpty ? "" : json[Tb.occasion_users.data_text1]?.trim(),
        Tb.occasion_users.data_text2: json[Tb.occasion_users.data_text2]?.trim().isEmpty ? "" : json[Tb.occasion_users.data_text2]?.trim(),
        Tb.occasion_users.data_text3: json[Tb.occasion_users.data_text3]?.trim().isEmpty ? "" : json[Tb.occasion_users.data_text3]?.trim(),
        Tb.occasion_users.data_text4: json[Tb.occasion_users.data_text4]?.trim().isEmpty ? "" : json[Tb.occasion_users.data_text4]?.trim(),
      },
    );
  }

  @override
  Future<void> updateMethod() async {
    await DbUsers.updateOccasionUser(this);
  }

  bool importedEquals(Map<String, dynamic> u) {
    return
      u[Tb.user_info.email_readonly].toString().trim().toLowerCase() == data?[Tb.occasion_users.data_email]
      && u[Tb.user_info.name].toString().trim() == data?[Tb.occasion_users.data_name]
      && u[Tb.user_info.surname].toString().trim() == data?[Tb.occasion_users.data_surname]
      && u[Tb.user_info.accommodation]?.toString().trim() == data?[Tb.occasion_users.data_accommodation]
      && u[Tb.user_info.role] == role
      && u[Tb.user_info.phone]?.toString().trim() == data?[Tb.occasion_users.data_phone]
      //todo fix
      //&& ((u.containsKey(birthDateColumn) && u[birthDateColumn] != null) ? DateTime.parse(u[birthDateColumn]):null) == birthDate
      && (u[Tb.user_info.sex].toString().trim().toLowerCase().startsWith("m") ? "male" : "female") == data?[Tb.occasion_users.data_sex];
  }
}