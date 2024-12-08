class FormOptionModel {
  static const String metaOptionsId = "id";
  static const String metaOptionsName = "name";
  static const String metaOptionsPrice = "price";

  final String name;
  final String id;
  final double price;

  FormOptionModel(this.id, this.name, {this.price = 0.0});

  factory FormOptionModel.fromJson(Map<String, dynamic> json) {
    return FormOptionModel(
      json[metaOptionsId],
      json[metaOptionsName],
      price: (json[metaOptionsPrice] as num?)?.toDouble() ?? 0.0,
    );
  }

  @override
  String toString() => name;

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
          other is FormOptionModel &&
              runtimeType == other.runtimeType &&
              id == other.id;

  @override
  int get hashCode => id.hashCode;

  Map<String, dynamic> toJson() {
    return {
      metaOptionsName: name,
      metaOptionsId: id,
      metaOptionsPrice: price,
    };
  }
}
