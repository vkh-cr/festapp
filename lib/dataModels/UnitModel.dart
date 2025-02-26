import 'package:fstapp/dataModels/OccasionModel.dart';
import 'package:fstapp/dataModels/Tb.dart';
import 'package:fstapp/dataModels/UnitUserModel.dart';
import 'package:fstapp/services/features/Feature.dart';

class UnitModel {
  int? id;
  String? title;
  Map<String, dynamic>? data;
  List<Feature>? features;
  int? organization;
  List<OccasionModel>? occasions;
  UnitUserModel? unitUser;

  UnitModel({
    this.id,
    this.title,
    this.data,
    this.features,
    this.organization,
    this.occasions,
    this.unitUser,
  });

  factory UnitModel.fromJson(Map<String, dynamic> json) {
    return UnitModel(
      id: json[Tb.units.id],
      title: json[Tb.units.title],
      data: json[Tb.units.data],
      features: json[Tb.units.features] is List
          ? List<Feature>.from(
          (json[Tb.units.features] as List)
              .map((x) => Feature.fromJson(x)))
          : [],
      organization: json[Tb.units.organization],
      occasions: json[Tb.occasions.table] != null
          ? List<OccasionModel>.from(
          (json[Tb.occasions.table] as List)
              .map((x) => OccasionModel.fromJson(x)))
          : [],
      unitUser: json["unit_user"] != null
          ? UnitUserModel.fromJson(json["unit_user"])
          : null,
    );
  }

  Map<String, dynamic> toJson() {
    return {
      Tb.units.id: id,
      Tb.units.title: title,
      Tb.units.data: data,
      Tb.units.features: features?.map((feature) => feature.toJson()).toList(),
      Tb.units.organization: organization,
      Tb.occasions.table: occasions?.map((occasion) => occasion.toJson()).toList(),
      "unit_user": unitUser?.toJson(),
    };
  }
}
