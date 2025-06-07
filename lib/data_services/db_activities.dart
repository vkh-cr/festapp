import 'package:flutter/cupertino.dart';
import 'package:fstapp/components/activities/activity_data_helper.dart';
import 'package:fstapp/components/activities/constants.dart';
import 'package:fstapp/services/time_helper.dart';
import 'package:fstapp/services/toast_helper.dart';
import 'package:supabase_flutter/supabase_flutter.dart';
import 'package:fstapp/data_models/activity_model.dart';

class ActivityHistoryInfo {
  final int id;
  final DateTime createdAt;
  final String historyType;
  final String? note;
  final String? userName;
  final String? userSurname;

  ActivityHistoryInfo.fromJson(Map<String, dynamic> json)
      : id = json['id'],
        createdAt = DateTime.parse(json['created_at']),
        historyType = json['history_type'],
        note = json['note'],
        userName = json['user_name'],
        userSurname = json['user_surname'];

  String get userFullName => ("${userName ?? ''} ${userSurname ?? ''}").trim();
}

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
      assignmentPlaceLinks: ActivityDataHelper.parseAssignmentPlaceLinks(data),
      assignmentEventLinks: ActivityDataHelper.parseAssignmentEventLinks(data),
      activityAssignments: ActivityDataHelper.parseActivityAssignments(data),
    );

    ActivityDataHelper.linkAssignmentsToActivities(bundle);
    return bundle;
  }

  static List<Map<String, dynamic>> _buildUpdatePayload(EditDataBundle bundle) {
    List<Map<String, dynamic>> activitiesPayload = [];
    if (bundle.activities == null) return activitiesPayload;

    for (var activity in bundle.activities!) {
      List<Map<String, dynamic>> allAssignmentsPayload = [];
      if (activity.assignments != null) {
        for (var assignment in activity.assignments!) {
          List<int> assignmentPlaceIds = assignment.places.map((p) => p.id).whereType<int>().toList();
          List<int> assignmentEventIds = assignment.events.map((e) => e.id).whereType<int>().toList();

          allAssignmentsPayload.add({
            'id': assignment.id,
            'user': assignment.userInfo,
            'start_time': assignment.startTime?.toUtcFromOccasionTime().toIso8601String(),
            'end_time': assignment.endTime?.toUtcFromOccasionTime().toIso8601String(),
            'title': assignment.title,
            'description': assignment.description,
            'data': assignment.data,
            'linked_place_ids': assignmentPlaceIds,
            'linked_event_ids': assignmentEventIds,
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
      });
    }
    return activitiesPayload;
  }

  static Future<void> autosaveActivities(int occasionId, EditDataBundle bundle) async {
    final historyPayload = bundle.toJson();
    if ((historyPayload['activities'] as List?)?.isEmpty ?? true) return;

    try {
      await _supabase.rpc(
        'save_activity_history',
        params: {
          'p_occasion_id': occasionId,
          'p_activities_data': historyPayload,
          'p_history_type': 'AUTOSAVE',
        },
      );
    } catch (e) {
      print("Autosave failed: $e");
    }
  }

  static Future<void> saveActivitiesForEdit(
      BuildContext context, int occasionId, EditDataBundle bundle) async {
    final historyPayload = bundle.toJson();
    final updatePayload = _buildUpdatePayload(bundle);

    try {
      final historyResponse = await _supabase.rpc('save_activity_history', params: {
        'p_occasion_id': occasionId,
        'p_activities_data': historyPayload,
        'p_history_type': 'PUBLISH',
        'p_note': 'Published via application',
      });
      if (historyResponse is Map<String, dynamic> && historyResponse['code'] != 200) {
        ToastHelper.Show(context, "Could not save version history. Publish aborted.", severity: ToastSeverity.NotOk);
        throw Exception("Failed to save history: ${historyResponse['message']}");
      }
    } catch (e) {
      print("Error saving history during publish: $e");
      rethrow;
    }

    final response = await _supabase.rpc(
      'update_activities',
      params: {
        'p_occasion_id': occasionId,
        'p_activities_data': updatePayload,
      },
    );

    if (response is Map<String, dynamic> && response['code'] != null) {
      if (response['code'] == 200) {
        ToastHelper.Show(context, response["message"] as String? ?? "Activities published successfully!", severity: ToastSeverity.Ok);
      } else {
        final errorMessage = response["message"] as String? ?? "Failed to publish activities.";
        ToastHelper.Show(context, errorMessage, severity: ToastSeverity.NotOk);
        throw Exception("Failed to publish activities: ${response['message']}");
      }
    } else {
      ToastHelper.Show(context, "Unexpected server response.", severity: ToastSeverity.NotOk);
      throw Exception("Failed to publish activities: Unexpected server response format.");
    }
  }

  static Future<EditDataBundle?> getLatestAutosavedVersion(int occasionId) async {
    final resp = await _supabase.rpc(
      'get_latest_autosave',
      params: {'p_occasion_id': occasionId},
    );

    final responseMap = resp as Map<String, dynamic>?;
    if (responseMap == null || responseMap['code'] != 200 || responseMap['data'] == null) {
      return null;
    }

    final historyData = responseMap['data'] as Map<String, dynamic>;
    final bundleJson = historyData['activities_data'] as Map<String, dynamic>;
    return EditDataBundle.fromJson(bundleJson);
  }

  static Future<List<ActivityHistoryInfo>> listActivityHistory(int occasionId) async {
    final resp = await _supabase.rpc(
      'list_activity_history',
      params: {'p_occasion_id': occasionId},
    );

    final responseMap = resp as Map<String, dynamic>?;
    if (responseMap == null || responseMap['code'] != 200 || responseMap['data'] == null) {
      print("Failed to list activity history. Code: ${responseMap?['code']}, Message: ${responseMap?['message']}");
      return [];
    }

    final dataList = responseMap['data'] as List;
    return dataList.map((item) => ActivityHistoryInfo.fromJson(item as Map<String, dynamic>)).toList();
  }

  static Future<EditDataBundle?> getActivityHistoryVersion(int occasionId, int historyId) async {
    final resp = await _supabase.rpc(
      'get_activity_history_version',
      params: {'p_history_id': historyId},
    );

    final responseMap = resp as Map<String, dynamic>?;
    if (responseMap == null || responseMap['code'] != 200 || responseMap['data'] == null) {
      return null;
    }

    final historyData = responseMap['data'] as Map<String, dynamic>;
    final bundleJson = historyData['activities_data'] as Map<String, dynamic>;
    return EditDataBundle.fromJson(bundleJson);
  }

  static Future<void> deleteAutosave(int occasionId) async {
    try {
      await _supabase.rpc(
        'delete_autosave_history',
        params: {'p_occasion_id': occasionId},
      );
    } catch (e) {
      // It's okay to fail silently here, as the main publish operation succeeded.
      // We just log the error for debugging.
      print("Could not delete autosave history for occasion $occasionId: $e");
    }
  }
}