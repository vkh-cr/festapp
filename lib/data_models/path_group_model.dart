import 'dart:convert';

import 'package:flutter/cupertino.dart';
import 'package:fstapp/components/single_data_grid/pluto_abstract.dart';
import 'package:fstapp/data_models/tb.dart';
import 'package:fstapp/data_services/db_places.dart';
import 'package:trina_grid/trina_grid.dart';

class PathGroupsModel extends ITrinaRowModel {
  static const String pathsOffline = "pathsOffline";

  @override
  int? id;
  String? title;
  Map<String, dynamic>? data;
  List<List<int>>? pathData;
  String? color;
  bool? isHidden;
  int? icon;
  int? order;      // new ordering field

  PathGroupsModel({
    required this.id,
    this.title,
    this.data,
    this.pathData,
    this.color,
    this.isHidden,
    this.icon,
    this.order,
  });

  /// Deserialize from server JSON
  factory PathGroupsModel.fromJson(Map<String, dynamic> json) {
    // parse JSON array-of-arrays into List<List<int>>
    final raw = json[Tb.path_groups.path_data] as List<dynamic>?;
    final pathData = raw
        ?.cast<List<dynamic>>()
        .map((sub) => sub.cast<int>().toList())
        .toList();

    final data = json[Tb.path_groups.data] as Map<String, dynamic>?;
    final hidden = json[Tb.path_groups.is_hidden] as bool? ?? false;

    return PathGroupsModel(
      id: json[Tb.path_groups.id] as int?,
      title: json[Tb.path_groups.title] as String?,
      data: data,
      pathData: pathData,
      color: data?[Tb.path_groups.color] as String?,
      isHidden: hidden,
      icon: json[Tb.path_groups.icon] as int?,
      order: json[Tb.path_groups.order] as int?,    // extract order
    );
  }

  /// Deserialize from Pluto JSON (cells), splitting on “;” then “,”
  static PathGroupsModel fromPlutoJson(Map<String, dynamic> json) {
    // build pathData from single CSV-with-sub‑CSV string
    final rawPlaces = (json[Tb.places.table]?.toString().trim() ?? "");
    final pathData = rawPlaces.isEmpty
        ? <List<int>>[]
        : rawPlaces.split(';').map((segment) {
      final part = segment.trim();
      if (part.isEmpty) return <int>[];
      return part.split(',').map((s) => int.parse(s.trim())).toList();
    }).toList();

    // parse any JSON blob
    final rawData = (json[Tb.path_groups.data]?.toString().trim() ?? "");
    final parsedData = rawData.isNotEmpty
        ? jsonDecode(rawData) as Map<String, dynamic>
        : <String, dynamic>{};

    // override color if there’s a separate column
    final rawColor = json[Tb.path_groups.color]?.toString().trim();
    if (rawColor != null && rawColor.isNotEmpty) {
      parsedData[Tb.path_groups.color] = rawColor;
    }

    // parse hidden flag
    final rawHidden = json[Tb.path_groups.is_hidden];
    final hidden = rawHidden is bool
        ? rawHidden
        : (rawHidden?.toString().toLowerCase() == 'true');

    // parse icon (could come in as int or string)
    final rawIcon = json[Tb.path_groups.icon];
    int? icon;
    if (rawIcon is int) {
      icon = rawIcon;
    } else if (rawIcon != null && rawIcon.toString().isNotEmpty) {
      icon = int.tryParse(rawIcon.toString());
    }

    // parse order (could come in as int or string)
    final rawOrder = json[Tb.path_groups.order];
    int? order;
    if (rawOrder is int) {
      order = rawOrder;
    } else if (rawOrder != null && rawOrder.toString().isNotEmpty) {
      order = int.tryParse(rawOrder.toString());
    }

    return PathGroupsModel(
      id: json[Tb.path_groups.id] == -1
          ? null
          : json[Tb.path_groups.id] as int?,
      title: json[Tb.path_groups.title] as String?,
      data: parsedData,
      pathData: pathData,
      color: parsedData[Tb.path_groups.color] as String?,
      isHidden: hidden,
      icon: icon,
      order: order,    // include order
    );
  }

  /// Serialize back to JSON
  Map<String, dynamic> toJson() => {
    Tb.path_groups.id: id,
    Tb.path_groups.title: title,
    Tb.path_groups.data: data,
    Tb.path_groups.is_hidden: isHidden,
    Tb.path_groups.path_data: pathData,
    Tb.path_groups.icon: icon,
    Tb.path_groups.order: order,    // add order
  };

  @override
  TrinaRow toTrinaRow(BuildContext context) {
    // join each sub‑list with commas, then sub‑lists with semicolons
    final placesCsv = (pathData != null && pathData!.isNotEmpty)
        ? pathData!
        .map((sub) => sub.map((i) => i.toString()).join(','))
        .join(';')
        : "";

    return TrinaRow(cells: {
      Tb.path_groups.id: TrinaCell(value: id),
      Tb.path_groups.title: TrinaCell(value: title),
      Tb.path_groups.data: TrinaCell(value: data != null ? jsonEncode(data) : ""),
      Tb.path_groups.color: TrinaCell(value: color ?? ""),
      Tb.path_groups.is_hidden: TrinaCell(value: isHidden.toString()),
      Tb.places.table: TrinaCell(value: placesCsv),
      Tb.path_groups.icon: TrinaCell(value: icon),
      Tb.path_groups.order: TrinaCell(value: order),    // include order cell
    });
  }

  @override
  Future<void> deleteMethod() async {
    await DbPlaces.deletePathGroup(this);
  }

  @override
  Future<void> updateMethod() async {
    await DbPlaces.updatePathGroup(this);
  }

  @override
  String toBasicString() => title ?? '';
}
