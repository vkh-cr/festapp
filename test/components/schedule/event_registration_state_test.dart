import 'package:flutter_test/flutter_test.dart';
import 'package:fstapp/components/schedule/event_model.dart';

void main() {
  test('successful registration immediately updates the local event state', () {
    final start = DateTime.now();
    final participantsBefore = start.millisecond;
    final event = EventModel(
      startTime: start,
      endTime: start.add(const Duration(hours: 1)),
      currentParticipants: participantsBefore,
      isSignedIn: false,
    );

    event.updateCurrentUserRegistration(isRegistered: true);

    expect(event.isSignedIn, isTrue);
    expect(event.currentParticipants, participantsBefore + 1);
  });

}
