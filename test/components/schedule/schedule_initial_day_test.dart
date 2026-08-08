import 'package:flutter_test/flutter_test.dart';
import 'package:fstapp/components/timeline/schedule_helper.dart';

TimeBlockItem event(DateTime start, DateTime end) => TimeBlockItem(
      id: start.millisecondsSinceEpoch,
      startTime: start,
      endTime: end,
      timeBlockType: TimeBlockType.noAction,
    );

TimeBlockGroup day(DateTime date, {List<TimeBlockItem> events = const []}) =>
    TimeBlockGroup(title: '', dateTime: date, events: events);

void main() {
  final now = DateTime(2026, 8, 8, 12); // Saturday.

  test('opens the exact current date when it exists', () {
    final groups = [
      day(DateTime(2026, 8, 7)),
      day(DateTime(2026, 8, 8)),
      day(DateTime(2026, 8, 9)),
    ];

    expect(calculateScheduleInitialDayIndex(groups, now: now), 1);
  });

  test('restores legacy weekday selection for a program from another year', () {
    final groups = [
      day(DateTime(2025, 8, 8)), // Friday.
      day(DateTime(2025, 8, 9)), // Saturday.
      day(DateTime(2025, 8, 10)), // Sunday.
    ];

    expect(calculateScheduleInitialDayIndex(groups, now: now), 1);
  });

  test('weekday selection also applies before an upcoming program', () {
    final groups = [
      day(DateTime(2026, 8, 14)), // Friday in the following week.
      day(DateTime(2026, 8, 15)), // Saturday in the following week.
      day(DateTime(2026, 8, 16)),
    ];

    expect(calculateScheduleInitialDayIndex(groups, now: now), 1);
  });

  test('uses the first event weekday when a group has no explicit date', () {
    final groups = [
      TimeBlockGroup(
        title: '',
        events: [
          event(DateTime(2025, 8, 8, 10), DateTime(2025, 8, 8, 11)),
        ],
      ),
      TimeBlockGroup(
        title: '',
        events: [
          event(DateTime(2025, 8, 9, 10), DateTime(2025, 8, 9, 11)),
        ],
      ),
    ];

    expect(calculateScheduleInitialDayIndex(groups, now: now), 1);
  });

  test('a currently running item has priority over date fallbacks', () {
    final groups = [
      day(DateTime(2025, 8, 9)),
      day(
        DateTime(2025, 8, 10),
        events: [
          event(now.subtract(const Duration(minutes: 30)),
              now.add(const Duration(minutes: 30)))
        ],
      ),
    ];

    expect(calculateScheduleInitialDayIndex(groups, now: now), 1);
  });

  test('falls back to the first day when no weekday matches', () {
    final groups = [
      day(DateTime(2025, 8, 4)),
      day(DateTime(2025, 8, 5)),
    ];

    expect(calculateScheduleInitialDayIndex(groups, now: now), 0);
    expect(calculateScheduleInitialDayIndex(const [], now: now), 0);
  });

  test('session selection overrides automatic weekday until app restart', () {
    final selection = ScheduleDaySessionSelection();
    final groups = [
      day(DateTime(2026, 8, 7)),
      day(DateTime(2026, 8, 8)),
      day(DateTime(2026, 8, 9)),
    ];

    expect(
      selection.resolveInitialIndex(
        occasionId: 9,
        dayGroups: groups,
        now: now,
      ),
      1,
    );
    selection.remember(9, groups[2]);
    expect(
      selection.resolveInitialIndex(
        occasionId: 9,
        dayGroups: groups,
        now: now,
      ),
      2,
    );
    expect(
      ScheduleDaySessionSelection().resolveInitialIndex(
        occasionId: 9,
        dayGroups: groups,
        now: now,
      ),
      1,
      reason: 'a new process-level session recalculates today',
    );
  });

  test('session selection is isolated per occasion', () {
    final selection = ScheduleDaySessionSelection();
    final groups = [
      day(DateTime(2026, 8, 7)),
      day(DateTime(2026, 8, 8)),
      day(DateTime(2026, 8, 9)),
    ];
    selection.remember(9, groups[2]);

    expect(
      selection.resolveInitialIndex(
        occasionId: 9,
        dayGroups: groups,
        now: now,
      ),
      2,
    );
    expect(
      selection.resolveInitialIndex(
        occasionId: 10,
        dayGroups: groups,
        now: now,
      ),
      1,
    );
  });

  test('partial reload does not overwrite a remembered manual day', () {
    final selection = ScheduleDaySessionSelection();
    final completeGroups = [
      day(DateTime(2026, 8, 7)),
      day(DateTime(2026, 8, 8)),
      day(DateTime(2026, 8, 9)),
    ];
    selection.remember(9, completeGroups[2]);

    expect(
      selection.resolveInitialIndex(
        occasionId: 9,
        dayGroups: completeGroups.take(2).toList(),
        now: now,
      ),
      1,
      reason: 'the incomplete snapshot still needs a visible safe day',
    );
    expect(
      selection.resolveInitialIndex(
        occasionId: 9,
        dayGroups: completeGroups,
        now: now,
      ),
      2,
      reason: 'the complete snapshot restores the manual choice',
    );
  });
}
