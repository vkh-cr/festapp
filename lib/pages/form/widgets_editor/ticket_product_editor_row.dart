import 'package:flutter/material.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/data_models_eshop/product_model.dart';
import 'package:fstapp/services/html_helper.dart';
import 'product_detail_editor_dialog.dart';
import 'ticket_editor_widgets.dart'; // New dialog file

class TicketProductEditorRow extends StatefulWidget {
  final ProductModel product;
  final VoidCallback onDelete;
  const TicketProductEditorRow({
    super.key,
    required this.product,
    required this.onDelete,
  });

  @override
  _TicketProductEditorRowState createState() => _TicketProductEditorRowState();
}

class _TicketProductEditorRowState extends State<TicketProductEditorRow> {
  late TextEditingController _titleController;
  late TextEditingController _priceController;

  @override
  void initState() {
    super.initState();
    _titleController =
        TextEditingController(text: widget.product.title ?? "");
    _priceController =
        TextEditingController(text: (widget.product.price ?? 0).toString());
    _titleController.addListener(() {
      widget.product.title = _titleController.text;
    });
    _priceController.addListener(() {
      widget.product.price =
          double.tryParse(_priceController.text) ?? 0.0;
    });
  }

  @override
  void dispose() {
    _titleController.dispose();
    _priceController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final effectiveOpacity =
    (widget.product.isHidden ?? false) ? 0.5 : 1.0;
    return Opacity(
      opacity: effectiveOpacity,
      child: Padding(
        padding: const EdgeInsets.symmetric(vertical: 6.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              children: [
                Expanded(
                  flex: 7,
                  child: TextField(
                    controller: _titleController,
                    decoration: InputDecoration(
                      labelText: "Title".tr(),
                      border: const UnderlineInputBorder(),
                      suffixIcon: (!HtmlHelper.isHtmlEmptyOrNull(widget.product.description))
                          ? Tooltip(
                        message: "Has description".tr(),
                        child: const Icon(Icons.description, size: 20),
                      )
                          : null,
                    ),
                  ),
                ),
                const SizedBox(width: 8),
                Expanded(
                  flex: 2,
                  child: TextField(
                    controller: _priceController,
                    keyboardType:
                    const TextInputType.numberWithOptions(decimal: true),
                    decoration: InputDecoration(
                      labelText: "Price".tr(),
                      border: const UnderlineInputBorder(),
                    ),
                  ),
                ),
                const SizedBox(width: 8),
                Column(
                  children: [
                    Text("Show".tr(),
                        style: Theme.of(context).textTheme.bodySmall),
                    Switch(
                      value: !(widget.product.isHidden ?? false),
                      onChanged: (val) {
                        setState(() {
                          widget.product.isHidden = !val;
                        });
                      },
                    ),
                  ],
                ),
                PopupMenuButton<String>(
                  onSelected: (value) {
                    if (value == 'additional_settings') {
                      showDialog(
                        context: context,
                        builder: (context) =>
                            ProductDetailEditorDialog(product: widget.product),
                      ).then((_) {
                        setState(() {}); // Refresh the widget when the dialog is closed.
                      });
                    }
                  },
                  itemBuilder: (BuildContext context) =>
                  <PopupMenuEntry<String>>[
                    PopupMenuItem<String>(
                      value: 'additional_settings',
                      child: Text("Additional Settings".tr()),
                    ),
                  ],
                  icon: const Icon(Icons.more_vert),
                ),
                if (widget.product.id == null)
                  IconButton(
                    icon: const Icon(Icons.delete),
                    onPressed: widget.onDelete,
                  ),
              ],
            ),
            // Additional summary row: display ordered_count/maximum (or ∞ if maximum is not set)
            Padding(
              padding: const EdgeInsets.only(top: 4.0),
              child: Row(
                children: [
                  Tooltip(
                    message: "Product Quantity".tr(),
                    child: Row(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        Icon(Icons.stacked_bar_chart, size: 16),
                        const SizedBox(width: 4),
                        SelectableText(
                          TicketEditorWidgets.formatOrderedCount(widget.product.orderedCount, widget.product.maximum),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
