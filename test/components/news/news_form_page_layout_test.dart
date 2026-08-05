import 'package:flutter/material.dart';
import 'package:flutter_quill/flutter_quill.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:fstapp/components/html/native_html_editor_widget.dart';
import 'package:fstapp/components/news/news_form_page.dart';

void main() {
  test('uses the native editor across Flutter Web platforms', () {
    for (final platform in TargetPlatform.values) {
      expect(
        shouldUseNativeNewsEditor(isWeb: true, platform: platform),
        isTrue,
        reason: 'Web dialogs must not compete with an iframe on $platform',
      );
    }
    expect(
      shouldUseNativeNewsEditor(
        isWeb: false,
        platform: TargetPlatform.android,
      ),
      isFalse,
    );
  });

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

  testWidgets('renders the iframe-free rich HTML editor', (tester) async {
    await tester.pumpWidget(
      MaterialApp(
        localizationsDelegates: const [FlutterQuillLocalizations.delegate],
        home: const NewsFormPage(useNativeHtmlEditor: true),
      ),
    );

    expect(
        find.byKey(const ValueKey('news-native-html-editor')), findsOneWidget);
    expect(find.byType(QuillEditor), findsOneWidget);
    expect(find.byKey(const ValueKey('news-plain-text-editor')), findsNothing);
  });

  test('native editor exports rich formatting as HTML', () {
    final controller = NativeHtmlEditorController();
    addTearDown(controller.dispose);

    controller.quillController.document.insert(0, 'Důležitá zpráva');
    controller.quillController.formatText(0, 8, Attribute.bold);

    expect(controller.getHtml(), contains('<strong>Důležitá</strong>'));
  });

  testWidgets('shows feedback when send is pressed without message content',
      (tester) async {
    await tester.pumpWidget(
      MaterialApp(
        localizationsDelegates: const [FlutterQuillLocalizations.delegate],
        home: const NewsFormPage(useNativeHtmlEditor: true),
      ),
    );

    await tester.tap(find.text('FeatureNews.notificationAudienceSelf'));
    await tester.pump();
    await tester.ensureVisible(find.text('FeatureNews.publishAndSendSelf'));
    await tester.tap(find.text('FeatureNews.publishAndSendSelf'));
    await tester.pump();

    expect(find.text('FeatureNews.contentRequired'), findsOneWidget);
  });
}
