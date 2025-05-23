import 'package:flutter/cupertino.dart';
import 'package:fstapp/components/activities/activity_data_helper.dart';
import 'package:fstapp/services/time_helper.dart';
import 'package:fstapp/services/toast_helper.dart';
import 'package:supabase_flutter/supabase_flutter.dart';
import 'package:fstapp/data_models/activity_model.dart'; // Contains all models now

class DbActivities {
  static final _supabase = Supabase.instance.client;

  static Future<EditDataBundle?> getForEdit(int occasionId) async {
    final resp = await _supabase.rpc(
      'get_activities_for_edit',
      params: {'p_occasion': occasionId},
    );

    if (resp == null) {
      print("Failed to get activities for edit: RPC response is null.");
      return null;
    }

    final Map<String, dynamic>? responseMap = resp as Map<String, dynamic>?;
    if (responseMap == null || responseMap['code'] != 200 || responseMap['data'] == null) {
      print("Failed to get activities for edit or data is null. Code: ${responseMap?['code']}, Message: ${responseMap?['message']}");
      return null;
    }

    final data = responseMap['data'] as Map<String, dynamic>;

    final bundle = EditDataBundle(
      users: ActivityDataHelper.parseUsers(data),
      events: ActivityDataHelper.parseEvents(data),
      places: ActivityDataHelper.parsePlaces(data),
      activities: ActivityDataHelper.parseActivities(data),
      // Use new parsing methods and field names
      assignmentPlaceLinks: ActivityDataHelper.parseAssignmentPlaceLinks(data),
      assignmentEventLinks: ActivityDataHelper.parseAssignmentEventLinks(data),
      activityAssignments: ActivityDataHelper.parseActivityAssignments(data),
    );

    ActivityDataHelper.linkAssignmentsToActivities(bundle);
    return bundle;
  }

  static Future<void> saveActivitiesForEdit(
      BuildContext context, int occasionId, EditDataBundle bundle) async {
    if (bundle.activities == null) { // No need to check isEmpty if it can be null
      ToastHelper.Show(context, "No activities data to save.");
      return;
    }

    List<Map<String, dynamic>> activitiesPayload = [];

    for (var activity in bundle.activities!) {
      List<Map<String, dynamic>> allAssignmentsPayload = [];
      if (activity.assignments != null) {
        for (var assignment in activity.assignments!) {
          // Collect place and event IDs specific to THIS assignment
          List<int> assignmentPlaceIds = assignment.places
              .map((place) => place.id)
              .whereType<int>()
              .toList();
          List<int> assignmentEventIds = assignment.events
              .map((event) => event.id)
              .whereType<int>()
              .toList();

          allAssignmentsPayload.add({
            'id': assignment.id, // Assignment's own UUID
            'user': assignment.userInfo, // User's UUID
            'start_time': assignment.startTime?.toUtcFromOccasionTime().toIso8601String(),
            'end_time': assignment.endTime?.toUtcFromOccasionTime().toIso8601String(),
            'title': assignment.title,
            'description': assignment.description,
            'data': assignment.data,
            'linked_place_ids': assignmentPlaceIds, // IDs for this assignment
            'linked_event_ids': assignmentEventIds, // IDs for this assignment
          });
        }
      }

      activitiesPayload.add({
        'id': activity.id,
        'title': activity.title,
        'description': activity.description,
        'type': activity.type,
        'unit': activity.unit,
        'is_hidden': activity.isHidden,
        'order': activity.order,
        'data': activity.data,
        'assignments': allAssignmentsPayload,
        // 'linked_place_ids' and 'linked_event_ids' are NO LONGER at the activity level
      });
    }

    // If bundle.activities was not null but empty, activitiesPayload will be empty.
    // The SQL function is designed to handle deleting all activities if p_activities_data is empty.
    // So, we proceed even if activitiesPayload is empty, if that's the intended behavior.
    // If there must always be at least one activity, add a check here.
    // For now, assume sending an empty list to delete all activities is valid.

    final response = await _supabase.rpc(
      'update_activities',
      params: {
        'p_occasion_id': occasionId,
        'p_activities_data': activitiesPayload,
      },
    );

    if (response is Map<String, dynamic> && response['code'] != null) {
      if (response['code'] == 200) {
        ToastHelper.Show(context, response["message"] as String? ?? "Activities saved successfully!", severity: ToastSeverity.Ok);
      } else {
        final errorMessage = response["message"] as String? ?? "Failed to save activities. Unknown error from server.";
        ToastHelper.Show(context, errorMessage, severity: ToastSeverity.NotOk);
        print("Error from update_activities RPC: Code ${response['code']}, Message: ${response['message']}");
        throw Exception("Failed to save activities: ${response['message']}");
      }
    } else {
      ToastHelper.Show(context, "Unexpected server response format after RPC call.", severity: ToastSeverity.NotOk);
      print("Unexpected server response from update_activities RPC: $response");
      throw Exception("Failed to save activities: Unexpected server response format.");
    }
  }
}