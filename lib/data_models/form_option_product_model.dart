import 'form_option_model.dart';

class FormOptionProductModel extends FormOptionModel {
  static const String metaMaximum = "maximum";
  static const String metaOrderedCount = "ordered_count";
  static const String metaCurrencyCode = "currency_code";

  final double price;
  final int? maximum;
  final int? orderedCount;
  final String? currencyCode;

  FormOptionProductModel(
      super.id,
      super.title, {
        this.price = 0.0,
        this.maximum,
        this.orderedCount,
        this.currencyCode,
        super.type,
        super.description,
      });

  /// Returns true if maximum is null or zero, or if orderedCount is smaller than maximum.
  bool get isEnabled =>
      (maximum == null || maximum == 0) || ((orderedCount ?? 0) < (maximum ?? 0));
}
