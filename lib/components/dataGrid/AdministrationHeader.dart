import 'package:fstapp/components/dataGrid/DataGridAction.dart';
import 'package:fstapp/components/dataGrid/DataGridHelper.dart';
import 'package:fstapp/components/dataGrid/SingleTableDataGrid.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/services/DialogHelper.dart';
import 'package:fstapp/services/ToastHelper.dart';
import 'package:fstapp/themeConfig.dart';
import 'package:pluto_grid_plus/pluto_grid_plus.dart';

import 'PlutoAbstract.dart';

class AdministrationHeader<T extends IPlutoRowModel> extends StatefulWidget {
  final PlutoGridStateManager stateManager;
  final SingleTableDataGrid dataGrid;
  final List<DataGridAction>? headerChildren;
  final DataGridActionsController? saveExtended;

  const AdministrationHeader({required this.stateManager, Key? key, required this.fromPlutoJson, required this.loadData, this.headerChildren, this.saveExtended, required this.dataGrid}) : super(key: key);

  final T Function(Map<String, dynamic>) fromPlutoJson;
  final Future<void> Function() loadData;
  @override
  _AdministrationHeaderState createState() => _AdministrationHeaderState(fromPlutoJson, loadData, dataGrid, headerChildren: headerChildren, actionsController: saveExtended);

  static PlutoGridConfiguration defaultPlutoGridConfiguration(BuildContext context, String langCode) {
    return PlutoGridConfiguration(
      scrollbar: const PlutoGridScrollbarConfig(
        scrollbarThickness: 16.0,
      ),
      localeText: DataGridHelper.getPlutoLocaleFromLangCode(langCode),
      style: ThemeConfig.isDarkMode(context) ? PlutoGridStyleConfig.dark(
        rowHeight: 36,
        cellColorInReadOnlyState: Colors.white24,
        cellTextStyle: TextStyle(color: ThemeConfig.blackColor(context)),
        columnTextStyle: TextStyle(color: ThemeConfig.blackColor(context)),
      ) : PlutoGridStyleConfig(
          rowHeight: 36,
          cellColorInReadOnlyState: Colors.white70
      ),
    );
  }
}

class _AdministrationHeaderState<T extends IPlutoRowModel> extends State<AdministrationHeader>{

  final T Function(Map<String, dynamic>) fromPlutoJson;
  final Future<void> Function() loadData;
  final SingleTableDataGrid dataGrid;
  List<DataGridAction>? headerChildren = [];
  final DataGridActionsController? actionsController;
  List<Widget> allChildren = [];

  _AdministrationHeaderState(this.fromPlutoJson, this.loadData, this.dataGrid, {this.headerChildren, this.actionsController});

  @override
  Widget build(BuildContext context) {
    allChildren.clear();
    headerChildren = headerChildren ?? [];
    for(var a in headerChildren!)
    {
      allChildren.add(ElevatedButton(onPressed:
          a.isEnabled != null && !a.isEnabled!() ?
          null :
          () => a.action!(dataGrid, null),
          child: Text(a.name??"---")));
    }
    if(headerChildren!.isNotEmpty)
    {
      allChildren.insertAll(0, [const VerticalDivider()]);
    }
    allChildren.insertAll(0, [
      if(actionsController?.isAddActionPossible?.call()??true)
      ElevatedButton(
      onPressed: actionsController != null && actionsController!.areAllActionsEnabled != null && !actionsController!.areAllActionsEnabled!()
        ? null :
        _addRow,
        child: const Text("Add").tr(),
      ),
      ElevatedButton(
        onPressed: actionsController != null && actionsController!.areAllActionsEnabled != null && !actionsController!.areAllActionsEnabled!()
            ? null :
        _cancelChanges,
        child: const Text("Discard changes").tr(),
      ),
      ElevatedButton(
        onPressed: actionsController != null && actionsController!.areAllActionsEnabled != null && !actionsController!.areAllActionsEnabled!() ?
        null :
            () {
          actionsController?.saveAction?.action == null ? _saveChanges() :
          actionsController!.saveAction!.action!(dataGrid, _saveChanges);
        },
        child: Text(actionsController?.saveAction?.name??"Save changes".tr()),
      )
      ,]);

    return SingleChildScrollView(
      scrollDirection: Axis.horizontal,
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 8.0, vertical: 8),
        child: Wrap(
            spacing: 10,
            crossAxisAlignment: WrapCrossAlignment.center,
            children: allChildren
        ),
      ),
    );
  }

  void _addRow(){
    var newRow = widget.stateManager.getNewRows();
    widget.stateManager.prependRows(newRow);
    for (var value in newRow) {
      dataGrid.newRows.add(value);
    }
  }

  Future<void> _saveChanges() async{
    var toDelete = dataGrid.deletedRows.toList();
    dataGrid.updatedRows.removeAll(toDelete);
    var deleteList = List<T>.from(
        toDelete.map((x) => fromPlutoJson(x.toJson())));
    if(deleteList.isNotEmpty)
    {
      var result = await DialogHelper.showConfirmationDialogAsync(context,
          "Confirm removal".tr(), "${"Items".tr()}:\n ${deleteList.map((value) => value.toBasicString()).toList().join(",\n")}\n?",);
      if(!result) {
        return;
      }
    }

    for (var element in deleteList)
    {
      try
      {
        await element.deleteMethod();
      }
      catch(e)
      {
        ToastHelper.Show(context, e.toString(), severity: ToastSeverity.NotOk);
        return;
      }
      ToastHelper.Show(context, "${"Deleted".tr()}: ${element.toBasicString()}");
    }

    var updatedSet = Set<T>.from(
        dataGrid.updatedRows.map((x) => fromPlutoJson(x.toJson())));

    var newSet = Set<T>.from(
        dataGrid.newRows.map((x) => fromPlutoJson(x.toJson())));

    updatedSet.addAll(newSet);

    for (var element in updatedSet.toList())
    {
      try
      {
        await element.updateMethod();
      }
      catch(e)
      {
        ToastHelper.Show(context, e.toString(), severity: ToastSeverity.NotOk);
        return;
      }
      ToastHelper.Show(context, "${"Saved".tr()}: ${element.toBasicString()}");
    }
    await loadData();
  }

  Future<void> _cancelChanges() async {
    var result = await DialogHelper.showConfirmationDialogAsync(context, "Discard changes".tr(), "Really discard all changes?".tr());
    if(!result){
      return;
    }
    await loadData();
  }
}