import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/dataGrid/DataGridHelper.dart';
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
      context,
          () => DbInformation.getAllInformationForDataGrid(InformationModel.gameType),
      InformationModel.fromPlutoJsonGame,
      DataGridFirstColumn.deleteAndDuplicate,
      Tb.information.id,
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
          title: "Hide".tr(),
          field: Tb.information.is_hidden,
          type: PlutoColumnType.select([]),
          applyFormatterInEditing: true,
          enableEditingMode: false,
          width: 100,
          renderer: (rendererContext) => DataGridHelper.checkBoxRenderer(rendererContext, Tb.information.is_hidden),
        ),
        PlutoColumn(
          title: "Title".tr(),
          field: Tb.information.title,
          type: PlutoColumnType.text(),
        ),
        PlutoColumn(
          title: "Correct answer".tr(),
          field: Tb.information.data_correct,
          type: PlutoColumnType.text(),
        ),
      ],
    ).DataGrid();
  }
}
