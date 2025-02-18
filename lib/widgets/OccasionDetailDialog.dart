import 'package:flutter/material.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/RouterService.dart';
import 'package:fstapp/dataModels/OccasionModel.dart';
import 'package:fstapp/dataServices/RightsService.dart';
import 'package:fstapp/pages/form/FormPage.dart';
import 'package:fstapp/widgets/HtmlView.dart';
import 'package:intl/intl.dart';
import 'package:fstapp/styles/StylesConfig.dart';

class OccasionDetailDialog extends StatelessWidget {
  final OccasionModel occasion;

  const OccasionDetailDialog({super.key, required this.occasion});

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
                if (occasion.isOpen)
                  Row(
                    children: [
                      Expanded(
                        child: OutlinedButton(
                          onPressed: () {
                            RouterService.navigate(
                              context,
                              "${FormPage.ROUTE}/${occasion.form!.link!}",
                            );
                            Navigator.of(context).pop();
                          },
                          style: OutlinedButton.styleFrom(
                            padding: EdgeInsets.symmetric(
                                vertical: 16, horizontal: 20),
                            textStyle: TextStyle(fontSize: 16),
                          ),
                          child: Text("Reserve a spot").tr(),
                        ),
                      ),
                      const SizedBox(width: 8),
                      Expanded(
                        child: OutlinedButton(
                          onPressed: () async {
                            await RightsService.updateOccasionData(occasion.link!);
                            await RouterService.navigateOccasion(context, "");
                            Navigator.of(context).pop();
                          },
                          style: OutlinedButton.styleFrom(
                            padding: EdgeInsets.symmetric(
                                vertical: 16, horizontal: 20),
                            textStyle: TextStyle(fontSize: 16),
                          ),
                          child: Text("Detail").tr(),
                        ),
                      ),
                    ],
                  )
                else
                  OutlinedButton(
                    onPressed: () {
                      RouterService.navigate(
                        context, "${FormPage.ROUTE}/${occasion.form!.link!}",
                      );
                      Navigator.of(context).pop();
                    },
                    style: OutlinedButton.styleFrom(
                      padding: EdgeInsets.symmetric(
                          vertical: 16, horizontal: 20),
                      textStyle: TextStyle(fontSize: 16),
                    ),
                    child: Text("Reserve a spot").tr(),
                  ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
