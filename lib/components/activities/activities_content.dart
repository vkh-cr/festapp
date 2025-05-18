// activities_content.dart
import 'package:collection/collection.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:fstapp/data_models/activity_model.dart';
import 'package:fstapp/data_models/event_model.dart';
import 'package:fstapp/data_models/place_model.dart';
import 'package:fstapp/data_models/user_info_model.dart';
import 'package:fstapp/data_services/db_activities.dart';
import 'package:multi_split_view/multi_split_view.dart';
import 'package:fstapp/services/utilities_all.dart';
import 'constants.dart';
import 'timeline_painter.dart';
import 'timeline_row.dart';
import 'verticla_grid_lines_painter.dart';
import 'activities_component_strings.dart';


class TimeClampingService {
  static DateTimeRange clampDateTimeRange({
    required DateTime initialStartTime,
    required Duration itemDuration,
    required DateTime timelineStart,
    required DateTime timelineEnd,
    required Duration minAllowedDuration,
  }) {
    DateTime newStart = initialStartTime;
    if (newStart.isAfter(timelineEnd)) newStart = timelineEnd;
    if (newStart.isBefore(timelineStart)) newStart = timelineStart;
    DateTime newEnd = newStart.add(itemDuration);
    if (newEnd.isAfter(timelineEnd)) {
      newEnd = timelineEnd;
      if (itemDuration > Duration.zero) {
        DateTime potentialStart = newEnd.subtract(itemDuration);
        newStart = potentialStart.isBefore(timelineStart) ? timelineStart : potentialStart;
      } else {
        newStart = newEnd;
      }
    }
    newEnd = newStart.add(itemDuration);
    if (newEnd.isAfter(timelineEnd)) newEnd = timelineEnd;
    if (newStart.isAfter(newEnd)) newStart = newEnd;

    final Duration currentEffectiveDuration = newEnd.difference(newStart);
    if (minAllowedDuration > Duration.zero && currentEffectiveDuration < minAllowedDuration) {
      DateTime potentialEnd = newStart.add(minAllowedDuration);
      if (potentialEnd.isAfter(timelineEnd)) {
        newEnd = timelineEnd;
        DateTime potentialStart = newEnd.subtract(minAllowedDuration);
        newStart = potentialStart.isBefore(timelineStart) ? timelineStart : potentialStart;
      } else {
        newEnd = potentialEnd;
      }
    }
    if (newStart.isBefore(timelineStart)) newStart = timelineStart;
    if (newStart.isAfter(timelineEnd)) newStart = timelineEnd;
    if (newEnd.isBefore(timelineStart)) newEnd = timelineStart;
    if (newEnd.isAfter(timelineEnd)) newEnd = timelineEnd;
    if (newStart.isAfter(newEnd)) newEnd = newStart;
    return DateTimeRange(start: newStart, end: newEnd);
  }
}

class ActivitiesContent extends StatefulWidget {
  final int occasionId;
  const ActivitiesContent({Key? key, required this.occasionId}) : super(key: key);

  @override
  _ActivitiesContentState createState() => _ActivitiesContentState();
}

class _ActivitiesContentState extends State<ActivitiesContent>
    with SingleTickerProviderStateMixin {
  EditDataBundle? _bundle;
  DateTime? _timelineStart, _timelineEnd;

  double _scale = 0.2;
  double _panOffset = 0.0; // Stable pan offset
  final ValueNotifier<double> _currentPanOffsetNotifier = ValueNotifier<double>(0.0); // Live pan offset for dragging

  double _gesturePanOffsetStart = 0.0;
  double _gestureDragStartX = 0.0;

  double _scrollbarGestureDragStartX = 0.0;
  double _scrollbarGesturePanOffsetStartValue = 0.0;

  final double _basePps = 0.05; // Pixels per second at scale 1.0

  late List<UserInfoModel> _allUsers;
  late List<PlaceModel> _allPlaces;
  late List<EventModel> _allEvents;
  String _userFilter = '';
  String _placeFilter = '';
  String _eventFilter = '';
  final Map<ActivityModel, List<ActivityAssignmentModel>> _activityAssignments = {};

  final Set<ActivityModel> _selectedActivities = {};

  late MultiSplitViewController _mainController;
  late MultiSplitViewController _topController;

  UserInfoModel? _currentlyDraggedUser;
  ActivityModel? _hoveredActivityForPreview;
  DateTime? _previewStartTime;

  OverlayEntry? _detailOverlayEntry;
  ActivityAssignmentModel? _selectedAssignmentForDetail;
  LayerLink? _selectedAssignmentLayerLink;

  String _globalTimelineFilter = '';
  final TextEditingController _globalFilterController = TextEditingController();
  List<ActivityModel> _filteredActivities = [];

  bool _isTimelineFullscreen = false;

  // Store the viewport width for zoom calculations if needed outside LayoutBuilder
  double _currentViewportWidth = 0;

  // Constants for timeline date padding
  static const int kTimelinePaddingDaysBefore = 1;
  static const int kTimelinePaddingDaysAfter = 1;


  @override
  void initState() {
    super.initState();
    _mainController = MultiSplitViewController(areas: [Area(data: 'top', size: 160, min: 100), Area(data: 'bottom', flex: 1)]);
    _topController = MultiSplitViewController(areas: [Area(data: 'users', flex: 1), Area(data: 'places', flex: 1), Area(data: 'events', flex: 1)]);
    _loadData();
    _globalFilterController.addListener(() {
      if (_globalFilterController.text != _globalTimelineFilter) {
        setState(() {
          _globalTimelineFilter = _globalFilterController.text;
          _updateFilteredActivities();
        });
      }
    });
  }

  @override
  void dispose() {
    _hideAssignmentDetailOverlay();
    _mainController.dispose();
    _topController.dispose();
    _globalFilterController.dispose();
    _currentPanOffsetNotifier.dispose();
    super.dispose();
  }

  Future<void> _loadData() async {
    final data = await DbActivities.getForEdit(widget.occasionId);
    if (data != null) {
      data.activities!.sort((a, b) => (a.order ?? 0).compareTo(b.order ?? 0));
      setState(() {
        _bundle = data;
        _allPlaces = data.places!;
        _allEvents = data.events!;
        _allUsers = data.users!;
        _computeTimelineBounds(); // This sets _timelineStart and _timelineEnd

        _activityAssignments.clear();
        if (data.activityAssignments != null) {
          for (var assignment in data.activityAssignments!) {
            final activity = data.activities?.firstWhereOrNull((act) {
              bool isMatch = (act.id == assignment.activityId);
              if (assignment.activityId == -1 && act.id == null) isMatch = true;
              return isMatch;
            });
            if (activity != null) {
              _activityAssignments.putIfAbsent(activity, () => []).add(assignment);
            }
          }
        }
        // Reset pan to default before potentially shifting
        _panOffset = 0.0;
        _currentPanOffsetNotifier.value = 0.0;

        _updateFilteredActivities();

        // Schedule the initial scroll to occur after the current build cycle completes
        // and layout information (like _currentViewportWidth) is available.
        WidgetsBinding.instance.addPostFrameCallback((_) {
          if(mounted) { // Ensure the widget is still in the tree
            _performInitialTimelineScroll();
          }
        });
      });
    }
  }

  void _performInitialTimelineScroll() {
    // This check ensures that layout has occurred and _currentViewportWidth is set.
    // If _currentViewportWidth is 0, it means LayoutBuilder hasn't run or provided the width yet.
    // addPostFrameCallback usually runs after the build triggered by setState, so width should be available.
    if (_currentViewportWidth <= 0 && mounted) {
      // Optionally, retry after a short delay if width is consistently not available,
      // but typically, it should be available after the first frame post-setState.
      // For now, we proceed, and _shiftTimelineToDateTime has its own guard for _currentViewportWidth <= 0.
    }

    DateTime? earliestTimeToShow;
    List<DateTime> allPossibleStartTimes = [];

    if (_bundle?.events?.isNotEmpty ?? false) {
      allPossibleStartTimes.addAll(_bundle!.events!.map((e) => e.startTime.toLocal()));
    }
    _activityAssignments.values.expand((list) => list).forEach((assignment) {
      if (assignment.startTime != null && assignment.data?['isDragPreview'] != true) { // Exclude previews for initial scroll
        allPossibleStartTimes.add(assignment.startTime!.toLocal());
      }
    });

    if (allPossibleStartTimes.isNotEmpty) {
      allPossibleStartTimes.sort((a, b) => a.compareTo(b));
      earliestTimeToShow = allPossibleStartTimes.first;
    }

    if (earliestTimeToShow != null && _timelineStart != null && _timelineEnd != null) {
      _shiftTimelineToDateTime(earliestTimeToShow!);
    }
    // If no specific time to shift to, _panOffset (set to 0.0 in _loadData) remains the default.
  }


  void _computeTimelineBounds() {
    final allStarts = <DateTime>[], allEnds = <DateTime>[];
    if (_bundle!.events != null) {
      for (var e in _bundle!.events!) {
        allStarts.add(e.startTime.toLocal());
        allEnds.add(e.endTime.toLocal());
      }
    }
    if (_bundle!.activityAssignments != null) {
      for (var au in _bundle!.activityAssignments!) {
        if (au.startTime != null && au.endTime != null) {
          allStarts.add(au.startTime!.toLocal());
          allEnds.add(au.endTime!.toLocal());
        }
      }
    }

    if (allStarts.isNotEmpty && allEnds.isNotEmpty) {
      allStarts.sort();
      allEnds.sort();
      DateTime earliestActivityDate = allStarts.first;
      DateTime latestActivityDate = allEnds.last;

      // Set start to the beginning of the day of the earliest activity, minus padding
      _timelineStart = DateTime(earliestActivityDate.year, earliestActivityDate.month, earliestActivityDate.day)
          .subtract(const Duration(days: kTimelinePaddingDaysBefore));
      // Set end to the end of the day of the latest activity, plus padding
      _timelineEnd = DateTime(latestActivityDate.year, latestActivityDate.month, latestActivityDate.day, 23, 59, 59, 999)
          .add(const Duration(days: kTimelinePaddingDaysAfter));
    } else {
      // Default if no events or assignments to define bounds
      final now = DateTime.now();
      _timelineStart = now.subtract(const Duration(hours: 1));
      _timelineEnd = now.add(const Duration(hours: 1));
    }
  }

  void _shiftTimelineToDateTime(DateTime targetTime) {
    if (_timelineStart == null || _timelineEnd == null || _currentViewportWidth <= 0 || !mounted) return;

    final pps = _basePps * _scale;
    final timelineWidth = _timelineEnd!.difference(_timelineStart!).inSeconds.toDouble() * pps;
    final visibleTimelineAreaWidth = _currentViewportWidth - kTimelineLabelWidth;

    DateTime effectiveTargetTime = targetTime;
    // Ensure target time is not before the timeline actually starts for calculation purposes
    if (effectiveTargetTime.isBefore(_timelineStart!)) {
      effectiveTargetTime = _timelineStart!;
    }
    // If effectiveTargetTime is after _timelineEnd, the subsequent panOffset calculation and clamping
    // will correctly result in showing the very end of the timeline if possible.

    final Duration durationFromStart = effectiveTargetTime.difference(_timelineStart!);
    final double pixelOffsetFromTimelineStart = durationFromStart.inSeconds * pps;

    // Calculate the new panOffset to bring the targetTime to the beginning of the visible timeline area (just after the labels)
    double newPanOffset = -pixelOffsetFromTimelineStart;

    // Clamp the newPanOffset to ensure it's within valid bounds
    // The maximum left pan is -(timelineWidth - visibleTimelineAreaWidth)
    // The minimum pan (i.e., maximum right pan) is 0.0
    newPanOffset = newPanOffset.clamp(
        (visibleTimelineAreaWidth - timelineWidth).clamp(double.negativeInfinity, 0.0), // Max pan value (e.g., -500 if content is 500px wider)
        0.0 // Min pan value (timeline starts at edge)
    );

    // Only update state if there's a significant change to avoid unnecessary rebuilds
    // Compare with a small epsilon for floating point precision
    if ((_panOffset - newPanOffset).abs() > 0.01 || (_currentPanOffsetNotifier.value - newPanOffset).abs() > 0.01) {
      setState(() {
        _panOffset = newPanOffset;
        _currentPanOffsetNotifier.value = _panOffset; // Keep notifier in sync
      });
    }
  }


  void _onAddNewActivity() {
    _hideAssignmentDetailOverlay();
    final newOrder = _bundle?.activities?.length ?? 0;
    final newAct = ActivityModel(
      id: null, createdAt: DateTime.now(), updatedAt: DateTime.now(),
      title: '${ActivitiesComponentStrings.textNewActivityAddedDragDrop} ${newOrder + 1}',
      description: '', type: null,
      occasion: widget.occasionId, unit: null, isHidden: false,
      order: newOrder, data: {}, assignments: [],
    );
    setState(() {
      _bundle?.activities?.add(newAct);
      _updateFilteredActivities();
    });
  }

  void _zoomIn(double vpWidth, double totalSec) {
    _hideAssignmentDetailOverlay();
    if (_timelineStart == null) return;

    final double oldScale = _scale;
    final double newScale = (_scale * 1.25).clamp(0.05, 10.0);

    final double oldPps = _basePps * oldScale;
    final double newPps = _basePps * newScale;

    final double visibleTimelineAreaWidth = vpWidth - kTimelineLabelWidth;
    final double timelinePointAtViewportCenterPx = -_panOffset + (visibleTimelineAreaWidth / 2);
    final Duration durationOffsetFromStart = Duration(seconds: (timelinePointAtViewportCenterPx / oldPps).round());
    final double newTimelinePointAtViewportCenterPx = durationOffsetFromStart.inSeconds * newPps;
    double newPanOffset = (visibleTimelineAreaWidth / 2) - newTimelinePointAtViewportCenterPx;

    final double newTimelineWidth = totalSec * newPps;
    newPanOffset = newPanOffset.clamp(
        (vpWidth - (kTimelineLabelWidth + newTimelineWidth)).clamp(double.negativeInfinity, 0.0),
        0.0);

    setState(() {
      _scale = newScale;
      _panOffset = newPanOffset;
      _currentPanOffsetNotifier.value = _panOffset;
    });
  }

  void _zoomOut(double vpWidth, double totalSec) {
    _hideAssignmentDetailOverlay();
    if (_timelineStart == null) return;

    final double oldScale = _scale;
    final double newScale = (_scale / 1.25).clamp(0.05, 10.0);

    final double oldPps = _basePps * oldScale;
    final double newPps = _basePps * newScale;

    final double visibleTimelineAreaWidth = vpWidth - kTimelineLabelWidth;
    final double timelinePointAtViewportCenterPx = -_panOffset + (visibleTimelineAreaWidth / 2);
    final Duration durationOffsetFromStart = Duration(seconds: (timelinePointAtViewportCenterPx / oldPps).round());
    final double newTimelinePointAtViewportCenterPx = durationOffsetFromStart.inSeconds * newPps;
    double newPanOffset = (visibleTimelineAreaWidth / 2) - newTimelinePointAtViewportCenterPx;

    final double newTimelineWidth = totalSec * newPps;
    newPanOffset = newPanOffset.clamp(
        (vpWidth - (kTimelineLabelWidth + newTimelineWidth)).clamp(double.negativeInfinity, 0.0),
        0.0);

    setState(() {
      _scale = newScale;
      _panOffset = newPanOffset;
      _currentPanOffsetNotifier.value = _panOffset;
    });
  }

  void _deleteSelectedActivities() {
    _hideAssignmentDetailOverlay();
    setState(() {
      _bundle!.activities!.removeWhere((act) => _selectedActivities.contains(act));
      _selectedActivities.forEach(_activityAssignments.remove);
      _selectedActivities.clear();
      _updateFilteredActivities();
    });
  }

  Future<void> _showRenameDialog(ActivityModel a) async {
    _hideAssignmentDetailOverlay();
    final controller = TextEditingController(text: a.title);
    final isDark = isDarkMode(context);
    final result = await showDialog<String>(
      context: context,
      builder: (ctx) => AlertDialog(
        backgroundColor: isDark ? Colors.grey[800] : Colors.white,
        titleTextStyle: TextStyle(color: isDark ? Colors.white : Colors.black),
        contentTextStyle: TextStyle(color: isDark ? Colors.white70 : Colors.black87),
        title: Text(ActivitiesComponentStrings.dialogRenameActivity),
        content: TextField(
            controller: controller,
            style: TextStyle(color: isDark ? Colors.white : Colors.black),
            decoration: InputDecoration(
                labelText: ActivitiesComponentStrings.labelTitle,
                labelStyle: TextStyle(color: isDark ? Colors.white70 : Colors.black54)
            )
        ),
        actions: [
          TextButton(onPressed: () => Navigator.pop(ctx), child: Text(ActivitiesComponentStrings.buttonCancel, style: TextStyle(color: Theme.of(ctx).colorScheme.secondary))),
          ElevatedButton(onPressed: () => Navigator.pop(ctx, controller.text), child: Text(ActivitiesComponentStrings.buttonOK)),
        ],
      ),
    );
    if (result != null && result.trim().isNotEmpty) {
      setState(() {
        a.title = result.trim();
        _updateFilteredActivities();
      });
    }
  }

  DateTime _calculateSnappedTimeFromOffset(Offset globalOffset, double timelineRenderWidth) {
    if (_timelineStart == null || _timelineEnd == null || !mounted) return _timelineStart ?? DateTime.now();
    final RenderBox? timelineAreaRenderBox = context.findRenderObject() as RenderBox?;
    if (timelineAreaRenderBox == null || !timelineAreaRenderBox.hasSize) return _timelineStart!;

    final Offset localOffset = timelineAreaRenderBox.globalToLocal(globalOffset);
    final double dxOnTimelineCanvas = (localOffset.dx - kTimelineLabelWidth - _currentPanOffsetNotifier.value).clamp(0.0, timelineRenderWidth);
    final double pct = timelineRenderWidth > 0 ? dxOnTimelineCanvas / timelineRenderWidth : 0.0;
    final int totalTimelineSeconds = _timelineEnd!.difference(_timelineStart!).inSeconds;
    DateTime calculatedTime = _timelineStart!.add(Duration(seconds: (totalTimelineSeconds * pct).round()));
    final Duration snapStep = _scale < 0.5 ? kSnapStepCoarse : kSnapStepFine;
    if (snapStep.inSeconds > 0) {
      final int numSnapSteps = (calculatedTime.difference(_timelineStart!).inSeconds / snapStep.inSeconds).round();
      calculatedTime = _timelineStart!.add(Duration(seconds: numSnapSteps * snapStep.inSeconds));
    }
    return calculatedTime;
  }

  void _handlePlaceOrEventDropOnAssignment(ActivityAssignmentModel assignment, dynamic droppedItemData) {
    bool changed = false;
    if (droppedItemData is PlaceModel) {
      assignment.places ??= [];
      if (!assignment.places.any((p) => p.id == droppedItemData.id)) {
        assignment.places.add(droppedItemData);
        changed = true;
      }
    } else if (droppedItemData is EventModel) {
      assignment.events ??= [];
      if (!assignment.events.any((e) => e.id == droppedItemData.id)) {
        assignment.events.add(droppedItemData);
        changed = true;
      }
    }
    if (changed) {
      setState(() {});
      if (_detailOverlayEntry != null && _selectedAssignmentForDetail == assignment) {
        _detailOverlayEntry!.markNeedsBuild();
      }
    }
  }

  void _removePlaceFromAssignment(ActivityAssignmentModel assignment, PlaceModel place) {
    assignment.places.removeWhere((p) => p.id == place.id);
    setState(() {});
    if (_detailOverlayEntry != null && _selectedAssignmentForDetail == assignment) {
      _detailOverlayEntry!.markNeedsBuild();
    }
  }

  void _removeEventFromAssignment(ActivityAssignmentModel assignment, EventModel event) {
    assignment.events.removeWhere((e) => e.id == event.id);
    setState(() {});
    if (_detailOverlayEntry != null && _selectedAssignmentForDetail == assignment) {
      _detailOverlayEntry!.markNeedsBuild();
    }
  }

  void _hideAssignmentDetailOverlay() {
    if (_detailOverlayEntry != null) {
      _detailOverlayEntry!.remove();
      _detailOverlayEntry = null;
      _selectedAssignmentForDetail = null;
      _selectedAssignmentLayerLink = null;
    }
  }

  void _deleteAssignment(ActivityAssignmentModel assignmentToDelete) {
    ActivityModel? targetActivity;
    for (ActivityModel activity in _bundle?.activities ?? []) {
      bool isMatch = (activity.id == assignmentToDelete.activityId);
      if (assignmentToDelete.activityId == -1 && activity.id == null) {
        isMatch = true;
      }
      if (isMatch) {
        if (_activityAssignments.containsKey(activity)) {
          targetActivity = activity;
          break;
        }
      }
    }

    if (targetActivity != null) {
      setState(() {
        final assignmentsForActivity = _activityAssignments[targetActivity]!;
        assignmentsForActivity.removeWhere((assignment) {
          bool startTimeMatch = (assignment.startTime == null && assignmentToDelete.startTime == null) ||
              (assignment.startTime != null && assignmentToDelete.startTime != null && assignment.startTime!.isAtSameMomentAs(assignmentToDelete.startTime!));
          bool endTimeMatch = (assignment.endTime == null && assignmentToDelete.endTime == null) ||
              (assignment.endTime != null && assignmentToDelete.endTime != null && assignment.endTime!.isAtSameMomentAs(assignmentToDelete.endTime!));
          return assignment.userInfo == assignmentToDelete.userInfo &&
              startTimeMatch &&
              endTimeMatch &&
              assignment.activityId == assignmentToDelete.activityId &&
              assignment.data?['isDragPreview'] != true;
        });
        _updateFilteredActivities();
      });
    }
    _hideAssignmentDetailOverlay();
  }


  Widget _buildAssignmentDetailContent() {
    if (_selectedAssignmentForDetail == null) return const SizedBox.shrink();
    final assignment = _selectedAssignmentForDetail!;
    final isDark = isDarkMode(context);

    String formatTime(DateTime time) {
      return '${time.hour.toString().padLeft(2, '0')}:${time.minute.toString().padLeft(2, '0')}';
    }
    final textColor = isDark ? Colors.white : Colors.black87;
    final chipTextColor = isDark ? Colors.white : Colors.black87;
    final chipBackgroundColor = isDark ? Colors.grey[700] : Colors.blueGrey[200];
    final chipDeleteIconColor = isDark ? Colors.white70 : Colors.black54;


    return StatefulBuilder(
      builder: (BuildContext context, StateSetter setStateInPopup) {
        return Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Expanded(
                  child: Padding(
                    padding: const EdgeInsets.only(bottom: 4.0, right: 8.0),
                    child: Text(
                      assignment.user!.toFullNameString(),
                      style: TextStyle(fontSize: 14, fontWeight: FontWeight.bold, color: textColor),
                    ),
                  ),
                ),
                SizedBox(
                  height: 24,
                  child: TextButton(
                    onPressed: () {
                      _deleteAssignment(assignment);
                    },
                    style: TextButton.styleFrom(
                        foregroundColor: Colors.redAccent,
                        padding: EdgeInsets.zero,
                        minimumSize: Size(30, 20),
                        tapTargetSize: MaterialTapTargetSize.shrinkWrap
                    ),
                    child: Row(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        Icon(Icons.delete_outline, size: 14),
                        SizedBox(width: 2),
                        Text(ActivitiesComponentStrings.menuDelete, style: TextStyle(fontSize: 10)),
                      ],
                    ),
                  ),
                ),
              ],
            ),
            if (assignment.startTime != null && assignment.endTime != null)
              Padding(
                padding: const EdgeInsets.only(bottom: 8.0),
                child: Text(
                  '${formatTime(assignment.startTime!)} – ${formatTime(assignment.endTime!)}',
                  style: TextStyle(fontSize: 12, color: textColor.withOpacity(0.8)),
                ),
              ),
            if (assignment.places.isNotEmpty) ...[
              Padding(
                padding: EdgeInsets.symmetric(vertical: 4.0),
                child: Text(ActivitiesComponentStrings.labelPlaces, style: TextStyle(fontWeight: FontWeight.bold, fontSize: 12, color: textColor)),
              ),
              Wrap(
                spacing: 6, runSpacing: 4,
                children: assignment.places.map((place) => Chip(
                  avatar: Icon(Icons.location_pin, size: 14, color: chipTextColor),
                  label: Text(place.title ?? ActivitiesComponentStrings.textUnnamedPlace, style: TextStyle(color: chipTextColor, fontSize: 11)),
                  padding: EdgeInsets.symmetric(horizontal: 4, vertical: 2),
                  backgroundColor: chipBackgroundColor,
                  onDeleted: () {
                    _removePlaceFromAssignment(assignment, place);
                    setStateInPopup(() {});
                  },
                  deleteIconColor: chipDeleteIconColor,
                  deleteButtonTooltipMessage: ActivitiesComponentStrings.tooltipRemovePlace,
                  materialTapTargetSize: MaterialTapTargetSize.shrinkWrap,
                )).toList(),
              ),
            ],
            if (assignment.places.isNotEmpty && assignment.events.isNotEmpty)
              const SizedBox(height: 8),
            if (assignment.events.isNotEmpty) ...[
              Padding(
                padding: EdgeInsets.symmetric(vertical: 4.0),
                child: Text(ActivitiesComponentStrings.labelEvents, style: TextStyle(fontWeight: FontWeight.bold, fontSize: 12, color: textColor)),
              ),
              Wrap(
                spacing: 6, runSpacing: 4,
                children: assignment.events.map((event) => Chip(
                  avatar: Icon(Icons.event, size: 14, color: chipTextColor),
                  label: Text(event.title ?? ActivitiesComponentStrings.textUnnamedEvent, style: TextStyle(color: chipTextColor, fontSize: 11)),
                  padding: EdgeInsets.symmetric(horizontal: 4, vertical: 2),
                  backgroundColor: isDark ? Colors.grey[600] : Colors.orange[200],
                  onDeleted: () {
                    _removeEventFromAssignment(assignment, event);
                    setStateInPopup(() {});
                  },
                  deleteIconColor: chipDeleteIconColor,
                  deleteButtonTooltipMessage: ActivitiesComponentStrings.tooltipRemoveEvent,
                  materialTapTargetSize: MaterialTapTargetSize.shrinkWrap,
                )).toList(),
              ),
            ],
            if ((assignment.places.isEmpty) &&
                (assignment.events.isEmpty))
              Padding(
                padding: const EdgeInsets.symmetric(vertical: 8.0),
                child: Text(ActivitiesComponentStrings.textNoItemsAssigned, style: TextStyle(fontStyle: FontStyle.italic, color: textColor.withOpacity(0.6), fontSize: 11)),
              ),
          ],
        );
      },
    );
  }

  void _showAssignmentDetailOverlay(ActivityAssignmentModel assignment, LayerLink layerLink) {
    _hideAssignmentDetailOverlay();
    _selectedAssignmentForDetail = assignment;
    _selectedAssignmentLayerLink = layerLink;
    final isDark = isDarkMode(context);

    _detailOverlayEntry = OverlayEntry(
      builder: (overlayContext) {
        final MediaQueryData mediaQueryData = MediaQuery.of(overlayContext);
        final screenHeight = mediaQueryData.size.height;
        final popupWidth = 280.0;

        double estimatedContentHeight = 30.0;
        estimatedContentHeight += 20.0;
        final double chipHeight = 35.0;
        final double sectionHeaderHeight = 20.0;

        if (assignment.places.isNotEmpty) {
          estimatedContentHeight += sectionHeaderHeight;
          estimatedContentHeight += (assignment.places.length / 2).ceil() * chipHeight;
        }
        if (assignment.events.isNotEmpty) {
          estimatedContentHeight += sectionHeaderHeight;
          estimatedContentHeight += (assignment.events.length / 2).ceil() * chipHeight;
        }
        if ((assignment.places.isEmpty) &&
            (assignment.events.isEmpty)) {
          estimatedContentHeight += 30;
        }
        estimatedContentHeight += 24.0;

        final popupMaxHeight = screenHeight * 0.6;
        final actualPopupHeight = estimatedContentHeight.clamp(80.0, popupMaxHeight);

        Alignment followerAnchor = Alignment.topLeft;
        Alignment targetAnchor = Alignment.topRight;
        Offset offset = const Offset(10, 0);

        final RenderBox? overlay = Overlay.of(context).context.findRenderObject() as RenderBox?;
        final RenderBox? target = context.findRenderObject() as RenderBox?;

        if (overlay != null && target != null) {
          final targetGlobalCenter = target.localToGlobal(target.size.center(Offset.zero), ancestor: overlay);

          if (targetGlobalCenter.dx > overlay.size.width / 2) {
            targetAnchor = Alignment.topLeft;
            followerAnchor = Alignment.topRight;
            offset = const Offset(-10, 0);
          }

          if (targetGlobalCenter.dy + actualPopupHeight > overlay.size.height) {
            if (targetAnchor == Alignment.topRight) {
              targetAnchor = Alignment.bottomRight;
              followerAnchor = Alignment.bottomLeft;
            } else {
              targetAnchor = Alignment.bottomLeft;
              followerAnchor = Alignment.bottomRight;
            }
            offset = Offset(offset.dx, -10);
          }
        }


        return Stack(
          children: [
            Positioned.fill(
                child: GestureDetector(
                    onTap: _hideAssignmentDetailOverlay,
                    behavior: HitTestBehavior.opaque,
                    child: Container(color: Colors.transparent))),
            CompositedTransformFollower(
              link: _selectedAssignmentLayerLink!,
              showWhenUnlinked: false,
              offset: offset,
              followerAnchor: followerAnchor,
              targetAnchor: targetAnchor,
              child: Align(
                alignment: followerAnchor,
                child: Container(
                  width: popupWidth,
                  constraints: BoxConstraints(maxHeight: actualPopupHeight),
                  child: Material(
                    elevation: 2.0,
                    color: isDark ? Colors.grey[850] : Colors.white,
                    borderRadius: BorderRadius.circular(10),
                    child: SingleChildScrollView(
                      padding: const EdgeInsets.all(12.0),
                      child: _buildAssignmentDetailContent(),
                    ),
                  ),
                ),
              ),
            ),
          ],
        );
      },
    );
    Overlay.of(context).insert(_detailOverlayEntry!);
  }

  void _updateFilteredActivities() {
    if (_bundle == null || _bundle!.activities == null) {
      _filteredActivities = [];
      return;
    }
    if (_globalTimelineFilter.isEmpty) {
      _filteredActivities = List.from(_bundle!.activities!);
    } else {
      final normalizedFilter = Utilities.removeDiacritics(_globalTimelineFilter.toLowerCase());
      if (normalizedFilter.isEmpty) {
        _filteredActivities = List.from(_bundle!.activities!);
      } else {
        _filteredActivities = _bundle!.activities!.where((activity) {
          if (Utilities.removeDiacritics(activity.title?.toLowerCase() ?? "").contains(normalizedFilter)) {
            return true;
          }
          final assignmentsForActivity = _activityAssignments[activity] ?? [];
          for (var assignment in assignmentsForActivity) {
            if (assignment.data?['isDragPreview'] == true) continue;

            if (Utilities.removeDiacritics(assignment.user?.toFullNameString().toLowerCase() ?? "").contains(normalizedFilter)) {
              return true;
            }
            for (var place in assignment.places) {
              if (Utilities.removeDiacritics(place.title?.toLowerCase() ?? "").contains(normalizedFilter)) {
                return true;
              }
            }
            for (var event in assignment.events) {
              if (Utilities.removeDiacritics(event.title?.toLowerCase() ?? "").contains(normalizedFilter)) {
                return true;
              }
            }
          }
          return false;
        }).toList();
      }
    }
  }

  KeyEventResult _handleKeyEvent(RawKeyEvent event) {
    if (event is RawKeyDownEvent) {
      if (event.logicalKey == LogicalKeyboardKey.delete && _selectedActivities.isNotEmpty) {
        _deleteSelectedActivities(); return KeyEventResult.handled;
      } else if (event.logicalKey == LogicalKeyboardKey.escape) {
        if (_detailOverlayEntry != null) {
          _hideAssignmentDetailOverlay();
          return KeyEventResult.handled;
        } else if (_isTimelineFullscreen) {
          setState(() {
            _isTimelineFullscreen = false;
          });
          return KeyEventResult.handled;
        }
      }
    }
    return KeyEventResult.ignored;
  }

  @override
  Widget build(BuildContext context) {
    if (_bundle == null || _timelineStart == null || _timelineEnd == null) {
      return const Center(child: CircularProgressIndicator());
    }
    final isDark = isDarkMode(context);

    Widget mainContent;

    if (_isTimelineFullscreen) {
      mainContent = Column(
        children: [
          Expanded(child: _buildTimelineArea()),
        ],
      );
    } else {
      mainContent = MultiSplitView(
        controller: _mainController,
        axis: Axis.vertical,
        pushDividers: true,
        builder: (context, area) {
          if (area.data == 'top') {
            return MultiSplitView(
                controller: _topController,
                axis: Axis.horizontal,
                pushDividers: true,
                builder: (context, subArea) {
                  switch (subArea.data) {
                    case 'users': return _buildUsersPanel();
                    case 'places': return _buildPlacesPanel();
                    case 'events': return _buildEventsPanel();
                    default: return const SizedBox();
                  }
                });
          } else {
            return _buildTimelineArea();
          }
        },
      );
    }

    return Focus(
      autofocus: true,
      onKey: (_, RawKeyEvent event) => _handleKeyEvent(event),
      child: MultiSplitViewTheme(
        data: MultiSplitViewThemeData(
            dividerThickness: _isTimelineFullscreen ? 0 : 8,
            dividerPainter: _isTimelineFullscreen
                ? null
                : DividerPainters.background(
                color: isDark ? Colors.black54 : Colors.black12,
                highlightedColor: isDark ? Colors.black87 : Colors.black38)),
        child: mainContent,
      ),
    );
  }


  Widget _buildUsersPanel() {
    final filtered = _allUsers.where((u) => (u.toFullNameString()).toLowerCase().contains(_userFilter.toLowerCase())).toList();
    final isDark = isDarkMode(context);
    final hintColor = isDark ? Colors.white54 : Colors.black54;
    final textColor = isDark ? Colors.white : Colors.black;

    return Container(
      padding: const EdgeInsets.all(2),
      color: isDark ? Colors.grey[850] : Colors.grey[100],
      child: Column(children: [
        Padding(
          padding: const EdgeInsets.only(bottom: 2),
          child: TextField(
            style: TextStyle(fontSize: 12, color: textColor),
            decoration: InputDecoration(
              hintText: ActivitiesComponentStrings.hintSearchUsers,
              hintStyle: TextStyle(color: hintColor, fontSize: 12),
              isDense: true,
              alignLabelWithHint: true,
              prefixIcon: Padding(
                padding: const EdgeInsets.only(left: 8, right: 4),
                child: Icon(Icons.search, size: 14, color: hintColor),
              ),
              prefixIconConstraints: const BoxConstraints(minWidth: 24, minHeight: 24),
              contentPadding: const EdgeInsets.symmetric(vertical: 6),
              border: OutlineInputBorder(
                borderRadius: BorderRadius.circular(8),
                borderSide: BorderSide.none,
              ),
              filled: true,
              fillColor: Colors.transparent,
            ),
            onChanged: (v) => setState(() => _userFilter = v),
          ),
        ),
        Expanded(child: GridView.builder(
          gridDelegate: const SliverGridDelegateWithMaxCrossAxisExtent(
              maxCrossAxisExtent: 60,
              mainAxisSpacing: 2,
              crossAxisSpacing: 2,
              childAspectRatio: 1.0
          ),
          itemCount: filtered.length,
          itemBuilder: (context, index) {
            final u = filtered[index];
            final initials = (u.toFullNameString()).split(' ').map((w) => w.isNotEmpty ? w[0] : '').take(2).join();
            final color = darkUserColors[u.hashCode % darkUserColors.length];
            final avatarTextColor = Colors.white;
            return Draggable<UserInfoModel>(
              data: u,
              onDragStarted: () { _hideAssignmentDetailOverlay(); setState(() => _currentlyDraggedUser = u); },
              onDragEnd: (details) => setState(() { _currentlyDraggedUser = null; _hoveredActivityForPreview = null; _previewStartTime = null; }),
              feedback: Material(
                  color: Colors.transparent,
                  child: Column(mainAxisSize: MainAxisSize.min, children: [
                    Container(width: 36, height: 36, decoration: BoxDecoration(shape: BoxShape.circle, color: color.withOpacity(0.8), border: Border.all(color: color, width: 1.5)), child: Center(child: Text(initials, style: TextStyle(color: avatarTextColor, fontSize: 14, fontWeight: FontWeight.bold)))),
                    const SizedBox(height: 3),
                    Text(u.toFullNameString(), style: TextStyle(color: textColor, fontSize: 12, decoration: TextDecoration.none)),
                  ])
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.center,
                mainAxisAlignment: MainAxisAlignment.start,
                children: [
                  Container(
                    width: 28, height: 28,
                    margin: const EdgeInsets.only(top: 2),
                    decoration: BoxDecoration(
                      shape: BoxShape.circle,
                      color: color,
                      border: Border.all(color: color.withOpacity(0.5), width: 1.0),
                    ),
                    child: Center(
                      child: Text(
                        initials,
                        style: TextStyle(
                          color: avatarTextColor,
                          fontSize: 11,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.only(top: 2, left: 1.0, right: 1.0),
                    child: Text(
                      u.toFullNameString(),
                      style: TextStyle(
                        fontSize: 10,
                        color: textColor.withOpacity(0.8),
                        height: 1.1,
                      ),
                      overflow: TextOverflow.ellipsis,
                      softWrap: false,
                      maxLines: 2,
                      textAlign: TextAlign.center,
                    ),
                  ),
                ],
              ),
            );
          },
        )),
      ]),
    );
  }

  Widget _buildPlacesPanel() {
    final filtered = _allPlaces.where((p) => (p.title ?? "").toLowerCase().contains(_placeFilter.toLowerCase())).toList();
    final isDark = isDarkMode(context);
    final hintColor = isDark ? Colors.white54 : Colors.black54;
    final textColor = isDark ? Colors.white : Colors.black;
    final chipBgColor = isDark ? Colors.blueGrey[700] : Colors.blueGrey[100];
    final chipTextColor = isDark ? Colors.white.withOpacity(0.9) : Colors.black87;

    return Container(
      padding: const EdgeInsets.all(2),
      color: isDark ? Colors.grey[850] : Colors.grey[100],
      child: Column(children: [
        Padding(
          padding: const EdgeInsets.only(bottom: 2),
          child: TextField(
            style: TextStyle(fontSize: 12, color: textColor),
            decoration: InputDecoration(
              hintText: ActivitiesComponentStrings.hintSearchPlaces,
              hintStyle: TextStyle(color: hintColor, fontSize: 12),
              isDense: true,
              alignLabelWithHint: true,
              prefixIcon: Padding(
                padding: const EdgeInsets.only(left: 8, right: 4),
                child: Icon(Icons.search, size: 14, color: hintColor),
              ),
              prefixIconConstraints: const BoxConstraints(minWidth: 24, minHeight: 24),
              contentPadding: const EdgeInsets.symmetric(vertical: 6),
              border: OutlineInputBorder(
                borderRadius: BorderRadius.circular(8),
                borderSide: BorderSide.none,
              ),
              filled: true,
              fillColor: Colors.transparent,
            ),
            onChanged: (v) => setState(() => _placeFilter = v),
          ),
        ),
        Expanded(
          child: SingleChildScrollView(
            child: Wrap(
              spacing: 3,
              runSpacing: 3,
              children: filtered.map((p) {
                return Draggable<PlaceModel>(
                  data: p,
                  onDragStarted: _hideAssignmentDetailOverlay,
                  feedback: Material(
                    elevation: 3.0,
                    color: Colors.transparent,
                    child: Container(
                      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
                      decoration: BoxDecoration(
                        color: chipBgColor!.withOpacity(0.85),
                        borderRadius: BorderRadius.circular(14),
                      ),
                      child: Text(
                        p.title ?? ActivitiesComponentStrings.textUnnamedPlace,
                        style: TextStyle(fontSize: 12, color: chipTextColor),
                      ),
                    ),
                  ),
                  child: Chip(
                    backgroundColor: chipBgColor,
                    label: Text(p.title ?? ActivitiesComponentStrings.textUnnamedPlace, style: TextStyle(fontSize: 11, color: chipTextColor)),
                    padding: EdgeInsets.symmetric(horizontal: 5, vertical: 2),
                    materialTapTargetSize: MaterialTapTargetSize.shrinkWrap,
                  ),
                );
              }).toList(),
            ),
          ),
        ),
      ]),
    );
  }

  Widget _buildEventsPanel() {
    final filtered = _allEvents.where((e) => (e.title ?? "").toLowerCase().contains(_eventFilter.toLowerCase())).toList();
    final isDark = isDarkMode(context);
    final hintColor = isDark ? Colors.white54 : Colors.black54;
    final textColor = isDark ? Colors.white : Colors.black;
    final chipBgColor = isDark ? Colors.orange[800] : Colors.orange[100];
    final chipTextColor = isDark ? Colors.white.withOpacity(0.9) : Colors.black87;

    return Container(
      padding: const EdgeInsets.all(2),
      color: isDark ? Colors.grey[850] : Colors.grey[100],
      child: Column(children: [
        Padding(
          padding: const EdgeInsets.only(bottom: 2),
          child: TextField(
            style: TextStyle(fontSize: 12, color: textColor),
            decoration: InputDecoration(
              hintText: ActivitiesComponentStrings.hintSearchEvents,
              hintStyle: TextStyle(color: hintColor, fontSize: 12),
              isDense: true,
              alignLabelWithHint: true,
              prefixIcon: Padding(
                padding: const EdgeInsets.only(left: 8, right: 4),
                child: Icon(Icons.search, size: 14, color: hintColor),
              ),
              prefixIconConstraints: const BoxConstraints(minWidth: 24, minHeight: 24),
              contentPadding: const EdgeInsets.symmetric(vertical: 6),
              border: OutlineInputBorder(
                borderRadius: BorderRadius.circular(8),
                borderSide: BorderSide.none,
              ),
              filled: true,
              fillColor: Colors.transparent,
            ),
            onChanged: (v) => setState(() => _eventFilter = v),
          ),
        ),
        Expanded(
          child: SingleChildScrollView(
            child: Wrap(
              spacing: 3,
              runSpacing: 3,
              children: filtered.map((e) {
                return Draggable<EventModel>(
                  data: e,
                  onDragStarted: _hideAssignmentDetailOverlay,
                  feedback: Material(
                    elevation: 3.0,
                    color: Colors.transparent,
                    child: Container(
                      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
                      decoration: BoxDecoration(
                        color: chipBgColor!.withOpacity(0.85),
                        borderRadius: BorderRadius.circular(14),
                      ),
                      child: Text(
                        e.title ?? ActivitiesComponentStrings.textUnnamedEvent,
                        style: TextStyle(fontSize: 12, color: chipTextColor),
                      ),
                    ),
                  ),
                  child: Chip(
                    backgroundColor: chipBgColor,
                    label: Text(e.title ?? ActivitiesComponentStrings.textUnnamedEvent, style: TextStyle(fontSize: 11, color: chipTextColor)),
                    padding: EdgeInsets.symmetric(horizontal: 5, vertical: 2),
                    materialTapTargetSize: MaterialTapTargetSize.shrinkWrap,
                  ),
                );
              }).toList(),
            ),
          ),
        ),
      ]),
    );
  }


  Widget _buildTimelineArea() {
    final isDark = isDarkMode(context);
    return LayoutBuilder(builder: (ctx, constraints) {
      // Update viewport width whenever layout changes.
      // This is crucial for zoom and pan calculations, including the initial scroll.
      if (_currentViewportWidth != constraints.maxWidth && constraints.maxWidth > 0) {
        // Schedule a microtask to update state after the current build phase,
        // if the viewport width change might affect initial scroll logic that runs post-frame.
        // However, for general use in zoom/pan, direct update is fine.
        _currentViewportWidth = constraints.maxWidth;
        // If initial scroll hasn't happened and relied on this, it might need a nudge.
        // But _performInitialTimelineScroll is called via addPostFrameCallback from _loadData's setState,
        // so this LayoutBuilder should have run.
      }
      final vpWidth = _currentViewportWidth; // Use the stored/updated viewport width


      final totalSec = _timelineStart != null && _timelineEnd != null ? _timelineEnd!.difference(_timelineStart!).inSeconds.toDouble() : 0.0;
      final pps = _basePps * _scale;
      final timelineWidth = totalSec * pps;
      final bool isScrollable = timelineWidth > (vpWidth - kTimelineLabelWidth);

      return GestureDetector(
        onTap: _hideAssignmentDetailOverlay,
        behavior: HitTestBehavior.opaque,
        onHorizontalDragStart: (d) {
          _gestureDragStartX = d.globalPosition.dx;
          _gesturePanOffsetStart = _panOffset;
          _hideAssignmentDetailOverlay();
        },
        onHorizontalDragUpdate: (d) {
          final dx = d.globalPosition.dx - _gestureDragStartX;
          double newPanOffsetValue = (_gesturePanOffsetStart + dx).clamp(
              (vpWidth - (kTimelineLabelWidth + timelineWidth)).clamp(double.negativeInfinity, 0.0),
              0.0);
          _currentPanOffsetNotifier.value = newPanOffsetValue;
        },
        onHorizontalDragEnd: (d) {
          if (_panOffset != _currentPanOffsetNotifier.value) {
            setState(() {
              _panOffset = _currentPanOffsetNotifier.value;
            });
          }
        },
        child: Listener(
          onPointerSignal: (pointerSignal) {
            if (pointerSignal is PointerScrollEvent) {
              _hideAssignmentDetailOverlay();
              if (pointerSignal.scrollDelta.dy < 0) {
                _zoomIn(vpWidth, totalSec);
              } else if (pointerSignal.scrollDelta.dy > 0) {
                _zoomOut(vpWidth, totalSec);
              }
            }
          },
          child: Column(children: [
            Padding(
              padding: const EdgeInsets.only(left: 16.0, right: 16.0, top:8.0, bottom: 4.0),
              child: Row(
                children: [
                  if (!_isTimelineFullscreen)
                    IconButton(
                      icon: const Icon(Icons.add_circle_outline),
                      color: isDark ? Colors.white70 : Colors.black54,
                      iconSize: 20,
                      padding: EdgeInsets.zero,
                      constraints: BoxConstraints(minWidth: 36, minHeight: 36),
                      tooltip: ActivitiesComponentStrings.tooltipAddNewActivity,
                      onPressed: _onAddNewActivity,
                    ),
                  if (!_isTimelineFullscreen) const SizedBox(width: 10),
                  Expanded(
                    child: Text(ActivitiesComponentStrings.titleActivitiesTimeline, style: TextStyle(fontSize: 16, fontWeight: FontWeight.w500, color: isDark ? Colors.white : Colors.black87)),
                  ),
                  if (!_isTimelineFullscreen)
                    ElevatedButton.icon(
                      icon: Icon(Icons.save_outlined, size: 14),
                      label: Text(ActivitiesComponentStrings.buttonSave, style: TextStyle(fontSize: 11)),
                      style: ElevatedButton.styleFrom(
                          backgroundColor: Theme.of(context).primaryColor,
                          foregroundColor: isDarkMode(context) ? Colors.black : Colors.white,
                          padding: EdgeInsets.symmetric(horizontal: 10, vertical: 6),
                          tapTargetSize: MaterialTapTargetSize.shrinkWrap,
                          minimumSize: Size(60, 30)
                      ),
                      onPressed: () async {
                        _bundle!.activities ??= [];
                        for (var activityInBundle in _bundle!.activities!) {
                          List<ActivityAssignmentModel>? assignmentsForThisActivity = _activityAssignments[activityInBundle];
                          if (assignmentsForThisActivity != null) {
                            activityInBundle.assignments = assignmentsForThisActivity
                                .where((assign) => assign.data?['isDragPreview'] != true)
                                .toList();
                          } else {
                            activityInBundle.assignments = [];
                          }
                        }
                        try {
                          await DbActivities.saveActivitiesForEdit(context, widget.occasionId, _bundle!);
                          _loadData();
                        } catch (e) {
                          print("Error saving activities from UI: $e");
                        }
                      },
                    ),
                ],
              ),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 4),
              child: Row(children: [
                Expanded(
                  child: TextField(
                    controller: _globalFilterController,
                    style: TextStyle(fontSize: 12, color: isDark ? Colors.white : Colors.black),
                    decoration: InputDecoration(
                      hintText: ActivitiesComponentStrings.hintGlobalFilter,
                      hintStyle: TextStyle(fontSize: 12, color: isDark ? Colors.white54 : Colors.black54),
                      isDense: true,
                      contentPadding: const EdgeInsets.symmetric(vertical: 6.0, horizontal: 8.0),
                      prefixIcon: Icon(Icons.search, size: 14, color: isDark ? Colors.white54 : Colors.black54),
                      border: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(8),
                        borderSide: BorderSide(color: isDark ? Colors.grey.shade700 : Colors.grey.shade400, width: 0.5),
                      ),
                      enabledBorder: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(8),
                        borderSide: BorderSide(color: isDark ? Colors.grey.shade700 : Colors.grey.shade400, width: 0.5),
                      ),
                      focusedBorder: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(8),
                        borderSide: BorderSide(color: Theme.of(context).primaryColor, width: 1),
                      ),
                      suffixIcon: _globalTimelineFilter.isNotEmpty
                          ? IconButton(
                        icon: Icon(Icons.clear, size: 14, color: isDark ? Colors.white54 : Colors.black54),
                        padding: EdgeInsets.zero,
                        constraints: BoxConstraints(),
                        onPressed: () {
                          _globalFilterController.clear();
                        },
                      )
                          : null,
                    ),
                  ),
                ),
                const SizedBox(width: 10),
                IconButton(
                  icon: Icon(_isTimelineFullscreen ? Icons.fullscreen_exit : Icons.fullscreen),
                  iconSize: 20,
                  padding: EdgeInsets.zero,
                  constraints: BoxConstraints(minWidth: 36, minHeight: 36),
                  tooltip: _isTimelineFullscreen ? ActivitiesComponentStrings.tooltipExitFullscreen : ActivitiesComponentStrings.tooltipEnterFullscreen,
                  color: isDark ? Colors.white70 : Colors.black54,
                  onPressed: () {
                    setState(() {
                      _isTimelineFullscreen = !_isTimelineFullscreen;
                      if (!_isTimelineFullscreen && _mainController.areas.first.size != 160) {
                        _mainController.areas.first.size = 160;
                      }
                    });
                  },
                ),
                IconButton(icon: const Icon(Icons.zoom_in), iconSize: 20, padding: EdgeInsets.zero, constraints: BoxConstraints(minWidth: 36, minHeight: 36), onPressed: () => _zoomIn(vpWidth, totalSec), color: isDark ? Colors.white70 : Colors.black54),
                IconButton(icon: const Icon(Icons.zoom_out), iconSize: 20, padding: EdgeInsets.zero, constraints: BoxConstraints(minWidth: 36, minHeight: 36), onPressed: () => _zoomOut(vpWidth, totalSec), color: isDark ? Colors.white70 : Colors.black54),
              ]),
            ),
            ValueListenableBuilder<double>(
                valueListenable: _currentPanOffsetNotifier,
                builder: (context, currentPanOffsetValue, child) {
                  return SizedBox(
                    height: kTotalTimelineRulerHeightConstant,
                    child: Row(children: [
                      SizedBox(width: kTimelineLabelWidth),
                      Expanded(
                        child: ClipRect(
                          child: Transform.translate(
                            offset: Offset(currentPanOffsetValue, 0),
                            child: CustomPaint(
                              size: Size(timelineWidth, kTotalTimelineRulerHeightConstant),
                              painter: TimelinePainter(
                                start: _timelineStart!,
                                end: _timelineEnd!,
                                pps: pps,
                                isDarkMode: isDark,
                                weekdays: ActivitiesComponentStrings.getWeekdayAbbreviations(context.locale.languageCode),
                                monthAbbreviations: ActivitiesComponentStrings.getMonthAbbreviations(context.locale.languageCode),
                                dateHeaderHeight: kDateHeaderHeightConstant,
                                timeTickAreaHeight: kTimeTickAreaHeightConstant,
                              ),
                            ),
                          ),
                        ),
                      ),
                    ]),
                  );
                }
            ),
            Expanded(
              child: Container(
                color: isDark ? Colors.grey[900] : Colors.white,
                child: _filteredActivities.isEmpty && _globalTimelineFilter.isNotEmpty
                    ? Center(
                  child: Padding(
                    padding: const EdgeInsets.all(16.0),
                    child: Text(
                      ActivitiesComponentStrings.textNoFilterMatch,
                      style: TextStyle(color: isDark ? Colors.grey[400] : Colors.grey[600], fontSize: 14),
                      textAlign: TextAlign.center,
                    ),
                  ),
                )
                    : (_bundle!.activities?.isEmpty ?? true)
                    ? Center(
                  child: Padding(
                    padding: const EdgeInsets.all(16.0),
                    child: Text(
                      ActivitiesComponentStrings.textNoActivitiesAvailable +
                          (!_isTimelineFullscreen ? " ${ActivitiesComponentStrings.textClickPlusToAddOne}" : ""),
                      style: TextStyle(color: isDark ? Colors.grey[400] : Colors.grey[600], fontSize: 14),
                      textAlign: TextAlign.center,
                    ),
                  ),
                )
                    : ReorderableListView.builder(
                  buildDefaultDragHandles: false,
                  itemCount: _filteredActivities.length,
                  onReorderStart: (_) => _hideAssignmentDetailOverlay(),
                  onReorder: (oldI, newI) {
                    _hideAssignmentDetailOverlay();
                    setState(() {
                      final itemToMove = _filteredActivities[oldI];
                      final originalList = _bundle!.activities!;
                      int originalIndexOld = originalList.indexOf(itemToMove);

                      if (originalIndexOld == -1) return;

                      int targetOriginalIndexInAllActivities;
                      if (newI >= _filteredActivities.length) {
                        if (_filteredActivities.isNotEmpty) {
                          final lastFilteredItem = _filteredActivities.last;
                          targetOriginalIndexInAllActivities = originalList.indexOf(lastFilteredItem) + 1;
                        } else {
                          targetOriginalIndexInAllActivities = originalList.length;
                        }
                      } else {
                        final itemAtNewFilteredPosition = _filteredActivities[newI];
                        targetOriginalIndexInAllActivities = originalList.indexOf(itemAtNewFilteredPosition);
                      }

                      if (targetOriginalIndexInAllActivities == -1) {
                        targetOriginalIndexInAllActivities = (newI > oldI) ? originalList.length : 0;
                      }

                      final item = originalList.removeAt(originalIndexOld);
                      if (targetOriginalIndexInAllActivities > originalIndexOld) {
                        originalList.insert(targetOriginalIndexInAllActivities -1, item);
                      } else {
                        originalList.insert(targetOriginalIndexInAllActivities, item);
                      }

                      for (var i = 0; i < originalList.length; i++) originalList[i].order = i;
                      _updateFilteredActivities();
                    });
                  },
                  itemBuilder: (context, index) => _buildActivityWithAssignments(_filteredActivities[index], timelineWidth, vpWidth, index), // Pass index
                ),
              ),
            ),
            if (isScrollable)
              Container(
                height: 10,
                margin: EdgeInsets.only(left: kTimelineLabelWidth + 2, right: 2, top: 4, bottom: 2),
                child: LayoutBuilder(
                  builder: (context, scrollbarConstraints) {
                    final double trackWidth = scrollbarConstraints.maxWidth;
                    final double visibleContentWidth = vpWidth - kTimelineLabelWidth;
                    final double contentRatio = timelineWidth > 0 ? visibleContentWidth / timelineWidth : 1.0;
                    final double thumbWidth = (trackWidth * contentRatio).clamp(20.0, trackWidth);

                    final double maxScrollableTrackWidth = trackWidth - thumbWidth;
                    final double maxTimelineScrollOffset = timelineWidth - visibleContentWidth;

                    return ValueListenableBuilder<double>(
                      valueListenable: _currentPanOffsetNotifier,
                      builder: (context, currentPanOffsetValue, gestureDetectorChild){
                        final double currentTimelineScrollOffset = -currentPanOffsetValue;
                        final double thumbPosition = maxScrollableTrackWidth > 0 && maxTimelineScrollOffset > 0
                            ? (currentTimelineScrollOffset / maxTimelineScrollOffset) * maxScrollableTrackWidth
                            : 0.0;

                        return Container(
                          width: trackWidth,
                          decoration: BoxDecoration(
                            color: isDark ? Colors.grey.shade700.withOpacity(0.7) : Colors.grey.shade300.withOpacity(0.7),
                            borderRadius: BorderRadius.circular(5),
                          ),
                          child: Stack(
                            children: [
                              Positioned(
                                left: (thumbPosition.isNaN || thumbPosition.isInfinite ? 0 : thumbPosition).clamp(0.0, maxScrollableTrackWidth).toDouble(),
                                top: 0,
                                bottom: 0,
                                width: (thumbWidth.isNaN || thumbWidth.isInfinite ? trackWidth : thumbWidth).clamp(0.0, trackWidth),
                                child: gestureDetectorChild!,
                              ),
                            ],
                          ),
                        );
                      },
                      child: GestureDetector(
                        onHorizontalDragStart: (details) {
                          _scrollbarGestureDragStartX = details.globalPosition.dx;
                          _scrollbarGesturePanOffsetStartValue = _currentPanOffsetNotifier.value;
                        },
                        onHorizontalDragUpdate: (details) {
                          if (maxScrollableTrackWidth <= 0 || maxTimelineScrollOffset <= 0) return;

                          double dragDeltaX = details.globalPosition.dx - _scrollbarGestureDragStartX;
                          double contentPanDelta = (dragDeltaX / maxScrollableTrackWidth) * maxTimelineScrollOffset;

                          double newPanOffsetValue = (_scrollbarGesturePanOffsetStartValue - contentPanDelta).clamp(
                              (vpWidth - (kTimelineLabelWidth + timelineWidth)).clamp(double.negativeInfinity, 0.0),
                              0.0
                          );

                          _currentPanOffsetNotifier.value = newPanOffsetValue;
                        },
                        onHorizontalDragEnd: (details) {
                          if (_panOffset != _currentPanOffsetNotifier.value) {
                            setState(() {
                              _panOffset = _currentPanOffsetNotifier.value;
                            });
                          }
                        },
                        child: Container(
                          decoration: BoxDecoration(
                            color: isDark ? Colors.grey.shade500 : Colors.grey.shade500,
                            borderRadius: BorderRadius.circular(5),
                          ),
                        ),
                      ),
                    );
                  },
                ),
              ),
          ]),
        ),
      );
    });
  }

  Widget _buildActivityWithAssignments(ActivityModel a, double timelineWidth, double viewportWidth, int itemIndexInFilteredList) { // Added itemIndexInFilteredList
    final allAssignmentsForActivity = _activityAssignments[a] ?? [];
    final validAssignments = allAssignmentsForActivity.where((assign) => assign.userInfo != null && assign.user != null && assign.data?['isDragPreview'] != true).toList();
    final isDark = isDarkMode(context);

    final String normalizedFilter = Utilities.removeDiacritics(_globalTimelineFilter.toLowerCase());
    bool activityTitleMatchesFilter = _globalTimelineFilter.isEmpty || Utilities.removeDiacritics(a.title?.toLowerCase() ?? "").contains(normalizedFilter);

    Map<String?, List<ActivityAssignmentModel>> assignmentsByUser = groupBy<ActivityAssignmentModel, String?>(
        validAssignments, (assignment) => assignment.userInfo
    );

    List<String?> sortedUserInfos = assignmentsByUser.keys.toList();
    sortedUserInfos.sort((userInfoA, userInfoB) {
      if (userInfoA == null || userInfoB == null) return 0;
      final assignmentsA = assignmentsByUser[userInfoA] ?? [];
      final assignmentsB = assignmentsByUser[userInfoB] ?? [];

      bool hasPlaceA = assignmentsA.any((assign) => (assign.places).isNotEmpty);
      bool hasPlaceB = assignmentsB.any((assign) => (assign.places).isNotEmpty);
      if (hasPlaceA && !hasPlaceB) return -1;
      if (!hasPlaceA && hasPlaceB) return 1;

      bool hasEventA = assignmentsA.any((assign) => (assign.events).isNotEmpty);
      bool hasEventB = assignmentsB.any((assign) => (assign.events).isNotEmpty);
      if (hasEventA && !hasEventB) return -1;
      if (!hasEventA && hasEventB) return 1;

      final userA = assignmentsA.firstOrNull?.user?.toFullNameString().toLowerCase() ?? userInfoA.toLowerCase();
      final userB = assignmentsB.firstOrNull?.user?.toFullNameString().toLowerCase() ?? userInfoB.toLowerCase();
      return userA.compareTo(userB);
    });


    List<Widget> userRowsAndPreviews = [];
    Set<String?> usersWithRenderedRows = {};

    for (var userInfoId in sortedUserInfos) {
      if (userInfoId == null) continue;
      final userAssignmentsList = assignmentsByUser[userInfoId]!;
      List<ActivityAssignmentModel>? assignmentsToConsiderForRendering;

      if (_globalTimelineFilter.isEmpty) {
        assignmentsToConsiderForRendering = List.from(userAssignmentsList);
      } else {
        if (activityTitleMatchesFilter) {
          assignmentsToConsiderForRendering = List.from(userAssignmentsList);
        } else {
          List<ActivityAssignmentModel> filteredUserAssignmentsByName = userAssignmentsList.where((assign) {
            if (Utilities.removeDiacritics(assign.user!.toFullNameString().toLowerCase()).contains(normalizedFilter)) {
              return true;
            }
            for (var place in assign.places) {
              if (Utilities.removeDiacritics(place.title?.toLowerCase() ?? "").contains(normalizedFilter)) {
                return true;
              }
            }
            for (var event in assign.events) {
              if (Utilities.removeDiacritics(event.title?.toLowerCase() ?? "").contains(normalizedFilter)) {
                return true;
              }
            }
            return false;
          }).toList();

          if (filteredUserAssignmentsByName.isNotEmpty) {
            assignmentsToConsiderForRendering = filteredUserAssignmentsByName;
          }
        }
      }

      if (assignmentsToConsiderForRendering != null && assignmentsToConsiderForRendering.isNotEmpty) {
        List<ActivityAssignmentModel> assignmentsToRender = List.from(assignmentsToConsiderForRendering);
        final userForThisRow = assignmentsToRender[0].user;
        if (userForThisRow == null) continue;

        if (_hoveredActivityForPreview == a && _currentlyDraggedUser?.id == userInfoId && _previewStartTime != null) {
          final draggedDuration = kDefaultUserAssignmentDuration;
          final DateTimeRange pr = TimeClampingService.clampDateTimeRange(initialStartTime: _previewStartTime!, itemDuration: draggedDuration, timelineStart: _timelineStart!, timelineEnd: _timelineEnd!, minAllowedDuration: kMinTimeLength);
          assignmentsToRender.add(ActivityAssignmentModel(activityId: a.id ?? -1, user: _currentlyDraggedUser, userInfo: _currentlyDraggedUser!.id, startTime: pr.start, endTime: pr.end, data: {'isDragPreview': true}, places: [], events: []));
          assignmentsToRender.sort((a1, b1) => a1.startTime!.compareTo(b1.startTime!));
        }
        userRowsAndPreviews.add(_buildUserRow(a, userForThisRow, assignmentsToRender, timelineWidth));
        usersWithRenderedRows.add(userInfoId);
      }
    }

    if (_hoveredActivityForPreview == a && _currentlyDraggedUser != null && _previewStartTime != null && !usersWithRenderedRows.contains(_currentlyDraggedUser!.id)) {
      bool showDraggedUserPreviewForThisActivity = false;
      if (_globalTimelineFilter.isEmpty) {
        showDraggedUserPreviewForThisActivity = true;
      } else {
        if (activityTitleMatchesFilter) {
          showDraggedUserPreviewForThisActivity = true;
        } else {
          if (Utilities.removeDiacritics(_currentlyDraggedUser!.toFullNameString().toLowerCase()).contains(normalizedFilter)) {
            showDraggedUserPreviewForThisActivity = true;
          }
        }
      }

      if (showDraggedUserPreviewForThisActivity) {
        final draggedDuration = kDefaultUserAssignmentDuration;
        final DateTimeRange pr = TimeClampingService.clampDateTimeRange(initialStartTime: _previewStartTime!, itemDuration: draggedDuration, timelineStart: _timelineStart!, timelineEnd: _timelineEnd!, minAllowedDuration: kMinTimeLength);
        userRowsAndPreviews.add(_buildUserRow(a, _currentlyDraggedUser!, [ActivityAssignmentModel(activityId: a.id ?? -1, user: _currentlyDraggedUser, userInfo: _currentlyDraggedUser!.id!, startTime: pr.start, endTime: pr.end, data: {'isDragPreview': true}, places: [], events: [])], timelineWidth));
      }
    }

    if (_globalTimelineFilter.isNotEmpty && !activityTitleMatchesFilter && userRowsAndPreviews.isEmpty) {
      return SizedBox.shrink(key: ObjectKey(a));
    }

    // The `itemIndexInFilteredList` is the direct index from ReorderableListView.builder
    // No need for the complex fallback logic for displayIndex that was here before.
    final int displayIndex = itemIndexInFilteredList;


    return Padding(
      key: ObjectKey(a),
      padding: const EdgeInsets.symmetric(vertical: 0),
      child: DragTarget<UserInfoModel>(
        onWillAcceptWithDetails: (details) {
          _hideAssignmentDetailOverlay();
          if (a.isHidden!) return false;

          if (_timelineStart != null && _timelineEnd != null) {
            bool needsStateUpdate = false;
            DateTime snappedStartTime = _calculateSnappedTimeFromOffset(details.offset, timelineWidth);
            final DateTimeRange clampedRange = TimeClampingService.clampDateTimeRange(initialStartTime: snappedStartTime, itemDuration: kDefaultUserAssignmentDuration, timelineStart: _timelineStart!, timelineEnd: _timelineEnd!, minAllowedDuration: kMinTimeLength);

            if (_hoveredActivityForPreview != a) { _hoveredActivityForPreview = a; needsStateUpdate = true; }
            if (_previewStartTime != clampedRange.start) { _previewStartTime = clampedRange.start; needsStateUpdate = true; }

            if (needsStateUpdate) setState(() {});
            return true;
          }
          if (_hoveredActivityForPreview == a) setState(() { _hoveredActivityForPreview = null; _previewStartTime = null; });
          return false;
        },
        onMove: (details) {
          if (a.isHidden!) return;
          if (_hoveredActivityForPreview == a && _timelineStart != null && _timelineEnd != null) {
            DateTime snappedStartTime = _calculateSnappedTimeFromOffset(details.offset, timelineWidth);
            final DateTimeRange clampedRange = TimeClampingService.clampDateTimeRange(initialStartTime: snappedStartTime, itemDuration: kDefaultUserAssignmentDuration, timelineStart: _timelineStart!, timelineEnd: _timelineEnd!, minAllowedDuration: kMinTimeLength);
            if (_previewStartTime != clampedRange.start) setState(() => _previewStartTime = clampedRange.start);
          }
        },
        onLeave: (data) {
          if (_hoveredActivityForPreview == a) setState(() { _hoveredActivityForPreview = null; _previewStartTime = null; });
        },
        onAcceptWithDetails: (details) {
          if (_timelineStart == null || _timelineEnd == null || a.isHidden!) return;

          final draggedDataOnDrop = details.data;
          DateTime finalSnappedStartTime = _calculateSnappedTimeFromOffset(details.offset, timelineWidth);
          final DateTimeRange finalClampedRange = TimeClampingService.clampDateTimeRange(initialStartTime: finalSnappedStartTime, itemDuration: kDefaultUserAssignmentDuration, timelineStart: _timelineStart!, timelineEnd: _timelineEnd!, minAllowedDuration: kMinTimeLength);

          final newAssignment = ActivityAssignmentModel(
              activityId: a.id ?? -1,
              userInfo: draggedDataOnDrop.id!,
              user: draggedDataOnDrop,
              startTime: finalClampedRange.start,
              endTime: finalClampedRange.end,
              data: null,
              places: [],
              events: []
          );
          setState(() {
            _activityAssignments.putIfAbsent(a, () => []).add(newAssignment);
            _hoveredActivityForPreview = null; _previewStartTime = null;
            _updateFilteredActivities();
          });
        },
        builder: (ctx, candidateData, rejectedData) {
          bool isHighlighted = candidateData.isNotEmpty && _hoveredActivityForPreview == a && !a.isHidden!;
          Color activityHeaderBgColor;
          Color activityHeaderTextColor;
          Color activityHiddenOverlayColor;
          Color activityContentBgColor;

          if (isDark) {
            activityHeaderBgColor = a.isHidden! ? Colors.grey.shade700.withOpacity(0.7) : Colors.blueGrey.shade800.withOpacity(0.7);
            activityHeaderTextColor = a.isHidden! ? Colors.white60 : Colors.white;
            activityHiddenOverlayColor = Colors.grey.shade600.withOpacity(0.3);
            activityContentBgColor = isHighlighted ? Theme.of(context).primaryColor.withAlpha(30) : Colors.transparent;
          } else {
            activityHeaderBgColor = a.isHidden! ? Colors.grey.shade400.withOpacity(0.7) : Colors.blueGrey.shade50.withOpacity(0.7);
            activityHeaderTextColor = a.isHidden! ? Colors.white70 : Colors.black87;
            activityHiddenOverlayColor = Colors.grey.shade500.withOpacity(0.3);
            activityContentBgColor = isHighlighted ? Colors.lightBlue.shade50.withOpacity(0.6) : Colors.transparent;
          }

          List<Widget> activityContentChildren = [];
          if (!a.isHidden!) {
            if (userRowsAndPreviews.isNotEmpty) {
              activityContentChildren.addAll(userRowsAndPreviews);
            } else if (a.id == null &&
                (_activityAssignments[a] == null || _activityAssignments[a]!.where((asg) => asg.data?['isDragPreview'] != true).isEmpty) &&
                _globalTimelineFilter.isEmpty) {
              activityContentChildren.add(
                  Padding(
                    padding: EdgeInsets.only(left: kTimelineLabelWidth + 8.0, top: 8.0, bottom: 8.0, right: 8.0),
                    child: Text(
                      ActivitiesComponentStrings.textDragUsersFromTopDropHere,
                      style: TextStyle(fontSize: 11, color: isDark ? Colors.grey[400] : Colors.grey[600], fontStyle: FontStyle.italic),
                    ),
                  )
              );
            } else if (userRowsAndPreviews.isEmpty && _globalTimelineFilter.isNotEmpty && activityTitleMatchesFilter) {
              activityContentChildren.add(Padding(
                padding: const EdgeInsets.only(left: kTimelineLabelWidth + 8.0, top: 4, bottom: 4),
                child: Text(ActivitiesComponentStrings.textNoUsersAssignedYet, style: TextStyle(fontSize: 10, color: (isDark? Colors.grey[500] : Colors.grey[600]), fontStyle: FontStyle.italic)),
              ));
            }
          } else {
            activityContentChildren.add(Padding(
              padding: const EdgeInsets.only(left: kTimelineLabelWidth + 8.0, top: 6, bottom: 6),
              child: Text(ActivitiesComponentStrings.textActivityHidden, style: TextStyle(fontSize: 10, color: (isDark ? Colors.grey[400] : Colors.grey[700]), fontStyle: FontStyle.italic)),
            ));
          }

          return Container(
            decoration: BoxDecoration(
              color: activityContentBgColor,
              border: Border(bottom: BorderSide(color: isDark ? Colors.grey.shade700 : Colors.grey.shade300, width: 0.8)),
            ),
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Container(
                color: activityHeaderBgColor,
                child: Row(children: [
                  ReorderableDragStartListener(
                      index: displayIndex, // Use the passed index
                      child: SizedBox(width: kTimelineLabelWidth, height: 24, child: Row(children: [
                        IconButton(
                          icon: Icon(a.isHidden! ? Icons.visibility_off_outlined : Icons.visibility_outlined, size: 13, color: activityHeaderTextColor.withOpacity(0.8)),
                          padding: EdgeInsets.zero,
                          constraints: BoxConstraints(minWidth: 22, minHeight: 22),
                          splashRadius: 12,
                          tooltip: a.isHidden! ? ActivitiesComponentStrings.tooltipMarkVisible : ActivitiesComponentStrings.tooltipMarkHidden,
                          onPressed: () {
                            setState(() { a.isHidden = !a.isHidden!; });
                          },
                        ),
                        Expanded(child: Padding(padding: const EdgeInsets.only(left: 1.0), child: Text(a.title ?? ActivitiesComponentStrings.textUntitledActivity, style: TextStyle(fontSize: 11, fontWeight: FontWeight.w500, color: activityHeaderTextColor), overflow: TextOverflow.ellipsis))),
                        PopupMenuButton<String>(
                          icon: Icon(Icons.more_vert, size: 15, color: activityHeaderTextColor.withOpacity(0.8)),
                          tooltip: ActivitiesComponentStrings.tooltipActivityOptions,
                          color: isDark ? Colors.grey[800] : Colors.white,
                          splashRadius: 10,
                          padding: EdgeInsets.zero,
                          itemBuilder: (_) => [
                            PopupMenuItem(value: 'rename', height: 30, child: Text(ActivitiesComponentStrings.menuRename, style: TextStyle(fontSize: 12, color: isDark ? Colors.white : Colors.black))),
                            PopupMenuItem(value: 'delete', height: 30, child: Text(ActivitiesComponentStrings.menuDelete, style: TextStyle(fontSize: 12, color: isDark ? Colors.white : Colors.black))),
                          ],
                          onSelected: (v) {
                            _hideAssignmentDetailOverlay();
                            if (v == 'delete') {
                              setState(() {
                                _bundle!.activities!.remove(a);
                                _activityAssignments.remove(a);
                                _selectedActivities.remove(a);
                                _updateFilteredActivities();
                              });
                            } else if (v == 'rename') {
                              _showRenameDialog(a);
                            }
                          },
                        ),
                      ]))),
                  Expanded(
                      child: ValueListenableBuilder<double>(
                          valueListenable: _currentPanOffsetNotifier,
                          builder: (context, currentPanOffsetValue, child){
                            return ClipRect(
                              child: Transform.translate(
                                offset: Offset(currentPanOffsetValue, 0),
                                child: SizedBox(
                                  width: timelineWidth,
                                  height: 24,
                                  child: CustomPaint(
                                    foregroundPainter: VerticalGridLinesPainter(
                                      start: _timelineStart!,
                                      end: _timelineEnd!,
                                      pps: _basePps * _scale,
                                      viewHeight: 24,
                                      isDarkMode: isDark,
                                    ),
                                    child: Container(
                                      color: a.isHidden!
                                          ? activityHiddenOverlayColor
                                          : (isDark
                                          ? Colors.grey.shade700.withOpacity(0.2)
                                          : Colors.grey.shade300.withOpacity(0.2)
                                      ),
                                    ),
                                  ),
                                ),
                              ),
                            );
                          }
                      )
                  ),
                ]),
              ),
              ...activityContentChildren,
            ]),
          );
        },
      ),
    );
  }

  Widget _buildUserRow(ActivityModel activity, UserInfoModel userInfo, List<ActivityAssignmentModel> assignments, double timelineWidth) {
    if (assignments.isEmpty) return const SizedBox.shrink();
    final isDark = isDarkMode(context);

    final isHostingPreview = assignments.any((u) => u.data?['isDragPreview'] == true);
    final color = darkUserColors[userInfo.hashCode % darkUserColors.length];
    final avatarTextColor = Colors.white;

    return Container(
      height: 26,
      decoration: BoxDecoration(
          color: isHostingPreview && !activity.isHidden! ? color.withOpacity(0.1) : Colors.transparent,
          border: Border(bottom: BorderSide(color: isDark ? Colors.grey.shade800 : Colors.grey.shade200, width: 0.5))
      ),
      child: Row(children: [
        SizedBox(width: kTimelineLabelWidth, child: Row(children: [
          const SizedBox(width: 4),
          Container(width: 18, height: 18, decoration: BoxDecoration(shape: BoxShape.circle, color: color, border: Border.all(color: color.withOpacity(0.7), width: 1.0)), child: Center(child: Text(userInfo.toFullNameString().split(' ').map((w) => w.isNotEmpty ? w[0] : '').take(2).join().toUpperCase(), style: TextStyle(fontSize: 9, color: avatarTextColor, fontWeight: FontWeight.bold)))),
          const SizedBox(width: 3),
          Expanded(child: Text(userInfo.toFullNameString(), style: TextStyle(fontSize: 11, color: isDark? Colors.white70 : Colors.black87), overflow: TextOverflow.ellipsis)),
          PopupMenuButton<String>(
            icon: Icon(Icons.more_vert, size: 11, color: isDark ? Colors.white54 : Colors.black45),
            tooltip: ActivitiesComponentStrings.tooltipUserAssignmentOptions,
            color: isDark ? Colors.grey[800] : Colors.white,
            splashRadius: 9,
            padding: EdgeInsets.zero,
            itemBuilder: (_) => [
              PopupMenuItem(
                  value: 'delete_user_from_activity',
                  height: 28,
                  child: Text(ActivitiesComponentStrings.menuRemoveUserFromActivity, style: TextStyle(fontSize: 11, color: isDark ? Colors.white : Colors.black))
              ),
            ],
            onSelected: (v) {
              _hideAssignmentOverlay();
              if (v == 'delete_user_from_activity') {
                setState(() {
                  _activityAssignments[activity]?.removeWhere((assign) => assign.userInfo == userInfo.id && assign.data?['isDragPreview'] != true);
                  _updateFilteredActivities();
                });
              }
            },
          ),
        ])),
        ValueListenableBuilder<double>(
            valueListenable: _currentPanOffsetNotifier,
            builder: (context, currentPanOffsetValue, child){
              return ClipRect(
                  child: Transform.translate(
                      offset: Offset(currentPanOffsetValue, 0),
                      child: SizedBox(
                          width: timelineWidth,
                          height: 26,
                          child: CustomPaint(
                            painter: VerticalGridLinesPainter(
                                start: _timelineStart!,
                                end: _timelineEnd!,
                                pps: _basePps * _scale,
                                viewHeight: 26,
                                isDarkMode: isDark
                            ),
                            child: Stack(
                              children: assignments.map((u) {
                                final bool isPreview = u.data?['isDragPreview'] == true;
                                final itemLayerLink = LayerLink();
                                Color itemBarColor = isPreview ? color.withOpacity(0.6) : color;
                                if (activity.isHidden!) {
                                  itemBarColor = (isDark ? Colors.grey.shade600 : Colors.grey.shade500).withOpacity(isPreview ? 0.5 : 0.7);
                                }

                                return TimelineRow(
                                  key: ValueKey("assign_${u.userInfo}_${u.startTime?.millisecondsSinceEpoch}_${u.endTime?.millisecondsSinceEpoch}_${u.places.length}_${u.events.length}_${isPreview}_${activity.isHidden!}"),
                                  layerLink: itemLayerLink,
                                  start: _timelineStart!, end: _timelineEnd!,
                                  itemStart: u.startTime!, itemEnd: u.endTime!,
                                  barColor: itemBarColor,
                                  onTapBar: isPreview || activity.isHidden! ? null : () => _showAssignmentDetailOverlay(u, itemLayerLink),
                                  onDragStart: _hideAssignmentDetailOverlay,
                                  onDragEnd: isPreview || activity.isHidden! ? (ns, ne) {} : (finalStart, finalEnd) {
                                    if (_timelineStart == null || _timelineEnd == null) return;
                                    final DateTimeRange finalClampedRange = TimeClampingService.clampDateTimeRange(
                                        initialStartTime: finalStart, itemDuration: finalEnd.difference(finalStart),
                                        timelineStart: _timelineStart!, timelineEnd: _timelineEnd!, minAllowedDuration: kMinTimeLength);
                                    if (u.startTime != finalClampedRange.start || u.endTime != finalClampedRange.end) {
                                      setState(() { u.startTime = finalClampedRange.start; u.endTime = finalClampedRange.end; _updateFilteredActivities(); });
                                    }
                                  },
                                  draggable: !isPreview && !activity.isHidden!,
                                  zoomScale: _scale,
                                  onPlaceOrEventDropped: isPreview || activity.isHidden!
                                      ? null
                                      : (droppedItemData) {
                                    _handlePlaceOrEventDropOnAssignment(u, droppedItemData);
                                  },
                                  assignment: u,
                                  isDarkMode: isDark,
                                );
                              }).toList(),
                            ),
                          )
                      )
                  )
              );
            }
        ),
      ]),
    );
  }

  void _hideAssignmentOverlay() {
    _hideAssignmentDetailOverlay();
  }
}