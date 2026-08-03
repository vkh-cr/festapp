import 'package:fstapp/data_services/client_sync/client_command_transport.dart';
import 'package:fstapp/data_services/client_sync/client_command_response.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class PublishActivitiesResult {
  const PublishActivitiesResult({
    required this.status,
    required this.version,
    required this.historyId,
  });

  final String status;
  final int version;
  final int? historyId;
}

abstract interface class ActivityCommands {
  Future<PublishActivitiesResult> publish({
    required int occasionId,
    required int expectedVersion,
    required List<Map<String, dynamic>> activities,
    required Map<String, dynamic> history,
    required int? parentHistoryId,
  });
}

class SupabaseActivityCommands implements ActivityCommands {
  SupabaseActivityCommands(SupabaseClient client)
      : _transport = ClientCommandTransport.supabase(client);

  final ClientCommandTransport _transport;

  @override
  Future<PublishActivitiesResult> publish({
    required int occasionId,
    required int expectedVersion,
    required List<Map<String, dynamic>> activities,
    required Map<String, dynamic> history,
    required int? parentHistoryId,
  }) async {
    final raw = await _transport.invoke('publish_activities_client_sync_v1', {
      'p_occasion': occasionId,
      'p_expected_version': expectedVersion,
      'p_activities_data': activities,
      'p_history_data': history,
      'p_parent_history_id': parentHistoryId,
    });
    final response = ClientCommandResponse.from(raw);
    await response.applyReplacements();
    final data = response.data;
    return PublishActivitiesResult(
      status: response.status,
      version: (data['version'] as num).toInt(),
      historyId: (data['historyId'] as num?)?.toInt(),
    );
  }
}
