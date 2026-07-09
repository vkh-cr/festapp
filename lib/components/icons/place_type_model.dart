import 'package:flutter/material.dart';
import 'package:fstapp/components/icons/db_place_types.dart';
import 'package:fstapp/components/single_data_grid/pluto_abstract.dart';
import 'package:fstapp/database_tables/tb.dart';
import 'package:trina_grid/trina_grid.dart';

/// Occasion place type (category), managed in the "Place types" data grid under
/// the Places admin tab. Columns: Id, Hide, Default, Code, Title, Icon, Order.
class PlaceTypeModel extends ITrinaRowModel {
  static String placeTypesOffline = Tb.place_types.table;

  @override
  int? id;
  int? occasion;
  String? code;
  String? title;
  int? icon;
  int? order;
  bool? isHidden;
  bool? isDefault;

  PlaceTypeModel({
    this.id,
    this.occasion,
    this.code,
    this.title,
    this.icon,
    this.order,
    this.isHidden,
    this.isDefault,
  });

  /// Deserialize from server JSON.
  factory PlaceTypeModel.fromJson(Map<String, dynamic> json) {
    return PlaceTypeModel(
      id: (json[Tb.place_types.id] as num?)?.toInt(),
      occasion: (json[Tb.place_types.occasion] as num?)?.toInt(),
      code: json[Tb.place_types.code] as String?,
      title: json[Tb.place_types.title] as String?,
      icon: (json[Tb.place_types.icon] as num?)?.toInt(),
      order: (json[Tb.place_types.order] as num?)?.toInt(),
      isHidden: json[Tb.place_types.is_hidden] as bool? ?? false,
      isDefault: json[Tb.place_types.is_default] as bool? ?? false,
    );
  }

  /// Deserialize from a Trina grid row (cell values are strings / ints).
  static PlaceTypeModel fromPlutoJson(Map<String, dynamic> json) {
    bool asBool(dynamic v) =>
        v is bool ? v : (v?.toString().toLowerCase() == 'true');
    int? asInt(dynamic v) =>
        v == null || v.toString().isEmpty ? null : int.tryParse(v.toString());
    return PlaceTypeModel(
      id: asInt(json[Tb.place_types.id]),
      code: json[Tb.place_types.code]?.toString(),
      title: json[Tb.place_types.title]?.toString(),
      icon: asInt(json[Tb.place_types.icon]),
      order: asInt(json[Tb.place_types.order]),
      isHidden: asBool(json[Tb.place_types.is_hidden]),
      isDefault: asBool(json[Tb.place_types.is_default]),
    );
  }

  Map<String, dynamic> toJson() => {
        if (id != null) Tb.place_types.id: id,
        if (occasion != null) Tb.place_types.occasion: occasion,
        Tb.place_types.code: code,
        Tb.place_types.title: title,
        Tb.place_types.icon: icon,
        Tb.place_types.order: order,
        Tb.place_types.is_hidden: isHidden ?? false,
        Tb.place_types.is_default: isDefault ?? false,
      };

  @override
  TrinaRow toTrinaRow(BuildContext context) {
    return TrinaRow(cells: {
      Tb.place_types.id: TrinaCell(value: id),
      Tb.place_types.is_hidden: TrinaCell(value: (isHidden ?? false).toString()),
      Tb.place_types.is_default:
          TrinaCell(value: (isDefault ?? false).toString()),
      Tb.place_types.code: TrinaCell(value: code ?? ""),
      Tb.place_types.title: TrinaCell(value: title ?? ""),
      Tb.place_types.icon: TrinaCell(value: icon),
      Tb.place_types.order: TrinaCell(value: order),
    });
  }

  @override
  Future<void> deleteMethod(BuildContext context) async {
    if (id != null) await DbPlaceTypes.delete(id!);
  }

  @override
  Future<void> updateMethod(BuildContext context) async {
    await DbPlaceTypes.upsert(this);
  }

  @override
  String toBasicString() => title ?? code ?? "";
}
