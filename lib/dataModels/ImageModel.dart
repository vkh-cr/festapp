import 'package:fstapp/dataModels/Tb.dart';

class ImageModel {
  int? id;
  String? link;
  int? unit;
  int? occasion;

  ImageModel({
    this.id,
    this.link,
    this.unit,
    this.occasion,
  });

  factory ImageModel.fromJson(Map<String, dynamic> json) {
    return ImageModel(
      id: json[Tb.images.id],
      link: json[Tb.images.link],
      unit: json[Tb.images.unit],
      occasion: json[Tb.images.occasion],
    );
  }

  Map<String, dynamic> toJson() {
    return {
      Tb.images.id: id,
      Tb.images.link: link,
      Tb.images.unit: unit,
      Tb.images.occasion: occasion,
    };
  }
}
