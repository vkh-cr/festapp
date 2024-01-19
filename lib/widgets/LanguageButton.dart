import 'package:avapp/services/DialogHelper.dart';
import 'package:avapp/appConfig.dart';
import 'package:flutter/material.dart';

class LanguageButton extends StatelessWidget {
  const LanguageButton({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Visibility(
      visible: AppConfig.AvailableLanguages.length>1,
      child: Padding(
        padding: const EdgeInsets.all(6),
        child: IconButton(onPressed: () async {
          await DialogHelper.chooseLanguage(context);
        }, icon: const Icon(Icons.translate)),
      ),
    );
  }
}