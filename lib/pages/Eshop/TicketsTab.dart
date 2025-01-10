import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/dataGrid/DataGridAction.dart';
import 'package:fstapp/components/dataGrid/SingleTableDataGrid.dart';
import 'package:fstapp/dataModelsEshop/TbEshop.dart';
import 'package:fstapp/dataModelsEshop/TicketModel.dart';
import 'package:fstapp/dataServices/DbEshop.dart';
import 'package:fstapp/dataServices/RightsService.dart';
import 'package:fstapp/pages/Eshop/EshopColumns.dart';
import 'package:auto_route/auto_route.dart';
import 'package:fstapp/services/DialogHelper.dart';
import 'package:fstapp/services/ToastHelper.dart';

class TicketsTab extends StatefulWidget {
  const TicketsTab({super.key});

  @override
  _TicketsTabState createState() => _TicketsTabState();
}

class _TicketsTabState extends State<TicketsTab> {
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
    setState(() {
      refreshKey = UniqueKey();
    });
  }

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
  Widget build(BuildContext context) {
    return KeyedSubtree(
        key: refreshKey,
      child:
        SingleTableDataGrid<TicketModel>(
      context,
          () => DbEshop.getAllTickets(formLink!),
      TicketModel.fromPlutoJson,
      DataGridFirstColumn.check,
      TbEshop.tickets.id,
      actionsExtended: DataGridActionsController(
        areAllActionsEnabled: RightsService.canUpdateUsers,
        isAddActionPossible: () => false,
      ),
      headerChildren: [
        DataGridAction(
          name: "Storno".tr(),
          action: (SingleTableDataGrid dataGrid, [_]) => _stornoTickets(dataGrid),
          isEnabled: RightsService.isEditor,
        ),
      ],
      columns: EshopColumns.generateColumns(columnIdentifiers),
    ).DataGrid());
  }

  Future<void> _stornoTickets(SingleTableDataGrid dataGrid) async {
    var selectedTickets = _getCheckedTickets(dataGrid);

    if (selectedTickets.isEmpty) {
      return;
    }

    var confirm = await DialogHelper.showConfirmationDialogAsync(
      context,
      "Storno".tr(),
      "${"Are you sure you want to storno the selected tickets?".tr()} (${selectedTickets.length})",
    );

    if (confirm) {
      var stornoFutures = selectedTickets.map((ticket) {
        return () async {
        if(await DbEshop.stornoTicket(ticket.id!)) {
          ToastHelper.Show(context, "Storno completed for {ticket}.".tr(namedArgs: {
          "ticket": ticket.ticketSymbol ?? ticket.id.toString()
        }));
        } else{
          throw Exception("Ticket storno has failed.");
        }
      };
      }).toList();

      await DialogHelper.showProgressDialogAsync(
        context,
        "Processing".tr(),
        stornoFutures.length,
        futures: stornoFutures,
      );
      refreshData();
    }
  }

  List<TicketModel> _getCheckedTickets(SingleTableDataGrid dataGrid) {
    return List<TicketModel>.from(
      dataGrid.stateManager.refRows.originalList
          .where((row) => row.checked == true)
          .map((row) => TicketModel.fromPlutoJson(row.toJson())),
    );
  }
}
