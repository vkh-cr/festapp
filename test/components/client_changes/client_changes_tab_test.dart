import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:fstapp/components/client_changes/client_change_model.dart';
import 'package:fstapp/components/client_changes/client_changes_tab.dart';

void main() {
  Widget testApp(Widget child) => MaterialApp(home: Scaffold(body: child));

  testWidgets('shows the pre-activation state without querying Supabase',
      (tester) async {
    await tester.pumpWidget(
      const MaterialApp(
        home: Scaffold(
          body: ClientChangesTab(clientSyncEnabled: false),
        ),
      ),
    );

    expect(find.byIcon(Icons.history_toggle_off), findsOneWidget);
    expect(find.byType(CircularProgressIndicator), findsNothing);
  });

  testWidgets('loads an aggregate seven-day activity range', (tester) async {
    DateTime? requestedFrom;
    DateTime? requestedTo;

    Future<List<ClientActivityBucket>> load({
      required int occasionId,
      required DateTime from,
      required DateTime to,
    }) async {
      requestedFrom = from;
      requestedTo = to;
      return const [];
    }

    await tester.pumpWidget(testApp(
      ClientChangesTab(
        clientSyncEnabled: true,
        activityLoader: load,
        isOffline: () async => false,
        occasionId: 1,
      ),
    ));
    await tester.pumpAndSettle();

    expect(requestedTo!.difference(requestedFrom!), const Duration(days: 7));
    expect(find.byType(TextField), findsNothing);
    expect(find.byType(ListTile), findsNothing);
  });

  testWidgets('renders activity by half-hour and category without users',
      (tester) async {
    final today = DateUtils.dateOnly(DateTime.now());
    final bucketTime = today.add(const Duration(hours: 10, minutes: 30));

    Future<List<ClientActivityBucket>> load({
      required int occasionId,
      required DateTime from,
      required DateTime to,
    }) async =>
        [
          ClientActivityBucket(
            startedAt: bucketTime,
            category: 'live',
            count: 4,
          ),
        ];

    await tester.pumpWidget(testApp(
      ClientChangesTab(
        clientSyncEnabled: true,
        activityLoader: load,
        isOffline: () async => false,
        occasionId: 1,
      ),
    ));
    await tester.pumpAndSettle();

    expect(find.byType(ClientActivityHeatmap), findsOneWidget);
    expect(
      find.byKey(ValueKey('activity-${bucketTime.toIso8601String()}')),
      findsOneWidget,
    );
    expect(find.byIcon(Icons.person_search), findsNothing);
  });
}
