import 'package:flutter/material.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/AppRouter.gr.dart';
import 'package:fstapp/pages/utility/HtmlEditorPage.dart';
import 'package:fstapp/widgets/HtmlView.dart';
import 'package:fstapp/RouterService.dart';

class DescriptionWithEdit extends StatelessWidget {
  final String description;
  String? defaultDescription;
  final ValueChanged<String> onDescriptionChanged;

  DescriptionWithEdit({
    super.key,
    required this.description,
    this.defaultDescription,
    required this.onDescriptionChanged,
  });

  @override
  Widget build(BuildContext context) {
    defaultDescription ??= "Description".tr();
    return Padding(
      padding: const EdgeInsets.only(top: 8.0),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Expanded(
            child: HtmlView(
              html: description,
              fontSize: 14,
            ),
          ),
          SizedBox.square(dimension: 12,),
          IconButton(
            icon: const Icon(Icons.edit),
            onPressed: () async {
              final result = await RouterService.navigatePageInfo(
                context,
                HtmlEditorRoute(
                  content: {
                    HtmlEditorPage.parContent:
                    description == defaultDescription ? "" : description,
                  },
                ),
              );
              if (result != null) {
                onDescriptionChanged(result as String);
              }
            },
          ),
        ],
      ),
    );
  }
}
