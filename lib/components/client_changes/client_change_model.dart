class ClientChangeSummary {
  const ClientChangeSummary({
    required this.commitId,
    required this.occurredAt,
    required this.actorDisplay,
    required this.actorKind,
    required this.source,
    required this.changeClass,
    required this.itemCount,
    required this.components,
  });

  final String commitId;
  final DateTime occurredAt;
  final String? actorDisplay;
  final String actorKind;
  final String source;
  final String changeClass;
  final int itemCount;
  final List<Map<String, dynamic>> components;

  factory ClientChangeSummary.fromJson(Map<String, dynamic> json) =>
      ClientChangeSummary(
        commitId: json['commitId'] as String,
        occurredAt: DateTime.parse(json['occurredAt'] as String).toLocal(),
        actorDisplay: json['actorDisplay'] as String?,
        actorKind: json['actorKind'] as String,
        source: json['source'] as String,
        changeClass: json['changeClass'] as String,
        itemCount: (json['itemCount'] as num?)?.toInt() ?? 0,
        components: ((json['components'] as List?) ?? const [])
            .map((item) => (item as Map).cast<String, dynamic>())
            .toList(growable: false),
      );
}

class ClientChangeDetail {
  const ClientChangeDetail({required this.summary, required this.items});
  final Map<String, dynamic> summary;
  final List<Map<String, dynamic>> items;
}
