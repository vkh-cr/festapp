import 'dart:ui';

import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/dataModels/EmailTemplateModel.dart';
import 'package:fstapp/themeConfig.dart';

class EmailTemplateCard extends StatelessWidget {
  final EmailTemplateModel template;
  final VoidCallback onEdit;

  const EmailTemplateCard({
    Key? key,
    required this.template,
    required this.onEdit,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    // Fixed header height for the upper part.
    const double headerHeight = 20;
    final theme = Theme.of(context);

    return ConstrainedBox(
      constraints: const BoxConstraints(minWidth: 180, minHeight: 120),
      child: Material(
        clipBehavior: Clip.antiAlias,
        elevation: 2,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(10.0),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            // Upper fixed-height header with primary color.
            Container(
              height: headerHeight,
              color: theme.primaryColor,
            ),
            // Bottom area that expands to fill the available space.
            Expanded(
              child: Container(
                padding: const EdgeInsets.all(8.0),
                decoration: BoxDecoration(
                  // Use primary color with transparency for a light overlay.
                  color: theme.primaryColor.withOpacityUniversal(context, 0.2),
                  borderRadius: const BorderRadius.only(
                    bottomLeft: Radius.circular(10.0),
                    bottomRight: Radius.circular(10.0),
                  ),
                ),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    // Template title.
                    Text(
                      template.getUsageDetails()['title'] ?? '',
                      style: TextStyle(
                        color: ThemeConfig.blackColor(context),
                        fontSize: 16,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    const SizedBox(height: 4),
                    // Usage description.
                    Text(
                      template.getUsageDetails()['description'] ?? '',
                      style: TextStyle(
                        color: ThemeConfig.blackColor(context),
                        fontSize: 12,
                      ),
                    ),
                    const SizedBox(height: 8),
                    // Edit button.
                    Row(
                      children: [
                        TextButton.icon(
                          onPressed: onEdit,
                          icon: Icon(Icons.edit, color: ThemeConfig.blackColor(context)),
                          label: Text(
                            'Edit'.tr(),
                            style: TextStyle(color: ThemeConfig.blackColor(context)),
                          ),
                        ),
                      ],
                    ),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
