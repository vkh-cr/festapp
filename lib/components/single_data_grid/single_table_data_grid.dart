import 'package:flutter/material.dart';
import 'package:trina_grid/trina_grid.dart';
import 'pluto_abstract.dart';
import 'single_data_grid_header.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:collection/collection.dart';
import 'package:fstapp/themeConfig.dart';

import 'single_data_grid_controller.dart';

class SingleTableDataGrid<T extends ITrinaRowModel> extends StatefulWidget {
  final SingleDataGridController<T> controller;

  const SingleTableDataGrid(this.controller, {Key? key}) : super(key: key);

  @override
  _SingleTableDataGridState<T> createState() => _SingleTableDataGridState<T>();
}

class _SingleTableDataGridState<T extends ITrinaRowModel>
    extends State<SingleTableDataGrid<T>> {
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
    return ValueListenableBuilder<Key>(
      valueListenable: widget.controller.refreshKeyNotifier,
      builder: (context, key, child) {
        return KeyedSubtree(
          key: key,
          child: _buildDataGrid(context),
        );
      },
    );
  }

  Widget _buildDataGrid(BuildContext context) {
    if (isLoading) {
      return Center(child: CircularProgressIndicator());
    }

    return Container(
      padding: const EdgeInsets.all(3),
      decoration: BoxDecoration(
        color: ThemeConfig.whiteColor(widget.controller.context),
      ),
      child: TrinaGrid(
        noRowsWidget: isDataGridLoading
            ? null
            : Center(child: Text("Table does not contain any items").tr()),
        columns: widget.controller.columns,
        rows: [],
        onChanged: (TrinaGridOnChangedEvent event) {
          if (event.row.state == TrinaRowState.updated) {
            if (event.row.cells[widget.controller.idColumn]?.value != -1) {
              widget.controller.deletedRows.remove(event.row);
              if (!widget.controller.newRows.contains(event.row)) {
                widget.controller.updatedRows.add(event.row);
              }
            }
          }
        },
        onLoaded: (TrinaGridOnLoadedEvent event) {
          widget.controller.stateManager = event.stateManager;
          event.stateManager.setSelectingMode(TrinaGridSelectingMode.cell);
          event.stateManager.setShowColumnFilter(true);
          widget.controller.applyDataToGrid();
          isDataGridLoading = false;
          setState(() {});
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
        createHeader: (stateManager) => SingleDataGridHeader(
          stateManager: stateManager,
          controller: widget.controller,
        ),
        configuration: SingleDataGridHeader.defaultTrinaGridConfiguration(
          widget.controller.context,
          widget.controller.context.locale.languageCode,
        ),
      ),
    );
  }
}
