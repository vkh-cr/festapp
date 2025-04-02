import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/single_data_grid/data_grid_helper.dart';
import 'package:fstapp/components/single_data_grid/single_data_grid_controller.dart';
import 'package:fstapp/dataModels/InformationModel.dart';
import 'package:fstapp/components/single_data_grid/single_table_data_grid.dart';
import 'package:fstapp/dataModels/Tb.dart';
import 'package:fstapp/dataServices/DbInformation.dart';
import 'package:trina_grid/trina_grid.dart';

class InformationContent extends StatefulWidget {
  const InformationContent({super.key});

  @override
  _InformationContentState createState() => _InformationContentState();
}

class _InformationContentState extends State<InformationContent> {
  SingleDataGridController<InformationModel>? controller;

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    controller ??= SingleDataGridController<InformationModel>(
        context: context,
        loadData: DbInformation.getAllInformationForDataGrid,
        fromPlutoJson: InformationModel.fromPlutoJson,
        firstColumnType: DataGridFirstColumn.deleteAndDuplicate,
        idColumn: Tb.information.id,
        columns: [
          TrinaColumn(
            hide: true,
            title: "Id".tr(),
            field: Tb.information.id,
            type: TrinaColumnType.number(defaultValue: -1),
            readOnly: true,
            width: 50,
            renderer: (rendererContext) =>
                DataGridHelper.idRenderer(rendererContext),
          ),
          TrinaColumn(
            title: "Hide".tr(),
            field: Tb.information.is_hidden,
            type: TrinaColumnType.text(),
            applyFormatterInEditing: true,
            enableEditingMode: false,
            width: 100,
            renderer: (rendererContext) => DataGridHelper.checkBoxRenderer(
                rendererContext, Tb.information.is_hidden),
          ),
          TrinaColumn(
            title: "Title".tr(),
            field: Tb.information.title,
            type: TrinaColumnType.text(),
          ),
          TrinaColumn(
            width: 150,
            title: "Content".tr(),
            field: Tb.information.description,
            type: TrinaColumnType.text(),
            renderer: (rendererContext) {
              return DataGridHelper.buildHtmlEditorButton(
                context: context,
                field: Tb.information.description,
                rendererContext: rendererContext,
                loadContent: () async {
                  var id = rendererContext.row.cells[Tb.information.id]!.value;
                  if (id != null) {
                    var infoDescription =
                    await DbInformation.getInfosDescription([id]);
                    if (infoDescription.isNotEmpty) {
                      return infoDescription[0].description;
                    }
                  }
                  return null;
                },
              );
            },
          ),
          TrinaColumn(
            title: "Order".tr(),
            field: Tb.information.order,
            type: TrinaColumnType.number(defaultValue: null),
            applyFormatterInEditing: true,
            width: 100,
          ),
          TrinaColumn(
            title: "Type".tr(),
            field: Tb.information.type,
            type: TrinaColumnType.text(),
          ),
        ],
      );
  }

  @override
  Widget build(BuildContext context) {
    return SingleTableDataGrid<InformationModel>(controller!);
  }
}