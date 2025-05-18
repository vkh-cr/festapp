import 'package:fstapp/data_models/event_model.dart';
import 'package:fstapp/data_models/place_model.dart';
import 'package:fstapp/data_models/tb.dart';
import 'package:fstapp/data_models/user_info_model.dart';
import 'package:uuid/uuid.dart';

var _uuid = Uuid();

class ActivityModel {
  int? id;
  DateTime? createdAt;
  DateTime? updatedAt;
  String? title;
  String? description;
  String? type;
  int? occasion;
  int? unit;
  bool? isHidden;
  int? order;
  Map<String, dynamic>? data;
  List<ActivityAssignmentModel>? assignments;

  ActivityModel({
    this.id,
    this.createdAt,
    this.updatedAt,
    this.title,
    this.description,
    this.type,
    this.occasion,
    this.unit,
    this.isHidden,
    this.order,
    this.data,
    this.assignments,
  });

  factory ActivityModel.fromJson(Map<String, dynamic> j) {
    return ActivityModel(
      id: j[Tb.activities.id] as int?,
      createdAt: j[Tb.activities.created_at] != null
          ? DateTime.parse(j[Tb.activities.created_at] as String)
          : null,
      updatedAt: j[Tb.activities.updated_at] != null
          ? DateTime.parse(j[Tb.activities.updated_at] as String)
          : null,
      title: j[Tb.activities.title] as String?,
      description: j[Tb.activities.description] as String?,
      type: j[Tb.activities.type] as String?,
      occasion: j[Tb.activities.occasion] as int?,
      unit: j[Tb.activities.unit] as int?,
      isHidden: j[Tb.activities.is_hidden] as bool?,
      order: j[Tb.activities.order] as int?,
      data: (j[Tb.activities.data] as Map?)?.cast<String, dynamic>(),
      assignments: [], // Populated by EditDataHelper
    );
  }
}

// Renamed from ActivityPlaceModel
class AssignmentPlaceLinkModel {
  String? assignmentId; // Changed from activityId, type changed to String (UUID)
  int? placeId;

  AssignmentPlaceLinkModel({this.assignmentId, this.placeId});

  factory AssignmentPlaceLinkModel.fromJson(Map<String, dynamic> j) {
    return AssignmentPlaceLinkModel(
      // Assumes 'assignment_id' is a string (UUID) from JSON
      assignmentId: j[Tb.activity_assignment_places.assignment_id] as String?,
      placeId: j[Tb.activity_assignment_places.place_id] as int?,
    );
  }
}

// Renamed from ActivityEventModel
class AssignmentEventLinkModel {
  String? assignmentId; // Changed from activityId, type changed to String (UUID)
  int? eventId;

  AssignmentEventLinkModel({this.assignmentId, this.eventId});

  factory AssignmentEventLinkModel.fromJson(Map<String, dynamic> j) {
    return AssignmentEventLinkModel(
      // Assumes 'assignment_id' is a string (UUID) from JSON
      assignmentId: j[Tb.activity_assignment_events.assignment_id] as String?,
      eventId: j[Tb.activity_assignment_events.event_id] as int?,
    );
  }
}

class ActivityAssignmentModel {
  final String id; // UUID
  int? activityId;
  UserInfoModel? user;
  String? userInfo; // Stores user UUID
  DateTime? startTime;
  DateTime? endTime;
  String? title;
  String? description;
  Map<String, dynamic>? data;
  List<PlaceModel> places; // Populated by EditDataHelper
  List<EventModel> events; // Populated by EditDataHelper

  ActivityAssignmentModel({
    String? id,
    this.activityId,
    this.userInfo,
    this.startTime,
    this.endTime,
    this.title,
    this.description,
    this.data,
    required this.user,
    List<PlaceModel>? places,
    List<EventModel>? events,
  }) : id = id ?? _uuid.v4(),
        places = places ?? [],
        events = events ?? [];

  factory ActivityAssignmentModel.fromJson(Map<String, dynamic> j) {
    String? parsedId = j[Tb.activity_assignments.id] as String?;
    return ActivityAssignmentModel(
      id: parsedId ?? _uuid.v4(), // Ensure ID is always present
      activityId: j[Tb.activity_assignments.activity_id] as int?,
      userInfo: j[Tb.activity_assignments.user] as String?, // user UUID
      startTime: j[Tb.activity_assignments.start_time] != null
          ? DateTime.parse(j[Tb.activity_assignments.start_time] as String).toLocal()
          : null,
      endTime: j[Tb.activity_assignments.end_time] != null
          ? DateTime.parse(j[Tb.activity_assignments.end_time] as String).toLocal()
          : null,
      title: j[Tb.activity_assignments.title] as String?,
      description: j[Tb.activity_assignments.description] as String?,
      data: (j[Tb.activity_assignments.data] as Map?)?.cast<String, dynamic>(),
      places: [], // Populated by EditDataHelper
      events: [], // Populated by EditDataHelper
      user: null,   // Populated by EditDataHelper
    );
  }

  Map<String, dynamic> toJson() {
    // This toJson is for sending data back.
    // linked_place_ids and linked_event_ids will be added by DbActivities.saveActivitiesForEdit
    return {
      Tb.activity_assignments.id: id,
      Tb.activity_assignments.activity_id: activityId,
      Tb.activity_assignments.user: userInfo, // user UUID
      Tb.activity_assignments.start_time: startTime?.toIso8601String(),
      Tb.activity_assignments.end_time: endTime?.toIso8601String(),
      Tb.activity_assignments.title: title,
      Tb.activity_assignments.description: description,
      Tb.activity_assignments.data: data,
      // 'linked_place_ids' and 'linked_event_ids' are added in saveActivitiesForEdit
    };
  }

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
          other is ActivityAssignmentModel &&
              runtimeType == other.runtimeType &&
              id == other.id;

  @override
  int get hashCode => id.hashCode;
}

class EditDataBundle {
  List<EventModel>? events;
  List<PlaceModel>? places;
  List<ActivityModel>? activities;
  List<UserInfoModel>? users;
  List<AssignmentPlaceLinkModel>? assignmentPlaceLinks;
  List<AssignmentEventLinkModel>? assignmentEventLinks;
  List<ActivityAssignmentModel>? activityAssignments;

  EditDataBundle({
    this.events,
    this.places,
    this.activities,
    this.users,
    this.assignmentPlaceLinks,
    this.assignmentEventLinks,
    this.activityAssignments,
  });
}

class EditDataHelper {
  static List<ActivityModel> parseActivities(Map<String, dynamic> j) =>
      (j[Tb.activities.table] as List<dynamic>?)
          ?.map((item) => ActivityModel.fromJson(item as Map<String, dynamic>))
          .toList() ?? [];

  static List<AssignmentPlaceLinkModel> parseAssignmentPlaceLinks(Map<String, dynamic> j) =>
      (j["assignment_place_links"] as List<dynamic>?)
          ?.map((item) => AssignmentPlaceLinkModel.fromJson(item as Map<String, dynamic>))
          .toList() ?? [];

  static List<AssignmentEventLinkModel> parseAssignmentEventLinks(Map<String, dynamic> j) =>
      (j["assignment_event_links"] as List<dynamic>?)
          ?.map((item) => AssignmentEventLinkModel.fromJson(item as Map<String, dynamic>))
          .toList() ?? [];

  static List<ActivityAssignmentModel> parseActivityAssignments(Map<String, dynamic> j) =>
      (j[Tb.activity_assignments.table] as List<dynamic>?)
          ?.map((item) => ActivityAssignmentModel.fromJson(item as Map<String, dynamic>))
          .toList() ?? [];

  static List<EventModel> parseEvents(Map<String, dynamic> j) =>
      (j[Tb.events.table] as List<dynamic>?)
          ?.map((item) => EventModel.fromJson(item as Map<String, dynamic>))
          .toList() ?? [];

  static List<PlaceModel> parsePlaces(Map<String, dynamic> j) =>
      (j[Tb.places.table] as List<dynamic>?)
          ?.map((item) => PlaceModel.fromJson(item as Map<String, dynamic>))
          .toList() ?? [];

  static List<UserInfoModel> parseUsers(Map<String, dynamic> j) =>
      (j[Tb.user_info.table] as List<dynamic>?)
          ?.map((item) => UserInfoModel.fromJson(item as Map<String, dynamic>))
          .toList() ?? [];

  static void linkAssignmentsToActivities(EditDataBundle bundle) {
    final allActivities = bundle.activities ?? [];
    final allAssignments = bundle.activityAssignments ?? [];

    // Use the renamed and refactored link lists
    final allAssignmentPlaceLinks = bundle.assignmentPlaceLinks ?? [];
    final allAssignmentEventLinks = bundle.assignmentEventLinks ?? [];

    final allPlaceModels = bundle.places ?? [];
    final allEventModels = bundle.events ?? [];
    final allUserModels = bundle.users ?? [];

    final placeModelById = <int, PlaceModel>{
      for (final p in allPlaceModels) if (p.id != null) p.id!: p
    };
    final eventModelById = <int, EventModel>{
      for (final e in allEventModels) if (e.id != null) e.id!: e
    };
    final userModelByUserInfo = <String, UserInfoModel>{ // Assuming UserInfoModel.id is UUID string
      for (final u in allUserModels) if (u.id != null) u.id!: u
    };

    // Group place and event links by their assignmentId (String UUID)
    final placeLinksByAssignmentId = <String, List<AssignmentPlaceLinkModel>>{};
    for (final apLink in allAssignmentPlaceLinks) {
      if (apLink.assignmentId != null && apLink.placeId != null) {
        placeLinksByAssignmentId.putIfAbsent(apLink.assignmentId!, () => []).add(apLink);
      }
    }

    final eventLinksByAssignmentId = <String, List<AssignmentEventLinkModel>>{};
    for (final aeLink in allAssignmentEventLinks) {
      if (aeLink.assignmentId != null && aeLink.eventId != null) {
        eventLinksByAssignmentId.putIfAbsent(aeLink.assignmentId!, () => []).add(aeLink);
      }
    }

    final assignmentsByActivityId = <int, List<ActivityAssignmentModel>>{};
    for (final assignment in allAssignments) {
      final String assignmentUuid = assignment.id;

      final currentAssignmentPlaceLinks = placeLinksByAssignmentId[assignmentUuid];
      if (currentAssignmentPlaceLinks != null) {
        assignment.places = currentAssignmentPlaceLinks
            .map((apLink) => placeModelById[apLink.placeId!])
            .whereType<PlaceModel>()
            .toList();
      } else {
        assignment.places = [];
      }

      final currentAssignmentEventLinks = eventLinksByAssignmentId[assignmentUuid];
      if (currentAssignmentEventLinks != null) {
        assignment.events = currentAssignmentEventLinks
            .map((aeLink) => eventModelById[aeLink.eventId!])
            .whereType<EventModel>()
            .toList();
      } else {
        assignment.events = [];
      }

      // Link User to Assignment
      if (assignment.userInfo != null) { // userInfo is the user's UUID string
        assignment.user = userModelByUserInfo[assignment.userInfo!];
      } else {
        assignment.user = null;
      }

      // Group the now fully-populated assignment by its parent activity's ID
      if (assignment.activityId != null) {
        assignmentsByActivityId.putIfAbsent(assignment.activityId!, () => []).add(assignment);
      }
    }

    // Populate each ActivityModel with its fully linked assignments
    for (final activity in allActivities) {
      final activityId = activity.id;
      if (activityId == null) continue;
      activity.assignments = assignmentsByActivityId[activityId] ?? [];
    }
  }
}