// advanced_timeline_controller.dart
import 'package:flutter/material.dart';
import 'schedule_helper.dart'; // Assuming this is a local file

/// Centralizes all data & callbacks for the timeline view.
class AdvancedTimelineController {
  final List<TimeBlockItem> events;
  final void Function(int eventId)? onEventPressed;
  final void Function(BuildContext, List<TimeBlockGroup>, TimeBlockItem? parentEvent)? onAddNewEvent;
  final bool Function()? showAddNewEventButton;
  final Future<void> Function(int eventId)? onSignInEvent;
  final Future<void> Function(int eventId)? onSignOutEvent;
  final Future<void> Function(int eventId)? onAddToProgramEvent;
  final Future<void> Function(int eventId)? onRemoveFromProgramEvent;
  final void Function(BuildContext, TimeBlockPlace place)? onPlaceTap;
  final void Function(BuildContext, int eventId)? onEditEvent;
  final List<TimeBlockGroup> Function(Iterable<TimeBlockItem> events, BuildContext context)? customSplitter;
  final bool animateEventRemoval;
  final Widget? emptyContent;

  // New callbacks and properties
  final void Function(BuildContext context, int eventId)? onScanButtonPressed;
  final void Function(BuildContext context, int eventId)? onCompanionButtonPressed;
  final bool Function()? isUserApprover;

  AdvancedTimelineController({
    required this.events,
    this.onEventPressed,
    this.onAddNewEvent,
    this.showAddNewEventButton,
    this.onSignInEvent,
    this.onSignOutEvent,
    this.onAddToProgramEvent,
    this.onRemoveFromProgramEvent,
    this.onPlaceTap,
    this.onEditEvent,
    this.customSplitter,
    this.animateEventRemoval = false,
    this.emptyContent,
    this.onScanButtonPressed,
    this.onCompanionButtonPressed,
    this.isUserApprover,
  });
}