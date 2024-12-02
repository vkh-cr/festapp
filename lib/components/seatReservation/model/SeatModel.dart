import '../utils/SeatState.dart';
import 'BoxModel.dart';


class SeatModel {
  SeatState seatState;
  final int rowI;
  final int colI;
  final int seatSize;
  BoxModel? boxModel;

  SeatModel({
    required this.boxModel,
    required this.seatState,
    required this.rowI,
    required this.colI,
    this.seatSize = 50,
  });

}
