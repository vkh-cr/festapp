import 'package:fstapp/components/speakers/counseling_availability.dart';
import 'package:fstapp/components/speakers/speaker_model.dart';
import 'package:fstapp/components/speakers/speaker_topic_model.dart';
import 'package:fstapp/components/speakers/speakers_bundle.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

/// Data access for the speakers + counseling feature. Backed by the SECURITY
/// DEFINER RPCs in database/functions/speakers/. Writes never touch the tables
/// directly (RLS is SELECT-only).
class DbSpeakers {
  static final _supabase = Supabase.instance.client;

  // --- Public reads ---

  /// Visible speakers, topics and their links for an occasion (get_speakers).
  static Future<SpeakersBundle> getSpeakers(int occasionId,
      {bool includeDescription = false}) async {
    final res = await _supabase.rpc('get_speakers', params: {
      'p_occasion': occasionId,
      'p_include_description': includeDescription,
    });
    _ensureOk(res);
    return SpeakersBundle.fromJson((res['data'] as Map).cast<String, dynamic>());
  }

  /// Counselors competent in [topicId] and their future slots.
  static Future<CounselingAvailability> getCounselingAvailability(
      int occasionId, int topicId) async {
    final res = await _supabase.rpc('get_counseling_availability', params: {
      'p_occasion': occasionId,
      'p_topic': topicId,
    });
    _ensureOk(res);
    return CounselingAvailability.fromJson(
        (res['data'] as Map).cast<String, dynamic>());
  }

  // --- Admin reads ---

  /// All speakers (incl. hidden) with topics + linked events, plus the full
  /// topic catalog (get_speakers_for_edit).
  static Future<({List<SpeakerModel> speakers, List<SpeakerTopicModel> topics})>
      getSpeakersForEdit(int occasionId) async {
    final res = await _supabase
        .rpc('get_speakers_for_edit', params: {'p_occasion': occasionId});
    _ensureOk(res);
    final data = (res['data'] as Map).cast<String, dynamic>();
    final speakers = ((data['speakers'] as List?) ?? const [])
        .map((e) => SpeakerModel.fromJson((e as Map).cast<String, dynamic>()))
        .toList();
    final topics = ((data['speaker_topics'] as List?) ?? const [])
        .map((e) =>
            SpeakerTopicModel.fromJson((e as Map).cast<String, dynamic>()))
        .toList();
    return (speakers: speakers, topics: topics);
  }

  // --- Admin writes (editor guarded server-side) ---

  static Future<SpeakerModel> updateSpeaker(
      int occasionId, SpeakerModel speaker) async {
    final res = await _supabase.rpc('update_speaker', params: {
      'p_occasion': occasionId,
      'p_speaker': speaker.toJson(),
    });
    _ensureOk(res);
    return SpeakerModel.fromJson((res['data'] as Map).cast<String, dynamic>());
  }

  static Future<void> deleteSpeaker(int speakerId) async {
    final res = await _supabase
        .rpc('delete_speaker', params: {'p_speaker_id': speakerId});
    _ensureOk(res);
  }

  static Future<SpeakerTopicModel> updateTopic(
      int occasionId, SpeakerTopicModel topic) async {
    final res = await _supabase.rpc('update_speaker_topic', params: {
      'p_occasion': occasionId,
      'p_topic': topic.toJson(),
    });
    _ensureOk(res);
    return SpeakerTopicModel.fromJson(
        (res['data'] as Map).cast<String, dynamic>());
  }

  static Future<void> deleteTopic(int topicId) async {
    final res = await _supabase
        .rpc('delete_speaker_topic', params: {'p_topic_id': topicId});
    _ensureOk(res);
  }

  static Future<void> setEventSpeakers(
      int eventId, List<int> speakerIds) async {
    final res = await _supabase.rpc('set_event_speakers', params: {
      'p_event': eventId,
      'p_speakers': speakerIds,
    });
    _ensureOk(res);
  }

  static Future<({int created, List<int> eventIds})> createCounselingSlots({
    required int speakerId,
    required DateTime start,
    required DateTime end,
    required int slotMinutes,
    int? placeId,
    int capacity = 1,
    String? title,
    int breakMinutes = 0,
  }) async {
    final res = await _supabase.rpc('create_counseling_slots', params: {
      'p_speaker': speakerId,
      'p_start': start.toUtc().toIso8601String(),
      'p_end': end.toUtc().toIso8601String(),
      'p_slot_minutes': slotMinutes,
      'p_place': placeId,
      'p_capacity': capacity,
      'p_title': title,
      'p_break_minutes': breakMinutes,
    });
    _ensureOk(res);
    final data = (res['data'] as Map).cast<String, dynamic>();
    return (
      created: (data['created'] as num).toInt(),
      eventIds: ((data['event_ids'] as List?) ?? const [])
          .map((e) => (e as num).toInt())
          .toList(),
    );
  }

  static Future<int> deleteEmptyCounselingSlots(int speakerId,
      {DateTime? from}) async {
    final res = await _supabase.rpc('delete_empty_counseling_slots', params: {
      'p_speaker': speakerId,
      'p_from': from?.toUtc().toIso8601String(),
    });
    _ensureOk(res);
    return ((res['data'] as Map)['deleted'] as num).toInt();
  }

  static void _ensureOk(dynamic res) {
    if (res is Map && res['code'] != null && res['code'] != 200) {
      throw SpeakersException(
          (res['code'] as num).toInt(), res['message'] as String?);
    }
  }
}

/// Carries the RPC error code so the UI can show a matching message.
class SpeakersException implements Exception {
  final int code;
  final String? message;
  SpeakersException(this.code, this.message);

  @override
  String toString() => 'SpeakersException($code, $message)';
}
