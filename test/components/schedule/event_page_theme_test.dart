import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:fstapp/components/schedule/event_page_theme.dart';

void main() {
  test('sliver height does not count the safe area twice', () {
    expect(EventPageTheme.sliverExpandedHeight(320, 59), 261);
  });

  test('collapsed event header follows app brightness', () {
    const base = Color(0xffffa680);

    final light = EventPageTheme.collapsedTint(base, Brightness.light);
    final dark = EventPageTheme.collapsedTint(base, Brightness.dark);

    expect(light.computeLuminance(), greaterThan(0.7));
    expect(dark.computeLuminance(), lessThan(0.2));
  });
}
