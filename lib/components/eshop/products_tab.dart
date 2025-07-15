import 'package:auto_route/auto_route.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/app_router.dart';
import 'package:fstapp/components/features/feature_constants.dart';
import 'package:fstapp/components/features/feature_service.dart';
import 'package:fstapp/components/single_data_grid/data_grid_action.dart';
import 'package:fstapp/components/single_data_grid/single_data_grid_controller.dart';
import 'package:fstapp/components/single_data_grid/single_table_data_grid.dart';
import 'package:fstapp/components/eshop/models/product_edit_bundle.dart';
import 'package:fstapp/components/eshop/models/product_model.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/data_services_eshop/db_eshop.dart';

import 'eshop_columns.dart';
import 'models/tb_eshop.dart';

class ProductsTab extends StatefulWidget {
  const ProductsTab({super.key});

  @override
  _ProductsTabState createState() => _ProductsTabState();
}

class _ProductsTabState extends State<ProductsTab> {
  ProductsEditBundle? _bundle;
  bool _isLoading = true;

  // REORDERED column list
  static List<String> columnIdentifiers = [
    EshopColumns.PRODUCT_ID,
    EshopColumns.PRODUCT_IS_HIDDEN,
    EshopColumns.PRODUCT_TYPE,
    EshopColumns.PRODUCT_TITLE,
    if(FeatureService.isFeatureEnabled(FeatureConstants.services))
      EshopColumns.PRODUCT_INCLUDED_INVENTORY,
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
    if (_bundle == null && _isLoading) {
      _loadData();
    }
  }

  Future<void> _loadData() async {
    final occasionLink = context.routeData.params.getString(AppRouter.linkFormatted);
    final bundle = await DbEshop.getProductsAndTypesForOccasion(occasionLink);
    if (mounted) {
      setState(() {
        _bundle = bundle;
        _isLoading = false;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    if (_isLoading) {
      return const Center(child: CircularProgressIndicator());
    }

    if (_bundle == null) {
      return Center(child: Text("No data to display.".tr()));
    }

    final controller = SingleDataGridController<ProductModel>(
      context: context,
      loadData: () async => _bundle!.products,
      fromPlutoJson: ProductModel.fromPlutoJson,
      firstColumnType: DataGridFirstColumn.delete,
      idColumn: TbEshop.products.id,
      actionsExtended: DataGridActionsController(
        areAllActionsEnabled: () => RightsService.canUpdateOrders(),
        isAddActionPossible: () => false,
      ),
      columns: EshopColumns.generateColumns(
        context,
        columnIdentifiers,
        data: {
          EshopColumns.PRODUCT_DESCRIPTION: RightsService.currentOccasionId(),
          EshopColumns.PRODUCT_INCLUDED_INVENTORY: _bundle!.inventoryContexts,
        },
      ),
    );

    return SingleTableDataGrid<ProductModel>(controller);
  }
}