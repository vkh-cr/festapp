import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/single_data_grid/data_grid_helper.dart';
import 'package:fstapp/components/single_data_grid/single_data_grid_controller.dart';
import 'package:fstapp/data_models/information_model.dart';
import 'package:fstapp/components/single_data_grid/single_table_data_grid.dart';
import 'package:fstapp/data_models/tb.dart';
import 'package:fstapp/data_services/db_information.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:trina_grid/trina_grid.dart';

class QuotesTab extends StatelessWidget {
  final int unitId;

  const QuotesTab({super.key, required this.unitId});

  @override
  Widget build(BuildContext context) {
    return SingleTableDataGrid<InformationModel>(
      SingleDataGridController<InformationModel>(
        context: context,
        loadData: () => DbInformation.getAllInformationForDataGridForUnit(
            unitId, InformationModel.quoteType),
        fromPlutoJson: (plutoData) =>
            InformationModel.fromPlutoJsonType(plutoData, InformationModel.quoteType),
        firstColumnType: DataGridFirstColumn.delete,
        idColumn: Tb.information.id,
        newObject: () => InformationModel.newRow(unitId),
        columns: [
          TrinaColumn(
            hide: true,
            title: "Id".tr(),
            field: Tb.information.id,
            type: TrinaColumnType.number(defaultValue: -1),
            readOnly: true,
            width: 50,
            renderer: (rendererContext) =>
                DataGridHelper.idRenderer(rendererContext),
          ),
          TrinaColumn(
            hide: true,
            title: "Unit".tr(),
            field: Tb.information.unit,
            type: TrinaColumnType.number(
                defaultValue: RightsService.currentUnit!.id!),
            readOnly: true,
            width: 50,
          ),
          TrinaColumn(
            title: "Date".tr(),
            enableAutoEditing: true,
            field: Tb.information.data_date,
            type: TrinaColumnType.date(),
            width: 300,
          ),
          TrinaColumn(
            width: 150,
            title: "Content".tr(),
            field: Tb.information.description,
            type: TrinaColumnType.text(),
            renderer: (rendererContext) {
              return DataGridHelper.buildHtmlEditorButton(
                context: context,
                field: Tb.information.description,
                rendererContext: rendererContext,
                loadContent: () async {
                  var id = rendererContext.row.cells[Tb.information.id]!.value;
                  if (id != null) {
                    var infoDescription =
                    await DbInformation.getInfosDescription([id]);
                    if (infoDescription.isNotEmpty) {
                      return infoDescription[0].description;
                    }
                  }
                  return null;
                },
              );
            },
          ),
        ],
      ),
    );
  }
}
