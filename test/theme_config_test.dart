import 'package:adaptive_theme/adaptive_theme.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:fstapp/theme_config.dart';

void main() {
  test('dark mode is available but defaults to light mode', () {
    expect(ThemeConfig.isDarkModeEnabled, isTrue);
    expect(ThemeConfig.defaultThemeMode, AdaptiveThemeMode.light);
  });
}
