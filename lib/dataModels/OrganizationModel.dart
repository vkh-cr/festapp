import 'package:fstapp/dataModels/Tb.dart';

class OrganizationModel {
  int? id;
  String? title;
  Map<String, dynamic>? data;

  OrganizationModel({this.id, this.title, this.data});

  factory OrganizationModel.fromJson(Map<String, dynamic> json) {
    return OrganizationModel(
        id: json[Tb.organizations.id],
        title: json[Tb.organizations.title],
        data: json[Tb.organizations.data]
    );
  }
}