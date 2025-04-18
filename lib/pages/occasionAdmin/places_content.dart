import 'package:collection/collection.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/app_router.gr.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/router_service.dart';
import 'package:fstapp/components/single_data_grid/data_grid_helper.dart';
import 'package:fstapp/components/single_data_grid/single_data_grid_controller.dart';
import 'package:fstapp/data_models/icon_model.dart';
import 'package:fstapp/data_models/place_model.dart';
import 'package:fstapp/components/single_data_grid/single_table_data_grid.dart';
import 'package:fstapp/data_models/tb.dart';
import 'package:fstapp/data_services/db_places.dart';
import 'package:fstapp/components/features/feature_service.dart';
import 'package:trina_grid/trina_grid.dart';

class PlacesContent extends StatefulWidget {
  const PlacesContent({Key? key}) : super(key: key);

  @override
  _PlacesContentState createState() => _PlacesContentState();
}

class _PlacesContentState extends State<PlacesContent> {
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
        mapIcons.add(null); // "no icon" option
        isLoading = false;
      });
      if (controller == null) initController();
    } catch (e) {
      setState(() => isLoading = false);
    }
  }

  void initController() {
    controller ??= SingleDataGridController<PlaceModel>(
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
          renderer: DataGridHelper.idRenderer,
        ),
        TrinaColumn(
          title: "Hide".tr(),
          field: Tb.places.is_hidden,
          type: TrinaColumnType.text(),
          applyFormatterInEditing: true,
          enableEditingMode: false,
          width: 100,
          renderer: (ctx) =>
              DataGridHelper.checkBoxRenderer(ctx, Tb.places.is_hidden),
        ),
        TrinaColumn(
          title: "Title".tr(),
          field: Tb.places.title,
          type: TrinaColumnType.text(),
          width: 300,
        ),
        TrinaColumn(
          title: "Description".tr(),
          field: Tb.places.description,
          type: TrinaColumnType.text(),
          width: 150,
          renderer: (ctx) {
            return DataGridHelper.buildHtmlEditorButton(
              context: context,
              occasionId: RightsService.currentOccasionId,
              field: Tb.places.description,
              rendererContext: ctx,
              loadContent: () async =>
              ctx.row.cells[Tb.places.description]!.value,
            );
          },
        ),
        TrinaColumn(
          title: "Icon".tr(),
          field: Tb.places.icon,
          applyFormatterInEditing: true,
          formatter: (d) => svgIcons
              .firstWhereOrNull((i) => i.id == d)
              ?.link ??
              PlaceModel.WithouValue,
          type: TrinaColumnType.select(
            defaultValue: null,
            mapIcons,
            builder: (icon) =>
                DataGridHelper.iconToRow(context, icon, svgIcons),
          ),
          renderer: (ctx) =>
              DataGridHelper.mapIconRenderer(context, ctx, svgIcons),
        ),
        TrinaColumn(
          title: "Location on map".tr(),
          field: Tb.places.coordinates,
          type: TrinaColumnType.text(
            defaultValue: FeatureService.getDefaultLocation(),
          ),
          width: 150,
          applyFormatterInEditing: true,
          enableEditingMode: false,
          enableFilterMenuItem: false,
          enableContextMenu: false,
          enableSorting: false,
          renderer: (ctx) {
            return ElevatedButton(
              onPressed: () async {
                var pm = PlaceModel.fromPlutoJson(ctx.row.toJson());
                var value = await RouterService.navigatePageInfo(
                    context, MapRoute(place: pm));
                if (value != null) {
                  var cell = ctx.row.cells[Tb.places.coordinates]!;
                  ctx.stateManager
                      .changeCellValue(cell, value.toString(), force: true);
                  ctx.cell.value = value;
                }
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
    if (!isLoading && controller == null) initController();
  }

  @override
  Widget build(BuildContext context) {
    if (isLoading || controller == null) {
      return const Center(child: CircularProgressIndicator());
    }
    return SingleTableDataGrid<PlaceModel>(controller!);
  }
}
