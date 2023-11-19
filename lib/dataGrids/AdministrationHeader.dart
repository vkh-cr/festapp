import 'package:avapp/dataGrids/SingleTableDataGrid.dart';
import 'package:flutter/material.dart';
import 'package:pluto_grid/pluto_grid.dart';

import '../models/PlutoAbstract.dart';
import '../services/DialogHelper.dart';
import '../services/ToastHelper.dart';

class AdministrationHeader<T extends IPlutoRowModel> extends StatefulWidget {
  final PlutoGridStateManager stateManager;
  final SingleTableDataGrid dataGrid;
  final List<Widget>? headerChildren;

  const AdministrationHeader({required this.stateManager, Key? key, required this.fromPlutoJson, required this.loadData, this.headerChildren, required this.dataGrid}) : super(key: key);

  final T Function(Map<String, dynamic>) fromPlutoJson;
  final Future<void> Function() loadData;
  @override
  _AdministrationHeaderState createState() => _AdministrationHeaderState(fromPlutoJson, loadData, dataGrid, headerChildren: headerChildren);

  static PlutoGridConfiguration defaultPlutoGridConfiguration() {
    return const PlutoGridConfiguration(
      localeText: PlutoGridLocaleText.czech(),
      style: PlutoGridStyleConfig(
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
  List<Widget>? headerChildren = [];
  List<Widget> allChildren = [];

  _AdministrationHeaderState(this.fromPlutoJson, this.loadData, this.dataGrid, {this.headerChildren});

  @override
  Widget build(BuildContext context) {
    allChildren.clear();
    headerChildren = headerChildren ?? [];
    allChildren.addAll(headerChildren!);
    allChildren.insertAll(0, [
      ElevatedButton(
      onPressed: _addRow,
      child: const Text('Přidat'),
    ),
      ElevatedButton(
        onPressed: _cancelChanges,
        child: const Text('Vrátit zpět'),
      ),
      ElevatedButton(
        onPressed: _saveChanges,
        child: const Text('Uložit změny'),
      ),]);

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

  void _saveChanges() async{
    var toDelete = dataGrid.deletedRows.toList();
    dataGrid.updatedRows.removeAll(toDelete);
    var deleteList = List<T>.from(
        toDelete.map((x) => fromPlutoJson(x.toJson())));
    if(deleteList.isNotEmpty)
    {
      var result = await DialogHelper.showConfirmationDialogAsync(context,
          "Potvrdit smazání", "Opravdu chcete smazat:\n ${deleteList.map((value) => value.toBasicString()).toList().join(",\n")}\n?",
          confirmButtonMessage: "Ano");
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
        ToastHelper.Show(e.toString(), severity: ToastSeverity.NotOk);
        return;
      }
      ToastHelper.Show("Smazáno: ${element.toBasicString()}");
    }

    var toUpsert = dataGrid.updatedRows.toList();
    toUpsert.addAll(dataGrid.newRows);
    var upsertList = List<T>.from(
        toUpsert.map((x) => fromPlutoJson(x.toJson())));
    for (var element in upsertList)
    {
      try
      {
        await element.updateMethod();
      }
      catch(e)
      {
        ToastHelper.Show(e.toString(), severity: ToastSeverity.NotOk);
        return;
      }
      ToastHelper.Show("Uloženo: ${element.toBasicString()}");
    }
    await loadData();
  }

  Future<void> _cancelChanges() async {
    var result = await DialogHelper.showConfirmationDialogAsync(context, "Vrácení změn", "Opravdu vrátit všechny změny?");
    if(!result){
      return;
    }
    await loadData();
  }
}