import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/app_config.dart';
import 'package:fstapp/components/eshop/orders_strings.dart';
import 'package:fstapp/components/features/feature_constants.dart';
import 'package:fstapp/components/features/feature_service.dart';
import 'package:fstapp/components/features/features_strings.dart';
import 'package:fstapp/components/forms/form_strings.dart';
import 'package:fstapp/data_models/occasion_model.dart';
import 'package:fstapp/services/time_helper.dart';
import 'package:fstapp/styles/styles_config.dart';


class OccasionEditCard extends StatelessWidget {
  final OccasionModel occasion;
  final VoidCallback onTap;
  final VoidCallback onCreateCopy;
  final bool isPresent;

  const OccasionEditCard({
    super.key,
    required this.occasion,
    required this.onTap,
    required this.onCreateCopy,
    this.isPresent = false,
  });

  /// Builds a single stat widget with an icon, value, and tooltip.
  Widget _buildStat(BuildContext context, {required IconData icon, required String value, required String tooltip}) {
    final theme = Theme.of(context);
    final defaultColor = theme.colorScheme.onSurface.withOpacity(0.7);
    final statsTextStyle = theme.textTheme.bodySmall?.copyWith(color: defaultColor);

    return Tooltip(
      message: tooltip,
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          Icon(icon, size: 15.0, color: defaultColor),
          const SizedBox(width: 4.0),
          Text(value, style: statsTextStyle),
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final isDarkMode = theme.brightness == Brightness.dark;
    final onSurfaceColor = theme.colorScheme.onSurface;

    final cardColor = isDarkMode ? Colors.grey[850] : theme.cardColor;

    // Use a glowing primary color border for present events, otherwise a standard border.
    final borderColor = isPresent
        ? theme.primaryColor
        : (isDarkMode ? Colors.grey[700]! : theme.dividerColor);
    final borderWidth = isPresent ? 2.5 : 1.0;

    return Card(
      elevation: 0,
      color: cardColor,
      clipBehavior: Clip.antiAlias,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(StylesConfig.commonRoundness),
        side: BorderSide(color: borderColor, width: borderWidth),
      ),
      child: InkWell(
        onTap: onTap,
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 8.0, vertical: 8.0),
          child: Row(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              PopupMenuButton<String>(
                elevation: 0,
                icon: Icon(Icons.more_vert, color: onSurfaceColor.withOpacity(0.7)),
                onSelected: (value) {
                  if (value == "create_copy") {
                    onCreateCopy();
                  }
                },
                itemBuilder: (BuildContext context) => [
                  PopupMenuItem(
                    value: "create_copy",
                    child: Text(FormStrings.createCopy.tr()),
                  ),
                ],
              ),
              const SizedBox(width: 4),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Text(
                      TimeHelper.getMinimalisticDateRange(
                          context, occasion.startTime!, occasion.endTime!),
                      style: theme.textTheme.bodySmall?.copyWith(
                        color: theme.colorScheme.primary,
                        fontWeight: FontWeight.bold,
                      ),
                      maxLines: 1,
                      overflow: TextOverflow.ellipsis,
                    ),
                    const SizedBox(height: 4),
                    Text(
                      occasion.title ?? '',
                      style: theme.textTheme.titleMedium?.copyWith(
                        fontWeight: FontWeight.bold,
                      ),
                      maxLines: 1,
                      overflow: TextOverflow.ellipsis,
                    ),
                    if (occasion.stats != null) ...[
                      if (FeatureService.isFeatureEnabled(FeatureConstants.form, features: occasion.features)) ...[
                        const SizedBox(height: 8),
                        Wrap(
                          spacing: 12.0,
                          runSpacing: 4.0,
                          children: [
                            _buildStat(context, icon: Icons.chat_bubble, value: occasion.stats!.total.toString(), tooltip: FormStrings.responses.tr()),
                            _buildStat(context, icon: Icons.check_circle_outline, value: (occasion.stats!.paidOrSent + occasion.stats!.used).toString(), tooltip: OrdersStrings.gridPaidOrSent.tr()),
                            _buildStat(context, icon: Icons.shopping_cart_outlined, value: occasion.stats!.ordered.toString(), tooltip: OrdersStrings.gridOrdered.tr()),
                            _buildStat(context, icon: Icons.cancel_outlined, value: occasion.stats!.storno.toString(), tooltip: OrdersStrings.gridCancelled.tr()),
                          ],
                        )
                      ] else ...[
                        const SizedBox(height: 8),
                        Wrap(
                          spacing: 12.0,
                          runSpacing: 4.0,
                          children: [
                            _buildStat(context, icon: Icons.group_outlined, value: occasion.stats!.users.toString(), tooltip: "Users".tr()),
                          ],
                        )
                      ],
                    ],
                  ],
                ),
              ),
              const SizedBox(width: 8),
              Icon(Icons.chevron_right, color: onSurfaceColor.withOpacity(0.5)),
              const SizedBox(width: 4),
            ],
          ),
        ),
      ),
    );
  }
}