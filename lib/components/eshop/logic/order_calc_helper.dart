import 'package:collection/collection.dart';
import 'package:fstapp/components/eshop/models/order_model.dart';
import 'package:fstapp/components/eshop/models/product_model.dart';

class OrderCalcHelper {
  final List<ProductModel> added;
  final List<ProductModel> removed;
  final List<Map<String, ProductModel>> changed;
  final double referenceTotal;
  final double currentTotal;
  final bool hasChangesFromOtherTickets;

  OrderCalcHelper({
    required this.added,
    required this.removed,
    required this.changed,
    required this.referenceTotal,
    required this.currentTotal,
    required this.hasChangesFromOtherTickets,
  });

  static OrderCalcHelper calculateGlobalOrderChanges({
    required OrderModel? referenceOrder,
    required OrderModel? currentOrder,
    required int currentTicketId,
    required List<ProductModel> currentTicketProducts,
  }) {
    // Safe parsing for reference order
    List<ProductModel> referenceProducts = [];
    final refData = referenceOrder?.data;
    if (refData != null && refData["tickets"] is List) {
      final tickets = refData["tickets"] as List;
      for (var t in tickets) {
        if (t is Map && t["products"] is List) {
          referenceProducts.addAll((t["products"] as List)
              .map((p) => p is Map<String, dynamic> ? ProductModel.fromJson(p) : null)
              .whereType<ProductModel>()); // Filter out nulls if any
        }
      }
    }

    // Safe parsing for current order
    List<ProductModel> currentAllProducts = [];
    final curData = currentOrder?.data;
    if (curData != null && curData["tickets"] is List) {
      final tickets = curData["tickets"] as List;
      for (var t in tickets) {
        if (t is! Map) continue;
        final tId = (t["id"] as int?);
        if (tId == currentTicketId) {
          // Use the unsaved state for the current ticket
          currentAllProducts.addAll(currentTicketProducts);
        } else {
          // Use the saved state for other tickets
          if (t["products"] is List) {
            currentAllProducts.addAll((t["products"] as List)
                .map((p) => p is Map<String, dynamic> ? ProductModel.fromJson(p) : null)
                .whereType<ProductModel>());
          }
        }
      }
    }

    // Now calculate diff between referenceProducts and currentAllProducts
    final added = currentAllProducts.where((p) => !referenceProducts.any((o) => o.id == p.id)).toList();
    final removed = referenceProducts.where((p) => !currentAllProducts.any((c) => c.id == p.id)).toList();
    final changed = <Map<String, ProductModel>>[];

    for (var currentP in currentAllProducts) {
      final refP = referenceProducts.firstWhereOrNull((p) => p.id == currentP.id);
      if (refP != null && currentP.price != refP.price) {
        changed.add({'from': refP, 'to': currentP});
      }
    }

    final referenceTotal = referenceProducts.fold<double>(0.0, (sum, item) => sum + (item.price ?? 0));
    final currentTotal = currentAllProducts.fold<double>(0.0, (sum, item) => sum + (item.price ?? 0));

    // Check for changes in other tickets
    bool hasChangesFromOtherTickets = false;

    // Collect all ticket IDs involved (except current)
    final allTicketIds = <int>{};
    if (refData != null && refData["tickets"] is List) {
      for (var t in refData["tickets"]) {
        if (t is Map && t["id"] is int) allTicketIds.add(t["id"]);
      }
    }
    if (curData != null && curData["tickets"] is List) {
      for (var t in curData["tickets"]) {
        if (t is Map && t["id"] is int) allTicketIds.add(t["id"]);
      }
    }
    allTicketIds.remove(currentTicketId);

    for (var tId in allTicketIds) {
      final refProds = _getProductsForTicket(referenceOrder, tId);
      final curProds = _getProductsForTicket(currentOrder, tId);
      
      if (_hasDiiference(refProds, curProds)) {
        hasChangesFromOtherTickets = true;
        break;
      }
    }

    return OrderCalcHelper(
      added: added,
      removed: removed,
      changed: changed,
      referenceTotal: referenceTotal,
      currentTotal: currentTotal,
      hasChangesFromOtherTickets: hasChangesFromOtherTickets,
    );
  }

  static List<ProductModel> _getProductsForTicket(OrderModel? order, int ticketId) {
    if (order?.data == null || order!.data!["tickets"] is! List) return [];
    final ticket = (order.data!["tickets"] as List).firstWhereOrNull((t) => t is Map && t["id"] == ticketId);
    if (ticket == null || ticket["products"] is! List) return [];
    
    return (ticket["products"] as List)
        .map((p) => p is Map<String, dynamic> ? ProductModel.fromJson(p) : null)
        .whereType<ProductModel>()
        .toList();
  }

  static bool _hasDiiference(List<ProductModel> list1, List<ProductModel> list2) {
    final added = list2.where((p) => !list1.any((o) => o.id == p.id)).isNotEmpty;
    if (added) return true;
    
    final removed = list1.where((p) => !list2.any((c) => c.id == p.id)).isNotEmpty;
    if (removed) return true;

    for (var p2 in list2) {
      final p1 = list1.firstWhereOrNull((p) => p.id == p2.id);
      if (p1 != null && p1.price != p2.price) return true;
    }
    
    return false;
  }
}
