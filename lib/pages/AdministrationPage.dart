import 'package:av_app/Helpers/DialogHelper.dart';
import 'package:av_app/services/DataService.dart';
import 'package:flutter/material.dart';
import 'package:fluttertoast/fluttertoast.dart';
import 'package:pluto_grid/pluto_grid.dart';
import '../Models/Information.dart';

class AdministrationPage extends StatefulWidget {
  const AdministrationPage({Key? key}) : super(key: key);

  @override
  _AdministrationPageState createState() => _AdministrationPageState();
}

class _AdministrationPageState extends State<AdministrationPage> {
  List<Information>? informationData;
  late PlutoGridStateManager stateManager;

  List<PlutoColumn> columns = [];
  List<PlutoRow> rows = [];

  @override
  void initState() {
    super.initState();
      columns.addAll([
        PlutoColumn(
            title: "Id",
            field: Information.idColumn,
            type: PlutoColumnType.number(),
            readOnly: true,
            hide: true),
        PlutoColumn(
          title: "Nadpis",
          field: Information.titleColumn,
          type: PlutoColumnType.text(),
          readOnly: true),
        PlutoColumn(
          title: "Popis",
          field: Information.descriptionColumn,
          type: PlutoColumnType.text(),
          readOnly: true),
        // PlutoColumn(
        //     title: "",
        //     field: "delete",
        //     type: PlutoColumnType.text(),
        //     renderer: (rendererContext) {
        //       return Row(
        //         children: [
        //           IconButton(
        //               onPressed: _deleteRow,
        //               icon: const Icon(Icons.delete_forever))
        //         ],
        //       );
        //     })
      ]);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        padding: const EdgeInsets.all(30),
        child: PlutoGrid(
          columns: columns,
          rows: rows,
          onChanged: (PlutoGridOnChangedEvent event) {
            stateManager.notifyListeners();
          },
          onLoaded: (PlutoGridOnLoadedEvent event) {
            stateManager = event.stateManager;
            AdministrationPageHelper.reloadDataAsync(stateManager);
          },
          rowColorCallback: (rowContext){
            return rowContext.row.state == PlutoRowState.added ? Colors.orange : Colors.transparent;
          },
            createHeader: (stateManager) => AdministrationHeader(stateManager: stateManager),
        ),
      ),
    );
  }

  void _deleteRow() async{
    Fluttertoast.showToast(msg: "Deleted");
    // PlutoColumnRendererContext rendererContext
  }
}

class AdministrationHeader extends StatefulWidget {
  final PlutoGridStateManager stateManager;

  const AdministrationHeader({required this.stateManager, Key? key}) : super(key: key);

  @override
  _AdministrationHeaderState createState() => _AdministrationHeaderState();
}

class _AdministrationHeaderState extends State<AdministrationHeader>{

  bool isAddButtonEnabled = true;
  bool isSaveButtonVisible = false;

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      scrollDirection: Axis.horizontal,
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 8.0, vertical: 50),
        child: Wrap(
            spacing: 10,
            crossAxisAlignment: WrapCrossAlignment.center,
            children: [
              ElevatedButton(
                  onPressed: _reloadDataAsync,
                  child: const Text('Reload data')),
              ElevatedButton(
                onPressed: isAddButtonEnabled ? _addRow : null,
                child: const Text('Add record'),
              ),
              ElevatedButton(
                style: isSaveButtonVisible ? null : ButtonStyle(
                  backgroundColor: MaterialStateProperty.all(Colors.transparent),
                  foregroundColor: MaterialStateProperty.all(Colors.transparent),
                  overlayColor: MaterialStateProperty.all(Colors.transparent),
                ),
                onPressed: _saveAddedRowAsync,
                child: const Text('Add record'),
              ),
            ]
        ),
      ),
    );
  }

  void _reloadDataAsync() async{
    await AdministrationPageHelper.reloadDataAsync(widget.stateManager);
    Fluttertoast.showToast(msg: "Data reloaded");
  }

  void _addRow(){
    setState(() {
      isAddButtonEnabled = false;
      isSaveButtonVisible = true;
    });
    widget.stateManager.prependNewRows();
    AdministrationPageHelper.changeTableReadonlyAbility(widget.stateManager, false);
  }

  void _saveAddedRowAsync() async{
    final row = widget.stateManager.rows.first;
    if(widget.stateManager.currentCell?.row == row && widget.stateManager.isEditing)
    {
      await DialogHelper.showTitleTextButtonDialogAsync(context, "Chyba", "Před uložením zavřete aktuální buňku.");
      return;
    }

    var information = Information.fromJson(row.toJson());
    var validationResult = information.Validate();
    if(validationResult.hasError){
      await DialogHelper.showTitleTextButtonDialogAsync(context, "chyba", validationResult.errorMessage);
      return;
    }

    try{
      await DataService.saveInformation(information);
      Fluttertoast.showToast(msg: "Uloženo");
      AdministrationPageHelper.changeTableReadonlyAbility(widget.stateManager, true);
    }catch(e) {
      await DialogHelper.showTitleTextButtonDialogAsync(context, "chyba", "Nepovedlo se uložit data, zkuste to prosím znovu");
    }
  }
}

class AdministrationPageHelper{
  static Future<List<PlutoRow>> getInformationRowsAsync() async {
    final informationList = await DataService.getAllInformation();
    return informationList
      .map((i) => PlutoRow(cells: {
          Information.idColumn : PlutoCell(value: i.id),
          Information.titleColumn : PlutoCell(value: i.title),
          Information.descriptionColumn : PlutoCell(value: i.description),
        },
        checked: true))
      .toList();
  }

  static Future<void> reloadDataAsync(PlutoGridStateManager stateManager) async {
    final rows = await AdministrationPageHelper.getInformationRowsAsync();

    stateManager.removeAllRows();
    stateManager.appendRows(rows);
    for (var row in stateManager.rows) {
      row.setState(PlutoRowState.none);
    }
  }

  static void changeTableReadonlyAbility(PlutoGridStateManager stateManager, bool value){
    for (var column in stateManager.columns) {
      column.readOnly = value;
    }
  }
}