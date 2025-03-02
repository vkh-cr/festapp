import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/single_data_grid/data_grid_action.dart';
import 'package:fstapp/components/single_data_grid/single_data_grid_controller.dart';
import 'package:fstapp/components/single_data_grid/single_table_data_grid.dart';
import 'package:fstapp/dataModelsEshop/OrderModel.dart';
import 'package:fstapp/dataModelsEshop/TbEshop.dart';
import 'package:fstapp/services/features/FeatureConstants.dart';
import 'package:fstapp/services/features/FeatureService.dart';
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

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    if (formLink == null && context.routeData.pathParams.isNotEmpty) {
      formLink = context.routeData.pathParams.getString("formLink");
    }
  }

  Future<void> refreshData() async {
    await controller!.forceReload();
  }

  @override
  Widget build(BuildContext context) {
    controller = SingleDataGridController<OrderModel>(
      context: context,
      loadData: () => DbOrders.getAllOrders(formLink!),
      fromPlutoJson: OrderModel.fromPlutoJson,
      firstColumnType: RightsService.isUnitManager()
          ? DataGridFirstColumn.deleteAndCheck
          : DataGridFirstColumn.check,
      idColumn: TbEshop.orders.id,
      actionsExtended: DataGridActionsController(
        areAllActionsEnabled: RightsService.canUpdateUsers,
        isAddActionPossible: () => false,
      ),
      headerChildren: [
        DataGridAction(
          name: "Cancel".tr(),
          action: (SingleDataGridController single_data_grid, [_]) => cancelOrders(single_data_grid),
          isEnabled: RightsService.isEditor,
        ),
        DataGridAction(
          name: "Synchronize payments".tr(),
          action: (SingleDataGridController single_data_grid, [_]) => synchronizePayments(),
          isEnabled: RightsService.isEditor,
        ),
        DataGridAction(
          name: "Send tickets".tr(),
          action: (SingleDataGridController single_data_grid, [_]) => sendTickets(single_data_grid),
          isEnabled: RightsService.isEditor,
        ),
      ],
      columns: EshopColumns.generateColumns(context, columnIdentifiers),
    );
      return SingleTableDataGrid<OrderModel>(controller!);
  }

  Future<void> synchronizePayments() async {
    await DbEshop.fetchTransactions(formLink!);
    refreshData();
  }

  Future<void> cancelOrders(SingleDataGridController single_data_grid) async {
    var selected = _getChecked(single_data_grid);
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

  Future<void> sendTickets(SingleDataGridController single_data_grid) async {
    var selected = _getChecked(single_data_grid);
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

  List<OrderModel> _getChecked(SingleDataGridController single_data_grid) {
    return List<OrderModel>.from(
      single_data_grid.stateManager.refRows.originalList
          .where((row) => row.checked == true)
          .map((row) => OrderModel.fromPlutoJson(row.toJson())),
    );
  }

  static List<String> columnIdentifiers = [
    EshopColumns.ORDER_ID,
    EshopColumns.ORDER_SYMBOL,
    EshopColumns.ORDER_DATA,
    EshopColumns.ORDER_EMAIL,
    if(!FeatureService.isFeatureEnabled(FeatureConstants.ticket))
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

  SingleDataGridController<OrderModel>? controller;
}