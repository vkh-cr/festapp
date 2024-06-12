import 'package:flutter/services.dart';

class VibrateService {
  /// Provides haptic feedback for a successful action.
  static void vibrateOk() {
    HapticFeedback.lightImpact(); // Light impact for success feedback
  }

  /// Provides haptic feedback for a non-successful action.
  static void vibrateNotOk() {
    HapticFeedback.heavyImpact(); // Heavy impact for error feedback
  }
}