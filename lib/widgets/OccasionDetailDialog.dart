import 'package:flutter/material.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/dataModels/OccasionModel.dart';
import 'package:fstapp/widgets/HtmlView.dart';
import 'package:intl/intl.dart';
import 'package:fstapp/styles/StylesConfig.dart';

class OccasionDetailDialog extends StatelessWidget {
  final OccasionModel occasion;

  const OccasionDetailDialog({Key? key, required this.occasion})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Dialog(
      child: ConstrainedBox(
        constraints: BoxConstraints(maxWidth: StylesConfig.formMaxWidth),
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: SingleChildScrollView(
            child: Column(
              mainAxisSize: MainAxisSize.min,
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                SelectableText(
                  occasion.title ?? '',
                  style: TextStyle(fontSize: 22, fontWeight: FontWeight.bold),
                ),
                const SizedBox(height: 8),
                SelectableText(
                  '${DateFormat.yMMMd().format(occasion.startTime!)} - ${DateFormat.yMMMd().format(occasion.endTime!)}',
                  style: TextStyle(fontSize: 16),
                ),
                const SizedBox(height: 16),
                HtmlView(
                  html: occasion.description ?? '',
                  isSelectable: true,
                ),
                const SizedBox(height: 16),
                OutlinedButton(
                  onPressed: () {
                    // Implement reservation action.
                    Navigator.of(context).pop();
                  },
                  child: Text("Reserve a spot").tr(),
                  style: OutlinedButton.styleFrom(
                    padding: EdgeInsets.symmetric(vertical: 16, horizontal: 20),
                    textStyle: TextStyle(fontSize: 16),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
