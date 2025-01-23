class FormOptionModel {
  static const String metaOptionsId = "id";
  static const String metaOptionsName = "name";
  static const String metaOptionsPrice = "price";

  final String title;
  final String id;
  final double price;

  FormOptionModel(this.id, this.title, {this.price = 0.0});

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

  dynamic toJson() {
    return id;
    return {
      metaOptionsName: title,
      metaOptionsId: id,
      metaOptionsPrice: price,
    };
  }
}
