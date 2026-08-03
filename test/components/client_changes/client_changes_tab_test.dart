import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:fstapp/components/client_changes/client_changes_tab.dart';

void main() {
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
}
