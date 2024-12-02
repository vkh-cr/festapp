
import 'BoxModel.dart';
import 'SeatModel.dart';

class SeatLayoutStateModel {
  final int rows;
  final int cols;
  final List<BoxModel> currentBoxes;
  final List<SeatModel> allBoxes;
  final int seatSize;

  const SeatLayoutStateModel({
    required this.rows,
    required this.cols,
    required this.currentBoxes,
    required this.allBoxes,
    this.seatSize = 50,
  });
}
