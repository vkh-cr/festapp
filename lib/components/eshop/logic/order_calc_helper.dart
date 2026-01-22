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

  static List<ProductModel> _parseProducts(List<dynamic> rawProducts) {
    return rawProducts
        .map((p) {
          if (p is! Map<String, dynamic>) return null;
          // Check if it looks like a simplified order data product
          // It usually hash 'id', 'price', 'title', 'type' directly, not in 'data' map
          // ProductModel.fromJson expects 'created_at', 'price', etc. from DB columns,
          // but 'data' field for dynamic stuff.

          // Manually construct ProductModel from simplified JSON
          return ProductModel(
            id: p['id'],
            title: p['title'],
            price: p['price'] is num
                ? (p['price'] as num).toDouble()
                : double.tryParse(p['price'].toString()),
            productTypeTitleString: p['type_title'],
            data: {},
          );
        })
        .whereType<ProductModel>()
        .toList();
  }

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
          referenceProducts.addAll(_parseProducts(t["products"]));
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
            currentAllProducts.addAll(_parseProducts(t["products"]));
          }
        }
      }
    }

    // Now calculate diff between referenceProducts and currentAllProducts
    // We use "bag difference" logic to handle multiple instances of the same product ID.

    final referenceProdsMutable = [...referenceProducts];
    final currentProdsMutable = [...currentAllProducts];

    final added = <ProductModel>[];
    final removed = <ProductModel>[];
    final changed = <Map<String, ProductModel>>[];

    // 1. Find exact matches (id and content invariant) and remove them from both
    for (int i = currentProdsMutable.length - 1; i >= 0; i--) {
      final currentP = currentProdsMutable[i];
      // Find a reference product that exactly matches ID and price/title
      final matchIndex = referenceProdsMutable.indexWhere((refP) =>
          refP.id == currentP.id &&
          _isPriceEqual(refP.price, currentP.price) &&
          refP.title == currentP.title);

      if (matchIndex > -1) {
        // Exact match found, so it's unchanged. Remove from both bags.
        currentProdsMutable.removeAt(i);
        referenceProdsMutable.removeAt(matchIndex);
      }
    }

    // 2. Find changed matches (same ID, different content)
    for (int i = currentProdsMutable.length - 1; i >= 0; i--) {
      final currentP = currentProdsMutable[i];
      // Find a reference product with same ID (we know it's different content now because exact matches are gone)
      final matchIndex =
          referenceProdsMutable.indexWhere((refP) => refP.id == currentP.id);

      if (matchIndex > -1) {
        final refP = referenceProdsMutable[matchIndex];
        changed.add({'from': refP, 'to': currentP});

        currentProdsMutable.removeAt(i);
        referenceProdsMutable.removeAt(matchIndex);
      }
    }

    // 3. Remaining in current are Added
    added.addAll(currentProdsMutable);

    // 4. Remaining in reference are Removed
    removed.addAll(referenceProdsMutable);

    final referenceTotal = referenceProducts.fold<double>(
        0.0, (sum, item) => sum + (item.price ?? 0));
    final currentTotal = currentAllProducts.fold<double>(
        0.0, (sum, item) => sum + (item.price ?? 0));

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

  static List<ProductModel> _getProductsForTicket(
      OrderModel? order, int ticketId) {
    if (order?.data == null || order!.data!["tickets"] is! List) return [];
    final ticket = (order.data!["tickets"] as List)
        .firstWhereOrNull((t) => t is Map && t["id"] == ticketId);
    if (ticket == null || ticket["products"] is! List) return [];

    return _parseProducts(ticket["products"]);
  }

  static bool _hasDiiference(
      List<ProductModel> list1, List<ProductModel> list2) {
    // Keeping typo for now to avoid large refactor
    final added =
        list2.where((p) => !list1.any((o) => o.id == p.id)).isNotEmpty;
    if (added) return true;

    final removed =
        list1.where((p) => !list2.any((c) => c.id == p.id)).isNotEmpty;
    if (removed) return true;

    for (var p2 in list2) {
      final p1 = list1.firstWhereOrNull((p) => p.id == p2.id);
      if (p1 != null &&
          (!_isPriceEqual(p1.price, p2.price) || p1.title != p2.title))
        return true;
    }

    return false;
  }

  static bool _isPriceEqual(double? p1, double? p2) {
    if (p1 == null && p2 == null) return true;
    if (p1 == null || p2 == null) return false;
    return (p1 - p2).abs() < 0.001;
  }
}
