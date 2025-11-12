import 'package:flutter/material.dart';
import 'package:fstapp/components/blueprint/blueprint_strings.dart';

import '../seat_reservation/utils/seat_state.dart';
import '../seat_reservation/widgets/seat_reservation_widget.dart';
import '../seat_reservation/widgets/seat_widget.dart';
import 'blueprint_editor_tab.dart';

class BlueprintLegend extends StatelessWidget {
  final selectionMode currentSelectionMode;
  final ValueChanged<selectionMode> onModeSelected;

  const BlueprintLegend({
    super.key,
    required this.currentSelectionMode,
    required this.onModeSelected,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Padding(
          padding: const EdgeInsets.only(bottom: 16.0),
          child: Text(
            currentSelectionMode == selectionMode.swapSeats
                ? BlueprintStrings.swapHelpIntro
                : BlueprintStrings.legendInstruction,
            style: Theme.of(context).textTheme.bodySmall,
            textAlign: TextAlign.left,
          ),
        ),
        _buildLegend(context),
      ],
    );
  }

  Widget _buildLegend(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        _buildLegendItem(
          context: context,
          label: BlueprintStrings.legendBlackArea,
          state: SeatState.black,
          isActive: currentSelectionMode == selectionMode.addBlack,
          onTap: () => onModeSelected(selectionMode.addBlack),
        ),
        const SizedBox(height: 8),
        _buildLegendItem(
          context: context,
          label: BlueprintStrings.legendAvailable,
          state: SeatState.available,
          isActive: currentSelectionMode == selectionMode.addAvailable,
          onTap: () => onModeSelected(selectionMode.addAvailable),
        ),
        const SizedBox(height: 8),
        _buildLegendItem(
          context: context,
          label: BlueprintStrings.legendEmpty,
          state: SeatState.empty,
          isActive: currentSelectionMode == selectionMode.emptyArea,
          onTap: () => onModeSelected(selectionMode.emptyArea),
        ),
        const SizedBox(height: 8),
        _buildLegendItem(
          context: context,
          label: BlueprintStrings.legendSwapSeats,
          state: SeatState.empty, // Using empty as a placeholder icon
          isActive: currentSelectionMode == selectionMode.swapSeats,
          forceHighlight: true, // To make it stand out
          onTap: () => onModeSelected(selectionMode.swapSeats),
        ),
        const SizedBox(height: 8),
        const Divider(),
        const SizedBox(height: 8),
        _buildLegendItem(
          context: context,
          label: BlueprintStrings.legendUsed,
          state: SeatState.used,
          isActive: false,
          grayedOut: true,
        ),
        const SizedBox(height: 8),
        _buildLegendItem(
          context: context,
          label: BlueprintStrings.legendOccupied,
          state: SeatState.ordered,
          isActive: false,
          grayedOut: true,
        ),
        const SizedBox(height: 8),
        _buildLegendItem(
          context: context,
          label: BlueprintStrings.legendSelected,
          state: SeatState.selected_by_me,
          isActive: false,
          grayedOut: true,
        ),
      ],
    );
  }

  Widget _buildLegendItem({
    required BuildContext context,
    required String label,
    required SeatState state,
    bool isActive = false,
    VoidCallback? onTap,
    bool grayedOut = false,
    bool forceHighlight = false,
  }) {
    return MouseRegion(
      cursor:
      grayedOut ? SystemMouseCursors.forbidden : SystemMouseCursors.click,
      child: GestureDetector(
        onTap: grayedOut ? null : onTap,
        child: Opacity(
          opacity: grayedOut ? 0.8 : 1.0,
          child: Container(
            decoration: BoxDecoration(
              border: Border.all(
                color: isActive
                    ? Theme.of(context).colorScheme.primary
                    : Colors.transparent,
                width: 2,
              ),
              borderRadius: BorderRadius.circular(4),
            ),
            padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
            child: Row(
              mainAxisSize: MainAxisSize.min,
              children: [
                SeatWidgetHelper.buildSeat(
                  context: context,
                  state: state,
                  isHighlightedForSwap: forceHighlight,
                  size: SeatReservationWidget.boxSize.toDouble(),
                ),
                const SizedBox(width: 4),
                Text(
                  label,
                  style: TextStyle(
                    color: grayedOut ? Colors.grey : null,
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}