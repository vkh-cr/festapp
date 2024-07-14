import 'package:fstapp/dataModels/Tb.dart';

class IconModel {
  int? id;
  String? data;
  String? link;

  static String iconsOffline = Tb.icons.table;

  factory IconModel.fromJson(Map<String, dynamic> json) {
    return IconModel(
    link: json[Tb.icons.link],
    data: json[Tb.icons.data],
    id: json[Tb.icons.id],
  );
  }

  Map toJson() =>
  {
    Tb.icons.link: link,
    Tb.icons.data: data,
    Tb.icons.id: id
  };

  IconModel({
    this.link,
    this.data,
    this.id});
}