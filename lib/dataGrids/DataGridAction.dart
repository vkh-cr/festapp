import 'SingleTableDataGrid.dart';

class DataGridAction{
  String name;
  void Function(SingleTableDataGrid) action;
  DataGridAction(this.name, this.action);
}

class DataGridExtendedAction{
  String? name;
  void Function(SingleTableDataGrid dataGrid, Future<void> Function() originalAction)? action;
  DataGridExtendedAction({this.name, this.action});
}