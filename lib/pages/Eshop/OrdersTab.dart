import 'package:flutter/material.dart';
import 'package:fstapp/components/dataGrid/DataGridAction.dart';
import 'package:fstapp/components/dataGrid/SingleTableDataGrid.dart';
import 'package:fstapp/dataModelsEshop/OrderModel.dart';
import 'package:fstapp/dataModelsEshop/TbEshop.dart';
import 'package:fstapp/dataServices/DbEshop.dart';
import 'package:fstapp/dataServices/RightsService.dart';
import 'package:fstapp/pages/Eshop/EshopColumns.dart';
import 'package:auto_route/auto_route.dart';

class OrdersTab extends StatefulWidget {
  const OrdersTab({super.key});

  @override
  _OrdersTabState createState() => _OrdersTabState();
}

class _OrdersTabState extends State<OrdersTab> {
  String? formKey;

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    if (formKey == null && context.routeData.pathParams.isNotEmpty) {
      formKey = context.routeData.pathParams.getString("formKey");
    }
  }

  static const List<String> columnIdentifiers = [
    EshopColumns.ORDER_ID,
    EshopColumns.ORDER_SYMBOL,
    EshopColumns.ORDER_DATA,
    EshopColumns.ORDER_STATE,
    EshopColumns.ORDER_PRICE,
    EshopColumns.PAYMENT_INFO_PAID,
    EshopColumns.PAYMENT_INFO_VARIABLE_SYMBOL,
    EshopColumns.ORDER_DATA_NOTE,
    EshopColumns.ORDER_DATA_NOTE_HIDDEN,
    EshopColumns.PAYMENT_INFO_DEADLINE,
  ];

  @override
  Widget build(BuildContext context) {
    return SingleTableDataGrid<OrderModel>(
      context,
      () => DbEshop.getAllOrders(formKey!),
      OrderModel.fromPlutoJson,
      DataGridFirstColumn.check,
      TbEshop.orders.id,
      actionsExtended: DataGridActionsController(
          areAllActionsEnabled: RightsService.canUpdateUsers,
          isAddActionPossible: () => false),
      columns: EshopColumns.generateColumns(columnIdentifiers),
    ).DataGrid();
  }
}