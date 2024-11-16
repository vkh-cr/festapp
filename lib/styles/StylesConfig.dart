import 'package:flutter/material.dart';
import 'package:fstapp/themeConfig.dart';

class StylesConfig {
  // Text styles
  static const TextStyle timeLineTabNameTextStyle = TextStyle(fontSize: 15);
  static const TextStyle timeLineSmallTextStyle = TextStyle(fontSize: 15);

  static TextStyle timeLineSplitTextStyle(BuildContext context) => TextStyle(
    color: ThemeConfig.timelineSplitLabelColor(context),
    fontWeight: FontWeight.bold,
    fontSize: 15,
  );

  static const TextStyle normalTextStyle = TextStyle(fontSize: 18);

  // Font size
  static const double normalClickableFontSize = 18;

  // Dimensions
  static const double appMaxWidth = 820;

  // Button styles
  static ButtonStyle mainPageButtonStyle(BuildContext context) =>
      OutlinedButton.styleFrom(
        minimumSize: const Size(70, 50),
        maximumSize: const Size(80, 60),
        tapTargetSize: MaterialTapTargetSize.padded,
        backgroundColor: ThemeConfig.seed2,
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
      );
}