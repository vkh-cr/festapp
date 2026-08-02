import 'package:flutter/foundation.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:fstapp/components/map/maplibre/maplibre_native_performance.dart';

void main() {
  test('iOS MapLibre requests the smooth 60 fps render rate', () async {
    String? invokedMethod;
    Map<String, Object>? invokedArguments;

    await MapLibreNativePerformance.configure(
      platform: TargetPlatform.iOS,
      invokeMethod: (method, arguments) async {
        invokedMethod = method;
        invokedArguments = arguments;
        return 1;
      },
    );

    expect(invokedMethod, 'setPreferredFramesPerSecond');
    expect(invokedArguments, const {'framesPerSecond': 60});
  });

  test('non-iOS platforms do not invoke the iOS performance bridge', () async {
    var invoked = false;

    await MapLibreNativePerformance.configure(
      platform: TargetPlatform.android,
      invokeMethod: (method, arguments) async {
        invoked = true;
        return null;
      },
    );

    expect(invoked, isFalse);
  });
}
