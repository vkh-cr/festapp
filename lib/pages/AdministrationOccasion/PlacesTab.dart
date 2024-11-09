import 'package:collection/collection.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/AppRouter.gr.dart';
import 'package:fstapp/RouterService.dart';
import 'package:fstapp/components/dataGrid/DataGridAction.dart';
import 'package:fstapp/components/dataGrid/DataGridHelper.dart';
import 'package:fstapp/dataModels/IconModel.dart';
import 'package:fstapp/dataModels/PlaceModel.dart';
import 'package:fstapp/components/dataGrid/SingleTableDataGrid.dart';
import 'package:fstapp/dataModels/Tb.dart';
import 'package:fstapp/dataServices/DbPlaces.dart';
import 'package:fstapp/dataServices/SynchroService.dart';
import 'package:pluto_grid_plus/pluto_grid_plus.dart';

class PlacesTab extends StatelessWidget {
  final List<IconModel> svgIcons;
  final List<int?> mapIcons;

  const PlacesTab({Key? key, required this.svgIcons, required this.mapIcons}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SingleTableDataGrid<PlaceModel>(
      context,
      DbPlaces.getAllPlaces,
      PlaceModel.fromPlutoJson,
      DataGridFirstColumn.deleteAndDuplicate,
      Tb.places.id,
      columns: [
        PlutoColumn(
          title: "Id".tr(),
          field: Tb.places.id,
          type: PlutoColumnType.number(defaultValue: -1),
          readOnly: true,
          width: 50,
          renderer: (rendererContext) => DataGridHelper.idRenderer(rendererContext),
        ),
        PlutoColumn(
          title: "Hide".tr(),
          field: Tb.places.is_hidden,
          type: PlutoColumnType.select([]),
          applyFormatterInEditing: true,
          enableEditingMode: false,
          width: 100,
          renderer: (rendererContext) => DataGridHelper.checkBoxRenderer(rendererContext, Tb.places.is_hidden),
        ),
        PlutoColumn(
            title: "Title".tr(),
            field: Tb.places.title,
            type: PlutoColumnType.text(),
            width: 300
        ),
        PlutoColumn(
            title: "Content".tr(),
            field: Tb.places.description,
            type: PlutoColumnType.text(),
            width: 300
        ),
        PlutoColumn(
          title: "Icon".tr(),
          field: Tb.places.icon,
          applyFormatterInEditing: true,
          formatter: (d) { return svgIcons.firstWhereOrNull((i)=>i.id == d)?.link??PlaceModel.WithouValue; },
          type: PlutoColumnType.select(mapIcons, builder: (icon) {
            return DataGridHelper.iconToRow(context, icon, svgIcons);
          }),
          renderer: (rendererContext) => DataGridHelper.mapIconRenderer(context, rendererContext, svgIcons),
        ),
        PlutoColumn(
            width: 150,
            title: "Location on map".tr(),
            enableFilterMenuItem: false,
            enableContextMenu: false,
            enableSorting: false,
            field: Tb.places.coordinates,
            type: PlutoColumnType.text(defaultValue: SynchroService.globalSettingsModel!.defaultMapLocation),
            renderer: (rendererContext) {
              return ElevatedButton(
                  onPressed: () async {
                    var placeModel = PlaceModel.fromPlutoJson(rendererContext.row.toJson());
                    RouterService.navigatePageInfo(context, MapRoute(place: placeModel)).then((value) async {
                      if(value != null)
                      {
                        var cell = rendererContext.row.cells[Tb.places.coordinates]!;
                        rendererContext.stateManager.changeCellValue(cell, value, force: true);
                      }
                    });
                  },
                  child: Row(children: [const Icon(Icons.edit), Padding(padding: const EdgeInsets.all(6), child: const Text("Edit").tr()) ])
              );
            }),
        PlutoColumn(
          title: "Order".tr(),
          field: Tb.places.order,
          type: PlutoColumnType.number(defaultValue: null),
          applyFormatterInEditing: true,
          width: 100,
        ),
        // Other columns for PlacesTab
      ],
    ).DataGrid();
  }
}
