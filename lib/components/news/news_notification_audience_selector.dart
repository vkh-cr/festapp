import 'package:flutter/material.dart';
import 'package:fstapp/app_config.dart';
import 'package:fstapp/components/news/news_strings.dart';

enum NewsNotificationAudience { none, self, everyone }

/// A single decision point for the delivery mode. Keeping "no push" alongside
/// the two audiences avoids contradictory checkbox + recipient states.
class NewsNotificationAudienceSelector extends StatelessWidget {
  final NewsNotificationAudience? selected;
  final ValueChanged<NewsNotificationAudience> onChanged;
  final String currentUserIdentity;
  final bool allowEveryone;

  const NewsNotificationAudienceSelector({
    required this.selected,
    required this.onChanged,
    required this.currentUserIdentity,
    required this.allowEveryone,
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        const SizedBox(height: 12),
        Text(
          NewsStrings.recipientChoiceTitle,
          style: Theme.of(context).textTheme.titleMedium?.copyWith(
                fontWeight: FontWeight.bold,
              ),
        ),
        const SizedBox(height: 4),
        Text(
          NewsStrings.recipientChoiceRequired,
          style: Theme.of(context).textTheme.bodySmall,
        ),
        const SizedBox(height: 10),
        _AudienceOption(
          selected: selected == NewsNotificationAudience.none,
          icon: Icons.notifications_off_outlined,
          title: NewsStrings.newsWithoutNotification,
          detail: NewsStrings.newsWithoutNotificationDetail,
          onTap: () => onChanged(NewsNotificationAudience.none),
        ),
        const SizedBox(height: 8),
        _AudienceOption(
          selected: selected == NewsNotificationAudience.self,
          icon: Icons.person_outline,
          title: NewsStrings.notificationAudienceSelf,
          detail: NewsStrings.notificationAudienceSelfDetail(
            currentUserIdentity,
          ),
          onTap: () => onChanged(NewsNotificationAudience.self),
        ),
        if (allowEveryone) ...[
          const SizedBox(height: 8),
          _AudienceOption(
            selected: selected == NewsNotificationAudience.everyone,
            icon: Icons.groups_outlined,
            title: NewsStrings.notificationAudienceEveryone(
              AppConfig.appName,
            ),
            detail: NewsStrings.notificationAudienceEveryoneDetail,
            onTap: () => onChanged(NewsNotificationAudience.everyone),
          ),
        ],
      ],
    );
  }
}

class _AudienceOption extends StatelessWidget {
  final bool selected;
  final IconData icon;
  final String title;
  final String detail;
  final VoidCallback onTap;

  const _AudienceOption({
    required this.selected,
    required this.icon,
    required this.title,
    required this.detail,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    final colors = Theme.of(context).colorScheme;
    return Semantics(
      button: true,
      selected: selected,
      child: Material(
        color: selected ? colors.secondaryContainer : colors.surface,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(12),
          side: BorderSide(
            color: selected ? colors.primary : colors.outlineVariant,
            width: selected ? 2 : 1,
          ),
        ),
        clipBehavior: Clip.antiAlias,
        child: InkWell(
          onTap: onTap,
          child: Padding(
            padding: const EdgeInsets.all(14),
            child: Row(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Icon(icon, color: selected ? colors.primary : null),
                const SizedBox(width: 12),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        title,
                        style: Theme.of(context).textTheme.titleSmall?.copyWith(
                              fontWeight: FontWeight.bold,
                            ),
                      ),
                      const SizedBox(height: 3),
                      Text(detail,
                          style: Theme.of(context).textTheme.bodySmall),
                    ],
                  ),
                ),
                const SizedBox(width: 8),
                Icon(
                  selected
                      ? Icons.radio_button_checked
                      : Icons.radio_button_unchecked,
                  color: selected ? colors.primary : colors.onSurfaceVariant,
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
