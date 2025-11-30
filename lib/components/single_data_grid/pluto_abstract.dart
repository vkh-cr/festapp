import 'package:flutter/material.dart';
import 'package:trina_grid/trina_grid.dart';

abstract class ITrinaRowModel {
  dynamic get id;

  TrinaRow toTrinaRow(BuildContext context);
  Future<void> deleteMethod(BuildContext context);
  Future<void> updateMethod(BuildContext context);
  String toBasicString();
}