import 'package:fstapp/models/Tb.dart';

class IconModel {
  String? data;
  String? link;

  static String iconsOffline = Tb.icons.table;

  factory IconModel.fromJson(Map<String, dynamic> json) {
    return IconModel(
    link: json[Tb.icons.link],
    data: json[Tb.icons.data],
  );
  }

  Map toJson() =>
  {
    Tb.icons.link: link,
    Tb.icons.data: data
  };

  IconModel({
    this.link,
    this.data});
}