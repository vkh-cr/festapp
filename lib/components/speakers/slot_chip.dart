import 'package:flutter/material.dart';
import 'package:fstapp/components/speakers/counseling_availability.dart';
import 'package:fstapp/components/speakers/speakers_strings.dart';

/// A tappable chip representing one counseling slot. Renders three distinct
/// visual states:
///   * free    — bookable, shows the start time + `occupied/max`, tap enabled.
///   * full/taken — greyed out and disabled, shows [SpeakersStrings.slotTaken].
///   * mine    — the user is signed into this slot: highlighted with a check
///               icon (a distinct affordance), tap disabled here (cancellation
///               happens from the reservations section).
///
/// The [timeLabel] is passed pre-formatted so the widget stays localization- /
/// timezone-light and can be pumped directly in tests.
class SlotChip extends StatelessWidget {
  final CounselingSlot slot;
  final String timeLabel;
  final VoidCallback? onTap;

  const SlotChip({
    super.key,
    required this.slot,
    required this.timeLabel,
    this.onTap,
  });

  /// Only free slots (not full, not already mine) can be booked from the chip.
  bool get _bookable => !slot.isFull && !slot.isSignedIn;

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final bool mine = slot.isSignedIn;
    final bool full = slot.isFull && !mine;

    final Color bg;
    final Color fg;
    if (mine) {
      bg = theme.colorScheme.primary;
      fg = theme.colorScheme.onPrimary;
    } else if (full) {
      bg = theme.disabledColor.withValues(alpha: 0.12);
      fg = theme.disabledColor;
    } else {
      bg = theme.colorScheme.surfaceContainerHighest;
      fg = theme.colorScheme.onSurface;
    }

    final String label = full
        ? SpeakersStrings.slotTaken
        : "$timeLabel  ${slot.occupied}/${slot.maxParticipants}";

    return Material(
      color: bg,
      borderRadius: BorderRadius.circular(20),
      child: InkWell(
        borderRadius: BorderRadius.circular(20),
        onTap: _bookable ? onTap : null,
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 8),
          child: Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              if (mine) ...[
                Icon(Icons.check_circle, size: 16, color: fg),
                const SizedBox(width: 6),
              ],
              Text(
                mine ? timeLabel : label,
                style: TextStyle(
                  color: fg,
                  fontWeight: mine ? FontWeight.bold : FontWeight.w500,
                  decoration: full ? TextDecoration.lineThrough : null,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
