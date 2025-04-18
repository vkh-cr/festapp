import 'package:collection/collection.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/single_data_grid/data_grid_helper.dart';
import 'package:fstapp/components/single_data_grid/single_data_grid_controller.dart';
import 'package:fstapp/components/single_data_grid/single_table_data_grid.dart';
import 'package:fstapp/data_models/icon_model.dart';
import 'package:fstapp/data_models/path_group_model.dart';
import 'package:fstapp/data_models/tb.dart';
import 'package:fstapp/data_services/db_places.dart';
import 'package:trina_grid/trina_grid.dart';

class PathGroupsContent extends StatefulWidget {
  const PathGroupsContent({Key? key}) : super(key: key);

  @override
  _PathGroupsContentState createState() => _PathGroupsContentState();
}

class _PathGroupsContentState extends State<PathGroupsContent> {
  SingleDataGridController<PathGroupsModel>? controller;
  bool isLoading = true;
  List<IconModel> svgIcons = [];
  List<int?> mapIcons = [];

  @override
  void initState() {
    super.initState();
    _loadIcons();
  }

  Future<void> _loadIcons() async {
    try {
      final icons = await DbPlaces.getAllIcons();
      setState(() {
        svgIcons = icons;
        mapIcons = svgIcons.map((icon) => icon.id).toList()
          ..add(null); // allow “no icon”
        isLoading = false;
      });
      _initController();
    } catch (e) {
      setState(() => isLoading = false);
    }
  }

  void _initController() {
    if (controller != null || isLoading) return;

    controller = SingleDataGridController<PathGroupsModel>(
      context: context,
      loadData: DbPlaces.getAllPathGroups,
      fromPlutoJson: PathGroupsModel.fromPlutoJson,
      firstColumnType: DataGridFirstColumn.delete,
      idColumn: Tb.path_groups.id,
      columns: [
        TrinaColumn(
          hide: true,
          title: "Id".tr(),
          field: Tb.path_groups.id,
          type: TrinaColumnType.number(defaultValue: -1),
          readOnly: true,
          width: 50,
          renderer: DataGridHelper.idRenderer,
        ),
        TrinaColumn(
          title: "Hide".tr(),
          field: Tb.path_groups.is_hidden,
          type: TrinaColumnType.text(),
          applyFormatterInEditing: true,
          enableEditingMode: false,
          width: 100,
          renderer: (ctx) =>
              DataGridHelper.checkBoxRenderer(ctx, Tb.path_groups.is_hidden),
        ),
        TrinaColumn(
          title: "Name".tr(),
          field: Tb.path_groups.title,
          type: TrinaColumnType.text(),
          width: 300,
        ),
        TrinaColumn(
          title: "Color".tr(),
          field: Tb.path_groups.color,
          type: TrinaColumnType.text(defaultValue: ""),
          width: 120,
          applyFormatterInEditing: true,
          renderer: (ctx) {
            final hex = (ctx.cell.value as String?) ?? "";
            Color col;
            try {
              col = Color(int.parse(hex.replaceFirst('#', '0x')));
            } catch (_) {
              col = Colors.transparent;
            }
            return Container(
              width: 24,
              height: 24,
              margin: const EdgeInsets.symmetric(vertical: 4),
              decoration: BoxDecoration(
                color: col,
                border: Border.all(color: Colors.black26),
              ),
            );
          },
        ),
        TrinaColumn(
          title: "Icon".tr(),
          field: Tb.path_groups.icon,
          applyFormatterInEditing: true,
          formatter: (d) =>
          svgIcons.firstWhereOrNull((i) => i.id == d)?.link ?? "",
          type: TrinaColumnType.select(
            mapIcons,
            builder: (icon) =>
                DataGridHelper.iconToRow(context, icon, svgIcons),
            defaultValue: null,
          ),
          renderer: (ctx) =>
              DataGridHelper.mapIconRenderer(context, ctx, svgIcons),
        ),
        TrinaColumn(
          title: "Places".tr(),
          field: Tb.places.table,
          type: TrinaColumnType.text(),
          width: 500,
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
    _initController();
  }

  @override
  Widget build(BuildContext context) {
    if (isLoading || controller == null) {
      return const Center(child: CircularProgressIndicator());
    }
    return SingleTableDataGrid<PathGroupsModel>(controller!);
  }
}
