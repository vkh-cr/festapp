import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/single_data_grid/data_grid_helper.dart';
import 'package:fstapp/components/single_data_grid/single_data_grid_controller.dart';
import 'package:fstapp/dataModels/EventModel.dart';
import 'package:fstapp/components/single_data_grid/single_table_data_grid.dart';
import 'package:fstapp/dataModels/OccasionModel.dart';
import 'package:fstapp/dataModels/PlaceModel.dart';
import 'package:fstapp/dataModels/Tb.dart';
import 'package:fstapp/dataServices/DbEvents.dart';
import 'package:fstapp/dataServices/DbPlaces.dart';
import 'package:fstapp/dataServices/DbUsers.dart';
import 'package:fstapp/dataServices/RightsService.dart';
import 'package:trina_grid/trina_grid.dart';

class ScheduleContent extends StatefulWidget {
  const ScheduleContent({super.key});

  @override
  _ScheduleContentState createState() => _ScheduleContentState();
}

class _ScheduleContentState extends State<ScheduleContent> {
  OccasionModel? occasionModel;
  List<String> places = [];
  bool isLoadedOccasion = false;
  bool isLoadedPlaces = false;

  SingleDataGridController<EventModel>? controller;

  @override
  void initState() {
    super.initState();
    loadOccasion();
    loadPlaces();
  }

  Future<void> loadOccasion() async {
    // Fetch the occasion based on the current occasion ID
    occasionModel = await DbUsers.getOccasion(RightsService.currentOccasionId!);
    isLoadedOccasion = true;
    if (isLoadedOccasion && isLoadedPlaces) {
      initController();
    }
    setState(() {}); // Update UI after loading occasion data
  }

  Future<void> loadPlaces() async {
    var placesRaws = await DbPlaces.getMapPlaces();
    var placesStrings = placesRaws.map((p) => p.toPlutoSelectString()).toList();
    placesStrings.add(PlaceModel.WithouValue); // Add "Without Value" to options
    isLoadedPlaces = true;
    setState(() {
      places.clear();
      places.addAll(placesStrings);
    });
    if (isLoadedOccasion && isLoadedPlaces) {
      initController();
    }
  }

  void initController() {
    if (controller == null) {
      controller = SingleDataGridController<EventModel>(
        context: context,
        loadData: DbEvents.getAllEventsForDatagrid,
        fromPlutoJson: EventModel.fromPlutoJson,
        firstColumnType: DataGridFirstColumn.deleteAndDuplicate,
        idColumn: Tb.events.id,
        columns: [
          TrinaColumn(
            title: "Id".tr(),
            field: Tb.events.id,
            type: TrinaColumnType.number(defaultValue: -1),
            readOnly: true,
            width: 50,
            renderer: (rendererContext) =>
                DataGridHelper.idRenderer(rendererContext),
          ),
          TrinaColumn(
            title: "Hide".tr(),
            field: Tb.events.is_hidden,
            type: TrinaColumnType.text(),
            applyFormatterInEditing: true,
            enableEditingMode: false,
            width: 60,
            renderer: (rendererContext) => DataGridHelper.checkBoxRenderer(
                rendererContext, Tb.events.is_hidden),
          ),
          TrinaColumn(
            title: "Interest".tr(),
            field: Tb.event_users.table,
            readOnly: true,
            type:
            TrinaColumnType.number(negative: false, defaultValue: 0),
            width: 80,
          ),
          TrinaColumn(
            title: "Title".tr(),
            field: EventModel.titleColumn,
            type: TrinaColumnType.text(),
            width: 250,
          ),
          TrinaColumn(
            title: "Start date".tr(),
            field: EventModel.startDateColumn,
            type: TrinaColumnType.date(defaultValue: occasionModel?.startTime),
            width: 110,
          ),
          TrinaColumn(
            title: "Start".tr(),
            field: EventModel.startTimeColumn,
            type: TrinaColumnType.time(),
            width: 80,
          ),
          TrinaColumn(
            title: "End date".tr(),
            field: EventModel.endDateColumn,
            type: TrinaColumnType.date(defaultValue: occasionModel?.startTime),
            width: 110,
          ),
          TrinaColumn(
            title: "End".tr(),
            field: EventModel.endTimeColumn,
            type: TrinaColumnType.time(),
            width: 80,
          ),
          TrinaColumn(
            title: "Max".tr(),
            field: EventModel.maxParticipantsColumn,
            type: TrinaColumnType.number(negative: false, defaultValue: null),
            width: 70,
          ),
          TrinaColumn(
            title: "Place".tr(),
            field: EventModel.placeColumn,
            type: TrinaColumnType.select(places),
            applyFormatterInEditing: true,
            formatter: DataGridHelper.getValueFromFormatted,
            width: 140,
          ),
          TrinaColumn(
            width: 150,
            title: "Content".tr(),
            field: Tb.events.description,
            type: TrinaColumnType.text(),
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
          TrinaColumn(
            title: "M/F 50/50".tr(),
            field: EventModel.splitForMenWomenColumn,
            type: TrinaColumnType.text(),
            applyFormatterInEditing: true,
            enableEditingMode: false,
            width: 100,
            renderer: (rendererContext) => DataGridHelper.checkBoxRenderer(
                rendererContext, EventModel.splitForMenWomenColumn),
          ),
          TrinaColumn(
            title: "Group".tr(),
            field: EventModel.isGroupEventColumn,
            type: TrinaColumnType.text(),
            applyFormatterInEditing: true,
            enableEditingMode: false,
            width: 100,
            renderer: (rendererContext) => DataGridHelper.checkBoxRenderer(
                rendererContext, EventModel.isGroupEventColumn),
          ),
          TrinaColumn(
            title: "Show inside event".tr(),
            field: EventModel.parentEventColumn,
            type: TrinaColumnType.text(),
            width: 300,
          ),
          TrinaColumn(
            title: "Roles".tr(),
            field: Tb.event_roles.role,
            type: TrinaColumnType.text(),
            width: 100,
          ),
          TrinaColumn(
            title: "Type".tr(),
            field: Tb.events.type,
            type: TrinaColumnType.text(),
          ),
        ],
      );
      setState(() {});
    }
  }

  @override
  Widget build(BuildContext context) {
    if (!isLoadedOccasion || !isLoadedPlaces) {
      return Center(child: CircularProgressIndicator());
    }
    if (controller == null) {
      // Should rarely happen since initController is called once both are loaded.
      return Center(child: CircularProgressIndicator());
    }
    return SingleTableDataGrid<EventModel>(controller!);
  }
}
