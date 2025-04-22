import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/data_models_eshop/product_model.dart';
import 'package:fstapp/data_services_eshop/db_eshop.dart';
import 'package:fstapp/services/toast_helper.dart';
import 'package:fstapp/services/utilities_all.dart';
import 'package:fstapp/styles/styles_config.dart';
import 'package:fstapp/theme_config.dart';
import 'package:fstapp/widgets/search_products_screen.dart';

class ProductsDialog extends StatefulWidget {
  final int ticketId;
  const ProductsDialog({ super.key, required this.ticketId });

  @override
  _ProductsDialogState createState() => _ProductsDialogState();
}

class _ProductsDialogState extends State<ProductsDialog> {
  bool _loading = true;
  List<ProductModel> _orig = [], _current = [];
  double _sumOrig = 0, _sumCur = 0;

  @override
  void initState() {
    super.initState();
    _fetch();
  }

  Future<void> _fetch() async {
    setState(() => _loading = true);
    final list = await DbEshop.getProductsForTicket(widget.ticketId) ?? [];
    _orig = list;
    _current = List.from(list);
    _recalc();
    setState(() => _loading = false);
  }

  void _recalc() {
    _sumOrig = _orig.fold(0, (s, p) => s + (p.price ?? 0));
    _sumCur  = _current.fold(0, (s, p) => s + (p.price ?? 0));
  }

  Future<void> _add() async {
    final added = await Navigator.of(context).push<List<ProductModel>>(
      MaterialPageRoute(
        builder: (_) => SearchProductsScreen(
          ticketId: widget.ticketId,
          alreadySelected: _current,
        ),
      ),
    );
    if (added != null && added.isNotEmpty) {
      setState(() {
        _current.addAll(added);
        _recalc();
      });
    }
  }

  void _remove(ProductModel p) {
    setState(() {
      _current.removeWhere((c) => c.id == p.id);
      _recalc();
    });
  }

  void _addBack(ProductModel p) {
    setState(() {
      _current.add(p);
      _recalc();
    });
  }

  Future<void> _save() async {
    var suc = await DbEshop.updateProductsForOrder(
      widget.ticketId,
      _current.map((p) => p.id!).toList(),
    );
    if(suc){
      ToastHelper.Show(context, "Products updated successfully.".tr());
      Navigator.of(context).pop(true);
    } else{
      Navigator.of(context).pop(false);
    }
  }

  @override
  Widget build(BuildContext context) {
    // figure out added vs removed
    final added   = _current.where((p) => !_orig.any((o) => o.id == p.id)).toList();
    final removed = _orig.where((p) => !_current.any((c) => c.id == p.id)).toList();

    // build unified list: orig items first (incl. removed), then newly added
    final allItems = [
      ..._orig,
      ...added, // won't duplicate orig
    ];

    return AlertDialog(
      insetPadding: const EdgeInsets.all(16),
      titlePadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
      title: Row(
        children: [
          Expanded(
            child: SelectableText(
              "Products for ticket {ticket}"
                  .tr(namedArgs: { "ticket": widget.ticketId.toString() }),
            ),
          ),
          IconButton(
            icon: const Icon(Icons.close),
            onPressed: () => Navigator.of(context).pop(false),
          )
        ],
      ),
      content: _loading
          ? const SizedBox(
        height: 120,
        child: Center(child: CircularProgressIndicator()),
      )
          : SizedBox(
        width: StylesConfig.formMaxWidth,
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            // Totals row
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                _buildTotalColumn("Original".tr(), _sumOrig),
                _buildTotalColumn("Current".tr(), _sumCur),
                _buildChangeColumn(),
              ],
            ),
            const SizedBox(height: 16),

            // full list with visual markers
            if (allItems.isEmpty)
              SelectableText("No products selected.".tr())
            else
              Flexible(
                child: ListView.separated(
                  shrinkWrap: true,
                  itemCount: allItems.length,
                  separatorBuilder: (_, __) => const SizedBox(height: 8),
                  itemBuilder: (_, i) {
                    final p = allItems[i];
                    final isAdded   = added.any((x) => x.id == p.id);
                    final isRemoved = removed.any((x) => x.id == p.id);

                    // price text
                    final priceText = isAdded
                        ? "+${Utilities.formatPrice(context, p.price ?? 0, decimalDigits: 2)}"
                        : isRemoved
                        ? "-${Utilities.formatPrice(context, p.price ?? 0, decimalDigits: 2)}"
                        : Utilities.formatPrice(context, p.price ?? 0, decimalDigits: 2);

                    // text color
                    final priceColor = isAdded
                        ? Colors.green
                        : isRemoved
                        ? Colors.red
                        : null;

                    return Card(
                      color: isAdded
                          ? Colors.green.withOpacityUniversal(context, 0.05)
                          : isRemoved
                          ? Colors.red.withOpacityUniversal(context, 0.05)
                          : null,
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(8),
                      ),
                      elevation: 2,
                      child: ListTile(
                        title: SelectableText(p.title ?? ""),
                        subtitle: SelectableText(p.productTypeTitleString ?? ""),
                        trailing: Row(
                          mainAxisSize: MainAxisSize.min,
                          children: [
                            SelectableText(
                              priceText,
                              style: TextStyle(
                                fontWeight: FontWeight.bold,
                                color: priceColor,
                              ),
                            ),
                            const SizedBox(width: 8),
                            IconButton(
                              icon: Icon(isRemoved ? Icons.add : Icons.delete_outline),
                              onPressed: () {
                                isRemoved ? _addBack(p) : _remove(p);
                              },
                            ),
                          ],
                        ),
                      ),
                    );
                  },
                ),
              ),

            const SizedBox(height: 12),
            Align(
              alignment: Alignment.centerRight,
              child: ElevatedButton.icon(
                onPressed: _add,
                icon: const Icon(Icons.add_shopping_cart),
                label: Text("Add products".tr()),
              ),
            ),
          ],
        ),
      ),
      actions: [
        TextButton(
          onPressed: () => Navigator.of(context).pop(false),
          child: Text("Storno".tr()),
        ),
        ElevatedButton(
          onPressed: _current.equals(_orig) ? null : _save,
          child: Text("Save".tr()),
        ),
      ],
    );
  }

  Widget _buildTotalColumn(String label, double sum) {
    return Column(
      children: [
        SelectableText(label, style: const TextStyle(fontWeight: FontWeight.bold)),
        const SizedBox(height: 4),
        SelectableText(Utilities.formatPrice(context, sum, decimalDigits: 2)),
      ],
    );
  }

  Widget _buildChangeColumn() {
    final diff = _sumCur - _sumOrig;
    Color? color;
    String text;
    if (diff > 0) {
      color = Colors.green;
      text = "+${Utilities.formatPrice(context, diff, decimalDigits: 2)}";
    } else if (diff < 0) {
      color = Colors.red;
      text = Utilities.formatPrice(context, diff, decimalDigits: 2);
    } else {
      text = Utilities.formatPrice(context, diff, decimalDigits: 2);
    }

    return Column(
      children: [
        SelectableText("Change".tr(), style: const TextStyle(fontWeight: FontWeight.bold)),
        const SizedBox(height: 4),
        SelectableText(
          text,
          style: color != null
              ? TextStyle(color: color, fontWeight: FontWeight.bold)
              : const TextStyle(fontWeight: FontWeight.bold),
        ),
      ],
    );
  }
}

extension on List<ProductModel> {
  bool equals(List<ProductModel> o) {
    final a = map((e) => e.id).toSet();
    final b = o.map((e) => e.id).toSet();
    return a.length == b.length && a.containsAll(b);
  }
}
