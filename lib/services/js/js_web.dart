// lib/services/js/js_web.dart

import 'dart:async';
import 'dart:js_interop';
import 'dart:js_interop_unsafe';
import 'package:web/web.dart' as web;

/// Converts a Dart value into something Dart2Wasm’s JS interop will accept.
JSAny? _toJSAny(dynamic v) {
  if (v == null) return null;
  if (v is JSAny?) return v;
  if (v is String) return v.toJS;
  if (v is bool)   return v.toJS;
  if (v is int)    return v.toJS;
  if (v is double) return v.toJS;
  // TODO: recursively handle List/Map if you need JS arrays or objects
  throw ArgumentError('Cannot convert `${v.runtimeType}` to JSAny');
}

class JSInterop {
  /// globalThis[method](...args)
  void callMethod(String method, List<dynamic> args) {
    final jsArgs = args.map(_toJSAny).toList();
    globalContext.callMethodVarArgs<JSAny?>(method.toJS, jsArgs);
  }

  /// returns globalThis[method](...args) as a Dart bool
  bool callBoolMethod(String method, List<dynamic> args) {
    final jsArgs = args.map(_toJSAny).toList();
    final JSAny? result = globalContext.callMethodVarArgs<JSAny?>(
      method.toJS,
      jsArgs,
    );
    return result.dartify() as bool;
  }

  /// calls a JS function that expects (resolve, reject) callbacks,
  /// completes true on resolve, false on reject
  Future<bool> callFutureBoolMethod(String method, List<dynamic> args) {
    final completer = Completer<bool>();
    final jsArgs = args.map(_toJSAny).toList();

    void onSuccess(JSAny? r) => completer.complete(r.dartify() as bool);
    void onError(JSAny? _)    => completer.complete(false);

    globalContext.callMethodVarArgs<JSAny?>(
      method.toJS,
      [
        ...jsArgs,
        onSuccess.toJS,
        onError.toJS,
      ],
    );
    return completer.future;
  }

  /// calls a JS function that expects (resolve, reject) callbacks,
  /// completes with whatever JS passes to resolve or reject
  Future<dynamic> callFutureMethod(String method, List<dynamic> args) {
    final completer = Completer<dynamic>();
    final jsArgs = args.map(_toJSAny).toList();

    void onSuccess(JSAny? r) => completer.complete(r.dartify());
    void onError(JSAny? e)   => completer.complete(e.dartify());

    globalContext.callMethodVarArgs<JSAny?>(
      method.toJS,
      [
        ...jsArgs,
        onSuccess.toJS,
        onError.toJS,
      ],
    );
    return completer.future;
  }

  /// “ios” / “android” / “web” based on navigator.userAgent
  String getOSInsideWeb() {
    final ua = web.window.navigator.userAgent.toLowerCase();
    if (ua.contains('iphone') || ua.contains('ipad')) return 'ios';
    if (ua.contains('android')) return 'android';
    return 'web';
  }

  /// window.open(link, "_blank")
  void openLinkInNewTab(String link) {
    web.window.open(link, '_blank');
  }

  /// history.replaceState(null, "", newUrl)
  void changeUrl(String newUrl) {
    web.window.history.replaceState(null, '', newUrl);
  }
}
