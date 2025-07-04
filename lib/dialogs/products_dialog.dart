import 'package:collection/collection.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/features/features_strings.dart';
import 'package:fstapp/data_models_eshop/order_model.dart';
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
  TicketDetailsBundle? _bundle;
  List<ProductModel> _orig = [], _current = [];
  double _sumOrig = 0, _sumCur = 0;

  @override
  void initState() {
    super.initState();
    _fetch();
  }

  Future<void> _fetch() async {
    if(!mounted) return;
    setState(() => _loading = true);
    _bundle = await DbEshop.getProductsForTicket(widget.ticketId);
    if (_bundle != null) {
      _orig = _bundle!.ticket.relatedProducts?.map((p) => ProductModel.fromJson(p.toJson())).toList() ?? [];
      _current = _bundle!.ticket.relatedProducts?.map((p) => ProductModel.fromJson(p.toJson())).toList() ?? [];
      _recalc();
    }
    if(!mounted) return;
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

  Future<void> _editPrice(ProductModel product) async {
    final priceController = TextEditingController(text: (product.price ?? 0).toStringAsFixed(2));
    final formKey = GlobalKey<FormState>();
    final focusNode = FocusNode();

    Future.delayed(const Duration(milliseconds: 200), () {
      if (focusNode.context != null) {
        focusNode.requestFocus();
      }
    });

    final newPrice = await showDialog<double>(
      context: context,
      builder: (context) {
        // We are now using the generic `Dialog` widget to gain full control.
        return Dialog(
          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
          child: ConstrainedBox(
            // This enforces a hard maximum width on our dialog.
            constraints: const BoxConstraints(maxWidth: 450),
            child: Padding(
              padding: const EdgeInsets.all(24.0),
              // This Column will only be as tall as its content.
              child: Column(
                mainAxisSize: MainAxisSize.min,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  // 1. Manually created Title
                  Text(
                    FeaturesStrings.editPriceTitle,
                    style: Theme.of(context).textTheme.titleLarge,
                  ),
                  const SizedBox(height: 20),

                  // 2. Manually created Content (still scrollable for keyboard)
                  SingleChildScrollView(
                    child: Form(
                      key: formKey,
                      child: TextFormField(
                        focusNode: focusNode,
                        autofocus: false,
                        controller: priceController,
                        decoration: InputDecoration(labelText: FeaturesStrings.newPriceLabel),
                        keyboardType: const TextInputType.numberWithOptions(decimal: true, signed: false),
                        validator: (value) {
                          if (value == null || value.isEmpty) {
                            return FeaturesStrings.priceValidationRequired;
                          }
                          final price = double.tryParse(value.replaceAll(",", "."));
                          if (price == null) {
                            return FeaturesStrings.priceValidationInvalid;
                          }
                          if (price < 0) {
                            return FeaturesStrings.priceValidationNegative;
                          }
                          return null;
                        },
                      ),
                    ),
                  ),
                  const SizedBox(height: 24),

                  // 3. Manually created Actions
                  Row(
                    mainAxisAlignment: MainAxisAlignment.end,
                    children: [
                      TextButton(
                        child: Text(FeaturesStrings.setToZeroButton),
                        onPressed: () {
                          priceController.text = "0.00";
                        },
                      ),
                      const Spacer(),
                      TextButton(
                        child: Text("Storno".tr()),
                        onPressed: () => Navigator.of(context).pop(),
                      ),
                      const SizedBox(width: 8),
                      ElevatedButton(
                        child: Text("OK".tr()),
                        onPressed: () {
                          if (formKey.currentState!.validate()) {
                            Navigator.of(context).pop(double.parse(priceController.text.replaceAll(",", ".")));
                          }
                        },
                      ),
                    ],
                  ),
                ],
              ),
            ),
          ),
        );
      },
    );

    focusNode.dispose();

    if (newPrice != null) {
      setState(() {
        final pIndex = _current.indexWhere((p) => p.id == product.id);
        if (pIndex != -1) {
          _current[pIndex].price = newPrice;
          _recalc();
        }
      });
    }
  }

  Future<void> _save() async {
    final success = await DbEshop.updateProductsForOrder(
      widget.ticketId,
      _current,
    );
    if(success && mounted){
      ToastHelper.Show(context, FeaturesStrings.productsUpdateSuccess);
      _fetch();
    } else if (mounted) {
      ToastHelper.Show(context, FeaturesStrings.productsUpdateFailed, severity: ToastSeverity.NotOk);
    }
  }

  Future<void> _showSendUpdateConfirmDialog() async {
    final order = _bundle?.order;
    final payment = _bundle?.paymentInfo;
    if (order == null || payment == null) return;

    final referenceOrderData = _bundle?.referenceOrder?.data;
    List<ProductModel> referenceProducts = [];
    if(referenceOrderData != null) {
      final ticketInHistory = (referenceOrderData["tickets"] as List?)
          ?.firstWhereOrNull((t) => (t["id"] as int?) == widget.ticketId);
      if (ticketInHistory != null && ticketInHistory["products"] != null) {
        referenceProducts = (ticketInHistory["products"] as List)
            .map((p) => ProductModel.fromJson(p as Map<String, dynamic>))
            .toList();
      }
    }

    final currentProducts = _current;
    final added = currentProducts.where((p) => !referenceProducts.any((o) => o.id == p.id)).toList();
    final removed = referenceProducts.where((p) => !currentProducts.any((c) => c.id == p.id)).toList();
    final changed = <Map<String, ProductModel>>[];
    for (var currentP in currentProducts) {
      final refP = referenceProducts.firstWhereOrNull((p) => p.id == currentP.id);
      if (refP != null && currentP.price != refP.price) {
        changed.add({'from': refP, 'to': currentP});
      }
    }

    final referenceTotal = referenceProducts.fold<double>(0.0, (sum, item) => sum + (item.price ?? 0));
    final currentTotal = _sumCur;

    final totalPaid = payment.paid ?? 0;
    final orderPrice = order.price ?? 0;
    final balance = orderPrice - totalPaid;

    final confirmed = await showDialog<bool>(
        context: context,
        builder: (context) {
          return AlertDialog(
            title: Text(FeaturesStrings.sendUpdateTitle),
            content: SingleChildScrollView(
              child: Column(
                mainAxisSize: MainAxisSize.min,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(FeaturesStrings.sendUpdateContent(order.data?["email"] ?? "N/A")),
                  const Divider(height: 24),

                  Text(FeaturesStrings.emailContentIntro, style: const TextStyle(fontWeight: FontWeight.bold, fontStyle: FontStyle.italic)),
                  const SizedBox(height: 12),
                  _buildChangesListItem(
                    context: context,
                    added: added,
                    removed: removed,
                    changed: changed,
                    referenceTotal: referenceTotal,
                    currentTotal: currentTotal,
                  ),
                  _buildConfirmationListItem(Icons.credit_card, FeaturesStrings.sendUpdateItemStatus),
                  if (balance < 0)
                    _buildConfirmationListItem(Icons.undo_outlined, FeaturesStrings.sendUpdateItemRefund),
                  _buildConfirmationListItem(Icons.receipt_long_outlined, FeaturesStrings.sendUpdateItemSummary),
                  if (balance > 0)
                    _buildConfirmationListItem(Icons.qr_code_2, FeaturesStrings.sendUpdateItemQr),
                ],
              ),
            ),
            actions: [
              TextButton(onPressed: ()=> Navigator.of(context).pop(false), child: Text("Storno".tr())),
              ElevatedButton(onPressed: ()=> Navigator.of(context).pop(true), child: Text(FeaturesStrings.sendEmailButton)),
            ],
          );
        }
    ) ?? false;

    if (confirmed && mounted) {
      setState(() => _loading = true);
      try{
        await DbEshop.sendTicketOrderUpdateEmail(_bundle!.order.id!);
      }catch(e){
        if (mounted) {
          ToastHelper.Show(context, FeaturesStrings.sendEmailFailed, severity: ToastSeverity.NotOk);
          setState(() => _loading = false);
          await _fetch();
          return;
        }
      }
      if (mounted) {
        ToastHelper.Show(context, FeaturesStrings.sendEmailSuccess);
        await _fetch();
      }
    }
  }

  Widget _buildChangesListItem({
    required BuildContext context,
    required List<ProductModel> added,
    required List<ProductModel> removed,
    required List<Map<String, ProductModel>> changed,
    required double referenceTotal,
    required double currentTotal,
  }) {
    final theme = Theme.of(context);
    final hasChanges = added.isNotEmpty || removed.isNotEmpty || changed.isNotEmpty;

    return Padding(
      padding: const EdgeInsets.only(bottom: 8.0),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Padding(
            padding: const EdgeInsets.only(top: 2.0),
            child: Icon(Icons.list_alt_outlined, size: 18, color: theme.textTheme.bodySmall?.color),
          ),
          const SizedBox(width: 12),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(FeaturesStrings.sendUpdateItemChanges),
                if (hasChanges) ...[
                  const SizedBox(height: 8),
                  Container(
                    width: double.infinity,
                    padding: const EdgeInsets.all(12),
                    decoration: BoxDecoration(
                      color: Colors.amber.withOpacity(0.1),
                      borderRadius: BorderRadius.circular(8),
                      border: Border.all(color: Colors.amber.shade200),
                    ),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        if (added.isNotEmpty) ...[
                          Text(FeaturesStrings.addedProductsTitle, style: const TextStyle(fontWeight: FontWeight.bold)),
                          ...added.map((p) => Padding(
                            padding: const EdgeInsets.only(left: 8.0, top: 4.0),
                            child: Text("+ ${p.title} (${Utilities.formatPrice(context, p.price!)})", style: const TextStyle(color: Colors.green)),
                          )),
                          const SizedBox(height: 12),
                        ],
                        if (removed.isNotEmpty) ...[
                          Text(FeaturesStrings.removedProductsTitle, style: const TextStyle(fontWeight: FontWeight.bold)),
                          ...removed.map((p) => Padding(
                            padding: const EdgeInsets.only(left: 8.0, top: 4.0),
                            child: Text("- ${p.title} (${Utilities.formatPrice(context, p.price!)})", style: const TextStyle(color: Colors.red)),
                          )),
                          const SizedBox(height: 12),
                        ],
                        if (changed.isNotEmpty) ...[
                          Text(FeaturesStrings.changedPricesTitle, style: const TextStyle(fontWeight: FontWeight.bold)),
                          ...changed.map((c) {
                            final from = c['from']!;
                            final to = c['to']!;
                            return Padding(
                              padding: const EdgeInsets.only(left: 8.0, top: 4.0),
                              child: Row(
                                crossAxisAlignment: CrossAxisAlignment.center,
                                children: [
                                  Expanded(child: Text("• ${to.title}: ")),
                                  Text.rich(
                                    TextSpan(
                                      style: DefaultTextStyle.of(context).style,
                                      children: [
                                        TextSpan(
                                          text: Utilities.formatPrice(context, from.price!),
                                          style: TextStyle(decoration: TextDecoration.lineThrough, color: theme.textTheme.bodySmall?.color),
                                        ),
                                        WidgetSpan(
                                          child: Padding(
                                            padding: const EdgeInsets.symmetric(horizontal: 6.0),
                                            child: Icon(Icons.arrow_forward, size: 16, color: theme.colorScheme.primary),
                                          ),
                                          alignment: PlaceholderAlignment.middle,
                                        ),
                                        TextSpan(
                                          text: Utilities.formatPrice(context, to.price!),
                                          style: const TextStyle(fontWeight: FontWeight.bold),
                                        ),
                                      ],
                                    ),
                                  )
                                ],
                              ),
                            );
                          }),
                          const SizedBox(height: 12),
                        ],
                        if (referenceTotal != currentTotal) ...[
                          const Divider(height: 16),
                          Padding(
                            padding: const EdgeInsets.only(top: 4.0),
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                Text(FeaturesStrings.totalPriceChange, style: const TextStyle(fontWeight: FontWeight.bold)),
                                Text.rich(
                                  TextSpan(
                                    style: DefaultTextStyle.of(context).style,
                                    children: [
                                      TextSpan(
                                        text: Utilities.formatPrice(context, referenceTotal),
                                        style: TextStyle(decoration: TextDecoration.lineThrough, color: theme.textTheme.bodySmall?.color),
                                      ),
                                      WidgetSpan(
                                        child: Padding(
                                          padding: const EdgeInsets.symmetric(horizontal: 6.0),
                                          child: Icon(Icons.arrow_forward, size: 16, color: theme.colorScheme.primary),
                                        ),
                                        alignment: PlaceholderAlignment.middle,
                                      ),
                                      TextSpan(
                                        text: Utilities.formatPrice(context, currentTotal),
                                        style: const TextStyle(fontWeight: FontWeight.bold),
                                      ),
                                    ],
                                  ),
                                )
                              ],
                            ),
                          )
                        ]
                      ],
                    ),
                  ),
                ] else
                  Padding(
                    padding: const EdgeInsets.only(left: 8.0, top: 4.0),
                    child: Text(FeaturesStrings.noProductChangesDetected, style: TextStyle(fontStyle: FontStyle.italic, color: theme.textTheme.bodySmall?.color)),
                  ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildConfirmationListItem(IconData icon, String text) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 8.0),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Icon(icon, size: 18, color: Theme.of(context).textTheme.bodySmall?.color),
          const SizedBox(width: 12),
          Expanded(child: Text(text)),
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    // figure out added vs removed
    final added   = _current.where((p) => !_orig.any((o) => o.id == p.id)).toList();
    final removed = _orig.where((p) => !_current.any((c) => c.id == p.id)).toList();

    // build unified list: orig items first (incl. removed), then newly added
    final allItems = [..._orig, ...added];

    final customerName = _bundle?.order.data != null
        ? "${_bundle!.order.data!["name"] ?? ""} ${_bundle!.order.data!["surname"] ?? ""}"
        : FeaturesStrings.dialogTitleFallback;

    // Combine order symbol and customer name for the title
    final dialogTitle = "${_bundle?.order.toBasicString() ?? ""} $customerName".trim();

    return AlertDialog(
      insetPadding: const EdgeInsets.all(16),
      titlePadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
      title: Row(
        children: [
          Expanded(child: SelectableText(dialogTitle)),
          IconButton(
            icon: const Icon(Icons.close),
            onPressed: () => Navigator.of(context).pop(false),
          )
        ],
      ),
      content: _loading
          ? const SizedBox(height: 120, child: Center(child: CircularProgressIndicator()))
          : SizedBox(
        width: StylesConfig.formMaxWidth,
        child: SingleChildScrollView(
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              if (_bundle != null) ...[
                _buildInfoPanel(),
                const Divider(height: 32),
              ],
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  _buildTotalColumn(FeaturesStrings.originalPrice, _sumOrig),
                  _buildTotalColumn(FeaturesStrings.currentPrice, _sumCur),
                  _buildChangeColumn(),
                ],
              ),
              const SizedBox(height: 16),
              if (allItems.isEmpty)
                Padding(
                  padding: const EdgeInsets.symmetric(vertical: 24.0),
                  child: SelectableText(FeaturesStrings.noProducts),
                )
              else
                ListView.separated(
                  shrinkWrap: true,
                  physics: const NeverScrollableScrollPhysics(),
                  itemCount: allItems.length,
                  separatorBuilder: (_, __) => const SizedBox(height: 8),
                  itemBuilder: (_, i) {
                    final p = allItems[i];
                    final pCurrent = _current.firstWhereOrNull((c) => c.id == p.id);
                    final pOrig = _orig.firstWhereOrNull((o) => o.id == p.id);

                    final isAdded = added.any((x) => x.id == p.id);
                    final isRemoved = removed.any((x) => x.id == p.id);
                    final isPriceChanged = !isAdded && !isRemoved && pCurrent != null && pOrig != null && pCurrent.price != pOrig.price;

                    final priceText = isAdded
                        ? "+${Utilities.formatPrice(context, p.price ?? 0, decimalDigits: 2)}"
                        : isRemoved
                        ? "-${Utilities.formatPrice(context, p.price ?? 0, decimalDigits: 2)}"
                        : isPriceChanged
                        ? "${Utilities.formatPrice(context, pCurrent!.price ?? 0, decimalDigits: 2)} (${Utilities.formatPrice(context, pOrig!.price ?? 0, decimalDigits: 2)})"
                        : Utilities.formatPrice(context, p.price ?? 0, decimalDigits: 2);

                    final priceColor = isAdded ? Colors.green : isRemoved ? Colors.red : isPriceChanged ? Colors.orange.shade700 : null;

                    return Card(
                      color: isAdded
                          ? Colors.green.withOpacityUniversal(context, 0.05)
                          : isRemoved
                          ? Colors.red.withOpacityUniversal(context, 0.05)
                          : isPriceChanged
                          ? Colors.orange.withOpacityUniversal(context, 0.05)
                          : null,
                      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
                      elevation: 1,
                      child: ListTile(
                        title: SelectableText(p.title ?? ""),
                        subtitle: SelectableText(p.productTypeTitleString ?? ""),
                        trailing: Row(
                          mainAxisSize: MainAxisSize.min,
                          children: [
                            SelectableText(
                              priceText,
                              style: TextStyle(fontWeight: FontWeight.bold, color: priceColor),
                            ),
                            const SizedBox(width: 8),
                            if (!isRemoved)
                              IconButton(
                                icon: const Icon(Icons.edit_outlined),
                                tooltip: FeaturesStrings.editPriceTooltip,
                                onPressed: pCurrent == null ? null : () => _editPrice(pCurrent),
                              ),
                            IconButton(
                              icon: Icon(isRemoved ? Icons.add : Icons.delete_outline),
                              tooltip: isRemoved ? FeaturesStrings.addBackTooltip : FeaturesStrings.removeTooltip,
                              onPressed: () => isRemoved ? _addBack(p) : _remove(p),
                            ),
                          ],
                        ),
                      ),
                    );
                  },
                ),
              const SizedBox(height: 12),
              Align(
                alignment: Alignment.centerRight,
                child: ElevatedButton.icon(
                  onPressed: _add,
                  icon: const Icon(Icons.add_shopping_cart),
                  label: Text(FeaturesStrings.addProductsButton),
                ),
              ),
            ],
          ),
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

  Widget _buildInfoPanel() {
    if (_bundle == null) return const SizedBox.shrink();

    final order = _bundle!.order;
    final payment = _bundle!.paymentInfo;
    final ticket = _bundle!.ticket;
    final history = _bundle!.orderHistory;

    final totalPaid = payment?.paid ?? 0;
    final orderPrice = order.price ?? 0;
    final isFullyPaid = totalPaid >= orderPrice && orderPrice > 0;

    return Column(
      children: [
        _buildInfoRow(FeaturesStrings.infoTicketSymbol, ticket.ticketSymbol ?? "N/A"),
        _buildInfoRow(FeaturesStrings.infoEmail, order.data?["email"] ?? "N/A"),
        _buildInfoRow(FeaturesStrings.infoOrderStatus, OrderModel.stateToLocale(order.state!)),
        _buildInfoRow(
            FeaturesStrings.infoPayment,
            "${Utilities.formatPrice(context, totalPaid)} / ${Utilities.formatPrice(context, orderPrice)}",
            valueColor: isFullyPaid ? Colors.green : Colors.orange.shade700),
        if (history.isNewerVersionAvailable)
          Padding(
            padding: const EdgeInsets.only(top: 8.0),
            child: Card(
              color: Colors.amber.withOpacity(0.1),
              elevation: 0,
              child: Padding(
                padding: const EdgeInsets.all(8.0),
                child: Column(
                  children: [
                    ListTile(
                      leading: Icon(Icons.warning_amber_rounded, color: Colors.amber.shade800),
                      title: Text(FeaturesStrings.outdatedTitle, style: TextStyle(fontWeight: FontWeight.bold, color: Colors.amber.shade900)),
                      subtitle: Text(FeaturesStrings.outdatedSubtitle),
                    ),
                    const SizedBox(height: 8),
                    ElevatedButton.icon(
                      onPressed: _showSendUpdateConfirmDialog,
                      icon: const Icon(Icons.email_outlined),
                      label: Text(FeaturesStrings.sendUpdateButton),
                      style: ElevatedButton.styleFrom(
                        backgroundColor: Colors.amber.shade700,
                        foregroundColor: Colors.white,
                      ),
                    )
                  ],
                ),
              ),
            ),
          )
      ],
    );
  }

  Widget _buildInfoRow(String label, String value, {Color? valueColor}) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 4.0),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Text(label, style: const TextStyle(fontWeight: FontWeight.bold)),
          SelectableText(
            value,
            style: TextStyle(color: valueColor, fontWeight: valueColor != null ? FontWeight.bold : null),
          ),
        ],
      ),
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
        SelectableText(FeaturesStrings.priceChange, style: const TextStyle(fontWeight: FontWeight.bold)),
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
  bool equals(List<ProductModel> other) {
    if (length != other.length) return false;

    final thisMap = {for (var p in this) p.id: p.price};
    final otherMap = {for (var p in other) p.id: p.price};

    if (thisMap.keys.length != otherMap.keys.length) return false;
    if (!thisMap.keys.every((key) => otherMap.containsKey(key))) return false;

    for (final id in thisMap.keys) {
      if (thisMap[id] != otherMap[id]) {
        return false;
      }
    }
    return true;
  }
}