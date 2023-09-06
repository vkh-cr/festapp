class NewsModel {
  final DateTime createdAt;
  String message;
  final String createdBy;
  final int id;
  bool isRead = false;

  NewsModel({
    required this.createdAt,
    required this.message,
    required this.createdBy,
    required this.id,
  });
}