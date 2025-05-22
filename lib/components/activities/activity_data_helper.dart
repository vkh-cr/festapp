import 'package:fstapp/components/timeline/schedule_helper.dart';
import 'package:fstapp/data_models/activity_model.dart';
import 'package:fstapp/data_models/tb.dart';

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

  static void linkAssignmentsToActivities(EditDataBundle bundle) {
    final allActivities = bundle.activities ?? [];
    final allAssignments = bundle.activityAssignments ?? [];

    final allAssignmentPlaceLinks = bundle.assignmentPlaceLinks ?? [];
    final allAssignmentEventLinks = bundle.assignmentEventLinks ?? [];

    final allPlaceModels = bundle.places ?? [];
    final allEventModels = bundle.events ?? [];
    final allUserModels = bundle.users ?? [];

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

  static List<TimeBlockItem> activitiesToTimeBlocks(List<ActivityModel> activities) {
    final List<TimeBlockItem> timeBlocks = [];
    // Set to keep track of processed assignment IDs to prevent duplicates
    final Set<String> processedAssignmentIds = {};

    for (final activity in activities) {
      if (activity.assignments == null) continue;

      for (final assignment in activity.assignments!) {
        // Ensure startTime and endTime are available for the assignment
        if (assignment.startTime == null || assignment.endTime == null) {
          continue;
        }

        // Check if this assignment ID has already been processed
        if (processedAssignmentIds.contains(assignment.id)) {
          continue; // Skip this assignment if it's already been added
        }

        TimeBlockPlace? timeBlockPlace;
        if (assignment.places.isNotEmpty) {
          final firstPlace = assignment.places.first;
          if (firstPlace.id != null && firstPlace.title != null) {
            timeBlockPlace = TimeBlockPlace(
              id: firstPlace.id!,
              title: firstPlace.title!,
              order: null, // ActivityPlaceModel does not have order, set to null or a default
            );
          }
        }

        final timeBlockId = assignment.id.hashCode;

        timeBlocks.add(TimeBlockItem(
          id: timeBlockId,
          startTime: assignment.startTime!,
          endTime: assignment.endTime!,
          title: activity.title ?? '', // Title from ActivityModel
          description: activity.description, // Description from ActivityModel
          timeBlockType: TimeBlockType.activity, // Default type
          data: assignment, // Store the original assignment
          timeBlockPlace: timeBlockPlace,
          participants: 0,
          maxParticipants: 0,
        ));
        // Add the assignment ID to the set of processed IDs
        processedAssignmentIds.add(assignment.id);
      }
    }
    return timeBlocks;
  }
}