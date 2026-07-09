import 'package:fstapp/components/event_feedback/event_feedback_model.dart';
import 'package:fstapp/data_services/auth_service.dart';
import 'package:fstapp/services/storage_helper.dart';
import 'package:supabase_flutter/supabase_flutter.dart';
import 'package:uuid/uuid.dart';

/// Data access for the EventFeedback feature. Backed by the SECURITY DEFINER
/// RPCs submit/get/delete_event_feedback (+ admin for_edit / export_for_edit).
class DbEventFeedback {
  static final _supabase = Supabase.instance.client;
  static const String _clientIdKey = 'event_feedback_client_id';

  /// Stable per-device id used to attribute anonymous feedback.
  static Future<String> _clientId() async {
    var id = await StorageHelper.get(_clientIdKey);
    if (id == null || id.isEmpty) {
      id = const Uuid().v4();
      await StorageHelper.set(_clientIdKey, id);
    }
    return id;
  }

  static Future<bool> isEnabledOnOccasion(int occasionId) async {
    final res = await _supabase.rpc(
      'get_is_event_feedback_enabled_on_occasion',
      params: {'p_occasion': occasionId},
    );
    return res == true;
  }

  /// Current viewer's feedback for [eventId], or null.
  static Future<EventFeedbackModel?> getMyFeedback(int eventId) async {
    final params = <String, dynamic>{'p_event': eventId};
    if (!AuthService.isLoggedIn()) {
      params['p_client_id'] = await _clientId();
    }
    final res = await _supabase.rpc('get_event_feedback', params: params);
    _ensureOk(res);
    final data = res['data'];
    if (data == null) return null;
    return EventFeedbackModel.fromJson((data as Map).cast<String, dynamic>());
  }

  static Future<EventFeedbackModel> submit({
    required int eventId,
    required String rating,
    String? note,
  }) async {
    final params = <String, dynamic>{
      'p_event': eventId,
      'p_rating': rating,
      'p_note': note,
    };
    if (!AuthService.isLoggedIn()) {
      params['p_client_id'] = await _clientId();
    }
    final res = await _supabase.rpc('submit_event_feedback', params: params);
    _ensureOk(res);
    return EventFeedbackModel.fromJson(
        (res['data'] as Map).cast<String, dynamic>());
  }

  static Future<void> delete(int eventId) async {
    final params = <String, dynamic>{'p_event': eventId};
    if (!AuthService.isLoggedIn()) {
      params['p_client_id'] = await _clientId();
    }
    final res = await _supabase.rpc('delete_event_feedback', params: params);
    _ensureOk(res);
  }

  // --- Admin ---

  static Future<EventFeedbackForEdit> getForEdit(int eventId) async {
    final res = await _supabase
        .rpc('get_event_feedback_for_edit', params: {'p_event': eventId});
    _ensureOk(res);
    return EventFeedbackForEdit.fromJson(
        (res['data'] as Map).cast<String, dynamic>());
  }

  /// Flat per-event-per-respondent rows for CSV export of a whole occasion.
  static Future<List<Map<String, dynamic>>> exportForEdit(
      int occasionId) async {
    final res = await _supabase.rpc('get_event_feedback_export_for_edit',
        params: {'p_occasion': occasionId});
    _ensureOk(res);
    return ((res['data'] as List?) ?? const [])
        .map((e) => (e as Map).cast<String, dynamic>())
        .toList();
  }

  static void _ensureOk(dynamic res) {
    if (res is Map && res['code'] != null && res['code'] != 200) {
      throw EventFeedbackException(
          (res['code'] as num).toInt(), res['message'] as String?);
    }
  }
}

/// Carries the RPC error code so the UI can show the matching message
/// (mirrors the deployed app's per-code mapping).
class EventFeedbackException implements Exception {
  final int code;
  final String? message;
  EventFeedbackException(this.code, this.message);
}
