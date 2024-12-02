
import '../utils/SeatState.dart';
import 'BoxGroupModel.dart';

class BoxModel{
  static const String soldType = "sold";
  static const String selectedType = "selected";
  static const String blackType = "black";
  static const String availableType = "available";

  static const String boxTable = "boxes";

  static const SeatState stateColumn = SeatState.empty;

  int? id;
  String? name;
  SeatState? type;
  int? boxGroupId;
  BoxGroupModel? boxGroup;
  int? x;
  int? y;

  BoxModel({
    this.id,
    this.name,
    this.type,
    this.boxGroupId,
    this.boxGroup,
    this.x,
    this.y
  });

  static Map<SeatState, String> States = {
    SeatState.black: blackType,
    SeatState.available: availableType,
    SeatState.selected: selectedType,
    SeatState.ordered: soldType,
  };

  @override
  toString()
  {
    return "stůl ${boxGroup}, sedadlo ${name}";
  }

  toShortString()
  {
    return "${boxGroup??""}${name??""}";
  }
}