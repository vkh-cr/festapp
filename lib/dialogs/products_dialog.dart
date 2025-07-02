import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/features/features_strings.dart';
import 'package:fstapp/data_models_eshop/order_model.dart';
import 'package:fstapp/data_models_eshop/product_model.dart';
import 'package:fstapp/data_services_eshop/db_eshop.dart';
import 'package:fstapp/services/dialog_helper.dart';
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
      _orig = _bundle!.ticket.relatedProducts ?? [];
      _current = List.from(_orig);
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

  Future<void> _save() async {
    final success = await DbEshop.updateProductsForOrder(
      widget.ticketId,
      _current.map((p) => p.id!).toList(),
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

    // Calculate balance. A negative value means an overpayment (refund is due).
    final totalPaid = payment.paid ?? 0;
    final orderPrice = order.price ?? 0;
    final balance = orderPrice - totalPaid;

    final confirmed = await DialogHelper.showConfirmationDialogRich(
      context: context,
      title: FeaturesStrings.sendUpdateTitle,
      content: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(FeaturesStrings.sendUpdateContent(order.data?["email"] ?? "N/A")),
          const SizedBox(height: 12),
          _buildConfirmationListItem(Icons.credit_card, FeaturesStrings.sendUpdateItemStatus),
          // Conditionally show item for balance due
          if (balance > 0)
            _buildConfirmationListItem(Icons.qr_code_2, FeaturesStrings.sendUpdateItemQr),
          // Conditionally show item for overpayment / refund
          if (balance < 0)
            _buildConfirmationListItem(Icons.undo_outlined, FeaturesStrings.sendUpdateItemRefund),
          _buildConfirmationListItem(Icons.receipt_long_outlined, FeaturesStrings.sendUpdateItemSummary),
        ],
      ),
      confirmButtonText: FeaturesStrings.sendEmailButton,
    );

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
                    final isAdded = added.any((x) => x.id == p.id);
                    final isRemoved = removed.any((x) => x.id == p.id);

                    final priceText = isAdded
                        ? "+${Utilities.formatPrice(context, p.price ?? 0, decimalDigits: 2)}"
                        : isRemoved
                        ? "-${Utilities.formatPrice(context, p.price ?? 0, decimalDigits: 2)}"
                        : Utilities.formatPrice(context, p.price ?? 0, decimalDigits: 2);

                    final priceColor = isAdded ? Colors.green : isRemoved ? Colors.red : null;

                    return Card(
                      color: isAdded
                          ? Colors.green.withOpacityUniversal(context, 0.05)
                          : isRemoved
                          ? Colors.red.withOpacityUniversal(context, 0.05)
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
  bool equals(List<ProductModel> o) {
    if (length != o.length) return false;
    final a = map((e) => e.id).toSet();
    final b = o.map((e) => e.id).toSet();
    return a.containsAll(b);
  }
}