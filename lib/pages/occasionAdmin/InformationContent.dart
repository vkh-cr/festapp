import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/single_data_grid/data_grid_helper.dart';
import 'package:fstapp/components/single_data_grid/single_data_grid_controller.dart';
import 'package:fstapp/dataModels/InformationModel.dart';
import 'package:fstapp/components/single_data_grid/single_table_data_grid.dart';
import 'package:fstapp/dataModels/Tb.dart';
import 'package:fstapp/dataServices/DbInformation.dart';
import 'package:pluto_grid_plus/pluto_grid_plus.dart';

class InformationContent extends StatelessWidget {
  const InformationContent({super.key});

  @override
  Widget build(BuildContext context) {
    return SingleTableDataGrid<InformationModel>(
      SingleDataGridController<InformationModel>(
        context: context,
        loadData: DbInformation.getAllInformationForDataGrid,
        fromPlutoJson: InformationModel.fromPlutoJson,
        firstColumnType: DataGridFirstColumn.deleteAndDuplicate,
        idColumn: Tb.information.id,
        columns: [
          PlutoColumn(
            hide: true,
            title: "Id".tr(),
            field: Tb.information.id,
            type: PlutoColumnType.number(defaultValue: -1),
            readOnly: true,
            width: 50,
            renderer: (rendererContext) =>
                DataGridHelper.idRenderer(rendererContext),
          ),
          PlutoColumn(
            title: "Hide".tr(),
            field: Tb.information.is_hidden,
            type: PlutoColumnType.select([]),
            applyFormatterInEditing: true,
            enableEditingMode: false,
            width: 100,
            renderer: (rendererContext) =>
                DataGridHelper.checkBoxRenderer(rendererContext, Tb.information.is_hidden),
          ),
          PlutoColumn(
            title: "Title".tr(),
            field: Tb.information.title,
            type: PlutoColumnType.text(),
          ),
          PlutoColumn(
            width: 150,
            title: "Content".tr(),
            field: Tb.information.description,
            type: PlutoColumnType.text(),
            renderer: (rendererContext) {
              return DataGridHelper.buildHtmlEditorButton(
                context: context,
                field: Tb.information.description,
                rendererContext: rendererContext,
                loadContent: () async {
                  var id = rendererContext.row.cells[Tb.information.id]!.value;
                  if (id != null) {
                    var infoDescription = await DbInformation.getInfosDescription([id]);
                    if (infoDescription.isNotEmpty) {
                      return infoDescription[0].description;
                    }
                  }
                  return null;
                },
              );
            },
          ),
          PlutoColumn(
            title: "Order".tr(),
            field: Tb.information.order,
            type: PlutoColumnType.number(defaultValue: null),
            applyFormatterInEditing: true,
            width: 100,
          ),
          PlutoColumn(
            title: "Type".tr(),
            field: Tb.information.type,
            type: PlutoColumnType.text(),
          ),
        ],
      ),
    );
  }
}
