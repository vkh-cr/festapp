import 'package:flutter/material.dart';
import 'package:pluto_grid/pluto_grid.dart';

class DataGridHelper
{
  static String GetValueFromFormatted(dynamic value) {
    final startIndex = value.indexOf(":");
    if(startIndex == -1)
    {
      return value;
    }
    var result = value.substring(startIndex+1);
    return result;
  }

  static String returnQuestionMarkOnInvalid(dynamic value, List<String> allValues) {
    if(!allValues.contains(value))
    {
      return "???";
    }
    return value;
  }

  static int? GetIdFromFormatted(String value) {
    final startIndex = value.indexOf(":");
    if(startIndex == -1)
    {
      return null;
    }
    var result = value.substring(0, startIndex);
    var res = int.parse(result);
    return res;
  }

  static Widget checkBoxRenderer(rendererContext, void Function(Function() set) setState) {
    var value = rendererContext.cell.value == "true" ? "true" : "false";
    return Checkbox(
      value: bool.parse(value),
      onChanged: (bool? value) { setState(() {
        rendererContext.cell.value = value.toString();
        rendererContext.row.setState(PlutoRowState.updated);
      }); },
    );}
}