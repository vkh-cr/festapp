import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:fstapp/components/map/map_locate_control.dart';
import 'package:fstapp/components/map/map_strings.dart';

Widget _testApp({
  required bool enabled,
  required bool loading,
  required VoidCallback onPressed,
}) =>
    MaterialApp(
      home: Scaffold(
        body: Stack(
          children: [
            MapLocateControl(
              enabled: enabled,
              loading: loading,
              onPressed: onPressed,
            ),
          ],
        ),
      ),
    );

void main() {
  testWidgets('exposes a localized accessible action and invokes it once',
      (tester) async {
    tester.view.physicalSize = const Size(320, 568);
    tester.view.devicePixelRatio = 1;
    addTearDown(tester.view.resetPhysicalSize);
    addTearDown(tester.view.resetDevicePixelRatio);
    var taps = 0;
    await tester.pumpWidget(_testApp(
      enabled: true,
      loading: false,
      onPressed: () => taps++,
    ));

    expect(find.byTooltip(MapStrings.currentLocation), findsOneWidget);
    expect(tester.getSize(find.byType(IconButton)), const Size.square(48));
    expect(
      tester.getTopRight(find.byType(IconButton)),
      const Offset(304, 72),
    );
    expect(
      tester.getSemantics(find.bySemanticsLabel(MapStrings.currentLocation)),
      matchesSemantics(
        label: MapStrings.currentLocation,
        isButton: true,
        hasEnabledState: true,
        isEnabled: true,
        hasTapAction: true,
      ),
    );

    await tester.tap(find.byType(IconButton));
    expect(taps, 1);
  });

  testWidgets('loading disables the action and shows progress', (tester) async {
    var taps = 0;
    await tester.pumpWidget(_testApp(
      enabled: true,
      loading: true,
      onPressed: () => taps++,
    ));

    expect(find.byType(CircularProgressIndicator), findsOneWidget);
    expect(
        tester.widget<IconButton>(find.byType(IconButton)).onPressed, isNull);

    await tester.tap(find.byType(IconButton));
    expect(taps, 0);
  });
}
