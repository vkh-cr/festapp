import 'package:easy_localization/easy_localization.dart';
import 'package:festapp/appConfig.dart';
import 'package:flutter/material.dart';
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
}
