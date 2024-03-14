import 'package:festapp/appConfig.dart';
import 'package:flutter/material.dart';

class ButtonsHelper {
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
