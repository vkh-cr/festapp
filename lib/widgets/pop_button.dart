import 'package:flutter/material.dart';
import 'package:fstapp/router_service.dart';

class PopButton extends StatelessWidget {
  final Color? color;
  final double iconSize;

  const PopButton({
    Key? key,
    this.color,
    this.iconSize = 24.0,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    if (RouterService.canPop(context)) {
      return IconButton(
        icon: Icon(Icons.arrow_back, color: Theme.of(context).navigationBarTheme.indicatorColor, size: iconSize),
        onPressed: () => RouterService.popOrHome(context),
      );
    }
    return SizedBox.shrink();
  }
}