/// Result row returned by the `search_occasion_content` RPC (and by the
/// offline index). Mirrors the RPC's RETURNS TABLE signature:
/// (entity_type, entity_id, title, snippet, rank, start_time, parent_id, extra)
class SearchResultModel {
  final String entityType; // event | place | song | game | info | news
  final int entityId;
  final String? title;
  final String? snippet;
  final double rank;
  final DateTime? startTime;
  final int? parentId; // event.place for events
  final Map<String, dynamic> extra;

  SearchResultModel({
    required this.entityType,
    required this.entityId,
    this.title,
    this.snippet,
    this.rank = 0,
    this.startTime,
    this.parentId,
    Map<String, dynamic>? extra,
  }) : extra = extra ?? const {};

  factory SearchResultModel.fromRpc(Map<String, dynamic> json) {
    return SearchResultModel(
      entityType: json['entity_type'] as String,
      entityId: (json['entity_id'] as num).toInt(),
      title: json['title'] as String?,
      snippet: json['snippet'] as String?,
      rank: (json['rank'] as num?)?.toDouble() ?? 0,
      startTime: json['start_time'] != null
          ? DateTime.tryParse(json['start_time'].toString())?.toLocal()
          : null,
      parentId: (json['parent_id'] as num?)?.toInt(),
      extra: (json['extra'] as Map?)?.cast<String, dynamic>() ?? const {},
    );
  }
}
