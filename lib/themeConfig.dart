import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';

class ThemeConfig {
  static bool get isDarkMode => true;

  // Base theme to hold common properties
  static final fontFamily = "Futura";
  static final ThemeData baseTheme = ThemeData(
    fontFamily: fontFamily,
    useMaterial3: false,
    primarySwatch: ThemeConfig.seedColor.getMaterialColorFromColor(),
    colorScheme: ColorScheme.fromSwatch(
        primarySwatch: ThemeConfig.seedColor.getMaterialColorFromColor(),
        ).copyWith(
      surface: surfaceColor,
      onSurface: blackColor,
    ),
    scaffoldBackgroundColor: backgroundColor,
    appBarTheme: AppBarTheme(color: appBarColor),
    tabBarTheme: TabBarTheme(indicatorColor: seedColor)
  );

  // Light theme configuration
  static final ThemeData lightTheme = baseTheme;

  // Dark theme configuration
  static final ThemeData darkTheme = ThemeData.dark(
    useMaterial3: baseTheme.useMaterial3,
  ).copyWith(
    scaffoldBackgroundColor: baseTheme.scaffoldBackgroundColor,
    textTheme: ThemeData.dark().textTheme.apply(fontFamily: fontFamily),
    primaryTextTheme: ThemeData.dark().primaryTextTheme.apply(fontFamily: fontFamily),
    primaryColor: baseTheme.primaryColor,
    colorScheme: baseTheme.colorScheme.copyWith(
      brightness: Brightness.dark,
    ),
    appBarTheme: baseTheme.appBarTheme,
    tabBarTheme: baseTheme.tabBarTheme
  );

  static ThemeData get currentTheme => isDarkMode ? darkTheme : lightTheme;

  //frosty style
  // Dynamic color getters for theme-based color adaptation
  static Color get backgroundColor => isDarkMode ? dddBackground : Colors.white;
  static Color get surfaceColor => grey200;
  static Color get seed1 => const Color(0xFF0D0D0D);
  static Color get seed2 => const Color(0xFF4465A6);
  static Color get seed3 => const Color(0xFF80BDF2);
  static Color get seed4 => const Color(0xFF253759);
  static Color get seedColor => isDarkMode ? seed3 : seed4;

  static const int primaryColor = 0xFF0D0D0D;
  static Color get color1 => seed1;
  static Color get color2 => seed2;
  static Color get color3 => seed3;
  static Color get color4 => seed4;
  static Color get attentionColor => const Color(0xFF8B0000);

  static Color get dddBackground => const Color(0xFF1e1f22);
  static Color get dddBackgroundDarker => const Color(0xFF191a1e);

  static Color get dddText => const Color(0xFFbcbec4);

  static Color get darkColor => isDarkMode ? dddText : color1;
  static Color get blackColor => isDarkMode ? dddText : Colors.black;
  static Color get whiteColor => isDarkMode ? dddBackground : Colors.white;
  static Color get whiteColorDarker => isDarkMode ? dddBackgroundDarker : whiteColor.withOpacity(0.9);

  static Color get timelineAll => darkColor;
  static Color get timelineSplitLabelColor => timelineAll;
  static Color get timelineTabLabelColor => timelineAll;
  static Color get timelineTabIndicatorColor => timelineAll;
  static Color get timelineColor => timelineAll;
  static Color get timelineTextColor => blackColor;

  static Color get mapPinColor => color1;
  static Color get newsPageColor => backgroundColor;
  static Color get infoPageColor => backgroundColor;
  static Color get profileButtonColor => isDarkMode ? grey600 : color4;

  static Color get appBarColor => isDarkMode ? bottomNavBackgroundColor : color1;
  static Color get bottomNavBackgroundColor => color1;
  static Color get bottomNavSelectedItemColor => color3;
  static Color get bottomNavUnselectedItemColor => Colors.grey;

  static Color  upperNavText(BuildContext context) => isDarkMode ? Theme.of(context).colorScheme.onSurface : Theme.of(context).colorScheme.surface;


  static Color get timetableTimeLineColor => appBarColor;
  static Color get timetableSelectedColor => color2;
  static Color get timetableTimeSplitColor => Colors.red;
  static Color get timetableBackground1 => whiteColor;
  static Color get timetableBackground2 => whiteColorDarker;
  static double get timetableTimeSplitOpacity => 0.15;

  static Color get button1Color => color1;
  static Color get button2Color => color3;
  static Color get button3Color => color2;
  static Color get button4Color => color4;
  static Color get bigButtonColor => isDarkMode ? Color(0xFF5A5F6B) : Color(0xFFDCE2ED);
  static Color get qrButtonColor => isDarkMode ? grey380 : bigButtonColor;

  static Color get grey800 => isDarkMode ? Colors.grey[200]! : Colors.grey[800]!;
  static Color get grey600 => isDarkMode ? Colors.grey[400]! : Colors.grey[600]!;
  static Color get grey380 => Colors.black38;
  static Color get grey200 => isDarkMode ? Colors.grey[800]! : Colors.grey[200]!;
  static Color get grey150 => isDarkMode ? Colors.grey[850]! : Colors.grey[200]!;

  static Color get defaultHtmlViewColor => blackColor;

  // Function for eventTypeColor
  static Color eventTypeToColor(String? type) {
    switch (type) {
      case "music":
        return color2;
      case "talk":
        return color3;
      case "other":
        return color4;
    }
    return color2;
  }

  static Color getShade(Color color, {bool darker = false, double value = .1}) {
    assert(value >= 0 && value <= 1, 'shade values must be between 0 and 1');

    final hsl = HSLColor.fromColor(color);
    final hslDark = hsl.withLightness(
      (darker ? (hsl.lightness - value) : (hsl.lightness + value))
          .clamp(0.0, 1.0),
    );

    return hslDark.toColor();
  }
}


extension ColorExtensions on Color {
  /// Returns a [MaterialColor] from a [Color] object
  MaterialColor getMaterialColorFromColor() {
    final colorShades = <int, Color>{
      50: ThemeConfig.getShade(this, value: 0.5),
      100: ThemeConfig.getShade(this, value: 0.4),
      200: ThemeConfig.getShade(this, value: 0.3),
      300: ThemeConfig.getShade(this, value: 0.2),
      400: ThemeConfig.getShade(this, value: 0.1),
      500: this, //Primary value
      600: ThemeConfig.getShade(this, value: 0.1, darker: true),
      700: ThemeConfig.getShade(this, value: 0.15, darker: true),
      800: ThemeConfig.getShade(this, value: 0.2, darker: true),
      900: ThemeConfig.getShade(this, value: 0.25, darker: true),
    };
    return MaterialColor(value, colorShades);
  }

  Color withOpacityBlack(double factor) {
    assert(factor >= 0 && factor <= 1, 'Factor must be between 0 and 1');

    // Reverse the factor so that 1 keeps the color unchanged and 0 moves it to black
    final adjustedFactor = (factor * 1.4).clamp(0.0, 1.0);

    // Blend each component towards black using the adjusted factor
    final int r = (red * adjustedFactor).round();
    final int g = (green * adjustedFactor).round();
    final int b = (blue * adjustedFactor).round();

    return Color.fromARGB(alpha, r, g, b);
  }

  Color withOpacityWhite(double factor) {
    assert(factor >= 0 && factor <= 1, 'Factor must be between 0 and 1');

    // Reverse the factor so that 1 keeps the color unchanged and 0 moves it to white
    final adjustedFactor = 1 - factor;

    // Blend each component towards white using the adjusted factor
    final int r = red + ((255 - red) * adjustedFactor).round();
    final int g = green + ((255 - green) * adjustedFactor).round();
    final int b = blue + ((255 - blue) * adjustedFactor).round();

    return Color.fromARGB(alpha, r, g, b);
  }

  Color withOpacityUniversal(BuildContext context, double factor) {
    return ThemeConfig.isDarkMode ? withOpacityBlack(factor) : withOpacityWhite(factor);
  }
}


