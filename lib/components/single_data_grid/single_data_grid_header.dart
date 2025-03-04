import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/single_data_grid/single_data_grid_controller.dart';
import 'package:pluto_grid_plus/pluto_grid_plus.dart';
import 'package:fstapp/components/single_data_grid/data_grid_action.dart';
import 'package:fstapp/components/single_data_grid/data_grid_helper.dart';
import 'package:fstapp/services/DialogHelper.dart';
import 'package:fstapp/services/ToastHelper.dart';
import 'package:fstapp/themeConfig.dart';
import 'pluto_abstract.dart';

class SingleDataGridHeader<T extends IPlutoRowModel> extends StatefulWidget {
  final PlutoGridStateManager stateManager;
  final SingleDataGridController<T> controller;

  const SingleDataGridHeader({
    required this.stateManager,
    super.key,
    required this.controller,
  });

  @override
  _SingleDataGridHeaderState<T> createState() =>
      _SingleDataGridHeaderState<T>(
        controller,
      );

  static PlutoGridConfiguration defaultPlutoGridConfiguration(
      BuildContext context, String langCode) {
    return PlutoGridConfiguration(
      scrollbar: const PlutoGridScrollbarConfig(
        scrollbarThickness: 16.0,
      ),
      localeText: DataGridHelper.getPlutoLocaleFromLangCode(langCode),
      style: ThemeConfig.isDarkMode(context)
          ? PlutoGridStyleConfig.dark(
        rowHeight: 36,
        cellColorInReadOnlyState: Colors.white24,
        cellTextStyle: TextStyle(color: ThemeConfig.blackColor(context)),
        columnTextStyle:
        TextStyle(color: ThemeConfig.blackColor(context)),
      )
          : PlutoGridStyleConfig(
          rowHeight: 36, cellColorInReadOnlyState: Colors.white70),
    );
  }
}

class _SingleDataGridHeaderState<T extends IPlutoRowModel>
    extends State<SingleDataGridHeader<T>> {
  final SingleDataGridController<T> controller;
  List<Widget> allChildren = [];

  _SingleDataGridHeaderState(
      this.controller);

  @override
  Widget build(BuildContext context) {
    allChildren.clear();
    var headerChildren = controller.headerChildren ?? [];
    for (var a in headerChildren) {
      allChildren.add(
        ElevatedButton(
          onPressed: a.isEnabled != null && !a.isEnabled!()
              ? null
              : () => a.action!(controller, null),
          child: Text(a.name ?? "---"),
        ),
      );
    }
    if (headerChildren.isNotEmpty) {
      allChildren.insertAll(0, [const VerticalDivider()]);
    }
    var actionsController = controller.actionsExtended;
    allChildren.insertAll(0, [
      if (actionsController?.isAddActionPossible?.call() ?? true)
        ElevatedButton(
          onPressed: actionsController != null &&
              actionsController!.areAllActionsEnabled != null &&
              !actionsController!.areAllActionsEnabled!()
              ? null
              : _addRow,
          child: const Text("Add").tr(),
        ),
      ElevatedButton(
        onPressed: actionsController != null &&
            actionsController.areAllActionsEnabled != null &&
            !actionsController.areAllActionsEnabled!()
            ? null
            : _cancelChanges,
        child: const Text("Discard changes").tr(),
      ),
      ElevatedButton(
        onPressed: actionsController != null &&
            actionsController.areAllActionsEnabled != null &&
            !actionsController.areAllActionsEnabled!()
            ? null
            : () {
          actionsController?.saveAction?.action == null
              ? _saveChanges()
              : actionsController!
              .saveAction!.action!(controller, _saveChanges);
        },
        child: Text(actionsController?.saveAction?.name ??
            "Save changes".tr()),
      ),
    ]);

    return SingleChildScrollView(
      scrollDirection: Axis.horizontal,
      child: Padding(
        padding:
        const EdgeInsets.symmetric(horizontal: 8.0, vertical: 8),
        child: Wrap(
          spacing: 10,
          crossAxisAlignment: WrapCrossAlignment.center,
          children: allChildren,
        ),
      ),
    );
  }

  void _addRow() {
    var newRowsGenerated = controller.stateManager.getNewRows();

    if(controller.newObject != null){
      var obj = controller.newObject!();
      PlutoRow<dynamic> newRowReal = obj.toPlutoRow(context)!;
      for (var c in newRowReal.cells.entries) {
        newRowsGenerated[0].cells[c.key] = newRowReal.cells[c.key]!;
      }
    }

    controller.stateManager.prependRows(newRowsGenerated);
    for (var value in newRowsGenerated) {
      controller.newRows.add(value);
    }
  }

  Future<void> _saveChanges() async {
    var toDelete = controller.deletedRows.toList();
    controller.updatedRows.removeAll(toDelete);

    var deleteList = List<T>.from(
      toDelete.map((x) => controller.fromPlutoJson(x.toJson())),
    );

    if (deleteList.isNotEmpty) {
      var result = await DialogHelper.showConfirmationDialogAsync(
        context,
        "Confirm removal".tr(),
        "${"Items".tr()}:\n ${deleteList.map((value) => value.toBasicString()).toList().join(",\n")}\n?",
      );
      if (!result) {
        return;
      }
    }

    var updatedSet = Set<T>.from(
      controller.updatedRows.map((x) => controller.fromPlutoJson(x.toJson())),
    );

    var newSet = Set<T>.from(
      controller.newRows.map((x) => controller.fromPlutoJson(x.toJson())),
    );

    updatedSet.addAll(newSet);

    List<Future<void> Function()> actions = [];

    for (var element in deleteList) {
      actions.add(() async {
        try {
          await element.deleteMethod();
          ToastHelper.Show(
              context, "${"Deleted".tr()}: ${element.toBasicString()}");
        } catch (e) {
          ToastHelper.Show(context, e.toString(),
              severity: ToastSeverity.NotOk);
          rethrow;
        }
      });
    }

    for (var element in updatedSet) {
      actions.add(() async {
        try {
          await element.updateMethod();
          ToastHelper.Show(
              context, "${"Saved".tr()}: ${element.toBasicString()}");
        } catch (e) {
          ToastHelper.Show(context, e.toString(),
              severity: ToastSeverity.NotOk);
          rethrow;
        }
      });
    }

    var success = await DialogHelper.showProgressDialogAsync(
      context,
      "Saving changes".tr(),
      actions.length,
      futures: actions,
      isBasic: true,
    );

    if (success) {
      await controller.reloadData();
    }
  }

  Future<void> _cancelChanges() async {
    var result = await DialogHelper.showConfirmationDialogAsync(
      context,
      "Discard changes".tr(),
      "Really discard all changes?".tr(),
    );
    if (!result) {
      return;
    }
    await controller.loadData();
  }
}
