import 'package:avapp/models/PlaceModel.dart';
import 'package:avapp/services/MapIconService.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';

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

  static Widget checkBoxRenderer(rendererContext, String idString) {
    var value = rendererContext.cell.value == "true" ? "true" : "false";
    return Checkbox(
      value: bool.parse(value),
      onChanged: (bool? value) {
        var cell = rendererContext.row.cells[idString]!;
        rendererContext.stateManager.changeCellValue(cell, value.toString(), force: true);
        rendererContext.cell.value = value.toString();
        },
    );}

  static Widget mapIconRenderer(rendererContext, void Function(Function() set) setState) {
    String? value = rendererContext.cell.value;

      var iconLink = MapIconHelper.getIconAddress(value);
      if(iconLink != null)
      {
        var svgIcon = SizedBox(
          width: 20,
          height: 20,
          child: SvgPicture.asset(
            iconLink,
            colorFilter: const ColorFilter.mode(Colors.black, BlendMode.srcIn),
          ),
        );
        return Row(children: [svgIcon, const SizedBox(width: 12,),Text(value!)],);
      }
      return const Text(PlaceModel.WithouValue);
    }

  static Widget idRenderer(rendererContext) {
    var value = rendererContext.cell.value == -1 ? "" : rendererContext.cell.value.toString();
    return Text(value);
  }
}