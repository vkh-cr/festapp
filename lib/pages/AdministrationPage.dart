import 'package:flutter/material.dart';
import 'package:fluttertoast/fluttertoast.dart';
import 'package:pluto_grid/pluto_grid.dart';
import '../models/Information.dart';

class MockData{

  static Future<List<Information>> GetInformationAsync() async {
    return[
      const Information(title: "first", description: "short"),
      const Information(title: "second", description: "short"),
    ];
  }
}

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
          title: "Title1",
          field: "Field1",
          type: PlutoColumnType.text(),
          readOnly: true),
        PlutoColumn(
          title: "Title2",
          field: "Field2",
          type: PlutoColumnType.text(),
          readOnly: true),
      ]);

      informationData?.forEach((info){
        rows.add(PlutoRow(cells: {
          'Field1': PlutoCell(value: info.title),
          'Field2': PlutoCell(value: info.description),
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
            // return rowContext.row.state == PlutoRowState.added ? Colors.orange : Colors.transparent;
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
    final informationData = await MockData.GetInformationAsync();
    final List<PlutoRow> plutoRows = [];
    informationData?.forEach((info) {
      plutoRows.add(PlutoRow(cells: {
        'Field1': PlutoCell(value: info.title),
        'Field2': PlutoCell(value: info.description),
        },
        checked: true
      ));
    });
    widget.stateManager.removeAllRows();
    widget.stateManager.appendRows(plutoRows);
    widget.stateManager.rows.forEach((row) {row.setState(PlutoRowState.none);});
    Fluttertoast.showToast(msg: "DataReloaded");
  }

  void _addRow(){
    setState(() {
      isAddButtonEnabled = false;
      isSaveButtonVisible = true;
    });
    widget.stateManager.prependNewRows();
  }

  void _saveAddedRowAsync() async{
    var row = widget.stateManager.rows.first;
    try{
    var title = row.cells.values.firstWhere((cell) => cell.key == "title");
    }catch(e){

    }

    // var infoData = new Information(title: row.cells, description: description)
  }
}