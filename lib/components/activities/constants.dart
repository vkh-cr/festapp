import 'package:flutter/material.dart';
import 'package:flutter/services.dart';


// Constants
const double kTimelineLabelWidth = 160.0; // Increased slightly for more space
const Duration kMinTimeLength = Duration(minutes: 5);
const Duration kSnapStepCoarse = Duration(minutes: 15);
const Duration kSnapStepFine = Duration(minutes: 5);
// New: Default duration for user assignments
const Duration kDefaultUserAssignmentDuration = Duration(hours: 4);


const double kDateHeaderHeightConstant = 22.0;
const double kTimeTickAreaHeightConstant = 28.0;
const double kTotalTimelineRulerHeightConstant = kDateHeaderHeightConstant + kTimeTickAreaHeightConstant;

// New: Darker color variants for user assignments and avatars
final List<Color> darkUserColors = [
  Colors.red.shade700, Colors.pink.shade700, Colors.purple.shade700, Colors.deepPurple.shade700,
  Colors.indigo.shade700, Colors.blue.shade700, Colors.lightBlue.shade800, Colors.cyan.shade800,
  Colors.teal.shade700, Colors.green.shade700, Colors.lightGreen.shade800, Colors.lime.shade900,
  Colors.amber.shade800, Colors.orange.shade800, Colors.deepOrange.shade700,
  Colors.brown.shade600, Colors.blueGrey.shade600,
  Colors.red.shade900, Colors.pink.shade900, Colors.purple.shade900, Colors.deepPurple.shade900,
  Colors.indigo.shade900, Colors.blue.shade900,
  Colors.teal.shade900, Colors.green.shade900,
  Colors.brown.shade800, Colors.blueGrey.shade800
];

// Helper for dark mode detection
bool isDarkMode(BuildContext context) => Theme.of(context).brightness == Brightness.dark;