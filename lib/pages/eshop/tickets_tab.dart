import 'package:auto_route/auto_route.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/single_data_grid/data_grid_action.dart';
import 'package:fstapp/components/single_data_grid/single_data_grid_controller.dart';
import 'package:fstapp/components/single_data_grid/single_table_data_grid.dart';
import 'package:fstapp/data_models/form_response_model.dart';
import 'package:fstapp/data_models_eshop/tb_eshop.dart';
import 'package:fstapp/data_models_eshop/ticket_model.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/data_services_eshop/db_tickets.dart';
import 'package:fstapp/pages/eshop/eshop_columns.dart';
import 'package:fstapp/services/dialog_helper.dart';
import 'package:fstapp/services/ticket_code_helper.dart';
import 'package:fstapp/services/toast_helper.dart';

class TicketsTab extends StatefulWidget {
  const TicketsTab({super.key});

  @override
  _TicketsTabState createState() => _TicketsTabState();
}

class _TicketsTabState extends State<TicketsTab> {
  String? formLink;
  late SingleDataGridController<TicketModel> _controller;

  static const List<String> columnIdentifiers = [
    EshopColumns.TICKET_ID,
    EshopColumns.ORDER_SYMBOL,
    EshopColumns.ORDER_DATA,
    EshopColumns.TICKET_SYMBOL,
    EshopColumns.TICKET_CREATED_AT,
    EshopColumns.TICKET_STATE,
    EshopColumns.TICKET_TOTAL_PRICE,
    EshopColumns.TICKET_SPOT,
    EshopColumns.TICKET_PRODUCTS_EXTENDED,
    EshopColumns.TICKET_NOTE,
    EshopColumns.TICKET_NOTE_HIDDEN,
  ];

  @override
  Future<void> didChangeDependencies() async {
    super.didChangeDependencies();
    if (formLink == null && context.routeData.params.isNotEmpty) {
      formLink = context.routeData.params.getString("formLink");
      _controller = SingleDataGridController<TicketModel>(
        context: context,
        loadData: () => DbTickets.getAllTickets(formLink!),
        fromPlutoJson: TicketModel.fromPlutoJson,
        firstColumnType: DataGridFirstColumn.check,
        idColumn: TbEshop.tickets.id,
        actionsExtended: DataGridActionsController(
          areAllActionsEnabled: RightsService.canUpdateUsers,
          isAddActionPossible: () => false,
        ),
        headerChildren: [
          DataGridAction(
            name: "Cancel".tr(),
            action: (SingleDataGridController singleDataGrid, [_]) =>
                _stornoTickets(singleDataGrid),
            isEnabled: RightsService.isEditor,
          ),
          DataGridAction(
            name: "Scan tickets".tr(),
            action: (SingleDataGridController singleDataGrid, [_]) =>
                _scanTickets(singleDataGrid),
            isEnabled: RightsService.isEditor,
          ),
        ],
        columns: EshopColumns.generateColumns(context, columnIdentifiers,
          data: {
            EshopColumns.TICKET_PRODUCTS_EXTENDED: EshopColumns.productCategories,
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
      "Scan tickets".tr(),
      formLink!,
    );
  }

  Future<void> _stornoTickets(SingleDataGridController singleDataGrid) async {
    var selectedTickets = _getCheckedTickets(singleDataGrid);

    if (selectedTickets.isEmpty) {
      return;
    }

    var confirm = await DialogHelper.showConfirmationDialogAsync(
      context,
      "Cancel".tr(),
      "${"Do you want to cancel the selected tickets?".tr()} (${selectedTickets.length})",
    );

    if (confirm) {
      var stornoFutures = selectedTickets.map((ticket) {
        return () async {
          if (await DbTickets.stornoTicket(ticket.id!)) {
            ToastHelper.Show(
              context,
              "Storno completed for {ticket}.".tr(
                namedArgs: {
                  "ticket": ticket.ticketSymbol ?? ticket.id.toString()
                },
              ),
            );
          } else {
            throw Exception("Ticket cancel has failed.");
          }
        };
      }).toList();

      await DialogHelper.showProgressDialogAsync(
        context,
        "Processing...".tr(),
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
