import 'package:flutter/material.dart';
import 'package:fstapp/RouterService.dart';

class ScheduleBackButton extends StatelessWidget {
  final Color color;
  final double iconSize;

  const ScheduleBackButton({
    Key? key,
    this.color = Colors.black,
    this.iconSize = 24.0,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    if (RouterService.canNavigateBack(context)) {
      return IconButton(
        icon: Icon(Icons.arrow_back, color: color, size: iconSize),
        onPressed: () => RouterService.scheduleBack(context),
      );
    }
    return SizedBox.shrink();
  }
}
