import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/dataGrid/DataGridAction.dart';
import 'package:fstapp/components/dataGrid/SingleTableDataGrid.dart';
import 'package:fstapp/dataModelsEshop/OrderModel.dart';
import 'package:fstapp/dataModelsEshop/TbEshop.dart';
import 'package:fstapp/dataServices/featureService.dart';
import 'package:fstapp/dataServicesEshop/DbEshop.dart';
import 'package:fstapp/dataServices/RightsService.dart';
import 'package:fstapp/dataServicesEshop/DbOrders.dart';
import 'package:fstapp/dataServicesEshop/DbTickets.dart';
import 'package:fstapp/pages/eshop/EshopColumns.dart';
import 'package:auto_route/auto_route.dart';
import 'package:fstapp/services/DialogHelper.dart';

class OrdersTab extends StatefulWidget {
  const OrdersTab({super.key});

  @override
  _OrdersTabState createState() => _OrdersTabState();
}

class _OrdersTabState extends State<OrdersTab> {
  String? formLink;
  Key refreshKey = UniqueKey();

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    if (formLink == null && context.routeData.pathParams.isNotEmpty) {
      formLink = context.routeData.pathParams.getString("formLink");
    }
  }

  Future<void> refreshData() async {
    if (mounted) {
      setState(() {
        refreshKey = UniqueKey(); // Properly trigger a rebuild
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return KeyedSubtree(
        key: refreshKey,
        child: SingleTableDataGrid<OrderModel>(
          context,
              () => DbOrders.getAllOrders(formLink!),
          OrderModel.fromPlutoJson,
          RightsService.isUnitManager() ? DataGridFirstColumn.deleteAndCheck : DataGridFirstColumn.check,
          TbEshop.orders.id,
          actionsExtended: DataGridActionsController(
              areAllActionsEnabled: RightsService.canUpdateUsers,
              isAddActionPossible: () => false),
          headerChildren: [
            DataGridAction(
              name: "Cancel".tr(),
              action: (SingleTableDataGrid dataGrid, [_]) => cancelOrders(dataGrid),
              isEnabled: RightsService.isEditor,
            ),
            DataGridAction(
              name: "Synchronize payments".tr(),
              action: (SingleTableDataGrid dataGrid, [_]) => synchronizePayments(),
              isEnabled: RightsService.isEditor,
            ),
            DataGridAction(
              name: "Send tickets".tr(),
              action: (SingleTableDataGrid dataGrid, [_]) => sendTickets(dataGrid),
              isEnabled: RightsService.isEditor,
            ),
          ],
          columns: EshopColumns.generateColumns(context, columnIdentifiers),
        ).DataGrid()
    );
  }

  Future<void> synchronizePayments() async {
    await DbEshop.fetchTransactions(formLink!);
    refreshData();
  }

  Future<void> cancelOrders(SingleTableDataGrid dataGrid) async {
    var selected = _getChecked(dataGrid);
    if (selected.isEmpty) {
      return;
    }

    if (selected.isNotEmpty) {
      var confirm = await DialogHelper.showConfirmationDialogAsync(
          context,
          "Cancel".tr(),
          "${"Do you want to cancel orders and all included tickets? The customer will receive an email about this cancellation.".tr()} (${selected.length})"
      );

      if (confirm && mounted) {
        var futures = selected.map((s) {
          return () async {
            await DbOrders.stornoOrder(s.id!);
          };
        }).toList();

        await DialogHelper.showProgressDialogAsync(
            context,
            "Processing...".tr(),
            futures.length,
            futures: futures
        );
        refreshData();
      }
    }
  }

  Future<void> sendTickets(SingleTableDataGrid dataGrid) async {
    var selected = _getChecked(dataGrid);
    if (selected.isEmpty) {
      return;
    }

    List<OrderModel> selectedFull = [];

    var allOrders = await DbOrders.getAllOrders(formLink!);
    for (var s in selected) {
      var o = allOrders.firstWhere((o) => o.id == s.id);
      selectedFull.add(o);
    }
    var stateChange = selectedFull.where((s) => s.state == OrderModel.orderedState);
    if (stateChange.isNotEmpty) {
      var confirm = await DialogHelper.showConfirmationDialogAsync(
          context,
          "Change state to paid".tr(),
          "${"Do you want to change orders to paid?".tr()} (${stateChange.length})"
      );

      if (confirm && mounted) {
        var futures = stateChange.map((s) {
          return () async {
            await DbOrders.updateOrderAndTicketsToPaid(s.id!);
          };
        }).toList();

        await DialogHelper.showProgressDialogAsync(
            context,
            "Processing...".tr(),
            futures.length,
            futures: futures,
            isBasic: true
        );
        refreshData();
      }
    }

    var confirm = await DialogHelper.showConfirmationDialogAsync(
        context,
        "Send tickets".tr(),
        "${"Do you want to send the tickets to orders?".tr()} (${selected.length})"
    );

    if (confirm && mounted) {
      var futures = selectedFull.map((s) {
        return () async {
          await sendTicketsToEmail(s);
        };
      }).toList();

      await DialogHelper.showProgressDialogAsync(
          context,
          "Processing...".tr(),
          futures.length,
          futures: futures
      );
      refreshData();
    }
  }

  Future<void> sendTicketsToEmail(OrderModel order) async {
    await DbTickets.sendTicketsToEmail(
      orderId: order.id!,
      email: order.data!["email"],
    );
  }

  List<OrderModel> _getChecked(SingleTableDataGrid dataGrid) {
    return List<OrderModel>.from(
      dataGrid.stateManager.refRows.originalList
          .where((row) => row.checked == true)
          .map((row) => OrderModel.fromPlutoJson(row.toJson())),
    );
  }

  static List<String> columnIdentifiers = [
    EshopColumns.ORDER_ID,
    EshopColumns.ORDER_SYMBOL,
    EshopColumns.ORDER_DATA,
    EshopColumns.ORDER_EMAIL,
    if(!FeatureService.isFeatureEnabled(FeatureService.ticket))
    EshopColumns.TICKET_PRODUCTS,
    EshopColumns.ORDER_STATE,
    EshopColumns.ORDER_PRICE,
    EshopColumns.PAYMENT_INFO_PAID,
    EshopColumns.PAYMENT_INFO_RETURNED,
    EshopColumns.PAYMENT_INFO_VARIABLE_SYMBOL,
    EshopColumns.ORDER_DATA_NOTE,
    EshopColumns.ORDER_NOTE_HIDDEN,
    EshopColumns.PAYMENT_INFO_DEADLINE,
    EshopColumns.ORDER_TRANSACTIONS,
    EshopColumns.ORDER_HISTORY,
  ];
}