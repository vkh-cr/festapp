import 'package:auto_route/auto_route.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/app_router.dart';
import 'package:fstapp/components/features/feature_constants.dart';
import 'package:fstapp/components/features/feature_service.dart';
import 'package:fstapp/components/single_data_grid/data_grid_action.dart';
import 'package:fstapp/components/single_data_grid/single_data_grid_controller.dart';
import 'package:fstapp/components/single_data_grid/single_table_data_grid.dart';
import 'package:fstapp/components/eshop/models/ticket_model.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/data_services_eshop/db_tickets.dart';
import 'package:fstapp/services/dialog_helper.dart';
import 'package:fstapp/services/ticket_code_helper.dart';
import 'package:fstapp/services/toast_helper.dart';

import 'eshop_columns.dart';
import 'orders_strings.dart';

class TicketsTab extends StatefulWidget {
  const TicketsTab({super.key});

  @override
  _TicketsTabState createState() => _TicketsTabState();
}

class _TicketsTabState extends State<TicketsTab> {
  String? occasionLink;
  late SingleDataGridController<TicketModel> _controller;

  static const List<String> columnIdentifiers = [
    EshopColumns.TICKET_ID,
    EshopColumns.ORDER_SYMBOL,
    EshopColumns.ORDER_DATA,
    EshopColumns.TICKET_SYMBOL,
    EshopColumns.TICKET_CREATED_AT,
    EshopColumns.TICKET_STATE,
    EshopColumns.TICKET_CONFIRM,
    EshopColumns.TICKET_TOTAL_PRICE,
    EshopColumns.TICKET_SPOT,
    EshopColumns.TICKET_PRODUCTS_EXTENDED,
    EshopColumns.TICKET_PRODUCTS_EDIT,
    EshopColumns.TICKET_NOTE,
    EshopColumns.TICKET_NOTE_HIDDEN,
  ];

  @override
  Future<void> didChangeDependencies() async {
    super.didChangeDependencies();
    if (occasionLink == null && context.routeData.params.isNotEmpty) {
      occasionLink = context.routeData.params.getString(AppRouter.linkFormatted);
      _controller = SingleDataGridController<TicketModel>(
        context: context,
        loadData: () => DbTickets.getAllTickets(occasionLink!),
        fromPlutoJson: TicketModel.fromPlutoJson,
        firstColumnType: DataGridFirstColumn.check,
        idColumn: EshopColumns.TICKET_ID,
        actionsExtended: DataGridActionsController(
          areAllActionsEnabled: RightsService.isEditorOrder,
          isAddActionPossible: () => false,
        ),
        headerChildren: [
          DataGridAction(
            name: OrdersStrings.cancel,
            action: (SingleDataGridController singleDataGrid, [_]) =>
                _stornoTickets(singleDataGrid),
            isEnabled: RightsService.isOrderEditor,
          ),
          if(FeatureService.isFeatureEnabled(FeatureConstants.ticket))
            DataGridAction(
              name: OrdersStrings.scanActionText,
              action: (SingleDataGridController singleDataGrid, [_]) =>
                  _scanTickets(singleDataGrid),
              isEnabled: RightsService.isOrderEditor,
            ),
        ],
        columns: EshopColumns.generateColumns(context, columnIdentifiers,
          data: {
            EshopColumns.TICKET_PRODUCTS_EXTENDED: EshopColumns.productCategories,
            EshopColumns.TICKET_PRODUCTS_EDIT: refreshData,
            EshopColumns.TICKET_CONFIRM: refreshData
          },),
      );
    }
  }

  Future<void> refreshData() async {
    await _controller.reloadData();
  }

  @override
  Widget build(BuildContext context) {
    return SingleTableDataGrid<TicketModel>(_controller);
  }

  Future<void> _scanTickets(SingleDataGridController singleDataGrid) async {
    await TicketCodeHelper.showScanTicketCode(
      context,
      OrdersStrings.scanActionText,
      occasionLink!,
    );
  }

  Future<void> _stornoTickets(SingleDataGridController singleDataGrid) async {
    var selectedTickets = _getCheckedTickets(singleDataGrid);

    if (selectedTickets.isEmpty) {
      return;
    }

    var confirm = await DialogHelper.showConfirmationDialog(
      context,
      OrdersStrings.cancel,
      "${OrdersStrings.cancelItemsConfirmationText} (${selectedTickets.length})",
    );

    if (confirm) {
      var stornoFutures = selectedTickets.map((ticket) {
        return () async {
          if (await DbTickets.stornoTicket(ticket.id!)) {
            ToastHelper.Show(
              context,
              OrdersStrings.stornoCompletedText.tr(
                namedArgs: {
                  "item": ticket.ticketSymbol ?? ticket.id.toString(),
                },
              ),
            );
          } else {
            throw Exception(OrdersStrings.stornoFailed);
          }
        };
      }).toList();

      await DialogHelper.showProgressDialogAsync(
        context,
        OrdersStrings.processing,
        stornoFutures.length,
        futures: stornoFutures,
      );
      refreshData();
    }
  }

  List<TicketModel> _getCheckedTickets(SingleDataGridController singleDataGrid) {
    return List<TicketModel>.from(
      singleDataGrid.stateManager.refRows.originalList
          .where((row) => row.checked == true)
          .map((row) => TicketModel.fromPlutoJson(row.toJson())),
    );
  }
}