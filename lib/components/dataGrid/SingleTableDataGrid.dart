import 'package:collection/collection.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/dataGrid/SingleDataGridController.dart';
import 'package:fstapp/themeConfig.dart';
import 'package:pluto_grid_plus/pluto_grid_plus.dart';

import 'PlutoAbstract.dart';
import 'AdministrationHeader.dart';

enum DataGridFirstColumn { none, delete, deleteAndDuplicate, deleteAndCheck, check }

class SingleTableDataGrid<T extends IPlutoRowModel> {
  final SingleDataGridController<T> controller;

  SingleTableDataGrid(this.controller);

  Widget DataGrid() {
    return Container(
      padding: const EdgeInsets.all(3),
      decoration: BoxDecoration(
        color: ThemeConfig.whiteColor(controller.context),
      ),
      child: PlutoGrid(
        columns: controller.columns,
        rows: controller.rows,
        onChanged: (PlutoGridOnChangedEvent event) {
          if (event.row.state == PlutoRowState.updated) {
            if (event.row.cells[controller.idColumn]?.value != -1) {
              controller.deletedRows.remove(event.row);
              if (!controller.newRows.contains(event.row)) {
                controller.updatedRows.add(event.row);
              }
            }
          }
          controller.stateManager.notifyListeners();
        },
        onLoaded: (PlutoGridOnLoadedEvent event) {
          controller.stateManager = event.stateManager;
          event.stateManager.setSelectingMode(PlutoGridSelectingMode.cell);
          event.stateManager.setShowColumnFilter(true);
          controller.reloadData();
        },
        rowColorCallback: (rowContext) {
          var row = controller.deletedRows.firstWhereOrNull(
                  (element) => element.key == rowContext.row.key);
          if (row != null) {
            return Colors.redAccent.withOpacity(0.3);
          }
          row = controller.updatedRows.firstWhereOrNull(
                  (element) => element.key == rowContext.row.key);
          if (row != null) {
            return Colors.orangeAccent.withOpacity(0.3);
          }
          row = controller.newRows.firstWhereOrNull(
                  (element) => element.key == rowContext.row.key);
          if (row != null) {
            return Colors.orangeAccent.withOpacity(0.3);
          }
          return Colors.transparent;
        },
        createHeader: (stateManager) => AdministrationHeader(
          stateManager: stateManager,
          controller: controller,
        ),
        configuration: AdministrationHeader.defaultPlutoGridConfiguration(
            controller.context, controller.context.locale.languageCode),
      ),
    );
  }
}
