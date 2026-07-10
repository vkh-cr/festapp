import 'package:flutter/material.dart';

/// Derived cleaning status of a toilet. The order of the enum encodes severity
/// (green < paper < hygiene < contamination); the highest open report wins.
enum CleaningStatus { green, paper, hygiene, contamination }

class CleaningStatusHelper {
  /// place_types.code identifying a toilet (colored on the map by status).
  static const String toiletPlaceTypeCode = 'toilet';

  static const String codeGreen = 'green';
  static const String codePaper = 'paper';
  static const String codeHygiene = 'hygiene';
  static const String codeContamination = 'contamination';

  static CleaningStatus fromCode(String? code) {
    switch (code) {
      case codePaper:
        return CleaningStatus.paper;
      case codeHygiene:
        return CleaningStatus.hygiene;
      case codeContamination:
        return CleaningStatus.contamination;
      case codeGreen:
      default:
        return CleaningStatus.green;
    }
  }

  /// Tile / pin color for a status.
  static Color color(CleaningStatus status) {
    switch (status) {
      case CleaningStatus.green:
        return const Color(0xFF2E7D32); // green
      case CleaningStatus.paper:
        return const Color(0xFFF9A825); // yellow
      case CleaningStatus.hygiene:
        return const Color(0xFFEF6C00); // orange
      case CleaningStatus.contamination:
        return const Color(0xFFC62828); // red
    }
  }

  /// Color for a problem-type code (used by the report dialog buttons).
  static Color colorForType(String type) => color(fromCode(type));

  /// Biohazard marker shown for the most severe (contamination) status.
  static bool showsBiohazard(CleaningStatus status) =>
      status == CleaningStatus.contamination;
}
