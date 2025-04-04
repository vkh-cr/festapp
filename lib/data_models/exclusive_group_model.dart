import 'package:flutter/cupertino.dart';
import 'package:fstapp/components/single_data_grid/pluto_abstract.dart';
import 'package:fstapp/data_services/db_events.dart';
import 'package:trina_grid/trina_grid.dart';

class ExclusiveGroupModel extends ITrinaRowModel {

  int? id;
  String? title;
  List<int>? events;

  ExclusiveGroupModel({
    required this.id,
    this.title,
    this.events,
    });

  factory ExclusiveGroupModel.fromJson(Map<String, dynamic> json) {
    return ExclusiveGroupModel(
      id: json[idColumn],
      title: json.containsKey(titleColumn) ? json[titleColumn] : null,
      events: json.containsKey(exclusiveEventsTable) ? List<int>.from(json[exclusiveEventsTable].map((e)=>e["event"])) : null,
  );
  }

  static const String idColumn = "id";
  static const String titleColumn = "title";
  static const String eventsColumn = "events";
  static const String exclusiveGroupsTable = "exclusive_groups";
  static const String exclusiveEventsTable = "exclusive_events";
  static const String exclusiveEventsGroupColumn = "group";

  static ExclusiveGroupModel fromPlutoJson(Map<String, dynamic> json) {

    List<int> events = [];
    if(json[eventsColumn].toString().trim().isNotEmpty)
    {
      events = json[eventsColumn].toString().split(",").map((e) => int.parse(e.trim())).toList();
    }

    return ExclusiveGroupModel(
      id: json[idColumn] == -1 ? null : json[idColumn],
      title: json[titleColumn],
      events: events
    );
  }

  @override
  TrinaRow toTrinaRow(BuildContext context) {
    return TrinaRow(cells: {
      idColumn: TrinaCell(value: id),
      titleColumn: TrinaCell(value: title),
      eventsColumn: TrinaCell(value: events?.map((e) => e.toString()).join(",")??"")
    });
  }

  @override
  Future<void> deleteMethod() async {
    await DbEvents.deleteExclusiveGroup(this);
  }

  @override
  Future<void> updateMethod() async {
    await DbEvents.updateExclusiveGroup(this);
  }

  @override
  String toBasicString() => "$title";
}
