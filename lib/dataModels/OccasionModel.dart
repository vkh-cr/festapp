import 'package:fstapp/dataModels/Tb.dart';

class OccasionModel {
  int? id;
  DateTime? createdAt;
  DateTime? updatedAt;
  DateTime? startTime;
  DateTime? endTime;
  bool isOpen;
  bool isHidden;
  String? link;
  String? title;
  Map<String, dynamic>? data;
  int? organization;
  int? unit;

  OccasionModel({
    this.id,
    this.createdAt,
    this.updatedAt,
    this.startTime,
    this.endTime,
    required this.isOpen,
    required this.isHidden,
    this.link,
    this.title,
    this.data,
    this.organization,
    this.unit,
  });

  factory OccasionModel.fromJson(Map<String, dynamic> json) {
    return OccasionModel(
      id: json[Tb.occasions.id],
      createdAt: json[Tb.occasions.created_at] != null
          ? DateTime.parse(json[Tb.occasions.created_at])
          : null,
      updatedAt: json[Tb.occasions.updated_at] != null
          ? DateTime.parse(json[Tb.occasions.updated_at])
          : null,
      startTime: json[Tb.occasions.start_time] != null
          ? DateTime.parse(json[Tb.occasions.start_time])
          : null,
      endTime: json[Tb.occasions.end_time] != null
          ? DateTime.parse(json[Tb.occasions.end_time])
          : null,
      isOpen: json[Tb.occasions.is_open],
      isHidden: json[Tb.occasions.is_hidden],
      link: json[Tb.occasions.link],
      title: json[Tb.occasions.title],
      data: json[Tb.occasions.data],
      organization: json[Tb.occasions.organization],
      unit: json["unit"],
    );
  }

  Map<String, dynamic> toJson() {
    return {
      Tb.occasions.id: id,
      Tb.occasions.start_time: startTime?.toIso8601String(),
      Tb.occasions.end_time: endTime?.toIso8601String(),
      Tb.occasions.is_open: isOpen,
      Tb.occasions.is_hidden: isHidden,
      Tb.occasions.link: link,
      Tb.occasions.title: title,
      Tb.occasions.data: data,
      Tb.occasions.organization: organization,
      Tb.occasions.unit: unit,
    };
  }
}