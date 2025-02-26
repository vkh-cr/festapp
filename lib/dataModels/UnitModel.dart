import 'package:fstapp/dataModels/OccasionModel.dart';
import 'package:fstapp/dataModels/Tb.dart';
import 'package:fstapp/dataModels/UnitUserModel.dart';

class UnitModel {
  int? id;
  String? title;
  Map<String, dynamic>? data;
  List<Map<String, dynamic>>? features;
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
          ? List<Map<String, dynamic>>.from(json[Tb.units.features])
          : [],
      organization: json[Tb.units.organization],
      occasions: json[Tb.occasions.table] != null
          ? List<OccasionModel>.from(json[Tb.occasions.table].map((x) => OccasionModel.fromJson(x)))
          : [],
      unitUser: json["unit_user"] != null ? UnitUserModel.fromJson(json["unit_user"]) : null,
    );
  }
}
