import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/dataGrid/DataGridAction.dart';
import 'package:fstapp/components/dataGrid/SingleTableDataGrid.dart';
import 'package:fstapp/dataModels/FormFieldModel.dart';
import 'package:fstapp/dataModels/FormResponseModel.dart';
import 'package:fstapp/dataModelsEshop/OrderModel.dart';
import 'package:fstapp/dataModelsEshop/TbEshop.dart';
import 'package:fstapp/dataServicesEshop/DbEshop.dart';
import 'package:fstapp/dataServices/RightsService.dart';
import 'package:fstapp/dataServicesEshop/DbForms.dart';
import 'package:fstapp/pages/eshop/EshopColumns.dart';
import 'package:auto_route/auto_route.dart';
import 'package:fstapp/services/DialogHelper.dart';
import 'package:fstapp/services/ToastHelper.dart';

class FormResponsesContent extends StatefulWidget {
  const FormResponsesContent({super.key});

  @override
  _FormResponsesContentState createState() => _FormResponsesContentState();
}

class _FormResponsesContentState extends State<FormResponsesContent> {
  List<FormFieldModel>? formFieldModels;

  String? formLink;
  Key refreshKey = UniqueKey();

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    if (formLink == null && context.routeData.pathParams.isNotEmpty) {
      formLink = context.routeData.pathParams.getString("formLink");
    }
    loadData();
  }

  Future<void> refreshData() async {
    if (mounted) {
      setState(() {
        refreshKey = UniqueKey(); // Properly trigger a rebuild
      });
    }
  }

  Future<void> loadData() async {
    var ff = await DbForms.getAllFormFields(formLink!);

    setState(() {
      formFieldModels = ff;
      refreshKey = UniqueKey();
    });
  }

  @override
  Widget build(BuildContext context) {
    return KeyedSubtree(
        key: refreshKey,
        child: SingleTableDataGrid<FormResponseModel>(
          context,
              () => DbForms.getAllResponses(formLink!),
          FormResponseModel.fromPlutoJson,
          DataGridFirstColumn.none,
          TbEshop.orders.id,
          actionsExtended: DataGridActionsController(
              areAllActionsEnabled: RightsService.canUpdateUsers,
              isAddActionPossible: () => false),
          headerChildren: [
          ],
          columns: EshopColumns.generateColumns(context, columnIdentifiers, data: {
            EshopColumns.RESPONSES: formFieldModels,
          }),
        ).DataGrid()
    );
  }


  List<OrderModel> _getChecked(SingleTableDataGrid dataGrid) {
    return List<OrderModel>.from(
      dataGrid.stateManager.refRows.originalList
          .where((row) => row.checked == true)
          .map((row) => OrderModel.fromPlutoJson(row.toJson())),
    );
  }

  static List<String> columnIdentifiers = [
    EshopColumns.ORDER_ID,
    EshopColumns.ORDER_SYMBOL,
    EshopColumns.ORDER_STATE,
    EshopColumns.RESPONSES
  ];
}