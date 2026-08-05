import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:fstapp/components/features/feature.dart';
import 'package:fstapp/components/features/feature_constants.dart';
import 'package:fstapp/components/features/feature_service.dart';
import 'package:fstapp/components/schedule/program_notification_settings.dart';

void main() {
  test('program notification feature cannot currently be enabled', () {
    final parsed = Feature.fromJson({
      FeatureConstants.metaCode: FeatureConstants.programNotifications,
      FeatureConstants.metaIsEnabled: true,
    });

    expect(parsed, isA<ProgramNotificationsFeature>());
    expect(parsed.isEnabled, isFalse);
    expect(parsed.canBeDisabled, isFalse);
    expect(
      FeatureService.isProgramNotificationsEnabled(features: [parsed]),
      isFalse,
    );
  });

  testWidgets('user can enable reminders and select the lead time',
      (tester) async {
    await tester.pumpWidget(
      const MaterialApp(
        home: Scaffold(body: ProgramNotificationSettingsCard()),
      ),
    );
    await tester.pumpAndSettle();

    await tester.tap(find.byType(SwitchListTile));
    await tester.pumpAndSettle();
    await tester.tap(find.byType(ChoiceChip).at(2));
    await tester.pumpAndSettle();

    expect(
      tester.widget<SwitchListTile>(find.byType(SwitchListTile)).value,
      isTrue,
    );
    expect(
      tester.widget<ChoiceChip>(find.byType(ChoiceChip).at(2)).selected,
      isTrue,
    );
  });
}
