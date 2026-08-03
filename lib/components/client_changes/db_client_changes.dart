import 'package:fstapp/components/client_changes/client_change_model.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class ClientChangesPage {
  const ClientChangesPage(this.items, this.nextTime, this.nextId, this.hasMore);
  final List<ClientChangeSummary> items;
  final DateTime? nextTime;
  final String? nextId;
  final bool hasMore;
}

class DbClientChanges {
  // The public audit contract is capped at 200 rows. Reserve the final row as
  // a next-page probe so navigation never needs an extra request.
  static const pageSize = 199;

  DbClientChanges([SupabaseClient? client])
      : _client = client ?? Supabase.instance.client;
  final SupabaseClient _client;

  Future<ClientChangesPage> list({
    required int occasionId,
    DateTime? beforeTime,
    String? beforeId,
    Map<String, dynamic> filters = const {},
  }) async {
    final raw = await _client.rpc('get_client_commits_v1', params: {
      'p_occasion': occasionId,
      'p_before_time': beforeTime?.toUtc().toIso8601String(),
      'p_before_id': beforeId,
      // Fetch one extra row so the UI knows whether a next page exists without
      // issuing a probe request after the last full page.
      'p_limit': pageSize + 1,
      'p_filters': filters,
    });
    final json = (raw as Map).cast<String, dynamic>();
    if (json['code'] != 200) {
      throw StateError('Commit audit returned ${json['code']}');
    }
    final fetched = ((json['data'] as List?) ?? const [])
        .map((item) =>
            ClientChangeSummary.fromJson((item as Map).cast<String, dynamic>()))
        .toList();
    final hasMore = fetched.length > pageSize;
    final items = fetched.take(pageSize).toList(growable: false);
    final last = items.isEmpty ? null : items.last;
    return ClientChangesPage(items, last?.occurredAt, last?.commitId, hasMore);
  }

  Future<ClientChangeDetail> detail(String commitId) async {
    final raw = await _client
        .rpc('get_client_commit_v1', params: {'p_commit_id': commitId});
    final json = (raw as Map).cast<String, dynamic>();
    if (json['code'] != 200) {
      throw StateError('Commit detail returned ${json['code']}');
    }
    final data = (json['data'] as Map).cast<String, dynamic>();
    return ClientChangeDetail(
      summary: data,
      items: ((data['items'] as List?) ?? const [])
          .map((item) => (item as Map).cast<String, dynamic>())
          .toList(growable: false),
    );
  }
}
