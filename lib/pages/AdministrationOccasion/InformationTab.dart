import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/AppRouter.gr.dart';
import 'package:fstapp/RouterService.dart';
import 'package:fstapp/components/dataGrid/DataGridHelper.dart';
import 'package:fstapp/dataModels/InformationModel.dart';
import 'package:fstapp/components/dataGrid/SingleTableDataGrid.dart';
import 'package:fstapp/dataModels/Tb.dart';
import 'package:fstapp/dataServices/DbInformation.dart';
import 'package:fstapp/pages/HtmlEditorPage.dart';
import 'package:pluto_grid_plus/pluto_grid_plus.dart';

class InformationTab extends StatelessWidget {
  const InformationTab({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SingleTableDataGrid<InformationModel>(
        context,
        DbInformation.getAllInformationForDataGrid,
        InformationModel.fromPlutoJson,
        DataGridFirstColumn.deleteAndDuplicate,
        Tb.information.id,
        columns: [
          PlutoColumn(
            hide: true,
            title: "Id".tr(),
            field: Tb.information.id,
            type: PlutoColumnType.number(defaultValue: -1),
            readOnly: true,
            width: 50,
            renderer: (rendererContext) => DataGridHelper.idRenderer(rendererContext),),
          PlutoColumn(
            title: "Hide".tr(),
            field: Tb.information.is_hidden,
            type: PlutoColumnType.select([]),
            applyFormatterInEditing: true,
            enableEditingMode: false,
            width: 100,
            renderer: (rendererContext) => DataGridHelper.checkBoxRenderer(rendererContext, Tb.information.is_hidden),
          ),
          PlutoColumn(
              title: "Title".tr(),
              field: Tb.information.title,
              type: PlutoColumnType.text()),
          PlutoColumn(
              width: 150,
              title: "Content".tr(),
              field: Tb.information.description,
              type: PlutoColumnType.text(),
              renderer: (rendererContext) {
                return ElevatedButton(
                    onPressed: () async{
                      String? textToEdit;
                      String? oldText = rendererContext.row.cells[Tb.information.description]?.value;
                      if(oldText!=null)
                      {
                        textToEdit = oldText;
                      }
                      Future<String?> Function() load = () async {
                        var id = rendererContext.row.cells[Tb.information.id]!.value;

                        if(id!=null)
                        {
                          var infoDescription = await DbInformation.getInfosDescription([id]);
                          if(infoDescription.isNotEmpty){
                            return infoDescription[0].description;
                          }
                        }
                        return null;
                      };
                      Map<String, dynamic> param = {HtmlEditorPage.parContent: textToEdit, HtmlEditorPage.parLoad: load};
                      RouterService.navigatePageInfo(context, HtmlEditorRoute(content: param)).then((value) async {
                        if(value != null)
                        {
                          var newText = value as String;
                          if(newText!=textToEdit)
                          {
                            rendererContext.row.cells[Tb.information.description]?.value = newText;
                            var cell = rendererContext.row.cells[Tb.information.description]!;
                            rendererContext.stateManager.changeCellValue(cell, cell.value, force: true);
                          }
                        }
                      });},
                    child: Row(children: [Icon(Icons.edit), Padding(padding: EdgeInsets.all(6), child: Text("Edit".tr())) ])
                );
              }),
          PlutoColumn(
            title: "Order".tr(),
            field: Tb.information.order,
            type: PlutoColumnType.number(defaultValue: null),
            applyFormatterInEditing: true,
            width: 100,
          ),
          PlutoColumn(
              title: "Type".tr(),
              field: Tb.information.type,
              type: PlutoColumnType.text()),
        ]).DataGrid();
  }
}
