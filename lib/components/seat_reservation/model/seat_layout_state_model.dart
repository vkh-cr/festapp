import 'package:fstapp/components/blueprint/blueprint_object_model.dart';
import 'seat_model.dart';

class SeatLayoutStateModel {
  final int rows;
  final int cols;
  final List<BlueprintObjectModel> currentObjects;
  final List<SeatModel> allBoxes;
  final int seatSize;
  final String? backgroundSvg;

  const SeatLayoutStateModel({
    required this.rows,
    required this.cols,
    required this.currentObjects,
    required this.allBoxes,
    this.seatSize = 50,
    this.backgroundSvg,
  });
}
