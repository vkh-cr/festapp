import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/AppRouter.gr.dart';
import 'package:fstapp/RouterService.dart';
import 'package:fstapp/components/dataGrid/DataGridHelper.dart';
import 'package:fstapp/dataModels/EventModel.dart';
import 'package:fstapp/components/dataGrid/SingleTableDataGrid.dart';
import 'package:fstapp/dataModels/OccasionModel.dart';
import 'package:fstapp/dataModels/PlaceModel.dart';
import 'package:fstapp/dataModels/Tb.dart';
import 'package:fstapp/dataServices/DbEvents.dart';
import 'package:fstapp/dataServices/DbPlaces.dart';
import 'package:fstapp/dataServices/DbUsers.dart';
import 'package:fstapp/dataServices/RightsService.dart';
import 'package:fstapp/pages/HtmlEditorPage.dart';
import 'package:pluto_grid_plus/pluto_grid_plus.dart';

class EventsTab extends StatefulWidget {
  const EventsTab({Key? key}) : super(key: key);

  @override
  _EventsTabState createState() => _EventsTabState();
}

class _EventsTabState extends State<EventsTab> {
  OccasionModel? occasionModel; // Occasions are now loaded directly within EventsTab
  List<String> places = [];

  @override
  void initState() {
    super.initState();
    loadOccasion(); // Load occasion details
    loadPlaces();   // Load places for the dropdown list
  }

  Future<void> loadOccasion() async {
    // Fetch the occasion based on the current occasion ID
    occasionModel = await DbUsers.getOccasion(RightsService.currentOccasion!);
    setState(() {}); // Update the UI once occasion data is loaded
  }

  Future<void> loadPlaces() async {
    var placesRaws = await DbPlaces.getMapPlaces();
    var placesStrings = placesRaws.map((p) => p.toPlutoSelectString()).toList();
    placesStrings.add(PlaceModel.WithouValue);
    setState(() {
      places.clear();
      places.addAll(placesStrings);
    });
  }

  @override
  Widget build(BuildContext context) {
    return SingleTableDataGrid<EventModel>(
        context,
        DbEvents.getAllEventsForDatagrid,
        EventModel.fromPlutoJson,
        DataGridFirstColumn.deleteAndDuplicate,
        Tb.events.id,
        columns: [
          PlutoColumn(
            title: "Id".tr(),
            field: Tb.events.id,
            type: PlutoColumnType.number(defaultValue: -1),
            readOnly: true,
            width: 50,
            renderer: (rendererContext) => DataGridHelper.idRenderer(rendererContext),
          ),
          PlutoColumn(
            title: "Hide".tr(),
            field: Tb.events.is_hidden,
            type: PlutoColumnType.select([]),
            applyFormatterInEditing: true,
            enableEditingMode: false,
            width: 100,
            renderer: (rendererContext) => DataGridHelper.checkBoxRenderer(rendererContext, Tb.events.is_hidden),
          ),
          PlutoColumn(
            title: "Interest".tr(),
            field: Tb.event_users.table,
            readOnly: true,
            type: PlutoColumnType.number(negative: false, defaultValue: 0),
            width: 100,
          ),
          PlutoColumn(
              title: "Title".tr(),
              field: EventModel.titleColumn,
              type: PlutoColumnType.text(),
              width: 300
          ),
          PlutoColumn(
            title: "Start date".tr(),
            field: EventModel.startDateColumn,
            type: PlutoColumnType.date(defaultValue: occasionModel?.startTime), // Use loaded occasion data
            width: 140,
          ),
          PlutoColumn(
            title: "Start".tr(),
            field: EventModel.startTimeColumn,
            type: PlutoColumnType.time(),
            width: 100,
          ),
          PlutoColumn(
            title: "End date".tr(),
            field: EventModel.endDateColumn,
            type: PlutoColumnType.date(defaultValue: occasionModel?.startTime), // Use loaded occasion data
            width: 140,
          ),
          PlutoColumn(
            title: "End".tr(),
            field: EventModel.endTimeColumn,
            type: PlutoColumnType.time(),
            width: 100,
          ),
          PlutoColumn(
            title: "Max".tr(),
            field: EventModel.maxParticipantsColumn,
            type: PlutoColumnType.number(negative: false, defaultValue: null),
            width: 70,
          ),
          PlutoColumn(
            title: "M/F 50/50".tr(),
            field: EventModel.splitForMenWomenColumn,
            type: PlutoColumnType.text(),
            applyFormatterInEditing: true,
            enableEditingMode: false,
            width: 100,
            renderer: (rendererContext) => DataGridHelper.checkBoxRenderer(rendererContext, EventModel.splitForMenWomenColumn),
          ),
          PlutoColumn(
            title: "Group".tr(),
            field: EventModel.isGroupEventColumn,
            type: PlutoColumnType.text(),
            applyFormatterInEditing: true,
            enableEditingMode: false,
            width: 100,
            renderer: (rendererContext) => DataGridHelper.checkBoxRenderer(rendererContext, EventModel.isGroupEventColumn),
          ),
          PlutoColumn(
            title: "Place".tr(),
            field: EventModel.placeColumn,
            type: PlutoColumnType.select(places),
            applyFormatterInEditing: true,
            formatter: DataGridHelper.GetValueFromFormatted,
          ),
          PlutoColumn(
              width: 150,
              title: "Content".tr(),
              enableFilterMenuItem: false,
              enableContextMenu: false,
              enableSorting: false,
              field: Tb.events.description,
              type: PlutoColumnType.text(defaultValue: ""),
              renderer: (rendererContext) {
                return ElevatedButton(
                    onPressed: () async {
                      String? textToEdit;
                      String? oldText = rendererContext.row.cells[Tb.events.description]?.value;
                      if(oldText!=null) {
                        textToEdit = oldText;
                      }
                      Future<String?> Function() load = () async {
                        var eventId = rendererContext.row.cells[Tb.events.id]!.value;
                        if(eventId != null) {
                          var fullEvent = await DbEvents.getEvent(eventId);
                          return fullEvent.description;
                        }
                        return null;
                      };
                      Map<String, dynamic> param = {HtmlEditorPage.parContent: textToEdit, HtmlEditorPage.parLoad: load};
                      RouterService.navigatePageInfo(context, HtmlEditorRoute(content: param)).then((value) async {
                        if(value != null) {
                          var newText = value as String;
                          if(newText != textToEdit) {
                            rendererContext.row.cells[Tb.events.description]?.value = newText;
                            var cell = rendererContext.row.cells[Tb.events.description]!;
                            rendererContext.stateManager.changeCellValue(cell, cell.value, force: true);
                          }
                        }
                      });
                    },
                    child: Row(children: [const Icon(Icons.edit), Padding(padding: const EdgeInsets.all(6), child: const Text("Edit").tr())])
                );
              }),
          PlutoColumn(
              title: "Show inside event".tr(),
              field: EventModel.parentEventColumn,
              type: PlutoColumnType.text(),
              width: 300
          ),
          PlutoColumn(
              title: "Roles".tr(),
              field: Tb.event_roles.role,
              type: PlutoColumnType.text(),
              width: 100
          ),
          PlutoColumn(
              title: "Type".tr(),
              field: Tb.events.type,
              type: PlutoColumnType.text()),
        ]).DataGrid();
  }
}
