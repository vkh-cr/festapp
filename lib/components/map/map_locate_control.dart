import 'package:flutter/material.dart';
import 'package:fstapp/components/map/map_strings.dart';

class MapLocateControl extends StatelessWidget {
  static const double topOffset = 72;
  static const double rightOffset = 16;

  final bool enabled;
  final bool loading;
  final VoidCallback onPressed;

  const MapLocateControl({
    required this.enabled,
    required this.loading,
    required this.onPressed,
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    final canPress = enabled && !loading;
    final colorScheme = Theme.of(context).colorScheme;

    return Positioned(
      top: topOffset,
      right: rightOffset,
      child: SafeArea(
        child: Semantics(
          container: true,
          label: MapStrings.currentLocation,
          button: true,
          enabled: canPress,
          onTap: canPress ? onPressed : null,
          child: ExcludeSemantics(
            child: Material(
              color: colorScheme.surface,
              elevation: 3,
              shape: const CircleBorder(),
              clipBehavior: Clip.antiAlias,
              child: Tooltip(
                message: MapStrings.currentLocation,
                child: SizedBox.square(
                  dimension: 48,
                  child: IconButton(
                    onPressed: canPress ? onPressed : null,
                    icon: loading
                        ? const SizedBox.square(
                            dimension: 22,
                            child: CircularProgressIndicator(strokeWidth: 2.5),
                          )
                        : const Icon(Icons.my_location),
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
}
