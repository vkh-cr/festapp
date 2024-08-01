import 'package:flutter/material.dart';

import 'js/js_interop.dart';

extension ColorString on Color {
  String toHexString() {
    return '#${(value & 0xFFFFFF).toRadixString(16).padLeft(6, '0').toUpperCase()}';
  }
}

class StylesHelper{
  static final JSInterop jsInterop = JSInterop();
  static void setMetaThemeColor(Color color) {
    jsInterop.callMethod("setMetaThemeColor", [color.toHexString()]);
  }
}