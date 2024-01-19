import 'package:pluto_grid/pluto_grid.dart';

import '../dataGrids/PlutoAbstract.dart';
import '../data/DataService.dart';

class ExclusiveGroupModel extends IPlutoRowModel {

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
  PlutoRow toPlutoRow() {
    return PlutoRow(cells: {
      idColumn: PlutoCell(value: id),
      titleColumn: PlutoCell(value: title),
      eventsColumn: PlutoCell(value: events?.map((e) => e.toString()).join(",")??"")
    });
  }

  @override
  Future<void> deleteMethod() async {
    await DataService.deleteExclusiveGroup(this);
  }

  @override
  Future<void> updateMethod() async {
    await DataService.updateExclusiveGroup(this);
  }

  @override
  String toBasicString() => "$title";
}
