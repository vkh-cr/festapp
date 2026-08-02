import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:fstapp/components/search/global_search_dialog.dart';
import 'package:fstapp/components/search/search_result_model.dart';

void main() {
  testWidgets('speaker without an event still opens a profile', (tester) async {
    await tester.pumpWidget(MaterialApp(
      home: Builder(builder: (context) {
        return TextButton(
          onPressed: () => showDialog<void>(
            context: context,
            builder: (_) => GlobalSearchDialog(
              search: (_) async => [
                SearchResultModel(
                  entityType: 'speaker',
                  entityId: 42,
                  title: 'Jan Bez Programu',
                  snippet: 'psychoterapeut',
                ),
              ],
            ),
          ),
          child: const Text('Search'),
        );
      }),
    ));

    await tester.tap(find.text('Search'));
    await tester.pumpAndSettle();
    await tester.enterText(find.byType(TextField), 'jan');
    await tester.pump(const Duration(milliseconds: 300));
    await tester.pumpAndSettle();

    await tester.tap(find.text('Jan Bez Programu'));
    await tester.pumpAndSettle();

    final profile = find.byKey(const Key('speaker-profile-dialog'));
    expect(profile, findsOneWidget);
    expect(
      find.descendant(of: profile, matching: find.text('Jan Bez Programu')),
      findsOneWidget,
    );
    expect(
      find.descendant(of: profile, matching: find.text('psychoterapeut')),
      findsOneWidget,
    );
  });
}
