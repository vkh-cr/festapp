import 'package:fstapp/dataModelsEshop/BlueprintObjectModel.dart';

import '../utils/SeatState.dart';


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

}
