import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/single_data_grid/data_grid_helper.dart';
import 'package:fstapp/components/single_data_grid/single_data_grid_controller.dart';
import 'package:fstapp/dataModels/InformationModel.dart';
import 'package:fstapp/components/single_data_grid/single_table_data_grid.dart';
import 'package:fstapp/dataModels/Tb.dart';
import 'package:fstapp/dataServices/DbInformation.dart';
import 'package:pluto_grid_plus/pluto_grid_plus.dart';

class GameCheckPointsContent extends StatefulWidget {
  const GameCheckPointsContent({super.key});

  @override
  _GameCheckPointsContentState createState() => _GameCheckPointsContentState();
}

class _GameCheckPointsContentState extends State<GameCheckPointsContent> {
  SingleDataGridController<InformationModel>? controller;

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    controller ??= SingleDataGridController<InformationModel>(
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
      );
  }

  @override
  Widget build(BuildContext context) {
    return SingleTableDataGrid<InformationModel>(controller!);
  }
}