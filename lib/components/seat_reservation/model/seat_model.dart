import 'package:fstapp/components/blueprint/blueprint_object_model.dart';

import '../utils/seat_state.dart';

class SeatModel {
  SeatState seatState;
  final int rowI;
  final int colI;
  final int seatSize;
  BlueprintObjectModel? objectModel;

  SeatModel({
    required this.objectModel,
    required this.seatState,
    required this.rowI,
    required this.colI,
    this.seatSize = 50,
  });

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
          other is SeatModel &&
              runtimeType == other.runtimeType &&
              objectModel?.id == other.objectModel?.id;

  @override
  int get hashCode => objectModel?.id.hashCode ?? 0;
}

