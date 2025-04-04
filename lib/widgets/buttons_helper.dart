import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/app_config.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/theme_config.dart';

class ButtonsHelper {
  static getAddToMyProgramButton(
      bool? canSaveToMyProgram,
      Future<void> Function() addToMyProgram,
      Future<void> Function() removeFromMyProgram,
      [Color? colorIn, Color? colorOut]) {
    return [
      Visibility(
          visible:
              AppConfig.isOwnProgramSupported && canSaveToMyProgram == true,
          child: Padding(
            padding: const EdgeInsets.all(6),
            child: IconButton(
                onPressed: () async {
                  await addToMyProgram();
                },
                icon: Icon(Icons.add_circle_outline, color: colorOut)),
          )),
      Visibility(
          visible:
              AppConfig.isOwnProgramSupported && canSaveToMyProgram == false,
          child: Padding(
            padding: const EdgeInsets.all(6),
            child: IconButton(
                onPressed: () async {
                  await removeFromMyProgram();
                },
                icon: Icon(
                  Icons.check_circle,
                  color: colorIn,
                )),
          )),
    ];
  }

  static Widget bigButton({
    required BuildContext context,
    required String label,
    VoidCallback? onPressed,
    Color? color,
    Color textColor = Colors.black,
    bool isEnabled = true,
    double height = 50.0,
    double width = 250.0,
  }) {
    color ??= ThemeConfig.bigButtonColor(context);
    return Container(
      height: height,
      width: width,
      decoration: BoxDecoration(
        color: isEnabled ? color : ThemeConfig.grey380(context),
        borderRadius: BorderRadius.circular(20),
      ),
      child: TextButton(
        onPressed: isEnabled ? onPressed : null,
        child: Text(
          label,
          style: TextStyle(color: textColor, fontSize: 25),
        ),
      ),
    );
  }

  static Widget bottomBarButton({required String text, required VoidCallback? onPressed}) {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: MaterialButton(
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
        color: Colors.black87,
        onPressed: onPressed,
        child: Text(
          text,
          style: TextStyle(color: Colors.grey.shade200),
        ),
      ),
    );
  }

  static Widget buildReferenceButton({
    required BuildContext context,
    required VoidCallback onPressed,
    required String label,
    IconData? icon, // Optional icon parameter
    Color? buttonColor,
    Color? iconColor,
    Color? textColor,
  }) {
    return Container(
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(12),
        color: Colors.transparent,
      ),
      child: IntrinsicWidth(
        child: TextButton.icon(
          onPressed: onPressed,
          iconAlignment: IconAlignment.end,
          icon: Icon(
            icon ?? Icons.qr_code, // Default to QR code icon if none provided
            color: iconColor ?? ThemeConfig.blackColor(context), // Set icon color
          ),
          label: Text(
            label,
            style: TextStyle(
              fontSize: 16,
              fontWeight: FontWeight.bold,
              color: textColor ?? ThemeConfig.blackColor(context), // Set label color
            ),
          ).tr(),
          style: TextButton.styleFrom(
            padding: const EdgeInsets.all(12.0),
            backgroundColor: buttonColor ?? ThemeConfig.qrButtonColor(context), // Set button color
            minimumSize: const Size.fromHeight(60),
            shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(12),
            ),
          ),
        ),
      ),
    );
  }

  static Widget primaryButton({
    required BuildContext context,
    required VoidCallback? onPressed,
    required String label,
    bool isLoading = false,
    double height = 50.0,
    double? width,
    EdgeInsetsGeometry? padding,
    double borderRadius = 8.0,
    Widget? prefixIcon,
    Widget? suffixIcon,
    bool? isEnabled,
  }) {
    return SizedBox(
      height: height,
      width: width ?? double.infinity,
      child: ElevatedButton(
        onPressed: (isEnabled ?? true) && !isLoading ? onPressed : null,
        style: ElevatedButton.styleFrom(
          padding: padding ?? EdgeInsets.symmetric(horizontal: 16.0),
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(borderRadius),
          ),
          backgroundColor: (isEnabled ?? true)
              ? Theme.of(context).primaryColor
              : Theme.of(context).disabledColor,
          foregroundColor: Theme.of(context).colorScheme.onPrimary,
          elevation: (isEnabled ?? true) && !isLoading ? 4.0 : 0,
          shadowColor: Colors.black26,
        ),
        child: isLoading
            ? CircularProgressIndicator(
          valueColor: AlwaysStoppedAnimation<Color>(
            Theme.of(context).colorScheme.onPrimary,
          ),
        )
            : Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            if (prefixIcon != null) ...[
              prefixIcon,
              const SizedBox(width: 8.0),
            ],
            Text(
              label.tr(),
              style: TextStyle(
                fontSize: 18,
                fontWeight: FontWeight.bold,
              ),
            ),
            if (suffixIcon != null) ...[
              const SizedBox(width: 8.0),
              suffixIcon,
            ],
          ],
        ),
      ),
    );
  }
}
