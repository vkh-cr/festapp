import 'package:flutter_test/flutter_test.dart';
import 'package:fstapp/components/eshop/ticket_commands.dart';
import 'package:fstapp/data_services/client_sync/client_command_transport.dart';

void main() {
  test('spot swap uses its dedicated command RPC', () async {
    late String functionName;
    final commands = SupabaseTicketCommands.withTransport(
      ClientCommandTransport((name, params) async {
        functionName = name;
        return {
          'status': 'applied',
          'code': 200,
          'data': <String, dynamic>{},
          'sync': {'replacements': <Object>[]},
        };
      }, maxAttempts: 1),
    );
    await commands.swapSpots(1, 2);
    expect(functionName, 'swap_spot_tickets_client_sync_v1');
  });

  test('ticket cancellation uses its dedicated command RPC', () async {
    late String functionName;
    final commands = SupabaseTicketCommands.withTransport(
      ClientCommandTransport((name, params) async {
        functionName = name;
        return {
          'status': 'applied',
          'code': 200,
          'data': <String, dynamic>{},
          'sync': {'replacements': <Object>[]},
        };
      }, maxAttempts: 1),
    );
    await commands.cancel([1, 2]);
    expect(functionName, 'storno_tickets_client_sync_v1');
  });
}
