import 'package:flutter/material.dart';
import 'package:fstapp/components/dataGrid/SingleTableDataGrid.dart';
import 'package:fstapp/dataModelsEshop/OrderModel.dart';
import 'package:fstapp/dataModelsEshop/TbEshop.dart';
import 'package:fstapp/dataServices/DbEshop.dart';
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
    EshopColumns.CUSTOMER_DATA,
    EshopColumns.ORDER_STATE,
    EshopColumns.ORDER_PRICE,
    EshopColumns.PAYMENT_INFO_PAID,
  ];

  @override
  Widget build(BuildContext context) {
    return SingleTableDataGrid<OrderModel>(
      context,
      () => DbEshop.getAllOrders(formKey!),
      OrderModel.fromPlutoJson,
      DataGridFirstColumn.none,
      TbEshop.orders.id,
      columns: EshopColumns.generateColumns(columnIdentifiers),
    ).DataGrid();
  }
}