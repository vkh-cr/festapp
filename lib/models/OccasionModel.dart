import 'package:avapp/models/Tb.dart';

class OccasionModel{
  int? id;
  DateTime? createdAt;
  DateTime? udpatedAt;
  DateTime? startTime;
  DateTime? endTime;
  bool isOpen;
  bool isHidden;
  String? link;
  String? title;

  OccasionModel({this.id, this.createdAt, this.udpatedAt, this.startTime,
      this.endTime, required this.isOpen, required this.isHidden, this.link, this.title});
}
class OccasionUserModel{
  DateTime? createdAt;
  int? occasion;
  String? user;
  bool isEditor;
  bool isManager;
  bool isApprover;
  bool isApproved;

  OccasionUserModel({this.createdAt, this.occasion, this.user,
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
    );
  }
}
class OccasionLinkModel{
  int? code;
}