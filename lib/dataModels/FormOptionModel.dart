import 'package:fstapp/services/FormHelper.dart';

class FormOptionModel {
  static const String metaValue = "value";
  static const String metaOptionsId = "id";
  static const String metaOptionsName = "name";
  static const String metaOptionsPrice = "price";

  final String type;
  final String title;
  final String id;
  final double price;

  FormOptionModel(this.id, this.title, {this.price = 0.0, this.type = FormHelper.fieldTypeSelectOne});

  @override
  String toString() => title;

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
          other is FormOptionModel &&
              runtimeType == other.runtimeType &&
              id == other.id;

  @override
  int get hashCode => id.hashCode;

  factory FormOptionModel.fromJson(Map<String, dynamic> json) {
    return FormOptionModel(
      json[metaValue]!, json[metaValue]!
    );
  }

  dynamic toJson() {
    if(type == FormHelper.fieldTypeSelectOne){
      return title;
    }
    return id;
    return {
      metaOptionsName: title,
      metaOptionsId: id,
      metaOptionsPrice: price,
    };
  }
}
