import 'package:fstapp/components/cleaning/cleaning_status.dart';

/// Public per-toilet status (from get_cleaning_status): id, title/number, the
/// derived status and the time of the most recent open report. No notes/names.
class CleaningPlaceStatus {
  final int place;
  final String title;
  final CleaningStatus status;
  final DateTime? lastReportedAt;

  /// Public quality-review aggregate (feature C): average smiley rating (1..3)
  /// and how many people rated. ratingAvg is null when nobody has rated yet.
  final double? ratingAvg;
  final int ratingCount;

  CleaningPlaceStatus({
    required this.place,
    required this.title,
    required this.status,
    this.lastReportedAt,
    this.ratingAvg,
    this.ratingCount = 0,
  });

  factory CleaningPlaceStatus.fromJson(Map<String, dynamic> json) {
    return CleaningPlaceStatus(
      place: (json['place'] as num).toInt(),
      title: (json['title'] as String?) ?? '',
      status: CleaningStatusHelper.fromCode(json['status'] as String?),
      lastReportedAt: json['last_reported_at'] != null
          ? DateTime.tryParse(json['last_reported_at'].toString())?.toLocal()
          : null,
      ratingAvg: (json['rating_avg'] as num?)?.toDouble(),
      ratingCount: (json['rating_count'] as num?)?.toInt() ?? 0,
    );
  }
}
