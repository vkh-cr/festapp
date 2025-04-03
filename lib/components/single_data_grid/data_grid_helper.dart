import 'package:collection/collection.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/AppRouter.gr.dart';
import 'package:fstapp/RouterService.dart';
import 'package:fstapp/dataModels/IconModel.dart';
import 'package:fstapp/dataModels/PlaceModel.dart';
import 'package:fstapp/dataModels/UserInfoModel.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:fstapp/dataModelsEshop/OrderModel.dart';
import 'package:fstapp/dataServices/DbOccasions.dart';
import 'package:fstapp/pages/utility/HtmlEditorPage.dart';
import 'package:fstapp/themeConfig.dart';
import 'package:fstapp/widgets/CustomThreeStateCheckbox.dart';
import 'package:trina_grid/trina_grid.dart';

class DataGridHelper
{
  static Widget buildHtmlEditorButton({
    required BuildContext context,
    required String field,
    required TrinaColumnRendererContext rendererContext,
    required Future<String?> Function() loadContent,
    int? occasionId
  }) {
    String? textToEdit;
    String? oldText = rendererContext.row.cells[field]?.value;
    if (oldText != null) {
      textToEdit = oldText;
    }

    return ElevatedButton(
      onPressed: () async {
        Map<String, dynamic> param = {
          HtmlEditorPage.parContent: textToEdit,
          HtmlEditorPage.parLoad: loadContent,
        };

        RouterService.navigatePageInfo(context, HtmlEditorRoute(content: param, occasionId: occasionId)).then((value) async {
          if (value != null) {
            var newText = value as String;
            if (newText != textToEdit) {
              rendererContext.row.cells[field]?.value = newText;
              var cell = rendererContext.row.cells[field]!;
              rendererContext.stateManager.changeCellValue(cell, cell.value, force: true);
            }
          }
        });
      },
      child: Row(
        children: [
          const Icon(Icons.edit),
          Padding(
            padding: const EdgeInsets.all(6),
            child: Text("Edit".tr()),
          ),
        ],
      ),
    );
  }

  static Widget buildTab(BuildContext context, IconData icon, String text) {
    return Row(
      children: [
        Icon(icon, color: ThemeConfig.blackColor(context)),
        Padding(
          padding: const EdgeInsets.all(8),
          child: Text(
            text,
            style: TextStyle(color: ThemeConfig.blackColor(context)),
          ),
        ),
      ],
    );
  }

  static T? getValueOrNull<T>(dynamic value, {T? emptyValue}) {
    if (value == emptyValue || value == "") return null;
    if (value is String) return value.trim() as T;
    return value as T?;
  }

  static String getValueFromFormatted(dynamic value) {
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

  static int? getIdFromFormatted(String value) {
    final startIndex = value.indexOf(":");
    if(startIndex == -1)
    {
      return null;
    }
    var result = value.substring(0, startIndex);
    var res = int.parse(result);
    return res;
  }

  static Checkbox checkBoxRenderer(TrinaColumnRendererContext rendererContext, String idString, [bool Function()? isEnabled]) {
    var value = rendererContext.cell.value == "true" ? true : false;
    return Checkbox(
      value: value,
      onChanged: isEnabled != null && isEnabled() == false ? null : (bool? value) {
        var cell = rendererContext.row.cells[idString]!;
        rendererContext.stateManager.changeCellValue(cell, value.toString(), force: true);
        rendererContext.cell.value = value.toString();
        },
    );}

  static Widget foodCheckBoxRenderer(
      rendererContext, String idString, [bool Function()? isEnabled]) {
    // Get the current state (default to "none" if the value is null or invalid)
    String currentState = rendererContext.cell.value ?? DbOccasions.serviceNone;

    return CustomThreeStateCheckbox(
      noneStateIcon: Icons.close,
      paidStateIcon: Icons.radio_button_checked,
      usedStateIcon: Icons.radio_button_off,
      currentState: currentState,
      onStateChanged: (String newState) {
        var cell = rendererContext.row.cells[idString]!;
        rendererContext.stateManager.changeCellValue(cell, newState, force: true);
        rendererContext.cell.value = newState;
        rendererContext.stateManager.notifyListeners();
      },
      isEnabled: isEnabled == null || isEnabled(),
    );
  }

  static Widget backgroundFromText(rendererContext, Color Function(String) getBackground, [Function(String)? processText]) {
    String value = rendererContext.cell.value;
    String textValue = processText?.call(value);
    return Container(
      color: getBackground(value),
      child: Center(child: Text(textValue)));
  }

  static Widget orderState(BuildContext context, rendererContext, Color Function(String) getBackground, [Function(String)? processText]) {
    String value = rendererContext.cell.value;
    String firstPart = value.split(";")[0];
    String textValue = processText?.call(value) ?? value;

    return Container(
      color: getBackground(value),
      child: Center(
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(
              textValue,
            ),
            if (firstPart == OrderModel.expiredState)
              Padding(
                padding: const EdgeInsets.only(left: 8.0),
                child: Tooltip(
                  message: 'Expired Order',
                  child: CircleAvatar(
                    radius: 12,
                    backgroundColor: ThemeConfig.redColor(context),
                    child: Icon(
                      Icons.error_outline,
                      size: 16,
                      color: Colors.white,
                    ),
                  ),
                ),
              ),
          ],
        ),
      ),
    );
  }

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

  static TrinaGridLocaleText getPlutoLocaleFromLangCode(String langCode)
  {
    switch(langCode)
    {
      case "cs": return const TrinaGridLocaleText.czech();
      case "de": return const TrinaGridLocaleText.german();
      case "sk": return const TrinaGridLocaleText(
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
      case "pl": return const TrinaGridLocaleText(
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
      case "uk": return const TrinaGridLocaleText(
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

    return const TrinaGridLocaleText();
  }

  static textTransform(String? value, List<String> allValues, String Function(String?) transform) {
    if(!allValues.contains(value))
    {
      return "???";
    }
    return transform(value);
  }
}