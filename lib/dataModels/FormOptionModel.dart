import 'package:fstapp/pages/form/widgets_view/form_helper.dart';

class FormOptionModel {
  static const String metaValue = "value";
  static const String metaDescription = "description";

  static const String metaOptionsId = "id";
  static const String metaOptionsName = "name";
  static const String metaOptionsPrice = "price";

  final String type;
  String title;
  String? description;
  final String id;

  FormOptionModel(this.id, this.title, {this.type = FormHelper.fieldTypeSelectOne, this.description});

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
      json[metaValue]!, json[metaValue]!, description: json[metaDescription]
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
    };
  }
}
