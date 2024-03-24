import 'package:festapp/models/Tb.dart';

class OccasionModel {
  int? id;
  DateTime? createdAt;
  DateTime? udpatedAt;
  DateTime? startTime;
  DateTime? endTime;
  bool isOpen;
  bool isHidden;
  String? link;
  String? title;
  Map<String, dynamic>? data;

  OccasionModel({this.id, this.createdAt, this.udpatedAt, this.startTime,
      this.endTime, required this.isOpen, required this.isHidden, this.link, this.title, this.data});

  factory OccasionModel.fromJson(Map<String, dynamic> json) {
    return OccasionModel(
        createdAt: json[Tb.occasions.created_at]!=null ? DateTime.parse(json[Tb.occasions.created_at]):null,
        udpatedAt: json[Tb.occasions.updated_at]!=null ? DateTime.parse(json[Tb.occasions.updated_at]):null,
        startTime: json[Tb.occasions.start_time]!=null ? DateTime.parse(json[Tb.occasions.start_time]):null,
        endTime: json[Tb.occasions.end_time]!=null ? DateTime.parse(json[Tb.occasions.end_time]):null,
        isOpen: json[Tb.occasions.is_open],
        isHidden: json[Tb.occasions.is_hidden],
        link: json[Tb.occasions.link],
        title: json[Tb.occasions.title],
        data: json[Tb.occasions.data]
    );
  }
}