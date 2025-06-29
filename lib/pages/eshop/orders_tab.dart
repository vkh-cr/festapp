import 'package:flutter/material.dart';
import 'package:fstapp/app_router.dart';
import 'package:fstapp/components/features/features_strings.dart';
import 'package:fstapp/components/single_data_grid/data_grid_action.dart';
import 'package:fstapp/components/single_data_grid/single_data_grid_controller.dart';
import 'package:fstapp/components/single_data_grid/single_table_data_grid.dart';
import 'package:fstapp/data_models_eshop/order_model.dart';
import 'package:fstapp/data_models_eshop/tb_eshop.dart';
import 'package:fstapp/components/features/feature_constants.dart';
import 'package:fstapp/components/features/feature_service.dart';
import 'package:fstapp/data_services_eshop/db_eshop.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/data_services_eshop/db_orders.dart';
import 'package:fstapp/data_services_eshop/db_tickets.dart';
import 'package:fstapp/pages/eshop/eshop_columns.dart';
import 'package:auto_route/auto_route.dart';
import 'package:fstapp/services/dialog_helper.dart';

class OrdersTab extends StatefulWidget {
  const OrdersTab({super.key});

  @override
  _OrdersTabState createState() => _OrdersTabState();
}

class _OrdersTabState extends State<OrdersTab> {
  String? occasionLink;
  SingleDataGridController<OrderModel>? controller;

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    final newOccasionLink = context.routeData.params.getString(AppRouter.linkFormatted);
    // Initialize only once when the link is available
    if (occasionLink == null) {
      occasionLink = newOccasionLink;
      _initializeController();
    }
  }

  Future<void> _initializeController() async {
    // Fetch the bundle once to determine which columns to show
    final bundle = await DbOrders.getAllOrdersBundle(occasionLink!);
    if (!mounted) return;

    // Start with the base list of columns
    List<String> columnIdentifiers = [
      EshopColumns.ORDER_ID,
      EshopColumns.ORDER_SYMBOL,
      EshopColumns.ORDER_DATA,
      EshopColumns.ORDER_EMAIL,
      if (!FeatureService.isFeatureEnabled(FeatureConstants.ticket))
        EshopColumns.TICKET_PRODUCTS,
      EshopColumns.ORDER_CREATED_AT,
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

    // Conditionally add the form column if there are multiple forms
    if (bundle.forms.length > 1) {
      final symbolIndex = columnIdentifiers.indexOf(EshopColumns.ORDER_SYMBOL);
      columnIdentifiers.insert(symbolIndex + 1, EshopColumns.ORDER_FORM);
    }

    // Create the controller with the final column list
    final newController = SingleDataGridController<OrderModel>(
      context: context,
      loadData: () async {
        final newBundle = await DbOrders.getAllOrdersBundle(occasionLink!);
        return newBundle.orders;
      },
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
          name: FeaturesStrings.cancel,
          action: (SingleDataGridController singleDataGrid, [_]) => cancelOrders(singleDataGrid),
          isEnabled: RightsService.isOrderEditor,
        ),
        DataGridAction(
          name: FeaturesStrings.synchronizePayments,
          action: (SingleDataGridController singleDataGrid, [_]) => synchronizePayments(),
          isEnabled: RightsService.isOrderEditor,
        ),
        DataGridAction(
          name: FeaturesStrings.sendActionText,
          action: (SingleDataGridController singleDataGrid, [_]) => sendTicketsOrConfirmations(singleDataGrid),
          isEnabled: RightsService.isOrderEditor,
        ),
      ],
      columns: EshopColumns.generateColumns(context, columnIdentifiers, data: { EshopColumns.ORDER_TRANSACTIONS: refreshData }),
    );

    if(mounted) {
      setState(() {
        controller = newController;
      });
    }
  }

  Future<void> refreshData() async {
    await controller?.reloadData();
  }

  @override
  Widget build(BuildContext context) {
    if (controller == null) {
      return const Center(child: CircularProgressIndicator());
    }
    return SingleTableDataGrid<OrderModel>(controller!);
  }

  Future<void> synchronizePayments() async {
    await DbEshop.fetchTransactions(occasionLink!);
    refreshData();
  }

  Future<void> cancelOrders(SingleDataGridController singleDataGrid) async {
    var selected = _getChecked(singleDataGrid);
    if (selected.isEmpty) {
      return;
    }

    if (selected.isNotEmpty) {
      var confirm = await DialogHelper.showConfirmationDialogAsync(
          context,
          FeaturesStrings.cancel,
          "${FeaturesStrings.cancelOrdersConfirmationText} (${selected.length})"
      );

      if (confirm && mounted) {
        var futures = selected.map((s) {
          return () async {
            await DbOrders.stornoOrder(s.id!);
          };
        }).toList();

        await DialogHelper.showProgressDialogAsync(
            context,
            FeaturesStrings.processing,
            futures.length,
            futures: futures
        );
        refreshData();
      }
    }
  }

  Future<void> sendTicketsOrConfirmations(SingleDataGridController singleDataGrid) async {
    var selected = _getChecked(singleDataGrid);
    if (selected.isEmpty) {
      return;
    }

    List<OrderModel> selectedFull = [];

    var ordersBundle = await DbOrders.getAllOrdersBundle(occasionLink!);
    for (var s in selected) {
      var o = ordersBundle.orders.firstWhere((o) => o.id == s.id);
      selectedFull.add(o);
    }
    var stateChange = selectedFull.where((s) => s.state == OrderModel.orderedState);
    if (stateChange.isNotEmpty) {
      var confirm = await DialogHelper.showConfirmationDialogAsync(
          context,
          FeaturesStrings.changeStateToPaid,
          "${FeaturesStrings.changeStateToPaidConfirmation} (${stateChange.length})"
      );

      if (confirm) {
        var futures = stateChange.map((s) {
          return () async {
            await DbOrders.updateOrderAndTicketsToPaid(s.id!);
          };
        }).toList();

        await DialogHelper.showProgressDialogAsync(
            context,
            FeaturesStrings.processing,
            futures.length,
            futures: futures,
            isBasic: true
        );
        refreshData();
      }
    }

    var confirm = await DialogHelper.showConfirmationDialogAsync(
        context,
        FeaturesStrings.sendActionText,
        "${FeaturesStrings.sendActionConfirmationText} (${selected.length})"
    );

    if (confirm) {
      var futures = selectedFull.map((s) {
        return () async {
          await sendTicketsToEmail(s);
        };
      }).toList();

      await DialogHelper.showProgressDialogAsync(
          context,
          FeaturesStrings.processing,
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

  List<OrderModel> _getChecked(SingleDataGridController singleDataGrid) {
    return List<OrderModel>.from(
      singleDataGrid.stateManager.refRows.originalList
          .where((row) => row.checked == true)
          .map((row) => OrderModel.fromPlutoJson(row.toJson())),
    );
  }
}