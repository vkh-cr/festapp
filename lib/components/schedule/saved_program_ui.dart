import 'package:flutter/material.dart';

bool reconcileLoadedSavedProgramState({
  required bool incoming,
  required bool? visible,
  required bool mutationInFlight,
  required int loadRevision,
  required int currentRevision,
}) =>
    visible != null && (mutationInFlight || loadRevision != currentRevision)
        ? visible
        : incoming;

class SavedProgramActionIcon extends StatelessWidget {
  const SavedProgramActionIcon({
    required this.canSave,
    required this.color,
    required this.addIcon,
    required this.savedIcon,
    required this.size,
    super.key,
  });

  final bool canSave;
  final Color color;
  final IconData addIcon;
  final IconData savedIcon;
  final double size;

  @override
  Widget build(BuildContext context) => Icon(
        canSave ? addIcon : savedIcon,
        color: color,
        size: size,
      );
}
