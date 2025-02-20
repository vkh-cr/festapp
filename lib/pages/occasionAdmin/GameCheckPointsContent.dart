import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/dataGrid/DataGridHelper.dart';
import 'package:fstapp/components/dataGrid/SingleDataGridController.dart';
import 'package:fstapp/dataModels/InformationModel.dart';
import 'package:fstapp/components/dataGrid/SingleTableDataGrid.dart';
import 'package:fstapp/dataModels/Tb.dart';
import 'package:fstapp/dataServices/DbInformation.dart';
import 'package:pluto_grid_plus/pluto_grid_plus.dart';

class GameCheckPointsContent extends StatelessWidget {
  const GameCheckPointsContent({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SingleTableDataGrid<InformationModel>(
      SingleDataGridController<InformationModel>(
        context: context,
        loadData: () => DbInformation.getAllInformationForDataGrid(InformationModel.gameType),
        fromPlutoJson: InformationModel.fromPlutoJsonGame,
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
            renderer: (rendererContext) => DataGridHelper.idRenderer(rendererContext),
          ),
          PlutoColumn(
            title: "Title".tr(),
            enableAutoEditing: true,
            field: Tb.information.title,
            type: PlutoColumnType.text(),
          ),
          PlutoColumn(
            enableAutoEditing: true,
            title: "Correct answer".tr(),
            field: Tb.information.data_correct,
            type: PlutoColumnType.text(),
          ),
        ],
      ),
    ).DataGrid();
  }
}
