import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/single_data_grid/single_data_grid_controller.dart';
import 'package:trina_grid/trina_grid.dart';
import 'package:fstapp/components/single_data_grid/data_grid_action.dart';
import 'package:fstapp/components/single_data_grid/data_grid_helper.dart';
import 'package:fstapp/services/dialog_helper.dart';
import 'package:fstapp/services/toast_helper.dart';
import 'package:fstapp/theme_config.dart';
import 'pluto_abstract.dart';

class SingleDataGridHeader<T extends ITrinaRowModel> extends StatefulWidget {
  final TrinaGridStateManager stateManager;
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

  static TrinaGridConfiguration defaultTrinaGridConfiguration(
      BuildContext context, String langCode) {
    return TrinaGridConfiguration(
      scrollbar: const TrinaGridScrollbarConfig(
        thickness: 12.0,
      ),
      localeText: DataGridHelper.getPlutoLocaleFromLangCode(langCode),
      style: ThemeConfig.isDarkMode(context)
          ? TrinaGridStyleConfig.dark(
        rowHeight: 36,
        cellColorInReadOnlyState: Colors.white24,
        cellTextStyle: TextStyle(color: ThemeConfig.blackColor(context)),
        columnTextStyle:
        TextStyle(color: ThemeConfig.blackColor(context)),
      )
          : TrinaGridStyleConfig(
          rowHeight: 36, cellColorInReadOnlyState: Colors.white70),
    );
  }
}

class _SingleDataGridHeaderState<T extends ITrinaRowModel>
    extends State<SingleDataGridHeader<T>> {
  final SingleDataGridController<T> controller;

  _SingleDataGridHeaderState(this.controller);

  @override
  Widget build(BuildContext context) {
    // Build left-side actions (Add, Discard, Save and any extra header children)
    List<Widget> leftActions = [];
    var actionsController = controller.actionsExtended;

    leftActions.addAll([
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

    if (controller.headerChildren != null && controller.headerChildren!.isNotEmpty) {
      for (var a in controller.headerChildren!) {
        leftActions.add(
          ElevatedButton(
            onPressed: a.isEnabled != null && !a.isEnabled!()
                ? null
                : () => a.action!(controller, null),
            child: Text(a.name ?? "---"),
          ),
        );
      }
    }

    // Build right-side actions: the export button if enabled.
    List<Widget> rightActions = [];
    if (controller.exportOptions?.visible == true) {
      rightActions.add(
        ElevatedButton.icon(
          onPressed: () => controller.downloadCsv(), // ensure downloadCsv() is public in controller
          icon: const Icon(Icons.file_download),
          label: Text("Download Table".tr()),
        ),
      );
    }

    return SingleChildScrollView(
      scrollDirection: Axis.horizontal,
      child: Container(
        // Remove the fixed width constraint to allow content to expand
        padding: const EdgeInsets.symmetric(horizontal: 8.0, vertical: 8),
        child: Row(
          mainAxisSize: MainAxisSize.min, // Use min to allow the row to shrink
          children: [
            Wrap(
              spacing: 10,
              crossAxisAlignment: WrapCrossAlignment.center,
              children: leftActions,
            ),
            const SizedBox(width: 10), // Minimal space between left and right actions
            if (rightActions.isNotEmpty)
              Wrap(
                spacing: 10,
                crossAxisAlignment: WrapCrossAlignment.center,
                children: rightActions,
              ),
          ],
        ),
      ),
    );
  }

  void _addRow() {
    var newRowsGenerated = controller.stateManager.getNewRows();

    if (controller.getNewObject != null) {
      var obj = controller.getNewObject!();
      TrinaRow<dynamic> newRowReal = obj.toTrinaRow(context)!;
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
