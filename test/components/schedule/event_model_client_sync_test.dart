import 'package:flutter_test/flutter_test.dart';
import 'package:fstapp/components/schedule/event_model.dart';
import 'package:timezone/data/latest.dart' as timezone_data;
import 'package:timezone/timezone.dart' as timezone;

void main() {
  setUpAll(() {
    timezone_data.initializeTimeZones();
    timezone.setLocalLocation(timezone.getLocation('Europe/Prague'));
  });

  test('editor DTO preserves both sides of event-group navigation', () {
    final event = EventModel.fromCommandJson({
      'id': 2933,
      'title': 'Parent event',
      'startTime': '2026-08-11T14:00:00Z',
      'endTime': '2026-08-11T16:00:00Z',
      'parentEventIds': [100],
      'childEventIds': [2608, 2609],
      'eventRoleIds': <int>[],
    }, 7);

    expect(event.parentEventIds, [100]);
    expect(event.childEventIds, [2608, 2609]);
    expect(event.aggregateVersion, 7);
  });
}
