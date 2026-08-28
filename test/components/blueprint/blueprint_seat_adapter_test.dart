import 'package:flutter_test/flutter_test.dart';
import 'package:fstapp/components/blueprint/blueprint_object_model.dart';
import 'package:venue_seat_picker/venue_seat_picker.dart';

void main() {
  test('BlueprintObjectModel satisfies the package seat contract', () {
    final object = BlueprintObjectModel(
      id: 42,
      x: 3,
      y: 2,
      title: 'A1',
      state: BlueprintObjectModel.blackType,
    );

    expect(object.seatId, 42);
    expect(object.seatRow, 2);
    expect(object.seatColumn, 3);
    expect(object.seatState, SeatState.blocked);

    object.seatState = SeatState.selectedByMe;
    expect(object.stateEnum, SeatState.selectedByMe);
    expect(object.state, BlueprintObjectModel.selectedByMeType);
  });

  test('missing coordinates are rejected instead of becoming zero', () {
    final object = BlueprintObjectModel(id: 42);

    expect(() => object.seatRow, throwsStateError);
    expect(() => object.seatColumn, throwsStateError);
  });
}
