import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:fstapp/components/timeline/light_timeline_view.dart';
import 'package:fstapp/components/timeline/schedule_helper.dart';
import 'package:fstapp/services/time_helper.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:timezone/data/latest.dart' as timezone_data;
import 'package:timezone/timezone.dart' as timezone;

TimeBlockItem _eventOn(DateTime date) => TimeBlockItem(
      id: date.day,
      startTime: DateTime(date.year, date.month, date.day, 10),
      endTime: DateTime(date.year, date.month, date.day, 11),
      timeBlockType: TimeBlockType.noAction,
      title: 'Event ${date.day}',
    );

class _EmptyAssetLoader extends AssetLoader {
  const _EmptyAssetLoader();

  @override
  Future<Map<String, dynamic>> load(String path, Locale locale) async => {};
}

Widget _testApp(List<TimeBlockItem> events, int occasionId) => EasyLocalization(
      supportedLocales: const [Locale('cs')],
      path: 'assets/translations',
      assetLoader: const _EmptyAssetLoader(),
      fallbackLocale: const Locale('cs'),
      child: Builder(
        builder: (context) => MaterialApp(
          locale: context.locale,
          supportedLocales: context.supportedLocales,
          localizationsDelegates: context.localizationDelegates,
          home: Scaffold(
            body: LightTimelineView(
              events: events,
              sessionOccasionId: occasionId,
            ),
          ),
        ),
      ),
    );

void main() {
  setUpAll(() async {
    SharedPreferences.setMockInitialValues({});
    timezone_data.initializeTimeZones();
    timezone.setLocalLocation(timezone.getLocation('Europe/Prague'));
    await EasyLocalization.ensureInitialized();
  });

  testWidgets('light Program opens on the current weekday at app startup',
      (tester) async {
    TimeHelper.currentTime = DateTime(2026, 8, 9, 12); // Sunday.
    addTearDown(() => TimeHelper.currentTime = null);
    final events = List.generate(
      6,
      (index) => _eventOn(DateTime(2026, 8, 11 + index)), // Tuesday–Sunday.
    );

    await tester.pumpWidget(_testApp(events, 91001));
    await tester.pumpAndSettle();

    final controller = DefaultTabController.of(
      tester.element(find.byType(TabBarView)),
    );
    expect(controller.index, 5);
  });

  testWidgets('light Program remembers a manual day only in process memory',
      (tester) async {
    TimeHelper.currentTime = DateTime(2026, 8, 9, 12); // Sunday.
    addTearDown(() => TimeHelper.currentTime = null);
    final events = List.generate(
      6,
      (index) => _eventOn(DateTime(2026, 8, 11 + index)),
    );

    await tester.pumpWidget(_testApp(events, 91002));
    await tester.pumpAndSettle();
    var controller = DefaultTabController.of(
      tester.element(find.byType(TabBarView)),
    );
    controller.animateTo(2);
    await tester.pumpAndSettle();
    expect(controller.index, 2);

    await tester.pumpWidget(const SizedBox.shrink());
    await tester.pump();
    await tester.pumpWidget(_testApp(events, 91002));
    await tester.pumpAndSettle();
    controller = DefaultTabController.of(
      tester.element(find.byType(TabBarView)),
    );
    expect(controller.index, 2);
  });

  testWidgets('light Program recalculates after a provisional partial dataset',
      (tester) async {
    TimeHelper.currentTime = DateTime(2026, 8, 9, 12); // Sunday.
    addTearDown(() => TimeHelper.currentTime = null);
    final completeEvents = List.generate(
      6,
      (index) => _eventOn(DateTime(2026, 8, 11 + index)),
    );

    await tester.pumpWidget(_testApp(completeEvents.take(1).toList(), 91003));
    await tester.pumpAndSettle();
    expect(
      DefaultTabController.of(tester.element(find.byType(TabBarView))).index,
      0,
    );

    await tester.pumpWidget(_testApp(completeEvents, 91003));
    await tester.pumpAndSettle();
    expect(
      DefaultTabController.of(tester.element(find.byType(TabBarView))).index,
      5,
    );
  });
}
