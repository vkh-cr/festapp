import 'package:fstapp/data_services/client_sync/client_command_transport.dart';
import 'package:fstapp/data_services/client_sync/client_command_response.dart';
import 'package:fstapp/data_services/client_sync/client_sync_protocol.dart';
import 'package:fstapp/data_services/client_sync/client_sync_runtime.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

enum SavedProgramMode { join, remove, replace }

abstract interface class SavedProgramCommands {
  Future<List<int>> update(List<int> eventIds, SavedProgramMode mode);
}

class SupabaseSavedProgramCommands implements SavedProgramCommands {
  SupabaseSavedProgramCommands(SupabaseClient client, this._occasionId)
      : _transport = ClientCommandTransport.supabase(client);

  SupabaseSavedProgramCommands.withTransport(
    this._transport,
    this._occasionId,
  );

  final ClientCommandTransport _transport;
  final int _occasionId;

  @override
  Future<List<int>> update(List<int> eventIds, SavedProgramMode mode) async {
    final raw = await _transport.invoke('set_saved_program_client_sync_v1', {
      'p_occasion': _occasionId,
      'p_event_ids': eventIds.toSet().toList()..sort(),
      'p_mode': mode.name,
    });
    final response = ClientCommandResponse.from(raw);
    await response.applyReplacements();
    final data = response.data;
    final saved = ((data['saved'] as List?) ?? const [])
        .whereType<num>()
        .map((id) => id.toInt())
        .toList(growable: false);
    await ClientSyncRuntime.patchPrivateComponent(
      component: ClientSyncComponent.privateProgram,
      fields: {'saved': saved},
    );
    return saved;
  }
}
