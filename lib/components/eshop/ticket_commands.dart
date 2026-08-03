import 'package:fstapp/data_services/client_sync/client_command_response.dart';
import 'package:fstapp/data_services/client_sync/client_command_transport.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

abstract interface class TicketCommands {
  Future<void> swapSpots(int firstSpotId, int secondSpotId);
  Future<void> cancel(List<int> ticketIds);
}

class SupabaseTicketCommands implements TicketCommands {
  SupabaseTicketCommands(SupabaseClient client)
      : _transport = ClientCommandTransport.supabase(client);

  SupabaseTicketCommands.withTransport(this._transport);

  final ClientCommandTransport _transport;

  @override
  Future<void> cancel(List<int> ticketIds) async {
    final response = ClientCommandResponse.from(await _transport.invoke(
      'storno_tickets_client_sync_v1',
      {'p_tickets': ticketIds},
    ));
    if (response.code != 200) {
      throw StateError('Ticket cancellation was rejected');
    }
    await response.applyReplacements();
  }

  @override
  Future<void> swapSpots(int firstSpotId, int secondSpotId) async {
    final response = ClientCommandResponse.from(await _transport.invoke(
      'swap_spot_tickets_client_sync_v1',
      {'p_spot_1': firstSpotId, 'p_spot_2': secondSpotId},
    ));
    if (response.code != 200) {
      throw StateError('Spot ticket swap was rejected');
    }
    await response.applyReplacements();
  }
}
