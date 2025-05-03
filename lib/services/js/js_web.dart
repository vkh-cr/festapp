// js_web.dart
import 'dart:async';
import 'dart:js' as js;
import 'dart:html' as html;

class JSInterop {
  void callMethod(String method, List args) async {
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

  Future<dynamic> callFutureMethod(String method, List args) async {
    final completer = Completer<dynamic>();

    js.context.callMethod(method, [
      ...args,
      (result) => completer.complete(result),
      (error) => completer.complete(error),
    ]);

    return completer.future;
  }

  String getOSInsideWeb() {
    final userAgent = html.window.navigator.userAgent.toString().toLowerCase();
    if (userAgent.contains("iphone") || userAgent.contains("ipad")) return "ios";
    if (userAgent.contains("android")) return "android";
    return "web";
  }

  void openLinkInNewTab(String link) {
    html.window.open(link, "_blank");
  }

  void changeUrl(String newUrl) {
    html.window.history.replaceState(null, "", newUrl);
  }
}
