class ClientActivityBucket {
  const ClientActivityBucket({
    required this.startedAt,
    required this.category,
    required this.count,
  });

  final DateTime startedAt;
  final String category;
  final int count;

  factory ClientActivityBucket.fromJson(Map<String, dynamic> json) =>
      ClientActivityBucket(
        startedAt: DateTime.parse(json['bucketStart'] as String).toLocal(),
        category: json['category'] as String,
        count: (json['activityCount'] as num?)?.toInt() ?? 0,
      );
}
