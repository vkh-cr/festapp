
import 'package:festapp/data/DataService.dart';
import 'package:festapp/data/RightsHelper.dart';
import 'package:festapp/dataGrids/PlutoAbstract.dart';
import 'package:festapp/models/Tb.dart';
import 'package:festapp/models/UserInfoModel.dart';
import 'package:intl/intl.dart';
import 'package:pluto_grid_plus/pluto_grid_plus.dart';

class OccasionUserModel extends IPlutoRowModel {

  static const String birthDateJsonFormat = "yyyy-MM-dd";

  DateTime? createdAt;
  int? occasion;
  String? user;
  int? role;

  bool isEditor;
  bool isManager;
  bool isApprover;
  bool isApproved;
  Map<String, dynamic>? data;
  OccasionUserModel({this.createdAt, this.occasion, this.user, this.data, this.role,
    required this.isEditor, required this.isManager, required this.isApprover, required this.isApproved});

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
        data: json[Tb.occasion_users.data]
    );
  }

  dynamic toUpdateJson() =>
  {
    Tb.occasion_users.occasion: RightsHelper.currentOccasion,
    Tb.occasion_users.user: user,
    Tb.occasion_users.is_editor: isEditor,
    Tb.occasion_users.is_approver: isApprover,
    Tb.occasion_users.is_approved: isApproved,
    Tb.occasion_users.is_manager: isManager,
    Tb.occasion_users.role: role,
    Tb.occasion_users.data: data,
  };

  @override
  Future<void> deleteMethod() async {
    await DataService.deleteOccasionUser(this);
  }

  @override
  String toBasicString() => data?[Tb.occasion_users.data_email]??"";

  @override
  PlutoRow toPlutoRow() {
    return PlutoRow(cells: {
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
    });
  }

  static OccasionUserModel fromPlutoJson(Map<String, dynamic> json) {
    DateTime? bd;
    if (json[Tb.occasion_users.data_birthDate]!=null){
      var birthDateString = json[Tb.occasion_users.data_birthDate];
      var dateFormat = DateFormat(birthDateJsonFormat);
      bd = dateFormat.parse(birthDateString);
    }
    return OccasionUserModel(
      user: json[Tb.occasion_users.user],
      isApprover: json[Tb.occasion_users.is_approver] == "true" ? true : false,
      isApproved: json[Tb.occasion_users.is_approved] == "true" ? true : false,
      isManager: json[Tb.occasion_users.is_manager] == "true" ? true : false,
      isEditor: json[Tb.occasion_users.is_editor] == "true" ? true : false,
      role: int.tryParse(json[Tb.occasion_users.role]),
      data: {
        Tb.occasion_users.data_name: json[Tb.occasion_users.data_name]?.trim().isEmpty ? null : json[Tb.occasion_users.data_name]?.trim(),
        Tb.occasion_users.data_surname: json[Tb.occasion_users.data_surname]?.trim().isEmpty ? null : json[Tb.occasion_users.data_surname]?.trim(),
        Tb.occasion_users.data_sex: json[Tb.occasion_users.data_sex]?.trim().isEmpty ? null : json[Tb.occasion_users.data_sex]?.trim(),

        Tb.occasion_users.data_email: json[Tb.occasion_users.data_email]?.trim().isEmpty ? null : json[Tb.occasion_users.data_email]?.trim(),
        Tb.occasion_users.data_phone: json[Tb.occasion_users.data_phone]?.trim().isEmpty ? null : json[Tb.occasion_users.data_phone]?.trim(),
        Tb.occasion_users.data_accommodation: json[Tb.occasion_users.data_accommodation]?.trim().isEmpty ? null : json[Tb.occasion_users.data_accommodation]?.trim(),
        Tb.occasion_users.data_birthDate: bd?.toIso8601String(),
        Tb.occasion_users.data_isInvited: json[Tb.occasion_users.data_isInvited] == "true" ? true : false,
      },
    );
  }

  @override
  Future<void> updateMethod() async {
    await DataService.updateOccasionUser(this);
  }

  bool importedEquals(Map<String, dynamic> u) {
    return
      u[Tb.user_info.email_readonly].toString().trim().toLowerCase() == data?[Tb.occasion_users.data_email]
      && u[Tb.user_info.name].toString().trim() == data?[Tb.occasion_users.data_name]
      && u[Tb.user_info.surname].toString().trim() == data?[Tb.occasion_users.data_surname]
      && u[Tb.user_info.accommodation].toString().trim() == data?[Tb.occasion_users.data_accommodation]
      && u[Tb.user_info.role] == role
      && u[Tb.user_info.phone].toString().trim() == data?[Tb.occasion_users.data_phone]
      //todo fix
      //&& ((u.containsKey(birthDateColumn) && u[birthDateColumn] != null) ? DateTime.parse(u[birthDateColumn]):null) == birthDate
      && (u[Tb.user_info.sex].toString().trim().toLowerCase().startsWith("m") ? "male" : "female") == data?[Tb.occasion_users.data_sex];
  }
}
class OccasionLinkModel{
  int? code;
  int? occasionId;
  String? link;
  OccasionUserModel? user;

  bool isAvailable() => code == 200;
  bool isAccessDenied() => code == 403;
  bool isNotFound() => code == 404;

  factory OccasionLinkModel.fromJson(Map<String, dynamic> json) {
    return OccasionLinkModel(
      code: json["code"],
      user: json["occasion_user"]!=null ? OccasionUserModel.fromJson(json["occasion_user"]):null,
      link: json["link"],
      occasionId: json["occasion"],
    );
  }

  OccasionLinkModel({this.code, this.user, this.link, this.occasionId});
}