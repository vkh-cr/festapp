import 'package:flutter/material.dart';
import 'package:fstapp/router_service.dart';
import 'package:fstapp/theme_config.dart';

class PopButton extends StatelessWidget {
  Color? color;
  final double iconSize;

  PopButton({
    super.key,
    this.color,
    this.iconSize = 24.0,
  });

  @override
  Widget build(BuildContext context) {
    color ??= ThemeConfig.appBarColorNegative();
    if (RouterService.canPop(context)) {
      return IconButton(
        icon: Icon(Icons.arrow_back, color: Theme.of(context).navigationBarTheme.indicatorColor, size: iconSize),
        onPressed: () => RouterService.popOrHome(context),
      );
    }
    return SizedBox.shrink();
  }
}