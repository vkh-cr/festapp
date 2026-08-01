import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:fstapp/components/news/news_notification_audience_selector.dart';

Future<void> _pumpSelector(
  WidgetTester tester, {
  NewsNotificationAudience? selected,
  bool allowEveryone = true,
  required ValueChanged<NewsNotificationAudience> onChanged,
}) async {
  await tester.pumpWidget(
    MaterialApp(
      home: Scaffold(
        body: SingleChildScrollView(
          child: NewsNotificationAudienceSelector(
            selected: selected,
            onChanged: onChanged,
            currentUserIdentity: 'Marie · marie@example.com',
            allowEveryone: allowEveryone,
          ),
        ),
      ),
    ),
  );
}

void main() {
  testWidgets('shows no-push, self and everyone as explicit choices',
      (tester) async {
    NewsNotificationAudience? chosen;
    await _pumpSelector(
      tester,
      onChanged: (value) => chosen = value,
    );

    expect(find.text('FeatureNews.newsWithoutNotification'), findsOneWidget);
    expect(find.text('FeatureNews.notificationAudienceSelf'), findsOneWidget);
    expect(
      find.text('FeatureNews.notificationAudienceEveryone'),
      findsOneWidget,
    );
    expect(find.byIcon(Icons.radio_button_checked), findsNothing);

    await tester.tap(find.text('FeatureNews.notificationAudienceSelf'));
    expect(chosen, NewsNotificationAudience.self);
  });

  testWidgets('marks the chosen audience and can hide public delivery',
      (tester) async {
    await _pumpSelector(
      tester,
      selected: NewsNotificationAudience.self,
      allowEveryone: false,
      onChanged: (_) {},
    );

    expect(find.byIcon(Icons.radio_button_checked), findsOneWidget);
    expect(
      find.text('FeatureNews.notificationAudienceEveryone'),
      findsNothing,
    );
    expect(
      find.text('FeatureNews.notificationAudienceSelfDetail'),
      findsOneWidget,
    );
  });
}
