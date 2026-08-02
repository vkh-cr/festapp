import 'package:fstapp/components/schedule/event_model.dart';

typedef _DuplicateKey = ({
  String title,
  DateTime startTime,
  DateTime endTime,
  int? placeId,
});

class SuspiciousEventDetector {
  static List<EventModel> find(
    Iterable<EventModel> events, {
    DateTime? occasionStart,
    DateTime? occasionEnd,
  }) {
    final eventList = events.toList();
    final duplicateCounts = <_DuplicateKey, int>{};

    for (final event in eventList) {
      final key = _duplicateKey(event);
      if (key != null) {
        duplicateCounts.update(key, (count) => count + 1, ifAbsent: () => 1);
      }
    }

    return eventList.where((event) {
      final key = _duplicateKey(event);
      final isDuplicate = key != null && (duplicateCounts[key] ?? 0) > 1;
      final isOutsideOccasion =
          (occasionStart != null && event.startTime.isBefore(occasionStart)) ||
              (occasionEnd != null && event.endTime.isAfter(occasionEnd));

      return event.hasSuspiciousTiming || isDuplicate || isOutsideOccasion;
    }).toList();
  }

  static _DuplicateKey? _duplicateKey(EventModel event) {
    final title = event.title?.trim().toLowerCase();
    if (title == null || title.isEmpty) return null;

    return (
      title: title,
      startTime: event.startTime,
      endTime: event.endTime,
      placeId: event.place?.id,
    );
  }
}
