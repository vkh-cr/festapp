import 'package:flutter/material.dart';
import 'package:fstapp/components/dataGrid/DataGridAction.dart';
import 'package:fstapp/components/dataGrid/SingleTableDataGrid.dart';
import 'package:fstapp/dataModelsEshop/OrderModel.dart';
import 'package:fstapp/dataModelsEshop/TbEshop.dart';
import 'package:fstapp/dataModelsEshop/TicketModel.dart';
import 'package:fstapp/dataServices/DbEshop.dart';
import 'package:fstapp/dataServices/RightsService.dart';
import 'package:fstapp/pages/Eshop/EshopColumns.dart';
import 'package:auto_route/auto_route.dart';

class TicketsTab extends StatefulWidget {
  const TicketsTab({super.key});

  @override
  _TicketsTabState createState() => _TicketsTabState();
}

class _TicketsTabState extends State<TicketsTab> {
  String? formKey;

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    if (formKey == null && context.routeData.pathParams.isNotEmpty) {
      formKey = context.routeData.pathParams.getString("formKey");
    }
  }

  static const List<String> columnIdentifiers = [
    EshopColumns.TICKET_ID,
    EshopColumns.ORDER_SYMBOL,
    EshopColumns.ORDER_DATA,
    EshopColumns.TICKET_SYMBOL,
    EshopColumns.TICKET_CREATED_AT,
    EshopColumns.TICKET_STATE,
    EshopColumns.TICKET_PRODUCTS,
    EshopColumns.TICKET_NOTE,
    EshopColumns.TICKET_NOTE_HIDDEN,
  ];

  @override
  Widget build(BuildContext context) {
    return SingleTableDataGrid<TicketModel>(
      context,
      () => DbEshop.getAllTickets(formKey!),
      TicketModel.fromPlutoJson,
      DataGridFirstColumn.check,
      TbEshop.tickets.id,
      actionsExtended: DataGridActionsController(
          areAllActionsEnabled: RightsService.canUpdateUsers,
          isAddActionPossible: () => false),
      columns: EshopColumns.generateColumns(columnIdentifiers),
    ).DataGrid();
  }
}