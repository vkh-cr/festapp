import 'package:flutter/material.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/data_models_eshop/product_model.dart';
import 'package:fstapp/services/html_helper.dart';
import 'product_detail_editor_dialog.dart';
import 'ticket_editor_widgets.dart';

class TicketProductEditorRow extends StatefulWidget {
  final ProductModel product;
  final VoidCallback onDelete;
  final List<String> availableCurrencies;

  const TicketProductEditorRow({
    super.key,
    required this.product,
    required this.onDelete,
    required this.availableCurrencies,
  });

  @override
  _TicketProductEditorRowState createState() => _TicketProductEditorRowState();
}

class _TicketProductEditorRowState extends State<TicketProductEditorRow> {
  late TextEditingController _titleController;
  late TextEditingController _priceController;
  late String selectedCurrency;

  @override
  void initState() {
    super.initState();
    _titleController = TextEditingController(text: widget.product.title ?? "");
    _priceController =
        TextEditingController(text: (widget.product.price ?? 0).toString());
    _titleController.addListener(() {
      widget.product.title = _titleController.text;
    });
    _priceController.addListener(() {
      widget.product.price = double.tryParse(_priceController.text) ?? 0.0;
    });
    // Initialize the selected currency from the product model or default to the first available.
    selectedCurrency = widget.product.currencyCode ??
        (widget.availableCurrencies.isNotEmpty
            ? widget.availableCurrencies.first
            : '');
    widget.product.currencyCode = selectedCurrency;
  }

  @override
  void dispose() {
    _titleController.dispose();
    _priceController.dispose();
    super.dispose();
  }

  // This function builds a basic select box for the currency.
  Widget buildCurrencySelectBox() {
    // If more than one currency available, make it clickable for selection.
    if (widget.availableCurrencies.length > 1) {
      return InkWell(
        onTap: () async {
          // Show a simple dialog with a list of options.
          final result = await showDialog<String>(
            context: context,
            builder: (context) {
              return SimpleDialog(
                title: Text("Currency".tr()),
                children: widget.availableCurrencies.map((currency) {
                  return SimpleDialogOption(
                    onPressed: () {
                      Navigator.pop(context, currency);
                    },
                    child: Text(currency, style: const TextStyle(fontSize: 14)),
                  );
                }).toList(),
              );
            },
          );
          if (result != null) {
            setState(() {
              selectedCurrency = result;
              widget.product.currencyCode = selectedCurrency;
            });
          }
        },
        child: Container(
          // Minimal styling to mimic a simple select box.
          decoration: BoxDecoration(
            border: Border.all(color: Colors.grey),
            borderRadius: BorderRadius.circular(4.0),
          ),
          padding: const EdgeInsets.symmetric(horizontal: 8.0, vertical: 2.0),
          child: Text(
            selectedCurrency,
            style: const TextStyle(fontSize: 14),
          ),
        ),
      );
    } else {
      // If only one currency is available, just show the text.
      return Text(
        selectedCurrency,
        style: const TextStyle(fontSize: 14),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    final effectiveOpacity =
    (widget.product.isHidden ?? false) ? 0.5 : 1.0;
    return Opacity(
      opacity: effectiveOpacity,
      child: Padding(
        padding: const EdgeInsets.symmetric(vertical: 6.0),
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Left column: Title field with product quantity directly below.
            Expanded(
              flex: 7,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  TextField(
                    controller: _titleController,
                    decoration: InputDecoration(
                      labelText: "Title".tr(),
                      border: const UnderlineInputBorder(),
                      suffixIcon: (!HtmlHelper.isHtmlEmptyOrNull(
                          widget.product.description))
                          ? Tooltip(
                        message: "Has description".tr(),
                        child: const Icon(Icons.description, size: 20),
                      )
                          : null,
                    ),
                  ),
                  const SizedBox(height: 4),
                  Row(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      const Icon(Icons.stacked_bar_chart, size: 16),
                      const SizedBox(width: 4),
                      SelectableText(
                        TicketEditorWidgets.formatOrderedCount(
                            widget.product.orderedCount, widget.product.maximum),
                      ),
                    ],
                  ),
                ],
              ),
            ),
            const SizedBox(width: 8),
            // Middle column: Price field and currency selection below it.
            Expanded(
              flex: 2,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  TextField(
                    controller: _priceController,
                    keyboardType:
                    const TextInputType.numberWithOptions(decimal: true),
                    decoration: InputDecoration(
                      labelText: "Price".tr(),
                      border: const UnderlineInputBorder(),
                    ),
                  ),
                  const SizedBox(height: 4),
                  Row(
                    children: [
                      const Icon(Icons.monetization_on, size: 16),
                      const SizedBox(width: 4),
                      buildCurrencySelectBox(),
                    ],
                  ),
                ],
              ),
            ),
            const SizedBox(width: 8),
            // Right column: Visibility switch.
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
            // Additional settings popup.
            PopupMenuButton<String>(
              onSelected: (value) {
                if (value == 'additional_settings') {
                  showDialog(
                    context: context,
                    builder: (context) =>
                        ProductDetailEditorDialog(product: widget.product),
                  ).then((_) {
                    setState(() {}); // Refresh when dialog is closed.
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
      ),
    );
  }
}
