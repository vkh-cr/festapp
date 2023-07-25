import 'package:flutter/material.dart';
import 'package:pluto_grid/pluto_grid.dart';

import '../models/PlutoAbstract.dart';
import 'AdministrationHeader.dart';

class SingleTableDataGrid<T extends IPlutoRowModel> {
  late PlutoGridStateManager stateManager;
  List<PlutoRow> rows = [];
  List<PlutoColumn> columns = [];
  final Future<List<T>> Function() loadData;
  final T Function(Map<String, dynamic>) fromPlutoJson;

  SingleTableDataGrid(this.loadData, this.fromPlutoJson, this.columns);

  DataGrid() {
    return PlutoGrid(
    columns: columns,
    rows: rows,
    onChanged: (PlutoGridOnChangedEvent event) {
      stateManager.notifyListeners();
    },
    onLoaded: (PlutoGridOnLoadedEvent event) {
      stateManager = event.stateManager;
      reloadDataAsync(stateManager);
    },
    rowColorCallback: (rowContext){
      if(rowContext.row.state == PlutoRowState.added)
      {
        return Colors.redAccent.withOpacity(0.3);
      }
      if(rowContext.row.state == PlutoRowState.updated)
      {
        return Colors.orangeAccent.withOpacity(0.3);
      }
      return Colors.transparent;
    },
    createHeader: (stateManager) => AdministrationHeader(stateManager: stateManager, fromPlutoJson: fromPlutoJson, loadData: reloadDataAsync),
    configuration: AdministrationHeader.defaultPlutoGridConfiguration(),
  );
  }

  Future<void> reloadDataAsync(PlutoGridStateManager stateManager) async {
    var defaultRow =  { "delete": PlutoCell(value: "delete")};
    final dataList   = await loadData();
    var rowList = dataList.map((i) => i.toPlutoRow()!).toList();
    for (var element in rowList) {element.cells.addAll(defaultRow);}
    stateManager.removeAllRows();
    stateManager.appendRows(rowList);
    for (var element in rowList) {element.setState(PlutoRowState.none);}
  }
  }
