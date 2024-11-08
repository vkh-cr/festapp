import 'SingleTableDataGrid.dart';

class DataGridAction{
  String? name;
  void Function(SingleTableDataGrid, [Future<void> Function()? originalAction])? action;
  bool Function()? isEnabled;
  DataGridAction({this.action, this.name, this.isEnabled});
}

class DataGridActionsController{
  bool Function()? isAddActionPossible;
  bool Function()? areAllActionsEnabled;
  DataGridAction? saveAction;
  DataGridActionsController({this.saveAction, this.areAllActionsEnabled, this.isAddActionPossible});
}