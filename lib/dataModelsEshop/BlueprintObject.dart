class BlueprintObject {
  static const String metaX = "x";
  static const String metaY = "y";
  static const String metaSpot = "spot";
  static const String metaType = "type";
  static const String metaState = "state";
  static const String metaTitle = "title";
  static const String metaId = "id";


  int? x;
  int? y;
  int? id;
  int? spot;
  String? type;
  String? state;
  String? title;

  factory BlueprintObject.fromJson(Map<String, dynamic> json) {
    return BlueprintObject(
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

  BlueprintObject({
    this.x,
    this.y,
    this.id,
    this.spot,
    this.type,
    this.state,
    this.title,
  });
}
