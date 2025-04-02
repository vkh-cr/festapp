import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/single_data_grid/data_grid_helper.dart';
import 'package:fstapp/components/single_data_grid/single_data_grid_controller.dart';
import 'package:fstapp/components/single_data_grid/single_table_data_grid.dart';
import 'package:fstapp/dataModels/ExclusiveGroupModel.dart';
import 'package:fstapp/dataModels/Tb.dart';
import 'package:fstapp/dataServices/DbEvents.dart';
import 'package:trina_grid/trina_grid.dart';

class ExclusivityContent extends StatefulWidget {
  const ExclusivityContent({Key? key}) : super(key: key);

  @override
  _ExclusivityContentState createState() => _ExclusivityContentState();
}

class _ExclusivityContentState extends State<ExclusivityContent> {
  SingleDataGridController<ExclusiveGroupModel>? controller;

  @override
  void initState() {
    super.initState();
    loadExclusiveGroups();
  }

  Future<void> loadExclusiveGroups() async {
    // Add any initialization logic if required
    setState(() {});
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    controller ??= SingleDataGridController<ExclusiveGroupModel>(
        context: context,
        loadData: DbEvents.getAllExclusiveGroups,
        fromPlutoJson: ExclusiveGroupModel.fromPlutoJson,
        firstColumnType: DataGridFirstColumn.delete,
        idColumn: Tb.exclusive_groups.id,
        columns: [
          TrinaColumn(
            hide: true,
            title: "Id".tr(),
            field: Tb.exclusive_groups.id,
            type: TrinaColumnType.number(defaultValue: -1),
            readOnly: true,
            enableEditingMode: false,
            width: 50,
            renderer: (rendererContext) =>
                DataGridHelper.idRenderer(rendererContext),
          ),
          TrinaColumn(
            title: "Name".tr(),
            field: Tb.exclusive_groups.title,
            type: TrinaColumnType.text(),
            width: 300,
          ),
          TrinaColumn(
            title: "Events".tr(),
            field: ExclusiveGroupModel.eventsColumn,
            type: TrinaColumnType.text(),
            width: 500,
          ),
        ],
      );
  }

  @override
  Widget build(BuildContext context) {
    return SingleTableDataGrid<ExclusiveGroupModel>(controller!);
  }
}
