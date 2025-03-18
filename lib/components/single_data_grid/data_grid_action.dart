import 'package:fstapp/components/single_data_grid/single_data_grid_controller.dart';

import 'single_table_data_grid.dart';

class DataGridAction{
  String? name;
  void Function(SingleDataGridController, [Future<void> Function()? originalAction])? action;
  bool Function()? isEnabled;
  DataGridAction({this.action, this.name, this.isEnabled});
}

class DataGridActionsController{
  bool Function()? isAddActionPossible;
  bool Function()? areAllActionsEnabled;
  DataGridAction? saveAction;
  DataGridActionsController({this.saveAction, this.areAllActionsEnabled, this.isAddActionPossible});
}