import 'package:flutter/material.dart';
import 'package:fstapp/theme_config.dart';

class TextTooltipWidget extends StatelessWidget {
  final String content;
  final Widget child;
  final TooltipTriggerMode? triggerMode;

  const TextTooltipWidget({
    super.key,
    required this.content,
    required this.child,
    this.triggerMode,
  });

  @override
  Widget build(BuildContext context) {
    return Tooltip(
      triggerMode: triggerMode,
      showDuration: triggerMode == TooltipTriggerMode.tap
          ? const Duration(days: 1)
          : const Duration(seconds: 0),
      message: content,
      decoration: BoxDecoration(
        color: ThemeConfig.whiteColor(context),
        borderRadius: BorderRadius.circular(8.0),
        border: Border.all(
          width: 2,
          color: ThemeConfig.blackColor(context),
        ),
      ),
      textStyle: Theme.of(context).textTheme.bodyMedium?.copyWith(
         color: ThemeConfig.blackColor(context),
      ),
      verticalOffset: 20.0,
      child: child,
    );
  }
}
