import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:fstapp/components/event_feedback/event_feedback_admin_content.dart';
import 'package:fstapp/components/occasion/occasion_link_model.dart';
import 'package:fstapp/components/occasion/occasion_model.dart';
import 'package:fstapp/components/users/occasion_user_model.dart';
import 'package:fstapp/data_services/rights_service.dart';

void main() {
  final feedbackRow = <String, dynamic>{
    'feedback_id': 41,
    'event_id': 7,
    'event_title': 'Program item',
    'event_start_time': '2026-08-07T10:00:00Z',
    'event_end_time': '2026-08-07T11:00:00Z',
    'rating': 'happy',
    'note': 'Great',
    'user_name': 'Test User',
    'is_anonymous': false,
    'created_at': '2026-08-07T11:00:00Z',
    'updated_at': '2026-08-07T11:00:00Z',
  };

  Widget app({required bool isAdmin}) {
    RightsService.occasionLinkModelNotifier.value = OccasionLinkModel(
      isAdmin: isAdmin,
      occasion: OccasionModel(
        id: 7,
        isOpen: true,
        isHidden: false,
        isPromoted: false,
      ),
      occasionUser: OccasionUserModel(isEditor: true, isEditorView: true),
    );
    return MaterialApp(
      home: Scaffold(
        body: EventFeedbackAdminContent(
          loadOverride: (_) async => [feedbackRow],
        ),
      ),
    );
  }

  tearDown(() => RightsService.occasionLinkModelNotifier.value = null);

  testWidgets('admin feedback grid shows the program-style delete action',
      (tester) async {
    await tester.pumpWidget(app(isAdmin: true));
    await tester.pumpAndSettle();

    expect(find.byIcon(Icons.delete_forever), findsOneWidget);
  });

  testWidgets('occasion editor without isAdmin does not get a delete action',
      (tester) async {
    await tester.pumpWidget(app(isAdmin: false));
    await tester.pumpAndSettle();

    expect(find.byIcon(Icons.delete_forever), findsNothing);
  });
}
