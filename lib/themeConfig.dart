import 'package:flutter/material.dart';

class ThemeConfig {
  static bool isDarkMode(BuildContext context) => Theme.of(context).brightness == Brightness.dark;

  // Base theme to hold common properties
  static final fontFamily = "Futura";
  static ThemeData baseTheme() => ThemeData(
      fontFamily: fontFamily,
      useMaterial3: false,
      primarySwatch: ThemeConfig.lllPrimary.getMaterialColorFromColor(),
      colorScheme: ColorScheme.fromSwatch(
        primarySwatch: ThemeConfig.lllPrimary.getMaterialColorFromColor(),
      ).copyWith(
        surface: seed2.changeColorSaturation(0.2).changeColorLightness(0.86),
        onSurface: Colors.black,
      ),
      scaffoldBackgroundColor: lllBackground,
      appBarTheme: AppBarTheme(color: appBarColor()),
      tabBarTheme: TabBarTheme(indicatorColor: lllPrimary)
  );

  // Dark theme configuration
  static ThemeData darkTheme(ThemeData baseTheme) => ThemeData.dark(
    useMaterial3: baseTheme.useMaterial3,
  ).copyWith(
      scaffoldBackgroundColor: dddBackground,
      textTheme: ThemeData.dark().textTheme.apply(fontFamily: fontFamily),
      primaryTextTheme: ThemeData.dark().primaryTextTheme.apply(fontFamily: fontFamily),
      primaryColor: dddPrimary,
      colorScheme: ColorScheme.fromSwatch(
        primarySwatch: ThemeConfig.dddPrimary.getMaterialColorFromColor(),
      ).copyWith(
        brightness: Brightness.dark,
        surface: dddPrimary.changeColorSaturation(0.06).changeColorLightness(0.20),
        onSurface: dddText,
      ),
      appBarTheme: AppBarTheme(color: appBarColor()),
      tabBarTheme: TabBarTheme(indicatorColor: dddPrimary)
  );

  // Dynamic color methods with BuildContext for theme-based color adaptation
  static Color backgroundColor(BuildContext context) => isDarkMode(context) ? dddBackground : lllBackground;
  static Color surfaceColor(BuildContext context) => grey200(context);
  static Color seed1 = const Color(0xFF0D0D0D);
  static Color seed2 = const Color(0xFF80BDF2);
  static Color seed3 = const Color(0xFF4465A6);
  static Color seed4 = const Color(0xFF253759);

  static Color attentionColor(BuildContext context) => const Color(0xFF8B0000);

  static Color dddPrimary = seed2;
  static Color lllPrimary = seed3;

  static Color dddBackground = seed3.changeColorSaturation(0.08).changeColorLightness(0.14);
  static Color lllBackground = seed2.changeColorSaturation(0.10).changeColorLightness(0.92);
  static Color dddText = seed3.changeColorSaturation(0.1).changeColorLightness(0.82);

  static Color dddBackgroundDarker = const Color(0xFF191a1e);

  static Color greenColor() => Colors.green.changeColorLightness(0.3).changeColorSaturation(0.5);
  static Color redColor(BuildContext context) => isDarkMode(context) ? Color(0xFFff5252) : Color(0xFFd32f2f);
  static Color darkColor(BuildContext context) => isDarkMode(context) ? dddText : seed1;
  static Color blackColor(BuildContext context) => isDarkMode(context) ? dddText : Colors.black;
  static Color whiteColor(BuildContext context) => isDarkMode(context) ? dddBackground : Colors.white;
  static Color whiteTextColor(BuildContext context) => isDarkMode(context) ? dddText : Colors.white;

  static Color whiteColorDarker(BuildContext context) => isDarkMode(context) ? dddBackgroundDarker : whiteColor(context).withValues(alpha: 0.9);

  static Color timelineAll(BuildContext context) => isDarkMode(context) ? seed2.changeColorSaturation(0.6) : seed3.changeColorSaturation(0.4).changeColorLightness(0.4);
  static Color timelineSplitLabelColor(BuildContext context) => timelineAll(context);
  static Color timelineTabLabelColor(BuildContext context) => timelineAll(context);
  static Color timelineTabIndicatorColor(BuildContext context) => timelineAll(context);
  static Color timelineColor(BuildContext context) => timelineAll(context);
  static Color timelineTextColor(BuildContext context) => blackColor(context);
  static Color timelineAddNewEventColor(BuildContext context) => timelineAll(context);

  static Color mapPinColor(BuildContext context) => appBarColor();
  static Color newsPageColor(BuildContext context) => backgroundColor(context);
  static Color infoPageColor(BuildContext context) => backgroundColor(context);
  static Color profileButtonColor(BuildContext context) => appBarColor();
  static Color profileButtonTextColor(BuildContext context) => isDarkMode(context) ? darkColor(context) : Colors.grey;

  static Color appBarColor() => seed3.changeColorSaturation(0.4).changeColorLightness(0.10);
  static Color bottomNavBackgroundColor(BuildContext context) => appBarColor();
  static Color bottomNavSelectedItemColor(BuildContext context) => seed2;
  static Color bottomNavUnselectedItemColor(BuildContext context) => Colors.grey;

  static Color upperNavText(BuildContext context) => isDarkMode(context) ? Theme.of(context).colorScheme.onSurface : Theme.of(context).colorScheme.surface;

  static Color timetableTimeLineColor(BuildContext context) => appBarColor();
  static Color timetableSelectedColor(BuildContext context, Color color) => isDarkMode(context) ?
      color.changeColorSaturation(0.7).changeColorLightness(0.8) :
      color.changeColorSaturation(0.5).changeColorLightness(0.6)
  ;
  static Color timetableUnselectedColor(BuildContext context, Color color) => isDarkMode(context) ?
      color.changeColorSaturation(0.1).changeColorLightness(0.3) :
      color.changeColorSaturation(0.2).changeColorLightness(0.6);
  static Color timetableTimeSplitColor(BuildContext context) => Colors.red;
  static Color timetableBackground1(BuildContext context) => whiteColor(context);
  static Color timetableBackground2(BuildContext context) => whiteColorDarker(context);
  static Color timetableBackgroundOutside(BuildContext context) => backgroundColor(context);
  static double get timetableTimeSplitOpacity => 0.15;

  static Color bigButtonColor(BuildContext context) => isDarkMode(context) ? Color(0xFF5A5F6B) : Color(0xFFDCE2ED);
  static Color qrButtonColor(BuildContext context) => isDarkMode(context) ? grey380(context) : bigButtonColor(context);
  static Color songButtonColor(BuildContext context) => isDarkMode(context) ? seed3.changeColorSaturation(0.2) : seed3.changeColorSaturation(0.2);

  static Color grey800(BuildContext context) => isDarkMode(context) ? Colors.grey[200]! : Colors.grey[800]!;
  static Color grey600(BuildContext context) => isDarkMode(context) ? Colors.grey[400]! : Colors.grey[600]!;
  static Color grey380(BuildContext context) => Colors.black38;
  static Color grey200(BuildContext context) => isDarkMode(context) ? Colors.grey[800]! : Colors.grey[200]!;
  static Color grey150(BuildContext context) => isDarkMode(context) ? Colors.grey[850]! : Colors.grey[200]!;

  static Color defaultHtmlViewColor(BuildContext context) => blackColor(context);
  static Color htmlLinkColor(BuildContext context) => isDarkMode(context) ? seed2 : seed3;
  static Color correctGuessColor(BuildContext context) => isDarkMode(context) ? seed3 : seed4;

  // Function for eventTypeColor
  static Color eventTypeToColor(BuildContext context, String? type) {
    switch (type) {
      case "music":
        return seed2;
      case "talk":
        return seed3;
      case "other":
        return seed4;
    }
    return appBarColor();
  }

  static Color eventTypeToColorTimetable(BuildContext context, String? type) {
    return eventTypeToColor(context, type);
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

    final adjustedFactor = (factor * 1.4).clamp(0.0, 1.0);

    final int r = (red * adjustedFactor).round();
    final int g = (green * adjustedFactor).round();
    final int b = (blue * adjustedFactor).round();

    return Color.fromARGB(alpha, r, g, b);
  }

  Color withOpacityWhite(double factor) {
    assert(factor >= 0 && factor <= 1, 'Factor must be between 0 and 1');

    final adjustedFactor = 1 - factor;

    final int r = red + ((255 - red) * adjustedFactor).round();
    final int g = green + ((255 - green) * adjustedFactor).round();
    final int b = blue + ((255 - blue) * adjustedFactor).round();

    return Color.fromARGB(alpha, r, g, b);
  }

  Color withOpacityUniversal(BuildContext context, double factor) {
    return ThemeConfig.isDarkMode(context) ? withOpacityBlack(factor) : withOpacityWhite(factor);
  }

  Color changeColorSaturation(double newSaturationValue) => HSLColor.fromColor(this).withSaturation(newSaturationValue).toColor();
  Color changeColorLightness(double newLightnessValue) => HSLColor.fromColor(this).withLightness(newLightnessValue).toColor();

}
