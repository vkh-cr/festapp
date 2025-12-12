import 'package:flutter/material.dart';
import 'package:fstapp/components/blueprint/blueprint_strings.dart';

import '../seat_reservation/utils/seat_state.dart';
import '../seat_reservation/widgets/seat_reservation_widget.dart';
import '../seat_reservation/widgets/seat_widget.dart';
import 'blueprint_editor_tab.dart';

class BlueprintLegend extends StatelessWidget {
  final BlueprintSelectionMode currentSelectionMode;
  final ValueChanged<BlueprintSelectionMode> onModeSelected;

  // New properties for the Confirm Button
  final int selectedCount;
  final VoidCallback? onConfirmOrder;

  const BlueprintLegend({
    super.key,
    required this.currentSelectionMode,
    required this.onModeSelected,
    this.selectedCount = 0,
    this.onConfirmOrder,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Padding(
          padding: const EdgeInsets.only(bottom: 16.0),
          child: Text(
            _getHelpText(),
            style: Theme.of(context).textTheme.bodySmall,
            textAlign: TextAlign.left,
          ),
        ),
        _buildLegend(context),
      ],
    );
  }

  String _getHelpText() {
    if (currentSelectionMode == BlueprintSelectionMode.swapSeats) {
      return BlueprintStrings.swapHelpIntro;
    } else if (currentSelectionMode == BlueprintSelectionMode.createNewOrder) {
      return BlueprintStrings.createOrderHelp;
    }
    return BlueprintStrings.legendInstruction;
  }

  Widget _buildLegend(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        // --- Drawing Tools ---
        _buildLegendItem(
          context: context,
          label: BlueprintStrings.legendBlackArea,
          state: SeatState.black,
          isActive: currentSelectionMode == BlueprintSelectionMode.addBlack,
          onTap: () => onModeSelected(BlueprintSelectionMode.addBlack),
        ),
        const SizedBox(height: 8),
        _buildLegendItem(
          context: context,
          label: BlueprintStrings.legendAvailable,
          state: SeatState.available,
          isActive: currentSelectionMode == BlueprintSelectionMode.addAvailable,
          onTap: () => onModeSelected(BlueprintSelectionMode.addAvailable),
        ),
        const SizedBox(height: 8),
        _buildLegendItem(
          context: context,
          label: BlueprintStrings.legendEmpty,
          state: SeatState.empty,
          isActive: currentSelectionMode == BlueprintSelectionMode.emptyArea,
          onTap: () => onModeSelected(BlueprintSelectionMode.emptyArea),
        ),

        const SizedBox(height: 16),

        // --- Action Tools ---
        _buildLegendItem(
          context: context,
          label: BlueprintStrings.legendSwapSeats,
          state: SeatState.empty,
          isActive: currentSelectionMode == BlueprintSelectionMode.swapSeats,
          forceHighlight: true, // Keeps orange border for Swap to indicate "special/warning"
          onTap: () => onModeSelected(BlueprintSelectionMode.swapSeats),
        ),
        const SizedBox(height: 8),

        // --- Create Order with Button ---
        Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            _buildLegendItem(
              context: context,
              label: BlueprintStrings.legendCreateOrder,
              state: SeatState.selected_by_me,
              isActive: currentSelectionMode == BlueprintSelectionMode.createNewOrder,
              forceHighlight: false, // REMOVED orange border here
              onTap: () => onModeSelected(BlueprintSelectionMode.createNewOrder),
            ),

            // The Button appears here if mode is active
            AnimatedSwitcher(
              duration: const Duration(milliseconds: 300),
              child: currentSelectionMode == BlueprintSelectionMode.createNewOrder
                  ? Padding(
                padding: const EdgeInsets.only(top: 12.0),
                child: SizedBox(
                  width: double.infinity,
                  child: ElevatedButton.icon(
                    onPressed: selectedCount > 0 ? onConfirmOrder : null,
                    style: ElevatedButton.styleFrom(
                      foregroundColor: Colors.white,
                      elevation: 4,
                      shadowColor: Colors.black26,
                      padding: const EdgeInsets.symmetric(vertical: 16, horizontal: 16),
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(12),
                      ),
                    ),
                    icon: const Icon(Icons.check_circle_outline, size: 20),
                    label: Text(
                      "${BlueprintStrings.btnCreateOrder} ($selectedCount)",
                      style: const TextStyle(
                        fontSize: 15,
                        fontWeight: FontWeight.bold,
                        letterSpacing: 0.5,
                      ),
                    ),
                  ),
                ),
              )
                  : const SizedBox.shrink(),
            ),
          ],
        ),

        const SizedBox(height: 8),
        const Divider(),
        const SizedBox(height: 8),

        // --- Static Legend Items ---
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
        )
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
              color: isActive ? Theme.of(context).colorScheme.primary.withOpacity(0.05) : null,
              border: Border.all(
                color: isActive
                    ? Theme.of(context).colorScheme.primary
                    : Colors.transparent,
                width: 2,
              ),
              borderRadius: BorderRadius.circular(8),
            ),
            padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 6),
            child: Row(
              mainAxisSize: MainAxisSize.min,
              children: [
                SeatWidgetHelper.buildSeat(
                  context: context,
                  state: state,
                  isHighlightedForSwap: forceHighlight,
                  size: SeatReservationWidget.boxSize.toDouble(),
                ),
                const SizedBox(width: 8),
                Text(
                  label,
                  style: TextStyle(
                    color: grayedOut ? Colors.grey : null,
                    fontWeight: isActive ? FontWeight.bold : FontWeight.normal,
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