import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/appConfig.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/themeConfig.dart';

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
    required String label,
    VoidCallback? onPressed,
    Color? color,
    Color textColor = Colors.black,
    bool isEnabled = true,
    double height = 50.0,
    double width = 250.0,
  }) {
    color ??= ThemeConfig.bigButtonColor;
    return Container(
      height: height,
      width: width,
      decoration: BoxDecoration(
        color: isEnabled ? color : ThemeConfig.grey380,
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

  static Widget buildQRCodeButton({required BuildContext context, required VoidCallback onPressed, required String label, Color? buttonColor}) {
    return Container(
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(12),
        color: Colors.transparent,
      ),
      child: IntrinsicWidth(
        child: TextButton.icon(
          onPressed: onPressed,
          iconAlignment: IconAlignment.end,
          icon: const Icon(Icons.qr_code),
          label: Text(
            label,
            style: TextStyle(
              fontSize: 16,
              fontWeight: FontWeight.bold,
            ),
          ).tr(),
          style: TextButton.styleFrom(
            padding: const EdgeInsets.all(12.0),
            backgroundColor: buttonColor ?? ThemeConfig.qrButtonColor, // Set the background color
            minimumSize: const Size.fromHeight(60),
            shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(12), // Ensure the border radius is circular
            ),
          ),
        ),
      ),
    );
  }
}
