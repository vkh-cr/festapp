import 'package:flutter/material.dart';

import '../utils/SeatState.dart';

class SeatWidgetHelper {
  static const double padding = 2.0;
  static const double focusedPadding = 1.0;

  /// Static method to create a seat widget with a given seat state and size.
  /// This allows external calls to render a seat without relying on the `SeatModel`.
  static Widget buildSeat({
    required SeatState state,
    double size = 40.0,
  }) {
    final bool hasPadding = state == SeatState.ordered ||
        state == SeatState.selected ||
        state == SeatState.selected_by_me ||
        state == SeatState.selected_by_me_focused ||
        state == SeatState.available;

    return Container(
      color: hasPadding ? Colors.black.withOpacity(0.2) : _getSeatColor(SeatState.empty),
      height: size,
      width: size,
      child: Container(
        margin: hasPadding ? EdgeInsets.all(state == SeatState.selected_by_me_focused ? focusedPadding : padding) : EdgeInsets.zero,
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
        return Colors.blueAccent;
      case SeatState.selected_by_me:
        return Colors.purple;
      case SeatState.selected_by_me_focused:
        return Colors.purple;
      case SeatState.selected:
        return Colors.black38;
      case SeatState.black:
        return Colors.black87;
      case SeatState.ordered:
        return Colors.black38;
      case SeatState.empty:
        return Colors.black.withOpacity(0.1);
      default:
        return Colors.black.withOpacity(0.1);
    }
  }
}

