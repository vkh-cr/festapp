import 'package:fstapp/database_tables/tb.dart';

class IconModel {
  int? id;
  String? data;
  String? link;
  int? unit;
  int? organization;
  String? createdBy;

  static String iconsOffline = Tb.icons.table;

  /// Legacy icons (no owning unit) are read-only and cannot be deleted.
  bool get isLegacy => unit == null;

  factory IconModel.fromJson(Map<String, dynamic> json) {
    return IconModel(
      link: json[Tb.icons.link],
      data: json[Tb.icons.data],
      id: json[Tb.icons.id],
      unit: json[Tb.icons.unit],
      organization: json[Tb.icons.organization],
      createdBy: json[Tb.icons.created_by],
    );
  }

  Map toJson() => {Tb.icons.link: link, Tb.icons.data: data, Tb.icons.id: id};

  IconModel(
      {this.link,
      this.data,
      this.id,
      this.unit,
      this.organization,
      this.createdBy});

  @override
  String toString() {
    return link ?? "";
  }
}
