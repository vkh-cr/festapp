import 'package:flutter/material.dart';
import 'package:pluto_grid_plus/pluto_grid_plus.dart';
import 'pluto_abstract.dart';
import 'data_grid_action.dart';
import 'single_data_grid_header.dart';

enum DataGridFirstColumn { none, delete, deleteAndDuplicate, deleteAndCheck, check }

class SingleDataGridController<T extends IPlutoRowModel> {
  ValueNotifier<Key> refreshKeyNotifier = ValueNotifier(UniqueKey());

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
  final T Function()? newObject;
  final BuildContext context;
  final DataGridActionsController? actionsExtended;
  final List<DataGridAction>? headerChildren;

  String firstColumnTypeId = "delete0";

  SingleDataGridController({
    required this.context,
    required this.loadData,
    required this.fromPlutoJson,
    required this.firstColumnType,
    required this.idColumn,
    required this.columns,
    this.headerChildren,
    this.actionsExtended,
    this.newObject,
  });

  /// Loads data and stores it in [rows] without modifying the grid.
  Future<void> loadDataOnly() async {
    var defaultRow = {firstColumnTypeId: PlutoCell(value: "delete")};
    final dataList = await loadData();
    var rowList = dataList.map((i) => i.toPlutoRow(context)!).toList();
    for (var element in rowList) {
      element.cells.addAll(defaultRow);
    }
    rows = rowList;
    // Clear tracking sets.
    deletedRows.clear();
    newRows.clear();
    updatedRows.clear();
  }

  /// Applies [rows] to the grid and inserts the first column if needed.
  void applyDataToGrid() async {
    stateManager.removeAllRows();
    stateManager.appendRows(rows);

    if (stateManager.columns.isNotEmpty &&
        stateManager.columns.first.field != firstColumnTypeId &&
        firstColumnType != DataGridFirstColumn.none) {
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
        enableRowChecked: firstColumnType == DataGridFirstColumn.deleteAndCheck ||
            firstColumnType == DataGridFirstColumn.check,
        cellPadding: EdgeInsets.zero,
        width: (firstColumnType == DataGridFirstColumn.delete ||
            firstColumnType == DataGridFirstColumn.check)
            ? 50
            : 100,
        renderer: (rendererContext) {
          List<Widget> rowChildren = [];
          if (firstColumnType != DataGridFirstColumn.check) {
            rowChildren.add(
              IconButton(
                onPressed: () async {
                  var row = rendererContext.row;
                  if (deletedRows.contains(row)) {
                    deletedRows.remove(row);
                  } else if (newRows.contains(row)) {
                    newRows.remove(row);
                    rendererContext.stateManager.removeRows([row]);
                  } else {
                    deletedRows.add(row);
                  }
                  row.setState(PlutoRowState.updated);
                  rendererContext.stateManager.notifyListeners();
                },
                icon: const Icon(Icons.delete_forever),
              ),
            );
          }
          if (firstColumnType == DataGridFirstColumn.deleteAndDuplicate) {
            rowChildren.add(
              IconButton(
                onPressed: () async {
                  var originRow = rendererContext.row;
                  var newRow = rendererContext.stateManager.getNewRows()[0];
                  var readOnlyColumns = rendererContext.stateManager.columns
                      .where((element) => element.readOnly)
                      .map((e) => e.field)
                      .toList();
                  for (var c in originRow.cells.entries) {
                    if (readOnlyColumns.contains(c.key)) continue;
                    newRow.cells[c.key]?.value = originRow.cells[c.key]?.value;
                  }
                  var currentIndex =
                  rendererContext.stateManager.rows.indexOf(originRow);
                  rendererContext.stateManager.insertRows(currentIndex + 1, [newRow]);
                  newRows.add(newRow);
                  rendererContext.stateManager.notifyListeners();
                },
                icon: const Icon(Icons.add),
              ),
            );
          }
          return Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: rowChildren,
          );
        },
      );
      stateManager.insertColumns(0, [firstColumn]);
    }
  }

  /// Reloads the data from the source and applies it to the grid.
  Future<void> reloadData() async {
    await loadDataOnly();
    applyDataToGrid();
  }

  /// Force-reloads the entire datagrid by updating the key and reloading data.
  Future<void> forceReload() async {
    await loadDataOnly();
    refreshKeyNotifier.value = UniqueKey();
  }
}
