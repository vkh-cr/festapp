import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:fstapp/components/client_changes/client_change_model.dart';
import 'package:fstapp/components/client_changes/client_changes_tab.dart';
import 'package:fstapp/components/client_changes/db_client_changes.dart';

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

  testWidgets('keeps filters visible while results reload', (tester) async {
    final pendingReload = Completer<ClientChangesPage>();

    Future<ClientChangesPage> load({
      required int occasionId,
      DateTime? beforeTime,
      String? beforeId,
      Map<String, dynamic> filters = const {},
    }) =>
        pendingReload.future;

    await tester.pumpWidget(testApp(
      ClientChangesTab(
        clientSyncEnabled: true,
        pageLoader: load,
        detailLoader: (_) async =>
            const ClientChangeDetail(summary: {}, items: []),
        isOffline: () async => false,
        occasionId: 1,
      ),
    ));
    await tester.pump();

    expect(find.byIcon(Icons.filter_list), findsOneWidget);
    expect(find.byType(DropdownButton<String?>), findsNWidgets(2));
    expect(find.byType(TextField), findsOneWidget);
  });

  testWidgets('searches by user after typing stops', (tester) async {
    final requests = <Map<String, dynamic>>[];

    Future<ClientChangesPage> load({
      required int occasionId,
      DateTime? beforeTime,
      String? beforeId,
      Map<String, dynamic> filters = const {},
    }) async {
      requests.add(Map.of(filters));
      return const ClientChangesPage([], null, null, false);
    }

    await tester.pumpWidget(testApp(
      ClientChangesTab(
        clientSyncEnabled: true,
        pageLoader: load,
        detailLoader: (_) async =>
            const ClientChangeDetail(summary: {}, items: []),
        isOffline: () async => false,
        occasionId: 1,
      ),
    ));
    await tester.pumpAndSettle();

    await tester.enterText(find.byType(TextField), '  mi  ');
    await tester.pump(const Duration(milliseconds: 349));
    expect(requests, hasLength(1));

    await tester.pump(const Duration(milliseconds: 1));
    await tester.pump();

    expect(requests, hasLength(2));
    expect(requests.last, {'actor': 'mi'});
    expect(find.byType(TextField), findsOneWidget);
  });
}
