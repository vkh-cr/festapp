// activity_timeline_controller.dart
import 'package:flutter/material.dart';
import 'package:fstapp/data_models/activity_model.dart';

class ActivityTimelineController {
  final List<ActivityUserInfoModel> allUsers;
  final List<ActivityPlaceModel> allPlaces;
  final List<ActivityEventModel> allEvents;
  final Map<String, Duration> userAssignedHours;

  final String userFilter;
  final String placeFilter;
  final String eventFilter;

  final ValueChanged<String> onUserFilterChanged;
  final ValueChanged<String> onPlaceFilterChanged;
  final ValueChanged<String> onEventFilterChanged;

  final Function(ActivityUserInfoModel) onUserDragStarted;
  final VoidCallback onUserDragEnd;
  final VoidCallback hideAssignmentDetailOverlay;

  final bool isDark;

  ActivityTimelineController({
    required this.allUsers,
    required this.allPlaces,
    required this.allEvents,
    required this.userAssignedHours,
    required this.userFilter,
    required this.placeFilter,
    required this.eventFilter,
    required this.onUserFilterChanged,
    required this.onPlaceFilterChanged,
    required this.onEventFilterChanged,
    required this.onUserDragStarted,
    required this.onUserDragEnd,
    required this.hideAssignmentDetailOverlay,
    required this.isDark,
  });

  // Helper getters for derived UI properties if needed,
  // otherwise panels can derive them from isDark.
  Color get textColor => isDark ? Colors.white : Colors.black;
  Color get hintColor => isDark ? Colors.white54 : Colors.black54;
}