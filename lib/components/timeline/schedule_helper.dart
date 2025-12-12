// schedule_helper.dart
import 'package:collection/collection.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/features/feature_service.dart';
import 'package:fstapp/components/features/schedule_feature.dart';
import 'package:fstapp/components/schedule/event_model.dart';
import 'package:fstapp/database_tables/tb.dart';
import 'package:fstapp/services/time_helper.dart';

import '../map/place_model.dart';

/// Determines available actions/state for an event.
enum TimeBlockType {
  saved,       // already saved to user's program
  canSave,     // can be saved to program
  noAction,    // no actions available
  signedIn,    // user is signed in
  isFull,      // event full
  canSignIn,   // can sign in
}

/// Represents an optional place or "track" for splitting.
class TimeBlockPlace {
  final int id;
  final String title;
  final int? order;

  TimeBlockPlace({required this.id, required this.title, required this.order});

  factory TimeBlockPlace.fromPlaceModel(PlaceModel place) {
    return TimeBlockPlace(
      id: place.id!,
      title: place.title ?? '---',
      order: place.order,
    );
  }
}

/// A group of time blocks, e.g. by place or time of day.
class TimeBlockGroup {
  final String title;
  final DateTime? dateTime;
  List<TimeBlockItem> events;

  TimeBlockGroup({required this.title, required this.events, this.dateTime});
}

/// A single time-block entry, now supporting nested child blocks.
class TimeBlockItem {
  DateTime startTime;
  DateTime endTime;
  TimeBlockType timeBlockType;
  dynamic data;
  String? description;
  final int id;
  TimeBlockPlace? timeBlockPlace;
  String? eventType;
  final String title;
  final int participants;
  final int maxParticipants;
  final String? imageUrl;
  final bool isCancelled;
  final bool isActivity;
  final bool isInMySchedule;
  /// Nested child time blocks
  List<TimeBlockItem>? children;


  TimeBlockItem({
    required this.id,
    required this.startTime,
    required this.endTime,
    required this.timeBlockType,
    this.data,
    this.description,
    this.timeBlockPlace,
    this.eventType,
    this.title = '',
    this.participants = 0,
    this.maxParticipants = 0,
    this.children,
    this.imageUrl,
    this.isCancelled = false,
    this.isActivity = false,
    this.isInMySchedule = false
  });

  /// Duration of the block.
  Duration duration() => startTime.isBefore(endTime)
      ? DateTimeRange(start: startTime, end: endTime).duration
      : Duration.zero;

  String durationString() {
    final d = duration();
    return '${d.inHours}h ${d.inMinutes.remainder(60)}m';
  }

  bool isSignedIn() => timeBlockType == TimeBlockType.signedIn;
  bool haveChildren() => children?.isNotEmpty ?? false;
  bool isSupportingSignIn() => !isCancelled && maxParticipants > 0;
  bool canSignIn() => isSupportingSignIn() && maxParticipants > participants;
  bool canSaveToMySchedule () => (!isSupportingSignIn()) && (!haveChildren());

  String durationTimeString() => "${DateFormat.Hm().format(startTime)} - ${DateFormat.Hm().format(endTime)}";

  @override
  String toString() {
    String titleStr = title;
    if (isCancelled) {
      titleStr += " (${"Cancelled".tr()})";
    }
    return (maxParticipants == 0 ? titleStr : "$titleStr (${participants}/$maxParticipants)");
  }

  /// Factory from EventModel for schedule timeline (new usage).
  factory TimeBlockItem.fromEventModelBasicTimeline(EventModel model) {
    return TimeBlockItem(
      id: model.id!,
      startTime: model.startTime,
      endTime: model.endTime,
      timeBlockType: TimeBlockHelper.getTimeBlockTypeFromModel(model),
      data: {
        "leftText": model.startTimeString(),
        "rightText": model.toString()
      },
      timeBlockPlace: model.place != null && model.place!.id != null
          ? TimeBlockPlace.fromPlaceModel(model.place!)
          : null,
      isCancelled: model.isCancelled, // Added
    );
  }

  factory TimeBlockItem.fromEventModel(EventModel model) {
    return TimeBlockItem(
      id: model.id!,
      startTime: model.startTime,
      endTime: model.endTime,
      timeBlockType: TimeBlockHelper.getTimeBlockTypeFromModel(model),
      data: model.toString(),
      description: model.description,
      eventType: model.type,
      timeBlockPlace: model.place != null && model.place!.id != null
          ? TimeBlockPlace.fromPlaceModel(model.place!)
          : null,
      title: model.title!,
      participants: model.currentParticipants ?? 0,
      maxParticipants: model.maxParticipants ?? 0,
      children: model.childEvents.map((c) => TimeBlockItem.fromEventModelAsChild(c))
          .toList(),
      imageUrl:  model.data?[Tb.events.dataHeaderImage],
      isCancelled: model.isCancelled,
      isInMySchedule: model.isInMySchedule ?? false, // Added
    );
  }

  /// Factory from EventModel as a child event.
  factory TimeBlockItem.fromEventModelAsChild(EventModel model) {
    return TimeBlockItem(
      id: model.id!,
      startTime: model.startTime,
      endTime: model.endTime,
      timeBlockType: TimeBlockHelper.getTimeBlockTypeFromModel(model),
      data: {
        "leftText": model.durationTimeString(),
        "rightText": model.toString()
      },
      timeBlockPlace: model.place != null && model.place!.id != null
          ? TimeBlockPlace.fromPlaceModel(model.place!)
          : null,
      isCancelled: model.isCancelled, // Added
    );
  }

  /// Factory for companion entries.
  factory TimeBlockItem.forCompanion(EventModel model) {
    return TimeBlockItem(
      id: model.id!,
      startTime: model.startTime,
      endTime: model.endTime,
      timeBlockType: TimeBlockType.signedIn,
      data: {
        "leftText": model.durationTimeString(),
        "rightText": model.toString()
      },
      isCancelled: model.isCancelled, // Added
    );
  }
}

/// Helper class for splitting/time-block typing.
class TimeBlockHelper {
  static TimeBlockType getTimeBlockTypeFromModel(EventModel model) {
    if (model.isSignedIn!) {
      return TimeBlockType.signedIn;
    } else if (model.isInMySchedule == true && !EventModel.isEventSupportingSignIn(model)) {
      return TimeBlockType.saved;
    } else if (model.isGroupEvent!) {
      if (model.isMyGroupEvent!) {
        return TimeBlockType.signedIn;
      }
      return TimeBlockType.noAction;
    } else if (EventModel.isEventSupportingSignIn(model) &&
        model.isFull()) {
      return TimeBlockType.isFull;
    } else if (EventModel.isEventSupportingSignIn(model)) {
      return TimeBlockType.canSignIn;
    } else if(model.canSaveEventToMyProgram() == true){
      return TimeBlockType.canSave;
    }
    return TimeBlockType.noAction;
  }

  static List<TimeBlockGroup> groupEventsByFeatureSettings(Iterable<TimeBlockItem> events) {
    final feature = FeatureService.getFeatureDetails(ScheduleFeature.metaSchedule);
    if (feature is ScheduleFeature) {
      if (feature.breakDefinition == ScheduleFeature.breakDefinitionPlace) {
        return TimeBlockHelper.splitTimeBlockByPlace(events);
      }
      // Default to time-based
      return TimeBlockHelper.splitTimeBlocksByTimeOfDay(
        events,
        afternoonStartTime: feature.afternoonBreakTime,
        eveningStartTime: feature.eveningBreakTime,
      );
    }
    // Fallback to original hardcoded behavior
    return TimeBlockHelper.splitTimeBlocksByTimeOfDay(events);
  }

  static List<TimeBlockGroup> splitTimeBlockByPlace(
      Iterable<TimeBlockItem> events) {
    Map<int?, List<TimeBlockItem>> groupedByPlaceId = {};
    for (var event in events) {
      groupedByPlaceId.putIfAbsent(event.timeBlockPlace?.id, () => []).add(event);
    }

    List<TimeBlockGroup> allGroups = groupedByPlaceId.entries.map((entry) {
      // For entries where key is null (no place), place will be null.
      // For other entries, place will be derived from the first event in that group.
      var place = entry.value.first.timeBlockPlace;
      return TimeBlockGroup(
        title: place?.title ?? "---",
        events: entry.value,
      );
    }).toList();

    // Separate the group with no specific place
    final noPlaceGroup = allGroups.firstWhereOrNull(
            (group) => group.events.isNotEmpty && group.events.first.timeBlockPlace == null
    );

    // Get groups that have a specific place and sort them
    List<TimeBlockGroup> placedGroups = allGroups.where(
            (group) => group.events.isNotEmpty && group.events.first.timeBlockPlace != null
    ).toList();

    placedGroups.sort((a, b) {
      // Since these are placedGroups, timeBlockPlace is guaranteed to be non-null.
      var oa = a.events.first.timeBlockPlace!.order ?? double.maxFinite.toInt();
      var ob = b.events.first.timeBlockPlace!.order ?? double.maxFinite.toInt();
      return oa.compareTo(ob);
    });

    // Add the no-place group at the end, if it exists
    if (noPlaceGroup != null) {
      placedGroups.add(noPlaceGroup);
    }

    for (var g in placedGroups) {
      g.events = g.events.sortedBy((element) => element.title)
        .sortedBy((element) => element.startTime);
    }

    return placedGroups;
  }

  static List<TimeBlockGroup> splitTimeBlocksByDay(
      Iterable<TimeBlockItem> events, BuildContext context) {
    Map<String, List<TimeBlockItem>> map = {};
    for (var e in events) {
      var day = DateFormat("EEEE d. MMMM ", context.locale.languageCode)
          .format(e.startTime);
      day = day[0].toUpperCase() + day.substring(1);
      map.putIfAbsent(day, () => []).add(e);
    }
    return map.entries.map((en) {
      return TimeBlockGroup(title: en.key, events: en.value);
    }).toList();
  }

  static List<TimeBlockGroup> splitTimeBlocksByDate(
      List<TimeBlockItem> events, BuildContext context, int splitHour) {
    List<TimeBlockGroup> toReturn = [];
    if (events.isEmpty) return toReturn;
    var fromD = events.first.startTime.subtract(const Duration(days: 1));
    var fromDate = DateTime(fromD.year, fromD.month, fromD.day);
    var tested = fromDate.add(Duration(hours: splitHour));
    while (!tested.isAfter(events.last.startTime)) {
      var next = tested.add(const Duration(days: 1));
      var focused = events.where((e) =>
      e.startTime.isAfter(tested) && e.startTime.isBefore(next) ||
          e.startTime.isAtSameMomentAs(next)).toList();
      if (focused.isNotEmpty) {
        toReturn.add(TimeBlockGroup(
          title: focused.first.startTime.weekdayToString(context),
          events: focused,
          dateTime: tested,
        ));
      }
      tested = next;
    }
    return toReturn;
  }

  static List<TimeBlockGroup> splitTimeBlocksByTimeOfDay(
      Iterable<TimeBlockItem> events, {
        TimeOfDay afternoonStartTime = const TimeOfDay(hour: 12, minute: 0),
        TimeOfDay eveningStartTime = const TimeOfDay(hour: 18, minute: 0),
      }) {
    int timeOfDayToMinutes(TimeOfDay time) {
      return time.hour * 60 + time.minute;
    }

    // Calculate the minute-based thresholds for each time period.
    final int afternoonStartMinutes = timeOfDayToMinutes(afternoonStartTime);
    final int eveningStartMinutes = timeOfDayToMinutes(eveningStartTime);

    // Helper function to get the total minutes from midnight for an event's start time.
    int eventTimeToMinutes(TimeBlockItem event) {
      return event.startTime.hour * 60 + event.startTime.minute;
    }

    // Filter events into their respective time-of-day lists based on minute comparison.
    final List<TimeBlockItem> morningEvents = events
        .where((e) => eventTimeToMinutes(e) < afternoonStartMinutes)
        .toList();

    final List<TimeBlockItem> afternoonEvents = events
        .where((e) =>
    eventTimeToMinutes(e) >= afternoonStartMinutes &&
        eventTimeToMinutes(e) < eveningStartMinutes)
        .toList();

    final List<TimeBlockItem> eveningEvents = events
        .where((e) => eventTimeToMinutes(e) >= eveningStartMinutes)
        .toList();

    // Determine if there are events in more than one time block.
    // If events exist in only one block (e.g., only in the morning), titles are hidden.
    final bool hasMultipleGroups = [morningEvents, afternoonEvents, eveningEvents]
        .where((group) => group.isNotEmpty)
        .length > 1;

    // Helper to create a TimeBlockGroup. A title is only applied if there are multiple groups.
    TimeBlockGroup createGroup(String title, List<TimeBlockItem> eventList) {
      return TimeBlockGroup(
        title: hasMultipleGroups ? title.tr() : '',
        events: eventList,
      );
    }

    // Construct the final list of groups, only including those that contain events.
    return [
      if (morningEvents.isNotEmpty) createGroup('', morningEvents),
      if (afternoonEvents.isNotEmpty) createGroup('Afternoon', afternoonEvents),
      if (eveningEvents.isNotEmpty) createGroup('Evening', eveningEvents),
    ];
  }

  static bool? getTimetableItemTypeAsCanSignIn(TimeBlockType type) {
    if (type == TimeBlockType.canSave) return true;
    if (type == TimeBlockType.saved) return false;
    return null;
  }
}