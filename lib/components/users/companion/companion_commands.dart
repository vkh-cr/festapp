import 'package:fstapp/components/users/companion/companion_model.dart';
import 'package:fstapp/data_services/client_sync/client_command_response.dart';
import 'package:fstapp/data_services/client_sync/client_command_transport.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

abstract interface class CompanionCommands {
  Future<CompanionModel> create(int occasionId, String name);
  Future<void> delete(int occasionId, String companionId);
}

class SupabaseCompanionCommands implements CompanionCommands {
  SupabaseCompanionCommands(SupabaseClient client)
      : _transport = ClientCommandTransport.supabase(client);

  SupabaseCompanionCommands.withTransport(this._transport);

  final ClientCommandTransport _transport;

  @override
  Future<CompanionModel> create(int occasionId, String name) async {
    final response = ClientCommandResponse.from(await _transport.invoke(
      'create_companion_client_sync_v1',
      {'p_occasion': occasionId, 'p_name': name},
    ));
    await response.applyReplacements();
    final raw = response.data['companion'];
    if (response.code != 200 || response.status != 'applied' || raw is! Map) {
      throw StateError('Companion create was rejected');
    }
    return CompanionModel.fromJson(raw.cast<String, dynamic>());
  }

  @override
  Future<void> delete(int occasionId, String companionId) async {
    final response = ClientCommandResponse.from(await _transport.invoke(
      'delete_companion_client_sync_v1',
      {'p_occasion': occasionId, 'p_companion': companionId},
    ));
    await response.applyReplacements();
    if (response.code != 200 ||
        (response.status != 'applied' && response.status != 'unchanged')) {
      throw StateError('Companion delete was rejected');
    }
  }
}
