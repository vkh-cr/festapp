import 'package:fstapp/dataModels/Tb.dart';

class UnitModel {
  int? id;
  String? title;
  Map<String, dynamic>? data;
  int? organization;

  UnitModel({this.id, this.title, this.data, this.organization});

  factory UnitModel.fromJson(Map<String, dynamic> json) {
    return UnitModel(
      id: json[Tb.units.id],
      title: json[Tb.units.title],
      data: json[Tb.units.data],
      organization: json[Tb.units.organization],
    );
  }
}