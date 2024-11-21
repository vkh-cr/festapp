import 'package:flutter/material.dart';
import 'package:fstapp/dataServices/DbOccasions.dart';
import 'package:fstapp/themeConfig.dart';

class CustomThreeStateCheckbox extends StatelessWidget {
  final String currentState;
  final void Function(String) onStateChanged;
  final bool isEnabled;

  // Optional custom icons for each state
  final IconData? noneStateIcon;
  final IconData? paidStateIcon;
  final IconData? usedStateIcon;

  CustomThreeStateCheckbox({
    Key? key,
    required this.currentState,
    required this.onStateChanged,
    this.isEnabled = true,
    this.noneStateIcon,
    this.paidStateIcon,
    this.usedStateIcon,
  }) : super(key: key);

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
            ? noneStateIcon ?? Icons.check_box_outline_blank // Default icon
            : currentState == DbOccasions.servicePaid
            ? paidStateIcon ?? Icons.check_box_outlined // Default icon
            : usedStateIcon ?? Icons.check_box, // Default icon
        color: isEnabled ? ThemeConfig.blackColor(context) : Colors.grey, // Optional: Disabled color
      ),
    );
  }
}
