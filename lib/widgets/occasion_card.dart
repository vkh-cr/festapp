import 'dart:ui';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/app_config.dart';
import 'package:fstapp/components/features/form_feature.dart';
import 'package:fstapp/router_service.dart';
import 'package:fstapp/data_models/tb.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/components/features/feature_constants.dart';
import 'package:fstapp/components/features/feature_service.dart';
import 'package:fstapp/services/html_helper.dart';
import 'package:fstapp/services/time_helper.dart';
import 'package:fstapp/data_models/occasion_model.dart';
import 'package:fstapp/dialogs/occasion_detail_dialog.dart';
import 'package:cached_network_image/cached_network_image.dart';

class OccasionCard extends StatefulWidget {
  static const double kCardBorderRadius = 15.0;
  static const double kPresentBorderWidth = 4.0;
  static const double kMinCardWidth = 300.0;
  static const double kMinCardHeight = 150.0;
  static const Duration kAnimationDuration = Duration(milliseconds: 200);

  // Back to 16:9 aspect ratio
  static const double kCardWidth = 16.0;
  static const double kCardHeight = 9.0;

  final OccasionModel occasion;
  final bool isPast;
  final bool isPresent;

  const OccasionCard({
    super.key,
    required this.occasion,
    this.isPast = false,
    this.isPresent = false,
  });

  @override
  _OccasionCardState createState() => _OccasionCardState();
}

class _OccasionCardState extends State<OccasionCard> {
  bool isHovered = false;

  /// Builds the new button with a blurred background.
  Widget _buildBlurredButton(
      {required String text, required VoidCallback onPressed, required double scale}) {
    // Use RepaintBoundary to cache the blur filter
    return RepaintBoundary(
      child: ClipRRect(
        borderRadius: BorderRadius.circular(12.0 * scale),
        child: BackdropFilter(
          filter: ImageFilter.blur(sigmaX: 5, sigmaY: 5),
          child: InkWell(
            onTap: onPressed,
            child: Container(
              padding: EdgeInsets.symmetric(
                  horizontal: 12 * scale, vertical: 6 * scale),
              decoration: BoxDecoration(
                color: Colors.black.withOpacity(0.4),
              ),
              child: Text(
                text,
                style: TextStyle(color: Colors.white, fontSize: 14 * scale),
              ),
            ),
          ),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final Border? border = widget.isPresent
        ? Border.all(
      color: Theme.of(context).primaryColor,
      width: OccasionCard.kPresentBorderWidth,
    )
        : null;

    final double innerRadius = widget.isPresent
        ? OccasionCard.kCardBorderRadius - OccasionCard.kPresentBorderWidth
        : OccasionCard.kCardBorderRadius;

    // --- Feature & Button Logic ---
    var details = FeatureService.getFeatureDetails(
      FeatureConstants.form,
      features: widget.occasion.features,
    );
    String? externalPrice =
    details is FormFeature ? details.formExternalPrice : null;

    final bool hasFormFeature = FeatureService.isFeatureEnabled(
        FeatureConstants.form,
        features: widget.occasion.features);
    final bool isDescriptionEmpty =
    HtmlHelper.isHtmlEmptyOrNull(widget.occasion.description);
    final String reserveTitle = details is FormFeature
        ? details.reserveButtonTitle ?? "Reserve a spot".tr()
        : "Reserve a spot".tr();
    final String detailTitle = "Detail".tr();
    final bool skipDialog = hasFormFeature && isDescriptionEmpty;
    final String buttonText = skipDialog ? reserveTitle : detailTitle;
    final bool showButton = hasFormFeature || AppConfig.isAllUnit;
    // --- End of Logic ---

    // Button press logic
    void handleButtonPress() async {
      if (skipDialog) {
        await OccasionDetailDialog.handleReserveAction(context, widget.occasion);
      } else if (hasFormFeature && !isDescriptionEmpty) {
        showDialog(
          context: context,
          builder: (context) => OccasionDetailDialog(occasion: widget.occasion),
        );
      } else if (!hasFormFeature) {
        try {
          await RightsService.updateAppData(
              link: widget.occasion.link, force: true);
        } catch (e) {
          // ignore
        }
        await RouterService.navigateOccasion(context, "");
      }
    }

    return MouseRegion(
      onEnter: (_) => setState(() => isHovered = true),
      onExit: (_) => setState(() => isHovered = false),
      child: RepaintBoundary(
        // ← cache the entire card (including its BackdropFilters)
        child: LayoutBuilder(builder: (context, constraints) {
          final double widthScale =
          (constraints.maxWidth / OccasionCard.kMinCardWidth)
              .clamp(1.0, 1.5);
          final double heightScale =
          (constraints.maxHeight / OccasionCard.kMinCardHeight)
              .clamp(1.0, 1.2);
          final double buttonScale = (widthScale + heightScale) / 2;

          return ConstrainedBox(
            constraints: const BoxConstraints(
              minWidth: OccasionCard.kMinCardWidth,
              minHeight: OccasionCard.kMinCardHeight,
            ),
            child: AnimatedContainer(
              duration: OccasionCard.kAnimationDuration,
              decoration: BoxDecoration(
                borderRadius:
                BorderRadius.circular(OccasionCard.kCardBorderRadius),
                border: border,
                boxShadow: [
                  if (widget.isPresent)
                    BoxShadow(
                      color: Theme.of(context).primaryColor.withOpacity(0.6),
                      blurRadius: 20,
                      spreadRadius: 4,
                    ),
                  BoxShadow(
                    color: isHovered ? Colors.black26 : Colors.black12,
                    blurRadius: isHovered ? 8 : 4,
                    offset: isHovered ? const Offset(0, 4) : const Offset(0, 2),
                  ),
                ],
              ),
              child: ClipRRect(
                borderRadius: BorderRadius.circular(innerRadius),
                child: Stack(
                  children: [
                    if (widget.occasion.data?[Tb.occasions.data_image] != null)
                      Positioned.fill(
                        child: CachedNetworkImage(
                          imageUrl:
                          widget.occasion.data![Tb.occasions.data_image]!,
                          fit: BoxFit.cover,
                        ),
                      ),
                    if (widget.isPast)
                      Positioned.fill(
                        child: Container(
                          color: Colors.grey.withOpacity(0.6),
                        ),
                      ),

                    // Top overlay with cached blur (Date, Title, and Price)
                    Positioned(
                      left: 0,
                      right: 0,
                      top: 0,
                      child: RepaintBoundary(
                        // ← cache this blurred header only
                        child: ClipRect(
                          child: BackdropFilter(
                            filter: ImageFilter.blur(sigmaX: 5, sigmaY: 5),
                            child: Container(
                              padding: const EdgeInsets.all(8.0),
                              color: Colors.black.withOpacity(0.4),
                              child: Row(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  Expanded(
                                    child: Column(
                                      crossAxisAlignment:
                                      CrossAxisAlignment.start,
                                      mainAxisSize: MainAxisSize.min,
                                      children: [
                                        SelectableText(
                                          TimeHelper.getMinimalisticDateRange(
                                            context,
                                            widget.occasion.startTime!,
                                            widget.occasion.endTime!,
                                          ),
                                          style: const TextStyle(
                                            color: Colors.white,
                                            fontSize: 14,
                                          ),
                                        ),
                                        const SizedBox(height: 4),
                                        SelectableText(
                                          widget.occasion.title ?? '',
                                          style: const TextStyle(
                                            color: Colors.white,
                                            fontSize: 18,
                                            fontWeight: FontWeight.bold,
                                          ),
                                        ),
                                      ],
                                    ),
                                  ),
                                  // External price badge (no blur, just container)
                                  if (externalPrice != null &&
                                      externalPrice.trim().isNotEmpty)
                                    Container(
                                      margin: const EdgeInsets.only(left: 8.0),
                                      padding: const EdgeInsets.symmetric(
                                          horizontal: 12, vertical: 6),
                                      decoration: BoxDecoration(
                                        color: Colors.black.withOpacity(0.6),
                                        borderRadius: BorderRadius.circular(12),
                                      ),
                                      child: SelectableText(
                                        externalPrice,
                                        style: const TextStyle(
                                          color: Colors.white,
                                          fontWeight: FontWeight.bold,
                                          fontSize: 18,
                                        ),
                                      ),
                                    ),
                                ],
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),

                    // **NEW** Blurred Button
                    if (showButton)
                      Positioned(
                        bottom: 8 * buttonScale,
                        right: 10 * buttonScale,
                        child: _buildBlurredButton(
                          text: buttonText,
                          onPressed: handleButtonPress,
                          scale: buttonScale, // Scale the button with the card
                        ),
                      ),
                  ],
                ),
              ),
            ),
          );
        }),
      ),
    );
  }
}