import 'package:flutter/material.dart';
import 'package:fstapp/components/eshop/eshop_columns.dart';
import 'package:fstapp/components/single_data_grid/data_grid_action.dart';
import 'package:fstapp/components/single_data_grid/single_data_grid_controller.dart';
import 'package:fstapp/components/single_data_grid/single_table_data_grid.dart';
import 'package:fstapp/components/forms/models/form_field_model.dart';
import 'package:fstapp/components/forms/models/form_response_model.dart';
import 'package:fstapp/components/eshop/models/tb_eshop.dart';
import 'package:fstapp/components/forms/db_forms.dart';
import 'package:fstapp/data_services/rights_service.dart';

class FormResponsesContent extends StatefulWidget {
  final String formLink;
  const FormResponsesContent({super.key, required this.formLink});

  @override
  _FormResponsesContentState createState() => _FormResponsesContentState();
}

class _FormResponsesContentState extends State<FormResponsesContent> {
  List<FormFieldModel>? formFieldModels;
  String? _formLink; // Renamed to avoid confusion
  SingleDataGridController<FormResponseModel>? controller;

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    final newFormLink = widget.formLink;
    if (newFormLink != _formLink) {
      _formLink = newFormLink;
      loadData();
    }
  }

  Future<void> loadData() async {
    if (_formLink == null) return;
    var ff = await DbForms.getAllFormFields(_formLink!);
    if (mounted) {
      setState(() {
        formFieldModels = ff;
        controller = SingleDataGridController<FormResponseModel>(
          context: context,
          loadData: () => DbForms.getAllResponses(_formLink!),
          fromPlutoJson: (Map<String, dynamic> json) {
            return FormResponseModel.fromPlutoJson(json, formFieldModels ?? []);
          },
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
            data: {
              EshopColumns.RESPONSES: formFieldModels,
              EshopColumns.TICKET_PRODUCTS_EXTENDED:
                  EshopColumns.productCategories,
            },
          ),
          exportOptions:
              ExportOptions(fileName: "${_formLink ?? ""}-responses"),
        );
      });
    }
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
    EshopColumns.TICKET_PRODUCTS_EXTENDED,
    EshopColumns.ORDER_STATE,
    EshopColumns.RESPONSES
  ];
}
