import 'package:av_app/Helpers/DialogHelper.dart';
import 'package:av_app/main.dart';
import 'package:flutter/material.dart';
import 'package:fluttertoast/fluttertoast.dart';
import 'package:pluto_grid/pluto_grid.dart';
import '../models/Information.dart';

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
          title: "Nadpis",
          field: Information.titleColumn,
          type: PlutoColumnType.text(),
          readOnly: true),
        PlutoColumn(
          title: "Popis",
          field: Information.descriptionColumn,
          type: PlutoColumnType.text(),
          readOnly: true),
      ]);

      informationData?.forEach((info){
        rows.add(PlutoRow(cells: {
          Information.titleColumn : PlutoCell(value: info.title),
          Information.descriptionColumn : PlutoCell(value: info.description),
        }));
      });
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
          },
          rowColorCallback: (rowContext){
            return rowContext.row.state == PlutoRowState.added ? Colors.orange : Colors.transparent;
          },
            createHeader: (stateManager) => AdministrationHeader(stateManager: stateManager),
        ),
      ),
    );
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
    var information = await supabase
      .from("information")
      .select()
      .order('created_at', ascending: false );

    List<Information> informationData = [];
    information.forEach((info) {
      informationData.add(Information.fromDynamic(info));
    });

    final List<PlutoRow> plutoRows = [];
    for (var info in informationData) {
      plutoRows.add(PlutoRow(cells: {
      Information.titleColumn : PlutoCell(value: info.title),
      Information.descriptionColumn : PlutoCell(value: info.description),
      },
        checked: true
      ));
    }
    widget.stateManager.removeAllRows();
    widget.stateManager.appendRows(plutoRows);
    for (var row in widget.stateManager.rows) {
      row.setState(PlutoRowState.none);
    }
    Fluttertoast.showToast(msg: "Data reloaded");
  }

  void _addRow(){
    setState(() {
      isAddButtonEnabled = false;
      isSaveButtonVisible = true;
    });
    widget.stateManager.prependNewRows();
    for (var column in widget.stateManager.columns) {
      column.readOnly = false;
    }
  }

  void _saveAddedRowAsync() async{
    final row = widget.stateManager.rows.first;
    if(widget.stateManager.currentCell?.row == row && widget.stateManager.isEditing)
    {
      await DialogHelper.showTitleTextButtonDialogAsync(context, "Chyba", "Před uložením zavřete aktuální buňku.");
      return;
    }

    final map = <String, String>{};
    row.cells.forEach((key, val) {
      map[key] = val.valueForSorting?.toString() ?? "";
    });

    var information = Information.fromMap((map));
    var validationResult = information.Validate();
    if(validationResult.hasError){
      await DialogHelper.showTitleTextButtonDialogAsync(context, "chyba", validationResult.errorMessage);
      return;
    }

    try{
      var info = await supabase
        .from("information")
        .insert([information.toInsertMap()]);
    }catch(e) {
      await DialogHelper.showTitleTextButtonDialogAsync(context, "chyba", "Nepovedlo se uložit data, zkuste to prosím znovu");
    }
  }
}