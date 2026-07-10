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

  /// Public per-toilet status list (drives the tile grid and map colors).
  static Future<List<CleaningPlaceStatus>> getStatus(int occasionId) async {
    final res = await _supabase.rpc('get_cleaning_status', params: {
      'oc': occasionId,
    });
    _ensureOk(res);
    return ((res['data'] as List?) ?? const [])
        .map((e) =>
            CleaningPlaceStatus.fromJson((e as Map).cast<String, dynamic>()))
        .toList();
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

/// Carries the RPC error code so the UI can show the matching message
/// (429 rate-limited, etc.).
class CleaningException implements Exception {
  final int code;
  final String? message;
  CleaningException(this.code, this.message);
}
