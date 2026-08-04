import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:fstapp/components/news/news_form_page.dart';

void main() {
  testWidgets('keeps form actions out of the keyboard-avoiding bottom bar',
      (tester) async {
    tester.view.viewInsets = const FakeViewPadding(bottom: 300);
    addTearDown(tester.view.resetViewInsets);

    await tester.pumpWidget(
      const MaterialApp(
        home: NewsFormPage(
          editorOverride: SizedBox(height: 200),
        ),
      ),
    );

    final scaffold = tester.widget<Scaffold>(find.byType(Scaffold));
    expect(scaffold.bottomNavigationBar, isNull);
    expect(
      find.ancestor(
        of: find.text('Common.storno'),
        matching: find.byType(SingleChildScrollView),
      ),
      findsOneWidget,
    );
  });
}
