import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/appConfig.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/styles/Styles.dart';
import 'package:pwa_install/pwa_install.dart';

class ButtonsHelper {
  static PopupMenuButton<String> pwaInstallButton() {
    return PopupMenuButton<String>(
      icon: const Icon(Icons.more_vert),
      onSelected: (t){PWAInstall().promptInstall_();},
      itemBuilder: (BuildContext context) {
        return {"Install".tr()}.map((String choice) {
          return PopupMenuItem<String>(
            value: choice,
            child: Text(choice),
          );
        }).toList();
      },
    );
  }

  static getAddToMyProgramButton(
      bool? canSaveToMyProgram,
      Future<void> Function() addToMyProgram,
      Future<void> Function() removeFromMyProgram,
      [Color? colorIn]) {
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
                icon: const Icon(Icons.add_circle_outline)),
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
    Color color = bigButtonColor,
    Color textColor = Colors.black,
    bool isEnabled = true,
    double height = 50.0,
    double width = 250.0,
  }) {
    return Container(
      height: height,
      width: width,
      decoration: BoxDecoration(
        color: isEnabled ? color : Colors.black38,
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

  static Widget bottomBarButton({required String text, required VoidCallback onPressed}) {
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
}
