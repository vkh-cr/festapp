import 'package:fstapp/data_models/tb.dart';
import 'package:uuid/uuid.dart';



class ActivityPlaceModel {
  final int? id;
  final String? title;

  ActivityPlaceModel({this.id, this.title});

  factory ActivityPlaceModel.fromJson(Map<String, dynamic> json) {
    return ActivityPlaceModel(
      id: json[Tb.places.id] as int?,
      title: json[Tb.places.title] as String?,
    );
  }
}

class ActivityEventModel {
  final int? id;
  final String? title;
  final DateTime startTime;
  final DateTime endTime;

  ActivityEventModel(
      {this.id, this.title, required this.startTime, required this.endTime});

  factory ActivityEventModel.fromJson(Map<String, dynamic> json) {
    return ActivityEventModel(
      id: json[Tb.events.id] as int?,
      title: json[Tb.events.title] as String?,
      startTime: (json[Tb.events.start_time] != null
          ? DateTime.parse(json[Tb.events.start_time] as String).toLocal()
          : DateTime.fromMicrosecondsSinceEpoch(0)),
      endTime: (json[Tb.events.end_time] != null
          ? DateTime.parse(json[Tb.events.end_time] as String).toLocal()
          : DateTime.fromMicrosecondsSinceEpoch(0)),
    );
  }
}

class ActivityUserInfoModel {
  final String? id;
  final String? name;
  final String? surname;

  ActivityUserInfoModel({this.id, this.name, this.surname});

  factory ActivityUserInfoModel.fromJson(Map<String, dynamic> json) {
    return ActivityUserInfoModel(
      id: json[Tb.user_info.id] as String?,
      name: json[Tb.user_info.name] as String?,
      surname: json[Tb.user_info.surname] as String?,
    );
  }

  String toFullNameString() {
    return "${name ?? ""} ${surname ?? ""}".trim();
  }

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
          other is ActivityUserInfoModel &&
              runtimeType == other.runtimeType &&
              id == other.id;

  @override
  int get hashCode => id.hashCode;
}


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

class AssignmentPlaceLinkModel {
  String? assignmentId;
  int? placeId;

  AssignmentPlaceLinkModel({this.assignmentId, this.placeId});

  factory AssignmentPlaceLinkModel.fromJson(Map<String, dynamic> j) {
    return AssignmentPlaceLinkModel(
      assignmentId: j[Tb.activity_assignment_places.assignment_id] as String?,
      placeId: j[Tb.activity_assignment_places.place_id] as int?,
    );
  }
}

class AssignmentEventLinkModel {
  String? assignmentId;
  int? eventId;

  AssignmentEventLinkModel({this.assignmentId, this.eventId});

  factory AssignmentEventLinkModel.fromJson(Map<String, dynamic> j) {
    return AssignmentEventLinkModel(
      assignmentId: j[Tb.activity_assignment_events.assignment_id] as String?,
      eventId: j[Tb.activity_assignment_events.event_id] as int?,
    );
  }
}

class ActivityAssignmentModel {
  final String id;
  int? activityId;
  ActivityUserInfoModel? user;
  String? userInfo;
  DateTime? startTime;
  DateTime? endTime;
  String? title;
  String? description;
  Map<String, dynamic>? data;
  List<ActivityPlaceModel> places;
  List<ActivityEventModel> events;

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
    List<ActivityPlaceModel>? places,
    List<ActivityEventModel>? events,
  })  : id = id ?? _uuid.v4(),
        places = places ?? [],
        events = events ?? [];

  factory ActivityAssignmentModel.fromJson(Map<String, dynamic> j) {
    String? parsedId = j[Tb.activity_assignments.id] as String?;
    return ActivityAssignmentModel(
      id: parsedId ?? _uuid.v4(),
      activityId: j[Tb.activity_assignments.activity_id] as int?,
      userInfo: j[Tb.activity_assignments.user] as String?,
      startTime: j[Tb.activity_assignments.start_time] != null
          ? DateTime.parse(j[Tb.activity_assignments.start_time] as String).toLocal()
          : null,
      endTime: j[Tb.activity_assignments.end_time] != null
          ? DateTime.parse(j[Tb.activity_assignments.end_time] as String).toLocal()
          : null,
      title: j[Tb.activity_assignments.title] as String?,
      description: j[Tb.activity_assignments.description] as String?,
      data: (j[Tb.activity_assignments.data] as Map?)?.cast<String, dynamic>(),
      places: [],
      events: [],
      user: null, // Populated by EditDataHelper
    );
  }

  Map<String, dynamic> toJson() {
    return {
      Tb.activity_assignments.id: id,
      Tb.activity_assignments.activity_id: activityId,
      Tb.activity_assignments.user: userInfo,
      Tb.activity_assignments.start_time: startTime?.toIso8601String(),
      Tb.activity_assignments.end_time: endTime?.toIso8601String(),
      Tb.activity_assignments.title: title,
      Tb.activity_assignments.description: description,
      Tb.activity_assignments.data: data,
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
  List<ActivityEventModel>? events;
  List<ActivityPlaceModel>? places;
  List<ActivityModel>? activities;
  List<ActivityUserInfoModel>? users;
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

class ActivityDataHelper {
  static List<ActivityModel> parseActivities(Map<String, dynamic> j) =>
      (j[Tb.activities.table] as List<dynamic>?)
          ?.map((item) => ActivityModel.fromJson(item as Map<String, dynamic>))
          .toList() ??
          [];

  static List<AssignmentPlaceLinkModel> parseAssignmentPlaceLinks(Map<String, dynamic> j) =>
      (j["assignment_place_links"] as List<dynamic>?)
          ?.map((item) => AssignmentPlaceLinkModel.fromJson(item as Map<String, dynamic>))
          .toList() ??
          [];

  static List<AssignmentEventLinkModel> parseAssignmentEventLinks(Map<String, dynamic> j) =>
      (j["assignment_event_links"] as List<dynamic>?)
          ?.map((item) => AssignmentEventLinkModel.fromJson(item as Map<String, dynamic>))
          .toList() ??
          [];

  static List<ActivityAssignmentModel> parseActivityAssignments(Map<String, dynamic> j) =>
      (j[Tb.activity_assignments.table] as List<dynamic>?)
          ?.map((item) => ActivityAssignmentModel.fromJson(item as Map<String, dynamic>))
          .toList() ??
          [];

  static List<ActivityEventModel> parseEvents(Map<String, dynamic> j) =>
      (j[Tb.events.table] as List<dynamic>?)
          ?.map((item) => ActivityEventModel.fromJson(item as Map<String, dynamic>))
          .toList() ??
          [];

  static List<ActivityPlaceModel> parsePlaces(Map<String, dynamic> j) =>
      (j[Tb.places.table] as List<dynamic>?)
          ?.map((item) => ActivityPlaceModel.fromJson(item as Map<String, dynamic>))
          .toList() ??
          [];

  static List<ActivityUserInfoModel> parseUsers(Map<String, dynamic> j) =>
      (j[Tb.user_info.table] as List<dynamic>?)
          ?.map((item) => ActivityUserInfoModel.fromJson(item as Map<String, dynamic>))
          .toList() ??
          [];
  // END UPDATED

  static void linkAssignmentsToActivities(EditDataBundle bundle) {
    final allActivities = bundle.activities ?? [];
    final allAssignments = bundle.activityAssignments ?? [];

    final allAssignmentPlaceLinks = bundle.assignmentPlaceLinks ?? [];
    final allAssignmentEventLinks = bundle.assignmentEventLinks ?? [];

    // Use new local models from bundle
    final allPlaceModels = bundle.places ?? [];
    final allEventModels = bundle.events ?? [];
    final allUserModels = bundle.users ?? [];

    // Maps using new local models
    final placeModelById = <int, ActivityPlaceModel>{
      for (final p in allPlaceModels) if (p.id != null) p.id!: p
    };
    final eventModelById = <int, ActivityEventModel>{
      for (final e in allEventModels) if (e.id != null) e.id!: e
    };
    final userModelByUserInfo = <String, ActivityUserInfoModel>{
      for (final u in allUserModels) if (u.id != null) u.id!: u
    };

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
            .whereType<ActivityPlaceModel>()
            .toList();
      } else {
        assignment.places = [];
      }

      final currentAssignmentEventLinks = eventLinksByAssignmentId[assignmentUuid];
      if (currentAssignmentEventLinks != null) {
        assignment.events = currentAssignmentEventLinks
            .map((aeLink) => eventModelById[aeLink.eventId!])
            .whereType<ActivityEventModel>()
            .toList();
      } else {
        assignment.events = [];
      }

      if (assignment.userInfo != null) {
        assignment.user = userModelByUserInfo[assignment.userInfo!];
      } else {
        assignment.user = null;
      }

      if (assignment.activityId != null) {
        assignmentsByActivityId.putIfAbsent(assignment.activityId!, () => []).add(assignment);
      }
    }

    for (final activity in allActivities) {
      final activityId = activity.id;
      if (activityId == null) continue;
      activity.assignments = assignmentsByActivityId[activityId] ?? [];
    }
  }
}