import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
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
import 'package:pluto_grid_plus/pluto_grid_plus.dart';

class ScheduleContent extends StatefulWidget {
  const ScheduleContent({Key? key}) : super(key: key);

  @override
  _ScheduleContentState createState() => _ScheduleContentState();
}

class _ScheduleContentState extends State<ScheduleContent> {
  OccasionModel? occasionModel;
  List<String> places = [];

  @override
  void initState() {
    super.initState();
    loadOccasion();
    loadPlaces();
  }

  Future<void> loadOccasion() async {
    // Fetch the occasion based on the current occasion ID
    occasionModel = await DbUsers.getOccasion(RightsService.currentOccasion!);
    setState(() {}); // Update UI after loading occasion data
  }

  Future<void> loadPlaces() async {
    var placesRaws = await DbPlaces.getMapPlaces();
    var placesStrings = placesRaws.map((p) => p.toPlutoSelectString()).toList();
    placesStrings.add(PlaceModel.WithouValue); // Add "Without Value" to options
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
          width: 60,
          renderer: (rendererContext) => DataGridHelper.checkBoxRenderer(rendererContext, Tb.events.is_hidden),
        ),
        PlutoColumn(
          title: "Interest".tr(),
          field: Tb.event_users.table,
          readOnly: true,
          type: PlutoColumnType.number(negative: false, defaultValue: 0),
          width: 80,
        ),
        PlutoColumn(
          title: "Title".tr(),
          field: EventModel.titleColumn,
          type: PlutoColumnType.text(),
          width: 250,
        ),
        PlutoColumn(
          title: "Start date".tr(),
          field: EventModel.startDateColumn,
          type: PlutoColumnType.date(defaultValue: occasionModel?.startTime), // Use occasion data
          width: 110,
        ),
        PlutoColumn(
          title: "Start".tr(),
          field: EventModel.startTimeColumn,
          type: PlutoColumnType.time(),
          width: 80,
        ),
        PlutoColumn(
          title: "End date".tr(),
          field: EventModel.endDateColumn,
          type: PlutoColumnType.date(defaultValue: occasionModel?.startTime), // Use occasion data
          width: 110,
        ),
        PlutoColumn(
          title: "End".tr(),
          field: EventModel.endTimeColumn,
          type: PlutoColumnType.time(),
          width: 80,
        ),
        PlutoColumn(
          title: "Max".tr(),
          field: EventModel.maxParticipantsColumn,
          type: PlutoColumnType.number(negative: false, defaultValue: null),
          width: 70,
        ),
        PlutoColumn(
          title: "Place".tr(),
          field: EventModel.placeColumn,
          type: PlutoColumnType.select(places), // Dynamic places
          applyFormatterInEditing: true,
          formatter: DataGridHelper.GetValueFromFormatted,
          width: 140,
        ),
        PlutoColumn(
          width: 150,
          title: "Content".tr(),
          field: Tb.events.description,
          type: PlutoColumnType.text(),
          renderer: (rendererContext) {
            return DataGridHelper.buildHtmlEditorButton(
              context: context,
              field: Tb.events.description,
              rendererContext: rendererContext,
              loadContent: () async {
                var eventId = rendererContext.row.cells[Tb.events.id]!.value;
                if (eventId != null) {
                  var fullEvent = await DbEvents.getEvent(eventId);
                  return fullEvent.description;
                }
                return null;
              },
            );
          },
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
          title: "Show inside event".tr(),
          field: EventModel.parentEventColumn,
          type: PlutoColumnType.text(),
          width: 300,
        ),
        PlutoColumn(
          title: "Roles".tr(),
          field: Tb.event_roles.role,
          type: PlutoColumnType.text(),
          width: 100,
        ),
        PlutoColumn(
          title: "Type".tr(),
          field: Tb.events.type,
          type: PlutoColumnType.text(),
        ),
      ],
    ).DataGrid();
  }
}
