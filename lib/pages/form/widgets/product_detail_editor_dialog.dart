import 'package:flutter/material.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/AppRouter.gr.dart';
import 'package:fstapp/dataModelsEshop/ProductModel.dart';
import 'package:fstapp/RouterService.dart';
import 'package:fstapp/widgets/HtmlView.dart';
import 'package:fstapp/pages/utility/HtmlEditorPage.dart';

class ProductDetailEditorDialog extends StatefulWidget {
  final ProductModel product;
  const ProductDetailEditorDialog({Key? key, required this.product}) : super(key: key);

  @override
  _ProductDetailEditorDialogState createState() => _ProductDetailEditorDialogState();
}

class _ProductDetailEditorDialogState extends State<ProductDetailEditorDialog> {
  late String _description;
  late TextEditingController _quantityController;

  @override
  void initState() {
    super.initState();
    _description = widget.product.description ?? "";
    _quantityController = TextEditingController(text: widget.product.maximum?.toString() ?? "0");
    _quantityController.addListener(() {
      widget.product.maximum = int.tryParse(_quantityController.text) ?? 0;
    });
  }

  @override
  void dispose() {
    _quantityController.dispose();
    super.dispose();
  }

  Future<void> _editContent() async {
    RouterService.navigatePageInfo(
      context,
      HtmlEditorRoute(content: {HtmlEditorPage.parContent: _description}),
    ).then((value) {
      if (value != null) {
        setState(() {
          _description = value as String;
          widget.product.description = _description;
        });
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return Dialog(
      elevation: 16,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(12.0),
        side: BorderSide(
          color: Colors.white.withOpacity(0.2),
        ),
      ),
      child: ConstrainedBox(
        constraints: const BoxConstraints(maxWidth: 600),
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Stack(
            children: [
              SingleChildScrollView(
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                  children: [
                    const SizedBox(height: 32), // space for the close button
                    SelectableText(
                      widget.product.title ?? '',
                      style: Theme.of(context)
                          .textTheme
                          .titleLarge
                          ?.copyWith(fontWeight: FontWeight.w600),
                    ),
                    const SizedBox(height: 8),
                    // Editable Product Quantity with helper text
                    TextField(
                      controller: _quantityController,
                      keyboardType: TextInputType.number,
                      decoration: InputDecoration(
                        labelText: "Product Quantity".tr(),
                        helperText: "Enter 0 for unlimited" .tr(),
                        border: const UnderlineInputBorder(),
                      ),
                    ),
                    const SizedBox(height: 16),
                    // Product Description Title
                    Text(
                      "Description" .tr(),
                    ),
                    const SizedBox(height: 8),
                    // Full HTML description (no height limit)
                    HtmlView(
                      html: _description,
                      isSelectable: true,
                    ),
                    const SizedBox(height: 16),
                    // Edit content button
                    Center(
                      child: ElevatedButton(
                        onPressed: _editContent,
                        child: Text("Edit content" .tr()),
                      ),
                    ),
                    const SizedBox(height: 24),
                  ],
                ),
              ),
              // Close button positioned at the top right
              Positioned(
                top: 0,
                right: 0,
                child: IconButton(
                  icon: Icon(
                    Icons.close,
                    size: 24,
                    color: Theme.of(context).iconTheme.color?.withOpacity(0.8),
                  ),
                  splashRadius: 20,
                  onPressed: () => Navigator.of(context).pop(),
                  tooltip: "Close".tr(),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
