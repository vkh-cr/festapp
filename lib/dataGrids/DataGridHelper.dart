import 'package:avapp/models/PlaceModel.dart';
import 'package:avapp/models/UserInfoModel.dart';
import 'package:avapp/services/MapIconService.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
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
    return UserInfoModel.sexToLocale(value);
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

  static PlutoGridLocaleText getPlutoLocaleFromLangCode(String langCode)
  {
    switch(langCode)
    {
      case "cs": return const PlutoGridLocaleText.czech();
      case "de": return const PlutoGridLocaleText.german();
      case "sk": return const PlutoGridLocaleText(
          // Column menu
          unfreezeColumn: 'Odomknúť stĺpec',
          freezeColumnToStart: 'Zmraziť stĺpec na začiatok',
          freezeColumnToEnd: 'Zmraziť stĺpec na koniec',
          autoFitColumn: 'Automaticky prispôsobiť stĺpec',
          hideColumn: 'Skryť stĺpec',
          setColumns: 'Nastaviť stĺpce',
          setFilter: 'Nastaviť filter',
          resetFilter: 'Obnoviť filter',
          // SetColumns popup
          setColumnsTitle: 'Názov stĺpca',
          // Filter popup
          filterColumn: 'Stĺpec',
          filterType: 'Typ',
          filterValue: 'Hodnota',
          filterAllColumns: 'Všetky stĺpce',
          filterContains: 'Obsahuje',
          filterEquals: 'Rovná sa',
          filterStartsWith: 'Začína na',
          filterEndsWith: 'Končí na',
          filterGreaterThan: 'Väčšie ako',
          filterGreaterThanOrEqualTo: 'Väčšie alebo rovné',
          filterLessThan: 'Menšie ako',
          filterLessThanOrEqualTo: 'Menšie alebo rovné',
          // Date popup
          sunday: 'Ne',
          monday: 'Po',
          tuesday: 'Ut',
          wednesday: 'St',
          thursday: 'Št',
          friday: 'Pia',
          saturday: 'So',
          // Time column popup
          hour: 'Hodina',
          minute: 'Minúta',
          // Common
          loadingText: 'Načíta sa',
      );
      case "pl": return const PlutoGridLocaleText(
        // Column menu
        unfreezeColumn: 'Odblokuj kolumnę',
        freezeColumnToStart: 'Zamroź kolumnę na początku',
        freezeColumnToEnd: 'Zamroź kolumnę na końcu',
        autoFitColumn: 'Dopasuj kolumnę automatycznie',
        hideColumn: 'Ukryj kolumnę',
        setColumns: 'Ustaw kolumny',
        setFilter: 'Ustaw filtr',
        resetFilter: 'Resetuj filtr',
        // SetColumns popup
        setColumnsTitle: 'Nazwa kolumny',
        // Filter popup
        filterColumn: 'Kolumna',
        filterType: 'Typ',
        filterValue: 'Wartość',
        filterAllColumns: 'Wszystkie kolumny',
        filterContains: 'Zawiera',
        filterEquals: 'Równa się',
        filterStartsWith: 'Zaczyna się od',
        filterEndsWith: 'Kończy się na',
        filterGreaterThan: 'Większa niż',
        filterGreaterThanOrEqualTo: 'Większa lub równa',
        filterLessThan: 'Mniejsza niż',
        filterLessThanOrEqualTo: 'Mniejsza lub równa',
        // Date popup
        sunday: 'Ni',
        monday: 'Po',
        tuesday: 'Wt',
        wednesday: 'Śr',
        thursday: 'Cz',
        friday: 'Pi',
        saturday: 'So',
        // Time column popup
        hour: 'Godzina',
        minute: 'Minuta',
        // Common
        loadingText: 'Ładowanie',
      );
    }

    return const PlutoGridLocaleText();
  }

  static textTransform(String? value, List<String> allValues, String Function(String?) transform) {
    if(!allValues.contains(value))
    {
      return "???";
    }
    return transform(value);
  }
}