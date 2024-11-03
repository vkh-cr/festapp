import 'package:flutter/material.dart';
import 'package:fstapp/dataServices/DbOccasions.dart';

class CustomThreeStateCheckbox extends StatelessWidget {
  final String currentState;
  final void Function(String) onStateChanged;
  final bool isEnabled;

  CustomThreeStateCheckbox({
    Key? key,
    required this.currentState,
    required this.onStateChanged,
    this.isEnabled = true,
  }) : super(key: key);

  // Define colors for each state
  Color _getBackgroundColor(String state) {
    switch (state) {
      // case DbOccasions.servicePaid:
      //   return Colors.green.withOpacity(0.5); // light green background
      // case DbOccasions.serviceUsed:
      //   return Colors.blue.withOpacity(0.5).changeColorLightness(0.2); // light blue background
      case DbOccasions.serviceNone:
      default:
        return Colors.grey.withOpacity(0.5); // light grey background
    }
  }

  // Define the next state in the cycle
  String _getNextState(String currentState) {
    switch (currentState) {
      case DbOccasions.serviceNone:
        return DbOccasions.servicePaid;
      case DbOccasions.servicePaid:
        return DbOccasions.serviceUsed;
      case DbOccasions.serviceUsed:
      default:
        return DbOccasions.serviceNone;
    }
  }

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: isEnabled
          ? () {
        String nextState = _getNextState(currentState);
        onStateChanged(nextState);
      }
          : null,
      child: Icon(
        currentState == DbOccasions.serviceNone
            ? Icons.check_box_outline_blank
            : currentState == DbOccasions.servicePaid
            ? Icons.check_box_outlined
            : Icons.check_box,
      ),
    );
  }
}
