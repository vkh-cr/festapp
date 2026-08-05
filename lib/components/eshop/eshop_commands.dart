import 'package:fstapp/data_services/client_sync/client_command_response.dart';
import 'package:fstapp/data_services/client_sync/client_command_transport.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

abstract interface class EshopCommands {
  Future<void> deleteProduct(int productId);
  Future<int> saveProduct(Map<String, dynamic> product);
  Future<Map<String, dynamic>> updateTicketProducts(
    int ticketId,
    List<Map<String, dynamic>> products,
  );
  Future<void> updateProductInventoryContexts(
    int productId,
    List<Map<String, dynamic>> contexts,
  );
}

class SupabaseEshopCommands implements EshopCommands {
  SupabaseEshopCommands(SupabaseClient client)
      : _transport = ClientCommandTransport.supabase(client);

  SupabaseEshopCommands.withTransport(this._transport);

  final ClientCommandTransport _transport;

  @override
  Future<void> deleteProduct(int productId) async {
    final response = ClientCommandResponse.from(await _transport.invoke(
      'delete_product_client_sync_v1',
      {'p_product_id': productId},
    ));
    if (response.code != 200) {
      throw StateError(
        response.data['message']?.toString() ?? 'Product deletion was rejected',
      );
    }
    await response.applyReplacements();
  }

  @override
  Future<Map<String, dynamic>> updateTicketProducts(
    int ticketId,
    List<Map<String, dynamic>> products,
  ) async {
    final response = ClientCommandResponse.from(await _transport.invoke(
      'update_ticket_products_client_sync_v1',
      {'p_ticket': ticketId, 'p_products': products},
    ));
    if (response.code != 200) {
      throw StateError('Ticket product update was rejected');
    }
    await response.applyReplacements();
    return response.data;
  }

  @override
  Future<int> saveProduct(Map<String, dynamic> product) async {
    final response = ClientCommandResponse.from(await _transport.invoke(
      'update_product_client_sync_v1',
      {'p_product': product},
    ));
    if (response.code != 200 || response.data['productId'] is! num) {
      throw StateError('Product save was rejected');
    }
    await response.applyReplacements();
    return (response.data['productId'] as num).toInt();
  }

  @override
  Future<void> updateProductInventoryContexts(
    int productId,
    List<Map<String, dynamic>> contexts,
  ) async {
    final response = ClientCommandResponse.from(await _transport.invoke(
      'update_product_inventory_contexts_client_sync_v1',
      {'p_product_id': productId, 'p_contexts': contexts},
    ));
    if (response.code != 200) {
      throw StateError('Product inventory context update was rejected');
    }
    await response.applyReplacements();
  }
}
