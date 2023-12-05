import 'package:pluto_grid/pluto_grid.dart';

abstract class IPlutoRowModel {
  PlutoRow? toPlutoRow();
  Future<void> deleteMethod();
  Future<void> updateMethod();
  String toBasicString();
}