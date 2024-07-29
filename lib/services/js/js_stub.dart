// js_stub.dart
class JSInterop {
  Future<void> callMethod(String method, List args) async {
    throw UnsupportedError('JS interop is not supported on this platform');
  }

  bool callBoolMethod(String method, List args) {
    throw UnsupportedError('JS interop is not supported on this platform');
  }

  Future<bool> callFutureBoolMethod(String method, List args) {
    throw UnsupportedError('JS interop is not supported on this platform');
  }
}
