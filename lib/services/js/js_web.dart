// js_web.dart
import 'dart:js' as js;

class JSInterop {
  Future<void> callMethod(String method, List args) async {
    js.context.callMethod(method, args);
  }

  bool callBoolMethod(String method, List args) {
    return js.context.callMethod(method, args);
  }
}
