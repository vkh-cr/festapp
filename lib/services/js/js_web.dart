// js_web.dart
import 'dart:async';
import 'dart:js' as js;

class JSInterop {
  Future<void> callMethod(String method, List args) async {
    js.context.callMethod(method, args);
  }

  bool callBoolMethod(String method, List args) {
    return js.context.callMethod(method, args);
  }

  Future<bool> callFutureBoolMethod(String method, List args) async {
    final completer = Completer<bool>();

    js.context.callMethod(method, [
          ...args,
          (result) => completer.complete(result),
          (error) => completer.complete(false),
    ]);

    return completer.future;
  }
}
