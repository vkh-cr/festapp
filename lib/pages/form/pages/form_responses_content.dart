import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/single_data_grid/data_grid_action.dart';
import 'package:fstapp/components/single_data_grid/single_data_grid_controller.dart';
import 'package:fstapp/components/single_data_grid/single_table_data_grid.dart';
import 'package:fstapp/dataModels/FormFieldModel.dart';
import 'package:fstapp/dataModels/FormResponseModel.dart';
import 'package:fstapp/dataModelsEshop/TbEshop.dart';
import 'package:fstapp/dataServicesEshop/DbForms.dart';
import 'package:fstapp/dataServices/RightsService.dart';
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
  SingleDataGridController<FormResponseModel>? controller;

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    if (formLink == null && context.routeData.params.isNotEmpty) {
      formLink = context.routeData.params.getString("formLink");
      loadData();
    }
  }

  Future<void> loadData() async {
    var ff = await DbForms.getAllFormFields(formLink!);
    setState(() {
      formFieldModels = ff;
      controller = SingleDataGridController<FormResponseModel>(
        context: context,
        loadData: () => DbForms.getAllResponses(formLink!),
        fromPlutoJson: FormResponseModel.fromPlutoJson,
        firstColumnType: DataGridFirstColumn.none,
        idColumn: TbEshop.orders.id,
        actionsExtended: DataGridActionsController(
          areAllActionsEnabled: RightsService.canUpdateUsers,
          isAddActionPossible: () => false,
        ),
        headerChildren: [],
        columns: EshopColumns.generateColumns(
          context,
          columnIdentifiers,
          data: {EshopColumns.RESPONSES: formFieldModels},
        ),
      );
    });
  }

  Future<void> refreshData() async {
    await controller?.reloadData();
  }

  @override
  Widget build(BuildContext context) {
    if (controller == null) {
      return const Center(child: CircularProgressIndicator());
    }
    return SingleTableDataGrid<FormResponseModel>(controller!);
  }

  static List<String> columnIdentifiers = [
    EshopColumns.ORDER_ID,
    EshopColumns.ORDER_SYMBOL,
    EshopColumns.TICKET_PRODUCTS,
    EshopColumns.ORDER_STATE,
    EshopColumns.RESPONSES
  ];
}
