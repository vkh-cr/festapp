class ServiceItemModel {
  String? title;
  final String code;
  int? reference;

  ServiceItemModel({
    required this.title,
    required this.code,
    required this.reference,
  });

  @override
  String toString() {
    return 'ServiceItem(title: $title, code: $code, reference: $reference)';
  }

  factory ServiceItemModel.fromJson(Map<String, dynamic> json) {
    return ServiceItemModel(
      title: json["title"],
      code: json["code"],
      reference: json["reference"],
    );
  }
}