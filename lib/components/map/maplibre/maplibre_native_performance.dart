import 'package:flutter/foundation.dart';
import 'package:flutter/services.dart';

typedef MapLibreMethodInvoker = Future<Object?> Function(
  String method,
  Map<String, Object> arguments,
);

class MapLibreNativePerformance {
  static const preferredFramesPerSecond = 60;
  static const _channel = MethodChannel('festapp/maplibre_performance');

  static Future<void> configure({
    TargetPlatform? platform,
    MapLibreMethodInvoker? invokeMethod,
  }) async {
    if ((platform ?? defaultTargetPlatform) != TargetPlatform.iOS) return;
    final invoke = invokeMethod ?? _invokeMethod;
    await invoke('setPreferredFramesPerSecond', const {
      'framesPerSecond': preferredFramesPerSecond,
    });
  }

  static Future<Object?> _invokeMethod(
    String method,
    Map<String, Object> arguments,
  ) =>
      _channel.invokeMethod<Object?>(method, arguments);
}
