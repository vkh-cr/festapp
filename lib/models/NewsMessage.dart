class NewsMessage {
  final DateTime createdAt;
  final String message;
  final String createdBy;

  NewsMessage({
    required this.createdAt,
    required this.message,
    required this.createdBy,
  });
}