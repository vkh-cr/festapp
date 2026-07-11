import 'package:fstapp/components/cleaning/models/cleaning_place_status.dart';
import 'package:fstapp/components/cleaning/models/cleaning_report.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

/// Data access for the Cleaning service. Backed exclusively by the SECURITY
/// DEFINER RPCs report_cleaning_issue / get_cleaning_status /
/// get_cleaning_reports / resolve_cleaning_place — participants and crew have
/// no direct table access, so there are no .from().insert calls here.
/// Online-only (no offline caching): the crew needs live data.
class DbCleaning {
  static final _supabase = Supabase.instance.client;

  /// Reports a problem on a toilet. Returns the parsed result (with the
  /// duplicate flag). Throws [CleaningException] on any non-200 envelope.
  static Future<CleaningReportResult> reportIssue({
    required int placeId,
    required String problemType,
    String? note,
  }) async {
    final res = await _supabase.rpc('report_cleaning_issue', params: {
      'place_id': placeId,
      'problem_type': problemType,
      'note': note,
    });
    _ensureOk(res);
    final data = (res['data'] as Map?)?.cast<String, dynamic>() ?? const {};
    return CleaningReportResult(
      duplicate: data['duplicate'] == true,
    );
  }

  /// Public per-toilet status (drives the tile grid and map colors). Also carries
  /// is_blocked for the caller so a banned reporter's UI can grey the report
  /// action out without an extra round-trip.
  static Future<CleaningStatusResult> getStatus(int occasionId) async {
    final res = await _supabase.rpc('get_cleaning_status', params: {
      'oc': occasionId,
    });
    _ensureOk(res);
    final places = ((res['data'] as List?) ?? const [])
        .map((e) =>
            CleaningPlaceStatus.fromJson((e as Map).cast<String, dynamic>()))
        .toList();
    return CleaningStatusResult(
      places: places,
      isBlocked: res is Map && res['is_blocked'] == true,
    );
  }

  /// Submits (or overwrites) the caller's quality rating for a toilet
  /// (feature C). rating: 1 sad / 2 neutral / 3 happy. Throws [CleaningException]
  /// on a non-200 envelope (403 when the caller is blocked, etc.).
  static Future<void> submitReview({
    required int placeId,
    required int rating,
    String? note,
  }) async {
    final res = await _supabase.rpc('submit_cleaning_review', params: {
      'place_id': placeId,
      'rating': rating,
      'note': note,
    });
    _ensureOk(res);
  }

  /// The caller's own rating for a toilet plus the public aggregate — used to
  /// preselect the smiley in the rating dialog and show how others rated.
  static Future<CleaningReviewInfo> getReview(int placeId) async {
    final res = await _supabase.rpc('get_cleaning_review', params: {
      'place_id': placeId,
    });
    _ensureOk(res);
    final data = (res['data'] as Map?)?.cast<String, dynamic>() ?? const {};
    return CleaningReviewInfo(
      myRating: (data['my_rating'] as num?)?.toInt(),
      myNote: data['my_note'] as String?,
      ratingAvg: (data['rating_avg'] as num?)?.toDouble(),
      ratingCount: (data['rating_count'] as num?)?.toInt() ?? 0,
    );
  }

  /// Crew blocks (or editor unblocks) a repeat offender on the occasion.
  /// Throws [CleaningException] on a non-200 envelope (403 when the caller lacks
  /// the rights: crew may block, only editors may unblock).
  static Future<void> setReporterBlocked({
    required int occasionId,
    required String userId,
    required bool blocked,
  }) async {
    final res = await _supabase.rpc('set_cleaning_reporter_blocked', params: {
      'p_occasion': occasionId,
      'p_user': userId,
      'p_blocked': blocked,
    });
    _ensureOk(res);
  }

  /// Crew-only detailed reports (notes, times, reporter).
  static Future<List<CleaningReport>> getReports(
    int occasionId, {
    bool includeResolved = false,
  }) async {
    final res = await _supabase.rpc('get_cleaning_reports', params: {
      'oc': occasionId,
      'p_include_resolved': includeResolved,
    });
    _ensureOk(res);
    return ((res['data'] as List?) ?? const [])
        .map((e) => CleaningReport.fromJson((e as Map).cast<String, dynamic>()))
        .toList();
  }

  /// Crew-only: resolve every open report of a toilet. Returns the count closed.
  static Future<int> resolvePlace(int placeId) async {
    final res = await _supabase.rpc('resolve_cleaning_place', params: {
      'place_id': placeId,
    });
    _ensureOk(res);
    final data = (res['data'] as Map?)?.cast<String, dynamic>();
    return (data?['resolved'] as num?)?.toInt() ?? 0;
  }

  static void _ensureOk(dynamic res) {
    if (res is Map && res['code'] != null && res['code'] != 200) {
      throw CleaningException(
          (res['code'] as num).toInt(), res['message'] as String?);
    }
  }
}

class CleaningReportResult {
  final bool duplicate;
  CleaningReportResult({required this.duplicate});
}

/// Result of get_cleaning_status: the per-toilet statuses plus whether the
/// current caller is blocked from reporting on this occasion.
class CleaningStatusResult {
  final List<CleaningPlaceStatus> places;
  final bool isBlocked;
  CleaningStatusResult({required this.places, required this.isBlocked});
}

/// The caller's own quality rating for a toilet + the public aggregate
/// (from get_cleaning_review).
class CleaningReviewInfo {
  final int? myRating;
  final String? myNote;
  final double? ratingAvg;
  final int ratingCount;
  CleaningReviewInfo({
    this.myRating,
    this.myNote,
    this.ratingAvg,
    this.ratingCount = 0,
  });
}

/// Carries the RPC error code so the UI can show the matching message
/// (429 rate-limited, etc.).
class CleaningException implements Exception {
  final int code;
  final String? message;
  CleaningException(this.code, this.message);
}
