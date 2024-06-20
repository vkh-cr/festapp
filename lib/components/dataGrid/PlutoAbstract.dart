import 'package:pluto_grid_plus/pluto_grid_plus.dart';

abstract class IPlutoRowModel {
  PlutoRow? toPlutoRow();
  Future<void> deleteMethod();
  Future<void> updateMethod();
  String toBasicString();
}