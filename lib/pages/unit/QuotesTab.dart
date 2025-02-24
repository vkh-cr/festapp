import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/dataGrid/DataGridHelper.dart';
import 'package:fstapp/components/dataGrid/SingleDataGridController.dart';
import 'package:fstapp/dataModels/InformationModel.dart';
import 'package:fstapp/components/dataGrid/SingleTableDataGrid.dart';
import 'package:fstapp/dataModels/Tb.dart';
import 'package:fstapp/dataServices/DbInformation.dart';
import 'package:fstapp/dataServices/RightsService.dart';
import 'package:pluto_grid_plus/pluto_grid_plus.dart';

class QuotesTab extends StatelessWidget {
  final int unitId;

  const QuotesTab({super.key, required this.unitId});

  @override
  Widget build(BuildContext context) {
    return SingleTableDataGrid<InformationModel>(
      SingleDataGridController<InformationModel>(
        context: context,
        loadData: () => DbInformation.getAllInformationForDataGridForUnit(
            unitId, InformationModel.quoteType),
        fromPlutoJson: (plutoData) =>
            InformationModel.fromPlutoJsonType(plutoData, InformationModel.quoteType),
        firstColumnType: DataGridFirstColumn.delete,
        idColumn: Tb.information.id,
        newObject: () => InformationModel.newRow(unitId),
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
            hide: true,
            title: "Unit".tr(),
            field: Tb.information.unit,
            type: PlutoColumnType.number(
                defaultValue: RightsService.currentUnit!.id!),
            readOnly: true,
            width: 50,
          ),
          PlutoColumn(
            title: "Date".tr(),
            enableAutoEditing: true,
            field: Tb.information.data_date,
            type: PlutoColumnType.date(),
            width: 300,
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
        ],
      ),
    );
  }
}
