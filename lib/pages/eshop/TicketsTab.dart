import 'package:auto_route/auto_route.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/single_data_grid/data_grid_action.dart';
import 'package:fstapp/components/single_data_grid/single_data_grid_controller.dart';
import 'package:fstapp/components/single_data_grid/single_table_data_grid.dart';
import 'package:fstapp/dataModelsEshop/TbEshop.dart';
import 'package:fstapp/dataModelsEshop/TicketModel.dart';
import 'package:fstapp/dataServices/RightsService.dart';
import 'package:fstapp/dataServicesEshop/DbTickets.dart';
import 'package:fstapp/pages/eshop/EshopColumns.dart';
import 'package:fstapp/services/DialogHelper.dart';
import 'package:fstapp/services/TicketCodeHelper.dart';
import 'package:fstapp/services/ToastHelper.dart';

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
    EshopColumns.TICKET_PRODUCTS,
    EshopColumns.TICKET_NOTE,
    EshopColumns.TICKET_NOTE_HIDDEN,
  ];

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    if (formLink == null && context.routeData.pathParams.isNotEmpty) {
      formLink = context.routeData.pathParams.getString("formLink");
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
            action: (SingleDataGridController single_data_grid, [_]) =>
                _stornoTickets(single_data_grid),
            isEnabled: RightsService.isEditor,
          ),
          DataGridAction(
            name: "Scan tickets".tr(),
            action: (SingleDataGridController single_data_grid, [_]) =>
                _scanTickets(single_data_grid),
            isEnabled: RightsService.isEditor,
          ),
        ],
        columns: EshopColumns.generateColumns(context, columnIdentifiers),
      );
    }
  }

  Future<void> refreshData() async {
    await _controller.forceReload();
  }

  @override
  Widget build(BuildContext context) {
    return SingleTableDataGrid<TicketModel>(_controller);
  }

  Future<void> _scanTickets(SingleDataGridController single_data_grid) async {
    await TicketCodeHelper.showScanTicketCode(
      context,
      "Scan tickets".tr(),
      formLink!,
    );
  }

  Future<void> _stornoTickets(SingleDataGridController single_data_grid) async {
    var selectedTickets = _getCheckedTickets(single_data_grid);

    if (selectedTickets.isEmpty) {
      return;
    }

    var confirm = await DialogHelper.showConfirmationDialogAsync(
      context,
      "Cancel".tr(),
      "${"Are you sure you want to storno the selected tickets?".tr()} (${selectedTickets.length})",
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

  List<TicketModel> _getCheckedTickets(SingleDataGridController single_data_grid) {
    return List<TicketModel>.from(
      single_data_grid.stateManager.refRows.originalList
          .where((row) => row.checked == true)
          .map((row) => TicketModel.fromPlutoJson(row.toJson())),
    );
  }
}
