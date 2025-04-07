import 'package:flutter/cupertino.dart';
import 'package:trina_grid/trina_grid.dart';

abstract class ITrinaRowModel {
  dynamic get id;

  TrinaRow? toTrinaRow(BuildContext context);
  Future<void> deleteMethod();
  Future<void> updateMethod();
  String toBasicString();
}