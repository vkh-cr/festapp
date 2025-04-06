import 'form_option_model.dart';

class FormOptionProductModel extends FormOptionModel {
  static const String metaMaximum = "maximum";
  static const String metaOrderedCount = "ordered_count";

  final double price;
  final int? maximum;
  final int? orderedCount;

  FormOptionProductModel(
      super.id,
      super.title, {
        this.price = 0.0,
        this.maximum,
        this.orderedCount,
        super.type,
        super.description,
      });

  factory FormOptionProductModel.fromJson(Map<String, dynamic> json) {
    final double priceProduct = json[FormOptionModel.metaOptionsPrice] is num
        ? (json[FormOptionModel.metaOptionsPrice] as num).toDouble()
        : 0.0;
    final int? maximum = json[metaMaximum] as int?;
    final int? orderedCount = json[metaOrderedCount] as int?;
    return FormOptionProductModel(
      json[FormOptionModel.metaValue]!,
      json[FormOptionModel.metaValue]!,
      price: priceProduct,
      description: json[FormOptionModel.metaDescription],
      maximum: maximum,
      orderedCount: orderedCount,
    );
  }

  /// Returns true if maximum is null or zero, or if orderedCount is smaller than maximum.
  bool get isEnabled =>
      (maximum == null || maximum == 0) || ((orderedCount ?? 0) < (maximum ?? 0));
}
