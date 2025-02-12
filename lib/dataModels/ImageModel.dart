import 'package:fstapp/dataModels/Tb.dart';

class ImageModel {
  int? id;
  String? link;

  ImageModel({
    this.id,
    this.link,
  });

  factory ImageModel.fromJson(Map<String, dynamic> json) {
    return ImageModel(
      id: json[Tb.images.id],
      link: json[Tb.images.link],
    );
  }

  Map<String, dynamic> toJson() {
    return {
      Tb.images.id: id,
      Tb.images.link: link,
    };
  }
}
