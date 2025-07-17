import 'package:fstapp/components/eshop/models/tb_eshop.dart';
import 'inventory_context_model.dart';

class ProductInventoryContextModel {
  int? id;
  int productId;
  int inventoryContextId;
  int quantity;
  InventoryContextModel? inventoryContext;

  ProductInventoryContextModel({
    this.id,
    required this.productId,
    required this.inventoryContextId,
    required this.quantity,
    this.inventoryContext,
  });

  /// **Creates a `ProductInventoryContextModel` from a JSON object.**
  ///
  /// This factory uses constants from `TbEshop` to map the JSON keys
  /// to the class properties, ensuring consistency with the database schema.
  factory ProductInventoryContextModel.fromJson(Map<String, dynamic> json) {
    return ProductInventoryContextModel(
      id: json[TbEshop.product_inventory_contexts.id],
      productId: json[TbEshop.product_inventory_contexts.product],
      inventoryContextId: json[TbEshop.product_inventory_contexts.inventory_context],
      quantity: json[TbEshop.product_inventory_contexts.quantity],
    );
  }

  /// **Converts the `ProductInventoryContextModel` to a JSON object.**
  ///
  /// This method serializes the object into a map, using the `TbEshop`
  /// constants for the keys. The `inventoryContext` object is intentionally
  /// excluded to prevent data duplication and circular references, as only
  /// the `inventoryContextId` is needed for serialization.
  Map<String, dynamic> toJson() {
    return {
      // The ID is included if it exists, crucial for update operations.
      if (id != null) TbEshop.product_inventory_contexts.id: id,
      TbEshop.product_inventory_contexts.product: productId,
      TbEshop.product_inventory_contexts.inventory_context: inventoryContextId,
      TbEshop.product_inventory_contexts.quantity: quantity,
    };
  }
}
