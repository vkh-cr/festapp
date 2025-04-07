import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

import 'js/js_interop.dart';

extension ColorString on Color {
  String toHexString() {
    return '#${(a.toInt() & 0xFFFFFF).toRadixString(16).padLeft(6, '0').toUpperCase()}';
  }
}

class WebStylesHelper{
  static final JSInterop jsInterop = JSInterop();
  static void setMetaThemeColor(Color color) {
    if(kIsWeb) {
      jsInterop.callMethod("setMetaThemeColor", [color.toHexString()]);
    }
  }
  static void setBodyBackgroundColor(Color color) {
    if(kIsWeb) {
      jsInterop.callMethod("setBodyBackgroundColor", [color.toHexString()]);
    }
  }
}