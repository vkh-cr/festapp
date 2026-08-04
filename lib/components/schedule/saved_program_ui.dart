import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

const ButtonStyle savedProgramActionButtonStyle = ButtonStyle(
  overlayColor: WidgetStatePropertyAll(Colors.transparent),
  splashFactory: NoSplash.splashFactory,
);

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

  final ValueListenable<bool> canSave;
  final Color color;
  final IconData addIcon;
  final IconData savedIcon;
  final double size;

  @override
  Widget build(BuildContext context) => ValueListenableBuilder(
        valueListenable: canSave,
        builder: (context, canSave, _) => IndexedStack(
          index: canSave ? 0 : 1,
          alignment: Alignment.center,
          children: [
            Icon(addIcon, color: color, size: size),
            Icon(savedIcon, color: color, size: size),
          ],
        ),
      );
}
