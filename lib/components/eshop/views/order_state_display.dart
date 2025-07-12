import 'dart:ui' as ui;

import 'package:flutter/material.dart';

import '../models/order_model.dart';

/// A reusable widget to display a single order state or a from-to state transition.
class OrderStateDisplay extends StatelessWidget {
  /// The formatted string representing the state.
  /// - For a single state: `"key;STATE_TEXT"`
  /// - For a transition: `"key1;STATE1_TEXT → key2;STATE2_TEXT"`
  final String formattedState;

  /// A function to get the background color for a state key.
  final Color Function(String) getBackground;

  /// An optional fixed width for the state tags when in a transition view.
  ///
  /// Providing this value ensures both 'from' and 'to' tags have the same
  /// width for a clean, stable UI. Use the `calculateOptimalWidth` helper
  /// method to determine this value based on all your possible state labels.
  final double? stateTagWidth;

  const OrderStateDisplay({
    super.key,
    required this.formattedState,
    required this.getBackground,
    this.stateTagWidth,
  });

  /// A helper method to calculate the optimal width for the state tags.
  ///
  /// Call this once in your parent widget and pass the result to `stateTagWidth`.
  /// This ensures all tags are wide enough to fit the longest state label.
  ///
  /// ### Example Usage in Parent Widget:
  /// ```dart
  /// double? _optimalTagWidth;
  ///
  /// @override
  /// void didChangeDependencies() {
  ///   super.didChangeDependencies();
  ///   // Your list of all possible state labels.
  ///   final allStateLabels = ["NEW", "CONFIRMED", "PROCESSING", "AWAITING_SHIPMENT"];
  ///   _optimalTagWidth = OrderStateDisplay.calculateOptimalWidth(
  ///     context: context,
  ///     stateLabels: allStateLabels.map((s) => OrderModel.statesDataGridToUpper(s)).toList(),
  ///   );
  /// }
  ///
  /// // ... then in your build method:
  /// OrderStateDisplay(
  ///   stateTagWidth: _optimalTagWidth,
  ///   // ... other properties
  /// )
  /// ```
  static double calculateOptimalWidth({
    required BuildContext context,
    required List<String> stateLabels,
    TextStyle? style,
    EdgeInsets padding = const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
  }) {
    final textStyle = style ?? DefaultTextStyle.of(context).style;
    double maxWidth = 0;

    for (final label in stateLabels) {
      final textPainter = TextPainter(
        text: TextSpan(text: label, style: textStyle),
        maxLines: 1,
        textDirection: ui.TextDirection.ltr,
      )..layout(minWidth: 0, maxWidth: double.infinity);

      final totalWidth = textPainter.size.width + padding.horizontal;

      if (totalWidth > maxWidth) {
        maxWidth = totalWidth;
      }
    }
    return maxWidth;
  }


  @override
  Widget build(BuildContext context) {
    // Inner function to create the core tag widget. It only handles the
    // appearance (decoration and text), not the layout or sizing.
    Widget buildStateTag(String formattedStateValue) {
      if (!formattedStateValue.contains(';')) return const SizedBox.shrink();
      final parts = formattedStateValue.split(';');
      if (parts.length != 2) return const SizedBox.shrink();

      final key = parts[0];
      final text = OrderModel.statesDataGridToUpper(parts[1]);

      return Container(
        padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
        decoration: BoxDecoration(
          color: getBackground(key),
          borderRadius: BorderRadius.circular(4),
        ),
        // Center the text within the tag, crucial for when the container is wide.
        child: Center(
          child: Text(text, textAlign: TextAlign.center, overflow: TextOverflow.ellipsis),
        ),
      );
    }

    final bool isTransition = formattedState.contains("→");

    if (isTransition) {
      // --- TRANSITION VIEW ---
      // Displays two tags of a fixed width with a centered arrow.
      final parts = formattedState.split("→");
      final fromState = parts[0].trim();
      final toState = parts[1].trim();

      return Row(
        children: [
          Expanded(
            child: Row(
              mainAxisAlignment: MainAxisAlignment.end,
              children: [
                // This Container enforces the fixed width for UI stability.
                SizedBox(
                  width: stateTagWidth,
                  child: buildStateTag(fromState),
                ),
              ],
            ),
          ),
          const Padding(
            padding: EdgeInsets.symmetric(horizontal: 8.0),
            child: Icon(Icons.arrow_forward, size: 18),
          ),
          Expanded(
            child: Row(
              mainAxisAlignment: MainAxisAlignment.start,
              children: [
                // This Container also enforces the fixed width.
                SizedBox(
                  width: stateTagWidth,
                  child: buildStateTag(toState),
                ),
              ],
            ),
          ),
        ],
      );
    } else {
      // --- SINGLE STATE VIEW ---
      // Displays one tag that expands to fill the entire available width.
      return SizedBox(
        width: double.infinity,
        child: buildStateTag(formattedState),
      );
    }
  }
}