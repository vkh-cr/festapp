import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/dataGrid/DataGridHelper.dart';
import 'package:fstapp/components/dataGrid/SingleTableDataGrid.dart';
import 'package:fstapp/dataModels/ExclusiveGroupModel.dart';
import 'package:fstapp/dataModels/Tb.dart';
import 'package:fstapp/dataServices/DbEvents.dart';
import 'package:pluto_grid_plus/pluto_grid_plus.dart';

class ExclusivityTab extends StatefulWidget {
  const ExclusivityTab({Key? key}) : super(key: key);

  @override
  _ExclusivityTabState createState() => _ExclusivityTabState();
}

class _ExclusivityTabState extends State<ExclusivityTab> {
  @override
  void initState() {
    super.initState();
    loadExclusiveGroups();
  }

  Future<void> loadExclusiveGroups() async {
    // Load any additional data if needed
    setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    return SingleTableDataGrid<ExclusiveGroupModel>(
        context,
        DbEvents.getAllExclusiveGroups,
        ExclusiveGroupModel.fromPlutoJson,
        DataGridFirstColumn.delete,
        Tb.exclusive_groups.id,
        columns: [
          PlutoColumn(
            hide: true,
            title: "Id".tr(),
            field: Tb.exclusive_groups.id,
            type: PlutoColumnType.number(defaultValue: -1),
            readOnly: true,
            enableEditingMode: false,
            width: 50,
            renderer: (rendererContext) => DataGridHelper.idRenderer(rendererContext),
          ),
          PlutoColumn(
              title: "Name".tr(),
              field: Tb.exclusive_groups.title,
              type: PlutoColumnType.text(),
              width: 300
          ),
          PlutoColumn(
              title: "Events".tr(),
              field: ExclusiveGroupModel.eventsColumn,
              type: PlutoColumnType.text(),
              width: 500
          ),
        ]).DataGrid();
  }
}
