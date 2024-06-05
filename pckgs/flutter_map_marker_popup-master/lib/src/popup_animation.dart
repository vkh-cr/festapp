import 'package:flutter/animation.dart';

class PopupAnimation {
  final Duration duration;
  final Curve curve;

  const PopupAnimation.fade({
    this.duration = const Duration(milliseconds: 300),
    this.curve = Curves.ease,
  });
}
