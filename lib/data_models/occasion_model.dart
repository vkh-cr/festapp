import 'package:fstapp/components/features/feature.dart';
import 'package:fstapp/data_models/form_model.dart';
import 'package:fstapp/data_models/tb.dart';
import 'package:fstapp/services/time_helper.dart';

class OccasionModel {
  static const String occasionsOffline = "occasionsOffline";
  static const String registrationEnabled = "occasionsOffline";

  int? id;
  DateTime? createdAt;
  DateTime? updatedAt;
  DateTime? startTime;
  DateTime? endTime;
  bool isOpen;
  bool isHidden;
  String? link;
  String? title;
  String? description;
  Map<String, dynamic>? data;
  int? organization;
  int? unit;
  FormModel? form;
  List<Feature> features;

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
    this.description,
    this.data,
    this.organization,
    this.unit,
    this.form,
    List<Feature>? features,
  }) : features = features ?? [];

  factory OccasionModel.fromJson(Map<String, dynamic> json) {
    var data = json[Tb.occasions.data] ?? {};
    return OccasionModel(
      id: json[Tb.occasions.id],
      createdAt: json[Tb.occasions.created_at] != null
          ? DateTime.parse(json[Tb.occasions.created_at])
          : null,
      updatedAt: json[Tb.occasions.updated_at] != null
          ? DateTime.parse(json[Tb.occasions.updated_at])
          : null,
      startTime: json[Tb.occasions.start_time] != null
          ? DateTime.parse(json[Tb.occasions.start_time]).toOccasionTime(data?[Tb.occasions.data_timezone])
          : null,
      endTime: json[Tb.occasions.end_time] != null
          ? DateTime.parse(json[Tb.occasions.end_time]).toOccasionTime(data?[Tb.occasions.data_timezone])
          : null,
      isOpen: json[Tb.occasions.is_open] ?? false,
      isHidden: json[Tb.occasions.is_hidden] ?? false,
      link: json[Tb.occasions.link],
      title: json[Tb.occasions.title],
      description: json[Tb.occasions.description],
      data: data,
      organization: json[Tb.occasions.organization],
      unit: json[Tb.occasions.unit],
      form: json["form"] != null ? FormModel.fromJson(json["form"]) : null,
      features: json[Tb.occasions.features] is List
          ? List<Feature>.from(
          (json[Tb.occasions.features] as List)
              .map((featureJson) => Feature.fromJson(featureJson)))
          : [],
    );
  }

  Map<String, dynamic> toJson() {
    return {
      Tb.occasions.id: id,
      Tb.occasions.start_time: startTime?.toUtcFromOccasionTime(data?[Tb.occasions.data_timezone]).toIso8601String(),
      Tb.occasions.end_time: endTime?.toUtcFromOccasionTime(data?[Tb.occasions.data_timezone]).toIso8601String(),
      Tb.occasions.is_open: isOpen,
      Tb.occasions.is_hidden: isHidden,
      Tb.occasions.link: link,
      Tb.occasions.title: title,
      Tb.occasions.description: description,
      Tb.occasions.data: data,
      Tb.occasions.organization: organization,
      Tb.occasions.unit: unit,
      Tb.occasions.features: features,
    };
  }
}
