// ScheduleContent.dart
import 'package:cached_network_image/cached_network_image.dart';
import 'package:collection/collection.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/features/feature_service.dart';
import 'package:fstapp/components/features/features_strings.dart';
import 'package:fstapp/components/features/schedule_feature.dart';
import 'package:fstapp/components/single_data_grid/data_grid_helper.dart';
import 'package:fstapp/components/single_data_grid/single_data_grid_controller.dart';
import 'package:fstapp/components/single_data_grid/single_table_data_grid.dart';
import 'package:fstapp/data_models/event_model.dart';
import 'package:fstapp/data_models/occasion_model.dart';
import 'package:fstapp/data_models/place_model.dart';
import 'package:fstapp/data_models/tb.dart';
import 'package:fstapp/data_services/db_events.dart';
import 'package:fstapp/data_services/db_images.dart';
import 'package:fstapp/data_services/db_places.dart';
import 'package:fstapp/data_services/db_users.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/services/image_compression_helper.dart';
import 'package:fstapp/services/toast_helper.dart';
import 'package:fstapp/theme_config.dart';
import 'package:fstapp/widgets/image_area.dart';
import 'package:trina_grid/trina_grid.dart';

class ScheduleContent extends StatefulWidget {
  const ScheduleContent({super.key});

  @override
  _ScheduleContentState createState() => _ScheduleContentState();
}

class _ScheduleContentState extends State<ScheduleContent> {
  OccasionModel? occasionModel;
  List<String> places = [];

  // New state variables for event types
  ScheduleFeature? _scheduleFeature;
  List<EventType> _definedEventTypes = [];
  final List<String> _eventTypeSelectOptions = [];
  static const String _noTypeSelectValue =
      ""; // Represents "No Type", saved as empty string

  bool _isLoading = true; // Unified loading state

  SingleDataGridController<EventModel>? controller;

  @override
  void initState() {
    super.initState();
    _loadInitialData();
  }

  Future<void> _loadInitialData() async {
    if (!mounted) return;
    setState(() => _isLoading = true);
    try {
      occasionModel =
          await DbUsers.getOccasion(RightsService.currentOccasionId()!);

      var placesRaws = await DbPlaces.getMapPlaces();
      var placesStrings =
          placesRaws.map((p) => p.toPlutoSelectString()).toList();
      placesStrings.add(PlaceModel.WithouValue);
      // Ensure places list is updated on the state
      if (mounted) {
        setState(() {
          places.clear();
          places.addAll(placesStrings);
        });
      }

      _scheduleFeature =
          FeatureService.getFeatureDetails(ScheduleFeature.metaSchedule)
              as ScheduleFeature?;
      _definedEventTypes = _scheduleFeature?.eventTypes ?? [];

      _eventTypeSelectOptions.clear();
      _eventTypeSelectOptions.add(_noTypeSelectValue); // Value for "No Type"
      for (var et in _definedEventTypes) {
        _eventTypeSelectOptions.add(et.code);
      }
    } catch (e) {
      debugPrint("Error loading initial data for ScheduleContent: $e");
    } finally {
      if (mounted) {
        setState(() => _isLoading = false);
        if (!_isLoading) {
          initController();
        }
      }
    }
  }

  void initController() {
    if (controller != null || !mounted) return;

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
          width: 60,
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
          type: TrinaColumnType.number(negative: false, defaultValue: 0),
          width: 80,
        ),
        TrinaColumn(
          title: "Cancelled".tr(),
          field: Tb.events.dataIsCancelled,
          type: TrinaColumnType.text(),
          applyFormatterInEditing: true,
          enableEditingMode: false,
          width: 85,
          renderer: (rendererContext) => DataGridHelper.checkBoxRenderer(
              rendererContext, Tb.events.dataIsCancelled),
        ),
        if ((FeatureService.getFeatureDetails(ScheduleFeature.metaSchedule)
                    as ScheduleFeature?)
                ?.scheduleType ==
            ScheduleFeature.scheduleTypeAdvanced)
          TrinaColumn(
            title: "Intro Image".tr(),
            field: Tb.events.dataHeaderImage,
            type: TrinaColumnType.text(defaultValue: null),
            width: 140,
            applyFormatterInEditing: true,
            renderer: (ctx) {
              final String? imageUrl = ctx.cell.value as String?;

              return GestureDetector(
                onTap: () {
                  showDialog(
                    context: context,
                    builder: (_) => AlertDialog(
                      insetPadding: const EdgeInsets.symmetric(
                        horizontal: 40.0,
                        vertical: 24.0,
                      ),
                      title: Text("Intro Image".tr()),
                      content: SizedBox(
                        width: 200.0,
                        height: 250.0,
                        child: ImageArea(
                          imageUrl: imageUrl,
                          onFileSelected: (file) async {
                            final bytes = await file.readAsBytes();
                            final compressed =
                                await ImageCompressionHelper.compress(
                                    bytes, 200);
                            final publicUrl = await DbImages.uploadImage(
                              compressed,
                              RightsService.currentOccasionId(),
                              null,
                            );
                            ctx.stateManager.changeCellValue(
                                ctx.cell, publicUrl,
                                force: true);
                            ToastHelper.Show(
                                context, "Image uploaded successfully".tr());
                            return publicUrl;
                          },
                          onRemove: () async {
                            if (imageUrl != null && imageUrl.isNotEmpty) {
                              await DbImages.removeImage(imageUrl);
                              ctx.stateManager
                                  .changeCellValue(ctx.cell, "", force: true);
                              ToastHelper.Show(context, "Image removed".tr());
                            }
                          },
                        ),
                      ),
                      actions: [
                        TextButton(
                          onPressed: () => Navigator.of(context).pop(),
                          child: Text("Close".tr()),
                        ),
                      ],
                    ),
                  );
                },
                behavior: HitTestBehavior.opaque,
                child: Container(
                  child: imageUrl != null && imageUrl.isNotEmpty
                      ? Tooltip(
                          showDuration: const Duration(seconds: 0),
                          preferBelow: false,
                          padding: EdgeInsets.zero,
                          verticalOffset: 52,
                          decoration: BoxDecoration(
                            color: Colors.transparent,
                          ),
                          richMessage: WidgetSpan(
                            alignment: PlaceholderAlignment.middle,
                            child: Container(
                              padding: const EdgeInsets.all(4),
                              decoration: BoxDecoration(
                                border: Border.all(color: Colors.grey.shade400),
                                color: ThemeConfig.whiteColor(context),
                              ),
                              child: CachedNetworkImage(
                                  imageUrl: imageUrl,
                                  width: 120,
                                  fit: BoxFit.contain),
                            ),
                          ),
                          child: CachedNetworkImage(
                            imageUrl: imageUrl,
                            fit: BoxFit.fitWidth,
                            placeholder: (context, url) => SizedBox(
                                width: 50,
                                height: 50,
                                child: Center(
                                    child: CircularProgressIndicator(
                                        strokeWidth: 2.0))),
                            errorWidget: (context, url, error) =>
                                Icon(Icons.broken_image, size: 24),
                          ),
                        )
                      : Icon(Icons.image,
                          size: 24, color: Colors.grey.shade600),
                ),
              );
            },
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
          type: TrinaColumnType.select(places, itemToString: DataGridHelper.getValueFromFormatted),
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
              occasionId: RightsService.currentOccasionId(),
              field: Tb.events.description,
              rendererContext: rendererContext,
              title: rendererContext.row.cells[Tb.events.title]!.value,
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
          title: "Type".tr(),
          field: Tb.events.type,
          // Field in EventModel storing the type code
          type: TrinaColumnType.select(_eventTypeSelectOptions),
          // Dropdown with loaded type codes
          width: 150,
          // Adjust width as needed
          textAlign: TrinaColumnTextAlign.center,
          // Center the chip in the cell
          renderer: (rendererContext) {
            final String? typeCode = rendererContext.cell.value as String?;

            if (typeCode == null || typeCode == _noTypeSelectValue) {
              return Center(
                  child: Text(
                FeaturesStrings.noType,
                style:
                    TextStyle(fontSize: 11, color: Theme.of(context).hintColor),
                overflow: TextOverflow.ellipsis,
              ));
            }

            final eventType = _definedEventTypes
                .firstWhereOrNull((et) => et.code == typeCode);

            if (eventType != null) {
              Color backgroundColor = eventType.getColor();
              // Determine contrasting text color for readability
              Color textColor =
                  ThemeConfig.eventTypeToColorNegative(context, eventType.code);
              String displayTitle =
                  eventType.title;

              return Padding(
                // Add padding around the chip to prevent touching cell borders
                padding:
                    const EdgeInsets.symmetric(vertical: 2.0, horizontal: 2.0),
                child: Chip(
                  label: Text(
                    displayTitle,
                    style: TextStyle(color: textColor, fontSize: 11),
                    overflow: TextOverflow.ellipsis,
                  ),
                  backgroundColor: backgroundColor,
                  padding:
                      const EdgeInsets.symmetric(horizontal: 8.0, vertical: 0),
                  materialTapTargetSize: MaterialTapTargetSize.shrinkWrap,
                  visualDensity: VisualDensity.compact,
                  // Makes chip smaller
                  side: BorderSide.none, // Remove chip border if desired
                ),
              );
            } else {
              // Fallback: Type code exists but doesn't match any defined event type
              return Center(
                  child: Text(
                typeCode,
                style: TextStyle(fontSize: 11),
                overflow: TextOverflow.ellipsis,
              ));
            }
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
      ],
    );
    setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    if (_isLoading) {
      return const Center(child: CircularProgressIndicator());
    }
    if (controller == null) {
      // This can happen if initController is called before _loadInitialData completes or if an error occurs
      return Center(child: Text("Initializing...".tr()));
    }
    return SingleTableDataGrid<EventModel>(controller!);
  }
}
