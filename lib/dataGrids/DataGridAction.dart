import 'SingleTableDataGrid.dart';

class DataGridAction{
  String? name;
  void Function(SingleTableDataGrid, [Future<void> Function()? originalAction])? action;
  bool Function()? isEnabled;
  DataGridAction({this.action, this.name, this.isEnabled});
}

class DataGridExtendedActions{
  bool Function()? areAllActionsEnabled;
  DataGridAction? saveAction;
  DataGridExtendedActions({this.saveAction, this.areAllActionsEnabled});
}