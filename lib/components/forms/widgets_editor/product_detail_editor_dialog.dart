import 'package:flutter/material.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/app_router.gr.dart';
import 'package:fstapp/components/eshop/models/product_model.dart';
import 'package:fstapp/router_service.dart';
import 'package:fstapp/widgets/standard_dialog.dart';
import 'package:fstapp/components/html/html_view.dart';
import 'package:fstapp/components/html/html_editor_page.dart';
import 'package:fstapp/components/features/feature_constants.dart';
import 'package:fstapp/components/features/feature_service.dart';
import 'package:fstapp/components/eshop/orders_strings.dart';

class ProductDetailEditorDialog extends StatefulWidget {
  final ProductModel product;
  const ProductDetailEditorDialog({super.key, required this.product});

  @override
  _ProductDetailEditorDialogState createState() =>
      _ProductDetailEditorDialogState();
}

class _ProductDetailEditorDialogState extends State<ProductDetailEditorDialog> {
  late String _description;
  late TextEditingController _quantityController;
  late TextEditingController _shortTitleController;

  @override
  void initState() {
    super.initState();
    _description = widget.product.description ?? "";
    _quantityController =
        TextEditingController(text: widget.product.maximum?.toString() ?? "0");
    _quantityController.addListener(() {
      widget.product.maximum = int.tryParse(_quantityController.text) ?? 0;
    });
    _shortTitleController =
        TextEditingController(text: widget.product.shortTitle ?? "");
    _shortTitleController.addListener(() {
      widget.product.shortTitle = _shortTitleController.text;
    });
  }

  @override
  void dispose() {
    _quantityController.dispose();
    _shortTitleController.dispose();
    super.dispose();
  }

  Future<void> _editContent() async {
    RouterService.navigatePageInfo(
      context,
      HtmlEditorRoute(
          content: {HtmlEditorPage.parContent: _description},
          occasionId: widget.product.occasion),
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
    return StandardDialog(
      content: SingleChildScrollView(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            const SizedBox(height: 32),
            SelectableText(
              widget.product.title ?? '',
              style: Theme.of(context)
                  .textTheme
                  .titleLarge
                  ?.copyWith(fontWeight: FontWeight.w600),
            ),
            if (FeatureService.isFeatureEnabled(FeatureConstants.ticket)) ...[
              const SizedBox(height: 16),
              TextField(
                controller: _shortTitleController,
                decoration: InputDecoration(
                  labelText: OrdersStrings.gridShortTitle,
                  border: const UnderlineInputBorder(),
                ),
              ),
            ],
            const SizedBox(height: 8),
            // Editable Product Quantity with helper text
            TextField(
              controller: _quantityController,
              keyboardType: TextInputType.number,
              decoration: InputDecoration(
                labelText: "Product Quantity".tr(),
                helperText: "Enter 0 for unlimited".tr(),
                border: const UnderlineInputBorder(),
              ),
            ),
            const SizedBox(height: 16),
            // Product Description Title
            Text(
              "Description".tr(),
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
                child: Text("Edit content".tr()),
              ),
            ),
            const SizedBox(height: 24),
          ],
        ),
      ),
    );
  }
}
