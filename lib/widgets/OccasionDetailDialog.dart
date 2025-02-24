import 'package:flutter/material.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/RouterService.dart';
import 'package:fstapp/dataModels/OccasionModel.dart';
import 'package:fstapp/dataServices/AppConfigService.dart';
import 'package:fstapp/dataServices/RightsService.dart';
import 'package:fstapp/dataServices/featureService.dart';
import 'package:fstapp/pages/form/FormPage.dart';
import 'package:fstapp/services/LaunchUrlService.dart';
import 'package:fstapp/themeConfig.dart';
import 'package:fstapp/widgets/HtmlView.dart';
import 'package:intl/intl.dart';
import 'package:fstapp/styles/StylesConfig.dart';

class OccasionDetailDialog extends StatelessWidget {
  final OccasionModel occasion;

  const OccasionDetailDialog({super.key, required this.occasion});

  /// Unified reserve button logic.
  void _onReservePressed(BuildContext context) async {
    var details = FeatureService.getFeatureDetails(
      FeatureService.form,
      fromFeatures: occasion.features,
    );
    if (details?[FeatureService.formUseExternal] == true) {
      final externalUrl = details?[FeatureService.formExternalLink];
      if (externalUrl != null && externalUrl.isNotEmpty) {
        await LaunchUrlService.launchURL(externalUrl);
      }
    } else {
      RouterService.navigate(
        context,
        "${FormPage.ROUTE}/${occasion.form!.link!}",
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    final unifiedButtonStyle = OutlinedButton.styleFrom(
      padding: const EdgeInsets.symmetric(vertical: 10, horizontal: 16),
      textStyle: Theme.of(context)
          .textTheme
          .labelLarge
          ?.copyWith(fontSize: 16),
      side: BorderSide(
        color: ThemeConfig.blackColor(context),
        width: 1.0,
      ),
      minimumSize: const Size.fromHeight(50),
    );

    return Dialog(
      elevation: 16,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(12.0),
        side: BorderSide(
          color: Colors.white.withOpacity(0.2),
        ),
      ),
      child: ConstrainedBox(
        constraints: BoxConstraints(maxWidth: StylesConfig.formMaxWidthMid),
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Stack(
            children: [
              SingleChildScrollView(
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                  children: [
                    const SizedBox(height: 32), // Space for close button
                    SelectableText(
                      occasion.title ?? '',
                      style: Theme.of(context)
                          .textTheme
                          .titleLarge
                          ?.copyWith(fontWeight: FontWeight.w600),
                    ),
                    const SizedBox(height: 8),
                    SelectableText(
                      '${DateFormat.yMMMd(Localizations.localeOf(context).languageCode).format(occasion.startTime!)} - '
                          '${DateFormat.yMMMd(Localizations.localeOf(context).languageCode).format(occasion.endTime!)}',
                      style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                        color: Theme.of(context).hintColor,
                      ),
                    ),
                    const SizedBox(height: 16),
                    Divider(
                      height: 1,
                      thickness: 0.5,
                      color: Colors.white.withOpacity(0.3),
                    ),
                    const SizedBox(height: 16),
                    Padding(
                      padding: const EdgeInsets.all(16.0),
                      child: HtmlView(
                        html: occasion.description ?? '',
                        isSelectable: true,
                      ),
                    ),
                    const SizedBox(height: 24),
                    if (occasion.isOpen)
                      Row(
                        children: [
                          Expanded(
                            child: OutlinedButton(
                              onPressed: () => _onReservePressed(context),
                              style: unifiedButtonStyle,
                              child: Text(
                                "Reserve a spot",
                                maxLines: 1,
                                overflow: TextOverflow.ellipsis,
                              ).tr(),
                            ),
                          ),
                          const SizedBox(width: 12),
                          Expanded(
                            child: OutlinedButton(
                              onPressed: () async {
                                await RightsService.updateOccasionData(
                                    occasion.link!);
                                await RouterService.navigateOccasion(context, "");
                                Navigator.of(context).pop();
                              },
                              style: unifiedButtonStyle,
                              child: Text(
                                "Detail",
                                maxLines: 1,
                                overflow: TextOverflow.ellipsis,
                              ).tr(),
                            ),
                          ),
                        ],
                      )
                    else
                      OutlinedButton(
                        onPressed: () => _onReservePressed(context),
                        style: unifiedButtonStyle,
                        child: Text(
                          "Reserve a spot",
                          maxLines: 1,
                          overflow: TextOverflow.ellipsis,
                        ).tr(),
                      ),
                    const SizedBox(height: 24),
                  ],
                ),
              ),
              Positioned(
                top: 0,
                right: 0,
                child: IconButton(
                  icon: Icon(
                    Icons.close,
                    size: 24,
                    color: ThemeConfig.blackColor(context).withOpacity(0.8),
                  ),
                  splashRadius: 20,
                  onPressed: () => Navigator.of(context).pop(),
                  tooltip: 'Close'.tr(), // Accessibility feature
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
