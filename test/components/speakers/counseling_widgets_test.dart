import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:fstapp/components/speakers/counseling_availability.dart';
import 'package:fstapp/components/speakers/slot_chip.dart';
import 'package:fstapp/components/speakers/speaker_topic_model.dart';
import 'package:fstapp/components/speakers/topic_picker.dart';

/// Widget tests for the extracted counseling widgets. `.tr()` returns raw keys
/// in the test env, so localized labels are asserted by key.

Future<void> _pumpTopicPicker(
  WidgetTester tester, {
  required List<SpeakerTopicModel> topics,
  required void Function(int) onChanged,
  int? initial,
}) async {
  int? selected = initial;
  await tester.pumpWidget(
    MaterialApp(
      home: Scaffold(
        body: StatefulBuilder(
          builder: (context, setState) => TopicPicker(
            topics: topics,
            selectedTopicId: selected,
            onSelected: (v) {
              setState(() => selected = v);
              onChanged(v);
            },
          ),
        ),
      ),
    ),
  );
}

Future<void> _pumpSlotChip(
  WidgetTester tester, {
  required CounselingSlot slot,
  VoidCallback? onTap,
}) async {
  await tester.pumpWidget(
    MaterialApp(
      home: Scaffold(
        body: SlotChip(slot: slot, timeLabel: 'Mo 10:00', onTap: onTap),
      ),
    ),
  );
}

void main() {
  group('TopicPicker', () {
    final topics = [
      SpeakerTopicModel(id: 10, title: 'A'),
      SpeakerTopicModel(id: 11, title: 'B'),
    ];

    testWidgets('is single-select: choosing a second option deselects the first',
        (tester) async {
      final picked = <int>[];
      await _pumpTopicPicker(tester,
          topics: topics, onChanged: picked.add);

      // Select the first area.
      await tester.tap(find.text('A'));
      await tester.pumpAndSettle();
      expect(picked.last, 10);
      var tiles = tester
          .widgetList<RadioListTile<int>>(find.byType(RadioListTile<int>))
          .toList();
      expect(tiles.firstWhere((t) => t.value == 10).groupValue, 10);

      // Selecting the second area switches the selection (only one at a time).
      await tester.tap(find.text('B'));
      await tester.pumpAndSettle();
      expect(picked.last, 11);
      tiles = tester
          .widgetList<RadioListTile<int>>(find.byType(RadioListTile<int>))
          .toList();
      // The group value is now 11 for both radios → A is no longer selected.
      expect(tiles.firstWhere((t) => t.value == 11).groupValue, 11);
      expect(tiles.firstWhere((t) => t.value == 10).groupValue, 11);
      expect(
          tiles.firstWhere((t) => t.value == 10).groupValue !=
              tiles.firstWhere((t) => t.value == 10).value,
          isTrue);
    });
  });

  group('SlotChip', () {
    CounselingSlot slot({
      int max = 1,
      int occupied = 0,
      bool signedIn = false,
    }) =>
        CounselingSlot(
          id: 1,
          maxParticipants: max,
          occupied: occupied,
          isSignedIn: signedIn,
        );

    testWidgets('free slot is tappable and shows time + occupancy',
        (tester) async {
      var tapped = false;
      await _pumpSlotChip(tester,
          slot: slot(max: 2, occupied: 0), onTap: () => tapped = true);

      // Not the taken state.
      expect(find.text('Counseling.slotTaken'), findsNothing);
      // Shows the time label + occupancy.
      expect(find.textContaining('Mo 10:00'), findsOneWidget);
      expect(find.textContaining('0/2'), findsOneWidget);

      // Tap is enabled.
      expect(tester.widget<InkWell>(find.byType(InkWell)).onTap, isNotNull);
      await tester.tap(find.byType(SlotChip));
      await tester.pumpAndSettle();
      expect(tapped, isTrue);
    });

    testWidgets('full slot is disabled and shows the "taken" label',
        (tester) async {
      var tapped = false;
      await _pumpSlotChip(tester,
          slot: slot(max: 1, occupied: 1), onTap: () => tapped = true);

      expect(find.text('Counseling.slotTaken'), findsOneWidget);
      // Tap is disabled (onTap is null → callback never fires).
      expect(tester.widget<InkWell>(find.byType(InkWell)).onTap, isNull);
      await tester.tap(find.byType(SlotChip));
      await tester.pumpAndSettle();
      expect(tapped, isFalse);
    });

    testWidgets('my slot shows a distinct affordance (check icon), no booking',
        (tester) async {
      var tapped = false;
      await _pumpSlotChip(tester,
          slot: slot(max: 1, occupied: 1, signedIn: true),
          onTap: () => tapped = true);

      // Distinct affordance: the check icon (absent in free/full states).
      expect(find.byIcon(Icons.check_circle), findsOneWidget);
      // Not the taken label.
      expect(find.text('Counseling.slotTaken'), findsNothing);
      // Booking is disabled from the chip (cancel happens elsewhere).
      expect(tester.widget<InkWell>(find.byType(InkWell)).onTap, isNull);
      await tester.tap(find.byType(SlotChip));
      await tester.pumpAndSettle();
      expect(tapped, isFalse);
    });
  });
}
