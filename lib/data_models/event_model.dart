// event_model.dart
import 'dart:collection';

import 'package:fstapp/components/single_data_grid/pluto_abstract.dart';
import 'package:fstapp/data_models/place_model.dart';
import 'package:fstapp/components/single_data_grid/data_grid_helper.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/data_models/tb.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/data_services/db_events.dart';
import 'package:fstapp/services/time_helper.dart';
import 'package:trina_grid/trina_grid.dart';

class EventModel extends ITrinaRowModel {

  String startTimeString() => DateFormat.Hm().format(startTime);
  String durationTimeString() => "${DateFormat.Hm().format(startTime)} - ${DateFormat.Hm().format(endTime)}";
  String durationString(BuildContext context) => "${DateFormat("EEEE, MMM d, HH:mm", context.locale.languageCode).format(startTime)} - ${DateFormat.Hm().format(endTime)}";
  Duration duration() => startTime.isBefore(endTime) ? (DateTimeRange(start: startTime, end: endTime)).duration : Duration.zero;

  int? maxParticipants;
  int maxParticipantsNumber() => maxParticipants == null ? 0 : maxParticipants!;

  @override
  final int? id;
  DateTime? updatedAt;
  bool? isHidden = false;
  Map<String, dynamic>? data;
  PlaceModel? place;
  String? type;
  List<EventModel> childEvents = [];

  List<int>? eventRolesIds;
  List<int>? parentEventIds;
  List<int>? childEventIds;
  int? currentParticipants;
  int? currentUsersSaved;
  String? title = "Event".tr();
  String? description = "";
  bool? isSignedIn = false;
  bool? splitForMenWomen = false;

  bool? isGroupEvent = false;
  bool? isMyGroupEvent = false;

  bool? isEventInMySchedule;
  int? occasionId;
  bool isCancelled;

  bool? canSaveEventToMyProgram() {
    var canSave = (maxParticipants == null || maxParticipants == 0) &&
        !isGroupEvent! &&
        (childEventIds == null || childEventIds!.isEmpty);
    if(!canSave){
      return null;
    }
    return isEventInMySchedule == false;
  }

  bool canSignIn() {
    return isEventSupportingSignIn(this) && currentParticipants! < maxParticipants!;
  }

  DateTime startTime;
  DateTime endTime;

  EventModel({
    required this.startTime,
    required this.endTime,
    this.id,
    this.updatedAt,
    this.isHidden = false,
    this.title,
    this.description,
    this.maxParticipants,
    this.data,
    this.place,
    this.type,
    this.childEventIds,
    this.parentEventIds,
    this.eventRolesIds,
    this.splitForMenWomen = false,
    this.currentParticipants,
    this.currentUsersSaved,
    this.isSignedIn = false,
    this.isGroupEvent = false,
    this.isEventInMySchedule,
    this.occasionId,
    this.isCancelled = false,
  });

  factory EventModel.fromJson(Map<String, dynamic> json) {
    var eventGroups = json.containsKey(eventGroupsTable) && json[eventGroupsTable] != null ? json[eventGroupsTable] : null;
    List<int>? childEventsIds;
    List<int>? parentEventsIds;

    if(eventGroups != null)
    {
      for(var e in eventGroups)
      {
        if(e.containsKey(eventChildColumn))
        {
          childEventsIds = childEventsIds ?? [];
          childEventsIds.add(e[eventChildColumn]);
        }
        if(e.containsKey(eventParentColumn))
        {
          parentEventsIds = parentEventsIds ?? [];
          parentEventsIds.add(e[eventParentColumn]);
        }
      }
    }

    if(json.containsKey(childEventsList)) {
      childEventsIds = childEventsIds ?? [];
      List<dynamic> toAdd = json[childEventsList]??[];
      childEventsIds.addAll(toAdd.map((e) { return e as int;}));
    }

    List<int>? eventRoles;
    if(json.containsKey(Tb.event_roles.table)) {
      eventRoles = [];
      List<dynamic> toAdd = json[Tb.event_roles.table]??[];
      eventRoles.addAll(toAdd.map((e) { return e[Tb.event_roles.role] as int;}));
    }

    Map<String, dynamic>? eventData = json.containsKey(dataColumn) ? json[dataColumn] as Map<String, dynamic>? : null;
    bool cancelled = false;
    if (eventData != null && eventData.containsKey(Tb.events.dataIsCancelled)) {
      cancelled = eventData[Tb.events.dataIsCancelled] == true;
    }

    return EventModel(
      startTime: json.containsKey(startTimeColumn) ? DateTime.parse(json[startTimeColumn]).toOccasionTime() : DateTime.fromMicrosecondsSinceEpoch(0),
      endTime: json.containsKey(endTimeColumn) ? DateTime.parse(json[endTimeColumn]).toOccasionTime(): DateTime.fromMicrosecondsSinceEpoch(0),
      id: json[idColumn],
      isHidden: json.containsKey(isHiddenColumn) ? json[isHiddenColumn] : false,
      updatedAt: json[updatedAtColumn]!=null ? DateTime.parse(json[updatedAtColumn]) : null,
      title: json.containsKey(titleColumn) ? json[titleColumn] : null,
      description: json.containsKey(descriptionColumn) ? json[descriptionColumn] : null,
      maxParticipants: json.containsKey(maxParticipantsColumn) ? json[maxParticipantsColumn] : null,
      data: eventData,
      place: (json.containsKey(placesTable) && json[placesTable] != null) ? PlaceModel.fromJson(json[placesTable]) :
      json.containsKey(placeColumn)?PlaceModel(id: json[placeColumn], title: null, description: null, type: null):null,
      type: json[Tb.events.type],
      splitForMenWomen: json.containsKey(splitForMenWomenColumn) ? json[splitForMenWomenColumn] : false,
      isSignedIn: json.containsKey(isSignedInColumn) ? json[isSignedInColumn] : false,
      isGroupEvent: json.containsKey(isGroupEventColumn) ? json[isGroupEventColumn] : false,
      isEventInMySchedule: json.containsKey(isEventInMyProgramColumn) ? json[isEventInMyProgramColumn] : false,
      childEventIds: childEventsIds,
      parentEventIds: parentEventsIds,
      eventRolesIds: eventRoles,
      currentParticipants: json.containsKey(eventUsersTable) ? json[eventUsersTable][0]["count"] : json.containsKey(currentParticipantsColumn) ? json[currentParticipantsColumn] : null,
      currentUsersSaved: json[Tb.event_users_saved.table] != null ? json[Tb.event_users_saved.table][0]["count"] : null,
      occasionId: json.containsKey(Tb.events.occasion) ? json[Tb.events.occasion] : null,
      isCancelled: cancelled, // Added
    );
  }

  bool isFull() => currentParticipants != null && maxParticipants != null && currentParticipants! >= maxParticipants!;
  static bool isEventSupportingSignIn(EventModel? event) => event != null && event.maxParticipants != null && event.maxParticipants! > 0;
  static bool isEventFull(EventModel? event) => isEventSupportingSignIn(event) && (event!.currentParticipants??0) >= event.maxParticipants!;
  @override
  String toString() {
    String titleStr = title ?? "";
    if (isCancelled) {
      titleStr += " (${"Cancelled".tr()})";
    }
    return (maxParticipants==null ? titleStr : "$titleStr (${currentParticipants??"-"}/$maxParticipants)");
  }

  void copyFromEvent(EventModel event)
  {
    startTime = event.startTime;
    endTime = event.endTime;
    title = event.title;
    description = event.description;
    maxParticipants = event.maxParticipants;
    isGroupEvent = event.isGroupEvent;
    childEventIds = event.childEventIds;
    place = PlaceModel(id: event.place?.id, title: event.place?.title, description: null, type: null);
    type = event.type;
    occasionId = event.occasionId;
    data = event.data;
    isCancelled = event.isCancelled;
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
  static const String dataColumn = "data";

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

    var placeId = DataGridHelper.getIdFromFormatted(json[placeColumn]);
    var dateFormat = DateFormat("yyyy-MM-dd-HH:mm");

    List<int> parseIntList(dynamic value) =>
        (value?.toString().trim().isNotEmpty ?? false)
            ? value.toString().split(',').map((e) => int.parse(e.trim())).toList()
            : [];

    List<int> parentEvents = parseIntList(json[parentEventColumn]);
    List<int> eventRoles = parseIntList(json[Tb.event_roles.role]);

    Map<String, dynamic> dataFromTab = json[dataColumn] as Map<String,dynamic>? ?? {};
    String? headerUrl = json[Tb.events.dataHeaderImage];
    if(headerUrl != null && headerUrl.isNotEmpty) {
      dataFromTab[Tb.events.dataHeaderImage] = headerUrl;
    } else {
      dataFromTab.remove(Tb.events.dataHeaderImage);
    }

    bool resolvedIsCancelled = false;
    if (json.containsKey(Tb.events.dataIsCancelled)) {
      final val = json[Tb.events.dataIsCancelled];
      if (val is bool) {
        resolvedIsCancelled = val;
      } else if (val is String) {
        resolvedIsCancelled = val.toLowerCase() == 'true';
      }
    }
    dataFromTab[Tb.events.dataIsCancelled] = resolvedIsCancelled;


    return EventModel(
      startTime: dateFormat.parse(startTimeString),
      endTime: dateFormat.parse(endTimeString),
      id: json[idColumn] == -1 ? null : json[idColumn],
      isHidden: json[isHiddenColumn] == "true" ? true : false,
      updatedAt: json[updatedAtColumn]!=null ? DateTime.parse(json[updatedAtColumn]) : null,
      title: json[titleColumn],
      description: json[descriptionColumn],
      maxParticipants: json[maxParticipantsColumn] == 0 ? null : json[maxParticipantsColumn],
      data: dataFromTab,
      place: placeId == null ? null : PlaceModel(id: placeId, title: "", description: "", type: ""),
      type: json[Tb.events.type],
      splitForMenWomen: json[splitForMenWomenColumn] == "true" ? true : false,
      parentEventIds: parentEvents,
      eventRolesIds: eventRoles,
      isSignedIn: false,
      isGroupEvent: json[isGroupEventColumn] == "true" ? true : false,
      occasionId: json.containsKey(Tb.events.occasion) ? json[Tb.events.occasion] : null,
      isCancelled: resolvedIsCancelled,
    );
  }

  @override
  TrinaRow toTrinaRow(BuildContext context) {
    return TrinaRow(cells: {
      idColumn: TrinaCell(value: id),
      isHiddenColumn: TrinaCell(value: isHidden.toString()),
      titleColumn: TrinaCell(value: title),
      descriptionColumn: TrinaCell(value: description),
      startDateColumn: TrinaCell(value: DateFormat('yyyy-MM-dd').format(startTime)),
      startTimeColumn: TrinaCell(value: DateFormat('HH:mm').format(startTime)),
      endDateColumn: TrinaCell(value: DateFormat('yyyy-MM-dd').format(endTime)),
      endTimeColumn: TrinaCell(value: DateFormat('HH:mm').format(endTime)),
      maxParticipantsColumn: TrinaCell(value: maxParticipants),
      placeColumn: TrinaCell(value: place == null ? PlaceModel.WithouValue : place!.toPlutoSelectString()),
      Tb.events.type: TrinaCell(value: type ?? ""),
      splitForMenWomenColumn: TrinaCell(value: splitForMenWomen.toString()),
      isGroupEventColumn: TrinaCell(value: isGroupEvent.toString()),
      parentEventColumn: TrinaCell(value: parentEventIds?.map((e) => e.toString()).join(",")??""),
      Tb.event_roles.role: TrinaCell(value: eventRolesIds?.map((e) => e.toString()).join(",")??""),
      Tb.event_users.table: TrinaCell(value: (maxParticipants??0) > 0 ? currentParticipants?? 0 : currentUsersSaved??0),
      Tb.events.dataHeaderImage: TrinaCell(value: data?[Tb.events.dataHeaderImage]),
      Tb.events.dataIsCancelled: TrinaCell(value: isCancelled.toString()),
    });
  }

  Map<String, dynamic> toUpsertMap() {
    Map<String, dynamic> eventDataMap = Map.from(data ?? {});
    eventDataMap[Tb.events.dataIsCancelled] = isCancelled;

    final Map<String, dynamic> upsertObj = {
      Tb.events.start_time: startTime.toUtcFromOccasionTime().toIso8601String(),
      Tb.events.end_time: endTime.toUtcFromOccasionTime().toIso8601String(),
      Tb.events.title: title,
      Tb.events.max_participants: maxParticipants,
      Tb.events.place: place?.id,
      Tb.events.split_for_men_women: splitForMenWomen,
      Tb.events.is_group_event: isGroupEvent,
      Tb.events.is_hidden: isHidden,
      Tb.events.type: type,
      Tb.events.data: eventDataMap,
    };
    return upsertObj;
  }

  @override
  Future<void> deleteMethod() async {
    var participants = await DbEvents.getParticipantsPerEvent(id!);
    for(var p in participants)
    {
      await DbEvents.signOutFromEvent(null, id!, p);
    }
    await DbEvents.removeEventFromSaved(this);
    await DbEvents.removeEventFromEventGroups(this);
    await DbEvents.deleteEvent(this);
  }

  @override
  Future<void> updateMethod() async {
    await DbEvents.updateEventFromDataGrid(this);
  }

  @override
  String toBasicString() => "$title${isCancelled ? ' (${'Cancelled'.tr()})' : ''}";

  Map<String, dynamic> toJson() {
    Map<String, dynamic> eventData = data ?? {};
    eventData[Tb.events.dataIsCancelled] = isCancelled;

    return {
      idColumn: id,
      updatedAtColumn: updatedAt?.toIso8601String(),
      startTimeColumn: startTime.toUtcFromOccasionTime().toIso8601String(),
      endTimeColumn: endTime.toUtcFromOccasionTime().toIso8601String(),
      isHiddenColumn: isHidden,
      titleColumn: title,
      descriptionColumn: description,
      maxParticipantsColumn: maxParticipants,
      currentParticipantsColumn: currentParticipants,
      isSignedInColumn: isSignedIn,
      isEventInMyProgramColumn: isEventInMySchedule,
      isGroupEventColumn: isGroupEvent,
      placesTable: place,
      Tb.events.type: type,
      childEventsList: childEventIds,
      Tb.events.occasion: occasionId,
      dataColumn: eventData,
    };
  }

  static HashSet<EventModel> CreateEventModelSet() {
    return HashSet<EventModel>(
        equals: (a, b) => a.id == b.id,
        hashCode: (a) => a.id.hashCode
    );
  }
}