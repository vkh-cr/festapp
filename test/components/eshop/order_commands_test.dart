import 'package:flutter_test/flutter_test.dart';
import 'package:fstapp/components/eshop/order_commands.dart';
import 'package:fstapp/data_services/client_sync/client_command_transport.dart';

void main() {
  test('order delete uses its dedicated command RPC', () async {
    late String functionName;
    final commands = SupabaseOrderCommands.withTransport(
      ClientCommandTransport((name, params) async {
        functionName = name;
        return {
          'status': 'applied',
          'code': 200,
          'data': {'orderId': 5},
          'sync': {'replacements': <Object>[]},
        };
      }, maxAttempts: 1),
    );
    await commands.delete(5);
    expect(functionName, 'delete_order_client_sync_v1');
  });

  test('order cancellation uses its dedicated command RPC', () async {
    late String functionName;
    final commands = SupabaseOrderCommands.withTransport(
      ClientCommandTransport((name, params) async {
        functionName = name;
        return {
          'status': 'applied',
          'code': 200,
          'data': {'orderId': 5},
          'sync': {'replacements': <Object>[]},
        };
      }, maxAttempts: 1),
    );
    await commands.cancel(5);
    expect(functionName, 'storno_order_client_sync_v1');
  });
}
