import 'package:flutter/material.dart';

import '../utils/SeatState.dart';

class SeatWidgetHelper {
  static const double padding = 2.0;

  /// Static method to create a seat widget with a given seat state and size.
  /// This allows external calls to render a seat without relying on the `SeatModel`.
  static Widget buildSeat({
    required SeatState state,
    double size = 40.0,
  }) {
    final bool hasPadding = state == SeatState.ordered ||
        state == SeatState.selected ||
        state == SeatState.available;

    return Container(
      color: _getSeatColor(SeatState.empty),
      height: size,
      width: size,
      child: Container(
        margin: hasPadding ? EdgeInsets.all(padding) : EdgeInsets.zero,
        decoration: BoxDecoration(
          color: _getSeatColor(state),
          borderRadius: BorderRadius.circular(hasPadding ? padding : 0.0),
        ),
      ),
    );
  }

  /// Helper method to get seat color based on its state.
  static Color _getSeatColor(SeatState state) {
    switch (state) {
      case SeatState.available:
        return Colors.green;
      case SeatState.selected:
        return Colors.blue;
      case SeatState.black:
        return Colors.black;
      case SeatState.ordered:
        return Colors.red;
      case SeatState.empty:
        return Colors.grey.shade300;
      default:
        return Colors.grey.shade300;
    }
  }
}

