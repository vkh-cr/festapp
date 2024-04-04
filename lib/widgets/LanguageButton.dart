import 'package:festapp/services/DialogHelper.dart';
import 'package:festapp/appConfig.dart';
import 'package:flutter/material.dart';

class LanguageButton extends StatelessWidget {
  const LanguageButton({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Visibility(
      visible: AppConfig.availableLanguages.length>1,
      child: Padding(
        padding: const EdgeInsets.all(6),
        child: IconButton(onPressed: () async {
          await DialogHelper.chooseLanguage(context);
        }, icon: const Icon(Icons.translate)),
      ),
    );
  }
}