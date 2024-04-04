import 'dart:collection';

import 'package:festapp/models/PlaceModel.dart';
import 'package:festapp/dataGrids/DataGridHelper.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:festapp/models/Tb.dart';
import 'package:flutter/material.dart';
import 'package:pluto_grid_plus/pluto_grid_plus.dart';

import '../dataGrids/PlutoAbstract.dart';
import '../data/DataService.dart';

class EventModel extends IPlutoRowModel {

  String startTimeString() => DateFormat.Hm().format(startTime);
  String durationTimeString() => "${DateFormat.Hm().format(startTime)} - ${DateFormat.Hm().format(endTime)}";
  String durationString(BuildContext context) => "${DateFormat("EEEE, MMM d, HH:mm", context.locale.languageCode).format(startTime)} - ${DateFormat.Hm().format(endTime)}";
  Duration duration() => startTime.isBefore(endTime) ? (DateTimeRange(start: startTime, end: endTime)).duration : Duration.zero;

  int? maxParticipants;
  int maxParticipantsNumber() => maxParticipants == null ? 0 : maxParticipants!;

  final int? id;
  DateTime? updatedAt;
  bool isHidden;
  PlaceModel? place;
  String? type;
  List<EventModel> childEvents = [];

  List<int>? eventRolesIds;
  List<int>? parentEventIds;
  List<int>? childEventIds;
  int? currentParticipants;
  String? title = "Event".tr();
  String? description = "";
  bool isSignedIn = false;
  bool splitForMenWomen = false;

  bool isGroupEvent = false;
  bool isMyGroupEvent = false;

  bool? isEventInMySchedule;
  bool? canSaveEventToMyProgram() {
    var canSave = (maxParticipants == null || maxParticipants == 0) &&
          !isGroupEvent &&
          (childEventIds == null || childEventIds!.isEmpty);
    if(!canSave){
      return null;
    }
    return isEventInMySchedule == false;
  }

  DateTime startTime;
  DateTime endTime;

  EventModel({
    required this.startTime,
    required this.endTime,
    required this.id,
    required this.isHidden,
    this.updatedAt,
    this.title,
    this.description,
    this.maxParticipants,
    this.place,
    this.type,
    this.childEventIds,
    this.parentEventIds,
    this.eventRolesIds,
    required this.splitForMenWomen,
    this.currentParticipants,
    required this.isSignedIn,
    required this.isGroupEvent,
    this.isEventInMySchedule});

  factory EventModel.fromJson(Map<String, dynamic> json) {
    var eventGroups = json.containsKey(eventGroupsTable) && json[eventGroupsTable] != null ? json[eventGroupsTable] : null;
    List<int>? childEvents;
    List<int>? parentEvents;

    if(eventGroups != null)
    {
      for(var e in eventGroups)
      {
        if(e.containsKey(eventChildColumn))
        {
          childEvents = childEvents ?? [];
          childEvents.add(e[eventChildColumn]);
        }
        if(e.containsKey(eventParentColumn))
        {
          parentEvents = parentEvents ?? [];
          parentEvents.add(e[eventParentColumn]);
        }
      }
    }

    if(json.containsKey(childEventsList)) {
      childEvents = childEvents ?? [];
      List<dynamic> toAdd = json[childEventsList]??[];
      childEvents.addAll(toAdd.map((e) { return e as int;}));
    }

    List<int>? eventRoles;
    if(json.containsKey(Tb.event_roles.table)) {
      eventRoles = [];
      List<dynamic> toAdd = json[Tb.event_roles.table]??[];
      eventRoles.addAll(toAdd.map((e) { return e[Tb.event_roles.role] as int;}));
    }

    return EventModel(
      startTime: json.containsKey(startTimeColumn) ? DateTime.parse(json[startTimeColumn]) : DateTime.fromMicrosecondsSinceEpoch(0),
      endTime: json.containsKey(endTimeColumn) ? DateTime.parse(json[endTimeColumn]): DateTime.fromMicrosecondsSinceEpoch(0),
      id: json[idColumn],
      isHidden: json.containsKey(isHiddenColumn) ? json[isHiddenColumn] : false,
      updatedAt: json[updatedAtColumn]!=null ? DateTime.parse(json[updatedAtColumn]) : null,
      title: json.containsKey(titleColumn) ? json[titleColumn] : null,
      description: json.containsKey(descriptionColumn) ? json[descriptionColumn] : null,
      maxParticipants: json.containsKey(maxParticipantsColumn) ? json[maxParticipantsColumn] : null,
      place: (json.containsKey(placesTable) && json[placesTable] != null) ? PlaceModel.fromJson(json[placesTable]) :
        json.containsKey(placeColumn)?PlaceModel(id: json[placeColumn], title: null, description: null, type: null):null,
      type: json[Tb.events.type],
      splitForMenWomen: json.containsKey(splitForMenWomenColumn) ? json[splitForMenWomenColumn] : false,
      isSignedIn: json.containsKey(isSignedInColumn) ? json[isSignedInColumn] : false,
      isGroupEvent: json.containsKey(isGroupEventColumn) ? json[isGroupEventColumn] : false,
      isEventInMySchedule: json.containsKey(isEventInMyProgramColumn) ? json[isEventInMyProgramColumn] : false,
      childEventIds: childEvents,
      parentEventIds: parentEvents,
      eventRolesIds: eventRoles,
      currentParticipants: json.containsKey(eventUsersTable) ? json[eventUsersTable][0]["count"] : json.containsKey(currentParticipantsColumn) ? json[currentParticipantsColumn] : null,
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
    isGroupEvent = event.isGroupEvent;
    isEventInMySchedule = event.isEventInMySchedule;
    childEventIds = event.childEventIds;
    place = PlaceModel(id: event.place?.id, title: null, description: null, type: null);
    type = event.type;
  }

  static const String startDateColumn = "startDate";
  static const String startTimeColumn = "start_time";
  static const String endDateColumn = "endDate";
  static const String endTimeColumn = "end_time";
  static const String idColumn = "id";
  static const String titleColumn = "title";
  static const String descriptionColumn = "description";
  static const String parentEventColumn = "parentEvent";
  static const String childEventsList = "childEvents";
  static const String updatedAtColumn = "updated_at";
  static const String isHiddenColumn = "is_hidden";

  static const String maxParticipantsColumn = "max_participants";
  static const String placeColumn = "place";
  static const String placesTable = "places";
  static const String eventTable = "events";
  static const String eventsLastUpdate = "lastUpdate";
  static const String eventUsersTable = "event_users";

  static const String eventUsersSavedTable = "event_users_saved";
  static const String eventUsersSavedEventColumn = "event";
  static const String eventUsersSavedUserColumn = "user";

  static const String eventGroupsTable = "event_groups";
  static const String eventChildColumn = "event_child";
  static const String eventParentColumn = "event_parent";

  static const String splitForMenWomenColumn = "split_for_men_women";
  static const String isGroupEventColumn = "is_group_event";

  static const String currentParticipantsColumn = "currentParticipants";
  static const String isSignedInColumn = "isSignedIn";
  static const String isEventInMyProgramColumn = "isEventInMyProgram";


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

    List<int> eventRoles = [];
    if(json[Tb.event_roles.role].toString().trim().isNotEmpty)
    {
      eventRoles = json[Tb.event_roles.role].toString().split(",").map((e) => int.parse(e.trim())).toList();
    }

    return EventModel(
      startTime: dateFormat.parse(startTimeString),
      endTime: dateFormat.parse(endTimeString),
      id: json[idColumn] == -1 ? null : json[idColumn],
      isHidden: json[isHiddenColumn] == "true" ? true : false,
      updatedAt: json[updatedAtColumn],
      title: json[titleColumn],
      description: json[descriptionColumn],
      maxParticipants: json[maxParticipantsColumn] == 0 ? null : json[maxParticipantsColumn],
      place: placeId == null ? null : PlaceModel(id: placeId, title: "", description: "", type: ""),
      type: json[Tb.events.type],
      splitForMenWomen: json[splitForMenWomenColumn] == "true" ? true : false,
      parentEventIds: parentEvents,
      eventRolesIds: eventRoles,
      isSignedIn: false,
      isGroupEvent: json[isGroupEventColumn] == "true" ? true : false,
    );
  }

  @override
  PlutoRow toPlutoRow() {
    return PlutoRow(cells: {
      idColumn: PlutoCell(value: id),
      isHiddenColumn: PlutoCell(value: isHidden.toString()),
      titleColumn: PlutoCell(value: title),
      descriptionColumn: PlutoCell(value: description),
      startDateColumn: PlutoCell(value: DateFormat('yyyy-MM-dd').format(startTime)),
      startTimeColumn: PlutoCell(value: DateFormat('HH:mm').format(startTime)),
      endDateColumn: PlutoCell(value: DateFormat('yyyy-MM-dd').format(endTime)),
      endTimeColumn: PlutoCell(value: DateFormat('HH:mm').format(endTime)),
      maxParticipantsColumn: PlutoCell(value: maxParticipants),
      placeColumn: PlutoCell(value: place == null ? PlaceModel.WithouValue : place!.toPlutoSelectString()),
      Tb.events.type: PlutoCell(value: type ?? ""),
      splitForMenWomenColumn: PlutoCell(value: splitForMenWomen.toString()),
      isGroupEventColumn: PlutoCell(value: isGroupEvent.toString()),
      parentEventColumn: PlutoCell(value: parentEventIds?.map((e) => e.toString()).join(",")??""),
      Tb.event_roles.role: PlutoCell(value: eventRolesIds?.map((e) => e.toString()).join(",")??"")
    });
  }

  @override
  Future<void> deleteMethod() async {
    var participants = await DataService.getParticipantsPerEvent(id!);
    for(var p in participants)
    {
      await DataService.signOutFromEvent(this, p);
    }
    await DataService.removeEventFromSaved(this);
    await DataService.removeEventFromEventGroups(this);
    await DataService.deleteEvent(this);
  }

  @override
  Future<void> updateMethod() async {
    await DataService.updateEventFromDataGrid(this);
  }

  @override
  String toBasicString() => "$title";


  Map toJson() =>
  {
    idColumn: id,
    updatedAtColumn: updatedAt?.toIso8601String(),
    startTimeColumn: startTime.toIso8601String(),
    endTimeColumn: endTime.toIso8601String(),
    isHiddenColumn: isHidden,
    titleColumn: title,
    descriptionColumn: description,
    maxParticipantsColumn: maxParticipants,
    currentParticipantsColumn: currentParticipants,
    isSignedInColumn: isSignedIn,
    isEventInMyProgramColumn: isEventInMySchedule,
    isGroupEventColumn: isGroupEvent,
    placeColumn: place?.id,
    Tb.events.type: type,
    childEventsList: childEventIds
  };

  static HashSet<EventModel> CreateEventModelSet() {
    return HashSet<EventModel>(
        equals: (a, b) => a.id == b.id,
        hashCode: (a) => a.id.hashCode
    );
  }
}
