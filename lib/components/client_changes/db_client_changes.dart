import 'package:fstapp/components/client_changes/client_change_model.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class ClientChangesPage {
  const ClientChangesPage(this.items, this.nextTime, this.nextId);
  final List<ClientChangeSummary> items;
  final DateTime? nextTime;
  final String? nextId;
}

class DbClientChanges {
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
      'p_limit': 50,
      'p_filters': filters,
    });
    final json = (raw as Map).cast<String, dynamic>();
    if (json['code'] != 200) {
      throw StateError('Commit audit returned ${json['code']}');
    }
    final items = ((json['data'] as List?) ?? const [])
        .map((item) =>
            ClientChangeSummary.fromJson((item as Map).cast<String, dynamic>()))
        .toList(growable: false);
    final last = items.isEmpty ? null : items.last;
    return ClientChangesPage(items, last?.occurredAt, last?.commitId);
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
