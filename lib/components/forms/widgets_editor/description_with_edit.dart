import 'package:flutter/material.dart';
import 'package:fstapp/components/_shared/common_strings.dart';
import 'package:fstapp/app_router.gr.dart';
import 'package:fstapp/components/html/html_editor_page.dart';
import 'package:fstapp/components/html/html_view.dart';
import 'package:fstapp/router_service.dart';

class DescriptionWithEdit extends StatelessWidget {
  final String description;
  String? defaultDescription;
  final int occasionId;
  final ValueChanged<String> onDescriptionChanged;

  DescriptionWithEdit({
    super.key,
    required this.description,
    this.defaultDescription,
    required this.onDescriptionChanged,
    required this.occasionId,
  });

  @override
  Widget build(BuildContext context) {
    defaultDescription ??= CommonStrings.description;
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
          SizedBox.square(
            dimension: 12,
          ),
          IconButton(
            icon: const Icon(Icons.edit),
            onPressed: () async {
              final result = await RouterService.navigatePageInfo(
                context,
                HtmlEditorRoute(content: {
                  HtmlEditorPage.parContent:
                      description == defaultDescription ? "" : description,
                }, occasionId: occasionId),
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
