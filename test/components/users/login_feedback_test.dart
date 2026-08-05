import 'package:flutter_test/flutter_test.dart';
import 'package:fstapp/components/users/login_feedback.dart';

void main() {
  test('shows sign-in feedback after post-login navigation', () async {
    final events = <String>[];

    await finishSuccessfulSignIn(
      navigate: () async => events.add('navigated'),
      showFeedback: () async => events.add('feedback'),
    );

    expect(events, ['navigated', 'feedback']);
  });
}
