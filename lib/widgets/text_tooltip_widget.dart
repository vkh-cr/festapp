import 'package:flutter/material.dart';
import 'package:fstapp/theme_config.dart';

class TextTooltipWidget extends StatelessWidget {
  final String content;
  final Widget child;

  const TextTooltipWidget({
    super.key,
    required this.content,
    required this.child,
  });

  @override
  Widget build(BuildContext context) {
    return Tooltip(
      showDuration: const Duration(seconds: 0),
      message: content,
      decoration: BoxDecoration(
        color: ThemeConfig.whiteColor(context),
        borderRadius: BorderRadius.circular(8.0),
        border: Border.all(
          width: 2,
          color: ThemeConfig.blackColor(context),
        ),
      ),
      textStyle: TextStyle(
        fontSize: 16.0,
        color: ThemeConfig.blackColor(context),
      ),
      verticalOffset: 20.0,
      child: child,
    );
  }
}
