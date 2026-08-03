import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:fstapp/components/news/news_send_confirmation_dialog.dart';

Future<void> _pumpDialog(
  WidgetTester tester, {
  required bool isSelfOnly,
}) async {
  await tester.pumpWidget(
    MaterialApp(
      home: Scaffold(
        body: NewsSendConfirmationDialog(
          isSelfOnly: isSelfOnly,
          recipientIdentity: 'Marie Nováková · marie@example.com',
          heading: 'Změna programu',
          htmlContent: '<p>Začínáme <strong>o hodinu dříve</strong>.</p>',
        ),
      ),
    ),
  );
}

void main() {
  testWidgets('self-only confirmation makes recipient explicit',
      (tester) async {
    await _pumpDialog(tester, isSelfOnly: true);

    expect(find.byIcon(Icons.notifications_active_outlined), findsOneWidget);
    expect(find.text('FeatureNews.confirmSendTitle'), findsOneWidget);
    expect(find.text('FeatureNews.notificationAudienceSelf'), findsOneWidget);
    expect(
      find.text('Marie Nováková · marie@example.com'),
      findsOneWidget,
    );
    expect(
      find.text('FeatureNews.notificationCannotBeRecalled'),
      findsOneWidget,
    );
    expect(find.text('Začínáme o hodinu dříve.'), findsOneWidget);
  });

  testWidgets('public send confirmation identifies the broad audience',
      (tester) async {
    await _pumpDialog(tester, isSelfOnly: false);

    expect(find.byIcon(Icons.notifications_active_outlined), findsOneWidget);
    expect(find.text('FeatureNews.confirmSendTitle'), findsOneWidget);
    expect(
      find.text('FeatureNews.notificationAudienceEveryone'),
      findsOneWidget,
    );
    expect(
      find.text('FeatureNews.notificationAudienceEveryoneDetail'),
      findsOneWidget,
    );
    expect(
      find.text('FeatureNews.notificationCannotBeRecalled'),
      findsOneWidget,
    );
  });
}
