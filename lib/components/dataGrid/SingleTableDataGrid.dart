import 'package:collection/collection.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/dataGrid/SingleDataGridController.dart';
import 'package:fstapp/themeConfig.dart';
import 'package:pluto_grid_plus/pluto_grid_plus.dart';

import 'PlutoAbstract.dart';
import 'AdministrationHeader.dart';

enum DataGridFirstColumn { none, delete, deleteAndDuplicate, deleteAndCheck, check }

class SingleTableDataGrid<T extends IPlutoRowModel> extends StatefulWidget {
  final SingleDataGridController<T> controller;

  const SingleTableDataGrid(this.controller, {super.key});

  @override
  _SingleTableDataGridState<T> createState() => _SingleTableDataGridState<T>();
}

class _SingleTableDataGridState<T extends IPlutoRowModel> extends State<SingleTableDataGrid<T>> {
  bool isLoading = true;
  bool isDataGridLoading = true;

  @override
  void initState() {
    super.initState();
    initialLoad();
  }

  Future<void> initialLoad() async {
    await widget.controller.loadDataOnly();
    setState(() {
      isLoading = false;
    });
  }

  @override
  Widget build(BuildContext context) {
    // If still loading, show a loading indicator.
    if (isLoading) {
      return Center(child: CircularProgressIndicator());
    }

    // Otherwise, display the PlutoGrid.
    return Container(
      padding: const EdgeInsets.all(3),
      decoration: BoxDecoration(
        color: ThemeConfig.whiteColor(widget.controller.context),
      ),
      child: PlutoGrid(
        noRowsWidget: isDataGridLoading ? null : Center(child: Text("Table does not contain any items").tr()),
        columns: widget.controller.columns,
        rows: [],
        onChanged: (PlutoGridOnChangedEvent event) {
          if (event.row.state == PlutoRowState.updated) {
            if (event.row.cells[widget.controller.idColumn]?.value != -1) {
              widget.controller.deletedRows.remove(event.row);
              if (!widget.controller.newRows.contains(event.row)) {
                widget.controller.updatedRows.add(event.row);
              }
            }
          }
          //widget.controller.stateManager.notifyListeners();
        },
        onLoaded: (PlutoGridOnLoadedEvent event) {
          widget.controller.stateManager = event.stateManager;
          event.stateManager.setSelectingMode(PlutoGridSelectingMode.cell);
          event.stateManager.setShowColumnFilter(true);
          // With the stateManager now available, apply the loaded data to the grid.
          widget.controller.applyDataToGrid();
          isDataGridLoading = false;
          setState(() { });
        },
        rowColorCallback: (rowContext) {
          var row = widget.controller.deletedRows.firstWhereOrNull(
                  (element) => element.key == rowContext.row.key);
          if (row != null) {
            return Colors.redAccent.withOpacity(0.3);
          }
          row = widget.controller.updatedRows.firstWhereOrNull(
                  (element) => element.key == rowContext.row.key);
          if (row != null) {
            return Colors.orangeAccent.withOpacity(0.3);
          }
          row = widget.controller.newRows.firstWhereOrNull(
                  (element) => element.key == rowContext.row.key);
          if (row != null) {
            return Colors.orangeAccent.withOpacity(0.3);
          }
          return Colors.transparent;
        },
        createHeader: (stateManager) => AdministrationHeader(
          stateManager: stateManager,
          controller: widget.controller,
        ),
        configuration: AdministrationHeader.defaultPlutoGridConfiguration(
            widget.controller.context, widget.controller.context.locale.languageCode),
      ),
    );
  }
}