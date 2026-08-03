import 'package:flutter/material.dart';
import 'package:fstapp/theme_config.dart';

class EventPageTheme {
  static double sliverExpandedHeight(
      double measuredContentHeight, double topInset) {
    final height = measuredContentHeight - topInset;
    return height > 0 ? height : 0;
  }

  static Color collapsedTint(Color base, Brightness brightness) {
    if (brightness == Brightness.dark) {
      return base.changeColorSaturation(0.25).changeColorLightness(0.16);
    }
    return base.changeColorLightness(0.90);
  }

  static ({Color background, Color foreground}) participantPillColors({
    required Color headerForeground,
    required Color primary,
    required Color onPrimary,
    required bool isSignedIn,
  }) {
    if (isSignedIn) {
      return (background: primary, foreground: onPrimary);
    }
    return (
      background: headerForeground == Colors.white
          ? headerForeground.withValues(alpha: 0.22)
          : ThemeConfig.seed1,
      foreground: Colors.white,
    );
  }
}
