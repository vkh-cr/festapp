import 'package:fstapp/data_models_eshop/tb_eshop.dart';

import 'inventory_context_model.dart';

class ProductInventoryContextModel {
  int productId;
  int inventoryContextId;
  int quantity;
  InventoryContextModel? inventoryContext;

  ProductInventoryContextModel({
    required this.productId,
    required this.inventoryContextId,
    required this.quantity,
    this.inventoryContext
  });

  factory ProductInventoryContextModel.fromJson(Map<String, dynamic> json) {
    return ProductInventoryContextModel(
      productId: json[TbEshop.product_inventory_contexts.product],
      inventoryContextId: json[TbEshop.product_inventory_contexts.inventory_context],
      quantity: json[TbEshop.product_inventory_contexts.quantity],
    );
  }
}