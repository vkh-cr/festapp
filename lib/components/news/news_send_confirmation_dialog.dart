import 'package:flutter/material.dart';
import 'package:fstapp/app_config.dart';
import 'package:fstapp/components/html/html_helper.dart';
import 'package:fstapp/components/news/news_strings.dart';

/// Final, explicit checkpoint before a push notification leaves the app.
///
/// Push delivery is not reversible, so the dialog keeps the three pieces of
/// information an editor needs at the decision point together: what will
/// happen, who the audience is, and what the notification will look like.
class NewsSendConfirmationDialog extends StatelessWidget {
  final bool isTest;
  final bool isSelfOnly;
  final String recipientIdentity;
  final String heading;
  final String htmlContent;

  const NewsSendConfirmationDialog({
    required this.isTest,
    required this.isSelfOnly,
    required this.recipientIdentity,
    required this.heading,
    required this.htmlContent,
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    final colorScheme = Theme.of(context).colorScheme;
    final message = HtmlHelper.htmlToSnippet(htmlContent, maxLen: 220);

    return AlertDialog(
      icon: Icon(
        isTest ? Icons.science_outlined : Icons.notifications_active_outlined,
      ),
      title: Text(
        isTest ? NewsStrings.confirmTestTitle : NewsStrings.confirmSendTitle,
      ),
      content: SingleChildScrollView(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Text(
              isTest
                  ? NewsStrings.testExplanation
                  : NewsStrings.sendExplanation,
            ),
            const SizedBox(height: 16),
            _InfoCard(
              icon: isSelfOnly ? Icons.person_outline : Icons.groups_outlined,
              label: NewsStrings.notificationAudienceTitle,
              title: isSelfOnly
                  ? NewsStrings.notificationAudienceSelf
                  : NewsStrings.notificationAudienceEveryone(
                      AppConfig.appName,
                    ),
              detail: isSelfOnly
                  ? recipientIdentity
                  : NewsStrings.notificationAudienceEveryoneDetail,
            ),
            const SizedBox(height: 12),
            Container(
              padding: const EdgeInsets.all(14),
              decoration: BoxDecoration(
                border: Border.all(color: colorScheme.outlineVariant),
                borderRadius: BorderRadius.circular(12),
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    NewsStrings.notificationPreviewTitle,
                    style: Theme.of(context).textTheme.labelLarge?.copyWith(
                          color: colorScheme.primary,
                        ),
                  ),
                  const SizedBox(height: 8),
                  Text(
                    heading,
                    style: Theme.of(context).textTheme.titleSmall?.copyWith(
                          fontWeight: FontWeight.bold,
                        ),
                  ),
                  if (message.isNotEmpty) ...[
                    const SizedBox(height: 4),
                    Text(message),
                  ],
                ],
              ),
            ),
            const SizedBox(height: 12),
            Row(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Icon(
                  Icons.info_outline,
                  size: 18,
                  color: colorScheme.onSurfaceVariant,
                ),
                const SizedBox(width: 8),
                Expanded(
                  child: Text(
                    isTest
                        ? NewsStrings.testNotPublished
                        : NewsStrings.notificationCannotBeRecalled,
                    style: Theme.of(context).textTheme.bodySmall?.copyWith(
                          color: colorScheme.onSurfaceVariant,
                        ),
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
      actions: [
        TextButton(
          onPressed: () => Navigator.of(context).pop(false),
          child: Text(NewsStrings.cancel),
        ),
        FilledButton.icon(
          onPressed: () => Navigator.of(context).pop(true),
          icon: Icon(isTest ? Icons.send_outlined : Icons.campaign_outlined),
          label: Text(
            isTest ? NewsStrings.confirmTest : NewsStrings.confirmSend,
          ),
        ),
      ],
    );
  }
}

class _InfoCard extends StatelessWidget {
  final IconData icon;
  final String label;
  final String title;
  final String detail;

  const _InfoCard({
    required this.icon,
    required this.label,
    required this.title,
    required this.detail,
  });

  @override
  Widget build(BuildContext context) {
    final colorScheme = Theme.of(context).colorScheme;
    return Container(
      padding: const EdgeInsets.all(14),
      decoration: BoxDecoration(
        color: colorScheme.secondaryContainer,
        borderRadius: BorderRadius.circular(12),
      ),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Icon(icon, color: colorScheme.onSecondaryContainer),
          const SizedBox(width: 12),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  label,
                  style: Theme.of(context).textTheme.labelMedium?.copyWith(
                        color: colorScheme.onSecondaryContainer,
                      ),
                ),
                const SizedBox(height: 2),
                Text(
                  title,
                  style: Theme.of(context).textTheme.titleSmall?.copyWith(
                        color: colorScheme.onSecondaryContainer,
                        fontWeight: FontWeight.bold,
                      ),
                ),
                const SizedBox(height: 3),
                Text(
                  detail,
                  style: Theme.of(context).textTheme.bodySmall?.copyWith(
                        color: colorScheme.onSecondaryContainer,
                      ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
