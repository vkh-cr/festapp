import 'package:cached_network_image/cached_network_image.dart';
import 'package:collection/collection.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/features/feature_constants.dart';
import 'package:fstapp/components/features/feature_service.dart';
import 'package:fstapp/components/features/features_strings.dart';
import 'package:fstapp/components/features/schedule_feature.dart';
import 'package:fstapp/components/single_data_grid/data_grid_helper.dart';
import 'package:fstapp/components/single_data_grid/single_data_grid_controller.dart';
import 'package:fstapp/components/single_data_grid/single_table_data_grid.dart';
import 'package:fstapp/components/schedule/event_model.dart';
import 'package:fstapp/components/schedule/schedule_strings.dart';
import 'package:fstapp/components/schedule/suspicious_event_detector.dart';
import 'package:fstapp/components/occasion/occasion_model.dart';
import 'package:fstapp/database_tables/tb.dart';
import 'package:fstapp/components/schedule/db_events.dart';
import 'package:fstapp/components/images/db_images.dart';
import 'package:fstapp/services/app_logger.dart';
import 'package:fstapp/components/map/db_places.dart';
import 'package:fstapp/components/users/db_users.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/components/images/image_compression_helper.dart';
import 'package:fstapp/services/toast_helper.dart';
import 'package:fstapp/theme_config.dart';
import 'package:fstapp/components/images/image_area.dart';
import 'package:fstapp/components/speakers/admin/event_speakers_cell.dart';
import 'package:fstapp/components/speakers/admin/speaker_editor_dialog.dart';
import 'package:fstapp/components/speakers/db_speakers.dart';
import 'package:fstapp/components/speakers/speaker_model.dart';
import 'package:fstapp/components/speakers/speaker_topic_model.dart';
import 'package:fstapp/components/speakers/speakers_strings.dart';
import 'package:fstapp/services/exception_handler.dart';
import 'package:trina_grid/trina_grid.dart';

import '../map/place_model.dart';
import 'package:fstapp/components/_shared/common_strings.dart';

class ScheduleContent extends StatefulWidget {
  final bool suspiciousOnly;

  const ScheduleContent({super.key, this.suspiciousOnly = false});

  @override
  ScheduleContentState createState() => ScheduleContentState();
}

class ScheduleContentState extends State<ScheduleContent> {
  OccasionModel? occasionModel;
  List<String> places = [];

  // New state variables for event types
  ScheduleFeature? _scheduleFeature;
  List<EventType> _definedEventTypes = [];
  final List<String> _eventTypeSelectOptions = [];
  static const String _noTypeSelectValue =
      ""; // Represents "No Type", saved as empty string

  bool _isLoading = true; // Unified loading state

  // Loaded once for the occasion; `_eventSpeakerIds` maps event id -> attached
  // speaker ids so each grid cell can render its current selection without a
  // per-row fetch.
  final List<SpeakerModel> _allSpeakers = [];
  List<SpeakerTopicModel> _allTopics = [];
  final Map<int, List<int>> _eventSpeakerIds = {};

  SingleDataGridController<EventModel>? controller;

  /// Refreshes a review list only when doing so cannot discard local edits.
  Future<void> reloadIfClean() async {
    final currentController = controller;
    if (currentController == null ||
        currentController.updatedRows.isNotEmpty ||
        currentController.deletedRows.isNotEmpty ||
        currentController.newRows.isNotEmpty) {
      return;
    }
    await currentController.reloadData();
  }

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
      placesStrings.add(PlaceModel.WithoutValue);
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

      await _loadSpeakers();
    } catch (e) {
      AppLogger.error("Error loading initial data for ScheduleContent: $e");
    } finally {
      if (mounted) {
        setState(() => _isLoading = false);
        if (!_isLoading) {
          initController();
        }
      }
    }
  }

  /// Loads all speakers + the topic catalog for the occasion and rebuilds the
  /// event -> speaker-ids map. `_allSpeakers` is mutated in place elsewhere so
  /// inline-created speakers stay visible to every open cell.
  Future<void> _loadSpeakers() async {
    final data = await ExceptionHandler.guard(
      context,
      futureFunction: () =>
          DbSpeakers.getSpeakersForEdit(RightsService.currentOccasionId()!),
    );
    if (data == null) return;
    _allSpeakers
      ..clear()
      ..addAll(data.speakers);
    _allTopics = data.topics;
    _eventSpeakerIds.clear();
    for (final s in data.speakers) {
      if (s.id == null) continue;
      for (final e in s.events) {
        (_eventSpeakerIds[e.id] ??= []).add(s.id!);
      }
    }
  }

  /// Opens the speaker editor to create a new speaker, appends it to the shared
  /// `_allSpeakers` list and returns its id so the picker can pre-select it.
  /// Mirrors event_edit_page._addSpeaker (RPC lives in SpeakerEditorDialog).
  Future<int?> _addSpeaker() async {
    final result = await showDialog<Object?>(
      context: context,
      builder: (_) =>
          SpeakerEditorDialog(speaker: SpeakerModel(), topics: _allTopics),
    );
    if (result is! SpeakerModel) return null;

    final data = await ExceptionHandler.guard(
      context,
      futureFunction: () =>
          DbSpeakers.getSpeakersForEdit(RightsService.currentOccasionId()!),
    );
    if (data != null) {
      _allSpeakers
        ..clear()
        ..addAll(data.speakers);
      _allTopics = data.topics;
    }
    return result.id;
  }

  /// Persists the speaker selection for one event and keeps the local map in
  /// sync so re-opening the cell shows the saved set.
  Future<void> _saveEventSpeakers(int eventId, List<int> speakerIds) async {
    await ExceptionHandler.guardVoid(
      context,
      futureFunction: () => DbSpeakers.setEventSpeakers(eventId, speakerIds),
    );
    _eventSpeakerIds[eventId] = List.of(speakerIds);
    // Keep the column's searchable value current so filtering reflects the
    // inline edit without a full grid reload.
    final row = controller?.stateManager.rows.firstWhereOrNull(
        (r) => r.cells[EventModel.idColumn]?.value == eventId);
    row?.cells[EventModel.speakersColumn]?.value =
        _speakerNamesFor(speakerIds) ?? '';
    if (mounted) {
      ToastHelper.Show(context, CommonStrings.saved);
    }
  }

  /// Joins the given speakers' names into a searchable string (or null when
  /// none), used to populate the "Přednášející" column's filterable cell value.
  String? _speakerNamesFor(Iterable<int> speakerIds) {
    final names = speakerIds
        .map((id) => _allSpeakers.firstWhereOrNull((s) => s.id == id)?.title)
        .whereType<String>()
        .where((n) => n.isNotEmpty)
        .toList();
    return names.isEmpty ? null : names.join(', ');
  }

  /// Loads the grid's events and stamps each with its attached speakers' names
  /// so the "Přednášející" column's text filter can match by speaker. Speaker
  /// data is already loaded into `_allSpeakers` / `_eventSpeakerIds` before the
  /// grid mounts.
  Future<List<EventModel>> _loadEventsForGrid() async {
    var events = await DbEvents.getAllEventsForDatagrid();
    if (widget.suspiciousOnly) {
      events = SuspiciousEventDetector.find(
        events,
        occasionStart: occasionModel?.startTime,
        occasionEnd: occasionModel?.endTime,
      );
    }
    for (final e in events) {
      final ids = e.id == null ? null : _eventSpeakerIds[e.id];
      e.speakerNamesSearch =
          (ids == null || ids.isEmpty) ? null : _speakerNamesFor(ids);
    }
    return events;
  }

  void initController() {
    if (controller != null || !mounted) return;

    controller = SingleDataGridController<EventModel>(
      context: context,
      loadData: _loadEventsForGrid,
      fromPlutoJson: EventModel.fromPlutoJson,
      firstColumnType: DataGridFirstColumn.deleteAndDuplicate,
      idColumn: Tb.events.id,
      columns: [
        TrinaColumn(
          title: CommonStrings.id,
          field: Tb.events.id,
          type: TrinaColumnType.number(defaultValue: -1),
          readOnly: true,
          width: 60,
          renderer: (rendererContext) =>
              DataGridHelper.idRenderer(rendererContext),
        ),
        TrinaColumn(
          title: CommonStrings.hide,
          field: Tb.events.is_hidden,
          type: TrinaColumnType.text(),
          applyFormatterInEditing: true,
          enableEditingMode: false,
          width: 60,
          renderer: (rendererContext) => DataGridHelper.checkBoxRenderer(
              rendererContext, Tb.events.is_hidden),
        ),
        TrinaColumn(
          title: ScheduleStrings.interest,
          field: Tb.event_users.table,
          readOnly: true,
          type: TrinaColumnType.number(negative: false, defaultValue: 0),
          width: 80,
        ),
        TrinaColumn(
          title: CommonStrings.cancelled,
          field: Tb.events.dataIsCancelled,
          type: TrinaColumnType.text(),
          applyFormatterInEditing: true,
          enableEditingMode: false,
          width: 85,
          renderer: (rendererContext) => DataGridHelper.checkBoxRenderer(
              rendererContext, Tb.events.dataIsCancelled),
        ),
        if (() {
          final t =
              (FeatureService.getFeatureDetails(ScheduleFeature.metaSchedule)
                      as ScheduleFeature?)
                  ?.scheduleType;
          return t == ScheduleFeature.scheduleTypeAdvanced ||
              t == ScheduleFeature.scheduleTypeLight;
        }())
          TrinaColumn(
            title: ScheduleStrings.introImage,
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
                      title: Text(ScheduleStrings.introImage),
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
                                context, ScheduleStrings.imageUploaded);
                            return publicUrl;
                          },
                          onRemove: () async {
                            if (imageUrl != null && imageUrl.isNotEmpty) {
                              await DbImages.removeImage(imageUrl);
                              ctx.stateManager
                                  .changeCellValue(ctx.cell, "", force: true);
                              ToastHelper.Show(
                                  context, ScheduleStrings.imageRemoved);
                            }
                          },
                        ),
                      ),
                      actions: [
                        TextButton(
                          onPressed: () => Navigator.of(context).pop(),
                          child: Text(CommonStrings.close),
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
          title: CommonStrings.title,
          field: EventModel.titleColumn,
          type: TrinaColumnType.text(),
          width: 250,
        ),
        TrinaColumn(
          title: SpeakersStrings.lecturers,
          field: EventModel.speakersColumn,
          type: TrinaColumnType.text(),
          readOnly: true,
          enableEditingMode: false,
          // The cell value carries the attached speakers' names (see
          // EventModel.speakerNamesSearch) so the default column filter can
          // search by speaker — like the place/title columns. Leaving
          // enableFilterMenuItem at its default keeps that filter field enabled.
          enableSorting: false,
          width: 180,
          renderer: (rendererContext) {
            final eventId =
                rendererContext.row.cells[EventModel.idColumn]?.value as int?;
            return EventSpeakersCell(
              // Trina reuses cell widgets across rows on scroll — key by event
              // id so the correct selection binds after a scroll/rebuild.
              key: ValueKey('event-speakers-$eventId'),
              eventId: eventId,
              allSpeakers: _allSpeakers,
              initialSelectedIds: eventId == null
                  ? const []
                  : (_eventSpeakerIds[eventId] ?? const []),
              onSave: _saveEventSpeakers,
              onAddSpeaker: _addSpeaker,
            );
          },
        ),
        TrinaColumn(
          title: CommonStrings.startDate,
          field: EventModel.startDateColumn,
          type: TrinaColumnType.date(defaultValue: occasionModel?.startTime),
          width: 110,
        ),
        TrinaColumn(
          title: CommonStrings.start,
          field: EventModel.startTimeColumn,
          type: TrinaColumnType.time(),
          width: 80,
        ),
        TrinaColumn(
          title: CommonStrings.endDate,
          field: EventModel.endDateColumn,
          type: TrinaColumnType.date(defaultValue: occasionModel?.startTime),
          width: 110,
        ),
        TrinaColumn(
          title: CommonStrings.end,
          field: EventModel.endTimeColumn,
          type: TrinaColumnType.time(),
          width: 80,
        ),
        TrinaColumn(
          title: CommonStrings.max,
          field: EventModel.maxParticipantsColumn,
          type: TrinaColumnType.number(negative: false, defaultValue: null),
          width: 70,
        ),
        TrinaColumn(
          title: CommonStrings.place,
          field: EventModel.placeColumn,
          type: TrinaColumnType.select(places,
              itemToString: DataGridHelper.getValueFromFormatted),
          applyFormatterInEditing: true,
          formatter: DataGridHelper.getValueFromFormatted,
          width: 140,
        ),
        TrinaColumn(
          width: 150,
          title: CommonStrings.content,
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
          title: CommonStrings.type,
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
              String displayTitle = eventType.title;

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
          title: ScheduleStrings.splitMenWomen,
          field: EventModel.splitForMenWomenColumn,
          type: TrinaColumnType.text(),
          applyFormatterInEditing: true,
          enableEditingMode: false,
          width: 100,
          renderer: (rendererContext) => DataGridHelper.checkBoxRenderer(
              rendererContext, EventModel.splitForMenWomenColumn),
        ),
        TrinaColumn(
          title: ScheduleStrings.group,
          field: EventModel.isGroupEventColumn,
          type: TrinaColumnType.text(),
          applyFormatterInEditing: true,
          enableEditingMode: false,
          width: 100,
          renderer: (rendererContext) => DataGridHelper.checkBoxRenderer(
              rendererContext, EventModel.isGroupEventColumn),
        ),
        if (FeatureService.isCounselingEnabled())
          TrinaColumn(
            title: SpeakersStrings.counselingEntryColumn,
            field: FeatureConstants.counselingEntry,
            type: TrinaColumnType.text(),
            applyFormatterInEditing: true,
            enableEditingMode: false,
            width: 100,
            renderer: (rendererContext) => DataGridHelper.checkBoxRenderer(
                rendererContext, FeatureConstants.counselingEntry),
          ),
        TrinaColumn(
          title: ScheduleStrings.showInsideEvent,
          field: EventModel.parentEventColumn,
          type: TrinaColumnType.text(),
          width: 300,
        ),
        TrinaColumn(
          title: ScheduleStrings.roles,
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
      return Center(child: Text(ScheduleStrings.initializing));
    }
    final grid = SingleTableDataGrid<EventModel>(controller!);
    if (!widget.suspiciousOnly) return grid;

    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        Container(
          color: Theme.of(context).colorScheme.errorContainer,
          padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
          child: Row(
            children: [
              Icon(
                Icons.warning_amber_rounded,
                color: Theme.of(context).colorScheme.onErrorContainer,
              ),
              const SizedBox(width: 10),
              Expanded(
                child: Text(
                  ScheduleStrings.suspiciousEventsDescription,
                  style: TextStyle(
                    color: Theme.of(context).colorScheme.onErrorContainer,
                  ),
                ),
              ),
            ],
          ),
        ),
        Expanded(child: grid),
      ],
    );
  }
}
