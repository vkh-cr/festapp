class NewsMessage {
  final DateTime createdAt;
  final String message;
  final String createdBy;
  final int id;
  bool isRead = false;

  NewsMessage({
    required this.createdAt,
    required this.message,
    required this.createdBy,
    required this.id,
  });
}