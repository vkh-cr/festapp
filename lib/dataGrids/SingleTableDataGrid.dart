import 'package:collection/collection.dart';
import 'package:flutter/material.dart';
import 'package:pluto_grid/pluto_grid.dart';

import 'PlutoAbstract.dart';
import 'AdministrationHeader.dart';

enum DataGridFirstColumn{
  none, delete, deleteAndDuplicate, deleteAndCheck
}

class SingleTableDataGrid<T extends IPlutoRowModel> {
  late PlutoGridStateManager stateManager;
  Set<PlutoRow> updatedRows = {};
  Set<PlutoRow> deletedRows = {};
  Set<PlutoRow> newRows = {};
  List<PlutoRow> rows = [];
  List<PlutoColumn> columns = [];
  final Future<List<T>> Function() loadData;
  final DataGridFirstColumn firstColumnType;
  final String idColumn;
  final T Function(Map<String, dynamic>) fromPlutoJson;

  final List<Widget>? headerChildren;

  SingleTableDataGrid(this.loadData, this.fromPlutoJson, this.firstColumnType, this.idColumn, {required this.columns, this.headerChildren});
  DataGrid() {
    return Container(
      padding: const EdgeInsets.all(6),
      child: Container(
        padding: const EdgeInsets.all(3),
        decoration: const BoxDecoration(
          border: null
        ),
        child: PlutoGrid(
        columns: columns,
        rows: rows,
        onChanged: (PlutoGridOnChangedEvent event) {

          if(event.row.state == PlutoRowState.updated)
          {
            if(event.row.cells[idColumn]?.value != -1)
            {
              deletedRows.remove(event.row);
              updatedRows.add(event.row);

              // todo add check for real value change
              // bool isAnythingChanged = false;
              // var oldRow = stateManager.refRows.originalList.firstWhere((r)=>r.key == event.row.key);
              //
              // for(var c in event.row.cells.entries)
              // {
              //   if(c.value != oldRow.cells[c.key])
              //   {
              //     isAnythingChanged = true;
              //     break;
              //   }
              // }
              //
              // if(isAnythingChanged)
              // {
              //   updatedRows.add(event.row);
              // }
              // else
              // {
              //   updatedRows.remove(event.row);
              // }
            }
          }

          stateManager.notifyListeners();
        },
        onLoaded: (PlutoGridOnLoadedEvent event) {
          stateManager = event.stateManager;
          event.stateManager.setSelectingMode(PlutoGridSelectingMode.row);
          event.stateManager.setShowColumnFilter(true);
          reloadData();
        },
        rowColorCallback: (rowContext){
          var row = deletedRows.firstWhereOrNull((element) => element.key == rowContext.row.key);
          if(row != null)
          {
            return Colors.redAccent.withOpacity(0.3);
          }

          row = updatedRows.firstWhereOrNull((element) => element.key == rowContext.row.key);
          if(row != null)
          {
            return Colors.orangeAccent.withOpacity(0.3);
          }

          row = newRows.firstWhereOrNull((element) => element.key == rowContext.row.key);
          if(row != null)
          {
            return Colors.orangeAccent.withOpacity(0.3);
          }
          return Colors.transparent;
        },
        createHeader: (stateManager) =>
            AdministrationHeader(
              stateManager: stateManager,
              fromPlutoJson: fromPlutoJson,
              loadData: reloadData,
              headerChildren: headerChildren,
              dataGrid: this),
        configuration: AdministrationHeader.defaultPlutoGridConfiguration(),
  ),
      ),
    );
  }
String firstColumnTypeId = "delete0";
  Future<void> reloadData() async {
    var defaultRow =  { firstColumnTypeId: PlutoCell(value: "delete")};
    final dataList = await loadData();
    var rowList = dataList.map((i) => i.toPlutoRow()!).toList();
    for (var element in rowList) {element.cells.addAll(defaultRow);}
    stateManager.removeAllRows();
    stateManager.appendRows(rowList);
    deletedRows.clear();
    newRows.clear();
    updatedRows.clear();

    if(stateManager.columns.first.field != firstColumnTypeId && firstColumnType != DataGridFirstColumn.none)
    {
      var firstColumn = PlutoColumn(
          title: "",
          field: firstColumnTypeId,
          type: PlutoColumnType.text(),
          readOnly: true,
          enableFilterMenuItem: false,
          enableSorting: false,
          enableDropToResize: false,
          enableColumnDrag: false,
          enableContextMenu: false,
          enableRowChecked: firstColumnType == DataGridFirstColumn.deleteAndCheck,
          cellPadding: EdgeInsets.zero,
          width: firstColumnType == DataGridFirstColumn.delete ? 50 : 100,
          renderer: (rendererContext) {
            List<Widget> rowChildren = [];
            rowChildren.add(IconButton(
                onPressed: () async{
                  var row = rendererContext.row;
                  if(deletedRows.contains(row))
                  {
                    deletedRows.remove(row);
                  }
                  else if (newRows.contains(row))
                  {
                    newRows.remove(row);
                    rendererContext.stateManager.removeRows([rendererContext.row]);
                  }
                  else{
                    deletedRows.add(row);
                  }
                  row.setState(PlutoRowState.updated);
                  rendererContext.stateManager.notifyListeners();
                },
                icon: const Icon(Icons.delete_forever)));
            if(firstColumnType == DataGridFirstColumn.deleteAndDuplicate)
            {
              rowChildren.add(IconButton(
                  onPressed: () async{
                    var originRow = rendererContext.row;
                    var newRow = rendererContext.stateManager.getNewRows()[0];
                    for(var c in originRow.cells.entries)
                    {
                      if(c.key==idColumn)
                      {
                        newRow.cells[idColumn]?.value = -1;
                      }
                      else{
                        newRow.cells[c.key]?.value = originRow.cells[c.key]?.value;
                      }
                    }

                    var currentIndex = rendererContext.stateManager.rows.indexOf(originRow);
                    rendererContext.stateManager.insertRows(currentIndex+1, [newRow]);
                    newRows.add(newRow);
                    rendererContext.stateManager.notifyListeners();
                  },
                  icon: const Icon(Icons.add)),);
            }
            return Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: rowChildren,);
          });
      stateManager.insertColumns(0, [
        firstColumn
      ]);
    }
  }
  }
