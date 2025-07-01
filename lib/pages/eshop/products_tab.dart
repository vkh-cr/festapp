import 'package:flutter/material.dart';
import 'package:fstapp/app_router.dart';
import 'package:fstapp/components/single_data_grid/data_grid_action.dart';
import 'package:fstapp/components/single_data_grid/single_data_grid_controller.dart';
import 'package:fstapp/components/single_data_grid/single_table_data_grid.dart';
import 'package:fstapp/data_models_eshop/product_model.dart';
import 'package:fstapp/data_models_eshop/tb_eshop.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/data_services_eshop/db_eshop.dart';
import 'package:fstapp/pages/eshop/eshop_columns.dart';
import 'package:auto_route/auto_route.dart';

class ProductsTab extends StatefulWidget {
  const ProductsTab({super.key});

  @override
  _ProductsTabState createState() => _ProductsTabState();
}

class _ProductsTabState extends State<ProductsTab> {
  String? occasionLink;
  late SingleDataGridController<ProductModel> controller;

  static const List<String> columnIdentifiers = [
    EshopColumns.PRODUCT_ID,
    EshopColumns.PRODUCT_IS_HIDDEN,
    EshopColumns.PRODUCT_TYPE,
    EshopColumns.PRODUCT_TITLE,
    EshopColumns.PRODUCT_DESCRIPTION,
    EshopColumns.PRODUCT_PRICE,
    EshopColumns.PRODUCT_CURRENCY_CODE,
    EshopColumns.PRODUCT_PAID_COUNT,
    EshopColumns.PRODUCT_ORDERED_COUNT,
    EshopColumns.PRODUCT_MAXIMUM,
    EshopColumns.PRODUCT_ORDER,
  ];

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    if (occasionLink == null && context.routeData.params.isNotEmpty) {
      occasionLink = context.routeData.params.getString(AppRouter.linkFormatted);
      controller = SingleDataGridController<ProductModel>(
        context: context,
        loadData: () => DbEshop.getProductsAndTypesForOccasion(occasionLink!),
        fromPlutoJson: ProductModel.fromPlutoJson,
        firstColumnType: DataGridFirstColumn.delete,
        idColumn: TbEshop.products.id,
        actionsExtended: DataGridActionsController(
          areAllActionsEnabled: () => RightsService.canUpdateOrders(),
          isAddActionPossible: () => false,
        ),
        columns: EshopColumns.generateColumns(context, columnIdentifiers, data: {EshopColumns.PRODUCT_DESCRIPTION: RightsService.currentOccasionId()}),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return SingleTableDataGrid<ProductModel>(controller);
  }
}
