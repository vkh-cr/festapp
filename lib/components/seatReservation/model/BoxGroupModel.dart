import 'package:fstapp/components/seatReservation/model/BoxModel.dart';

class BoxGroupModel{
  static const String boxGroupsTable = "box_groups";
  static const String idColumn = "id";
  static const String occasionColumn = "occasion";
  static const String nameColumn = "name";

  int? id;
  int? blueprintId;
  String? name;
  List<BoxModel>? boxes = [];

  BoxGroupModel({
    this.id,
    this.blueprintId,
    this.name,
  });

  static BoxGroupModel fromJson(Map<String, dynamic> json) {
    return BoxGroupModel(
      id: json[idColumn],
      blueprintId: json[occasionColumn],
      name: json[nameColumn],
    );
  }

  Map<String, dynamic> toJson() {
    var map = {
      occasionColumn: blueprintId,
      nameColumn: name,
    };
    if(id != null)
    {
      map[idColumn] = id;
    }
    return map;
  }

  @override
  toString()
  {
    return "${name}";
  }
  List<String> alphabet = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
  ];

  String getNextBoxName()
  {
    return alphabet[boxes!.length];
  }

  @override
  int get hashCode {
    return id.hashCode;
  }

  @override bool operator ==(Object other) {
    if(other is BoxGroupModel)
    {
      return id == other.id;
    }
    return false;
  }
}