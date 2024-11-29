class FormOptionModel {
  static const String metaOptionsId = "code";
  static const String metaOptionsName = "name";
  static const String metaOptionsPrice = "price";

  FormOptionModel(this.code, this.name, {this.price = 0.0});

  final String name;
  final String code;
  final double price;

  @override
  String toString() => name;

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
          other is FormOptionModel &&
              runtimeType == other.runtimeType &&
              code == other.code;

  @override
  int get hashCode => code.hashCode;

  Map<String, dynamic> toJson() {
    return {
      metaOptionsName: name,
      metaOptionsId: code,
      metaOptionsPrice: price,
    };
  }
}
