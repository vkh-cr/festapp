class NewsModel {
  final DateTime createdAt;
  String message;
  final String createdBy;
  final int id;
  int views = 0;
  bool isRead = false;

  NewsModel({
    required this.createdAt,
    required this.message,
    required this.createdBy,
    required this.id,
  });
}