import 'package:collection/collection.dart';
import 'package:fstapp/dataModels/IconModel.dart';
import 'package:fstapp/dataModels/PlaceModel.dart';
import 'package:fstapp/dataModels/UserInfoModel.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:fstapp/themeConfig.dart';
import 'package:pluto_grid_plus/pluto_grid_plus.dart';

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

  static Widget checkBoxRenderer(rendererContext, String idString, [bool Function()? isEnabled]) {
    var value = rendererContext.cell.value == "true" ? "true" : "false";
    return Checkbox(
      value: bool.parse(value),
      onChanged: isEnabled != null && isEnabled() == false ? null : (bool? value) {
        var cell = rendererContext.row.cells[idString]!;
        rendererContext.stateManager.changeCellValue(cell, value.toString(), force: true);
        rendererContext.cell.value = value.toString();
        },
    );}

  static Widget mapIconRenderer(BuildContext context, rendererContext, List<IconModel> icons) {
    int? value = rendererContext.cell.value;
    return iconToRow(context, value, icons);
  }

  static Widget iconToRow(BuildContext context, int? id, List<IconModel> icons) {
    var icon = icons.firstWhereOrNull((t)=>t.id == id);

    if (icon != null) {
      var svgIcon = SizedBox(
        width: 20,
        height: 20,
        child: SvgPicture.string(
          icon.data!,
          colorFilter: ColorFilter.mode(ThemeConfig.blackColor(context), BlendMode.srcIn),
        ),
      );

      return Row(
        children: [
          svgIcon,
          const SizedBox(width: 12),
          Text(icon.link!),
        ],
      );
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
      case "uk": return const PlutoGridLocaleText(
        unfreezeColumn: 'Розблокувати стовпець',
        freezeColumnToStart: 'Заморозити стовпець на початок',
        freezeColumnToEnd: 'Заморозити стовпець на кінець',
        autoFitColumn: 'Автоматично підлаштувати стовпець',
        hideColumn: 'Сховати стовпець',
        setColumns: 'Налаштувати стовпці',
        setFilter: 'Налаштувати фільтр',
        resetFilter: 'Скинути фільтр',
        setColumnsTitle: 'Назва стовпця',
        filterColumn: 'Стовпець',
        filterType: 'Тип',
        filterValue: 'Значення',
        filterAllColumns: 'Всі стовпці',
        filterContains: 'Містить',
        filterEquals: 'Дорівнює',
        filterStartsWith: 'Починається з',
        filterEndsWith: 'Закінчується на',
        filterGreaterThan: 'Більше ніж',
        filterGreaterThanOrEqualTo: 'Більше або дорівнює',
        filterLessThan: 'Менше ніж',
        filterLessThanOrEqualTo: 'Менше або дорівнює',
        sunday: 'Нд',
        monday: 'Пн',
        tuesday: 'Вт',
        wednesday: 'Ср',
        thursday: 'Чт',
        friday: 'Пт',
        saturday: 'Сб',
        hour: 'Година',
        minute: 'Хвилина',
        loadingText: 'Завантажується',
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