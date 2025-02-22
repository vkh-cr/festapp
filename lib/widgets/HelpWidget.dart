import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/themeConfig.dart';

class HelpWidget extends StatelessWidget {
  final String title;
  final String content;

  const HelpWidget({
    Key? key,
    required this.title,
    required this.content,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return IconButton(
      icon: Icon(
        Icons.help_outline,
        color: ThemeConfig.blackColor(context),
      ),
      onPressed: () {
        showDialog(
          context: context,
          builder: (context) => AlertDialog(
            title: Text(title),
            content: Text(content),
            actions: [
              TextButton(
                onPressed: () => Navigator.of(context).pop(),
                child: Text("Ok".tr()),
              ),
            ],
          ),
        );
      },
    );
  }
}
