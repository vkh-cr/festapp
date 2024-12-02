import 'package:fstapp/components/seatReservation/utils/SeatState.dart';
import 'package:fstapp/dataModelsEshop/BlueprintGroup.dart';

class BlueprintObjectModel {
  static const String metaX = "x";
  static const String metaY = "y";
  static const String metaSpot = "spot";
  static const String metaType = "type";
  static const String metaState = "state";
  static const String metaTitle = "title";
  static const String metaId = "id";

  static const String soldType = "sold";
  static const String selectedType = "selected";
  static const String selectedByMeType = "selected_by_me";
  static const String blackType = "black";
  static const String availableType = "available";

  static Map<SeatState, String> States = {
    SeatState.black: blackType,
    SeatState.available: availableType,
    SeatState.selected: selectedType,
    SeatState.selected_by_me: selectedByMeType,
    SeatState.ordered: soldType,
  };

  @override
  toString()
  {
    return "stůl $group, sedadlo $title";
  }

  toShortString()
  {
    return "${group??""}${title??""}";
  }

  int? x;
  int? y;
  int? id;
  int? spot;
  String? type;
  String? state;
  String? title;
  BlueprintGroupModel? group;
  SeatState? stateEnum;

  factory BlueprintObjectModel.fromJson(Map<String, dynamic> json) {
    return BlueprintObjectModel(
      x: json[metaX],
      y: json[metaY],
      id: json[metaId],
      spot: json[metaSpot],
      type: json[metaType],
      state: json[metaState],
      title: json[metaTitle],
    );
  }

  Map<String, dynamic> toJson() => {
    metaX: x,
    metaY: y,
    metaId: id,
    metaSpot: spot,
    metaType: type,
    metaState: state,
    metaTitle: title,
  };

  BlueprintObjectModel({
    this.x,
    this.y,
    this.id,
    this.spot,
    this.type,
    this.state,
    this.stateEnum,
    this.title,
  });
}
