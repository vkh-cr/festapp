import 'package:flutter/material.dart';
import 'package:fstapp/components/eshop/models/product_model.dart';
import 'package:fstapp/components/inventory/views/inventory_strings.dart';
import 'package:fstapp/components/inventory/views/quick_search_dialog.dart';

class ProductSearchDialog extends StatelessWidget {
  final List<ProductModel> allProducts;
  final ProductModel? currentProduct;

  const ProductSearchDialog({
    super.key,
    required this.allProducts,
    this.currentProduct,
  });

  @override
  Widget build(BuildContext context) {
    return QuickSearchDialog<ProductModel>(
      title: InventoryStrings.searchDialogTitleProduct,
      allItems: allProducts,
      currentItem: currentProduct,
      getItemTitle: (product) => product.getFormattedProductTitle(),
      compareItems: (a, b) => a.id == b.id,
    );
  }
}
