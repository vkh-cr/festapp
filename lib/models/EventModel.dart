import 'package:av_app/models/PlaceModel.dart';
import 'package:av_app/services/DataGridHelper.dart';
import 'package:intl/intl.dart';
import 'package:pluto_grid/pluto_grid.dart';

import '../models/PlutoAbstract.dart';
import '../services/DataService.dart';

class EventModel extends IPlutoRowModel {

  String startTimeString() => DateFormat.Hm().format(startTime);
  String durationTimeString() => "${DateFormat.Hm().format(startTime)} - ${DateFormat.Hm().format(endTime)}";
  String durationString() => "${DateFormat("EEEE, MMM d, HH:mm", "cs").format(startTime)} - ${DateFormat.Hm().format(endTime)}";

  int? maxParticipants;

  final int? id;
  PlaceModel? place;
  List<EventModel> childEvents = [];

  List<int>? parentEventIds;
  List<int>? childEventIds;
  int? currentParticipants;
  String? title = "událost";
  String? description = "";
  bool isSignedIn = false;
  bool splitForMenWomen = false;
  DateTime startTime;
  DateTime endTime;

  EventModel({
    required this.startTime,
    required this.endTime,
    required this.id,
    this.title,
    this.description,
    this.maxParticipants,
    this.place,
    this.childEventIds,
    this.parentEventIds,
    required this.splitForMenWomen});

  factory EventModel.fromJson(Map<String, dynamic> json) {
    var eventGroups = json.containsKey("event_groups") && json["event_groups"] != null ? json["event_groups"] : null;
    List<int>? childEvents;
    List<int>? parentEvents;
    if(eventGroups != null)
    {
      for(var e in eventGroups)
      {
        if(e.containsKey("event_child"))
        {
          childEvents = childEvents ?? [];
          childEvents.add(e["event_child"]);
        }
        if(e.containsKey("event_parent"))
        {
          parentEvents = parentEvents ?? [];
          parentEvents.add(e["event_parent"]);
        }
      }
    }
    return EventModel(
      startTime: DateTime.parse(json["start_time"]),
      endTime: DateTime.parse(json["end_time"]),
      id: json["id"],
      title: json.containsKey("title") ? json["title"] : null,
      description: json.containsKey("description") ? json["description"] : null,
      maxParticipants: json.containsKey("max_participants") ? json["max_participants"] : null,
      place: json.containsKey("places") && json["places"] != null ? PlaceModel.fromJson(json["places"]) : null,
      splitForMenWomen: json.containsKey("split_for_men_women") ? json["split_for_men_women"] : false,
      childEventIds: childEvents,
      parentEventIds: parentEvents,
  );
  }

  bool isFull() => currentParticipants !>= maxParticipants!;
  static bool canSignIn(EventModel? event) => event != null && event.maxParticipants != null;

  @override
  String toString() {
    return (maxParticipants==null ? title:"$title (${currentParticipants??"-"}/$maxParticipants)")??"";
  }

  copyFromEvent(EventModel event)
  {
    startTime = event.startTime;
    endTime = event.endTime;
    title = event.title;
    description = event.description;
    maxParticipants = event.maxParticipants;
  }

  static const String startDateColumn = "startDateColumn";
  static const String startTimeColumn = "startTimeColumn";
  static const String endDateColumn = "endDateColumn";
  static const String endTimeColumn = "endTimeColumn";
  static const String idColumn = "idColumn";
  static const String titleColumn = "titleColumn";
  static const String descriptionColumn = "descriptionColumn";
  static const String descriptionHiddenColumn = "descriptionHiddenColumn";
  static const String parentEventColumn = "parentEventColumn";

  static const String maxParticipantsColumn = "maxParticipantsColumn";
  static const String placeColumn = "placeColumn";
  static const String splitForMenWomenColumn = "splitForMenWomenColumn";

  static EventModel fromPlutoJson(Map<String, dynamic> json) {
    var startTimeString = json[startDateColumn]+"-"+json[startTimeColumn];
    var endTimeString = json[endDateColumn]+"-"+json[endTimeColumn];

    var placeId = DataGridHelper.GetIdFromFormatted(json[placeColumn]);
    var dateFormat = DateFormat("yyyy-MM-dd-HH:mm");

    List<int> parentEvents = [];
    if(json[parentEventColumn].toString().trim().isNotEmpty)
    {
      parentEvents = json[parentEventColumn].toString().split(",").map((e) => int.parse(e.trim())).toList();
    }

    return EventModel(
      startTime: dateFormat.parse(startTimeString),
      endTime: dateFormat.parse(endTimeString),
      id: json[idColumn] == -1 ? null : json[idColumn],
      title: json[titleColumn],
      description: json[descriptionHiddenColumn],
      maxParticipants: json[maxParticipantsColumn] == 0 ? null : json[maxParticipantsColumn],
      place: placeId == null ? null : PlaceModel(id: placeId, title: "", description: "", type: ""),
      splitForMenWomen: json[splitForMenWomenColumn] == "true" ? true : false,
      parentEventIds: parentEvents
    );
  }

  @override
  PlutoRow toPlutoRow() {
    return PlutoRow(cells: {
      idColumn: PlutoCell(value: id),
      titleColumn: PlutoCell(value: title),
      descriptionColumn: PlutoCell(value: description),
      descriptionHiddenColumn: PlutoCell(value: description),
      startDateColumn: PlutoCell(value: DateFormat('yyyy-MM-dd').format(startTime)),
      startTimeColumn: PlutoCell(value: DateFormat('HH:mm').format(startTime)),
      endDateColumn: PlutoCell(value: DateFormat('yyyy-MM-dd').format(endTime)),
      endTimeColumn: PlutoCell(value: DateFormat('HH:mm').format(endTime)),
      maxParticipantsColumn: PlutoCell(value: maxParticipants),
      placeColumn: PlutoCell(value: place == null ? PlaceModel.WithouPlace : place!.toPlutoSelectString()),
      splitForMenWomenColumn: PlutoCell(value: splitForMenWomen.toString()),
      parentEventColumn: PlutoCell(value: parentEventIds?.map((e) => e.toString()).join(",")??"")
    });
  }

  @override
  Future<void> deleteMethod() async {
    var participants = await DataService.getParticipantsPerEvent(id!);
    for(var p in participants)
    {
      await DataService.signOutFromEvent(id!, p);
    }
    await DataService.deleteEvent(this);
  }

  @override
  Future<void> updateMethod() async {
    await DataService.updateEvent(this);
  }

  @override
  String toBasicString() => "$title";
}
