import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:fstapp/components/blueprint/blueprint_model.dart';
import 'package:fstapp/components/blueprint/blueprint_strings.dart';
import 'package:fstapp/components/eshop/models/product_model.dart';
import 'package:fstapp/data_services_eshop/db_eshop.dart';
import 'package:fstapp/services/toast_helper.dart';
import 'package:fstapp/services/utilities_all.dart';
import 'package:collection/collection.dart';

import '../../_shared/common_strings.dart';


/// Dialog to select an existing spot product, or manage (edit/create) them.
class SelectProductDialog extends StatefulWidget {
  final BlueprintModel blueprint;
  final int? currentProductId; // To show selection

  const SelectProductDialog({
    super.key,
    required this.blueprint,
    this.currentProductId,
  });

  @override
  State<SelectProductDialog> createState() => _SelectProductDialogState();
}

class _SelectProductDialogState extends State<SelectProductDialog> {
  late List<ProductModel> _spotProducts;

  @override
  void initState() {
    super.initState();
    _spotProducts = widget.blueprint.spotProducts;
    _sortProducts();
  }

  void _sortProducts() {
    _spotProducts.sort((a, b) => Utilities.naturalCompare(a.title ?? "", b.title ?? ""));
  }

  /// Shows the EditProductDialog to create or update a product.
  void _editProduct(ProductModel? product) async {
    final bool isCreating = product == null;

    final result = await showDialog<Map<String, dynamic>>(
      context: context,
      builder: (dialogContext) {
        return EditProductDialog(
          product: product?.copyWith() ?? ProductModel(
            title: "",
            price: 0.0,
            productTypeString: ProductModel.spotType, // Set valid type
          ),
          isCreating: isCreating,
        );
      },
    );

    if (result != null) {
      final newTitle = result['title'] as String;
      final newPrice = result['price'] as double;

      try {
        if (isCreating) {
          // Safety check: Cannot create a new spot product if we don't have a template
          // (for productTypeId, currencyCode, etc.)
          if (_spotProducts.isEmpty) {
            ToastHelper.Show(
              context,
              // You may want to add this string to BlueprintStrings
              "Cannot create product: At least one 'Spot' product must exist to act as a template.",
              severity: ToastSeverity.NotOk,
            );
            return;
          }

          // Get details from an existing spot product
          final existingProduct = _spotProducts.first;

          final newProduct = ProductModel(
            title: newTitle,
            price: newPrice,
            currencyCode: existingProduct.currencyCode,
            productTypeId: existingProduct.productTypeId,
            occasion: existingProduct.occasion,
            productTypeString: ProductModel.spotType,
          );

          // Call DB to create, get new ID
          final newId = await DbEshop.updateProduct(newProduct);
          newProduct.id = newId;

          setState(() {
            widget.blueprint.products ??= [];
            widget.blueprint.products!.add(newProduct);
            _spotProducts = widget.blueprint.spotProducts;
            _sortProducts();
          });

          ToastHelper.Show(context, BlueprintStrings.productCreated, severity: ToastSeverity.Ok);

        } else {
          // Find the original product in the blueprint and update it
          final originalProduct = widget.blueprint.products?.firstWhereOrNull((p) => p.id == product!.id);
          if (originalProduct != null) {
            originalProduct.title = newTitle;
            originalProduct.price = newPrice;
            // productTypeId and productTypeString are not changing

            // Call DB to update
            await DbEshop.updateProduct(originalProduct);

            setState(() {
              // Refresh local list
              _spotProducts = widget.blueprint.spotProducts;
              _sortProducts();
            });

            ToastHelper.Show(context, BlueprintStrings.productUpdated, severity: ToastSeverity.Ok);
          }
        }
      } catch (e) {
        // Show error from DB call
        ToastHelper.Show(context, e.toString(), severity: ToastSeverity.NotOk);
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      title: Text(BlueprintStrings.selectProduct),
      content: SizedBox(
        width: 500, // Make it a bit wider
        child: _spotProducts.isEmpty
            ? Center(child: Text(BlueprintStrings.noSpotProducts))
            : ListView.builder(
          shrinkWrap: true,
          itemCount: _spotProducts.length,
          itemBuilder: (context, index) {
            final product = _spotProducts[index];
            // Check if this product is the selected one
            final isSelected = product.id == widget.currentProductId;
            return ListTile(
              // Apply selected state
              selected: isSelected,
              selectedTileColor: Theme.of(context).colorScheme.primary.withOpacity(0.1),
              title: Text(product.title ?? ""),
              subtitle: Text(Utilities.formatPrice(context, product.price ?? 0)),
              trailing: IconButton(
                icon: const Icon(Icons.edit_outlined),
                tooltip: BlueprintStrings.editProduct,
                onPressed: () => _editProduct(product),
              ),
              onTap: () {
                Navigator.of(context).pop(product); // Select the product
              },
            );
          },
        ),
      ),
      actions: [
        TextButton(
          onPressed: () => Navigator.of(context).pop(),
          child: Text(CommonStrings.storno),
        ),
        ElevatedButton.icon(
          icon: const Icon(Icons.add),
          label: Text(BlueprintStrings.createProduct),
          onPressed: () => _editProduct(null), // Pass null for creation
        ),
      ],
    );
  }
}

/// Dialog for editing/creating a single product
class EditProductDialog extends StatefulWidget {
  final ProductModel product;
  final bool isCreating;

  const EditProductDialog({super.key, required this.product, required this.isCreating});

  @override
  State<EditProductDialog> createState() => _EditProductDialogState();
}

class _EditProductDialogState extends State<EditProductDialog> {
  final _formKey = GlobalKey<FormState>();
  late String _title;
  late double _price;
  final _priceController = TextEditingController();

  @override
  void initState() {
    super.initState();
    _title = widget.product.title ?? "";
    _price = widget.product.price ?? 0.0;
    _priceController.text = _price.toString();
  }

  @override
  void dispose() {
    _priceController.dispose();
    super.dispose();
  }

  void _save() {
    if (_formKey.currentState!.validate()) {
      _formKey.currentState!.save();
      Navigator.of(context).pop({
        'title': _title,
        'price': _price,
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      title: Text(widget.isCreating
          ? BlueprintStrings.createProduct
          : BlueprintStrings.editProduct),
      content: Form(
        key: _formKey,
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            TextFormField(
              initialValue: _title,
              decoration: InputDecoration(
                labelText: CommonStrings.title, // <-- CHANGED
                border: const OutlineInputBorder(),
              ),
              validator: (value) {
                if (value == null || value.trim().isEmpty) {
                  return CommonStrings.fieldCannotBeEmpty;
                }
                return null;
              },
              onSaved: (value) {
                _title = value!.trim();
              },
            ),
            const SizedBox(height: 16),
            TextFormField(
              controller: _priceController, // Use controller for validation
              decoration: InputDecoration(
                labelText: CommonStrings.price, // <-- CHANGED
                border: const OutlineInputBorder(),
              ),
              keyboardType: const TextInputType.numberWithOptions(decimal: true),
              inputFormatters: [
                // Allow digits, and at most one decimal point
                FilteringTextInputFormatter.allow(RegExp(r'^\d*\.?\d*')),
              ],
              validator: (value) {
                if (value == null || value.isEmpty) {
                  return CommonStrings.fieldCannotBeEmpty;
                }
                final price = double.tryParse(value);
                if (price == null || price < 0) {
                  return CommonStrings.invalidFormat;
                }
                return null;
              },
              onSaved: (value) {
                _price = double.tryParse(value!) ?? 0.0;
              },
            ),
          ],
        ),
      ),
      actions: [
        TextButton(
          onPressed: () => Navigator.of(context).pop(),
          child: Text(CommonStrings.storno),
        ),
        ElevatedButton(
          onPressed: _save,
          child: Text(CommonStrings.save),
        ),
      ],
    );
  }
}