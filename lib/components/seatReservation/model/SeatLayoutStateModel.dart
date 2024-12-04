
import 'package:fstapp/dataModelsEshop/BlueprintObjectModel.dart';
import 'SeatModel.dart';

class SeatLayoutStateModel {
  final int rows;
  final int cols;
  final List<BlueprintObjectModel> currentObjects;
  final List<SeatModel> allBoxes;
  final int seatSize;

  const SeatLayoutStateModel({
    required this.rows,
    required this.cols,
    required this.currentObjects,
    required this.allBoxes,
    this.seatSize = 50,
  });
}
