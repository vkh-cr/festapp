import 'package:collection/collection.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/AppRouter.gr.dart';
import 'package:fstapp/RouterService.dart';
import 'package:fstapp/components/single_data_grid/data_grid_action.dart';
import 'package:fstapp/components/single_data_grid/data_grid_helper.dart';
import 'package:fstapp/components/single_data_grid/single_data_grid_controller.dart';
import 'package:fstapp/dataModels/IconModel.dart';
import 'package:fstapp/dataModels/PlaceModel.dart';
import 'package:fstapp/components/single_data_grid/single_table_data_grid.dart';
import 'package:fstapp/dataModels/Tb.dart';
import 'package:fstapp/dataServices/DbPlaces.dart';
import 'package:fstapp/dataServices/SynchroService.dart';
import 'package:fstapp/components/features/feature_service.dart';
import 'package:trina_grid/trina_grid.dart';

class PlacesTab extends StatefulWidget {
  const PlacesTab({Key? key}) : super(key: key);

  @override
  _PlacesTabState createState() => _PlacesTabState();
}

class _PlacesTabState extends State<PlacesTab> {
  List<IconModel> svgIcons = [];
  List<int?> mapIcons = [];
  bool isLoading = true;

  SingleDataGridController<PlaceModel>? controller;

  @override
  void initState() {
    super.initState();
    loadIcons();
  }

  Future<void> loadIcons() async {
    try {
      var icons = await DbPlaces.getAllIcons();
      setState(() {
        svgIcons = icons;
        mapIcons = svgIcons.map((icon) => icon.id).toList();
        mapIcons.add(null); // Add a null option for "no icon"
        isLoading = false;
      });
      if (controller == null) {
        initController();
      }
    } catch (e) {
      setState(() {
        isLoading = false;
      });
    }
  }

  void initController() {
    controller = SingleDataGridController<PlaceModel>(
      context: context,
      loadData: DbPlaces.getAllPlaces,
      fromPlutoJson: PlaceModel.fromPlutoJson,
      firstColumnType: DataGridFirstColumn.deleteAndDuplicate,
      idColumn: Tb.places.id,
      columns: [
        TrinaColumn(
          title: "Id".tr(),
          field: Tb.places.id,
          type: TrinaColumnType.number(defaultValue: -1),
          readOnly: true,
          width: 50,
          renderer: (rendererContext) =>
              DataGridHelper.idRenderer(rendererContext),
        ),
        TrinaColumn(
          title: "Hide".tr(),
          field: Tb.places.is_hidden,
          type: TrinaColumnType.select([]),
          applyFormatterInEditing: true,
          enableEditingMode: false,
          width: 100,
          renderer: (rendererContext) =>
              DataGridHelper.checkBoxRenderer(rendererContext, Tb.places.is_hidden),
        ),
        TrinaColumn(
          title: "Title".tr(),
          field: Tb.places.title,
          type: TrinaColumnType.text(),
          width: 300,
        ),
        TrinaColumn(
          title: "Content".tr(),
          field: Tb.places.description,
          type: TrinaColumnType.text(),
          width: 300,
        ),
        TrinaColumn(
          title: "Icon".tr(),
          field: Tb.places.icon,
          applyFormatterInEditing: true,
          formatter: (d) {
            return svgIcons.firstWhereOrNull((i) => i.id == d)?.link ??
                PlaceModel.WithouValue;
          },
          type: TrinaColumnType.select(
            defaultValue: null,
            mapIcons,
            builder: (icon) {
              return DataGridHelper.iconToRow(context, icon, svgIcons);
            },
          ),
          renderer: (rendererContext) =>
              DataGridHelper.mapIconRenderer(context, rendererContext, svgIcons),
        ),
        TrinaColumn(
          width: 150,
          title: "Location on map".tr(),
          enableFilterMenuItem: false,
          enableContextMenu: false,
          enableSorting: false,
          field: Tb.places.coordinates,
          type: TrinaColumnType.text(
            defaultValue: FeatureService.getDefaultLocation(),
          ),
          renderer: (rendererContext) {
            return ElevatedButton(
              onPressed: () async {
                var placeModel = PlaceModel.fromPlutoJson(rendererContext.row.toJson());
                RouterService.navigatePageInfo(
                  context,
                  MapRoute(place: placeModel),
                ).then((value) async {
                  if (value != null) {
                    var cell = rendererContext.row.cells[Tb.places.coordinates]!;
                    rendererContext.stateManager.changeCellValue(cell, value, force: true);
                  }
                });
              },
              child: Row(
                children: [
                  const Icon(Icons.edit),
                  Padding(
                    padding: const EdgeInsets.all(6),
                    child: const Text("Edit").tr(),
                  ),
                ],
              ),
            );
          },
        ),
        TrinaColumn(
          title: "Order".tr(),
          field: Tb.places.order,
          type: TrinaColumnType.number(defaultValue: null),
          applyFormatterInEditing: true,
          width: 100,
        ),
      ],
    );
    setState(() {});
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    if (!isLoading && controller == null) {
      initController();
    }
  }

  @override
  Widget build(BuildContext context) {
    if (isLoading || controller == null) {
      return Center(child: CircularProgressIndicator());
    }
    return SingleTableDataGrid<PlaceModel>(controller!);
  }
}
