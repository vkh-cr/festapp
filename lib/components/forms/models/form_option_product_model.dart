import 'form_option_model.dart';

class FormOptionProductModel extends FormOptionModel {
  static const String metaMaximum = "maximum";
  static const String metaOrderedCount = "ordered_count";
  static const String metaCurrencyCode = "currency_code";
  static const String metaIsDynamicallyAvailable = "is_available_dynamic_capacity";

  final double price;
  final int? maximum;
  final int? orderedCount;
  final String? currencyCode;
  final bool? isDynamicallyAvailable;

  FormOptionProductModel(
      super.id,
      super.title, {
        this.price = 0.0,
        this.maximum,
        this.orderedCount,
        this.currencyCode,
        this.isDynamicallyAvailable,
        super.type,
        super.description,
      });

  /// Returns true if the product has capacity and is dynamically available.
  /// It checks static limits (`maximum` vs `orderedCount`) and the dynamic availability flag from the backend.
  /// If `isDynamicallyAvailable` is null, it's treated as true to ensure backward compatibility.
  bool get isAvailable =>
      ((maximum == null || maximum == 0) || ((orderedCount ?? 0) < (maximum ?? 0))) && (isDynamicallyAvailable ?? true);
}