import 'package:flutter/material.dart';
import 'package:fstapp/theme_config.dart';

import '../utils/seat_state.dart';

class SeatWidgetHelper {
  static const double padding = 2.5;
  static const double focusedPadding = 0.8;

  /// Static method to create a seat widget with a given seat state and size.
  /// This allows external calls to render a seat without relying on the `SeatModel`.
  static Widget buildSeat({
    required BuildContext context,
    required SeatState state,
    bool isHighlighted = false,
    double size = 40.0,
  }) {
    final bool hasPadding = state == SeatState.ordered ||
        state == SeatState.selected ||
        state == SeatState.selected_by_me ||
        state == SeatState.used ||
        state == SeatState.available ||
        (isHighlighted && state == SeatState.empty);

    return Container(
      color: hasPadding ? Colors.black.withOpacity(0) : getSeatColor(context, SeatState.empty),
      height: size,
      width: size,
      child: Container(
        margin: EdgeInsets.all(state == SeatState.selected_by_me ? focusedPadding : (hasPadding ? padding : 0.0)),
        decoration: BoxDecoration(
          color: getSeatColor(context, state),
          borderRadius: BorderRadius.circular(hasPadding ? padding : 0.0),
          border: isHighlighted
              ? Border.all(color: Colors.orange, width: 2.0)
              : null,
        ),
        child: state == SeatState.selected_by_me
            ? Center(
          child: Icon(
            Icons.check,
            size: size * 0.7,
            color: Colors.white,
          ),
        )
            : state == SeatState.ordered
            ? Center(
          child: SizedBox(
            width: size * 0.45,
            height: size * 0.45,
            child: CustomPaint(
              painter: _XPainter(
                color: Colors.black,
                strokeWidth: 0.4,
              ),
            ),
          ),
        )
            : null,
      ),
    );
  }

  /// Helper method to get seat color based on its state.
  static Color getSeatColor(BuildContext context, SeatState state) {
    switch (state) {
      case SeatState.available:
        return ThemeConfig.darkGreen;
      case SeatState.selected_by_me:
        return ThemeConfig.darkGreen;
      case SeatState.selected:
        return Colors.black26;
      case SeatState.black:
        return Colors.black87;
      case SeatState.used:
        return ThemeConfig.blueColor();
      case SeatState.ordered:
        return Colors.black12;
      case SeatState.empty:
        return Colors.black.withOpacity(0);
      default:
        return Colors.black.withOpacity(0);
    }
  }
}

/// A custom painter to draw a thin 'X'.
/// This class can be at the bottom of your file.
class _XPainter extends CustomPainter {
  final Color color;
  final double strokeWidth;

  _XPainter({required this.color, required this.strokeWidth});

  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()
      ..color = color
      ..strokeWidth = strokeWidth
      ..style = PaintingStyle.stroke
      ..strokeCap = StrokeCap.butt;

    canvas.drawLine(
      Offset.zero,
      Offset(size.width, size.height),
      paint,
    );

    canvas.drawLine(
      Offset(size.width, 0),
      Offset(0, size.height),
      paint,
    );
  }

  @override
  bool shouldRepaint(covariant _XPainter oldDelegate) {
    return oldDelegate.color != color || oldDelegate.strokeWidth != strokeWidth;
  }
}